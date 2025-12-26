
import React, { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div 
      className={`fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 transform ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}
    >
      <div className="glass px-6 py-3 rounded-full shadow-2xl border border-white/50 flex items-center gap-3">
        <CheckCircle2 size={18} className="text-green-500" />
        <span className="text-sm font-semibold text-[#1d1d1f]">{message}</span>
      </div>
    </div>
  );
};

export default Toast;
