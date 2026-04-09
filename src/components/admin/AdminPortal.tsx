'use client';

import { startTransition, useRef, useState } from 'react';

import type { AdminPostRecord, SocialPlatform } from '@/lib/admin-store';

type AdminPortalProps = {
  initialAuthenticated: boolean;
  initialPosts: AdminPostRecord[];
  mode: 'demo' | 'live';
};

const platforms: SocialPlatform[] = ['facebook'];

export default function AdminPortal({
  initialAuthenticated,
  initialPosts,
  mode,
}: AdminPortalProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(initialAuthenticated);
  const [posts, setPosts] = useState(initialPosts);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [mediaUrlInput, setMediaUrlInput] = useState('');
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState<SocialPlatform[]>([
    'facebook',
  ]);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  async function refreshPosts() {
    const response = await fetch('/api/admin/posts');
    if (!response.ok) {
      return;
    }

    const payload = (await response.json()) as { posts?: AdminPostRecord[] };
    setPosts(payload.posts ?? []);
  }

  async function login(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const payload = (await response.json()) as { message?: string };
      if (!response.ok) {
        setMessage(payload.message ?? 'Login failed.');
        return;
      }

      setIsAuthenticated(true);
      setMessage('Login successful.');
      await refreshPosts();
    } catch {
      setMessage('Unable to login right now.');
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    setLoading(true);
    setMessage('');

    try {
      await fetch('/api/admin/logout', {
        method: 'POST',
      });
      setIsAuthenticated(false);
      setPosts([]);
      setUsername('');
      setPassword('');
      setMessage('Signed out.');
    } finally {
      setLoading(false);
    }
  }

  async function publish(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.set('title', title);
      formData.set('description', description);
      selectedPlatforms.forEach((platform) => formData.append('platforms', platform));
      if (mediaFile) {
        formData.set('media', mediaFile);
      }
      if (mediaUrlInput) {
        formData.set('mediaUrl', mediaUrlInput);
      }

      const response = await fetch('/api/admin/posts', {
        method: 'POST',
        body: formData,
      });

      const payload = (await response.json()) as { message?: string; post?: AdminPostRecord };
      if (!response.ok) {
        setMessage(payload.message ?? 'Unable to publish this post.');
        return;
      }

      setMessage(
        mode === 'demo'
          ? 'Post sent in demo mode. Platform publishing was simulated.'
          : 'Post submitted for live publishing.',
      );

      startTransition(() => {
        setTitle('');
        setDescription('');
        setMediaUrlInput('');
        setMediaFile(null);
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }

      if (payload.post) {
        setPosts((current) => [payload.post as AdminPostRecord, ...current]);
      } else {
        await refreshPosts();
      }
    } catch {
      setMessage('Publish request failed.');
    } finally {
      setLoading(false);
    }
  }

  function togglePlatform(platform: SocialPlatform) {
    setSelectedPlatforms((current) =>
      current.includes(platform)
        ? current.filter((item) => item !== platform)
        : [...current, platform],
    );
  }

  if (!isAuthenticated) {
    return (
      <section className="admin-page">
        <div className="container admin-wrap">
          <h1>Admin Access</h1>
          <p>Sign in to manage social posts and content publishing workflow.</p>
          <form className="admin-form" onSubmit={login}>
            <label htmlFor="admin-username">Admin ID</label>
            <input
              id="admin-username"
              onChange={(event) => setUsername(event.target.value)}
              required
              value={username}
            />
            <label htmlFor="admin-password">Password</label>
            <input
              id="admin-password"
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              value={password}
            />
            <button className="button button--primary" disabled={loading} type="submit">
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </form>
          {message ? <p className="admin-message">{message}</p> : null}
        </div>
      </section>
    );
  }

  return (
    <section className="admin-page">
      <div className="container admin-wrap">
        <div className="admin-head">
          <div>
            <h1>Admin Publishing Panel</h1>
            <p>
              Create a post once and distribute across platforms. Current mode:{' '}
              <strong>{mode.toUpperCase()}</strong>
            </p>
          </div>
          <button className="button button--secondary" onClick={logout} type="button">
            Logout
          </button>
        </div>

        <form className="admin-form" onSubmit={publish}>
          <label htmlFor="post-title">Post title</label>
          <input
            id="post-title"
            onChange={(event) => setTitle(event.target.value)}
            required
            value={title}
          />

          <label htmlFor="post-description">Description</label>
          <textarea
            id="post-description"
            onChange={(event) => setDescription(event.target.value)}
            required
            rows={5}
            value={description}
          />

          <label htmlFor="post-media-url">Public Media URL (optional)</label>
          <input
            id="post-media-url"
            onChange={(event) => setMediaUrlInput(event.target.value)}
            placeholder="https://example.com/image.jpg"
            value={mediaUrlInput}
          />

          <div className="admin-media-divider">
            <span>OR</span>
          </div>

          <label htmlFor="post-media">Upload media from PC (only works on live site)</label>
          <input
            id="post-media"
            ref={fileInputRef}
            accept="image/*,video/*"
            onChange={(event) => {
              const file = event.target.files?.[0] ?? null;
              setMediaFile(file);
            }}
            type="file"
          />

          <div className="admin-status-info">
            <p>Publishing to <strong>Facebook</strong> via Zapier automation.</p>
          </div>

          <button className="button button--primary" disabled={loading} type="submit">
            {loading ? 'Publishing...' : 'Publish to Facebook'}
          </button>
        </form>

        {message ? <p className="admin-message">{message}</p> : null}

        <div className="admin-posts">
          <h2>Recent published posts</h2>
          {posts.length ? (
            <div className="admin-post-list">
              {posts.map((post) => (
                <article key={post.id} className="admin-post-card">
                  <h3>{post.title}</h3>
                  <p>{post.description}</p>
                  {post.media ? (
                    <a href={post.media.url} rel="noreferrer" target="_blank">
                      Media: {post.media.name}
                    </a>
                  ) : null}
                  <ul>
                    {post.results.map((result) => (
                      <li key={`${post.id}-${result.platform}`}>
                        {result.platform}: {result.status} ({result.message})
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          ) : (
            <p>No posts yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
