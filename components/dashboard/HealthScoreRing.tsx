'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Heart, TrendingUp, Activity } from 'lucide-react';

const HealthScoreRing = () => {
  const [score, setScore] = useState(0);
  const targetScore = 87;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  useEffect(() => {
    const interval = setInterval(() => {
      setScore((prev) => {
        if (prev < targetScore) {
          return prev + 1;
        }
        return prev;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const getColor = (value: number) => {
    if (value >= 80) return 'from-success-500 to-emerald-400';
    if (value >= 60) return 'from-warning-500 to-amber-400';
    if (value >= 40) return 'from-danger-500 to-orange-400';
    return 'from-danger-600 to-danger-500';
  };

  const getStatusText = (value: number) => {
    if (value >= 80) return 'Excellent';
    if (value >= 60) return 'Good';
    if (value >= 40) return 'Fair';
    return 'Needs Attention';
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="glass rounded-3xl p-8 md:p-12 border border-white/20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Circular Progress Ring */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-64 h-64">
            {/* Background Ring */}
            <svg
              className="absolute inset-0 w-full h-full transform -rotate-90"
              viewBox="0 0 120 120"
            >
              <circle
                cx="60"
                cy="60"
                r="45"
                fill="none"
                stroke="rgba(0,0,0,0.05)"
                strokeWidth="8"
              />
            </svg>

            {/* Animated Progress Ring */}
            <motion.svg
              className="absolute inset-0 w-full h-full transform -rotate-90"
              viewBox="0 0 120 120"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <defs>
                <linearGradient
                  id="scoreGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop
                    offset="0%"
                    stopColor={score >= 80 ? '#22C55E' : score >= 60 ? '#F59E0B' : '#EF4444'}
                  />
                  <stop
                    offset="100%"
                    stopColor={score >= 80 ? '#10B981' : score >= 60 ? '#D97706' : '#DC2626'}
                  />
                </linearGradient>
              </defs>
              <motion.circle
                cx="60"
                cy="60"
                r="45"
                fill="none"
                stroke="url(#scoreGradient)"
                strokeWidth="8"
                strokeLinecap="round"
                initial={{ strokeDashoffset: circumference }}
                animate={{ strokeDashoffset }}
                transition={{ duration: 2, ease: 'easeOut' }}
                style={{ strokeDasharray: circumference }}
              />
            </motion.svg>

            {/* Center Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="text-danger-500 mb-2" size={32} />
              </motion.div>
              <div className="text-5xl font-bold gradient-text">{score}</div>
              <div className="text-sm text-neutral-600 mt-1">Health Score</div>
            </motion.div>

            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary-500/0"
              animate={{
                boxShadow: [
                  '0 0 20px rgba(37, 99, 235, 0.3)',
                  '0 0 40px rgba(37, 99, 235, 0.6)',
                  '0 0 20px rgba(37, 99, 235, 0.3)',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="space-y-6">
            {/* Status */}
            <div>
              <div className="text-sm text-neutral-600 mb-2">Current Status</div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className={`inline-block px-4 py-2 rounded-full bg-gradient-to-r ${getColor(score)} text-white font-semibold`}>
                  {getStatusText(score)}
                </div>
              </motion.div>
            </div>

            {/* Key Metrics */}
            <div className="space-y-4">
              {[
                { label: 'Heart Rate', value: '72 bpm', icon: Heart, status: 'normal' },
                { label: 'Activity', value: '8,234 steps', icon: Activity, status: 'good' },
                { label: 'Trend', value: '+5 points', icon: TrendingUp, status: 'improving' },
              ].map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="glass rounded-xl p-4 border border-white/20 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-300 flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-neutral-600">{metric.label}</div>
                      <div className="font-semibold text-neutral-900">{metric.value}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Action Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-300 text-white font-semibold hover:shadow-lg transition-all"
            >
              View Detailed Analysis
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default HealthScoreRing;
