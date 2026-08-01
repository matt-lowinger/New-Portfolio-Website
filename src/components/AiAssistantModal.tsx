import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, User, Copy, Check } from 'lucide-react';
import { AI_KNOWLEDGE_BASE, EXECUTIVE_PROFILE } from '../data/portfolioData';

interface AiAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode?: boolean;
  onOpenBooking?: () => void;
}

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export const AiAssistantModal: React.FC<AiAssistantModalProps> = ({
  isOpen,
  onClose
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: `Hello! I am Matthew Lowinger's AI Product Assistant. Ask me anything about Matthew's work in AI Product Management, Agentic Systems, Intelligent OCR, RAG Architectures, Bain/Cisco case studies, or contacting Matthew directly.`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const quickTopics = [
    "Tell me about Matthew's AI Product leadership",
    "What is his Agentic & RAG stack?",
    "Show Bain & Cisco case study details",
    "How does he handle Intelligent OCR?",
    "Contact Matthew directly"
  ];

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const getKnowledgeResponse = (query: string): string => {
    const qLower = query.toLowerCase();

    if (qLower.includes('contact') || qLower.includes('email') || qLower.includes('reach out') || qLower.includes('hire')) {
      return `Matthew is available for AI Product Leadership and Advisory roles. You can email him directly at ${EXECUTIVE_PROFILE.email}.`;
    }

    for (const kb of AI_KNOWLEDGE_BASE) {
      if (kb.keywords.some((kw) => qLower.includes(kw))) {
        return kb.answer;
      }
    }

    return `Matthew is a Senior AI Product Manager specializing in Agentic Workflows, Intelligent OCR / Vision, Hybrid RAG Search, and LLM Evals. He has led enterprise AI engagements for Bain & Company, Cisco, NIH, and more. Reach out at ${EXECUTIVE_PROFILE.email} to get in touch.`;
  };

  const handleSend = async (textToSend?: string) => {
    const query = textToSend || inputText;
    if (!query.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputText('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: query })
      });

      if (res.ok) {
        const data = await res.json();
        if (data.reply) {
          setMessages((prev) => [
            ...prev,
            {
              id: (Date.now() + 1).toString(),
              sender: 'ai',
              text: data.reply,
              timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
          ]);
          setIsTyping(false);
          return;
        }
      }
    } catch (e) {
      // Local knowledge base fallback
    }

    setTimeout(() => {
      const replyText = getKnowledgeResponse(query);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'ai',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 500);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-2xl h-[620px] max-h-[90vh] rounded-2xl border border-sky-500/30 bg-[#070d19] text-white flex flex-col overflow-hidden shadow-2xl">
        
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center justify-between bg-sky-950/20">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-300">
              <Bot className="w-5 h-5 animate-pulse text-sky-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-sm sm:text-base tracking-tight text-white">Ask Matthew's AI Assistant</h3>
                <span className="w-2 h-2 rounded-full bg-orange-400" />
              </div>
              <p className="text-[11px] text-sky-400 font-mono">Enterprise AI Product Knowledge Engine</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Question Chips */}
        <div className="px-4 py-3 border-b border-white/10 bg-[#030712] flex gap-2 overflow-x-auto no-scrollbar">
          {quickTopics.map((topic, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(topic)}
              className="px-3 py-1 rounded-full text-xs font-medium font-mono whitespace-nowrap bg-white/5 text-sky-300 border border-sky-500/20 hover:bg-sky-500/10 hover:border-sky-400 transition-all"
            >
              {topic}
            </button>
          ))}
        </div>

        {/* Messages Feed */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 custom-scrollbar bg-[#030712]">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-bold ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-br from-sky-500 to-blue-600 text-white'
                  : 'bg-white/10 text-sky-400 border border-sky-500/30'
              }`}>
                {msg.sender === 'user' ? <User className="w-4 h-4 text-white" /> : <Bot className="w-4 h-4" />}
              </div>

              <div className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-medium rounded-tr-none'
                  : 'bg-white/5 border border-white/10 text-gray-200 rounded-tl-none'
              }`}>
                <p className="whitespace-pre-wrap">{msg.text}</p>
                <div className="mt-2 flex items-center justify-between text-[10px] text-gray-400 border-t border-white/10 pt-1.5">
                  <span>{msg.timestamp}</span>
                  {msg.sender === 'ai' && (
                    <button
                      onClick={() => copyToClipboard(msg.text, msg.id)}
                      className="hover:text-sky-300 flex items-center gap-1"
                      title="Copy response"
                    >
                      {copiedId === msg.id ? <Check className="w-3 h-3 text-sky-400" /> : <Copy className="w-3 h-3" />}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-2 text-sky-400 text-xs font-mono">
              <Bot className="w-4 h-4 animate-spin" />
              <span>Synthesizing AI Product Intelligence...</span>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-4 border-t border-white/10 bg-white/5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Ask about AI Product Management, Agentic OCR, RAG..."
              className="flex-1 px-4 py-3 rounded-xl border border-white/10 bg-[#030712] text-white text-xs sm:text-sm font-medium placeholder-gray-500 focus:outline-none focus:border-sky-500"
            />
            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="p-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold disabled:opacity-50 transition-all flex items-center justify-center"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
