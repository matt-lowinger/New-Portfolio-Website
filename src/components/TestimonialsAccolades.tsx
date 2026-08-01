import React from 'react';
import { TESTIMONIALS, AWARDS } from '../data/portfolioData';
import { Quote, Star, Trophy } from 'lucide-react';

interface TestimonialsAccoladesProps {
  darkMode?: boolean;
}

export const TestimonialsAccolades: React.FC<TestimonialsAccoladesProps> = () => {
  return (
    <section id="awards" className="py-20 bg-[#030712] text-white relative border-b border-sky-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-sky-400 font-semibold mb-3">
            Industry & Peer Validation
          </div>

          <h2 className="text-3xl sm:text-5xl font-light tracking-tight mb-4 text-white">
            Trusted <span className="font-semibold text-orange-400">AI Product Leadership</span>
          </h2>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-950/40 border border-sky-400/30 text-sky-200 font-medium text-xs">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>100% Client & Partner Recommendation Rate for Technical AI Product Leadership</span>
          </div>
        </div>

        {/* Testimonials Grid (2 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-16 max-w-4xl mx-auto">
          {TESTIMONIALS.map((t, idx) => {
            const isSky = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-2xl border ${isSky ? 'border-sky-500/20 bg-sky-950/10 hover:border-sky-400/50' : 'border-orange-500/20 bg-orange-950/10 hover:border-orange-400/50'} flex flex-col justify-between transition-all duration-300`}
              >
                <div>
                  <Quote className={`w-8 h-8 ${isSky ? 'text-sky-400/40' : 'text-orange-400/40'} mb-4`} />
                  <p className="text-sm leading-relaxed mb-6 italic text-gray-200">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className={`w-10 h-10 rounded-full ${isSky ? 'bg-gradient-to-br from-sky-500 to-blue-600 text-white' : 'bg-orange-500 text-black'} font-extrabold text-xs flex items-center justify-center shadow-md`}>
                    {t.initials}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold tracking-tight text-white">
                      {t.name}
                    </h4>
                    <p className={`text-xs font-mono ${isSky ? 'text-sky-400' : 'text-orange-400'}`}>{t.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Awards & Accolades Banner */}
        <div className="p-6 sm:p-10 rounded-2xl border border-sky-500/20 bg-sky-950/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-sky-950/40 border border-sky-400/30">
                <Trophy className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-sky-400 tracking-wider">
                  Recognized Excellence
                </span>
                <h3 className="text-2xl font-semibold text-white">
                  Industry Awards & Community Honors
                </h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AWARDS.map((award, idx) => (
              <div
                key={idx}
                className="p-6 rounded-xl border border-white/10 bg-[#010409]"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-base font-semibold tracking-tight text-white">
                    {award.title}
                  </h4>
                  <span className="text-xs font-mono text-orange-400 bg-orange-500/10 px-2.5 py-1 rounded-full border border-orange-500/30">
                    {award.year}
                  </span>
                </div>
                <p className="text-xs font-mono text-sky-300 font-medium mb-3">
                  {award.organization} • {award.category}
                </p>
                <p className="text-xs leading-relaxed text-gray-300">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
