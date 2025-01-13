import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <>
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden -mt-16">
        {/* First 3D Text - Fabien Dostie */}
        <div className="stage mb-4">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={`layer1-${i}`} className="layer">
              <div className="layer-text">
                <span>Fabien Dostie</span>
              </div>
            </div>
          ))}
        </div>

        {/* Second 3D Text - I ❤ IT */}
        <div className="stage mb-8">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={`layer2-${i}`} className="layer">
              <div className="layer-text">
                <span>I ❤ IT</span>
              </div>
            </div>
          ))}
        </div>

        {/* Professional Titles and Scroll Arrow */}
        <div className="text-center -mt-4">
          <h2 className="text-2xl text-gray-300 mb-4">Technology Professional, Creative Expert & AI enthusiast</h2>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-cyan-500/10 rounded-full text-cyan-400 border border-cyan-500/20">
              DevOps & Cloud
            </span>
            <span className="px-4 py-2 bg-purple-500/10 rounded-full text-purple-400 border border-purple-500/20">
              AI & LLM Expert
            </span>
            <span className="px-4 py-2 bg-pink-500/10 rounded-full text-pink-400 border border-pink-500/20">
              Audiovisual Pro
            </span>
          </div>
          
          {/* Scroll Indicator */}
          <div className="mt-16">
            <ChevronDown className="w-16 h-16 text-white animate-bounce" strokeWidth={4} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero; 