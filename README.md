# Liphera - AI-Powered Lip Reading Device Frontend

A revolutionary Next.js-powered frontend interface for a Raspberry Pi-based lip-reading device. This project provides an intuitive, animated, and industry-ready user interface for managing AI-powered lip reading technology.

## 🚀 Features

- **Modern UI/UX**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Stunning Animations**: Powered by GSAP, Framer Motion, and Anime.js
- **Responsive Design**: Works seamlessly across all devices
- **Language Management**: Download and manage multiple language models
- **Device Settings**: Comprehensive configuration for Raspberry Pi optimization
- **Real-time Status**: Live connection monitoring and device status
- **Glass Morphism**: Modern design with glass effects and gradient backgrounds

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Shadcn/ui with Radix UI primitives
- **Animations**: 
  - GSAP for advanced timeline animations
  - Framer Motion for React component animations
  - Anime.js for additional animation effects
- **Icons**: Lucide React
- **Development**: ESLint, Turbopack for fast development

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Liphera_2
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles and design system
│   ├── layout.tsx          # Root layout
│   └── page.tsx           # Home page
├── components/
│   ├── animations/         # Animation components
│   │   └── AnimatedBackground.tsx
│   ├── features/          # Feature-specific components
│   │   ├── HeroSection.tsx
│   │   ├── LanguageSection.tsx
│   │   └── SettingsSection.tsx
│   ├── layout/            # Layout components
│   │   └── Navigation.tsx
│   └── ui/                # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── input.tsx
├── lib/
│   └── utils.ts           # Utility functions
└── types/                 # TypeScript type definitions
```

## 🎨 Design System

The project uses a comprehensive design system with:

- **Color Palette**: HSL-based color system with dark mode support
- **Typography**: Geist Sans and Geist Mono fonts
- **Spacing**: Consistent spacing scale
- **Animations**: Custom keyframes and transitions
- **Components**: Reusable UI components with variants

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific settings:

```env
NEXT_PUBLIC_API_URL=http://your-raspberry-pi-ip:8080
NEXT_PUBLIC_DEVICE_NAME=Liphera Device 01
```

### Raspberry Pi Integration

The frontend is designed to communicate with a Raspberry Pi backend. Configure the following in the settings:

- **IP Address**: Your Raspberry Pi's IP address
- **Port**: Communication port (default: 8080)
- **Camera Settings**: Resolution and processing preferences
- **Language Models**: Downloadable AI models for different languages

## 🚀 Deployment

### Production Build

```bash
npm run build
npm start
```

### Docker Deployment

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 📱 Features Overview

### 1. Landing Page
- Animated hero section with floating elements
- Feature highlights with hover effects
- Call-to-action buttons with gradient styling

### 2. Language Management
- Grid-based language model display
- Download progress indicators
- Real-time status updates
- Model information (size, version, accuracy)

### 3. Device Settings
- Network configuration
- Camera settings and calibration
- Processing mode selection
- Audio and display preferences
- Connection status monitoring

### 4. Animations
- GSAP-powered page transitions
- Framer Motion component animations
- Scroll-triggered animations
- Floating background elements
- Glass morphism effects

## 🎭 Animation Features

- **Hero Animations**: Staggered text animations on load
- **Scroll Animations**: Elements animate in as they enter viewport
- **Hover Effects**: Interactive hover states for cards and buttons
- **Loading States**: Smooth progress indicators and loading animations
- **Background**: Animated particle system with floating elements

## 🔒 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by modern design systems and animation libraries
- Built with industry-standard tools and practices
- Optimized for Raspberry Pi deployment
- Designed for accessibility and performance

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Ready to deploy!** This frontend is production-ready and optimized for your Raspberry Pi lip-reading device.
