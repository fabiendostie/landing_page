import React, { useState, useEffect } from 'react';

interface Skill {
  title: string;
  description: string;
}

interface FlipCardProps {
  icon: React.ReactNode;
  title: string;
  skills: Skill[];
  className?: string;
  isActive: boolean;
  onExpand: () => void;
  onCollapse: () => void;
  position: number;
}

export function FlipCard({ 
  icon, 
  title, 
  skills, 
  className = "",
  isActive,
  onExpand,
  onCollapse,
}: FlipCardProps) {
  const [viewMode, setViewMode] = useState<'mobile' | 'desktop'>(window.innerWidth >= 768 ? 'desktop' : 'mobile');

  useEffect(() => {
    const handleResize = () => {
      setViewMode(window.innerWidth >= 768 ? 'desktop' : 'mobile');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Mobile/Landscape View
  if (viewMode === 'mobile') {
    return (
      <div className={`w-full transition-all duration-500 ease-spring
        ${isActive ? 
          'landscape:fixed landscape:inset-x-4 landscape:top-[115vh] landscape:h-[70vh] landscape:z-50' : 
          'landscape:w-[160px] landscape:mt-0 landscape:mb-12 portrait:h-[280px]'}`}
      >
        <div 
          className={`rounded-xl backdrop-blur-sm border border-slate-700/50 h-full
            ${className} flex flex-col
            ${isActive ? 
              'landscape:bg-slate-900/95 landscape:overflow-y-auto landscape:p-3' : 
              'landscape:aspect-square landscape:p-4 portrait:p-6 flex flex-col items-start justify-start landscape:items-center landscape:justify-center landscape:hover:bg-slate-800/20 landscape:hover:border-cyan-500/30 landscape:hover:shadow-lg landscape:hover:shadow-cyan-500/20'}`}
          onClick={() => isActive ? onCollapse() : onExpand()}
        >
          {/* Header */}
          <div className={`flex items-center gap-2 ${!isActive ? 'landscape:flex-col landscape:items-center landscape:text-center' : 'mb-2'}`}>
            {React.cloneElement(icon as React.ReactElement, { 
              className: `w-8 h-8 text-cyan-400 ${!isActive ? 'landscape:mb-3' : ''}` 
            })}
            <h3 className="text-lg font-bold text-white landscape:text-base">{title}</h3>
          </div>

          {/* Preview Text - Only for portrait */}
          {!isActive && (
            <div className="portrait:block landscape:hidden mt-4 flex-1">
              <ul className="space-y-3">
                {skills.map((skill, index) => (
                  <li key={index} className="text-gray-300 text-sm">
                    {skill.title}
                  </li>
                ))}
              </ul>
              <p className="text-cyan-400 text-sm mt-4 italic">*click for details</p>
            </div>
          )}

          {/* Expanded Content */}
          {isActive && (
            <>
              <div className="text-xs text-gray-400 hover:text-cyan-400 transition-colors duration-300 mb-2">
                Click anywhere to close
              </div>
              <div className="overflow-y-auto flex-1 pr-2">
                <ul className="space-y-2">
                  {skills.map((skill, index) => (
                    <li key={index} className="text-gray-300">
                      <h4 className="font-semibold text-cyan-400 mb-0.5 landscape:text-xs">{skill.title}</h4>
                      <p className="text-xs leading-relaxed landscape:text-xs">{skill.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  // Desktop View
  return (
    <div className="w-full sm:flex-1">
      <div 
        onClick={() => isActive ? onCollapse() : onExpand()}
        className={`p-6 rounded-xl backdrop-blur-sm border border-transparent
          transition-all duration-500 ease-spring cursor-pointer
          hover:scale-[1.02] hover:shadow-lg hover:border-cyan-500/30 hover:shadow-cyan-500/20
          ${className} ${isActive ? 'h-auto' : 'h-[250px]'}`}
      >
        <div className="flex flex-col h-full">
          <div className="card-icon mb-4 text-cyan-400">
            {React.cloneElement(icon as React.ReactElement, { className: 'w-8 h-8' })}
          </div>
          <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
          
          {/* Preview Content */}
          {!isActive && (
            <div className="flex flex-col justify-between h-full">
              <ul className="space-y-2">
                {skills.slice(0, 3).map((skill, index) => (
                  <li key={index} className="text-gray-300 text-sm">
                    {skill.title}
                  </li>
                ))}
              </ul>
              <p className="text-cyan-400 text-sm mt-4 italic">*click for details</p>
            </div>
          )}

          {/* Expanded Content */}
          {isActive && (
            <div className="animate-text-expand">
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                  Click to close
                </span>
              </div>
              <ul className="space-y-6">
                {skills.map((skill, index) => (
                  <li key={index} className="text-gray-300">
                    <h4 className="font-semibold text-cyan-400 mb-2">{skill.title}</h4>
                    <p className="text-sm leading-relaxed">{skill.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}