# CureAI - Next-Generation Healthcare Platform

A premium, AI-powered healthcare platform with modern UI/UX design inspired by Apple, Stripe, Vercel, and Linear.

## 🎯 Vision

To create a healthcare platform that feels like the future - elegant, intuitive, and packed with premium interactions that make users say "Wow" within 10 seconds.

## 🎨 Design System

### Colors
- **Primary**: #2563EB (Premium Blue)
- **Secondary**: #00D4FF (Cyan)
- **Success**: #22C55E (Green)
- **Warning**: #F59E0B (Amber)
- **Danger**: #EF4444 (Red)
- **Purple Accent**: #8B5CF6
- **Emerald Accent**: #10B981

### Typography
- Inter, SF Pro Display, Plus Jakarta Sans

### Effects
- Glassmorphism with backdrop blur
- Premium shadows and gradients
- Smooth animations and transitions
- Micro-interactions on every element

## 🚀 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Charts**: Recharts
- **State**: Zustand
- **Icons**: Lucide React, Lottie
- **3D Graphics**: Three.js (coming soon)

## 📦 Installation

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## 📂 Project Structure

```
.
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home/Landing page
│   ├── dashboard/
│   │   └── page.tsx        # Dashboard page
│   ├── chat/
│   │   ├── page.tsx        # Chat page
│   │   └── layout.tsx      # Chat layout
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── PremiumButton.tsx    # Premium button component
│   ├── GlassCard.tsx        # Glass card component
│   ├── BackgroundAnimation.tsx # Animated background
│   ├── landing/
│   │   ├── Hero.tsx         # Hero section
│   │   ├── Features.tsx     # Features section
│   │   └── CTA.tsx          # Call-to-action section
│   ├── dashboard/
│   │   ├── DashboardHeader.tsx      # Dashboard header
│   │   ├── HealthScoreRing.tsx      # Animated health score
│   │   ├── MetricsGrid.tsx          # Real-time metrics
│   │   ├── ChartSection.tsx         # Data visualization
│   │   └── RecentActivity.tsx       # Activity timeline
│   └── chat/
│       ├── ChatContainer.tsx        # Chat container
│       ├── ChatMessages.tsx         # Messages list
│       ├── ChatMessage.tsx          # Single message
│       └── ChatInput.tsx            # Input area
├── styles/
│   └── scrollbar.css        # Custom scrollbar
├── tailwind.config.ts       # Tailwind config
└── package.json             # Dependencies
```

## ✨ Features

### Phase 1: Foundation ✅
- [x] Tailwind config with premium color system
- [x] Glassmorphism components
- [x] Framer Motion animations
- [x] Premium button with ripple effect
- [x] Glass card component
- [x] Animated navbar with smooth transitions

### Phase 2: Landing Page ✅
- [x] Aurora background with animated particles
- [x] Animated hero section
- [x] Feature cards with hover effects
- [x] Call-to-action section
- [x] Statistics counter
- [x] Responsive design

### Phase 2.5: Dashboard ✅
- [x] Animated health score ring with glow effect
- [x] Real-time metrics grid (6 metrics)
- [x] Advanced chart animations (Line, Area, Bar)
- [x] Recent activity timeline
- [x] Greeting animation
- [x] Staggered card animations

### Phase 3: AI Chat ✅
- [x] ChatGPT-style glass interface
- [x] Streaming message animations
- [x] Voice input button
- [x] Suggested quick questions
- [x] Typing indicator animation
- [x] Message history with timestamps
- [x] Auto-scroll to latest message
- [x] Responsive chat layout

### Phase 4: Premium Features (In Progress)
- [ ] Health Twin 3D avatar
- [ ] AI Analysis mode with neural network animation
- [ ] Voice streaming responses
- [ ] Lottie animations

### Phase 5: Polish & Details (Upcoming)
- [ ] Sound design integration
- [ ] Mobile responsiveness refinement
- [ ] Performance optimization
- [ ] Advanced interactions

## 🎬 Page Transitions

- Fade
- Slide
- Scale
- Blur
- Spring animations

## 🎮 Micro Interactions

- Buttons lift while hovering
- Cards float on hover
- Icons animate
- Charts draw themselves
- Numbers count up
- Progress bars animate
- Health score pulses
- Every click has ripple effects
- Message animations on send/receive
- Typing indicator with bouncing dots

## 📱 Responsive

Perfect experience on:
- Desktop
- Tablet
- Mobile

## 🏗️ Design Principles

1. **Premium First** - Every pixel should feel expensive
2. **Motion Matters** - Smooth animations at 60fps
3. **Accessibility** - Respects `prefers-reduced-motion`
4. **Performance** - GPU acceleration for animations
5. **Consistency** - Unified design language throughout

## 🔒 Security

- Military-grade encryption
- HIPAA compliant
- Regular security audits

## 📄 License

MIT

## 🙏 Credits

Designed and built by the CureAI team.

Inspired by:
- Apple Design Language
- Stripe
- Vercel
- Linear
- Arc Browser
- Tesla
- Notion AI
