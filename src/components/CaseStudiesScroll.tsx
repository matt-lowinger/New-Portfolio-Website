import React, { useRef, useState } from 'react';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData';
import { ChevronLeft, ChevronRight, ArrowUpRight, CheckCircle2, Sparkles, Building2 } from 'lucide-react';

interface CaseStudiesScrollProps {
  darkMode?: boolean;
}

export const CaseStudiesScroll: React.FC<CaseStudiesScrollProps> = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeCaseModal, setActiveCaseModal] = useState<CaseStudy | null>(null);

  const categories = ['All', 'Healthcare', 'Enterprise Tech', 'Federal & Gov', 'FinTech & Talent'];

  const filteredCaseStudies = CASE_STUDIES.filter((cs) => {
    if (selectedCategory === 'All') return true;
    return cs.category === selectedCategory;
  });

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="case-studies" className="py-20 bg-[#030712] text-white relative border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-sky-400 font-semibold mb-3">
              Case Studies & Portfolio
            </div>

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-white">
              AI Systems <span className="font-semibold text-orange-400">Product Managed</span>
            </h2>
            <p className="text-sm sm:text-base mt-2 max-w-xl text-gray-300">
              End-to-end product execution for Bain & Company, Cisco, NIH, MedStar Health, Allegis Group, and CHIME.
            </p>
          </div>

          {/* Controls & Filter */}
          <div className="flex items-center gap-3 self-start md:self-auto">
            <button
              onClick={() => scroll('left')}
              className="p-3 rounded-full border border-sky-500/30 bg-sky-950/20 text-gray-200 hover:bg-sky-900/40 hover:text-white transition-all"
              title="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5 text-sky-400" />
            </button>

            <button
              onClick={() => scroll('right')}
              className="p-3 rounded-full border border-sky-500/30 bg-sky-950/20 text-gray-200 hover:bg-sky-900/40 hover:text-white transition-all"
              title="Scroll Right"
            >
              <ChevronRight className="w-5 h-5 text-sky-400" />
            </button>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/20'
                  : 'bg-white/5 border border-sky-500/20 text-gray-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scrollable Track Container */}
        <div
          ref={scrollRef}
          className="flex gap-5 sm:gap-6 overflow-x-auto custom-scrollbar pb-8 pt-2 scroll-smooth snap-x snap-mandatory"
        >
          {filteredCaseStudies.map((study, idx) => {
            const isSky = idx % 2 === 0;
            return (
              <div
                key={study.id}
                className={`snap-start flex-shrink-0 w-[300px] sm:w-[400px] rounded-2xl border ${isSky ? 'border-sky-500/20 bg-sky-950/10 hover:border-sky-400/50' : 'border-orange-500/20 bg-orange-950/10 hover:border-orange-400/50'} flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1.5`}
              >
                {/* Card Header */}
                <div className="p-5 sm:p-6 pb-2 relative">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {study.domain ? (
                        <img
                          src={`https://logo.clearbit.com/${study.domain}`}
                          alt={study.client}
                          className="w-5 h-5 object-contain grayscale opacity-80"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <Building2 className={`w-4 h-4 ${isSky ? 'text-sky-400' : 'text-orange-400'}`} />
                      )}
                      <span className={`text-[11px] font-mono uppercase tracking-wider ${isSky ? 'text-sky-400' : 'text-orange-400'}`}>
                        {study.category} // {study.timeframe}
                      </span>
                    </div>
                    <div className={`text-sm font-bold ${isSky ? 'text-sky-400' : 'text-orange-400'}`}>↗</div>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold tracking-tight mb-1 text-white">{study.client}</h3>
                  <p className={`text-xs font-medium line-clamp-1 ${isSky ? 'text-sky-300' : 'text-orange-300'}`}>{study.title}</p>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 pt-2 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs sm:text-sm leading-relaxed mb-5 text-gray-300">
                      {study.executiveSummary}
                    </p>

                    {/* Systems Architected Tags */}
                    <div className="mb-4">
                      <span className={`text-[10px] uppercase tracking-wider font-mono block mb-1.5 font-semibold ${isSky ? 'text-sky-400' : 'text-orange-400'}`}>
                        Systems & Capabilities Delivered:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {study.systemsArchitected.map((sys, sysIdx) => (
                          <span key={sysIdx} className={`text-[10px] font-mono px-2 py-0.5 rounded ${isSky ? 'bg-sky-500/10 text-sky-300 border border-sky-500/20' : 'bg-orange-500/10 text-orange-300 border border-orange-500/20'}`}>
                            {sys}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Impact Metrics Grid */}
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-[#010409] border border-white/10 mb-5">
                      {study.impactMetrics.map((metric, mIdx) => (
                        <div key={mIdx} className="text-center">
                          <span className={`block text-xs sm:text-sm font-bold font-mono ${mIdx % 2 === 0 ? 'text-sky-400' : 'text-orange-400'}`}>
                            {metric.value}
                          </span>
                          <span className="block text-[9px] font-medium text-gray-400 uppercase tracking-tight">
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {study.keyStack.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <button
                    onClick={() => setActiveCaseModal(study)}
                    className="w-full py-3 rounded-xl font-semibold text-xs bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white flex items-center justify-center gap-2 transition-all shadow-md shadow-sky-500/20"
                  >
                    <span>View Case Study Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll Hint Footer */}
        <div className="flex items-center justify-center gap-2 mt-2 text-xs font-mono text-gray-400">
          <span>Swipe or scroll horizontally to explore case studies →</span>
        </div>

        {/* Case Study Detailed Modal */}
        {activeCaseModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-3xl rounded-2xl border border-sky-500/30 bg-[#070d19] text-white p-6 sm:p-8 max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono uppercase text-sky-400 tracking-wider">
                    {activeCaseModal.category} // {activeCaseModal.timeframe}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-semibold text-white">{activeCaseModal.client}</h3>
                  <p className="text-sm font-medium text-orange-300">{activeCaseModal.title}</p>
                </div>
                <button
                  onClick={() => setActiveCaseModal(null)}
                  className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Full Description */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase font-mono text-sky-400 mb-2">Product Challenge & Strategic Context</h4>
                <p className="text-sm leading-relaxed text-gray-300">
                  {activeCaseModal.fullCaseDescription}
                </p>
              </div>

              {/* Technical Architecture */}
              <div className="mb-6 p-4 rounded-xl bg-white/5 border border-sky-500/20">
                <h4 className="text-xs font-semibold uppercase font-mono text-orange-400 mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-orange-400" />
                  Systems Delivered & Product Execution Pillars
                </h4>
                <div className="space-y-2">
                  {activeCaseModal.technicalArchitecture.map((arch, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                      <span>{arch}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* ROI Highlight */}
              <div className="mb-6 p-4 rounded-xl bg-sky-950/40 border border-sky-500/30">
                <h4 className="text-xs font-semibold uppercase font-mono text-sky-300 mb-1">C-Suite Value & Measurable Impact</h4>
                <p className="text-xs sm:text-sm font-medium text-white">{activeCaseModal.roiHighlight}</p>
              </div>

              <div className="flex justify-end pt-4 border-t border-white/10">
                <button
                  onClick={() => setActiveCaseModal(null)}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
