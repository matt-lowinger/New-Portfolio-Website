import React, { useState } from 'react';
import { CAPABILITIES, CapabilityPillar } from '../data/portfolioData';
import { Bot, Database, Cpu, Sparkles, Terminal, Network, Layers, Scan, CheckCircle, TerminalSquare } from 'lucide-react';

interface CapabilitiesGridProps {
  darkMode?: boolean;
}

export const CapabilitiesGrid: React.FC<CapabilitiesGridProps> = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Product & Strategy' | 'Agentic & RAG' | 'Vision & OCR'>('All');
  const [selectedCapability, setSelectedCapability] = useState<CapabilityPillar | null>(null);

  const filteredCapabilities = CAPABILITIES.filter((cap) => {
    if (activeTab === 'All') return true;
    return cap.category === activeTab;
  });

  const getIcon = (iconName: string, idx: number) => {
    const isSky = idx % 2 === 0;
    const colorClass = isSky ? "text-sky-400" : "text-orange-400";
    switch (iconName) {
      case 'Layers': return <Layers className={`w-5 h-5 ${colorClass}`} />;
      case 'Bot': return <Bot className={`w-5 h-5 ${colorClass}`} />;
      case 'Scan': return <Scan className={`w-5 h-5 ${colorClass}`} />;
      case 'Database': return <Database className={`w-5 h-5 ${colorClass}`} />;
      case 'Terminal': return <Terminal className={`w-5 h-5 ${colorClass}`} />;
      case 'Network': return <Network className={`w-5 h-5 ${colorClass}`} />;
      case 'Sparkles': return <Sparkles className={`w-5 h-5 ${colorClass}`} />;
      default: return <Cpu className={`w-5 h-5 ${colorClass}`} />;
    }
  };

  return (
    <section id="capabilities" className="py-20 bg-[#030712] text-white relative border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="text-xs uppercase tracking-[0.3em] text-sky-400 font-semibold mb-3">
            Product Managed & Executed
          </div>

          <h2 className="text-3xl sm:text-5xl font-light tracking-tight mb-4 text-white">
            Core AI <span className="font-semibold text-orange-400">Product Disciplines</span>
          </h2>

          <p className="text-sm sm:text-base text-gray-300">
            Proven expertise in product discovery, multi-agent frameworks, intelligent OCR document pipelines, enterprise hybrid RAG search, and LLM evaluation guardrails.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(['All', 'Product & Strategy', 'Agentic & RAG', 'Vision & OCR'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg shadow-sky-500/25'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-sky-500/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredCapabilities.map((cap, idx) => {
            const isSky = idx % 2 === 0;
            return (
              <div
                key={cap.id}
                onClick={() => setSelectedCapability(cap)}
                className={`group relative rounded-2xl p-6 border ${isSky ? 'border-sky-500/20 bg-sky-950/10 hover:border-sky-400/50' : 'border-orange-500/20 bg-orange-950/10 hover:border-orange-400/50'} hover:bg-white/[0.08] transition-all duration-300 cursor-pointer flex flex-col justify-between`}
              >
                <div>
                  {/* Header Icon + Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2.5 rounded-xl border ${isSky ? 'border-sky-400/30 bg-sky-950/30' : 'border-orange-400/30 bg-orange-950/30'}`}>
                      {getIcon(cap.iconName, idx)}
                    </div>
                    <span className={`text-[11px] font-mono tracking-wider uppercase ${isSky ? 'text-sky-400' : 'text-orange-400'}`}>
                      0{idx + 1} // {cap.category}
                    </span>
                  </div>

                  {/* Capability Title */}
                  <h3 className="text-lg font-semibold tracking-tight mb-1 text-white group-hover:text-sky-300 transition-colors">
                    {cap.title}
                  </h3>

                  <p className={`text-xs font-mono font-medium mb-3 ${isSky ? 'text-sky-300/90' : 'text-orange-300/90'}`}>
                    {cap.tagline}
                  </p>

                  <p className="text-xs leading-relaxed text-gray-300 mb-4 line-clamp-3">
                    {cap.description}
                  </p>

                  {/* Deliverables checklist summary */}
                  <div className="space-y-1.5 pt-2 border-t border-white/10">
                    {cap.technicalDeliverables.slice(0, 2).map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-[11px] text-gray-300">
                        <CheckCircle className={`w-3.5 h-3.5 ${isSky ? 'text-sky-400' : 'text-orange-400'} flex-shrink-0 mt-0.5`} />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Capability Modal / Detail Drawer */}
        {selectedCapability && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in">
            <div className="relative w-full max-w-2xl rounded-2xl border border-sky-500/30 bg-[#070d19] text-white p-6 sm:p-8 max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-950/40 border border-sky-400/30">
                    {getIcon(selectedCapability.iconName, 0)}
                  </div>
                  <div>
                    <span className="text-xs text-sky-400 font-mono tracking-wider uppercase">
                      PRODUCT SPECIFICATION // {selectedCapability.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">{selectedCapability.title}</h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCapability(null)}
                  className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <p className="text-sm leading-relaxed mb-6 text-gray-300">
                {selectedCapability.description}
              </p>

              {/* Technical Deliverables */}
              <div className="mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-widest font-mono text-orange-400 mb-3">
                  Key Deliverables & Specifications
                </h4>
                <div className="space-y-2">
                  {selectedCapability.technicalDeliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Code Blueprint if available */}
              {selectedCapability.sampleArchitectureCode && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TerminalSquare className="w-4 h-4 text-orange-400" />
                    <span className="text-xs font-semibold uppercase tracking-wider font-mono text-orange-400">
                      Product Architecture Blueprint
                    </span>
                  </div>
                  <pre className="p-4 rounded-xl bg-[#030712] text-sky-300 font-mono text-xs overflow-x-auto border border-sky-500/20">
                    <code>{selectedCapability.sampleArchitectureCode}</code>
                  </pre>
                </div>
              )}

              <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedCapability(null)}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs"
                >
                  Close Specification
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
