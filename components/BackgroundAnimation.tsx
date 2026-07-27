'use client';

import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-transparent to-secondary-50" />

      {/* Animated Blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-primary-300 to-secondary-200 rounded-full blur-3xl opacity-40"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-purple-300 to-emerald-200 rounded-full blur-3xl opacity-30"
      />

      {/* Floating Particles */}
      {particles.map((i) => (
        <motion.div
          key={i}
          initial={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100 - 50,
            opacity: 0,
          }}
          animate={{
            x: Math.random() * 200 - 100,
            y: Math.random() * 200 - 100,
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute w-2 h-2 bg-primary-400 rounded-full blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimation;
