
import React, { useState } from 'react';
import { X, Copy, Terminal, Check, Command } from 'lucide-react';

interface PromptModalProps {
  isOpen: boolean;
  onClose: () => void;
  name: string;
  prompt: string;
  onCopy: (text: string) => void;
}

const PromptModal: React.FC<PromptModalProps> = ({ isOpen, onClose, name, prompt, onCopy }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    onCopy(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-500">
      {/* 背景遮罩 - 极深色磨砂 */}
      <div 
        className="absolute inset-0 bg-[#0a0a0b]/80 backdrop-blur-xl" 
        onClick={onClose} 
      />
      
      {/* 弹窗主体 - 统一的深色容器 */}
      <div className="relative w-full max-w-4xl bg-[#1c1c1e] rounded-[40px] shadow-[0_32px_128px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col max-h-[90vh] border border-white/5 animate-in zoom-in-95 slide-in-from-bottom-10 duration-700">
        
        {/* 顶部栏 - 融合设计 */}
        <div className="px-10 py-8 flex justify-between items-start">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2c2c2e] to-[#1c1c1e] border border-white/10 flex items-center justify-center text-white/80 shadow-inner">
              <Command size={28} strokeWidth={1.5} />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-2xl text-white tracking-tight leading-none">{name}</h3>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-white/30 font-black uppercase tracking-[0.2em]">Prompt Architecture</span>
                <span className="w-1 h-1 rounded-full bg-white/10" />
                <span className="text-[10px] text-[#FF6E50] font-bold uppercase tracking-[0.1em]">Verified Tool</span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose} 
            className="w-10 h-10 flex items-center justify-center hover:bg-white/5 rounded-full transition-all text-white/30 hover:text-white"
          >
            <X size={24} />
          </button>
        </div>

        {/* 内容区域 - 渐变淡出效果 */}
        <div className="flex-grow overflow-y-auto px-10 relative">
          <div className="py-2">
            <pre className="text-[15px] md:text-base font-mono text-white/70 whitespace-pre-wrap break-words leading-[1.8] selection:bg-[#FF6E50]/40">
              {prompt}
            </pre>
          </div>
          {/* 底部遮罩，防止文字贴底 */}
          <div className="sticky bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#1c1c1e] to-transparent pointer-events-none" />
        </div>

        {/* 底部操作区 - 悬浮质感 */}
        <div className="p-10 pt-4">
          <button 
            onClick={handleCopy}
            className={`w-full h-16 rounded-[24px] font-bold flex items-center justify-center gap-3 transition-all duration-500 active:scale-[0.98] border border-white/5 ${
              copied 
              ? 'bg-[#34C759] text-white shadow-[0_20px_40px_rgba(52,199,89,0.2)]' 
              : 'bg-white text-[#1c1c1e] shadow-[0_20px_40px_rgba(255,255,255,0.05)] hover:bg-gray-100'
            }`}
          >
            {copied ? (
              <>
                <Check size={20} strokeWidth={2.5} />
                <span>已复制到剪贴板</span>
              </>
            ) : (
              <>
                <Copy size={20} strokeWidth={2.5} />
                <span>复制完整 Prompt</span>
              </>
            )}
          </button>
          <p className="text-center mt-6 text-white/20 text-[10px] font-medium tracking-widest uppercase">
            Click to copy and use in your AI workflow
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromptModal;
