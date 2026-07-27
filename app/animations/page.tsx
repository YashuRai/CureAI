'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import GlassCard from '@/components/GlassCard';

// Dynamically import Lottie to avoid SSR issues
const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

// Animation data objects
const doctorAnimation = {
  v: '5.7.0',
  fr: 29.97,
  ip: 0,
  op: 120,
  w: 200,
  h: 200,
  nm: 'Doctor',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Head Circle',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 60, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: 'el',
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [60, 60] },
        },
        {
          ty: 'st',
          c: { a: 0, k: [0.15, 0.48, 0.99, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 4 },
          lc: 1,
          lj: 1,
          ml: 10,
          bm: 0,
          nm: 'Stroke 1',
        },
        {
          ty: 'fl',
          c: { a: 0, k: [0.95, 0.77, 0.59, 1] },
          o: { a: 0, k: 100 },
          r: 1,
          bm: 0,
          nm: 'Fill 1',
        },
      ],
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'Body',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 110, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: 'rc',
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [50, 80] },
          r: { a: 0, k: 5 },
        },
        {
          ty: 'st',
          c: { a: 0, k: [0.15, 0.48, 0.99, 1] },
          o: { a: 0, k: 100 },
          w: { a: 0, k: 3 },
          lc: 1,
          lj: 1,
          ml: 10,
          bm: 0,
          nm: 'Stroke 1',
        },
        {
          ty: 'fl',
          c: { a: 0, k: [0.25, 0.58, 0.95, 1] },
          o: { a: 0, k: 100 },
          r: 1,
          bm: 0,
          nm: 'Fill 1',
        },
      ],
    },
  ],
};

const heartAnimation = {
  v: '5.7.0',
  fr: 29.97,
  ip: 0,
  op: 120,
  w: 200,
  h: 200,
  nm: 'Heart',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Heart',
      sr: 1,
      ks: {
        o: { a: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [100] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 30, s: [80] }, { t: 60, s: [100] }] },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [100, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [100, 100, 100] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 30, s: [110, 110, 100] }, { t: 60, s: [100, 100, 100] }] },
      },
      ao: 0,
      shapes: [
        {
          ty: 'el',
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [60, 60] },
        },
        {
          ty: 'fl',
          c: { a: 0, k: [0.95, 0.27, 0.37, 1] },
          o: { a: 0, k: 100 },
          r: 1,
          bm: 0,
          nm: 'Fill 1',
        },
      ],
    },
  ],
};

const brainAnimation = {
  v: '5.7.0',
  fr: 29.97,
  ip: 0,
  op: 120,
  w: 200,
  h: 200,
  nm: 'Brain',
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: 'Brain Left',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 20, s: [5] }, { t: 40, s: [0] }] },
        p: { a: 0, k: [70, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: 'el',
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [40, 50] },
        },
        {
          ty: 'fl',
          c: { a: 0, k: [0.8, 0.36, 0.97, 1] },
          o: { a: 0, k: 100 },
          r: 1,
          bm: 0,
          nm: 'Fill 1',
        },
      ],
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: 'Brain Right',
      sr: 1,
      ks: {
        o: { a: 0, k: 100 },
        r: { a: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 20, s: [-5] }, { t: 40, s: [0] }] },
        p: { a: 0, k: [130, 100, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      ao: 0,
      shapes: [
        {
          ty: 'el',
          p: { a: 0, k: [0, 0] },
          s: { a: 0, k: [40, 50] },
        },
        {
          ty: 'fl',
          c: { a: 0, k: [0.8, 0.36, 0.97, 1] },
          o: { a: 0, k: 100 },
          r: 1,
          bm: 0,
          nm: 'Fill 1',
        },
      ],
    },
  ],
};

export default function Animations() {
  const [playing, setPlaying] = useState<{ [key: string]: boolean }>({
    doctor: true,
    heart: true,
    brain: true,
  });

  const animationCards = [
    {
      id: 'doctor',
      title: 'Doctor',
      description: 'Medical professional icon',
      animation: doctorAnimation,
      color: 'from-primary-500 to-secondary-300',
    },
    {
      id: 'heart',
      title: 'Heartbeat',
      description: 'Pulsing heart animation',
      animation: heartAnimation,
      color: 'from-danger-500 to-warning-400',
    },
    {
      id: 'brain',
      title: 'Brain',
      description: 'Neural thinking animation',
      animation: brainAnimation,
      color: 'from-purple-500 to-primary-500',
    },
  ];

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

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl font-bold mb-4">
            <span className="gradient-text">Lottie Animations</span>
          </h1>
          <p className="text-neutral-600 text-lg">
            Beautiful, lightweight animations throughout CureAI
          </p>
        </motion.div>

        {/* Animation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {animationCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <GlassCard hover>
                <div className="space-y-6">
                  {/* Animation Container */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex justify-center p-6 rounded-xl bg-gradient-to-br from-neutral-900 to-neutral-800 border border-white/10"
                  >
                    <div className="w-32 h-32">
                      <Lottie
                        animationData={card.animation}
                        loop={playing[card.id]}
                        autoplay={playing[card.id]}
                      />
                    </div>
                  </motion.div>

                  {/* Info */}
                  <div className="space-y-2 text-center">
                    <h3 className="text-xl font-bold text-neutral-900">{card.title}</h3>
                    <p className="text-sm text-neutral-600">{card.description}</p>
                  </div>

                  {/* Control Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() =>
                      setPlaying((prev) => ({
                        ...prev,
                        [card.id]: !prev[card.id],
                      }))
                    }
                    className={`w-full py-2 rounded-lg font-semibold transition-all ${
                      playing[card.id]
                        ? `bg-gradient-to-r ${card.color} text-white`
                        : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                    }`}
                  >
                    {playing[card.id] ? 'Pause' : 'Play'}
                  </motion.button>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-16"
        >
          <GlassCard hover={false}>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">About Lottie Animations</h2>
              <div className="space-y-3 text-neutral-700">
                <p>
                  ✨ <strong>Lightweight:</strong> Small file sizes for fast loading times
                </p>
                <p>
                  🎨 <strong>Scalable:</strong> Animations remain crisp at any resolution
                </p>
                <p>
                  ⚡ <strong>Performant:</strong> GPU-accelerated rendering for smooth motion
                </p>
                <p>
                  🎯 <strong>Interactive:</strong> Can be controlled, triggered, or looped
                </p>
                <p>
                  🌍 <strong>Universal:</strong> Works across all devices and browsers
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </main>
  );
}
