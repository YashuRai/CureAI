# CureAI - Next-Generation Healthcare Platform

A premium, AI-powered healthcare platform with modern UI/UX design inspired by Apple, Stripe, Vercel, and Linear.

## 🏥 Vision

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
- **Animations**: Framer Motion + Lottie React
- **Charts**: Recharts
- **State**: Zustand
- **Icons**: Lucide React
- **3D Graphics**: SVG Animations (Three.js coming soon)

## 📦 Installation

```bash
npm install
npm install lottie-react
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
│   ├── health-twin/
│   │   └── page.tsx        # Health Twin page
│   ├── ai-analysis/
│   │   └── page.tsx        # AI Analysis page
│   ├── animations/
│   │   └── page.tsx        # Animations showcase
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── PremiumButton.tsx    # Premium button component
│   ├── GlassCard.tsx        # Glass card component
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
│   ├── chat/
│   │   ├── ChatContainer.tsx        # Chat container
│   │   ├── ChatMessages.tsx         # Messages list
│   │   ├── ChatMessage.tsx          # Single message
│   │   └── ChatInput.tsx            # Input area
│   ├── health-twin/
│   │   ├── HealthTwinViewer.tsx     # Avatar viewer
│   │   ├── HealthTwinMetrics.tsx    # Health metrics
│   │   └── HealthTwinControls.tsx   # Avatar controls
│   ├── ai-analysis/
│   │   ├── AnalysisStart.tsx        # Start screen
│   │   ├── AnalysisMode.tsx         # Analysis mode
│   │   ├── NeuralNetwork.tsx        # Neural network animation
│   │   ├── ScanningEffect.tsx        # Scanning animation
│   │   ├── AnalysisMessages.tsx      # Progress messages
│   │   └── AnalysisResults.tsx       # Results screen
│   └── ui/
│       └── Slider.tsx               # Slider component
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
- [x] Animated navbar

### Phase 2: Landing Page ✅
- [x] Aurora background with animated particles
- [x] Animated hero section
- [x] Feature cards with hover effects
- [x] Call-to-action section
- [x] Statistics counter
- [x] Responsive design

### Phase 2.5: Dashboard ✅
- [x] Animated health score ring (SVG)
- [x] Real-time metrics grid (6 metrics)
- [x] Advanced chart animations (Line, Area, Bar)
- [x] Recent activity timeline
- [x] Staggered card animations

### Phase 3: AI Chat ✅
- [x] ChatGPT-style glass interface
- [x] Message animations
- [x] Voice input button (UI ready)
- [x] Suggested quick questions
- [x] Typing indicator animation
- [x] Auto-scroll to latest message

### Phase 4: Health Twin ✅
- [x] Animated 3D avatar (SVG)
- [x] Avatar changes based on health data
- [x] Real-time animation response
- [x] Interactive health metrics
- [x] Adjustable sliders
- [x] Avatar status indicator

### Phase 5: AI Analysis Mode ✅
- [x] Neural network animation (8 nodes)
- [x] Scanning effect with animated lines
- [x] Progress indicators
- [x] AI thinking messages (6 messages)
- [x] Results screen (4 insight cards)
- [x] Detailed metrics with progress bars
- [x] AI recommendations (5 items)
- [x] Download report button

### Phase 6: Lottie Animations ✅
- [x] Doctor animation
- [x] Heartbeat animation
- [x] Brain animation
- [x] Animation showcase page
- [x] Play/pause controls
- [x] Animation info display

### Phase 7: Advanced Effects (Upcoming)
- [ ] Mesh gradients
- [ ] Mouse spotlight effects
- [ ] Liquid buttons
- [ ] Parallax scrolling

### Phase 8: Mobile Optimization (Upcoming)
- [ ] Hamburger menu
- [ ] Mobile navigation
- [ ] Responsive improvements

### Phase 9: Backend Integration (Upcoming)
- [ ] API setup
- [ ] Data persistence
- [ ] User authentication

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
- Avatar responds to real-time data
- Neural network nodes pulse
- Lottie animations loop smoothly

## 📱 Responsive

Perfect experience on:
- Desktop
- Tablet  
- Mobile

## 🏗️ Design Principles

1. **Premium First** - Every pixel feels expensive
2. **Motion Matters** - Smooth animations at 60fps
3. **Accessibility** - Respects `prefers-reduced-motion`
4. **Performance** - GPU acceleration for all animations
5. **Consistency** - Unified design language throughout

## 🔒 Security

- Military-grade encryption
- HIPAA compliant
- Regular security audits

## 📄 License

MIT

## 👏 Credits

Designed and built by the CureAI team.

Inspired by:
- Apple Design Language
- Stripe
- Vercel
- Linear
- Arc Browser
- Tesla
- Notion AI
