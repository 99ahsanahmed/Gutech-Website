'use client';

import { animate, motion, useInView, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export default function AnimatedCounter({ value, duration = 2.5, delay = 0, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        animate(count, value, { duration, ease: [0.22, 1, 0.36, 1] });
      }, delay * 1000);
    }
  }, [inView, value, count, duration, delay]);

  return <motion.span ref={ref} className={className}>{rounded}</motion.span>;
}
