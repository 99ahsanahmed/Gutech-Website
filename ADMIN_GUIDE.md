# Admin Access and Publishing Guide

This guide explains how to access and use the hidden admin panel at `/admin`.

## 1. Admin URL

- Open your site URL and append `/admin`
- Example (local): `http://localhost:3000/admin`
- Example (deployed): `https://your-domain.com/admin`

There is intentionally no navigation link to this page.

## 2. Configure Admin Login

Set these environment variables in `.env`:

```env
ADMIN_USERNAME=admin
ADMIN_PASSWORD=change-this
ADMIN_SESSION_SECRET=change-this-too
```

Notes:

- `ADMIN_USERNAME` and `ADMIN_PASSWORD` are the credentials required on `/admin`.
- `ADMIN_SESSION_SECRET` signs the login session cookie.
- Change all defaults before production.

## 3. Run the Project

```bash
npm run dev
```

Then open `/admin` and sign in.

## 4. What Admin Can Do

After login, admin can:

- Create a post title
- Add a post description
- Upload media file (image/video, optional)
- Select target platforms (`facebook`, `instagram`, `linkedin`, `x`)
- Submit post for publishing

The panel also shows recent post history and platform-level status results.

## 5. Demo Mode (For Presentation)

If you do not have official social handles yet, use demo mode:

```env
SOCIAL_DEMO_MODE=true
```

Behavior:

- Posts appear as successfully processed in the admin dashboard.
- Each selected platform returns a demo success result.
- You can show full workflow end-to-end in competition presentation.

## 6. Live Mode (Real Posting)

When real social integrations are available:

```env
SOCIAL_DEMO_MODE=false
SOCIAL_WEBHOOK_URL=https://your-automation-endpoint
# optional platform-specific webhooks
SOCIAL_WEBHOOK_URL_FACEBOOK=https://...
SOCIAL_WEBHOOK_URL_INSTAGRAM=https://...
SOCIAL_WEBHOOK_URL_LINKEDIN=https://...
SOCIAL_WEBHOOK_URL_X=https://...
```

How it works:

- The admin panel uploads media and sends post payload to webhook(s).
- Your automation/backend (Zapier, Make, n8n, or custom API) posts to platform APIs using your own account tokens.
- Platform results are returned and shown in admin history.

### Personal Account Demo Setup

If you want demo posting on your own personal handles:

1. Create automation webhook(s) in Zapier/Make/n8n.
2. Connect your personal Facebook/Instagram/LinkedIn/X accounts in that automation.
3. Put webhook URL(s) in `.env` (`SOCIAL_WEBHOOK_URL` or per-platform variables).
4. Set `SOCIAL_DEMO_MODE=false`.
5. Publish from `/admin` and automation will post to your connected personal accounts.

## 7. Logout

- Use the `Logout` button in admin panel.
- Session cookie is cleared immediately.

## 8. Recommended Production Hardening

- Use strong credentials and rotate periodically.
- Set long random `ADMIN_SESSION_SECRET`.
- Keep `.env` out of Git.
- Add rate limiting on `/api/admin/login`.
- Add audit logging to persistent DB (currently in-memory for demo workflow).

## 9. Quick Presentation Script

1. Open `/admin`.
2. Login with admin credentials.
3. Create a post and choose multiple platforms.
4. Submit.
5. Show platform result list (demo or live mode).
6. Explain that switching one env flag (`SOCIAL_DEMO_MODE`) moves from demo simulation to real automation-backed publishing.
