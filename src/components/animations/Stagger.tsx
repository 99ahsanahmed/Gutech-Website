"use client";

import { motion, useReducedMotion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] as const }
  }
};

export function StaggerContainer({ children, className = "", style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={style}
      variants={reduceMotion ? undefined : containerVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once: true, margin: "-50px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "", style }: { children: React.ReactNode, className?: string, style?: React.CSSProperties }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      style={{ ...style, willChange: 'transform, opacity' }}
      variants={reduceMotion ? undefined : itemVariants}
    >
      {children}
    </motion.div>
  );
}
