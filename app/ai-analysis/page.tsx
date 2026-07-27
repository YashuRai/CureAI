'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import AnalysisStart from '@/components/ai-analysis/AnalysisStart';
import AnalysisMode from '@/components/ai-analysis/AnalysisMode';
import AnalysisResults from '@/components/ai-analysis/AnalysisResults';

type AnalysisStage = 'start' | 'analyzing' | 'complete';

export default function AIAnalysis() {
  const [stage, setStage] = useState<AnalysisStage>('start');
  const [analysisData, setAnalysisData] = useState({
    bloodPressure: 85,
    lifestyle: 72,
    medicalHistory: 88,
    riskFactors: 45,
    recommendations: 90,
  });

  const handleStartAnalysis = async () => {
    setStage('analyzing');
    // Simulate analysis duration
    await new Promise((resolve) => setTimeout(resolve, 6000));
    setStage('complete');
  };

  const handleReset = () => {
    setStage('start');
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 min-h-[calc(100vh-4rem)] flex items-center justify-center">
        {stage === 'start' && <AnalysisStart onStart={handleStartAnalysis} />}
        {stage === 'analyzing' && <AnalysisMode />}
        {stage === 'complete' && (
          <AnalysisResults data={analysisData} onReset={handleReset} />
        )}
      </div>
    </main>
  );
}
