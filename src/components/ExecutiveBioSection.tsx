import React from 'react';
import { EXECUTIVE_PROFILE } from '../data/portfolioData';
import { CheckCircle2, Linkedin, Mail } from 'lucide-react';

interface ExecutiveBioSectionProps {
  darkMode?: boolean;
}

export const ExecutiveBioSection: React.FC<ExecutiveBioSectionProps> = () => {
  const okrPillars = [
    {
      title: "AI Product Strategy & Roadmap Execution",
      description: "Leading discovery, PRD definition, user story mapping, and sprint velocity for multi-million-dollar enterprise AI initiatives with measurable business metrics."
    },
    {
      title: "Agentic Systems & Multi-Agent PM",
      description: "Architecting and product managing stateful multi-agent execution graphs (LangGraph/AutoGen) with Human-in-the-Loop (HITL) safety gates and dynamic tool integration."
    },
    {
      title: "Intelligent OCR, Vision & Enterprise RAG",
      description: "Transforming unstructured documents and medical/financial scans into structured records using Layout-aware OCR, Vision LLMs, and zero-hallucination hybrid vector search."
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-[#030712] text-white border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Headshot Photo Frame */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative group w-full max-w-md">
              <div className="relative rounded-2xl overflow-hidden border border-sky-500/30 bg-sky-950/20 shadow-2xl">
                <div className="aspect-[4/5] w-full relative bg-black flex items-center justify-center overflow-hidden">
                  <img
                    src="ml_headshot.jpeg"
                    alt={EXECUTIVE_PROFILE.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800";
                    }}
                  />

                  {/* Gradient Overlay bottom badge */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/20 to-transparent opacity-90" />
                  
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#030712]/85 backdrop-blur-md border border-sky-500/30 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-sm tracking-tight text-white">{EXECUTIVE_PROFILE.name}</h4>
                        <p className="text-[11px] text-sky-400 font-mono font-medium">Senior AI Product Manager</p>
                      </div>
                      <span className="w-2.5 h-2.5 rounded-full bg-orange-400 animate-pulse" title="Available for AI Advisory & Leadership" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links under Headshot */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href={EXECUTIVE_PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border border-sky-500/30 bg-sky-950/30 text-gray-200 hover:text-sky-300 hover:border-sky-400 transition-all"
              >
                <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                <span>LinkedIn Profile</span>
              </a>

              <a
                href={`mailto:${EXECUTIVE_PROFILE.email}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border border-orange-500/30 bg-orange-500/10 text-gray-200 hover:text-orange-300 hover:border-orange-400 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-orange-400" />
                <span>Direct Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Narrative & OKR Focus */}
          <div className="lg:col-span-7">
            <div className="text-xs uppercase tracking-[0.3em] text-sky-400 font-semibold mb-3">
              About Matthew Lowinger
            </div>

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight leading-tight mb-6 text-white">
              Bridge Between <span className="font-semibold text-orange-400">AI Product Strategy</span> & High-Scale Execution
            </h2>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed mb-8 text-gray-300">
              {EXECUTIVE_PROFILE.bio.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* OKR & Systems Pillars */}
            <div className="space-y-3.5 mb-8">
              {okrPillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-sky-500/20 bg-sky-950/10 hover:border-orange-500/40 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className={`w-5 h-5 ${idx % 2 === 0 ? 'text-sky-400' : 'text-orange-400'} flex-shrink-0 mt-0.5`} />
                    <div>
                      <h4 className="text-sm font-semibold tracking-tight text-white mb-1">
                        {pillar.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-gray-300">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Executive Action CTA */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="mailto:matt.lowinger@gmail.com"
                className="px-7 py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs tracking-wide shadow-lg shadow-sky-500/25 transition-all flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-white" />
                <span>Contact Matthew</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
