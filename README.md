This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Admin Publishing Panel

Hidden admin route:

- `/admin` (not linked in navigation)

Required environment variables:

```bash
ADMIN_USERNAME=admin
ADMIN_PASSWORD=change-this
ADMIN_SESSION_SECRET=change-this-too
```

Social publishing modes:

- `SOCIAL_DEMO_MODE=true` (default behavior if omitted): simulates successful posting to selected platforms so you can present full workflow without real credentials.
- `SOCIAL_DEMO_MODE=false` + webhook URL(s): sends real publish payloads to your automation endpoint (Zapier/Make/n8n/custom backend), which can then post to platform APIs.

Webhook variables:

- `SOCIAL_WEBHOOK_URL` (fallback for all platforms)
- `SOCIAL_WEBHOOK_URL_FACEBOOK`
- `SOCIAL_WEBHOOK_URL_INSTAGRAM`
- `SOCIAL_WEBHOOK_URL_LINKEDIN`
- `SOCIAL_WEBHOOK_URL_X`

Example payload sent to webhook:

```json
{
  "platform": "linkedin",
  "title": "New scholarship announcement",
  "description": "Details about admission and deadlines...",
  "mediaUrl": "https://your-site.com/admin-uploads/file.jpg",
  "media": {
    "url": "/admin-uploads/file.jpg",
    "name": "file.jpg",
    "type": "image/jpeg",
    "size": 123456,
    "publicUrl": "https://your-site.com/admin-uploads/file.jpg"
  },
  "createdAt": "2026-04-10T12:00:00.000Z",
  "source": "gutech-admin"
}
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
