'use client';

import { motion } from 'framer-motion';

const messages = [
  'Analyzing Blood Pressure...',
  'Calculating Lifestyle Score...',
  'Comparing Medical History...',
  'Assessing Risk Factors...',
  'Generating AI Report...',
  'Preparing Recommendations...',
];

const AnalysisMessages = () => {
  return (
    <motion.div
      className="glass rounded-2xl p-8 border border-white/20 space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-sm text-neutral-600 uppercase tracking-wider">Analysis Progress</p>

      <div className="space-y-3">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: index * 0.3,
              duration: 0.5,
            }}
            className="flex items-center gap-3 text-neutral-700"
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-primary-500"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: index * 0.3,
              }}
            />
            <span>{message}</span>
          </motion.div>
        ))}
      </div>

      {/* Loading spinner */}
      <motion.div
        className="flex justify-center mt-6"
        animate={{ rotate: 360 }}
        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
      >
        <div className="w-8 h-8 border-2 border-primary-500/30 border-t-primary-500 rounded-full" />
      </motion.div>
    </motion.div>
  );
};

export default AnalysisMessages;
