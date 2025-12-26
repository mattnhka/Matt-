
import React, { useState } from 'react';
import Hero from './components/Hero.tsx';
import ProjectGrid from './components/ProjectGrid.tsx';
import Toast from './components/Toast.tsx';
import Modal from './components/Modal.tsx';
import PromptModal from './components/PromptModal.tsx';
import { Project } from './types.ts';

const App: React.FC = () => {
  const [toast, setToast] = useState<{ visible: boolean; message: string }>({
    visible: false,
    message: '',
  });
  
  const [modal, setModal] = useState<{ open: boolean; project: Project | null }>({
    open: false,
    project: null,
  });

  const [promptModal, setPromptModal] = useState<{ open: boolean; project: Project | null }>({
    open: false,
    project: null,
  });

  const handleCopy = async (text: string, label: string = '已复制') => {
    try {
      await navigator.clipboard.writeText(text);
      setToast({ visible: true, message: label });
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleShare = (project: Project) => {
    setModal({ open: true, project });
  };

  const handleShowPrompt = (project: Project) => {
    setPromptModal({ open: true, project });
  };

  return (
    <div className="min-h-screen selection:bg-[#2350D2]/10">
      <Hero />
      
      <main className="bg-[#f5f5f7]">
        <ProjectGrid 
          onCopy={handleCopy} 
          onShare={handleShare} 
          onShowPrompt={handleShowPrompt} 
        />
      </main>

      <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-100 bg-white">
        <p className="font-bold tracking-tight text-[#1d1d1f]/30">© {new Date().getFullYear()} Matt. Built with AI and Love.</p>
        <p className="mt-1 opacity-50 font-medium">Stay Creative, Stay Hungry.</p>
      </footer>

      <Toast 
        message={toast.message} 
        isVisible={toast.visible} 
        onClose={() => setToast({ ...toast, visible: false })} 
      />

      <Modal 
        isOpen={modal.open}
        onClose={() => setModal({ ...modal, open: false })}
        title={modal.project?.name || '项目分享'}
        url={modal.project?.geminiShareUrl || ''}
        onCopy={(url) => handleCopy(url, "链接已复制")}
      />

      <PromptModal
        isOpen={promptModal.open}
        onClose={() => setPromptModal({ ...promptModal, open: false })}
        name={promptModal.project?.name || ''}
        prompt={promptModal.project?.promptText || ''}
        onCopy={(text) => handleCopy(text, "Prompt 已复制")}
      />
    </div>
  );
};

export default App;
