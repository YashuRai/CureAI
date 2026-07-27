'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PremiumButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

const PremiumButton = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
}: PremiumButtonProps) => {
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-primary-500 to-secondary-300 text-white shadow-lg hover:shadow-xl',
    secondary:
      'bg-gradient-to-r from-purple-500 to-emerald-500 text-white shadow-lg hover:shadow-xl',
    outline:
      'border-2 border-primary-500 text-primary-500 hover:bg-primary-50',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        relative overflow-hidden rounded-lg font-semibold
        transition-all duration-300 ease-out
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {/* Ripple Effect */}
      <motion.div
        className="absolute inset-0 bg-white/20"
        initial={{ scale: 0, opacity: 1 }}
        whileHover={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.6 }}
      />
      <span className="relative">{children}</span>
    </motion.button>
  );
};

export default PremiumButton;
