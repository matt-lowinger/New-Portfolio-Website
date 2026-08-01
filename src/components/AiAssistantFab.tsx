import React from 'react';
import { Sparkles } from 'lucide-react';

interface AiAssistantFabProps {
  onOpen: () => void;
  darkMode?: boolean;
}

export const AiAssistantFab: React.FC<AiAssistantFabProps> = ({ onOpen }) => {
  return (
    <button
      onClick={onOpen}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-3 px-4 py-3 rounded-full border border-sky-500/40 bg-[#070d19]/90 text-white backdrop-blur-md shadow-2xl shadow-sky-500/20 hover:border-sky-400 hover:scale-105 active:scale-95 transition-all duration-300 group"
      aria-label="Ask Matthew's AI Assistant"
    >
      <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-sky-500 to-blue-600 text-white font-bold shadow-md">
        <Sparkles className="w-4 h-4 text-white animate-pulse" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-orange-400 border-2 border-black" />
      </div>

      <div className="flex flex-col text-left">
        <span className="text-xs font-semibold tracking-tight text-white">Ask Matthew</span>
        <span className="text-[10px] text-sky-400 font-mono font-medium">AI Assistant</span>
      </div>
    </button>
  );
};
