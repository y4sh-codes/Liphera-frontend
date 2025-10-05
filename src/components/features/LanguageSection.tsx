'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, CheckCircle, Clock, Globe } from 'lucide-react';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface Language {
  id: string;
  name: string;
  code: string;
  size: string;
  version: string;
  accuracy: string;
  isDownloaded: boolean;
  isDownloading: boolean;
  downloadProgress: number;
}

const languages: Language[] = [
  {
    id: '1',
    name: 'English',
    code: 'en-US',
    size: '250 MB',
    version: '2.1.0',
    accuracy: '94.2%',
    isDownloaded: true,
    isDownloading: false,
    downloadProgress: 100,
  },
  {
    id: '2',
    name: 'Spanish',
    code: 'es-ES',
    size: '180 MB',
    version: '2.0.5',
    accuracy: '91.8%',
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
  },
  {
    id: '3',
    name: 'French',
    code: 'fr-FR',
    size: '195 MB',
    version: '2.0.3',
    accuracy: '90.5%',
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
  },
  {
    id: '4',
    name: 'German',
    code: 'de-DE',
    size: '220 MB',
    version: '2.1.1',
    accuracy: '92.1%',
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
  },
  {
    id: '5',
    name: 'Japanese',
    code: 'ja-JP',
    size: '300 MB',
    version: '1.9.8',
    accuracy: '89.3%',
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
  },
  {
    id: '6',
    name: 'Mandarin',
    code: 'zh-CN',
    size: '280 MB',
    version: '2.0.1',
    accuracy: '88.7%',
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
  },
];

export function LanguageSection() {
  const [languageList, setLanguageList] = useState<Language[]>(languages);
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !titleRef.current) return;

    const cards = sectionRef.current.querySelectorAll('.language-card');
    
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

  const handleDownload = (languageId: string) => {
    setLanguageList(prev => prev.map(lang => 
      lang.id === languageId 
        ? { ...lang, isDownloading: true, downloadProgress: 0 }
        : lang
    ));

    // Simulate download progress
    const interval = setInterval(() => {
      setLanguageList(prev => prev.map(lang => {
        if (lang.id === languageId && lang.isDownloading) {
          const newProgress = Math.min(lang.downloadProgress + 10, 100);
          return {
            ...lang,
            downloadProgress: newProgress,
            isDownloading: newProgress < 100,
            isDownloaded: newProgress === 100,
          };
        }
        return lang;
      }));
    }, 200);

    setTimeout(() => clearInterval(interval), 2200);
  };

  return (
    <section id="features" ref={sectionRef} className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2
          ref={titleRef}
          className="text-4xl md:text-6xl font-bold text-center text-gradient-purple mb-4"
        >
          Language Models
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto"
        >
          Download and install language models for accurate lip-reading in multiple languages. 
          Each model is optimized for Raspberry Pi performance.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {languageList.map((language) => (
            <LanguageCard
              key={language.id}
              language={language}
              onDownload={() => handleDownload(language.id)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <Card className="inline-block glass-card glow-blue">
            <CardContent className="p-6">
              <div className="flex items-center justify-center space-x-4 text-white">
                <Globe className="h-8 w-8 text-blue-400" />
                <div>
                  <p className="text-lg font-semibold">Need more languages?</p>
                  <p className="text-gray-300">Request additional language models</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

interface LanguageCardProps {
  language: Language;
  onDownload: () => void;
}

function LanguageCard({ language, onDownload }: LanguageCardProps) {
  return (
    <motion.div
      className="language-card"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full glass-card hover:glow-blue transition-all duration-300">
        <CardHeader className="pb-4">
          <CardTitle className="text-white flex items-center justify-between">
            <span>{language.name}</span>
            <span className="text-sm text-gray-400 font-normal">{language.code}</span>
          </CardTitle>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="text-gray-300">
              <p>Size: <span className="text-white">{language.size}</span></p>
              <p>Version: <span className="text-white">{language.version}</span></p>
            </div>
            <div className="text-gray-300">
              <p>Accuracy: <span className="text-green-400">{language.accuracy}</span></p>
            </div>
          </div>

          {language.isDownloading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-gray-300">
                <span>Downloading...</span>
                <span>{language.downloadProgress}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full glow-blue"
                  initial={{ width: 0 }}
                  animate={{ width: `${language.downloadProgress}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </div>
          )}

          <Button
            onClick={onDownload}
            disabled={language.isDownloaded || language.isDownloading}
            className={`w-full transition-all duration-300 hover:scale-105 ${
              language.isDownloaded
                ? 'bg-green-600 hover:bg-green-700 glow-blue'
                : language.isDownloading
                ? 'bg-blue-600 hover:bg-blue-700'
                : 'btn-gradient'
            }`}
          >
            {language.isDownloaded ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4" />
                Downloaded
              </>
            ) : language.isDownloading ? (
              <>
                <Clock className="mr-2 h-4 w-4 animate-spin" />
                Downloading...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Download
              </>
            )}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}