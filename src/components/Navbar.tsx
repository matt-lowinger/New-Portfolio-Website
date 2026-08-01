import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles, Mail } from 'lucide-react';

interface NavbarProps {
  darkMode?: boolean;
  setDarkMode?: (val: boolean) => void;
  onOpenBooking?: () => void;
  onOpenChat: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenChat
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'capabilities', 'case-studies', 'awards'];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 180 && rect.bottom >= 180;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Core Disciplines', href: '#capabilities' },
    { name: 'Case Studies', href: '#case-studies' },
    { name: 'Recognition', href: '#awards' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? 'bg-[#030712]/90 backdrop-blur-md border-sky-500/20 shadow-2xl shadow-black/90'
            : 'bg-[#030712]/50 backdrop-blur-sm border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none"
            onClick={(e) => handleNavClick(e, '#home')}
          >
            <div className="w-9 h-9 bg-gradient-to-br from-sky-500/20 to-orange-500/20 border border-sky-400/40 rounded-xl flex items-center justify-center font-extrabold text-xs text-sky-300 group-hover:border-orange-400 transition-all shadow-sm">
              ML
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-tight text-base sm:text-lg text-white group-hover:text-sky-300 transition-colors">
                Matthew Lowinger
              </span>
              <span className="text-[10px] font-mono text-sky-400 tracking-wider uppercase font-medium">
                Senior AI Product Manager
              </span>
            </div>
          </a>

          {/* Desktop Navigation Pill */}
          <nav className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full border border-sky-500/20 bg-sky-950/20 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold shadow-md shadow-sky-500/20'
                      : 'text-gray-300 hover:text-orange-400 hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Ask AI Trigger */}
            <button
              onClick={onOpenChat}
              className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium border border-orange-500/40 bg-orange-500/10 text-orange-300 hover:bg-orange-500/20 transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-orange-400 animate-pulse" />
              <span>Ask AI</span>
            </button>

            {/* Direct Contact Email Link */}
            <a
              href="mailto:matt.lowinger@gmail.com"
              className="flex items-center gap-2 px-4 py-1.5 border border-sky-400/40 rounded-full font-medium text-xs tracking-wide text-white bg-sky-500/10 hover:bg-sky-500/20 hover:border-sky-300 transition-all"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>Contact</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-orange-400 opacity-90" />
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-white/10 bg-white/5 text-gray-200 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-sky-400" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden pt-24 px-6 pb-8 bg-[#030712]/95 backdrop-blur-xl text-white transition-all">
          <div className="flex flex-col gap-4">
            <div className="pb-4 border-b border-sky-500/20">
              <span className="text-xs font-mono text-sky-400 uppercase tracking-widest block mb-1">
                Executive Portfolio
              </span>
              <h2 className="text-xl font-semibold text-white">Matthew Lowinger</h2>
              <p className="text-xs text-orange-400 font-mono">Senior AI Product Manager</p>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-3 px-4 rounded-xl text-sm font-medium border border-white/10 bg-white/5 hover:border-sky-500/40 hover:text-sky-300 transition-all"
              >
                {link.name}
              </a>
            ))}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenChat();
              }}
              className="mt-2 w-full py-3.5 px-4 rounded-xl font-medium text-xs border border-orange-500/30 bg-orange-500/10 text-orange-300 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              Ask Matthew's AI Assistant
            </button>

            <a
              href="mailto:matt.lowinger@gmail.com"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 px-4 rounded-xl font-semibold text-xs bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white flex items-center justify-center gap-2 shadow-lg shadow-sky-500/20"
            >
              <Mail className="w-4 h-4 text-white" />
              Contact Matthew
            </a>
          </div>
        </div>
      )}
    </>
  );
};
