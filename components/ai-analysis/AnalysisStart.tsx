'use client';

import { motion } from 'framer-motion';
import { Brain, Zap } from 'lucide-react';
import GlassCard from '../GlassCard';

interface AnalysisStartProps {
  onStart: () => void;
}

const AnalysisStart = ({ onStart }: AnalysisStartProps) => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced algorithms analyze your health data',
    },
    {
      icon: Zap,
      title: 'Instant Insights',
      description: 'Get personalized health recommendations',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-2xl"
    >
      <GlassCard hover={false}>
        <div className="text-center space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h1 className="text-5xl font-bold mb-4">
              <span className="gradient-text">AI Health Analysis</span>
            </h1>
            <p className="text-xl text-neutral-600">
              Get instant insights powered by artificial intelligence
            </p>
          </motion.div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="p-4 rounded-lg bg-white/50 border border-white/20"
                >
                  <Icon className="text-primary-500 mb-2 mx-auto" size={24} />
                  <h3 className="font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-neutral-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Analysis Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="space-y-4"
          >
            <div className="text-sm text-neutral-600">
              Analysis will examine:
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                '✓ Blood Pressure Trends',
                '✓ Lifestyle Factors',
                '✓ Medical History',
                '✓ Risk Assessment',
                '✓ Sleep Patterns',
                '✓ Activity Levels',
              ].map((item, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  className="text-sm text-neutral-700"
                >
                  {item}
                </motion.p>
              ))}
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={onStart}
            className="w-full py-4 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-300 text-white font-bold text-lg hover:shadow-xl transition-all"
          >
            Start Analysis
          </motion.button>

          {/* Info Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-xs text-neutral-500"
          >
            Analysis typically takes 30-60 seconds
          </motion.p>
        </div>
      </GlassCard>
    </motion.div>
  );
};

export default AnalysisStart;
