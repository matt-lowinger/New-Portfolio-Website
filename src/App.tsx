import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { LogoMarquee } from './components/LogoMarquee';
import { ExecutiveBioSection } from './components/ExecutiveBioSection';
import { CapabilitiesGrid } from './components/CapabilitiesGrid';
import { CaseStudiesScroll } from './components/CaseStudiesScroll';
import { TestimonialsAccolades } from './components/TestimonialsAccolades';
import { FooterSection } from './components/FooterSection';
import { AiAssistantFab } from './components/AiAssistantFab';
import { AiAssistantModal } from './components/AiAssistantModal';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [bookingOpen, setBookingOpen] = useState<boolean>(false);
  const [chatOpen, setChatOpen] = useState<boolean>(false);

  // Force dark mode class on html root element
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-sky-500 selection:text-white antialiased">
      {/* Top Fixed Navigation */}
      <Navbar
        onOpenBooking={() => setBookingOpen(true)}
        onOpenChat={() => setChatOpen(true)}
      />

      {/* Main Page Content */}
      <main>
        {/* Above-The-Fold Hero Section */}
        <HeroSection
          onOpenBooking={() => setBookingOpen(true)}
          onOpenChat={() => setChatOpen(true)}
        />

        {/* Company Logo Marquee */}
        <LogoMarquee />

        {/* Executive Profile & Strategy */}
        <ExecutiveBioSection
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* Core AI Product Disciplines */}
        <CapabilitiesGrid />

        {/* Scrollable Case Studies */}
        <CaseStudiesScroll />

        {/* Testimonials & Recognition */}
        <TestimonialsAccolades />
      </main>

      {/* Footer */}
      <FooterSection />

      {/* Floating AI Assistant Button */}
      <AiAssistantFab
        onOpen={() => setChatOpen(true)}
      />

      {/* AI Assistant Modal */}
      <AiAssistantModal
        isOpen={chatOpen}
        onClose={() => setChatOpen(false)}
        onOpenBooking={() => {
          setChatOpen(false);
          setBookingOpen(true);
        }}
      />

      {/* Booking / Contact Modal */}
      <ContactModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
      />
    </div>
  );
}
