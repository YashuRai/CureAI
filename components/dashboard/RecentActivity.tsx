'use client';

import { motion } from 'framer-motion';
import { Heart, Activity, Apple, Droplets, Moon, Zap } from 'lucide-react';
import GlassCard from '../GlassCard';

const RecentActivity = () => {
  const activities = [
    {
      icon: Heart,
      title: 'Resting Heart Rate',
      value: '58 bpm',
      time: '2 hours ago',
      color: 'from-danger-500 to-warning-400',
      type: 'measurement',
    },
    {
      icon: Activity,
      title: 'Morning Walk',
      value: '2,345 steps',
      time: '4 hours ago',
      color: 'from-primary-500 to-secondary-300',
      type: 'activity',
    },
    {
      icon: Apple,
      title: 'Healthy Breakfast',
      value: '380 calories',
      time: '6 hours ago',
      color: 'from-emerald-500 to-success-400',
      type: 'nutrition',
    },
    {
      icon: Droplets,
      title: 'Hydration Log',
      value: '8 cups today',
      time: '1 hour ago',
      color: 'from-secondary-300 to-primary-500',
      type: 'hydration',
    },
    {
      icon: Moon,
      title: 'Sleep Report',
      value: '8.2 hours',
      time: 'Yesterday',
      color: 'from-purple-500 to-primary-500',
      type: 'sleep',
    },
    {
      icon: Zap,
      title: 'Energy Boost',
      value: 'High',
      time: '3 hours ago',
      color: 'from-warning-500 to-danger-400',
      type: 'energy',
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
        <span className="gradient-text">Recent Activity</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <GlassCard>
          <div className="space-y-3">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/30 transition-colors cursor-pointer"
                >
                  {/* Icon */}
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${activity.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className="text-white" size={20} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-neutral-900 truncate">{activity.title}</p>
                        <p className="text-sm text-neutral-600">{activity.time}</p>
                      </div>
                      <p className="font-semibold text-neutral-900 flex-shrink-0">{activity.value}</p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    className="text-neutral-400"
                  >
                    →
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default RecentActivity;
