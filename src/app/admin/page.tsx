import AdminPortal from '@/components/admin/AdminPortal';
import { isAdminAuthenticated } from '@/lib/admin-auth';
import { listAdminPosts } from '@/lib/admin-store';

export const metadata = {
  title: 'Admin',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminPage() {
  const authenticated = await isAdminAuthenticated();
  const posts = authenticated ? listAdminPosts() : [];
  const mode = process.env.SOCIAL_DEMO_MODE !== 'false' ? 'demo' : 'live';

  return (
    <AdminPortal
      initialAuthenticated={authenticated}
      initialPosts={posts}
      mode={mode}
    />
  );
}
