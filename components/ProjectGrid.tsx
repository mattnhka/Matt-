
import React from 'react';
import ProjectCard from './ProjectCard.tsx';
import { projects } from '../data/projects.ts';
import { Project } from '../types.ts';

interface ProjectGridProps {
  onCopy: (text: string, label: string) => void;
  onShare: (project: Project) => void;
  onShowPrompt: (project: Project) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ onCopy, onShare, onShowPrompt }) => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 pt-8 pb-24 md:pt-12 md:pb-32">
      {/* 使用 sm:grid-cols-2 让双列布局在更小的屏幕（>640px）上就能生效 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 lg:gap-12">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            onCopy={onCopy} 
            onShare={onShare} 
            onShowPrompt={onShowPrompt}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectGrid;
