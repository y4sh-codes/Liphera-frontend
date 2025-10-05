'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedBackground } from '@/components/animations/AnimatedBackground';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { 
  ArrowLeft, 
  Book, 
  Code, 
  Cpu, 
  Download, 
  Eye, 
  Play, 
  Settings, 
  Shield, 
  Terminal, 
  Wifi,
  AlertCircle,
  Info,
  Zap,
  Database,
  Camera,
  Network
} from 'lucide-react';

export default function DocumentationPage() {
  const [activeSection, setActiveSection] = useState('overview');
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    const cards = sectionRef.current.querySelectorAll('.doc-card');
    
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    gsap.fromTo(cards,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }
    );
  }, [activeSection]);

  const sections = [
    { id: 'overview', label: 'Overview', icon: Book },
    { id: 'installation', label: 'Installation', icon: Download },
    { id: 'configuration', label: 'Configuration', icon: Settings },
    { id: 'usage', label: 'Usage Guide', icon: Play },
    { id: 'languages', label: 'Language Models', icon: Database },
    { id: 'api', label: 'API Reference', icon: Code },
    { id: 'troubleshooting', label: 'Troubleshooting', icon: AlertCircle },
    { id: 'faq', label: 'FAQ', icon: Info },
  ];

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      
      <div className="relative z-10 pt-24">
        <div className="container mx-auto px-6 py-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-8"
          >
            <Link href="/">
              <Button variant="outline" className="glass-button text-white border-white/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          <motion.h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-gradient-purple mb-4"
          >
            Documentation
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-300 mb-12 max-w-3xl"
          >
            Complete guide to setting up, configuring, and using your Liphera lip-reading device. 
            From installation to advanced customization.
          </motion.p>

          {/* Navigation Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            {sections.map((section) => (
              <Button
                key={section.id}
                variant={activeSection === section.id ? "default" : "outline"}
                onClick={() => setActiveSection(section.id)}
                className={`${
                  activeSection === section.id 
                    ? 'btn-gradient glass-button' 
                    : 'glass-button text-white border-white/30'
                } transition-all duration-300`}
              >
                <section.icon className="mr-2 h-4 w-4" />
                {section.label}
              </Button>
            ))}
          </motion.div>

          {/* Content */}
          <div ref={sectionRef}>
            {activeSection === 'overview' && <OverviewSection />}
            {activeSection === 'installation' && <InstallationSection />}
            {activeSection === 'configuration' && <ConfigurationSection />}
            {activeSection === 'usage' && <UsageSection />}
            {activeSection === 'languages' && <LanguagesSection />}
            {activeSection === 'api' && <APISection />}
            {activeSection === 'troubleshooting' && <TroubleshootingSection />}
            {activeSection === 'faq' && <FAQSection />}
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}

