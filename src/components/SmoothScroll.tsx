'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

function ScrollToTopOnRouteChange() {
  const pathname = usePathname();

  useEffect(() => {
    // Ensure every route starts from the top instead of preserving in-page position.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ScrollToTopOnRouteChange />
      {children}
    </>
  );
}
