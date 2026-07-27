'use client';

import { motion } from 'framer-motion';
import { Bell, Settings, User } from 'lucide-react';

const DashboardHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-between items-center mb-8"
    >
      <div>
        <h1 className="text-4xl font-bold gradient-text">Dashboard</h1>
        <p className="text-neutral-600 mt-1">Welcome back to your health hub</p>
      </div>

      <div className="flex items-center gap-4">
        {/* Notification */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-3 rounded-lg glass hover:bg-white/50 transition-colors"
        >
          <Bell size={20} className="text-neutral-600" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-danger-500 rounded-full" />
        </motion.button>

        {/* Settings */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-lg glass hover:bg-white/50 transition-colors"
        >
          <Settings size={20} className="text-neutral-600" />
        </motion.button>

        {/* Profile */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="p-3 rounded-lg glass hover:bg-white/50 transition-colors"
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary-500 to-secondary-300" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default DashboardHeader;
