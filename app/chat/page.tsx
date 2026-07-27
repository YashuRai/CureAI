'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import ChatContainer from '@/components/chat/ChatContainer';
import ChatInput from '@/components/chat/ChatInput';
import ChatMessages from '@/components/chat/ChatMessages';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
  isLoading?: boolean;
}

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your personal health assistant. I can help you with health insights, answer medical questions, and provide personalized wellness recommendations. What would you like to know today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);

  const handleSendMessage = async (text: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Add loading message
    const loadingMessage: Message = {
      id: `loading-${Date.now()}`,
      text: '',
      sender: 'ai',
      timestamp: new Date(),
      isLoading: true,
    };

    setMessages((prev) => [...prev, loadingMessage]);

    // Simulate AI response delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Generate mock response based on user input
    const mockResponses: { [key: string]: string } = {
      sleep: 'Based on your recent data, you\'re getting excellent sleep quality. Your sleep score of 8.2 hours is within the healthy range. To maintain this, try to keep a consistent bedtime routine and avoid screens 30 minutes before sleep.',
      heart: 'Your resting heart rate is 72 bpm, which is in the healthy range. Regular exercise and stress management can help maintain or improve your cardiovascular health. Keep up the great work!',
      exercise: 'You\'ve been quite active this week with over 8,000+ steps daily. This is great! Continue with this routine and consider adding some strength training for comprehensive fitness.',
      water: 'You\'re doing well with hydration at 2.4L today. Aim for about 2-3 liters per day depending on your activity level. Drinking water before, during, and after exercise is especially important.',
      stress: 'Stress management is crucial for overall health. Consider practicing meditation, yoga, or deep breathing exercises. Your consistent sleep schedule also helps manage stress levels.',
      default: 'That\'s a great question! Based on your health data, I\'d recommend focusing on maintaining your current routine while gradually increasing your physical activity. Would you like specific recommendations in any area?',
    };

    let response = mockResponses.default;

    if (text.toLowerCase().includes('sleep')) {
      response = mockResponses.sleep;
    } else if (text.toLowerCase().includes('heart')) {
      response = mockResponses.heart;
    } else if (text.toLowerCase().includes('exercise') || text.toLowerCase().includes('activity')) {
      response = mockResponses.exercise;
    } else if (text.toLowerCase().includes('water') || text.toLowerCase().includes('hydration')) {
      response = mockResponses.water;
    } else if (text.toLowerCase().includes('stress')) {
      response = mockResponses.stress;
    }

    // Remove loading message and add actual response
    setMessages((prev) => [
      ...prev.filter((msg) => !msg.isLoading),
      {
        id: `response-${Date.now()}`,
        text: response,
        sender: 'ai',
        timestamp: new Date(),
      },
    ]);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-premium-light via-white to-neutral-100 flex flex-col">
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

      {/* Chat Container */}
      <ChatContainer messages={messages} onSendMessage={handleSendMessage} />
    </main>
  );
}
