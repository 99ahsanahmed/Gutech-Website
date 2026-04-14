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

  const opacityValue = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: opacityValue,
        willChange: 'opacity',
      }}
    >
      {children}
    </motion.div>
  );
}
