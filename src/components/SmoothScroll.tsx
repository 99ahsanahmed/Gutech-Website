'use client';

import Lenis from 'lenis';
import 'lenis/dist/lenis.css'; // Optional: ensures default CSS rules that prevent overscroll jumping
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
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      // Default configurations for premium scroll
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <ScrollToTopOnRouteChange />
      {children}
    </>
  );
}
