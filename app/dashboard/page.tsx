'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import HealthScoreRing from '@/components/dashboard/HealthScoreRing';
import MetricsGrid from '@/components/dashboard/MetricsGrid';
import ChartSection from '@/components/dashboard/ChartSection';
import RecentActivity from '@/components/dashboard/RecentActivity';

export default function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-b from-premium-light via-white to-neutral-100">
      <Navbar />
      
      {/* Background Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
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
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 md:py-12">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="gradient-text">Good Morning,</span>
            <span className="text-neutral-900"> Sarah</span>
          </h1>
          <p className="text-neutral-600 mt-2">Welcome back to your health dashboard</p>
        </motion.div>

        {/* Health Score Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-12"
        >
          <HealthScoreRing />
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <MetricsGrid />
        </motion.div>

        {/* Charts Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <ChartSection />
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <RecentActivity />
        </motion.div>
      </div>
    </main>
  );
}
