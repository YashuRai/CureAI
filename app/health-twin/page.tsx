'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HealthTwinViewer from '@/components/health-twin/HealthTwinViewer';
import HealthTwinMetrics from '@/components/health-twin/HealthTwinMetrics';
import HealthTwinControls from '@/components/health-twin/HealthTwinControls';

export default function HealthTwin() {
  const [healthData, setHealthData] = useState({
    bmi: 22.5,
    heartRate: 72,
    stressLevel: 30,
    fitnessLevel: 75,
    sleepQuality: 85,
    hydration: 80,
  });

  const handleDataChange = (key: string, value: number) => {
    setHealthData((prev) => ({
      ...prev,
      [key]: Math.min(100, Math.max(0, value)),
    }));
  };

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-2">
            <span className="gradient-text">Your Digital Health Twin</span>
          </h1>
          <p className="text-neutral-600 text-lg">
            Meet your AI-powered wellness avatar that evolves with your health
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Avatar Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <HealthTwinViewer healthData={healthData} />
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Metrics */}
            <HealthTwinMetrics healthData={healthData} />

            {/* Controls */}
            <HealthTwinControls healthData={healthData} onDataChange={handleDataChange} />
          </motion.div>
        </div>
      </div>
    </main>
  );
}
