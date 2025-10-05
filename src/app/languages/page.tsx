'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AnimatedBackground } from '@/components/animations/AnimatedBackground';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
import { 
  Download, 
  CheckCircle, 
  Clock, 
  Globe, 
  Search,
  Filter,
  Star,
  Info,
  ArrowLeft,
  Trash2,
  RefreshCw,
  Upload,
  FileText
} from 'lucide-react';

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
  rating: number;
  downloads: string;
  lastUpdated: string;
  description: string;
  modelType: 'standard' | 'premium' | 'experimental';
}

const languages: Language[] = [
  {
    id: '1',
    name: 'English (US)',
    code: 'en-US',
    size: '250 MB',
    version: '2.1.0',
    accuracy: '94.2%',
    isDownloaded: true,
    isDownloading: false,
    downloadProgress: 100,
    rating: 4.8,
    downloads: '50K+',
    lastUpdated: '2025-01-15',
    description: 'High-accuracy English model trained on diverse datasets',
    modelType: 'standard'
  },
  {
    id: '2',
    name: 'Spanish (Spain)',
    code: 'es-ES',
    size: '180 MB',
    version: '2.0.5',
    accuracy: '91.8%',
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
    rating: 4.6,
    downloads: '25K+',
    lastUpdated: '2025-01-10',
    description: 'Optimized for European Spanish pronunciation patterns',
    modelType: 'standard'
  },
  {
    id: '3',
    name: 'French (France)',
    code: 'fr-FR',
    size: '195 MB',
    version: '2.0.3',
    accuracy: '90.5%',
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
    rating: 4.5,
    downloads: '20K+',
    lastUpdated: '2025-01-08',
    description: 'Comprehensive French lip-reading with accent support',
    modelType: 'standard'
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
    rating: 4.7,
    downloads: '18K+',
    lastUpdated: '2025-01-12',
    description: 'Advanced German model with compound word recognition',
    modelType: 'premium'
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
    rating: 4.4,
    downloads: '15K+',
    lastUpdated: '2025-01-05',
    description: 'Specialized for Japanese phonetics and mouth movements',
    modelType: 'premium'
  },
  {
    id: '6',
    name: 'Mandarin (Simplified)',
    code: 'zh-CN',
    size: '280 MB',
    version: '2.0.1',
    accuracy: '88.7%',
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
    rating: 4.3,
    downloads: '12K+',
    lastUpdated: '2025-01-03',
    description: 'Mandarin Chinese with tone-aware lip reading',
    modelType: 'premium'
  },
  {
    id: '7',
    name: 'Italian',
    code: 'it-IT',
    size: '175 MB',
    version: '1.8.9',
    accuracy: '87.9%',
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
    rating: 4.2,
    downloads: '8K+',
    lastUpdated: '2024-12-28',
    description: 'Italian model with regional dialect support',
    modelType: 'experimental'
  },
  {
    id: '8',
    name: 'Portuguese (Brazil)',
    code: 'pt-BR',
    size: '190 MB',
    version: '1.9.2',
    accuracy: '88.1%',
    isDownloaded: false,
    isDownloading: false,
    downloadProgress: 0,
    rating: 4.1,
    downloads: '6K+',
    lastUpdated: '2024-12-30',
    description: 'Brazilian Portuguese optimized model',
    modelType: 'experimental'
  }
];

