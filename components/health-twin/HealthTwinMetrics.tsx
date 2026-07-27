'use client';

import { motion } from 'framer-motion';
import { Heart, Zap, Moon, Droplets, Activity, Brain } from 'lucide-react';
import GlassCard from '../GlassCard';

interface HealthTwinMetricsProps {
  healthData: {
    bmi: number;
    heartRate: number;
    stressLevel: number;
    fitnessLevel: number;
    sleepQuality: number;
    hydration: number;
  };
}

const HealthTwinMetrics = ({ healthData }: HealthTwinMetricsProps) => {
  const metrics = [
    {
      icon: Heart,
      label: 'Heart Rate',
      value: healthData.heartRate,
      unit: 'bpm',
      color: 'from-danger-500 to-warning-400',
      max: 120,
    },
    {
      icon: Brain,
      label: 'Stress Level',
      value: 100 - healthData.stressLevel,
      unit: '%',
      color: 'from-primary-500 to-secondary-300',
      max: 100,
    },
    {
      icon: Activity,
      label: 'Fitness',
      value: healthData.fitnessLevel,
      unit: '%',
      color: 'from-emerald-500 to-success-400',
      max: 100,
    },
    {
      icon: Moon,
      label: 'Sleep Quality',
      value: healthData.sleepQuality,
      unit: '%',
      color: 'from-purple-500 to-primary-500',
      max: 100,
    },
    {
      icon: Droplets,
      label: 'Hydration',
      value: healthData.hydration,
      unit: '%',
      color: 'from-secondary-300 to-primary-500',
      max: 100,
    },
  ];

  return (
    <GlassCard>
      <h3 className="text-xl font-bold mb-4">Health Metrics</h3>
      <div className="space-y-3">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          const percentage = (metric.value / metric.max) * 100;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${metric.color} flex items-center justify-center`}>
                    <Icon className="text-white" size={16} />
                  </div>
                  <span className="text-sm font-medium text-neutral-700">{metric.label}</span>
                </div>
                <span className="text-sm font-semibold text-neutral-900">
                  {Math.round(metric.value)} {metric.unit}
                </span>
              </div>
              <motion.div
                className="h-2 rounded-full bg-neutral-200 overflow-hidden"
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percentage}%` }}
                  transition={{ duration: 0.8, delay: index * 0.05 + 0.2 }}
                  className={`h-full rounded-full bg-gradient-to-r ${metric.color}`}
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </GlassCard>
  );
};

export default HealthTwinMetrics;
