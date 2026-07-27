'use client';

import { motion } from 'framer-motion';
import PremiumButton from '../PremiumButton';

const CTA = () => {
  return (
    <section className="py-24 px-4 md:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="glass rounded-3xl p-8 md:p-16 text-center border border-primary-200/30 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 relative overflow-hidden">
          {/* Glow Background */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-full opacity-20 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-200 to-emerald-200 rounded-full opacity-20 blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ready to <span className="gradient-text">Transform</span> Your Health?
            </h2>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              Join thousands of users who are already experiencing personalized healthcare powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <PremiumButton size="lg">Start Free Trial</PremiumButton>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-lg font-semibold border-2 border-neutral-300 text-neutral-900 rounded-lg hover:bg-neutral-50 transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
