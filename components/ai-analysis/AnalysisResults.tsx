'use client';

import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, AlertCircle, Star } from 'lucide-react';
import GlassCard from '../GlassCard';

interface AnalysisResultsProps {
  data: {
    bloodPressure: number;
    lifestyle: number;
    medicalHistory: number;
    riskFactors: number;
    recommendations: number;
  };
  onReset: () => void;
}

const AnalysisResults = ({ data, onReset }: AnalysisResultsProps) => {
  const insights = [
    {
      icon: CheckCircle,
      title: 'Overall Health',
      score: 82,
      status: 'Excellent',
      color: 'from-emerald-500 to-success-400',
    },
    {
      icon: TrendingUp,
      title: 'Trend',
      score: 75,
      status: 'Improving',
      color: 'from-primary-500 to-secondary-300',
    },
    {
      icon: AlertCircle,
      title: 'Risk Level',
      score: 25,
      status: 'Low Risk',
      color: 'from-danger-500 to-warning-400',
    },
    {
      icon: Star,
      title: 'Wellness Score',
      score: 88,
      status: 'Outstanding',
      color: 'from-purple-500 to-primary-500',
    },
  ];

  const recommendations = [
    { title: 'Increase daily walks', priority: 'high' },
    { title: 'Reduce stress through meditation', priority: 'high' },
    { title: 'Improve sleep consistency', priority: 'medium' },
    { title: 'Stay hydrated throughout the day', priority: 'medium' },
    { title: 'Schedule health checkup', priority: 'low' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-4xl space-y-8"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center space-y-2"
      >
        <motion.h1
          className="text-5xl font-bold"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <span className="gradient-text">Analysis Complete!</span>
        </motion.h1>
        <p className="text-neutral-600 text-lg">Your personalized health report is ready</p>
      </motion.div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.map((insight, index) => {
          const Icon = insight.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
            >
              <GlassCard hover delay={0}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${insight.color} flex items-center justify-center`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-neutral-600">{insight.title}</p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <div className="text-4xl font-bold gradient-text mb-1">
                      {insight.score}
                    </div>
                    <p className="text-sm text-neutral-600">{insight.status}</p>
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>

      {/* Detailed Metrics */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <GlassCard hover={false}>
          <h2 className="text-2xl font-bold mb-6">Detailed Metrics</h2>
          <div className="space-y-4">
            {[
              { label: 'Blood Pressure Analysis', value: data.bloodPressure },
              { label: 'Lifestyle Factors', value: data.lifestyle },
              { label: 'Medical History', value: data.medicalHistory },
              { label: 'Risk Assessment', value: 100 - data.riskFactors },
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-neutral-700">{metric.label}</span>
                  <span className="font-semibold text-primary-500">{metric.value}%</span>
                </div>
                <motion.div className="h-2 rounded-full bg-neutral-200 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-300"
                    initial={{ width: 0 }}
                    animate={{ width: `${metric.value}%` }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.8, ease: 'easeOut' }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Recommendations */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <GlassCard hover={false}>
          <h2 className="text-2xl font-bold mb-6">AI Recommendations</h2>
          <div className="space-y-3">
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                className="flex items-center gap-4 p-3 rounded-lg bg-white/30 hover:bg-white/50 transition-colors"
              >
                <div
                  className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    rec.priority === 'high'
                      ? 'bg-danger-500'
                      : rec.priority === 'medium'
                      ? 'bg-warning-500'
                      : 'bg-success-500'
                  }`}
                />
                <span className="flex-1 text-neutral-700">{rec.title}</span>
                <span className="text-xs font-semibold text-neutral-600 uppercase">
                  {rec.priority}
                </span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onReset}
          className="px-8 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-300 text-white font-semibold hover:shadow-lg transition-all"
        >
          Run New Analysis
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-lg border-2 border-primary-500 text-primary-500 font-semibold hover:bg-primary-50 transition-colors"
        >
          Download Report
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default AnalysisResults;
