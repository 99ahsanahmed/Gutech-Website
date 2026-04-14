'use client';

import { ArrowDown } from 'lucide-react';

export default function ExploreButton() {
  return (
    <button 
      onClick={() => {
        // @ts-ignore
        if (typeof window !== 'undefined' && window.lenis) {
          // @ts-ignore
          window.lenis.scrollTo('#explore-section', { duration: 2.5, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        } else {
          const nextSection = document.getElementById('explore-section');
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }}
      className="flex flex-col items-center group cursor-pointer border-none bg-transparent"
    >
      <span className="text-white/70 text-xs tracking-[0.25em] uppercase mb-3 block font-bold transition-colors group-hover:text-white">
        Explore GU TECH
      </span>
      <div className="animate-bounce">
        <ArrowDown className="text-white/80 mx-auto drop-shadow-sm transition-colors group-hover:text-white" size={18} />
      </div>
    </button>
  );
}
