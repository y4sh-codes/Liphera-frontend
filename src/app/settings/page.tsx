'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatedBackground } from '@/components/animations/AnimatedBackground';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { 
  Wifi, 
  Camera, 
  Cpu, 
  Volume2, 
  Monitor,
  Save,
  RotateCcw,
  Power,
  ArrowLeft,
  Bluetooth,
  Shield,
  Database,
  Zap,
  Thermometer,
  HardDrive,
  Network,
  Bell,
  Eye,
  Mic,
  Settings as SettingsIcon
} from 'lucide-react';

interface DeviceSettings {
  // Network Settings
  deviceName: string;
  ipAddress: string;
  port: string;
  wifiSSID: string;
  bluetoothEnabled: boolean;
  
  // Camera Settings
  cameraResolution: string;
  frameRate: string;
  brightness: number;
  contrast: number;
  autoFocus: boolean;
  
  // Processing Settings
  processingMode: string;
  cpuUsage: number;
  memoryUsage: number;
  batchSize: string;
  modelPrecision: string;
  
  // Output Settings
  audioOutput: boolean;
  displayMode: string;
  textSize: string;
  confidenceThreshold: number;
  
  // System Settings
  autoStart: boolean;
  debugMode: boolean;
  loggingLevel: string;
  dataRetention: string;
  securityLevel: string;
  
  // Performance
  temperature: number;
  cpuFreq: string;
  storageUsed: string;
  
  // Notifications
  emailNotifications: boolean;
  pushNotifications: boolean;
  errorAlerts: boolean;
}

