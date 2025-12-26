
import React, { useEffect, useState } from 'react';
import { ExternalLink, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[50vh] min-h-[400px] flex flex-col items-center justify-center p-6 mesh-bg overflow-hidden border-b border-gray-100/50">
      {/* 极简背景氛围 */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#82AAFF]/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-[#FF6E50]/5 rounded-full blur-[100px]"></div>
      </div>

      {/* 精简后的文字区域 */}
      <div 
        className={`relative z-10 max-w-4xl w-full text-[#1d1d1f] transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="space-y-6">
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] flex items-center gap-3">
              Hi there，我是 Matt <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-black/70 leading-relaxed max-w-2xl">
              很开心能和你分享我用 AI 做的小工具，希望可以帮助到你。
            </p>
          </div>

          {/* 社交链接 - 更新链接 */}
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <a 
              href="https://xhslink.com/m/1TqvhmWhPFD" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 group text-sm font-semibold hover:text-[#FF6E50] transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center group-hover:bg-[#FF6E50] group-hover:text-white transition-all">
                <ExternalLink size={14} />
              </div>
              小红书
            </a>
          </div>
        </div>
      </div>

      {/* 向下滚动提示 */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce-slow">
        <span className="text-[9px] font-black uppercase tracking-[0.2em] text-black/20">Explore Projects</span>
        <ChevronDown size={16} className="text-black/20" />
      </div>

      <style>{`
        @keyframes wave {
          0% { transform: rotate( 0.0deg) }
          10% { transform: rotate(14.0deg) }
          20% { transform: rotate(-8.0deg) }
          30% { transform: rotate(14.0deg) }
          40% { transform: rotate(-4.0deg) }
          50% { transform: rotate(10.0deg) }
          60% { transform: rotate( 0.0deg) }
          100% { transform: rotate( 0.0deg) }
        }
        .animate-wave {
          animation: wave 2.5s infinite ease-in-out;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translate(-50%, 0); }
          50% { transform: translate(-50%, 6px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
