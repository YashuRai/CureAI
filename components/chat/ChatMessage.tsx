'use client';

import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  isLoading?: boolean;
}

interface ChatMessageProps {
  message: Message;
}

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.sender === 'user';

  if (message.isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex gap-3"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-300 flex items-center justify-center flex-shrink-0">
          <Heart className="text-white" size={16} />
        </div>
        <motion.div
          className="glass rounded-2xl px-6 py-3 max-w-xs md:max-w-md flex items-center gap-2"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="flex gap-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary-500 rounded-full"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
              />
            ))}
          </div>
          <span className="text-sm text-neutral-600">Thinking...</span>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`}
    >
      {/* Avatar */}
      {!isUser && (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-secondary-300 flex items-center justify-center flex-shrink-0 shadow-lg"
        >
          <Heart className="text-white" size={16} />
        </motion.div>
      )}

      {/* Message Bubble */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={`${
          isUser
            ? 'bg-gradient-to-br from-primary-500 to-secondary-300 text-white rounded-3xl rounded-tr-lg'
            : 'glass border border-white/20 text-neutral-900 rounded-3xl rounded-tl-lg'
        } px-6 py-3 max-w-xs md:max-w-md break-words shadow-lg`}
        whileHover={{
          boxShadow: isUser
            ? '0 8px 25px rgba(37, 99, 235, 0.5)'
            : '0 8px 32px rgba(31, 38, 135, 0.15)',
        }}
      >
        <p className="text-sm md:text-base leading-relaxed">{message.text}</p>
      </motion.div>

      {/* Timestamp */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.2 }}
        className="text-xs text-neutral-500 self-center"
      >
        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
      </motion.div>
    </motion.div>
  );
};

export default ChatMessage;
