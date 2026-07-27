'use client';

import { motion } from 'framer-motion';

const ScanningEffect = () => {
  return (
    <motion.div
      className="glass rounded-2xl p-8 border border-white/20 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="space-y-6">
        <p className="text-sm text-neutral-600 uppercase tracking-wider">Health Data Scanning</p>

        {/* Scanning Lines */}
        <div className="relative h-32 rounded-lg bg-gradient-to-br from-neutral-900 to-neutral-800 overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-full border-t border-primary-500"
                style={{ top: `${(i + 1) * 25}%` }}
              />
            ))}
          </div>

          {/* Scanning Line Animation */}
          <motion.div
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-secondary-300 to-transparent"
            animate={{ y: ['0%', '100%'] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{ boxShadow: '0 0 10px rgba(0, 212, 255, 0.8)' }}
          />

          {/* Data Points */}
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary-500"
              style={{
                left: `${(i + 1) * 16}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="space-y-2">
          {[
            { label: 'Processing...', width: '45%' },
            { label: 'Analyzing...', width: '65%' },
            { label: 'Generating...', width: '80%' },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs text-neutral-600">{item.label}</span>
              </div>
              <motion.div
                className="h-1 rounded-full bg-neutral-200 overflow-hidden"
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-primary-500 to-secondary-300"
                  initial={{ width: 0 }}
                  animate={{ width: item.width }}
                  transition={{ duration: 2, delay: idx * 0.3, ease: 'easeOut' }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ScanningEffect;
