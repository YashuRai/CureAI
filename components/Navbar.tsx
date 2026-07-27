'use client';

import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import PremiumButton from './PremiumButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['Features', 'Dashboard', 'Pricing', 'About'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-neutral-200/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-300 flex items-center justify-center">
              <span className="text-white font-bold text-lg">₹</span>
            </div>
            <span className="font-bold text-xl gradient-text">CureAI</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-neutral-600 hover:text-primary-500 font-medium transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-neutral-600 hover:text-primary-500 font-medium transition-colors">
              Sign In
            </button>
            <PremiumButton>Get Started</PremiumButton>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4"
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-neutral-600 hover:text-primary-500"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
