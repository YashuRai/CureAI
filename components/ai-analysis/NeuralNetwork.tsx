'use client';

import { motion } from 'framer-motion';

const NeuralNetwork = () => {
  const nodes = Array.from({ length: 8 }, (_, i) => i);
  const connections = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [3, 4],
    [3, 5],
    [4, 6],
    [5, 6],
    [6, 7],
  ];

  return (
    <motion.div
      className="glass rounded-2xl p-12 border border-white/20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-neutral-600 uppercase tracking-wider">AI Neural Network Active</p>

        <svg
          viewBox="0 0 400 300"
          className="w-full max-w-md h-auto"
          style={{ filter: 'drop-shadow(0 0 20px rgba(37, 99, 235, 0.3))' }}
        >
          {/* Connections */}
          {connections.map((conn, idx) => {
            const startNode = nodes[conn[0]];
            const endNode = nodes[conn[1]];
            const startX = 50 + (startNode % 3) * 150;
            const startY = 50 + Math.floor(startNode / 3) * 100;
            const endX = 50 + (endNode % 3) * 150;
            const endY = 50 + Math.floor(endNode / 3) * 100;

            return (
              <motion.line
                key={idx}
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                stroke="url(#connectionGradient)"
                strokeWidth="2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const x = 50 + (node % 3) * 150;
            const y = 50 + Math.floor(node / 3) * 100;

            return (
              <motion.g key={node}>
                {/* Node Glow */}
                <motion.circle
                  cx={x}
                  cy={y}
                  r="20"
                  fill="#2563EB"
                  opacity="0.2"
                  animate={{
                    r: [20, 30, 20],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: node * 0.1,
                  }}
                />

                {/* Node Circle */}
                <motion.circle
                  cx={x}
                  cy={y}
                  r="8"
                  fill="url(#nodeGradient)"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: node * 0.1,
                  }}
                />
              </motion.g>
            );
          })}

          {/* Gradients */}
          <defs>
            <linearGradient
              id="connectionGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#2563EB" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00D4FF" stopOpacity="0.8" />
            </linearGradient>
            <radialGradient id="nodeGradient">
              <stop offset="0%" stopColor="#00D4FF" />
              <stop offset="100%" stopColor="#2563EB" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  );
};

export default NeuralNetwork;
