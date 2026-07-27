'use client';

import { motion } from 'framer-motion';
import GlassCard from '../GlassCard';

interface HealthTwinViewerProps {
  healthData: {
    bmi: number;
    heartRate: number;
    stressLevel: number;
    fitnessLevel: number;
    sleepQuality: number;
    hydration: number;
  };
}

const HealthTwinViewer = ({ healthData }: HealthTwinViewerProps) => {
  // Calculate avatar properties based on health data
  const getAvatarColor = () => {
    const overallHealth = (
      (healthData.fitnessLevel +
        healthData.sleepQuality +
        healthData.hydration +
        (100 - healthData.stressLevel)) /
      4
    );

    if (overallHealth >= 80) return 'from-emerald-400 to-success-500';
    if (overallHealth >= 60) return 'from-amber-400 to-warning-500';
    return 'from-orange-400 to-danger-500';
  };

  const getBodyOpacity = () => {
    return 0.5 + (healthData.fitnessLevel / 100) * 0.5;
  };

  const getHeartBeat = () => {
    return 60 + (healthData.heartRate / 100) * 40;
  };

  const getStressGlow = () => {
    return healthData.stressLevel > 50 ? 1 : 0;
  };

  return (
    <GlassCard hover={false}>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Your Avatar</h2>

        {/* Avatar Container */}
        <motion.div
          className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-neutral-900 to-neutral-800 flex items-center justify-center overflow-hidden border border-white/10"
        >
          {/* Background Glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className={`absolute inset-0 bg-gradient-to-br ${getAvatarColor()} blur-3xl opacity-40`}
          />

          {/* Avatar SVG */}
          <svg
            viewBox="0 0 200 300"
            className="w-full h-full"
            style={{ filter: `drop-shadow(0 0 ${20 + getStressGlow() * 20}px rgba(${healthData.stressLevel > 50 ? '239, 68, 68' : '34, 197, 94'})` }}
          >
            {/* Head */}
            <motion.circle
              cx="100"
              cy="80"
              r="35"
              fill={`url(#headGradient)`}
              initial={{ scale: 1 }}
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: getHeartBeat() / 100,
                repeat: Infinity,
              }}
            />

            {/* Body */}
            <motion.rect
              x="75"
              y="120"
              width="50"
              height="60"
              rx="10"
              fill={`url(#bodyGradient)`}
              opacity={getBodyOpacity()}
              animate={{
                scaleY: [1, 1.02, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            />

            {/* Left Arm */}
            <motion.line
              x1="75"
              y1="140"
              x2="30"
              y2="160"
              stroke={`url(#limbGradient)`}
              strokeWidth="8"
              strokeLinecap="round"
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              style={{ transformOrigin: '75px 140px' }}
            />

            {/* Right Arm */}
            <motion.line
              x1="125"
              y1="140"
              x2="170"
              y2="160"
              stroke={`url(#limbGradient)`}
              strokeWidth="8"
              strokeLinecap="round"
              animate={{
                rotate: [0, -10, 10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              style={{ transformOrigin: '125px 140px' }}
            />

            {/* Left Leg */}
            <motion.line
              x1="85"
              y1="180"
              x2="75"
              y2="240"
              stroke={`url(#limbGradient)`}
              strokeWidth="8"
              strokeLinecap="round"
              animate={{
                scaleY: [1, 1.05, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              style={{ transformOrigin: '85px 180px' }}
            />

            {/* Right Leg */}
            <motion.line
              x1="115"
              y1="180"
              x2="125"
              y2="240"
              stroke={`url(#limbGradient)`}
              strokeWidth="8"
              strokeLinecap="round"
              animate={{
                scaleY: [1, 1.05, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: 0.1,
              }}
              style={{ transformOrigin: '115px 180px' }}
            />

            {/* Heart on chest */}
            <motion.circle
              cx="100"
              cy="145"
              r="4"
              fill={healthData.heartRate > 80 ? '#EF4444' : '#22C55E'}
              animate={{
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: getHeartBeat() / 100,
                repeat: Infinity,
              }}
            />

            {/* Gradients */}
            <defs>
              <linearGradient id="headGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={healthData.stressLevel > 50 ? '#FBBF24' : '#93C5FD'} />
                <stop offset="100%" stopColor={healthData.stressLevel > 50 ? '#F59E0B' : '#3B82F6'} />
              </linearGradient>
              <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#00D4FF" />
              </linearGradient>
              <linearGradient id="limbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#00D4FF" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>

        {/* Status Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center space-y-2"
        >
          <p className="text-sm text-neutral-600">Avatar Status</p>
          <motion.p
            className="text-lg font-semibold gradient-text"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {healthData.fitnessLevel > 80
              ? '💪 Super Healthy'
              : healthData.fitnessLevel > 60
              ? '😊 Doing Well'
              : '⚠️ Needs Attention'}
          </motion.p>
        </motion.div>
      </div>
    </GlassCard>
  );
};

export default HealthTwinViewer;
