'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

type ScrollBlurProps = {
  children: React.ReactNode;
};

export default function ScrollBlur({ children }: ScrollBlurProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Apply a backdrop blur that intensifies as the element moves through the viewport
  const blurValue = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 16, 16, 0]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{
        backdropFilter: `blur(${blurValue}px)`,
        WebkitBackdropFilter: `blur(${blurValue}px)`,
        opacity: opacityValue,
      }}
      className="transition-all duration-300"
    >
      {children}
    </motion.div>
  );
}