export default function SettingsPage() {
  const [settings, setSettings] = useState<DeviceSettings>({
    // Network
    deviceName: 'Liphera Device 01',
    ipAddress: '192.168.1.100',
    port: '8080',
    wifiSSID: 'Home_Network',
    bluetoothEnabled: true,
    
    // Camera
    cameraResolution: '1920x1080',
    frameRate: '30',
    brightness: 50,
    contrast: 50,
    autoFocus: true,
    
    // Processing
    processingMode: 'high_accuracy',
    cpuUsage: 65,
    memoryUsage: 45,
    batchSize: '8',
    modelPrecision: 'fp16',
    
    // Output
    audioOutput: true,
    displayMode: 'full_screen',
    textSize: 'medium',
    confidenceThreshold: 0.8,
    
    // System
    autoStart: true,
    debugMode: false,
    loggingLevel: 'info',
    dataRetention: '30_days',
    securityLevel: 'standard',
    
    // Performance
    temperature: 45,
    cpuFreq: '1.5 GHz',
    storageUsed: '12.5 GB',
    
    // Notifications
    emailNotifications: true,
    pushNotifications: false,
    errorAlerts: true,
  });

  const [isConnected, setIsConnected] = useState(true);
  const [activeTab, setActiveTab] = useState('network');
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    const cards = sectionRef.current.querySelectorAll('.settings-card');
    
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );

    gsap.fromTo(cards,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }
    );
  }, []);

  const handleSave = () => {
    console.log('Saving settings:', settings);
    // Add save animation
  };

  const handleReset = () => {
    // Reset to defaults
    setSettings({
      ...settings,
      deviceName: 'Liphera Device 01',
      processingMode: 'high_accuracy',
      // ... other defaults
    });
  };

  const tabs = [
    { id: 'network', label: 'Network', icon: Wifi },
    { id: 'camera', label: 'Camera', icon: Camera },
    { id: 'processing', label: 'Processing', icon: Cpu },
    { id: 'output', label: 'Output', icon: Monitor },
    { id: 'system', label: 'System', icon: SettingsIcon },
    { id: 'performance', label: 'Performance', icon: Zap },
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
              <Button variant="outline" className="glass-effect text-white hover:bg-white/20 border-white/30">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          <motion.h1
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold text-gradient-purple mb-4"
          >
            Device Settings
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-300 mb-12 max-w-3xl"
          >
            Configure your Raspberry Pi device for optimal lip-reading performance. Adjust settings to match your environment and requirements.
          </motion.p>

          {/* Connection Status */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <Card className="glass-card glow-blue">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${isConnected ? 'bg-green-400 animate-pulse-glow' : 'bg-red-400'}`} />
                    <span className="text-white font-medium">
                      {isConnected ? 'Connected to Raspberry Pi' : 'Disconnected'}
                    </span>
                    {isConnected && (
                      <div className="flex items-center space-x-4 text-sm text-slate-300">
                        <span>CPU: {settings.cpuUsage}%</span>
                        <span>Memory: {settings.memoryUsage}%</span>
                        <span>Temp: {settings.temperature}°C</span>
                      </div>
                    )}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="glass-effect text-white hover:bg-white/20 border-white/30"
                    onClick={() => setIsConnected(!isConnected)}
                  >
                    <Power className="mr-2 h-4 w-4" />
                    {isConnected ? 'Disconnect' : 'Connect'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {tabs.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "default" : "outline"}
                onClick={() => setActiveTab(tab.id)}
                className={`${
                  activeTab === tab.id 
                    ? 'btn-gradient' 
                    : 'glass-effect text-white hover:bg-white/20 border-white/30'
                } transition-all duration-300`}
              >
                <tab.icon className="mr-2 h-4 w-4" />
                {tab.label}
              </Button>
            ))}
          </motion.div>

          {/* Settings Content */}
          <div ref={sectionRef} className="space-y-8">
            {activeTab === 'network' && <NetworkSettings settings={settings} setSettings={setSettings} />}
            {activeTab === 'camera' && <CameraSettings settings={settings} setSettings={setSettings} />}
            {activeTab === 'processing' && <ProcessingSettings settings={settings} setSettings={setSettings} />}
            {activeTab === 'output' && <OutputSettings settings={settings} setSettings={setSettings} />}
            {activeTab === 'system' && <SystemSettings settings={settings} setSettings={setSettings} />}
            {activeTab === 'performance' && <PerformanceSettings settings={settings} />}
          </div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-12 flex justify-center space-x-4"
          >
            <Button
              onClick={handleSave}
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 px-8 py-3 hover:scale-105 transition-all duration-300 glow-blue"
            >
              <Save className="mr-2 h-4 w-4" />
              Save Settings
            </Button>
            <Button
              onClick={handleReset}
              variant="outline"
              className="glass-effect text-white hover:bg-white/20 px-8 py-3 border-white/30 hover:scale-105 transition-all duration-300"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Reset to Default
            </Button>
          </motion.div>
        </div>

        <Footer />
      </div>
    </main>
  );
}

// Settings Components
function NetworkSettings({ settings, setSettings }: { settings: DeviceSettings; setSettings: (settings: DeviceSettings) => void }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div className="settings-card">
        <Card className="h-full glass-card hover:glow-blue transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Network className="mr-2 h-5 w-5 text-blue-400" />
              Network Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-slate-300 text-sm mb-2 block">Device Name</label>
              <Input
                value={settings.deviceName}
                onChange={(e) => setSettings({...settings, deviceName: e.target.value})}
                className="glass-effect border-white/30 text-white placeholder:text-slate-400"
              />
            </div>
            <div>
              <label className="text-slate-300 text-sm mb-2 block">IP Address</label>
              <Input
                value={settings.ipAddress}
                onChange={(e) => setSettings({...settings, ipAddress: e.target.value})}
                className="glass-effect border-white/30 text-white placeholder:text-slate-400"
              />
            </div>
            <div>
              <label className="text-slate-300 text-sm mb-2 block">Port</label>
              <Input
                value={settings.port}
                onChange={(e) => setSettings({...settings, port: e.target.value})}
                className="glass-effect border-white/30 text-white placeholder:text-slate-400"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="settings-card">
        <Card className="h-full glass-card hover:glow-blue transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Bluetooth className="mr-2 h-5 w-5 text-blue-400" />
              Wireless Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-slate-300 text-sm mb-2 block">WiFi Network</label>
              <Input
                value={settings.wifiSSID}
                onChange={(e) => setSettings({...settings, wifiSSID: e.target.value})}
                className="glass-effect border-white/30 text-white placeholder:text-slate-400"
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Bluetooth</span>
              <Button
                variant={settings.bluetoothEnabled ? "default" : "outline"}
                size="sm"
                onClick={() => setSettings({...settings, bluetoothEnabled: !settings.bluetoothEnabled})}
                className={settings.bluetoothEnabled ? "bg-blue-600 hover:bg-blue-700" : "glass-effect border-white/30"}
              >
                {settings.bluetoothEnabled ? 'ON' : 'OFF'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

function CameraSettings({ settings, setSettings }: { settings: DeviceSettings; setSettings: (settings: DeviceSettings) => void }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div className="settings-card">
        <Card className="h-full glass-card hover:glow-blue transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Eye className="mr-2 h-5 w-5 text-green-400" />
              Video Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-slate-300 text-sm mb-2 block">Resolution</label>
              <select
                value={settings.cameraResolution}
                onChange={(e) => setSettings({...settings, cameraResolution: e.target.value})}
                className="w-full p-2 rounded-md glass-effect border border-white/30 text-white bg-transparent"
              >
                <option value="1920x1080" className="bg-slate-800">1920x1080 (Full HD)</option>
                <option value="1280x720" className="bg-slate-800">1280x720 (HD)</option>
                <option value="640x480" className="bg-slate-800">640x480 (SD)</option>
              </select>
            </div>
            <div>
              <label className="text-slate-300 text-sm mb-2 block">Frame Rate: {settings.frameRate} FPS</label>
              <input
                type="range"
                min="15"
                max="60"
                value={settings.frameRate}
                onChange={(e) => setSettings({...settings, frameRate: e.target.value})}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="settings-card">
        <Card className="h-full glass-card hover:glow-blue transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Camera className="mr-2 h-5 w-5 text-green-400" />
              Image Quality
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-slate-300 text-sm mb-2 block">Brightness: {settings.brightness}%</label>
              <input
                type="range"
                min="0"
                max="100"
                value={settings.brightness}
                onChange={(e) => setSettings({...settings, brightness: parseInt(e.target.value)})}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div>
              <label className="text-slate-300 text-sm mb-2 block">Contrast: {settings.contrast}%</label>
              <input
                type="range"
                min="0"
                max="100"
                value={settings.contrast}
                onChange={(e) => setSettings({...settings, contrast: parseInt(e.target.value)})}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

function ProcessingSettings({ settings, setSettings }: { settings: DeviceSettings; setSettings: (settings: DeviceSettings) => void }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div className="settings-card">
        <Card className="h-full glass-card hover:glow-blue transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Cpu className="mr-2 h-5 w-5 text-purple-400" />
              AI Processing
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-slate-300 text-sm mb-2 block">Processing Mode</label>
              <select
                value={settings.processingMode}
                onChange={(e) => setSettings({...settings, processingMode: e.target.value})}
                className="w-full p-2 rounded-md glass-effect border border-white/30 text-white bg-transparent"
              >
                <option value="high_accuracy" className="bg-slate-800">High Accuracy</option>
                <option value="balanced" className="bg-slate-800">Balanced</option>
                <option value="fast" className="bg-slate-800">Fast Processing</option>
              </select>
            </div>
            <div>
              <label className="text-slate-300 text-sm mb-2 block">Batch Size</label>
              <select
                value={settings.batchSize}
                onChange={(e) => setSettings({...settings, batchSize: e.target.value})}
                className="w-full p-2 rounded-md glass-effect border border-white/30 text-white bg-transparent"
              >
                <option value="1" className="bg-slate-800">1 (Lowest latency)</option>
                <option value="4" className="bg-slate-800">4 (Balanced)</option>
                <option value="8" className="bg-slate-800">8 (Higher throughput)</option>
              </select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="settings-card">
        <Card className="h-full glass-card hover:glow-blue transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Database className="mr-2 h-5 w-5 text-purple-400" />
              Model Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-slate-300 text-sm mb-2 block">Model Precision</label>
              <select
                value={settings.modelPrecision}
                onChange={(e) => setSettings({...settings, modelPrecision: e.target.value})}
                className="w-full p-2 rounded-md glass-effect border border-white/30 text-white bg-transparent"
              >
                <option value="fp32" className="bg-slate-800">FP32 (Highest accuracy)</option>
                <option value="fp16" className="bg-slate-800">FP16 (Balanced)</option>
                <option value="int8" className="bg-slate-800">INT8 (Fastest)</option>
              </select>
            </div>
            <div>
              <label className="text-slate-300 text-sm mb-2 block">Confidence Threshold: {(settings.confidenceThreshold * 100).toFixed(0)}%</label>
              <input
                type="range"
                min="0.5"
                max="1"
                step="0.05"
                value={settings.confidenceThreshold}
                onChange={(e) => setSettings({...settings, confidenceThreshold: parseFloat(e.target.value)})}
                className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

function OutputSettings({ settings, setSettings }: { settings: DeviceSettings; setSettings: (settings: DeviceSettings) => void }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div className="settings-card">
        <Card className="h-full glass-card hover:glow-blue transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Monitor className="mr-2 h-5 w-5 text-yellow-400" />
              Display Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-slate-300 text-sm mb-2 block">Display Mode</label>
              <select
                value={settings.displayMode}
                onChange={(e) => setSettings({...settings, displayMode: e.target.value})}
                className="w-full p-2 rounded-md glass-effect border border-white/30 text-white bg-transparent"
              >
                <option value="full_screen" className="bg-slate-800">Full Screen</option>
                <option value="windowed" className="bg-slate-800">Windowed</option>
                <option value="headless" className="bg-slate-800">Headless</option>
              </select>
            </div>
            <div>
              <label className="text-slate-300 text-sm mb-2 block">Text Size</label>
              <select
                value={settings.textSize}
                onChange={(e) => setSettings({...settings, textSize: e.target.value})}
                className="w-full p-2 rounded-md glass-effect border border-white/30 text-white bg-transparent"
              >
                <option value="small" className="bg-slate-800">Small</option>
                <option value="medium" className="bg-slate-800">Medium</option>
                <option value="large" className="bg-slate-800">Large</option>
              </select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="settings-card">
        <Card className="h-full glass-card hover:glow-blue transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Volume2 className="mr-2 h-5 w-5 text-yellow-400" />
              Audio & Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Audio Output</span>
              <Button
                variant={settings.audioOutput ? "default" : "outline"}
                size="sm"
                onClick={() => setSettings({...settings, audioOutput: !settings.audioOutput})}
                className={settings.audioOutput ? "bg-green-600 hover:bg-green-700" : "glass-effect border-white/30"}
              >
                <Volume2 className="mr-1 h-3 w-3" />
                {settings.audioOutput ? 'ON' : 'OFF'}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Error Alerts</span>
              <Button
                variant={settings.errorAlerts ? "default" : "outline"}
                size="sm"
                onClick={() => setSettings({...settings, errorAlerts: !settings.errorAlerts})}
                className={settings.errorAlerts ? "bg-red-600 hover:bg-red-700" : "glass-effect border-white/30"}
              >
                <Bell className="mr-1 h-3 w-3" />
                {settings.errorAlerts ? 'ON' : 'OFF'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

function SystemSettings({ settings, setSettings }: { settings: DeviceSettings; setSettings: (settings: DeviceSettings) => void }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div className="settings-card">
        <Card className="h-full glass-card hover:glow-blue transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <SettingsIcon className="mr-2 h-5 w-5 text-indigo-400" />
              System Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Auto Start</span>
              <Button
                variant={settings.autoStart ? "default" : "outline"}
                size="sm"
                onClick={() => setSettings({...settings, autoStart: !settings.autoStart})}
                className={settings.autoStart ? "bg-blue-600 hover:bg-blue-700" : "glass-effect border-white/30"}
              >
                {settings.autoStart ? 'ON' : 'OFF'}
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-300">Debug Mode</span>
              <Button
                variant={settings.debugMode ? "default" : "outline"}
                size="sm"
                onClick={() => setSettings({...settings, debugMode: !settings.debugMode})}
                className={settings.debugMode ? "bg-yellow-600 hover:bg-yellow-700" : "glass-effect border-white/30"}
              >
                {settings.debugMode ? 'ON' : 'OFF'}
              </Button>
            </div>
            <div>
              <label className="text-slate-300 text-sm mb-2 block">Logging Level</label>
              <select
                value={settings.loggingLevel}
                onChange={(e) => setSettings({...settings, loggingLevel: e.target.value})}
                className="w-full p-2 rounded-md glass-effect border border-white/30 text-white bg-transparent"
              >
                <option value="error" className="bg-slate-800">Error</option>
                <option value="warning" className="bg-slate-800">Warning</option>
                <option value="info" className="bg-slate-800">Info</option>
                <option value="debug" className="bg-slate-800">Debug</option>
              </select>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="settings-card">
        <Card className="h-full glass-card hover:glow-blue transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Shield className="mr-2 h-5 w-5 text-indigo-400" />
              Security & Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="text-slate-300 text-sm mb-2 block">Security Level</label>
              <select
                value={settings.securityLevel}
                onChange={(e) => setSettings({...settings, securityLevel: e.target.value})}
                className="w-full p-2 rounded-md glass-effect border border-white/30 text-white bg-transparent"
              >
                <option value="basic" className="bg-slate-800">Basic</option>
                <option value="standard" className="bg-slate-800">Standard</option>
                <option value="high" className="bg-slate-800">High</option>
              </select>
            </div>
            <div>
              <label className="text-slate-300 text-sm mb-2 block">Data Retention</label>
              <select
                value={settings.dataRetention}
                onChange={(e) => setSettings({...settings, dataRetention: e.target.value})}
                className="w-full p-2 rounded-md glass-effect border border-white/30 text-white bg-transparent"
              >
                <option value="7_days" className="bg-slate-800">7 Days</option>
                <option value="30_days" className="bg-slate-800">30 Days</option>
                <option value="90_days" className="bg-slate-800">90 Days</option>
                <option value="1_year" className="bg-slate-800">1 Year</option>
              </select>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}

function PerformanceSettings({ settings }: { settings: DeviceSettings }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <motion.div className="settings-card">
        <Card className="h-full glass-card hover:glow-blue transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Cpu className="mr-2 h-5 w-5 text-red-400" />
              CPU Status
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{settings.cpuUsage}%</div>
              <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                <div 
                  className="bg-gradient-to-r from-green-400 to-red-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${settings.cpuUsage}%` }}
                />
              </div>
              <p className="text-slate-300 text-sm">Frequency: {settings.cpuFreq}</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="settings-card">
        <Card className="h-full glass-card hover:glow-blue transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Thermometer className="mr-2 h-5 w-5 text-orange-400" />
              Temperature
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{settings.temperature}°C</div>
              <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                <div 
                  className="bg-gradient-to-r from-blue-400 to-red-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(settings.temperature / 80) * 100}%` }}
                />
              </div>
              <p className="text-slate-300 text-sm">Normal operating range</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div className="settings-card">
        <Card className="h-full glass-card hover:glow-blue transition-all duration-300">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <HardDrive className="mr-2 h-5 w-5 text-blue-400" />
              Storage
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">{settings.storageUsed}</div>
              <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                <div 
                  className="bg-gradient-to-r from-green-400 to-yellow-400 h-2 rounded-full transition-all duration-300"
                  style={{ width: '40%' }}
                />
              </div>
              <p className="text-slate-300 text-sm">of 32 GB used</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}