'use client';

import { motion } from 'framer-motion';
import NeuralNetwork from './NeuralNetwork';
import ScanningEffect from './ScanningEffect';
import AnalysisMessages from './AnalysisMessages';

const AnalysisMode = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full max-w-4xl space-y-8"
    >
      {/* Neural Network Animation */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <NeuralNetwork />
      </motion.div>

      {/* Scanning Effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <ScanningEffect />
      </motion.div>

      {/* Analysis Messages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <AnalysisMessages />
      </motion.div>
    </motion.div>
  );
};

export default AnalysisMode;
