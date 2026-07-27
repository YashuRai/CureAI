'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, Mic, Plus } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [input, setInput] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const suggestedQuestions = [
    'How is my sleep quality?',
    'What about my heart rate?',
    'Tell me about my activity',
  ];

  return (
    <motion.div className="w-full space-y-4">
      {/* Quick Suggestions */}
      {input === '' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-2"
        >
          {suggestedQuestions.map((question, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setInput(question);
                setTimeout(() => onSendMessage(question), 100);
              }}
              className="glass rounded-lg px-4 py-2 text-sm text-neutral-700 hover:bg-white/50 transition-colors border border-white/20 text-left"
            >
              ✨ {question}
            </motion.button>
          ))}
        </motion.div>
      )}

      {/* Input Area */}
      <motion.div
        animate={{
          boxShadow: isFocused
            ? '0 0 40px rgba(37, 99, 235, 0.4)'
            : '0 8px 32px rgba(31, 38, 135, 0.15)',
        }}
        className="glass rounded-2xl border border-white/20 p-4 backdrop-blur-xl"
      >
        <div className="flex items-end gap-3">
          {/* Action Buttons */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg hover:bg-white/30 transition-colors text-primary-500"
          >
            <Plus size={20} />
          </motion.button>

          {/* Input Field */}
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Ask me about your health..."
            rows={1}
            className="flex-1 bg-transparent outline-none text-neutral-900 placeholder-neutral-500 resize-none text-base"
            style={{ maxHeight: '120px' }}
          />

          {/* Voice Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 rounded-lg hover:bg-white/30 transition-colors text-primary-500"
          >
            <Mic size={20} />
          </motion.button>

          {/* Send Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            disabled={!input.trim()}
            className="p-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-300 text-white hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <motion.div
              animate={input.trim() ? { x: [0, 3, 0] } : {}}
              transition={{ duration: 0.6, repeat: Infinity }}
            >
              <Send size={20} />
            </motion.div>
          </motion.button>
        </div>
      </motion.div>

      {/* Helper Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-xs text-neutral-500 text-center"
      >
        Press Enter to send • Shift+Enter for new line
      </motion.p>
    </motion.div>
  );
};

export default ChatInput;
