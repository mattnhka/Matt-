
import React from 'react';
import { Terminal, Github, Link2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onCopy: (text: string, label: string) => void;
  onShare: (project: Project) => void;
  onShowPrompt: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onCopy, onShare, onShowPrompt }) => {
  return (
    <div className="group bg-white rounded-[32px] md:rounded-[40px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_32px_64px_rgba(35,80,210,0.08)] transition-all duration-700 border border-gray-100/60 flex flex-col h-full">
      {/* 封面图：固定比例 4:3 */}
      <div className="aspect-[4/3] overflow-hidden relative bg-gray-100">
        <img 
          src={project.coverImage} 
          alt={project.name}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-[#2350D2] transition-colors tracking-tighter leading-tight">
          {project.name}
        </h3>
        <p className="text-gray-500 text-sm md:text-[15px] leading-relaxed mb-8 flex-grow font-medium">
          {project.tagline}
        </p>
        
        {/* 按钮组 */}
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2 md:gap-3">
            <button 
              onClick={() => onShowPrompt(project)}
              className="h-12 md:h-14 flex items-center justify-center gap-1.5 px-2 bg-[#FFE1DC]/50 hover:bg-[#FFE1DC]/80 text-[#FF6E50] rounded-xl md:rounded-2xl text-[11px] md:text-[12px] font-bold transition-all border border-[#FF6E50]/10 active:scale-[0.97] whitespace-nowrap"
            >
              <Terminal size={14} />
              复制 Prompt
            </button>
            
            <button 
              onClick={() => onCopy(project.githubUrl, "Github 链接已复制")}
              className="h-12 md:h-14 flex items-center justify-center gap-1.5 px-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl md:rounded-2xl text-[11px] md:text-[12px] font-bold transition-all border border-gray-100 active:scale-[0.97] whitespace-nowrap"
            >
              <Github size={14} />
              Github
            </button>
          </div>
          
          <button 
            onClick={() => onShare(project)}
            className="w-full h-12 md:h-14 flex items-center justify-center gap-2 px-4 bg-[#2350D2] hover:bg-[#1a3eb3] text-white rounded-xl md:rounded-2xl text-[12px] md:text-[13px] font-bold transition-all shadow-lg shadow-[#2350D2]/20 active:scale-[0.98] whitespace-nowrap"
          >
            <Link2 size={16} />
            获取 Gemini 项目链接
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
