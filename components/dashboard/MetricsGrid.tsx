'use client';

import { motion } from 'framer-motion';
import { Heart, Droplets, Moon, Zap, Wind, Scale } from 'lucide-react';
import GlassCard from '../GlassCard';

const MetricsGrid = () => {
  const metrics = [
    {
      icon: Heart,
      label: 'Heart Rate',
      value: '72',
      unit: 'bpm',
      trend: '+2',
      status: 'normal',
      color: 'from-danger-500 to-warning-400',
    },
    {
      icon: Droplets,
      label: 'Hydration',
      value: '2.4',
      unit: 'L',
      trend: '+0.2L',
      status: 'good',
      color: 'from-secondary-300 to-primary-500',
    },
    {
      icon: Moon,
      label: 'Sleep Quality',
      value: '8.2',
      unit: 'hrs',
      trend: '+0.5hrs',
      status: 'excellent',
      color: 'from-purple-500 to-primary-500',
    },
    {
      icon: Zap,
      label: 'Energy Level',
      value: '85',
      unit: '%',
      trend: '+5%',
      status: 'high',
      color: 'from-warning-500 to-danger-400',
    },
    {
      icon: Wind,
      label: 'Oxygen Level',
      value: '98',
      unit: '%',
      trend: 'normal',
      status: 'optimal',
      color: 'from-emerald-500 to-secondary-300',
    },
    {
      icon: Scale,
      label: 'BMI',
      value: '22.5',
      unit: 'kg/m²',
      trend: '-0.2',
      status: 'healthy',
      color: 'from-emerald-500 to-primary-500',
    },
  ];

  return (
    <div className="space-y-4">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold"
      >
        <span className="gradient-text">Real-time Metrics</span>
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
            >
              <GlassCard delay={0} hover>
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <motion.span
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: index * 0.05 + 0.2 }}
                      className="text-xs font-semibold text-success-500 bg-success-50 px-2 py-1 rounded-full"
                    >
                      {metric.trend}
                    </motion.span>
                  </div>

                  {/* Label */}
                  <div className="text-sm text-neutral-600">{metric.label}</div>

                  {/* Value */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 + 0.1, duration: 0.5 }}
                    className="flex items-baseline gap-1"
                  >
                    <span className="text-3xl font-bold text-neutral-900">{metric.value}</span>
                    <span className="text-sm text-neutral-600">{metric.unit}</span>
                  </motion.div>

                  {/* Progress Bar */}
                  <motion.div
                    initial={{ scaleX: 0, transformOrigin: 'left' }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: index * 0.05 + 0.2, duration: 0.6 }}
                    className="h-1 rounded-full bg-gradient-to-r from-neutral-200 to-neutral-300"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '75%' }}
                      transition={{ delay: index * 0.05 + 0.3, duration: 0.8, ease: 'easeOut' }}
                      className={`h-full rounded-full bg-gradient-to-r ${metric.color}`}
                    />
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MetricsGrid;
