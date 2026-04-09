export const SOCIAL_PLATFORMS = ['facebook'] as const;
export type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number];

export type PublishStatus = 'pending' | 'published' | 'failed' | 'demo';

export type UploadedMedia = {
  url: string;
  name: string;
  type: string;
  size: number;
};

export type PlatformPublishResult = {
  platform: SocialPlatform;
  status: PublishStatus;
  message: string;
  publishedAt: string;
};

export type AdminPostRecord = {
  id: string;
  title: string;
  description: string;
  media?: UploadedMedia;
  platforms: SocialPlatform[];
  createdAt: string;
  results: PlatformPublishResult[];
};

type AdminStore = {
  posts: AdminPostRecord[];
};

declare global {
  var __gutechAdminStore: AdminStore | undefined;
}

const store =
  globalThis.__gutechAdminStore ??
  (globalThis.__gutechAdminStore = {
    posts: [],
  });

function makeId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

export function listAdminPosts() {
  return [...store.posts].sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1));
}

export function createAdminPost(input: {
  title: string;
  description: string;
  media?: UploadedMedia;
  platforms: SocialPlatform[];
}) {
  const record: AdminPostRecord = {
    id: makeId(),
    title: input.title,
    description: input.description,
    media: input.media,
    platforms: input.platforms,
    createdAt: new Date().toISOString(),
    results: [],
  };

  store.posts.unshift(record);
  return record;
}

export function setAdminPostResults(postId: string, results: PlatformPublishResult[]) {
  const post = store.posts.find((item) => item.id === postId);
  if (!post) {
    return null;
  }

  post.results = results;
  return post;
}
