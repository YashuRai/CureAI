'use client';

import { motion } from 'framer-motion';
import { Slider } from '@/components/ui/Slider';
import GlassCard from '../GlassCard';

interface HealthTwinControlsProps {
  healthData: {
    bmi: number;
    heartRate: number;
    stressLevel: number;
    fitnessLevel: number;
    sleepQuality: number;
    hydration: number;
  };
  onDataChange: (key: string, value: number) => void;
}

const HealthTwinControls = ({ healthData, onDataChange }: HealthTwinControlsProps) => {
  const controls = [
    {
      label: 'Fitness Level',
      key: 'fitnessLevel',
      value: healthData.fitnessLevel,
      min: 0,
      max: 100,
      step: 1,
    },
    {
      label: 'Stress Level',
      key: 'stressLevel',
      value: healthData.stressLevel,
      min: 0,
      max: 100,
      step: 1,
    },
    {
      label: 'Sleep Quality',
      key: 'sleepQuality',
      value: healthData.sleepQuality,
      min: 0,
      max: 100,
      step: 1,
    },
    {
      label: 'Hydration',
      key: 'hydration',
      value: healthData.hydration,
      min: 0,
      max: 100,
      step: 1,
    },
  ];

  return (
    <GlassCard>
      <h3 className="text-xl font-bold mb-4">Adjust Avatar</h3>
      <div className="space-y-4">
        {controls.map((control, index) => (
          <motion.div
            key={control.key}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <label className="text-sm font-medium text-neutral-700">
                {control.label}
              </label>
              <motion.span
                className="text-sm font-semibold text-primary-500"
                key={control.value}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
              >
                {Math.round(control.value)}%
              </motion.span>
            </div>
            <motion.input
              type="range"
              min={control.min}
              max={control.max}
              step={control.step}
              value={control.value}
              onChange={(e) => onDataChange(control.key, parseInt(e.target.value))}
              className="w-full h-2 rounded-full bg-neutral-200 cursor-pointer appearance-none accent-primary-500 hover:accent-primary-600 transition-colors"
              style={{
                background: `linear-gradient(to right, #e5e7eb 0%, #e5e7eb ${control.value}%, #2563EB ${control.value}%, #00D4FF 100%)`,
              }}
            />
          </motion.div>
        ))}
      </div>

      {/* Reset Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          onDataChange('fitnessLevel', 75);
          onDataChange('stressLevel', 30);
          onDataChange('sleepQuality', 85);
          onDataChange('hydration', 80);
        }}
        className="w-full mt-6 py-2 rounded-lg border-2 border-primary-500 text-primary-500 font-medium hover:bg-primary-50 transition-colors"
      >
        Reset to Default
      </motion.button>
    </GlassCard>
  );
};

export default HealthTwinControls;
