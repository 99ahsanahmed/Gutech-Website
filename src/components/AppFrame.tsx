'use client';

import { usePathname } from 'next/navigation';

import Chatbot from '@/components/Chatbot';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ScrollProgressBar from '@/components/animations/ScrollProgressBar';

type AppFrameProps = {
  children: React.ReactNode;
};

export default function AppFrame({ children }: AppFrameProps) {
  const pathname = usePathname();
  const isAdminRoute = pathname.startsWith('/admin');

  return (
    <div className="app-shell">
      {isAdminRoute ? null : <Navbar />}
      {isAdminRoute ? null : <ScrollProgressBar />}
      <main>{children}</main>
      {isAdminRoute ? null : <Footer />}
      {isAdminRoute ? null : <Chatbot />}
    </div>
  );
}
