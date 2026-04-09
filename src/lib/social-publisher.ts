import type { AdminPostRecord, PlatformPublishResult, SocialPlatform } from '@/lib/admin-store';

function nowIso() {
  return new Date().toISOString();
}

function isDemoMode() {
  return process.env.SOCIAL_DEMO_MODE !== 'false';
}

async function publishViaWebhook(
  webhookUrl: string,
  platform: SocialPlatform,
  post: AdminPostRecord,
  siteOrigin: string,
) {
  const mediaUrl = post.media?.url
    ? new URL(post.media.url, siteOrigin).toString()
    : undefined;
  const message = `${post.title}\n\n${post.description}`;
  const payloadObject = {
    platform,
    title: post.title,
    description: post.description,
    message,
    mediaUrl,
    media: post.media
      ? {
          ...post.media,
          publicUrl: mediaUrl,
        }
      : undefined,
    createdAt: post.createdAt,
    source: 'gutech-admin',
  };

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...payloadObject,
      payload: JSON.stringify(payloadObject),
      text: message,
      photo: mediaUrl ?? '',
    }),
  });

  if (!response.ok) {
    throw new Error(`Webhook failed with status ${response.status}`);
  }
}

export async function publishToPlatforms(
  post: AdminPostRecord,
  siteOrigin: string,
): Promise<PlatformPublishResult[]> {
  const results: PlatformPublishResult[] = [];

  for (const platform of post.platforms) {
    if (isDemoMode()) {
      results.push({
        platform,
        status: 'demo',
        message: `Demo publish successful for ${platform}.`,
        publishedAt: nowIso(),
      });
      continue;
    }

    const platformWebhook =
      process.env[`SOCIAL_WEBHOOK_URL_${platform.toUpperCase()}`] ??
      process.env.SOCIAL_WEBHOOK_URL;

    if (!platformWebhook) {
      results.push({
        platform,
        status: 'failed',
        message: `Missing webhook for ${platform}.`,
        publishedAt: nowIso(),
      });
      continue;
    }

    try {
      await publishViaWebhook(platformWebhook, platform, post, siteOrigin);
      results.push({
        platform,
        status: 'published',
        message: `Published to ${platform} via webhook automation.`,
        publishedAt: nowIso(),
      });
    } catch (error) {
      results.push({
        platform,
        status: 'failed',
        message:
          error instanceof Error
            ? error.message
            : `Publish failed for ${platform}.`,
        publishedAt: nowIso(),
      });
    }
  }

  return results;
}
