'use client';

import { usePathname } from 'next/navigation';

import Chatbot from '@/components/Chatbot';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

type AppFrameProps = {
  children: React.ReactNode;
};

export default function AppFrame({ children }: AppFrameProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <div className="app-shell">
      {isAdminRoute ? null : <Navbar />}
      <main>{children}</main>
      {isAdminRoute ? null : <Footer />}
      {isAdminRoute ? null : <Chatbot />}
    </div>
  );
}
