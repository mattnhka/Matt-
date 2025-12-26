
import React from 'react';
import { X, Copy, ExternalLink, Link2, Check } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  url: string;
  onCopy: (text: string) => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, url, onCopy }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    onCopy(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[150] flex items-end sm:items-center justify-center p-4 sm:p-6 animate-in fade-in duration-500">
      {/* Backdrop with intense blur */}
      <div 
        className="absolute inset-0 bg-black/20 backdrop-blur-xl transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content - iOS Style Bottom Sheet on Mobile, Centered Glass on Desktop */}
      <div 
        className={`relative w-full max-w-md bg-white/90 backdrop-blur-2xl rounded-[40px] shadow-[0_40px_100px_rgba(0,0,0,0.1)] p-10 border border-white/50 transition-all duration-500 animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-10 sm:zoom-in-95`}
      >
        <div className="flex justify-between items-start mb-10">
          <div className="space-y-2">
            <div className="flex items-center gap-3 mb-1">
              <div className="w-10 h-10 rounded-xl bg-[#2350D2]/10 flex items-center justify-center text-[#2350D2]">
                <Link2 size={20} />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[#1d1d1f]">{title}</h3>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.15em] text-[#2350D2]/40">Gemini Shared Asset</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-black/5 rounded-full transition-all text-gray-400 hover:text-[#1d1d1f]"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4 mb-10">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#2350D2]/5 to-[#82AAFF]/5 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative bg-gray-50/50 p-6 rounded-[24px] break-all border border-black/5 text-sm text-[#1d1d1f]/60 font-mono leading-relaxed">
              {url}
            </div>
          </div>
        </div>
        
        <div className="flex flex-col gap-4">
          <button 
            onClick={handleCopy}
            className={`w-full h-16 rounded-[22px] font-bold flex items-center justify-center gap-3 transition-all duration-300 active:scale-[0.98] shadow-xl ${
              copied 
              ? 'bg-[#34C759] text-white shadow-[#34C759]/20' 
              : 'bg-[#2350D2] text-white hover:bg-[#1a3eb3] shadow-[#2350D2]/20'
            }`}
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
            <span>{copied ? '已复制链接' : '复制链接'}</span>
          </button>
          
          <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-16 bg-black/5 hover:bg-black/10 text-[#1d1d1f] rounded-[22px] font-bold flex items-center justify-center gap-3 transition-all active:scale-[0.98]"
          >
            <ExternalLink size={18} />
            <span>前往访问项目</span>
          </a>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-[10px] font-black uppercase tracking-widest text-black/20">Secure Sharing Protected</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
