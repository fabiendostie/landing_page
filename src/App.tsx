import { useState, useEffect } from 'react';
import { 
  Cloud, Bot, Shield, Mail, 
  FileDown, ChevronDown, Video, Clapperboard, Film, Server, Code, Terminal, Phone, Monitor
} from 'lucide-react';
import { ResumeModal } from './components/ResumeModal';
import { FlipCard } from './components/FlipCard';
import { Background } from './components/Background';
import resumeContent from './content/resume.md?raw';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('tech');
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isSecondState, setIsSecondState] = useState(false);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0 && !isSecondState) {
        setIsSecondState(true);
      } else if (e.deltaY < 0 && isSecondState) {
        setIsSecondState(false);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [isSecondState]);

  const handleStateTransition = () => {
    setIsSecondState(true);
  };

  const handleBackToHero = () => {
    setIsSecondState(false);
  };

  const handleContactClick = () => {
    setActiveSection('contact');
    setTimeout(() => {
      const rootElement = document.getElementById('root');
      if (rootElement) {
        rootElement.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        setTimeout(() => {
          const skillsSection = document.querySelector('.skills-section');
          if (skillsSection) {
            skillsSection.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 500);
      }
    }, 50);
  };

  // Define skills for each card
  const cloudSkills = [
    { title: "CI/CD Pipeline Implementation", description: "Practical experience in setting up and automating build-and-deployment workflows for smoother code integration." },
    { title: "VMware & Proxmox Hypervisors", description: "Managing virtualization across multi-platform environments (Windows, Mac, Linux)." },
    { title: "Windows Server 2022 & Linux Administration", description: "Hands-on experience configuring server roles (DNS, DHCP, SMTP) and Active Directory." },
    { title: "Version Control & Collaboration", description: "Working knowledge of GitHub for code reviews, issue tracking, and collaborative DevOps practices." }
  ];

  const securitySkills = [
    { title: "Threat Assessment & Analysis", description: "Applying Nessus and Nmap for vulnerability detection and mitigation strategies." },
    { title: "Cybersecurity Implementation", description: "Configuring firewalls (CISCO ASA, OPNsense/pfSense), intrusion detection, and secure access." },
    { title: "Network Security", description: "Monitoring, logging, and incident response procedures to protect critical infrastructure." },
    { title: "Compliance & Best Practices", description: "Enforcing security policies, patch management, and encryption standards." }
  ];

  const aiSkills = [
    { title: "Generative AI & LLMs", description: "Advanced proficiency in using large language models, prompt engineering, and agent-based workflows." },
    { title: "Process Automation", description: "Streamlining operations with scripting (Bash, PowerShell, Python), reducing manual overhead." },
    { title: "Workflow Optimization", description: "Integrating AI solutions to accelerate deployment, testing, and continuous improvement." },
    { title: "Innovation & Scalability", description: "Designing scalable architectures that leverage AI-driven insights for business growth." }
  ];

  const resumeMarkdown = resumeContent;

  return (
    <>
      {/* Fixed Background */}
      {/* <Background /> */}

      {/* Main Container - Fixed viewport */}
      <div className="fixed inset-0 overflow-hidden">
        {/* Background */}
        <Background />
        
        {/* Tall Content Container - Slides up and down */}
        <div 
          className={`relative h-[200vh] transform transition-all duration-800 ease-in-out`}
          style={{ transform: isSecondState ? 'translateY(-100vh)' : 'translateY(0)' }}
        >
          {/* Hero Section - Top Half */}
          <div className="h-screen w-full">
            <div className="h-full flex flex-col">
              {/* Hero Content */}
              <div className="flex-grow flex items-center justify-center">
                <div className={`max-w-6xl mx-auto px-4 text-center transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} -mt-36 sm:-mt-48`}>
                  <div className="stage">
                    {[...Array(20)].map((_, index) => (
                      <div key={index} className="layer">
                        <div className="layer-text">
                          <div className="text-container">
                            <span>Fabien Dostie</span>
                            <span>I ❤ IT</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed -mt-16 px-4">
                    Technology Professional & Creative Expert
                  </p>
                  <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mt-8 px-2">
                    <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-cyan-500/10 rounded-full text-cyan-400 border border-cyan-500/20 text-sm sm:text-base">
                      DevOps & Cloud
                    </span>
                    <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-purple-500/10 rounded-full text-purple-400 border border-purple-500/20 text-sm sm:text-base">
                      AI & LLM Expert
                    </span>
                    <span className="px-3 py-1.5 sm:px-4 sm:py-2 bg-blue-500/10 rounded-full text-blue-400 border border-blue-500/20 text-sm sm:text-base">
                      Audiovisual Pro
                    </span>
                  </div>
                </div>
              </div>

              {/* Hero Footer */}
              <div className="relative">
                <div onClick={handleStateTransition} className="absolute bottom-16 left-1/2 -translate-x-1/2 text-cyan-400 cursor-pointer">
                  <ChevronDown className="w-6 h-6 animate-bounce-slow" />
                  <ChevronDown className="w-6 h-6 -mt-3 animate-bounce-slow" />
                  <ChevronDown className="w-6 h-6 -mt-3 animate-bounce-slow" />
                </div>

                <div onClick={handleStateTransition} className="absolute bottom-0 inset-x-0 p-3 text-center bg-gradient-to-r from-cyan-500/10 via-cyan-500/20 to-cyan-500/10 hover:from-cyan-500/20 hover:via-cyan-500/30 hover:to-cyan-500/20 transition-all duration-300 cursor-pointer">
                  <p className="text-cyan-300">✨ Open to new career opportunities – let's connect! ✨</p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Section - Bottom Half */}
          <div className="h-screen w-full">
            {/* Navigation */}
            <div className="w-full bg-slate-950/80 backdrop-blur-sm border-b border-slate-800">
              <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-2 py-2 sm:py-4 sm:space-x-8 sm:gap-0">
                  {['tech', 'media', 'development', 'contact'].map((section) => (
                    <button
                      key={section}
                      onClick={() => section === 'contact' ? handleContactClick() : setActiveSection(section)}
                      className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 text-sm sm:text-base ${
                        activeSection === section 
                          ? 'bg-cyan-500/20 text-cyan-400' 
                          : 'text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      {section === 'contact' && <Mail className="w-4 h-4" />}
                      <span>
                        {section === 'development' 
                          ? 'Dev & Infrastructure' 
                          : section.charAt(0).toUpperCase() + section.slice(1)}
                      </span>
                    </button>
                  ))}
                  <button
                    onClick={() => setIsResumeOpen(true)}
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 text-gray-400 hover:text-gray-200 text-sm sm:text-base"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Resume</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Skills Content */}
            <div className="container mx-auto px-6 h-[calc(100vh-4rem)] sm:flex flex-col overflow-y-auto">
              {/* Cards */}
              <div className="flex-grow flex flex-col sm:flex-row justify-between items-stretch gap-4 sm:gap-6 lg:gap-8 py-8 sm:pt-8">
                {activeSection === 'tech' && (
                  <>
                    {/* Cloud & DevOps Card */}
                    <FlipCard
                      icon={<Cloud />}
                      title="Cloud & DevOps"
                      skills={cloudSkills}
                      className="bg-blue-950/40"
                      isActive={activeCard === 'cloud'}
                      onExpand={() => setActiveCard('cloud')}
                      onCollapse={() => setActiveCard(null)}
                      position={0}
                    />
                    
                    {/* Security Card */}
                    <FlipCard
                      icon={<Shield />}
                      title="Security"
                      skills={securitySkills}
                      className="bg-red-950/40"
                      isActive={activeCard === 'security'}
                      onExpand={() => setActiveCard('security')}
                      onCollapse={() => setActiveCard(null)}
                      position={1}
                    />
                    
                    {/* AI & Automation Card */}
                    <FlipCard
                      icon={<Bot />}
                      title="AI & Automation"
                      skills={aiSkills}
                      className="bg-purple-950/40"
                      isActive={activeCard === 'ai'}
                      onExpand={() => setActiveCard('ai')}
                      onCollapse={() => setActiveCard(null)}
                      position={2}
                    />
                  </>
                )}

                {activeSection === 'media' && (
                  <>
                    {/* Video Production Card */}
                    <FlipCard
                      icon={<Video />}
                      title="Video Production"
                      skills={[
                        { title: "Post-production Expert", description: "Skilled in advanced editing workflows, finalizing projects with polished storytelling and cohesive visuals." },
                        { title: "Special Effects", description: "Integrating compositing and visual enhancements for captivating, high-impact content." },
                        { title: "Color Grading", description: "Balancing and refining color palettes using professional tools for a cinematic or branded look." },
                        { title: "Motion Graphics", description: "Creating engaging titles, transitions, and animations to elevate viewer experience." }
                      ]}
                      className="bg-blue-950/40"
                      isActive={activeCard === 'video'}
                      onExpand={() => setActiveCard('video')}
                      onCollapse={() => setActiveCard(null)}
                      position={0}
                    />
                    
                    {/* On-Set Production Card */}
                    <FlipCard
                      icon={<Clapperboard />}
                      title="On-Set Production"
                      skills={[
                        { title: "Digital Imaging", description: "Managing camera settings, verifying image quality, and ensuring consistent capture of footage." },
                        { title: "Data Wrangling", description: "Organizing, transferring, and securely backing up large media files on set." },
                        { title: "Video Assist", description: "Providing immediate video feedback and monitoring to directors, producers, and crew." },
                        { title: "Wireless Camera Networking", description: "Configuring on-set wireless feeds for simultaneous transmission and real-time collaboration." }
                      ]}
                      className="bg-purple-950/40"
                      isActive={activeCard === 'direction'}
                      onExpand={() => setActiveCard('direction')}
                      onCollapse={() => setActiveCard(null)}
                      position={1}
                    />
                    
                    {/* Projections Visuals & VJ Card */}
                    <FlipCard
                      icon={<Film />}
                      title="Projections Visuals & VJ"
                      skills={[
                        { title: "VJ Live Performance", description: "Delivering immersive visual shows synchronized with music, events, or other live elements." },
                        { title: "Video Mapping", description: "Projecting tailored visuals onto unique surfaces for eye-catching, multimedia experiences." },
                        { title: "Structural Video Projection", description: "Transforming buildings or 3D objects with creative overlays and storytelling." },
                        { title: "Generative Visuals", description: "Employing algorithmic approaches to create dynamic, evolving content for interactive performances." }
                      ]}
                      className="bg-red-950/40"
                      isActive={activeCard === 'content'}
                      onExpand={() => setActiveCard('content')}
                      onCollapse={() => setActiveCard(null)}
                      position={2}
                    />
                  </>
                )}

                {activeSection === 'development' && (
                  <>
                    {/* Infrastructure Card */}
                    <FlipCard
                      icon={<Server />}
                      title="Infrastructure"
                      skills={[
                        { title: "Multi-Platform Administration", description: "Hands-on experience managing Windows Server 2022, Mac, and Linux (RHEL, Debian) environments, including Active Directory Domain Services." },
                        { title: "Virtualization & Hypervisors", description: "Utilizing VMware and Proxmox for scalable, cost-effective server solutions and resource allocation." },
                        { title: "Networking & Security", description: "Configuring routers, switches, and firewalls (CISCO ASA, OPNsense/pfSense) to ensure secure, reliable connectivity." },
                        { title: "Cloud & Server Deployment", description: "Setting up and maintaining web/intranet services (DNS, DHCP, SMTP), monitoring performance, and applying updates." }
                      ]}
                      className="bg-blue-950/40"
                      isActive={activeCard === 'infrastructure'}
                      onExpand={() => setActiveCard('infrastructure')}
                      onCollapse={() => setActiveCard(null)}
                      position={0}
                    />
                    
                    {/* Development Card */}
                    <FlipCard
                      icon={<Code />}
                      title="Development"
                      skills={[
                        { title: "Full Stack Development", description: "Building dynamic web apps with React, Vite, JS/TS, and integrating Python or C++ components." },
                        { title: "Automation & CI/CD", description: "Streamlining build-and-deployment pipelines with scripting (Bash, PowerShell) and basic Ansible knowledge." },
                        { title: "Systems Integration", description: "Connecting APIs, databases, and third-party services for cohesive, end-to-end solutions." },
                        { title: "Database & Version Control", description: "Familiarity with mySQL, mariaDB, mongoDB, and GitHub for collaborative development, issue tracking, and code reviews." }
                      ]}
                      className="bg-purple-950/40"
                      isActive={activeCard === 'development'}
                      onExpand={() => setActiveCard('development')}
                      onCollapse={() => setActiveCard(null)}
                      position={1}
                    />
                    
                    {/* Project Management Card */}
                    <FlipCard
                      icon={<Terminal />}
                      title="Project Management"
                      skills={[
                        { title: "Technical Coordination", description: "Overseeing project scope, aligning cross-functional teams, and providing clear direction for technical tasks." },
                        { title: "Process Optimization", description: "Identifying inefficiencies and implementing best practices to improve project workflows." },
                        { title: "Documentation & Communication", description: "Producing clear, maintainable references for both technical and non-technical stakeholders." },
                        { title: "Resource Management", description: "Allocating budgets, timelines, and personnel effectively to meet project objectives on time and within scope." }
                      ]}
                      className="bg-red-950/40"
                      isActive={activeCard === 'project'}
                      onExpand={() => setActiveCard('project')}
                      onCollapse={() => setActiveCard(null)}
                      position={2}
                    />
                  </>
                )}

                {activeSection === 'contact' && (
                  <div className="w-full h-full flex justify-center items-center">
                    <div className="bg-slate-900/50 backdrop-blur-sm p-6 rounded-xl border border-slate-800/50 w-fit mx-auto landscape:mt-0 landscape:mb-12">
                      <h2 className="text-2xl font-semibold text-cyan-400 mb-4 landscape:text-xl">Let's Connect!</h2>
                      <div className="space-y-4">
                        <div className="text-gray-300 space-y-1 landscape:text-sm">
                          <p>I'm always interested in new opportunities.</p>
                          <p>Feel free to reach out!</p>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-300 whitespace-nowrap landscape:text-sm">
                          <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 landscape:w-4 landscape:h-4" />
                          <a href="mailto:info@fabiendostie.com" className="hover:text-cyan-400 transition-colors">
                            info@fabiendostie.com
                          </a>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-300 whitespace-nowrap landscape:text-sm">
                          <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 landscape:w-4 landscape:h-4" />
                          <a href="tel:+14383573462" className="hover:text-cyan-400 transition-colors">
                            +1 (438) 357-3462
                          </a>
                        </div>
                        <div className="flex items-center space-x-4 text-gray-300 whitespace-nowrap landscape:text-sm">
                          <Monitor className="w-5 h-5 text-cyan-400 flex-shrink-0 landscape:w-4 landscape:h-4" />
                          <a href="https://www.linkedin.com/in/fabiendostieIT" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">
                            LinkedIn Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Footer Section */}
              <div className="mt-auto">
                {/* Up Chevrons */}
                <div onClick={handleBackToHero} className="flex justify-center mb-6 cursor-pointer">
                  <div className="text-cyan-400 rotate-180">
                    <ChevronDown className="w-6 h-6 animate-bounce-slow" />
                    <ChevronDown className="w-6 h-6 -mt-3 animate-bounce-slow" />
                    <ChevronDown className="w-6 h-6 -mt-3 animate-bounce-slow" />
                  </div>
                </div>

                {/* Footer */}
                <footer className="absolute bottom-0 inset-x-0 bg-slate-950/60 backdrop-blur-sm border-t border-slate-800/50 py-2">
                  <div className="container mx-auto px-6">
                    <div className="text-center">
                      <h2 className="text-base font-medium text-rose-500/80 mb-1">❤ Social Engagement</h2>
                      <p className="text-gray-400/80 text-sm">
                        <a href="https://santropolroulant.org/en/what-is-the-roulant/meals-on-wheels/" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Meals on Wheels</a>
                        {" • "}
                        <a href="https://www.lespiratesverts.org/?lang=en" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">Les Pirates Verts</a>
                        {" • "}
                        <span>The Love Fight-Club</span>
                      </p>
                    </div>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} content={resumeMarkdown} />
    </>
  );
}