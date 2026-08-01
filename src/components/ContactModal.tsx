import React, { useState } from 'react';
import { X, CheckCircle, Send, Mail } from 'lucide-react';
import { EXECUTIVE_PROFILE } from '../data/portfolioData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode?: boolean;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    topic: 'AI Product Management & Strategy',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-xl rounded-2xl border border-sky-500/30 bg-[#070d19] text-white p-6 sm:p-8 max-h-[90vh] overflow-y-auto custom-scrollbar shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
          <div>
            <span className="text-xs font-mono uppercase text-sky-400 tracking-wider">
              Direct Executive Contact
            </span>
            <h3 className="text-2xl font-semibold text-white">Contact Matthew Lowinger</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center mx-auto border border-sky-500/30">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-semibold text-white">Message Delivered</h4>
            <p className="text-xs sm:text-sm leading-relaxed max-w-md mx-auto text-gray-300">
              Thank you, {formData.name}. Matthew has received your note regarding <strong>{formData.topic}</strong>. He will reply to <strong>{formData.email}</strong> shortly.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold text-xs shadow-md shadow-sky-500/20"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-sky-400 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#030712] text-white text-xs font-medium placeholder-gray-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-sky-400 mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@enterprise.com"
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#030712] text-white text-xs font-medium placeholder-gray-500 focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono uppercase text-sky-400 mb-1">
                  Organization / Company
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="e.g. HealthSystem Inc."
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#030712] text-white text-xs font-medium placeholder-gray-500 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-sky-400 mb-1">
                  Title / Role
                </label>
                <input
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g. VP of Product / CTO"
                  className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#030712] text-white text-xs font-medium placeholder-gray-500 focus:outline-none focus:border-sky-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-sky-400 mb-1">
                Discussion Topic & Scope *
              </label>
              <select
                value={formData.topic}
                onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#030712] text-white text-xs font-medium focus:outline-none focus:border-sky-500"
              >
                <option value="AI Product Management & Strategy">AI Product Management & Strategy</option>
                <option value="Agentic Systems & Multi-Agent PM">Agentic Systems & Multi-Agent PM</option>
                <option value="Intelligent OCR & Document Processing">Intelligent OCR & Document Processing</option>
                <option value="Enterprise RAG Architecture">Enterprise RAG Architecture</option>
                <option value="LLM Evals, Quality & Guardrails">LLM Evals, Quality & Guardrails</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-sky-400 mb-1">
                Project Notes / Message
              </label>
              <textarea
                rows={3}
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Briefly describe your current timeline, product objectives, or questions..."
                className="w-full px-4 py-2.5 rounded-xl border border-white/10 bg-[#030712] text-white text-xs font-medium placeholder-gray-500 focus:outline-none focus:border-sky-500"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-full font-semibold text-xs bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <Send className="w-4 h-4" />
                <span>Send Message to Matthew</span>
              </button>
            </div>

            <div className="pt-2 text-center">
              <a
                href={`mailto:${EXECUTIVE_PROFILE.email}`}
                className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 hover:text-orange-300 underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Or email directly: {EXECUTIVE_PROFILE.email}</span>
              </a>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
