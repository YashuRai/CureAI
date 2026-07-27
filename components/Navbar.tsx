'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MessageCircle, LayoutDashboard, Home, Users, Brain, Zap } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/', icon: Home },
    { label: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { label: 'Health Twin', href: '/health-twin', icon: Users },
    { label: 'AI Analysis', href: '/ai-analysis', icon: Brain },
    { label: 'Chat', href: '/chat', icon: MessageCircle },
  ];

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
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-300 flex items-center justify-center">
                <span className="text-white font-bold text-lg">❤️</span>
              </div>
              <span className="font-bold text-xl gradient-text">CureAI</span>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className="relative"
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center gap-2 font-medium transition-colors text-sm ${
                      isActive ? 'text-primary-500' : 'text-neutral-600 hover:text-primary-500'
                    }`}
                  >
                    <Icon size={18} />
                    {item.label}
                  </motion.div>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-300 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:block px-6 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-300 text-white font-medium hover:shadow-lg transition-all"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
