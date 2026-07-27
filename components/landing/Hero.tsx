'use client';

import { motion } from 'framer-motion';
import PremiumButton from '../PremiumButton';
import BackgroundAnimation from '../BackgroundAnimation';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      <BackgroundAnimation />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6"
        >
          <div className="glass rounded-full px-6 py-2 border border-primary-200/50">
            <span className="text-sm font-medium gradient-text">✨ AI-Powered Healthcare</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="gradient-text">Healthcare</span>
            <br />
            <span className="text-neutral-900">Reimagined</span>
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Experience the future of personalized healthcare with AI-driven insights, real-time health monitoring, and intelligent medical recommendations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <PremiumButton size="lg">Start Free Trial</PremiumButton>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 text-lg font-semibold border-2 border-primary-500 text-primary-500 rounded-lg hover:bg-primary-50 transition-colors"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-neutral-600"
        >
          {[
            { value: '50K+', label: 'Active Users' },
            { value: '99.9%', label: 'Uptime' },
            { value: '24/7', label: 'Support' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
