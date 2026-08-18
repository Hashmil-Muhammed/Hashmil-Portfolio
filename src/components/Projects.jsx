import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { FiGithub, FiExternalLink, FiLayers, FiBox, FiStar, FiRadio, FiCheckCircle, FiCpu, FiCode, FiTerminal, FiBarChart2 } from 'react-icons/fi';
import { projectsData } from '../data/mockData';
import { SiGithub } from 'react-icons/si';

/* ─── Accent colour map ─── */
const statusStyles = {
  Flagship: 'text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-500/30 bg-indigo-50/80 dark:bg-indigo-500/10',
  Live: 'text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-500/30 bg-emerald-50/80 dark:bg-emerald-500/10',
  Completed: 'text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-500/30 bg-amber-50/80 dark:bg-amber-500/10',
};

const ProjectCard = ({ project }) => {
  const customFont = {
    fontFamily: '"Space Grotesk", sans-serif',
    fontWeight: 600,
    letterSpacing: '0.02em'
  };

  return (
    <div
      className="relative flex-shrink-0 w-[75vw] max-w-[740px] xl:max-w-[850px] aspect-[4/5] sm:aspect-square md:aspect-video flex flex-col rounded-[32px] overflow-hidden bg-black group/card shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] border border-gray-200/50 dark:border-white/10 transition-transform duration-200 ease-out hover:-translate-y-2 cursor-pointer transform-gpu"
      style={{ willChange: 'transform' }}
    >

      {/* Immersive Background Media */}
      <a
        href={project.liveLink || undefined}
        target={project.liveLink ? "_blank" : undefined}
        rel={project.liveLink ? "noopener noreferrer" : undefined}
        className={`absolute inset-0 w-full h-full block z-0 overflow-hidden ${!project.liveLink ? 'cursor-default' : ''}`}
        onClick={(e) => { if (!project.liveLink) e.preventDefault(); }}
      >
        {project.previewVideo ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onContextMenu={(e) => e.preventDefault()}
            onEnded={(e) => {
              e.target.currentTime = 0;
              e.target.play().catch(() => {});
            }}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover/card:scale-105 transform-gpu"
            style={{ willChange: 'transform' }}
            src={project.previewVideo}
          />
        ) : project.previewImage ? (
          <img
            src={project.previewImage}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/card:scale-105 transform-gpu"
            style={{ willChange: 'transform' }}
          />
        ) : (
          <div className="absolute inset-0 w-full h-full bg-gray-900" />
        )}

        {/* Deep Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/75 pointer-events-none z-10" />

        {/* TOP HOVER OVERLAY - GPU Accelerated Smooth Fade (Pure Text, No Box) */}
        {project.liveLink && (
          <div
            className="absolute inset-0 z-30 bg-black/50 backdrop-blur-md opacity-0 group-hover/card:opacity-100 transition-opacity duration-200 ease-out flex items-start justify-center pt-28 transform-gpu"
            style={{ willChange: 'opacity' }}
          >
            <div
              className="flex items-center gap-2 text-white/90 font-bold tracking-widest uppercase transform scale-95 group-hover/card:scale-100 transition-transform duration-200 ease-out text-xs md:text-sm drop-shadow-md pointer-events-none transform-gpu"
              style={{ ...customFont, willChange: 'transform' }}
            >
              <span>View Live Project</span>
              <FiExternalLink size={16} />
            </div>
          </div>
        )}
      </a>

      {/* Top-Right Big Number Accent */}
      <span
        className="absolute top-2 right-6 text-[80px] md:text-[90px] leading-none select-none pointer-events-none opacity-25 z-10 text-white font-black drop-shadow-lg"
        style={{ fontFamily: '"Syne", sans-serif' }}
      >
        {String(project.id).padStart(2, '0')}
      </span>

      {/* Top Floating Badges (Ultra-Premium Glassmorphic Redesign) */}
      <div className="absolute top-6 left-6 flex flex-wrap items-center gap-2 z-20 pointer-events-none">
        {project.projectType && (() => {
          const typeIcon = {
            'Full-Stack AI / Multimodal AI': <FiCpu size={12} className="text-gray-300 group-hover/badge:text-white transition-colors duration-300" />,
            'Full-Stack': <FiCode size={12} className="text-gray-300 group-hover/badge:text-white transition-colors duration-300" />,
            'Agentic AI': <FiTerminal size={12} className="text-gray-300 group-hover/badge:text-white transition-colors duration-300" />,
            'Data Science & Analytics': <FiBarChart2 size={12} className="text-gray-300 group-hover/badge:text-white transition-colors duration-300" />
          }[project.projectType] || <FiBox size={12} className="text-gray-300 group-hover/badge:text-white transition-colors duration-300" />;

          return (
            <div className="group/badge pointer-events-auto flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.01] backdrop-blur-sm border border-white/[0.03] transition-all duration-300 hover:border-white/[0.08] hover:bg-white/[0.03] hover:scale-[1.02] cursor-default">
              {typeIcon}
              <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase text-gray-200 group-hover/badge:text-white transition-colors duration-300 drop-shadow-md" style={customFont}>
                {project.projectType}
              </span>
            </div>
          );
        })()}

        {project.status && (() => {
          const statusIcon = {
            'Flagship': <FiStar size={12} className="text-gray-300 group-hover/badge:text-white transition-colors duration-300" />,
            'Live': <FiRadio size={12} className="text-gray-300 group-hover/badge:text-white transition-colors duration-300" />,
            'Completed': <FiCheckCircle size={12} className="text-gray-300 group-hover/badge:text-white transition-colors duration-300" />
          }[project.status] || null;

          return (
            <div className="group/badge pointer-events-auto flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/[0.01] backdrop-blur-sm border border-white/[0.03] transition-all duration-300 hover:border-white/[0.08] hover:bg-white/[0.03] hover:scale-[1.02] cursor-default">
              {statusIcon}
              <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase text-gray-200 group-hover/badge:text-white transition-colors duration-300 drop-shadow-md" style={customFont}>
                {project.status}
              </span>
            </div>
          );
        })()}

        {project.year && (
          <div className="group/badge pointer-events-auto flex items-center px-3.5 py-1.5 rounded-full bg-white/[0.01] backdrop-blur-sm border border-white/[0.03] transition-all duration-300 hover:border-white/[0.08] hover:bg-white/[0.03] hover:scale-[1.02] cursor-default">
            <span className="text-[9px] md:text-[10px] font-black tracking-[0.2em] uppercase text-gray-300 group-hover/badge:text-white transition-colors duration-300 drop-shadow-md" style={customFont}>
              {project.year}
            </span>
          </div>
        )}
      </div>

      {/* Bottom Glassmorphic Content Panel */}
      <div className="absolute bottom-0 w-full p-6 md:p-8 z-20 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/70 to-transparent pt-28 pointer-events-none">

        <div className="flex flex-col gap-1.5 mb-4">
          <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest drop-shadow-md text-gray-300 opacity-90" style={customFont}>
            {project.subtitle}
          </p>
          <h3
            className="text-3xl md:text-4xl font-extrabold leading-tight drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400"
            style={{ fontFamily: '"Syne", sans-serif' }}
          >
            {project.title}
          </h3>

          {/* Static Always Visible Description */}
          <p className="text-gray-300 text-[12px] md:text-[13px] leading-relaxed line-clamp-3 md:line-clamp-3 mt-1 font-light opacity-90" style={customFont}>
            {project.description}
          </p>
        </div>

        {/* Action Buttons & Tags */}
        <div className="flex flex-col gap-4 pointer-events-auto">
          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {[...(project.tags || []), 'etc..'].map((tag, idx) => (
              <span
                key={idx}
                className={`text-[10px] font-medium px-3 py-1 rounded-full border transition-colors duration-200 ${tag === 'etc..'
                  ? 'bg-transparent border-dashed border-white/30 text-white/50'
                  : 'bg-black/60 border-white/15 text-white/90 shadow-sm hover:bg-white/20'
                  }`}
                style={customFont}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Bottom Action Row (Link on Left, GitHub on Right) */}
          <div className="flex justify-between items-center pt-3 border-t border-white/15 mt-1">
            <a
              href={project.liveLink || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link flex items-center gap-1.5 text-white/80 hover:text-white transition-colors duration-200"
            >
              <span className="text-[11px] font-bold tracking-widest uppercase relative overflow-hidden" style={customFont}>
                View Live Project
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform -translate-x-full group-hover/link:translate-x-0 transition-transform duration-300 ease-out"></span>
              </span>
              <FiExternalLink className="shrink-0 transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform duration-200" size={13} />
            </a>

            {project.gitLink && (
              <a
                href={project.gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white hover:text-black border border-white/20 transition-all duration-200 hover:scale-105 shadow-sm transform-gpu"
                title="View Source Code"
              >
                <FiGithub size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─── Main Component ───────────────────────────────────────────────── */
const Projects = () => {
  const containerRef = useRef(null);
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Full-Stack' && (project.projectType?.includes('Full-Stack') || ['MindCare AI', 'HOSTELLO', 'DocPlus'].includes(project.title))) return true;
    if (activeFilter === 'AI & ML' && (project.projectType?.includes('AI') || project.projectType?.includes('ML') || project.projectType?.includes('Multimodal'))) return true;
    if (activeFilter === 'Data Science & Analytics' && (project.projectType?.includes('Data') || project.projectType?.includes('Analytics'))) return true;
    if (activeFilter === 'Agentic AI' && (project.projectType?.includes('Agentic') || project.title === 'WildGuard AI')) return true;
    return false;
  });

  const panelCount = 1 + filteredProjects.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // OPTIMIZED: Much tighter spring to eliminate scrolling "lag" / delay
  const springScroll = useSpring(scrollYProgress, { stiffness: 400, damping: 40, mass: 0.1 });

  const scrollStripRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);

  useEffect(() => {
    const updateScrollRange = () => {
      if (scrollStripRef.current) {
        const maxScroll = scrollStripRef.current.scrollWidth - window.innerWidth;
        setScrollRange(maxScroll > 0 ? maxScroll : 0);
      }
    };

    updateScrollRange();
    window.addEventListener("resize", updateScrollRange);
    return () => window.removeEventListener("resize", updateScrollRange);
  }, [filteredProjects, activeFilter]);

  const xTranslate = useTransform(
    springScroll,
    [0, 1],
    [0, -scrollRange]
  );

  return (
    <section id="projects">
      {/* Mobile Fallback */}
      <div className="block md:hidden py-20 px-6 bg-gray-50 dark:bg-[#080a0e]">
        <div className="max-w-2xl mx-auto">
          <div className="mb-10 md:mb-12">
            <div className="flex items-center gap-4 mb-1">
              <span className="text-sm font-normal tracking-[0.2em] text-transparent dark:text-gray-500 bg-clip-text bg-[url('/backgrounds/samedha.jpg')] dark:bg-[none] bg-cover bg-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] dark:drop-shadow-none uppercase">03.</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-transparent dark:text-gray-500 bg-clip-text bg-[url('/backgrounds/samedha.jpg')] dark:bg-[none] bg-cover bg-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] dark:drop-shadow-none tracking-tight" style={{ fontFamily: '"Syne", sans-serif' }}>
                What I've Built
              </h2>
              <div className="flex-1 h-px bg-gray-200 dark:bg-white/20 ml-4 hidden sm:block opacity-30"></div>
              <a
                href="https://github.com/Hashmil-Muhammed"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-2 transition-all text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white group pointer-events-auto opacity-40 hover:opacity-100"
                style={{ fontFamily: '"Space Grotesk",sans-serif' }}
              >
                <SiGithub className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span>View All Projects</span>
              </a>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-2xl sm:pl-12 md:pl-14" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 300, fontStyle: 'italic', letterSpacing: '0.02em' }}>
              &ldquo;A curated selection of AI-driven applications, <br className="hidden md:block" /> and scalable full-stack solutions.&ldquo;
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0d0f14]"
                style={{ boxShadow: `0 0 0 1px ${project.accentColor}22` }}
              >
                <div
                  className="p-6"
                  style={{
                    background: `radial-gradient(ellipse at 20% 50%, ${project.accentColor}18 0%, transparent 70%)`,
                  }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-xs text-gray-400 dark:text-white/30 tracking-widest">{project.year}</span>
                    <span className={`text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full border ${statusStyles[project.status] ?? ''}`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-1" style={{ color: project.accentColor }}>
                    {project.subtitle}
                  </p>
                  <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mb-3" style={{ fontFamily: '"Syne", sans-serif' }}>
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop: Sticky Horizontal Scroll */}
      <div
        ref={containerRef}
        className="hidden md:block relative"
        style={{ height: `calc(${panelCount} * min(85vh, 900px))` }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-gray-50 dark:bg-[#080a0e]">

          {/* Background Ambient Blobs */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
            <motion.img
              src="/projects/sellzillasocial2.png"
              alt="Abstract Shape"
              className="absolute -top-24 -left-24 w-[300px] md:w-[550px] transform-gpu"
              initial={{ opacity: 0, scale: 0.6, x: -80, y: -80 }}
              animate={{ opacity: 0.6, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 1.2, ease: "circOut" }}
              style={{ willChange: 'transform, opacity' }}
            />

            <motion.img
              src="/projects/sellzillasocial3.png"
              alt="Abstract Shape"
              className="absolute bottom-[10%] -right-24 w-[350px] md:w-[700px] transform-gpu"
              initial={{ opacity: 0, scale: 0.6, x: 80, y: 80 }}
              animate={{ opacity: 0.6, scale: 1, x: 0, y: 0 }}
              transition={{ duration: 1.5, ease: "circOut", delay: 0.1 }}
              style={{ willChange: 'transform, opacity' }}
            />
          </div>

          <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-10"
            style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundSize: '200px 200px' }}
          />

          <motion.div
            className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-20 origin-left"
            style={{ scaleX: springScroll, transformOrigin: 'left' }}
          />

          {/* Section Header */}
          {/* Zoom-Proof Header Container: Anchored to the vertical center (top-1/2) just like the Macbook composition, so their relative distance never changes when zooming! */}
          <div className="absolute top-1/2 -translate-y-[16rem] md:-translate-y-[21.5rem] left-[8vw] z-20 w-max pointer-events-none flex flex-col portrait-zoom">
            <div className="flex items-center gap-4 mb-1 whitespace-nowrap">
              <span className="text-sm font-normal tracking-[0.2em] text-transparent dark:text-gray-500 bg-clip-text bg-[url('/backgrounds/samedha.jpg')] dark:bg-[none] bg-cover bg-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] dark:drop-shadow-none uppercase shrink-0">03.</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-transparent dark:text-gray-500 bg-clip-text bg-[url('/backgrounds/samedha.jpg')] dark:bg-[none] bg-cover bg-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] dark:drop-shadow-none tracking-tight shrink-0" style={{ fontFamily: '"Syne", sans-serif' }}>
                What I've Built
              </h2>
              <div className="w-[10rem] md:w-[35rem] lg:w-[45rem] xl:w-[55rem] h-px bg-gray-200 dark:bg-white/20 ml-4 hidden sm:block opacity-30 shrink-0"></div>
              <a
                href="https://github.com/Hashmil-Muhammed"
                target="_blank"
                rel="noreferrer"
                className="hidden sm:flex items-center gap-2 transition-all text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white group pointer-events-auto opacity-40 hover:opacity-100 shrink-0"
                style={{ fontFamily: '"Space Grotesk",sans-serif' }}
              >
                <SiGithub className="w-4 h-4 group-hover:scale-110 transition-transform shrink-0" />
                <span>View All Projects</span>
              </a>
            </div>
          </div>
          <br />
          <br />
          {/* Animated Chevron Scroll Indicator */}
          <div className="absolute bottom-8 right-8 md:bottom-10 md:right-10 z-20 flex items-center opacity-70 hover:opacity-100 transition-opacity">
            <span 
              className="text-[9px] md:text-[10px] font-bold tracking-widest text-gray-300 dark:text-gray-600 uppercase mr-3"
              style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
              Scroll
            </span>
            <div className="flex items-center -space-x-1">
              {[0, 1, 2].map((i) => (
                <motion.svg 
                  key={i}
                  width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className="text-gray-400 dark:text-gray-500"
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ repeat: Infinity, duration: 1.5, delay: i * 0.2, ease: "easeInOut" }}
                >
                  <path d="M9 18l6-6-6-6" />
                </motion.svg>
              ))}
            </div>
          </div>

          {/* Horizontally scrolling strip */}
          <motion.div
            ref={scrollStripRef}
            className="flex items-center h-full gap-16 pl-[8vw] pr-[30vw] relative z-10 transform-gpu w-max portrait-zoom"
            style={{ x: xTranslate, willChange: 'transform' }}
          >

            {/* Panel 0: Intro text & 3D Composition */}
            <div className="flex-shrink-0 w-[110rem] flex items-center pr-[8vw] -mt-16 md:-mt-24 relative overflow-visible">

              {/* Background 3D Composition (Zoom-proof natively via fixed rem layout) */}
              <div className="absolute inset-0 w-full h-full pointer-events-none overflow-visible transform-gpu">
                <motion.div
                  className="absolute inset-0 w-full h-full pointer-events-none overflow-visible transform-gpu"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  style={{ zIndex: 1, willChange: 'transform' }}
                >
                  {/* Layer 1: Background Red/Pink Text (Behind everything) */}
                  <img
                    src="/backgrounds/bg-text.png"
                    alt="Background Text"
                    className="absolute left-[51rem] top-[-11rem] w-[43.75rem] opacity-80"
                    style={{ zIndex: 1 }}
                  />

                  {/* Layer 2: Sweeping Ribbon (Exact Position & Size) */}
                  <img
                    src="/elements/ribbon.png"
                    alt="3D Ribbon"
                    className="absolute left-[-6rem] top-[-6.5rem] w-[140rem] opacity-95"
                    style={{ zIndex: 2 }}
                  />

                  {/* Layer 3: Cleaned Ultra-Slim Laptop (Exact Position & Size) */}
                  <img
                    src="/elements/laptop.png"
                    alt="Ultra-Slim Animated Laptop"
                    className="absolute left-[47.5rem] bottom-[-7.25rem] w-[37.5rem] opacity-100"
                    style={{ zIndex: 3 }}
                  />
                </motion.div>

                {/* Layer 5: Floating Ring */}
                <motion.img
                  src="/elements/ring.png"
                  alt="Floating Ring"
                  className="absolute left-[73rem] bottom-[2rem] w-[9rem] transform-gpu"
                  style={{ zIndex: 2, willChange: 'transform' }}
                  animate={{
                    x: ["0%", "-600%", "-800%", "-300%", "200%", "0%"],
                    y: ["0%", "-400%", "-150%", "-500%", "-200%", "0%"],
                    rotate: [0, 180, 360, 540, 720, 0]
                  }}
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.4, 0.6, 0.8, 1]
                  }}
                />
              </div>

              {/* Foreground Text & Filters */}
              <div className="w-[70rem] relative z-20 flex flex-col justify-center">
                <motion.h2
                  className="text-5xl lg:text-7xl xl:text-[5.5rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-800 to-gray-500 dark:from-white dark:to-gray-400 drop-shadow-sm leading-[1] tracking-tight mb-6 max-w-4xl"
                  style={{ fontFamily: '"Syne", sans-serif' }}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  Showcasing <span className="text-5xl lg:text-7xl xl:text-[5.5rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-sm leading-[1] tracking-tight mb-6 max-w-4xl">06+</span> <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                    AI & Full-Stack
                  </span> <br />
                  Solutions.
                </motion.h2>

                {/* Paragraph Description */}
                <motion.p
                  className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed mb-6"
                  style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontStyle: 'italic', letterSpacing: '0.02em' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                >
                  {/* Engineered with precision — translating complex data into scalable production-grade applications and intelligent multimodal systems. */}
                </motion.p>

                {/* 3 Decorative Dots (Placed exactly as requested) */}
                <motion.div
                  className="flex items-center gap-2 mb-2 ml-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
                </motion.div>

                {/* Premium Standard SaaS Filters */}
                <motion.div
                  className="flex flex-wrap items-center gap-3 mt-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {['All', 'Full-Stack', 'AI & ML', 'Data Science & Analytics', 'Agentic AI'].map((filter) => {
                    const isActive = activeFilter === filter;
                    return (
                      <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`px-3.5 py-1.5 rounded-full text-[10px] md:text-xs font-semibold tracking-wide transition-all duration-300 ${isActive
                            ? 'bg-white text-gray-900 shadow-[0_4px_14px_0_rgba(0,0,0,0.15)] dark:shadow-[0_0_20px_rgba(255,255,255,0.5)] border border-gray-200 dark:border-white scale-105 z-10'
                            : 'bg-white/50 dark:bg-[#0d0f14]/50 backdrop-blur-sm text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-white/10 hover:border-gray-300 dark:hover:border-white/30 hover:text-gray-900 dark:hover:text-white'
                          }`}
                        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                      >
                        {filter}
                      </button>
                    );
                  })}
                </motion.div>
              </div>
            </div>

            {/* Panels 1–N: Project cards */}
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="flex-shrink-0 flex items-center justify-center transform-gpu"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}

            <div className="flex-shrink-0 w-[8vw]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;