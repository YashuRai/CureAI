'use client';

import { motion } from 'framer-motion';
import { Heart, Brain, Zap, Shield, Activity, TrendingUp } from 'lucide-react';
import GlassCard from '../GlassCard';

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: 'Real-time Monitoring',
      description: 'Continuous health tracking with AI-powered insights and alerts',
      color: 'from-danger-500 to-warning-400',
    },
    {
      icon: Brain,
      title: 'AI Analysis',
      description: 'Advanced machine learning algorithms for accurate diagnostics',
      color: 'from-purple-500 to-primary-500',
    },
    {
      icon: Zap,
      title: 'Instant Reports',
      description: 'Generate comprehensive health reports in seconds',
      color: 'from-warning-500 to-danger-400',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Military-grade encryption for your sensitive health data',
      color: 'from-emerald-500 to-secondary-300',
    },
    {
      icon: Activity,
      title: 'Lifestyle Tracking',
      description: 'Monitor exercise, nutrition, sleep, and wellness metrics',
      color: 'from-primary-500 to-secondary-300',
    },
    {
      icon: TrendingUp,
      title: 'Predictions',
      description: 'Predictive analytics for preventive healthcare',
      color: 'from-emerald-500 to-primary-500',
    },
  ];

  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Premium Features</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Everything you need for complete health management
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <GlassCard key={index} delay={index * 0.1}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}
                >
                  <Icon className="text-white" size={24} />
                </motion.div>
                <h3 className="text-xl font-bold mb-2 text-neutral-900">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