export default function LanguagesPage() {
  const [languageList, setLanguageList] = useState<Language[]>(languages);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'standard' | 'premium' | 'experimental'>('all');
  const [sortBy, setSortBy] = useState<'name' | 'accuracy' | 'size' | 'rating'>('name');
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
      }
    );

    gsap.fromTo(cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
      }
    );
  }, [languageList]);

  const handleDownload = (languageId: string) => {
    setLanguageList(prev => prev.map(lang => 
      lang.id === languageId 
        ? { ...lang, isDownloading: true, downloadProgress: 0 }
        : lang
    ));

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

  const handleDelete = (languageId: string) => {
    setLanguageList(prev => prev.map(lang => 
      lang.id === languageId 
        ? { ...lang, isDownloaded: false, downloadProgress: 0 }
        : lang
    ));
  };

  const filteredLanguages = languageList
    .filter(lang => 
      lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lang.code.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(lang => filterType === 'all' || lang.modelType === filterType)
    .sort((a, b) => {
      switch (sortBy) {
        case 'accuracy':
          return parseFloat(b.accuracy) - parseFloat(a.accuracy);
        case 'size':
          return parseInt(a.size) - parseInt(b.size);
        case 'rating':
          return b.rating - a.rating;
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Navigation />
      
      <div className="relative z-10 pt-24">
        {/* Header */}
        <div className="container mx-auto px-6 py-12">
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
            Language Models
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-slate-300 mb-12 max-w-3xl"
          >
            Download and manage AI language models for accurate lip-reading. Each model is optimized for specific languages and dialects.
          </motion.p>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search languages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="glass-effect border-white/30 text-white placeholder:text-slate-400 pl-10"
              />
            </div>
            
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as any)}
              className="glass-effect border-white/30 text-white bg-transparent rounded-md px-3 py-2"
            >
              <option value="all" className="bg-slate-800">All Types</option>
              <option value="standard" className="bg-slate-800">Standard</option>
              <option value="premium" className="bg-slate-800">Premium</option>
              <option value="experimental" className="bg-slate-800">Experimental</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="glass-effect border-white/30 text-white bg-transparent rounded-md px-3 py-2"
            >
              <option value="name" className="bg-slate-800">Sort by Name</option>
              <option value="accuracy" className="bg-slate-800">Sort by Accuracy</option>
              <option value="rating" className="bg-slate-800">Sort by Rating</option>
              <option value="size" className="bg-slate-800">Sort by Size</option>
            </select>

            <Button className="btn-gradient hover:scale-105 transition-all duration-300">
              <Upload className="mr-2 h-4 w-4" />
              Upload Custom Model
            </Button>
          </motion.div>
        </div>

        {/* Languages Grid */}
        <div ref={sectionRef} className="container mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredLanguages.map((language) => (
              <EnhancedLanguageCard
                key={language.id}
                language={language}
                onDownload={() => handleDownload(language.id)}
                onDelete={() => handleDelete(language.id)}
              />
            ))}
          </div>

          {filteredLanguages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <Globe className="h-16 w-16 text-slate-400 mx-auto mb-4" />
              <p className="text-xl text-slate-400">No languages found matching your criteria</p>
            </motion.div>
          )}
        </div>

        <Footer />
      </div>
    </main>
  );
}

interface EnhancedLanguageCardProps {
  language: Language;
  onDownload: () => void;
  onDelete: () => void;
}

function EnhancedLanguageCard({ language, onDownload, onDelete }: EnhancedLanguageCardProps) {
  const getModelTypeColor = (type: string) => {
    switch (type) {
      case 'premium': return 'text-yellow-400';
      case 'experimental': return 'text-orange-400';
      default: return 'text-green-400';
    }
  };

  const getModelTypeBadge = (type: string) => {
    switch (type) {
      case 'premium': return 'bg-yellow-400/20 text-yellow-400 border-yellow-400/30';
      case 'experimental': return 'bg-orange-400/20 text-orange-400 border-orange-400/30';
      default: return 'bg-green-400/20 text-green-400 border-green-400/30';
    }
  };

  return (
    <motion.div
      className="language-card"
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="h-full glass-card hover:glow-blue transition-all duration-300">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between mb-2">
            <CardTitle className="text-white text-lg">{language.name}</CardTitle>
            <span className={`text-xs px-2 py-1 rounded-full border ${getModelTypeBadge(language.modelType)}`}>
              {language.modelType.toUpperCase()}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm text-slate-400">
            <span>{language.code}</span>
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 text-yellow-400 fill-current" />
              <span>{language.rating}</span>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-sm text-slate-300">{language.description}</p>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <p className="text-slate-400">Size: <span className="text-white">{language.size}</span></p>
              <p className="text-slate-400">Version: <span className="text-white">{language.version}</span></p>
              <p className="text-slate-400">Downloads: <span className="text-white">{language.downloads}</span></p>
            </div>
            <div className="space-y-1">
              <p className="text-slate-400">Accuracy: <span className={getModelTypeColor(language.modelType)}>{language.accuracy}</span></p>
              <p className="text-slate-400">Updated: <span className="text-white">{language.lastUpdated}</span></p>
            </div>
          </div>

          {language.isDownloading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-slate-300">
                <span>Downloading...</span>
                <span>{language.downloadProgress}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <motion.div
                  className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full glow-blue"
                  initial={{ width: 0 }}
                  animate={{ width: `${language.downloadProgress}%` }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </div>
          )}

          <div className="flex gap-2">
            {!language.isDownloaded ? (
              <Button
                onClick={onDownload}
                disabled={language.isDownloading}
                className={`flex-1 transition-all duration-300 hover:scale-105 ${
                  language.isDownloading
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'btn-gradient'
                }`}
              >
                {language.isDownloading ? (
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
            ) : (
              <>
                <Button
                  variant="outline"
                  className="flex-1 bg-green-600 hover:bg-green-700 border-green-600 text-white"
                  disabled
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Downloaded
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={onDelete}
                  className="glass-effect text-red-400 hover:bg-red-500/20 border-red-400/30"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}