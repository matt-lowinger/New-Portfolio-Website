import React from 'react';
import { ArrowDown, Mail, Sparkles, Bot, Database, Scan, Layers } from 'lucide-react';
import { EXECUTIVE_PROFILE } from '../data/portfolioData';

interface HeroSectionProps {
  darkMode?: boolean;
  onOpenBooking?: () => void;
  onOpenChat: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenChat
}) => {
  const corePillars = [
    { icon: Layers, label: 'AI Product Strategy', color: 'text-sky-400', border: 'border-sky-500/30' },
    { icon: Bot, label: 'Agentic Workflows', color: 'text-orange-400', border: 'border-orange-500/30' },
    { icon: Scan, label: 'Intelligent OCR & Vision', color: 'text-sky-400', border: 'border-sky-500/30' },
    { icon: Database, label: 'Enterprise RAG Search', color: 'text-orange-400', border: 'border-orange-500/30' }
  ];

  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center pt-28 pb-12 overflow-hidden bg-[#030712] text-white">
      {/* Background Orbs - Orange & Blue dynamic contrast */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-sky-500/15 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-orange-500/15 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none -z-10 opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* PROMINENT NAME DISPLAY ABOVE THE FOLD */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sky-400/30 bg-sky-950/40 text-sky-300 text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
            <span>Matthew Lowinger • Senior AI Product Manager</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-6 text-white">
            Product Managing <br className="hidden sm:inline" />
            <span className="font-semibold bg-gradient-to-r from-sky-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">Enterprise AI Systems</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8 text-gray-300">
            Leading end-to-end product lifecycles for mission-critical <span className="text-sky-400 font-medium">Agentic Workflows</span>, <span className="text-orange-400 font-medium">Intelligent OCR</span>, and <span className="text-sky-400 font-medium">Enterprise RAG</span> platforms across Fortune 500s and federal agencies.
          </p>

          {/* Core System Quick Tags */}
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 mb-10">
            {corePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-medium border ${pillar.border} bg-white/5 text-gray-200 hover:bg-white/10 transition-all`}
                >
                  <IconComp className={`w-4 h-4 ${pillar.color}`} />
                  <span>{pillar.label}</span>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 mb-14 w-full max-w-md sm:max-w-none mx-auto">
            {/* Direct Mailto Contact Button */}
            <a
              href="mailto:matt.lowinger@gmail.com"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-lg shadow-sky-500/25 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Contact Matthew</span>
            </a>

            <a
              href="#case-studies"
              className="w-full sm:w-auto px-7 py-3.5 rounded-full font-medium text-xs sm:text-sm border border-orange-500/40 bg-orange-500/10 text-orange-200 hover:bg-orange-500/20 transition-all flex items-center justify-center gap-2"
            >
              <span>View Portfolio & Case Studies</span>
              <ArrowDown className="w-4 h-4 text-orange-400" />
            </a>

            <button
              onClick={onOpenChat}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full font-medium text-xs sm:text-sm border border-sky-400/30 bg-sky-950/30 text-sky-200 hover:bg-sky-900/40 transition-all flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-sky-400" />
              <span>Ask AI Assistant</span>
            </button>
          </div>

          {/* Key Executive Metrics Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 p-5 sm:p-7 rounded-2xl border border-sky-500/20 bg-sky-950/10 backdrop-blur-xl">
            {EXECUTIVE_PROFILE.stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-2">
                <span className={`text-2xl sm:text-4xl font-bold font-mono ${idx % 2 === 0 ? 'text-sky-400' : 'text-orange-400'} mb-1`}>
                  {stat.value}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-white">
                  {stat.label}
                </span>
                <span className="text-[11px] text-gray-400 mt-0.5">
                  {stat.subtext}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
