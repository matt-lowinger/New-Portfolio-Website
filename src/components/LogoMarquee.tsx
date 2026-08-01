import React, { useState } from 'react';
import { PARTNER_LOGOS } from '../data/portfolioData';
import { Building2, Sparkles } from 'lucide-react';

interface LogoMarqueeProps {
  darkMode?: boolean;
}

// Brand SVG logo marks to ensure crisp, infallible corporate logo rendering
const CompanyLogoIcon: React.FC<{ domain: string; name: string }> = ({ domain, name }) => {
  const [imageError, setImageError] = useState(false);
  const clearbitUrl = `https://logo.clearbit.com/${domain}`;

  // Custom SVG brand marks for major key companies
  if (name.includes("Bain")) {
    return (
      <svg className="w-6 h-6 text-[#CC0000] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z" />
      </svg>
    );
  }
  if (name.includes("Cisco")) {
    return (
      <svg className="w-7 h-5 text-[#049FD9] flex-shrink-0" viewBox="0 0 24 16" fill="currentColor">
        <rect x="2" y="6" width="1.5" height="10" rx="0.75" />
        <rect x="6" y="2" width="1.5" height="14" rx="0.75" />
        <rect x="10" y="0" width="1.5" height="16" rx="0.75" />
        <rect x="14" y="2" width="1.5" height="14" rx="0.75" />
        <rect x="18" y="6" width="1.5" height="10" rx="0.75" />
      </svg>
    );
  }
  if (name.includes("National Institutes of Health") || name.includes("NIH")) {
    return (
      <svg className="w-6 h-6 text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l7 3.5v7.4l-7 3.5-7-3.5V8.3l7-3.5z" />
        <circle cx="12" cy="12" r="3" fill="#38BDF8" />
      </svg>
    );
  }
  if (name.includes("Johnson & Johnson")) {
    return (
      <svg className="w-6 h-6 text-[#D51900] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11 2h2v7h7v2h-7v11h-2V11H4V9h7V2z" />
      </svg>
    );
  }
  if (name.includes("Johns Hopkins")) {
    return (
      <svg className="w-6 h-6 text-[#002D62] flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3 7v11l9 4 9-4V7l-9-5zm0 2.2l6.8 3.8v8.8L12 20.3 5.2 16.8V8L12 4.2z" />
        <path d="M12 7l4 2v4l-4 2-4-2V9l4-2z" fill="#38BDF8" />
      </svg>
    );
  }
  if (name.includes("Allegis")) {
    return (
      <svg className="w-6 h-6 text-sky-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 12l10 10 10-10L12 2zm0 4.5l6.5 6.5-6.5 6.5-6.5-6.5L12 6.5z" />
      </svg>
    );
  }
  if (name.includes("MedStar")) {
    return (
      <svg className="w-6 h-6 text-amber-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2l2.4 7.4H22l-6 4.4 2.3 7.2L12 16.5 5.7 21l2.3-7.2-6-4.4h7.6z" />
      </svg>
    );
  }

  if (!imageError) {
    return (
      <img
        src={clearbitUrl}
        alt={name}
        className="h-6 w-auto max-w-[100px] object-contain flex-shrink-0 grayscale group-hover:grayscale-0 transition-all duration-300"
        onError={() => setImageError(true)}
      />
    );
  }

  return (
    <div className="w-6 h-6 rounded-lg bg-sky-500/20 border border-sky-400/40 text-sky-300 text-[10px] font-bold flex items-center justify-center flex-shrink-0 font-mono">
      {name.substring(0, 2).toUpperCase()}
    </div>
  );
};

export const LogoMarquee: React.FC<LogoMarqueeProps> = () => {
  const [hoveredLogo, setHoveredLogo] = useState<string | null>(null);

  // Duplicate list to achieve seamless infinite loop
  const duplicatedLogos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="py-8 border-y border-sky-500/20 bg-[#030712]/90 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-semibold uppercase tracking-widest font-mono text-gray-300">
            Enterprise & Partner Organizations
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-medium text-gray-400">
          <Sparkles className="w-3.5 h-3.5 text-orange-400" />
          <span className="text-gray-300 font-mono">50+ AI Engagements Managed</span>
        </div>
      </div>

      {/* Marquee Track Container */}
      <div className="relative w-full overflow-hidden py-2">
        {/* Gradient Edges fade overlay */}
        <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-32 z-10 pointer-events-none bg-gradient-to-r from-[#030712] to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-32 z-10 pointer-events-none bg-gradient-to-l from-[#030712] to-transparent" />

        <div className="flex w-max animate-marquee space-x-4 sm:space-x-8 items-center">
          {duplicatedLogos.map((logo, index) => {
            return (
              <div
                key={`${logo.name}-${index}`}
                onMouseEnter={() => setHoveredLogo(logo.name)}
                onMouseLeave={() => setHoveredLogo(null)}
                className="relative group flex items-center justify-center px-4 py-2.5 rounded-xl border border-sky-500/20 bg-sky-950/20 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300 cursor-pointer shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <CompanyLogoIcon domain={logo.domain} name={logo.name} />
                  <span className="text-xs font-semibold tracking-tight whitespace-nowrap text-gray-200 group-hover:text-white transition-colors">
                    {logo.name}
                  </span>
                </div>

                {/* Hover Tooltip showing category */}
                {hoveredLogo === logo.name && (
                  <div className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-md bg-gradient-to-r from-sky-500 to-blue-600 text-white text-[10px] font-bold tracking-wide whitespace-nowrap shadow-lg z-20 pointer-events-none animate-fade-in border border-sky-300/30">
                    {logo.category}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
