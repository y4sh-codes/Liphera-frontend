'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AnimatedBackground } from '@/components/animations/AnimatedBackground';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { 
  ArrowLeft, 
  Camera, 
  Mic, 
  MicOff, 
  Play, 
  Pause, 
  Square, 
  Download, 
  Copy, 
  Trash2, 
  Settings, 
  Volume2, 
  VolumeX,
  Eye,
  EyeOff,
  Maximize,
  Minimize,
  RotateCcw,
  Save,
  Share,
  ChevronUp,
  ChevronDown,
  Circle,
  Zap,
  Activity,
  Clock,
  User
} from 'lucide-react';

interface LiveTextData {
  id: string;
  text: string;
  confidence: number;
  timestamp: Date;
  speaker?: string;
}

interface SystemStats {
  fps: number;
  latency: number;
  accuracy: number;
  processingTime: number;
}

export default function LiveReadingPage() {
  const [isRecording, setIsRecording] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const [liveText, setLiveText] = useState<LiveTextData[]>([]);
  const [currentText, setCurrentText] = useState('');
  const [systemStats, setSystemStats] = useState<SystemStats>({
    fps: 30,
    latency: 120,
    accuracy: 94.5,
    processingTime: 85
  });

  const videoRef = useRef<HTMLDivElement>(null);
  const textDisplayRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Simulate real-time text generation
  const simulateText = useCallback(() => {
    if (!isRecording || isPaused) return;

    const sampleTexts = [
      "Hello, how are you doing today?",
      "The weather is quite nice outside.",
      "I would like to order some coffee please.",
      "Can you help me with this problem?",
      "Thank you very much for your assistance.",
      "What time does the meeting start?",
      "I need to check my schedule first.",
      "The presentation went very well.",
      "Could you repeat that please?",
      "Have a wonderful day ahead."
    ];

    const randomText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    const confidence = 0.85 + Math.random() * 0.15; // 85-100% confidence
    
    const newTextData: LiveTextData = {
      id: Date.now().toString(),
      text: randomText,
      confidence: confidence,
      timestamp: new Date(),
      speaker: 'Speaker 1'
    };

    setLiveText(prev => [newTextData, ...prev.slice(0, 19)]); // Keep last 20 entries
    setCurrentText(randomText);

    // Update system stats
    setSystemStats(prev => ({
      fps: 28 + Math.random() * 4,
      latency: 100 + Math.random() * 40,
      accuracy: 90 + Math.random() * 10,
      processingTime: 70 + Math.random() * 30
    }));
  }, [isRecording, isPaused]);

  // Simulate real-time text updates
  useEffect(() => {
    if (isRecording && !isPaused) {
      const interval = setInterval(simulateText, 3000 + Math.random() * 2000); // Random 3-5 seconds
      return () => clearInterval(interval);
    }
  }, [isRecording, isPaused, simulateText]);

  // GSAP animations
  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll('.live-card');
    
    gsap.fromTo(cards,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }
    );
  }, []);

  const handleStartRecording = () => {
    setIsRecording(true);
    setIsPaused(false);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setIsPaused(false);
    setCurrentText('');
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleClearText = () => {
    setLiveText([]);
    setCurrentText('');
  };

  const handleCopyText = () => {
    const allText = liveText.map(item => item.text).join(' ');
    navigator.clipboard.writeText(allText);
  };

  const handleSaveTranscript = () => {
    const transcript = liveText.map(item => 
      `[${item.timestamp.toLocaleTimeString()}] ${item.text} (${(item.confidence * 100).toFixed(1)}%)`
    ).join('\n');
    
    const blob = new Blob([transcript], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lip-reading-transcript-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

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
            className="flex items-center justify-between mb-8"
          >
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="outline" className="glass-effect text-white hover:bg-white/20 border-white/30">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${isRecording ? 'bg-red-400 animate-pulse' : 'bg-gray-400'}`} />
              <span className="text-white font-medium">
                {isRecording ? (isPaused ? 'Paused' : 'Live') : 'Stopped'}
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-gradient-purple mb-4"
          >
            Live Lip Reading
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-300 mb-12 max-w-3xl"
          >
            Real-time lip reading with instant text transcription. See your words appear as you speak.
          </motion.p>

          <div ref={sectionRef} className="space-y-8">
            {/* Control Panel */}
            <motion.div className="live-card">
              <Card className="glass-card glow-blue">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Activity className="mr-2 h-5 w-5 text-green-400" />
                    Live Controls
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4">
                    {!isRecording ? (
                      <Button
                        onClick={handleStartRecording}
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 hover:scale-105 transition-all duration-300"
                      >
                        <Play className="mr-2 h-4 w-4" />
                        Start Reading
                      </Button>
                    ) : (
                      <>
                        <Button
                          onClick={handlePauseResume}
                          className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 hover:scale-105 transition-all duration-300"
                        >
                          {isPaused ? <Play className="mr-2 h-4 w-4" /> : <Pause className="mr-2 h-4 w-4" />}
                          {isPaused ? 'Resume' : 'Pause'}
                        </Button>
                        
                        <Button
                          onClick={handleStopRecording}
                          variant="outline"
                          className="glass-effect text-white hover:bg-red-500/20 border-red-400/50 px-6 py-3 hover:scale-105 transition-all duration-300"
                        >
                          <Square className="mr-2 h-4 w-4" />
                          Stop
                        </Button>
                      </>
                    )}

                    <Button
                      onClick={() => setCameraEnabled(!cameraEnabled)}
                      variant="outline"
                      className={`glass-effect px-4 py-3 hover:scale-105 transition-all duration-300 ${
                        cameraEnabled ? 'text-white border-white/30' : 'text-red-400 border-red-400/50'
                      }`}
                    >
                      {cameraEnabled ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4" />}
                    </Button>

                    <Button
                      onClick={() => setAudioEnabled(!audioEnabled)}
                      variant="outline"
                      className={`glass-effect px-4 py-3 hover:scale-105 transition-all duration-300 ${
                        audioEnabled ? 'text-white border-white/30' : 'text-red-400 border-red-400/50'
                      }`}
                    >
                      {audioEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
                    </Button>

                    <Button
                      onClick={() => setIsFullscreen(!isFullscreen)}
                      variant="outline"
                      className="glass-effect text-white hover:bg-white/20 border-white/30 px-4 py-3 hover:scale-105 transition-all duration-300"
                    >
                      {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Video Feed */}
              <motion.div className="live-card xl:col-span-2">
                <Card className="glass-card hover:glow-blue transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center justify-between">
                      <div className="flex items-center">
                        <Camera className="mr-2 h-5 w-5 text-blue-400" />
                        Camera Feed - {currentLanguage}
                      </div>
                      <div className="text-sm text-slate-400">
                        {systemStats.fps.toFixed(1)} FPS
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div 
                      ref={videoRef}
                      className={`relative bg-slate-900/50 rounded-lg overflow-hidden ${
                        isFullscreen ? 'h-96' : 'h-64 md:h-80'
                      }`}
                    >
                      {cameraEnabled ? (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <Camera className="h-16 w-16 text-slate-400 mx-auto mb-4" />
                            <p className="text-slate-400">Camera feed would appear here</p>
                            <p className="text-slate-500 text-sm mt-2">
                              {isRecording ? 'Processing lip movements...' : 'Camera ready'}
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <div className="text-center">
                            <EyeOff className="h-16 w-16 text-red-400 mx-auto mb-4" />
                            <p className="text-red-400">Camera disabled</p>
                          </div>
                        </div>
                      )}

                      {/* Live text overlay */}
                      {isRecording && currentText && (
                        <div className="absolute bottom-4 left-4 right-4">
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="glass-effect p-4 rounded-lg"
                          >
                            <p className="text-white text-lg font-medium">"{currentText}"</p>
                          </motion.div>
                        </div>
                      )}

                      {/* Recording indicator */}
                      {isRecording && !isPaused && (
                        <div className="absolute top-4 right-4">
                          <div className="flex items-center space-x-2 bg-red-600/90 px-3 py-1 rounded-full">
                            <Circle className="h-3 w-3 text-white fill-current animate-pulse" />
                            <span className="text-white text-sm font-medium">REC</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* System Stats */}
              <motion.div className="live-card">
                <Card className="glass-card hover:glow-blue transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center">
                      <Zap className="mr-2 h-5 w-5 text-yellow-400" />
                      System Stats
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <StatItem 
                      label="Frame Rate"
                      value={`${systemStats.fps.toFixed(1)} FPS`}
                      color="green"
                    />
                    <StatItem 
                      label="Latency"
                      value={`${systemStats.latency.toFixed(0)}ms`}
                      color="blue"
                    />
                    <StatItem 
                      label="Accuracy"
                      value={`${systemStats.accuracy.toFixed(1)}%`}
                      color="purple"
                    />
                    <StatItem 
                      label="Processing"
                      value={`${systemStats.processingTime.toFixed(0)}ms`}
                      color="orange"
                    />
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Live Text Display */}
            <motion.div className="live-card">
              <Card className="glass-card hover:glow-blue transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white flex items-center justify-between">
                    <div className="flex items-center">
                      <Mic className="mr-2 h-5 w-5 text-green-400" />
                      Live Transcript
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        onClick={handleCopyText}
                        variant="outline"
                        size="sm"
                        className="glass-effect text-white hover:bg-white/20 border-white/30"
                        disabled={liveText.length === 0}
                      >
                        <Copy className="mr-1 h-3 w-3" />
                        Copy
                      </Button>
                      <Button
                        onClick={handleSaveTranscript}
                        variant="outline"
                        size="sm"
                        className="glass-effect text-white hover:bg-white/20 border-white/30"
                        disabled={liveText.length === 0}
                      >
                        <Save className="mr-1 h-3 w-3" />
                        Save
                      </Button>
                      <Button
                        onClick={handleClearText}
                        variant="outline"
                        size="sm"
                        className="glass-effect text-red-400 hover:bg-red-500/20 border-red-400/50"
                        disabled={liveText.length === 0}
                      >
                        <Trash2 className="mr-1 h-3 w-3" />
                        Clear
                      </Button>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div 
                    ref={textDisplayRef}
                    className="max-h-96 overflow-y-auto space-y-3 pr-2"
                  >
                    <AnimatePresence>
                      {liveText.length === 0 ? (
                        <div className="text-center py-12">
                          <Mic className="h-12 w-12 text-slate-500 mx-auto mb-4" />
                          <p className="text-slate-400">
                            {isRecording ? 'Listening for speech...' : 'Start recording to see live transcript'}
                          </p>
                        </div>
                      ) : (
                        liveText.map((item, index) => (
                          <motion.div
                            key={item.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className={`p-4 rounded-lg border-l-4 ${
                              index === 0 
                                ? 'bg-blue-500/10 border-blue-400' 
                                : 'bg-slate-800/30 border-slate-600'
                            }`}
                          >
                            <div className="flex justify-between items-start mb-2">
                              <div className="flex items-center space-x-2">
                                <User className="h-4 w-4 text-slate-400" />
                                <span className="text-slate-400 text-sm">{item.speaker}</span>
                              </div>
                              <div className="flex items-center space-x-3 text-xs text-slate-400">
                                <span>{item.timestamp.toLocaleTimeString()}</span>
                                <span className={`px-2 py-1 rounded ${
                                  item.confidence > 0.9 
                                    ? 'bg-green-500/20 text-green-400' 
                                    : item.confidence > 0.75 
                                      ? 'bg-yellow-500/20 text-yellow-400'
                                      : 'bg-red-500/20 text-red-400'
                                }`}>
                                  {(item.confidence * 100).toFixed(0)}%
                                </span>
                              </div>
                            </div>
                            <p className="text-white leading-relaxed">{item.text}</p>
                          </motion.div>
                        ))
                      )}
                    </AnimatePresence>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}

// Helper Components
function StatItem({ label, value, color }: { label: string, value: string, color: string }) {
  const colorClasses = {
    green: 'text-green-400',
    blue: 'text-blue-400',
    purple: 'text-purple-400',
    orange: 'text-orange-400',
    red: 'text-red-400'
  };

  return (
    <div className="flex justify-between items-center">
      <span className="text-slate-300 text-sm">{label}</span>
      <span className={`font-bold ${colorClasses[color as keyof typeof colorClasses]}`}>
        {value}
      </span>
    </div>
  );
}