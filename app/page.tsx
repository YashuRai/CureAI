'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/landing/Hero';
import Features from '@/components/landing/Features';
import CTA from '@/components/landing/CTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-premium-light via-white to-premium-light">
      <Navbar />
      <Hero />
      <Features />
      <CTA />
    </main>
  );
}
