import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

import { ADMIN_SESSION_COOKIE, verifyAdminSessionToken } from '@/lib/admin-auth';
import {
  createAdminPost,
  listAdminPosts,
  setAdminPostResults,
  SOCIAL_PLATFORMS,
  type SocialPlatform,
} from '@/lib/admin-store';
import { saveUploadedMedia } from '@/lib/admin-media';
import { publishToPlatforms } from '@/lib/social-publisher';

async function isAuthorized() {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_SESSION_COOKIE)?.value;
  return verifyAdminSessionToken(token);
}

export async function GET() {
  if (!(await isAuthorized())) {
    return NextResponse.json({ message: 'Unauthorized.' }, { status: 401 });
  }

  return NextResponse.json({
    posts: listAdminPosts(),
    mode: process.env.SOCIAL_DEMO_MODE !== 'false' ? 'demo' : 'live',
  });
}

export async function POST(request: Request) {
  if (!(await isAuthorized())) {
    return NextResponse.json({ message: 'Unauthorized.' }, { status: 401 });
  }

  try {
    const form = await request.formData();

    const title = `${form.get('title') ?? ''}`.trim();
    const description = `${form.get('description') ?? ''}`.trim();
    const mediaFile = form.get('media');
    const mediaUrlInput = form.get('mediaUrl');
    const requestedPlatforms = form
      .getAll('platforms')
      .map((item) => `${item}`)
      .filter((platform): platform is SocialPlatform =>
        SOCIAL_PLATFORMS.includes(platform as SocialPlatform),
      );

    if (!title || !description) {
      return NextResponse.json(
        { message: 'Title and description are required.' },
        { status: 400 },
      );
    }

    if (!requestedPlatforms.length) {
      return NextResponse.json(
        { message: 'Select at least one platform.' },
        { status: 400 },
      );
    }

    let media;
    if (mediaUrlInput && typeof mediaUrlInput === 'string' && mediaUrlInput.trim() !== '') {
      media = {
        url: mediaUrlInput.trim(),
        name: 'Public URL',
        type: 'image/external',
        size: 0,
      };
    } else if (mediaFile instanceof File && mediaFile.size > 0) {
      media = await saveUploadedMedia(mediaFile);
    }

    const post = createAdminPost({
      title,
      description,
      media,
      platforms: requestedPlatforms,
    });

    const origin = new URL(request.url).origin;
    const results = await publishToPlatforms(post, origin);
    const updatedPost = setAdminPostResults(post.id, results);

    return NextResponse.json({
      message: 'Post processed.',
      post: updatedPost,
      mode: process.env.SOCIAL_DEMO_MODE !== 'false' ? 'demo' : 'live',
    });
  } catch {
    return NextResponse.json({ message: 'Failed to process post.' }, { status: 500 });
  }
}
