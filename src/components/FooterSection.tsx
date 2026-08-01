import React from 'react';
import { EXECUTIVE_PROFILE } from '../data/portfolioData';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

interface FooterSectionProps {
  darkMode?: boolean;
}

export const FooterSection: React.FC<FooterSectionProps> = () => {
  return (
    <footer className="py-16 border-t border-sky-500/20 bg-[#030712] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/20 to-orange-500/20 border border-sky-400/40 flex items-center justify-center font-bold text-sm text-sky-300">
                ML
              </div>
              <div>
                <span className="font-semibold text-lg text-white tracking-tight block">Matthew Lowinger</span>
                <span className="text-[11px] font-mono text-sky-400 font-medium">Senior AI Product Manager</span>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-gray-300 max-w-sm">
              Partnering with Fortune 500s, federal research labs, and venture studios to architect and product manage mission-critical Agentic Workflows, Intelligent OCR, and Enterprise RAG platforms.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={EXECUTIVE_PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-sky-950/30 border border-sky-500/30 hover:border-sky-400 text-gray-200 hover:text-sky-300 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-sky-400" />
              </a>

              <a
                href={`mailto:${EXECUTIVE_PROFILE.email}`}
                className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/30 hover:border-orange-400 text-gray-200 hover:text-orange-300 transition-colors"
                title="Direct Email"
              >
                <Mail className="w-4 h-4 text-orange-400" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold font-mono uppercase tracking-wider text-sky-400">
              Core Disciplines
            </h4>
            <ul className="space-y-2 text-xs font-medium text-gray-300">
              <li><a href="#capabilities" className="hover:text-sky-300 transition-colors">AI Product Management</a></li>
              <li><a href="#capabilities" className="hover:text-sky-300 transition-colors">Agentic Multi-Agent Workflows</a></li>
              <li><a href="#capabilities" className="hover:text-sky-300 transition-colors">Intelligent OCR & Vision</a></li>
              <li><a href="#capabilities" className="hover:text-sky-300 transition-colors">Enterprise Hybrid RAG Search</a></li>
              <li><a href="#capabilities" className="hover:text-sky-300 transition-colors">LLM Evals & Guardrails</a></li>
            </ul>
          </div>

          {/* Executive Contact */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold font-mono uppercase tracking-wider text-orange-400">
              Get In Touch
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              Ready to accelerate your Enterprise AI roadmap, automate unstructured document pipelines, or scale agentic AI systems? Reach out directly via email.
            </p>
            <a
              href={`mailto:${EXECUTIVE_PROFILE.email}`}
              className="w-full py-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-lg shadow-sky-500/25 transition-all"
            >
              <Mail className="w-4 h-4 text-white" />
              <span>Contact Matthew ({EXECUTIVE_PROFILE.email})</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-90" />
            </a>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Matthew Lowinger. All Rights Reserved. AI Product Portfolio.</p>
          <div className="flex items-center gap-4 font-mono text-gray-400">
            <span>Senior AI Product Manager</span>
            <span>•</span>
            <span>Washington, D.C.</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
