"use client";

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ParallaxHeroBackground() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]); // the background translates down 30% while scrolling down

  return (
    <div ref={ref} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden', zIndex: 0 }}>
      <motion.div 
        className="hero-campus-parallax"
        style={{ y, position: 'absolute', top: '-15%', left: 0, width: '100%', height: '130%', willChange: 'transform' }} 
      />
    </div>
  );
}