// Overview Section
function OverviewSection() {
  return (
    <div className="space-y-8">
      <motion.div className="doc-card">
        <Card className="glass-card glow-blue">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Eye className="mr-2 h-5 w-5 text-blue-400" />
              What is Liphera?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>
              Liphera is an advanced AI-powered lip-reading system designed specifically for Raspberry Pi devices. 
              It uses state-of-the-art computer vision and deep learning models to convert silent speech into text in real-time.
            </p>
            <p>
              The system is built for accessibility, privacy, and ease of use, making communication possible for 
              hearing-impaired individuals or in noise-sensitive environments.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="doc-card">
        <Card className="glass-card hover:glow-blue transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Zap className="mr-2 h-5 w-5 text-yellow-400" />
              Key Features
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FeatureItem icon={Eye} title="Real-time Processing" description="Process lip movements with minimal latency" />
              <FeatureItem icon={Database} title="Multi-language Support" description="50+ language models available" />
              <FeatureItem icon={Shield} title="Privacy First" description="All processing happens locally" />
              <FeatureItem icon={Cpu} title="Raspberry Pi Optimized" description="Efficient performance on Pi hardware" />
              <FeatureItem icon={Camera} title="HD Video Processing" description="Support for 1080p video input" />
              <FeatureItem icon={Network} title="Offline Capable" description="Works without internet connection" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="doc-card">
        <Card className="glass-card hover:glow-blue transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Cpu className="mr-2 h-5 w-5 text-purple-400" />
              System Requirements
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold mb-3">Hardware Requirements</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Raspberry Pi 4 (4GB RAM minimum, 8GB recommended)</li>
                  <li>• USB Camera or Pi Camera Module v2/v3</li>
                  <li>• MicroSD Card (32GB minimum, Class 10)</li>
                  <li>• Power Supply (5V 3A)</li>
                  <li>• HDMI Display (optional)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Software Requirements</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Raspberry Pi OS (64-bit recommended)</li>
                  <li>• Python 3.8+</li>
                  <li>• OpenCV 4.5+</li>
                  <li>• PyTorch 1.12+</li>
                  <li>• Node.js 18+ (for web interface)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

// Installation Section
function InstallationSection() {
  return (
    <div className="space-y-8">
      <motion.div className="doc-card">
        <Card className="glass-card glow-blue">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Download className="mr-2 h-5 w-5 text-green-400" />
              Quick Installation
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>Follow these steps to get Liphera running on your Raspberry Pi:</p>
            <CodeBlock 
              title="1. Download and flash Raspberry Pi OS"
              code={`# Download Raspberry Pi Imager
# Flash Raspberry Pi OS (64-bit) to your SD card
# Enable SSH and configure WiFi during imaging`}
            />
            <CodeBlock 
              title="2. Install system dependencies"
              code={`sudo apt update && sudo apt upgrade -y
sudo apt install python3-pip nodejs npm git cmake -y
sudo apt install libopencv-dev python3-opencv -y`}
            />
            <CodeBlock 
              title="3. Clone Liphera repository"
              code={`git clone https://github.com/liphera/liphera-pi.git
cd liphera-pi
chmod +x install.sh`}
            />
            <CodeBlock 
              title="4. Run installation script"
              code={`./install.sh
# This will install Python dependencies, PyTorch, and the web interface`}
            />
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="doc-card">
        <Card className="glass-card hover:glow-blue transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Terminal className="mr-2 h-5 w-5 text-blue-400" />
              Manual Installation
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>For advanced users who prefer manual installation:</p>
            <CodeBlock 
              title="Python Environment Setup"
              code={`python3 -m venv liphera-env
source liphera-env/bin/activate
pip install -r requirements.txt`}
            />
            <CodeBlock 
              title="Install PyTorch for ARM"
              code={`pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu`}
            />
            <CodeBlock 
              title="Web Interface Setup"
              code={`cd web-interface
npm install
npm run build
npm start`}
            />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

// Configuration Section
function ConfigurationSection() {
  return (
    <div className="space-y-8">
      <motion.div className="doc-card">
        <Card className="glass-card glow-blue">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Settings className="mr-2 h-5 w-5 text-indigo-400" />
              Initial Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>Configure your Liphera device for optimal performance:</p>
            
            <div className="space-y-6">
              <ConfigSection 
                title="Camera Setup"
                icon={Camera}
                items={[
                  "Connect USB camera or Pi Camera Module",
                  "Test camera with: sudo raspi-config → Interface Options → Camera",
                  "Adjust camera position for optimal lip visibility",
                  "Configure resolution and frame rate in settings"
                ]}
              />
              
              <ConfigSection 
                title="Network Configuration"
                icon={Wifi}
                items={[
                  "Configure WiFi for model downloads",
                  "Set static IP for consistent access",
                  "Configure firewall rules if needed",
                  "Test connectivity with ping google.com"
                ]}
              />
              
              <ConfigSection 
                title="Performance Optimization"
                icon={Zap}
                items={[
                  "Enable GPU memory split: sudo raspi-config → Advanced → Memory Split → 128",
                  "Overclock CPU for better performance (optional)",
                  "Configure swap file for memory management",
                  "Disable unnecessary services to free resources"
                ]}
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

// Usage Section
function UsageSection() {
  return (
    <div className="space-y-8">
      <motion.div className="doc-card">
        <Card className="glass-card glow-blue">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Play className="mr-2 h-5 w-5 text-green-400" />
              Getting Started
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>Start using Liphera in a few simple steps:</p>
            
            <div className="space-y-4">
              <UsageStep 
                number="1"
                title="Launch the Application"
                description="Start Liphera from the desktop or command line"
                code="./liphera-start.sh"
              />
              
              <UsageStep 
                number="2"
                title="Access Web Interface"
                description="Open your browser and navigate to the device IP"
                code="http://192.168.1.100:3000"
              />
              
              <UsageStep 
                number="3"
                title="Download Language Model"
                description="Go to Languages page and download your preferred model"
              />
              
              <UsageStep 
                number="4"
                title="Configure Settings"
                description="Adjust camera, processing, and output settings"
              />
              
              <UsageStep 
                number="5"
                title="Start Lip Reading"
                description="Position yourself in front of the camera and start speaking"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

// Languages Section
function LanguagesSection() {
  return (
    <div className="space-y-8">
      <motion.div className="doc-card">
        <Card className="glass-card glow-blue">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Database className="mr-2 h-5 w-5 text-purple-400" />
              Language Models
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>Liphera supports multiple language models with varying accuracy and performance characteristics:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <LanguageModelCard 
                language="English"
                accuracy="95.2%"
                size="1.2 GB"
                type="Production"
                description="Highly accurate model trained on diverse English speakers"
              />
              <LanguageModelCard 
                language="Spanish"
                accuracy="92.8%"
                size="1.1 GB"
                type="Production"
                description="Comprehensive Spanish model with regional variations"
              />
              <LanguageModelCard 
                language="French"
                accuracy="91.5%"
                size="1.0 GB"
                type="Beta"
                description="French model with good accuracy for European French"
              />
              <LanguageModelCard 
                language="German"
                accuracy="90.3%"
                size="1.3 GB"
                type="Beta"
                description="German model optimized for clear pronunciation"
              />
            </div>
            
            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <h4 className="text-white font-semibold mb-2 flex items-center">
                <Info className="mr-2 h-4 w-4 text-blue-400" />
                Model Performance Tips
              </h4>
              <ul className="text-sm space-y-1">
                <li>• Production models offer the best accuracy for real-world use</li>
                <li>• Beta models are still being improved and may have occasional errors</li>
                <li>• Larger models generally provide better accuracy but use more resources</li>
                <li>• Models can be switched on-the-fly without restarting the system</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

// API Section
function APISection() {
  return (
    <div className="space-y-8">
      <motion.div className="doc-card">
        <Card className="glass-card glow-blue">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Code className="mr-2 h-5 w-5 text-green-400" />
              REST API Reference
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-4">
            <p>Integrate Liphera with your applications using our REST API:</p>
            
            <APIEndpoint 
              method="GET"
              endpoint="/api/status"
              description="Get current system status and health"
              response={`{
  "status": "running",
  "cpu_usage": 45.2,
  "memory_usage": 62.1,
  "temperature": 42.5,
  "camera_connected": true
}`}
            />
            
            <APIEndpoint 
              method="POST"
              endpoint="/api/process"
              description="Process video frame for lip reading"
              request={`{
  "image": "base64_encoded_image",
  "language": "en-US",
  "confidence_threshold": 0.8
}`}
              response={`{
  "text": "Hello world",
  "confidence": 0.92,
  "processing_time": 0.15
}`}
            />
            
            <APIEndpoint 
              method="GET"
              endpoint="/api/languages"
              description="List available language models"
              response={`{
  "languages": [
    {
      "code": "en-US",
      "name": "English (US)",
      "accuracy": 95.2,
      "size": "1.2GB",
      "status": "downloaded"
    }
  ]
}`}
            />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

// Troubleshooting Section
function TroubleshootingSection() {
  return (
    <div className="space-y-8">
      <motion.div className="doc-card">
        <Card className="glass-card glow-blue">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <AlertCircle className="mr-2 h-5 w-5 text-red-400" />
              Common Issues
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-6">
            <TroubleshootingItem 
              issue="Camera not detected"
              solution="Check camera connections, enable camera interface in raspi-config, verify permissions"
            />
            <TroubleshootingItem 
              issue="Poor lip reading accuracy"
              solution="Ensure good lighting, position camera at eye level, clean camera lens, check language model"
            />
            <TroubleshootingItem 
              issue="High CPU usage"
              solution="Lower video resolution, reduce frame rate, enable GPU acceleration, close unnecessary applications"
            />
            <TroubleshootingItem 
              issue="Web interface not accessible"
              solution="Check firewall settings, verify network configuration, restart web service"
            />
            <TroubleshootingItem 
              issue="Model download fails"
              solution="Check internet connection, verify storage space, try different download mirror"
            />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

// FAQ Section
function FAQSection() {
  return (
    <div className="space-y-8">
      <motion.div className="doc-card">
        <Card className="glass-card glow-blue">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Info className="mr-2 h-5 w-5 text-blue-400" />
              Frequently Asked Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-6">
            <FAQItem 
              question="How accurate is Liphera compared to human lip readers?"
              answer="Liphera achieves 90-95% accuracy depending on the language model, which is comparable to or better than average human lip readers (80-90%). Professional human lip readers may still outperform in complex scenarios."
            />
            <FAQItem 
              question="Can Liphera work with multiple speakers?"
              answer="Currently, Liphera is optimized for single-speaker scenarios. Multi-speaker support is in development and will be available in future releases."
            />
            <FAQItem 
              question="Does Liphera require internet connectivity?"
              answer="After initial setup and model downloads, Liphera works completely offline. Internet is only needed for downloading language models and software updates."
            />
            <FAQItem 
              question="Can I use Liphera for live streaming or recording?"
              answer="Yes, Liphera provides real-time processing suitable for live applications. It can also process recorded videos through the API."
            />
            <FAQItem 
              question="What languages will be supported in the future?"
              answer="We're actively working on models for Mandarin, Japanese, Italian, Portuguese, and sign language recognition. Check our roadmap for updates."
            />
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

// Helper Components
function FeatureItem({ icon: Icon, title, description }: { icon: React.ComponentType<{ className?: string }>, title: string, description: string }) {
  return (
    <div className="flex items-start space-x-3">
      <Icon className="h-5 w-5 text-blue-400 mt-0.5" />
      <div>
        <h4 className="text-white font-medium">{title}</h4>
        <p className="text-slate-400 text-sm">{description}</p>
      </div>
    </div>
  );
}

function CodeBlock({ title, code }: { title: string, code: string }) {
  return (
    <div className="space-y-2">
      <h4 className="text-white font-medium text-sm">{title}</h4>
      <pre className="bg-slate-900/50 border border-slate-700 rounded-lg p-4 text-sm overflow-x-auto">
        <code className="text-green-400">{code}</code>
      </pre>
    </div>
  );
}

function ConfigSection({ title, icon: Icon, items }: { title: string, icon: React.ComponentType<{ className?: string }>, items: string[] }) {
  return (
    <div>
      <h4 className="text-white font-semibold mb-3 flex items-center">
        <Icon className="mr-2 h-4 w-4 text-blue-400" />
        {title}
      </h4>
      <ul className="space-y-1 text-sm ml-6">
        {items.map((item, index) => (
          <li key={index}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}

function UsageStep({ number, title, description, code }: { number: string, title: string, description: string, code?: string }) {
  return (
    <div className="flex space-x-4">
      <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
        {number}
      </div>
      <div className="flex-1">
        <h4 className="text-white font-medium">{title}</h4>
        <p className="text-slate-400 text-sm">{description}</p>
        {code && (
          <code className="inline-block mt-2 px-3 py-1 bg-slate-900/50 border border-slate-700 rounded text-green-400 text-sm">
            {code}
          </code>
        )}
      </div>
    </div>
  );
}

function LanguageModelCard({ language, accuracy, size, type, description }: { 
  language: string, accuracy: string, size: string, type: string, description: string 
}) {
  return (
    <div className="p-4 bg-slate-800/30 border border-slate-700 rounded-lg">
      <div className="flex justify-between items-start mb-2">
        <h4 className="text-white font-semibold">{language}</h4>
        <span className={`px-2 py-1 rounded text-xs font-medium ${
          type === 'Production' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'
        }`}>
          {type}
        </span>
      </div>
      <div className="flex space-x-4 text-sm text-slate-400 mb-2">
        <span>Accuracy: {accuracy}</span>
        <span>Size: {size}</span>
      </div>
      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  );
}

function APIEndpoint({ method, endpoint, description, request, response }: { 
  method: string, endpoint: string, description: string, request?: string, response: string 
}) {
  return (
    <div className="border border-slate-700 rounded-lg p-4 space-y-3">
      <div className="flex items-center space-x-3">
        <span className={`px-2 py-1 rounded text-xs font-bold ${
          method === 'GET' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
        }`}>
          {method}
        </span>
        <code className="text-white font-mono">{endpoint}</code>
      </div>
      <p className="text-slate-400 text-sm">{description}</p>
      {request && (
        <div>
          <h5 className="text-white font-medium text-sm mb-2">Request Body:</h5>
          <pre className="bg-slate-900/50 border border-slate-700 rounded p-3 text-sm overflow-x-auto">
            <code className="text-blue-300">{request}</code>
          </pre>
        </div>
      )}
      <div>
        <h5 className="text-white font-medium text-sm mb-2">Response:</h5>
        <pre className="bg-slate-900/50 border border-slate-700 rounded p-3 text-sm overflow-x-auto">
          <code className="text-green-300">{response}</code>
        </pre>
      </div>
    </div>
  );
}

function TroubleshootingItem({ issue, solution }: { issue: string, solution: string }) {
  return (
    <div className="border-l-4 border-red-400 pl-4">
      <h4 className="text-white font-medium mb-1">{issue}</h4>
      <p className="text-slate-400 text-sm">{solution}</p>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string, answer: string }) {
  return (
    <div>
      <h4 className="text-white font-medium mb-2">{question}</h4>
      <p className="text-slate-400 text-sm leading-relaxed">{answer}</p>
    </div>
  );
}