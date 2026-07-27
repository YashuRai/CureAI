'use client';

import { motion } from 'framer-motion';
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';
import GlassCard from '../GlassCard';

const ChartSection = () => {
  // Heart Rate Data
  const heartRateData = [
    { time: '6am', rate: 58 },
    { time: '9am', rate: 72 },
    { time: '12pm', rate: 75 },
    { time: '3pm', rate: 68 },
    { time: '6pm', rate: 82 },
    { time: '9pm', rate: 70 },
    { time: '12am', rate: 62 },
  ];

  // Activity Data
  const activityData = [
    { day: 'Mon', steps: 8234, calories: 520 },
    { day: 'Tue', steps: 9100, calories: 610 },
    { day: 'Wed', steps: 7500, calories: 480 },
    { day: 'Thu', steps: 10200, calories: 720 },
    { day: 'Fri', steps: 11000, calories: 780 },
    { day: 'Sat', steps: 9500, calories: 650 },
    { day: 'Sun', steps: 6000, calories: 400 },
  ];

  // Sleep Data
  const sleepData = [
    { time: '10pm', duration: 0 },
    { time: '11pm', duration: 2 },
    { time: '12am', duration: 4 },
    { time: '1am', duration: 6 },
    { time: '2am', duration: 7 },
    { time: '3am', duration: 7 },
    { time: '4am', duration: 6 },
    { time: '5am', duration: 4 },
    { time: '6am', duration: 2 },
    { time: '7am', duration: 0 },
  ];

  const chartConfig = {
    margin: { top: 10, right: 30, left: 0, bottom: 0 },
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass rounded-lg p-3 border border-white/20 text-sm">
          <p className="font-semibold text-neutral-900">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }}>
              {entry.name}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-4">
      <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl font-bold"
      >
        <span className="gradient-text">Health Analytics</span>
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Heart Rate Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <GlassCard>
            <h3 className="text-lg font-semibold mb-4 text-neutral-900">Heart Rate Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={heartRateData} {...chartConfig}>
                <defs>
                  <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#00D4FF" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="time" stroke="#94A3B8" style={{ fontSize: '12px' }} />
                <YAxis stroke="#94A3B8" style={{ fontSize: '12px' }} />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="rate"
                  stroke="url(#colorRate)"
                  strokeWidth={3}
                  dot={false}
                  isAnimationActive={true}
                  animationDuration={2000}
                />
              </LineChart>
            </ResponsiveContainer>
          </GlassCard>
        </motion.div>

        {/* Sleep Duration Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard>
            <h3 className="text-lg font-semibold mb-4 text-neutral-900">Sleep Duration</h3>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={sleepData} {...chartConfig}>
                <defs>
                  <linearGradient id="colorSleep" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
                <XAxis dataKey="time" stroke="#94A3B8" style={{ fontSize: '12px' }} />
                <YAxis stroke="#94A3B8" style={{ fontSize: '12px' }} />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="duration"
                  stroke="#8B5CF6"
                  fill="url(#colorSleep)"
                  isAnimationActive={true}
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </GlassCard>
        </motion.div>
      </div>

      {/* Activity Chart - Full Width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <GlassCard>
          <h3 className="text-lg font-semibold mb-4 text-neutral-900">Weekly Activity</h3>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={activityData} {...chartConfig}>
              <defs>
                <linearGradient id="colorSteps" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563EB" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#00D4FF" stopOpacity={0.5} />
                </linearGradient>
                <linearGradient id="colorCalories" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#F59E0B" stopOpacity={0.5} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.1)" />
              <XAxis dataKey="day" stroke="#94A3B8" style={{ fontSize: '12px' }} />
              <YAxis stroke="#94A3B8" style={{ fontSize: '12px' }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar
                dataKey="steps"
                fill="url(#colorSteps)"
                name="Steps"
                radius={[8, 8, 0, 0]}
                isAnimationActive={true}
                animationDuration={2000}
              />
              <Bar
                dataKey="calories"
                fill="url(#colorCalories)"
                name="Calories"
                radius={[8, 8, 0, 0]}
                isAnimationActive={true}
                animationDuration={2000}
                animationDelay={200}
              />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default ChartSection;
