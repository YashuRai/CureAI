'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

const GlassCard = ({
  children,
  className = '',
  hover = true,
  delay = 0,
}: GlassCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={`
        glass rounded-2xl p-6 border border-white/20
        backdrop-blur-md bg-white/40
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
