'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Wifi, 
  Camera, 
  Cpu, 
  Volume2, 
  Monitor,
  Save,
  RotateCcw,
  Power
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface DeviceSettings {
  deviceName: string;
  ipAddress: string;
  port: string;
  cameraResolution: string;
  processingMode: string;
  audioOutput: boolean;
  displayMode: string;
  autoStart: boolean;
  debugMode: boolean;
}

export function SettingsSection() {
  const [settings, setSettings] = useState<DeviceSettings>({
    deviceName: 'Liphera Device 01',
    ipAddress: '192.168.1.100',
    port: '8080',
    cameraResolution: '1920x1080',
    processingMode: 'high_accuracy',
    audioOutput: true,
    displayMode: 'full_screen',
    autoStart: true,
    debugMode: false,
  });

  const [isConnected, setIsConnected] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    const cards = sectionRef.current.querySelectorAll('.settings-card');
    
    gsap.fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo(cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      }
    );
  }, []);

  const handleSave = () => {
    // Simulate saving settings
    console.log('Saving settings:', settings);
  };

  const handleReset = () => {
    setSettings({
      deviceName: 'Liphera Device 01',
      ipAddress: '192.168.1.100',
      port: '8080',
      cameraResolution: '1920x1080',
      processingMode: 'high_accuracy',
      audioOutput: true,
      displayMode: 'full_screen',
      autoStart: true,
      debugMode: false,
    });
  };

  return (
    <section id="settings" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center text-gradient-purple mb-4"
        >
          Device Settings
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto"
        >
          Configure your Raspberry Pi device for optimal lip-reading performance. 
          Adjust settings to match your environment and requirements.
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Network Settings */}
          <motion.div className="settings-card">
            <Card className="h-full glass-card hover:glow-blue transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Wifi className="mr-2 h-5 w-5 text-blue-400" />
                  Network Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Device Name</label>
                  <Input
                    value={settings.deviceName}
                    onChange={(e) => setSettings({...settings, deviceName: e.target.value})}
                    className="glass-effect border-white/30 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">IP Address</label>
                  <Input
                    value={settings.ipAddress}
                    onChange={(e) => setSettings({...settings, ipAddress: e.target.value})}
                    className="glass-effect border-white/30 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>
                <div>
                  <label className="text-gray-300 text-sm mb-2 block">Port</label>
                  <Input
                    value={settings.port}
                    onChange={(e) => setSettings({...settings, port: e.target.value})}
                    className="glass-effect border-white/30 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Camera Settings */}
          <motion.div className="settings-card">
            <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Camera className="mr-2 h-5 w-5 text-green-400" />
                  Camera Configuration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-white/80 text-sm mb-2 block">Resolution</label>
                  <select
                    value={settings.cameraResolution}
                    onChange={(e) => setSettings({...settings, cameraResolution: e.target.value})}
                    className="w-full p-2 rounded-md bg-white/10 border border-white/30 text-white"
                  >
                    <option value="1920x1080">1920x1080 (Full HD)</option>
                    <option value="1280x720">1280x720 (HD)</option>
                    <option value="640x480">640x480 (SD)</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Auto Focus</span>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/30 text-white hover:bg-white/10"
                  >
                    Calibrate
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Processing Settings */}
          <motion.div className="settings-card">
            <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Cpu className="mr-2 h-5 w-5 text-purple-400" />
                  Processing Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-white/80 text-sm mb-2 block">Processing Mode</label>
                  <select
                    value={settings.processingMode}
                    onChange={(e) => setSettings({...settings, processingMode: e.target.value})}
                    className="w-full p-2 rounded-md bg-white/10 border border-white/30 text-white"
                  >
                    <option value="high_accuracy">High Accuracy</option>
                    <option value="balanced">Balanced</option>
                    <option value="fast">Fast Processing</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Debug Mode</span>
                  <Button
                    variant={settings.debugMode ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSettings({...settings, debugMode: !settings.debugMode})}
                    className={settings.debugMode ? "bg-blue-600 hover:bg-blue-700" : "border-white/30 text-white hover:bg-white/10"}
                  >
                    {settings.debugMode ? 'ON' : 'OFF'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Output Settings */}
          <motion.div className="settings-card">
            <Card className="h-full bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Monitor className="mr-2 h-5 w-5 text-yellow-400" />
                  Output Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-white/80 text-sm mb-2 block">Display Mode</label>
                  <select
                    value={settings.displayMode}
                    onChange={(e) => setSettings({...settings, displayMode: e.target.value})}
                    className="w-full p-2 rounded-md bg-white/10 border border-white/30 text-white"
                  >
                    <option value="full_screen">Full Screen</option>
                    <option value="windowed">Windowed</option>
                    <option value="headless">Headless</option>
                  </select>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-white/80">Audio Output</span>
                  <Button
                    variant={settings.audioOutput ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSettings({...settings, audioOutput: !settings.audioOutput})}
                    className={settings.audioOutput ? "bg-green-600 hover:bg-green-700" : "border-white/30 text-white hover:bg-white/10"}
                  >
                    <Volume2 className="mr-1 h-3 w-3" />
                    {settings.audioOutput ? 'ON' : 'OFF'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
    </section>
  );
}