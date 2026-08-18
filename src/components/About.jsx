import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { LuGraduationCap, LuBriefcase, LuTerminal, LuAward } from 'react-icons/lu';

const AnimatedCounter = ({ target, duration = 2000, isDecimal = false, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Reset when out of view so it animates again on scroll back
          setIsVisible(false);
          setCount(0);
        }
      },
      { threshold: 0.1 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const end = parseFloat(target);
    if (start === end) return;
    let startTime = null;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const current = Math.min(progress / duration, 1) * end;
      setCount(current);
      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    requestAnimationFrame(animate);
  }, [isVisible, target, duration]);

  return (
    <span ref={counterRef}>
      {isDecimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
};

const PremiumEducationLogo = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19.5V4.5C4 3.67157 4.67157 3 5.5 3H10.5C11.3284 3 12 3.67157 12 4.5V20.5C12 19.9477 11.5523 19.5 11 19.5H4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 19.5V4.5C20 3.67157 19.3284 3 18.5 3H13.5C12.6716 3 12 3.67157 12 4.5V20.5C12 19.9477 12.4477 19.5 13 19.5H20Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 4.5V20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PremiumExperienceLogo = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12L4 8L12 4L20 8L12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 12L12 16L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 16L12 20L20 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PremiumProjectsLogo = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 3V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 7.5L20 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 7.5L4 16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const PremiumCertificationsLogo = () => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 4V1M12 23V20M4 12H1M23 12H20M6.34315 6.34315L4.22183 4.22183M19.7782 19.7782L17.6569 17.6569M6.34315 17.6569L4.22183 19.7782M19.7782 4.22183L17.6569 6.34315" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const linesToType = [
  "> Initializing profile analysis...",
  "> Name           : Hashmil Muhammed",
  "> Role detected  : AI Engineer / Data Scientist",
  "> Location       : Kerala, India",
  "> Education      : MCA — KTU · SSET · 2026",
  ">                  B.Sc CS — Univ. of Calicut ",
  ">                 · CAS · 2023",
  "> ─────────────────────────────────────────",
  "> Scanning skill matrix...",
  "> ██████████ Python            [EXPERT]",
  "> █████████░ Machine Learning  [EXPERT]",
  "> ████████░░ Deep Learning     [ADVANCED]",
  "> ████████░░ NLP               [ADVANCED]",
  "> ████████░░ Computer Vision   [ADVANCED]",
  "> ███████░░░ FastAPI / Django  [ADVANCED]",
  "> ███████░░░ React             [INTERMEDIATE]",
  "> ██████░░░░ Docker / Git      [INTERMEDIATE]",
  "> etc..",
  "> ─────────────────────────────────────────",
  "> Scanning experience log...",
  "> [1] Data Analyst Intern",
  ">     Bluestock Fintech · 2 months · May 2026–Jul 2026",
  ">     Python · SQL · Excel · Power BI · Pandas ",
  ">     · Data Viz · etc..",
  "> [2] Data Science Intern",
  ">     Luminar Technolab · 7 months · 2023–2024",
  ">     Python · ML · Power BI · EDA · SQL · DL ",
  ">     · GenAI · etc..",
  "> [3] Django Full-Stack Intern",
  ">     Inmakes Infotech · 7 months · 2022–2023",
  ">     Python · Django · HTML · CSS · JS ",
  ">     · SQLite · etc..",
  "> ─────────────────────────────────────────",
  "> Running project scan...  6 projects found.",
  "> ─────────────────────────────────────────",
  "> [PROJECT 001] MindCare AI - Smart Counselling",
  ">   Type    : Multimodal Emotion Recognition System",
  ">   Stack   : Python · CNN · NLP · React · TensorFlow",
  ">             FastAPI · OpenCV · etc..",
  ">   Modules : NLP Chatbot + Facial Emotion ",
  ">             + Voice Analysis + Behaviour Data",
  ">   Multi model fusion : ✓ ACTIVE",
  ">   Accuracy: Audio 98% · Text 94.7% · Vision 62%",
  ">   Status  : DEPLOYED ✓",
  "> ─────────────────────────────────────────",
  "> [PROJECT 002] HOSTELLO - Automated Management",
  ">   Stack   : Python · Django · SQLite · HTML  ",
  ">            · CSS · JS · etc..",
  ">   Features: Automated Attendance,",
  ">             Smart Room Allocation",
  ">   Modules : Guardian Notification System,",
  ">             Admin Dashboard",
  ">   Status  : DEPLOYED ✓",
  "> ─────────────────────────────────────────",
  "> [PROJECT 003] WildGuard AI - Agentic AI System",
  ">   Type    : Autonomous Wildlife Monitoring",
  ">   Stack   : Google ADK · Python · LLMs · MCP",
  ">             HITL · etc..",
  ">   Features: Secure LLM Pipeline, PII Redaction,",
  ">             Risk Routing",
  ">   Status  : COMPLETE ✓",
  "> ─────────────────────────────────────────",
  "> [PROJECT 004] FinSight N100 - Financial Intel",
  ">   Type    : Enterprise Intelligence & REST API",
  ">   Stack   : FastAPI · Streamlit · Pandas · ML",
  ">             SQLite · etc..",
  ">   Features: High-Performance Backend, 50+ KPIs,",
  ">             K-Means Clustering",
  ">   Status  : DEPLOYED ✓",
  "> ─────────────────────────────────────────",
  "> [PROJECT 005] FundLens - Mutual Fund Analytics",
  ">   Type    : BI & Robo-Advisory Platform",
  ">   Stack   : Python · Power BI · SQL · Pandas",
  ">             Streamlit · etc..",
  ">   Features: Risk Modeling (VaR), Monte Carlo,",
  ">             Predictive Robo-Advisory",
  ">   Status  : DEPLOYED ✓",
  "> ─────────────────────────────────────────",
  "> [PROJECT 006] DocPlus - Doctor Appointments",
  ">   Stack   : React · Firebase · REST API · etc..",
  ">   Features: Real-time Slot Booking, ",
  ">             Secure Authentication",
  ">   Modules : Role-based Dashboards (Patient/Doctor)",
  ">   Status  : COMPLETE ✓",
  "> ─────────────────────────────────────────",
  "> Certifications detected    : 14+",
  ">   MLOps Engineer Associate - Microsoft    ✓",
  ">   Oracle Cloud GenAI Pro - Oracle         ✓",
  ">   Intro to IoT (Elite) - NPTEL            ✓",
  ">   Azure AI Essentials - Microsoft         ✓",
  ">   etc..                                    ",
  "> ─────────────────────────────────────────",
  "> Computing threat index...",
  "> Threat level to other developers  : HIGH ⚠",
  "> Confidence score                  : 94.7%",
  "> Hire probability                  : 97.3%",
  "> Recommendation    : HIRE IMMEDIATELY. ✓",
  "> ─────────────────────────────────────────",
  "> Re-initializing analysis..."
];

const parseTerminalText = (text) => {
  if (!text) return null;
  const tokens = text.split(/(\[EXPERT\]|\[ADVANCED\]|\[INTERMEDIATE\]|\[PROJECT \d{3}\]|HIGH ⚠|HIRE IMMEDIATELY\.|DEPLOYED ✓|COMPLETE ✓|✓ ACTIVE|✓|Hashmil Muhammed|98%|94\.7%|62%|97\.3%|█|░)/);

  return tokens.map((part, i) => {
    if (part === '[EXPERT]') return <span key={i} className="text-blue-600 dark:text-blue-400 font-bold">{part}</span>;
    if (part === '[ADVANCED]') return <span key={i} className="text-yellow-600 dark:text-yellow-400 font-bold">{part}</span>;
    if (part === '[INTERMEDIATE]') return <span key={i} className="text-orange-500 dark:text-orange-400 font-bold">{part}</span>;
    if (part.match(/^\[PROJECT \d{3}\]$/)) return <span key={i} className="text-purple-600 dark:text-purple-400 font-bold">{part}</span>;
    if (part === 'HIGH ⚠') return <span key={i} className="text-red-600 dark:text-red-500 font-bold animate-pulse">{part}</span>;
    if (part === 'HIRE IMMEDIATELY.') return <span key={i} className="text-emerald-700 dark:text-emerald-400 font-bold bg-emerald-100 dark:bg-emerald-900/40 px-1 shadow-[0_0_10px_rgba(16,185,129,0.3)]">{part}</span>;
    if (part === 'DEPLOYED ✓' || part === 'COMPLETE ✓' || part === '✓ ACTIVE') return <span key={i} className="text-emerald-600 dark:text-emerald-400 font-bold">{part}</span>;
    if (part.match(/^(98%|94\.7%|62%|97\.3%)$/)) return <span key={i} className="text-purple-600 dark:text-purple-400 font-bold">{part}</span>;
    if (part === 'Hashmil Muhammed') return <span key={i} className="text-gray-900 dark:text-white font-bold">{part}</span>;
    if (part === '✓') return <span key={i} className="text-emerald-600 dark:text-emerald-400 font-bold animate-pulse">{part}</span>;
    if (part === '█') return <span key={i} className="text-blue-600 dark:text-blue-500">{part}</span>;
    if (part === '░') return <span key={i} className="text-gray-300 dark:text-gray-700">{part}</span>;
    return <span key={i} className="text-emerald-800 dark:text-emerald-300/80">{part}</span>;
  });
};

const About = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLineText, setCurrentLineText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [isFlushing, setIsFlushing] = useState(false);
  const terminalRef = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    let isActive = true;

    const runTerminal = async () => {
      while (isActive) {
        setIsFlushing(false);
        setDisplayedLines([]);
        setCurrentLineText("");
        setCurrentLineIndex(0);

        await new Promise(r => setTimeout(r, 1000)); // Initial pause

        for (let lineIdx = 0; lineIdx < linesToType.length; lineIdx++) {
          if (!isActive) return;
          setCurrentLineIndex(lineIdx);
          const fullText = linesToType[lineIdx];
          let current = "";

          for (let charIdx = 0; charIdx < fullText.length; charIdx++) {
            if (!isActive) return;
            current += fullText[charIdx];

            // Glitch effect: ~0.5% chance on normal characters (1 frame glitch)
            if (Math.random() > 0.995 && fullText[charIdx] !== ' ' && fullText[charIdx] !== '█' && fullText[charIdx] !== '░') {
              const chars = "▓▒░!@#$%^&*()_+-=[]{}|;':,./<>?";
              const glitchChar = chars[Math.floor(Math.random() * chars.length)];
              setCurrentLineText(current.slice(0, -1) + glitchChar);
              await new Promise(r => setTimeout(r, 50));
            }

            setCurrentLineText(current);

            // Auto-scroll
            if (terminalRef.current) {
              terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
            }

            // Typing speed logic
            let delay = Math.random() * 20 + 10;
            if (fullText[charIdx] === '█' || fullText[charIdx] === '░') delay = 5;
            else if (fullText[charIdx] === '.' || fullText[charIdx] === ':') delay = 120;
            else if (fullText.includes("──────────────────")) delay = 2; // divider speed

            await new Promise(r => setTimeout(r, delay));
          }

          if (!isActive) return;
          setDisplayedLines(prev => [...prev, fullText]);
          setCurrentLineText("");

          // Pause at end of line
          let lineDelay = 200;
          if (fullText.includes("[PROJECT") || fullText.includes("Scanning")) lineDelay = 600;
          if (fullText.includes("HIRE IMMEDIATELY")) lineDelay = 1500;

          await new Promise(r => setTimeout(r, lineDelay));
        }

        if (!isActive) return;

        // Flush screen effect
        await new Promise(r => setTimeout(r, 1500));
        setIsFlushing(true);
        await new Promise(r => setTimeout(r, 800)); // Wait for flush animation
      }
    };

    runTerminal();
    return () => { isActive = false; };
  }, []);

  return (
    <section
      id="about"
      className="relative bg-surface dark:bg-dark-surface pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden border-t border-border dark:border-dark-border transition-colors duration-300 z-0 portrait-zoom-about"
    >
      <div
        className="absolute inset-0 -z-10 pointer-events-none transition-all duration-700 dark:opacity-0"
        style={{ backgroundImage: "url('/backgrounds/samedha.jpg')", backgroundSize: "170%", backgroundPosition: "left top", backgroundAttachment: "fixed" }}
      />

      {/* Subtle Background Glow (Matches Contact Page in Dark Mode) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-700 -z-10"></div>

      {/* Background 3D Composition (Added from Projects.jsx) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none hidden md:block overflow-visible" style={{ zIndex: 0 }}>
        {/* Layer 1: Background Red/Pink Text (Behind everything) */}
        <motion.img
          src="/elements/TwoLap.png"
          alt="Background Text"
          className="absolute right-[1%] top-[-1%] w-[50vw] max-w-[700px] opacity-80"
          style={{ zIndex: 1 }}
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Layer 2: Sweeping Ribbon */}
        {/* <motion.img
          src="/elements/ribbon.png"
          alt="3D Ribbon"
          className="absolute left-[-8%] top-[-1%] w-[119vw] min-w-[1200px] drop-shadow-2xl opacity-95"
          style={{ zIndex: 2 }}
          animate={{ y: [-12, 12, -12] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        /> */}

        {/* Layer 5: Floating Ring — Full screen wandering animation behind the laptop */}
        {/* <motion.img 
          src="/elements/small-leaf.png" 
          alt="Floating Ring" 
          className="absolute right-[32%] bottom-[5%] w-[10vw] max-w-[140px] drop-shadow-lg"
          style={{ zIndex: 2 }} // Ensure it stays behind the laptop (zIndex: 3)
          animate={{ 
            x: ["0vw", "-45vw", "-65vw", "-25vw", "15vw", "0vw"],  // Wanders end-to-end horizontally
            y: ["0vh", "-50vh", "-15vh", "-65vh", "-20vh", "0vh"],   // Wanders top-to-bottom vertically
            rotate: [0, 180, 360, 540, 720, 0] // Continuous smooth rotation
          }}
          transition={{ 
            duration: 40, // Slower duration for a very smooth ambient float
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.8, 1] 
          }}
        /> */}

      </div>

      {/* Decorative Leaf Asset (Anchored perfectly to Top-Left) */}
      {/* <img
        src="/elements/leaf.png"
        alt="Decorative Leaf"
        className="absolute top-40 left-105 w-48 md:w-64 lg:w-96 -translate-x-1/4 -translate-y-1/4 pointer-events-none z-0 dark:opacity-80 dark:brightness-90"
      /> */}

      {/* Decorative Single Leaf Asset (Anchored perfectly to Bottom-Right) */}
      {/* <motion.img
        src="/elements/singeleaf.png"
        alt="Decorative Single Leaf"
        className="absolute bottom-0 right-8 w-24 md:w-32 lg:w-48 translate-x-1/4 translate-y-1/4 pointer-events-none z-0 transition-all duration-700 dark:opacity-70 dark:brightness-75"
      /> */}

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Simple & Clean Header (Image Hashtag) */}
        <div className="mb-8 md:mb-12 relative z-10 flex flex-col items-start justify-start text-left w-full ml-12 md:ml-20 lg:ml-28 xl:ml-32">
          <div className="inline-flex items-center gap-4 group cursor-default transition-all duration-500 ease-out hover:translate-x-3 hover:scale-[1.02] origin-left">
            <span className="text-sm font-normal tracking-[0.2em] text-transparent dark:text-gray-500 bg-clip-text bg-[url('/backgrounds/samedha.jpg')] dark:bg-[none] bg-cover bg-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] dark:drop-shadow-none uppercase transition-transform duration-500 ease-out group-hover:-translate-x-1">
              01.
            </span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight flex items-center justify-start"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              <span className="text-transparent dark:text-gray-500 bg-clip-text bg-[url('/backgrounds/samedha.jpg')] dark:bg-[none] bg-cover bg-center [filter:drop-shadow(-1px_-1px_1px_rgba(255,255,255,1))_drop-shadow(3px_5px_8px_rgba(0,0,0,0.4))] dark:[filter:none]">
                About Me
              </span>
              {/* <img 
                src="/logos/favicon-hashtag.png" 
                alt="#" 
                className="inline-block h-[0.45em] w-auto ml-1.5 drop-shadow-none pointer-events-none select-none translate-y-2 md:translate-y-2.5 transition-transform duration-500 ease-out group-hover:rotate-6 group-hover:scale-110" 
              /> */}
            </h2>
          </div>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

          {/* Left Column: Narrative Copy */}
          <div
            className={`lg:col-span-7 xl:col-span-7 flex flex-col mt-4 lg:mt-6 text-secondary dark:text-dark-secondary text-[15px] md:text-[16px] xl:text-[17px] leading-[1.8] text-justify ${isMounted ? 'animate-[fade-in-up_0.6s_ease-out]' : 'opacity-0'}`}
            style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 400, fontStyle: 'italic', letterSpacing: '0.02em' }}
          >
            <p className="text-justify">
              Hi I'm <strong className="font-semibold text-text dark:text-dark-text">Hashmil Muhammed,</strong> an <strong className="font-semibold text-text dark:text-dark-text">AI/ML Engineer</strong> and <strong className="font-semibold text-text dark:text-dark-text">Data Scientist</strong> driven by a passion for transforming complex data into actionable intelligence. Building on a strong theoretical foundation from my <strong className="font-semibold text-text dark:text-dark-text">MCA</strong> and <strong className="font-semibold text-text dark:text-dark-text">B.Sc CS</strong>, <br />I bring <strong className="font-semibold text-text dark:text-dark-text">over 1 year of hands-on experience</strong> in Machine Learning, NLP, and Full-Stack Development through roles at Bluestock, Luminar Technolab, and Inmakes Infotech. As a <strong className="font-semibold text-text dark:text-dark-text">Microsoft Certified MLOps Engineer</strong> and <strong className="font-semibold text-text dark:text-dark-text">Oracle GenAI Professional</strong>, I leverage frameworks like <strong className="font-semibold text-text dark:text-dark-text">TensorFlow, PyTorch, Django, and React</strong> to architect and deploy scalable, innovative solutions across the entire data pipeline. I thrive on solving complex challenges and am constantly exploring emerging technologies to build intelligent systems that drive real-world impact.
            </p>
          </div>




          <div className={`lg:col-span-5 xl:col-span-5 relative w-full max-w-[450px] mx-auto lg:ml-auto h-[380px] lg:h-[420px] mt-8 lg:mt-0 lg:-mt-2 ${isMounted ? 'animate-[fade-in-up_0.8s_ease-out_forwards]' : 'opacity-0'} [animation-delay:0.3s]`}>
            <style>
              {`
                 @keyframes screen-flush {
                   0% { filter: blur(0) contrast(1); opacity: 1; transform: scale(1); }
                   20% { filter: blur(3px) contrast(1.5) hue-rotate(90deg); opacity: 0.8; transform: scale(1.01); }
                   40% { filter: blur(1px) contrast(1.2) hue-rotate(-90deg); opacity: 0.4; transform: skewX(1deg); }
                   100% { filter: blur(0) contrast(1); opacity: 0; }
                 }
                 @keyframes scanline-scroll {
                   0% { transform: translateY(-100%); }
                   100% { transform: translateY(100%); }
                 }
                 .terminal-scrollbar::-webkit-scrollbar {
                   width: 5px;
                 }
                 .terminal-scrollbar::-webkit-scrollbar-track {
                   background: transparent;
                 }
                 .terminal-scrollbar::-webkit-scrollbar-thumb {
                   background-color: rgba(16, 185, 129, 0.2);
                   border-radius: 4px;
                 }
                 .terminal-scrollbar::-webkit-scrollbar-thumb:hover {
                   background-color: rgba(16, 185, 129, 0.4);
                 }
                 .mask-fade-top {
                   -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 10%);
                   mask-image: linear-gradient(to bottom, transparent 0%, black 10%);
                 }
               `}
            </style>

            <div className="w-full h-full bg-gray-50/90 dark:bg-[#1e1e1e]/95 backdrop-blur-2xl rounded-[1.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-200/50 dark:border-white/10 flex flex-col overflow-hidden relative transition-colors duration-300">

              {/* CSS Scanline Overlay */}
              <div className="absolute inset-0 pointer-events-none z-20 overflow-hidden opacity-10 dark:opacity-20 mix-blend-overlay">
                <div className="w-full h-[200%] bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] animate-[scanline-scroll_15s_linear_infinite]" />
              </div>

              {/* Top Panel Chrome */}
              <div className="relative flex items-center px-4 sm:px-5 py-3 border-b border-gray-200 dark:border-white/5 bg-white/50 dark:bg-white/5 z-10 shrink-0">
                {/* MacOS Buttons - Left Aligned */}
                <div className="flex items-center gap-1.5 z-10">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-sm"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-sm"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-sm"></div>
                </div>

                {/* Terminal Title - Absolutely Centered */}
                <div className="absolute left-1/2 -translate-x-1/2 w-full text-center pointer-events-none">
                  <span className="text-blue-500 dark:text-blue-400 text-[9px] sm:text-[10px] whitespace-nowrap font-mono font-bold">
                    hashmil@ai-core ~ % ./init_profile.sh
                  </span>
                </div>
              </div>

              {/* Terminal Body */}
              <div
                className={`flex-1 overflow-y-auto p-5 sm:p-6 pb-12 relative terminal-scrollbar scroll-smooth z-10 mask-fade-top ${isFlushing ? 'animate-[screen-flush_0.8s_ease-out_forwards]' : ''}`}
                ref={terminalRef}
              >
                <div className="flex flex-col gap-1.5 font-mono text-[9px] sm:text-[10px] leading-[1.6]">

                  {/* Rendered Lines */}
                  {displayedLines.map((line, i) => (
                    <div key={i} className="flex gap-3 sm:gap-4 break-words">
                      <span className="text-gray-400 dark:text-gray-400 opacity-60 dark:opacity-100 tracking-widest shrink-0 select-none">
                        [00:00:{String(i + 1).padStart(2, '0')}]
                      </span>
                      <span className="flex-1 break-all sm:break-normal whitespace-pre-wrap">
                        {parseTerminalText(line)}
                      </span>
                    </div>
                  ))}

                  {/* Active Typing Line */}
                  {currentLineIndex < linesToType.length && !isFlushing && (
                    <div className="flex gap-3 sm:gap-4 break-words">
                      <span className="text-gray-400 dark:text-gray-400 opacity-60 dark:opacity-100 tracking-widest shrink-0 select-none">
                        [00:00:{String(currentLineIndex + 1).padStart(2, '0')}]
                      </span>
                      <span className="flex-1 break-all sm:break-normal whitespace-pre-wrap">
                        {parseTerminalText(currentLineText)}
                        <span className="inline-block w-[0.6em] h-[1.1em] bg-blue-600 dark:bg-blue-500 align-middle ml-1 -mt-0.5 animate-pulse shadow-[0_0_8px_rgba(37,99,235,0.8)] dark:shadow-[0_0_10px_rgba(59,130,246,0.9)]" />
                      </span>
                    </div>
                  )}

                </div>
              </div>

            </div>

          </div>

        </div>

        {/* Unified 4-Item Minimalist Professional Badges (Smaller Text, Colored Icons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16 w-full">

          {/* Education */}
          <div className="flex items-center gap-4 group cursor-default">
            {/* Soft Outline Container */}
            <div className="w-14 h-14 rounded-[1.25rem] border-[1.5px] border-gray-200 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 backdrop-blur-md text-gray-400 dark:text-gray-500 flex items-center justify-center text-2xl shrink-0 group-hover:border-gray-800 dark:group-hover:border-gray-200 group-hover:text-black dark:group-hover:text-white transition-all duration-300">
              <PremiumEducationLogo />
            </div>
            <div className="flex flex-col overflow-hidden">
              {/* Smaller title */}
              <span className="font-extrabold text-gray-700 dark:text-gray-400 text-sm md:text-base whitespace-nowrap truncate tracking-tight" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                Education
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-tight mt-0.5" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 400, fontStyle: 'italic', letterSpacing: '0.02em' }}>MCA (SSET) & B.Sc CS (CAS)</span>
            </div>
          </div>

          {/* Experience */}
          <div className="flex items-center gap-4 group cursor-default">
            {/* Soft Outline Container */}
            <div className="w-14 h-14 rounded-[1.25rem] border-[1.5px] border-gray-200 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 backdrop-blur-md text-gray-400 dark:text-gray-500 flex items-center justify-center text-2xl shrink-0 group-hover:border-gray-800 dark:group-hover:border-gray-200 group-hover:text-black dark:group-hover:text-white transition-all duration-300">
              <PremiumExperienceLogo />
            </div>
            <div className="flex flex-col overflow-hidden">
              {/* Smaller title */}
              <span className="font-extrabold text-gray-700 dark:text-gray-400 text-sm md:text-base whitespace-nowrap truncate tracking-tight" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                <AnimatedCounter target={1.5} isDecimal={true} suffix="+ Yrs Experience" />
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-tight mt-0.5" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 400, fontStyle: 'italic', letterSpacing: '0.02em' }}>AI, Data Science & Full-Stack</span>
            </div>
          </div>

          {/* Projects */}
          <div className="flex items-center gap-4 group cursor-default">
            {/* Soft Outline Container */}
            <div className="w-14 h-14 rounded-[1.25rem] border-[1.5px] border-gray-200 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 backdrop-blur-md text-gray-400 dark:text-gray-500 flex items-center justify-center text-2xl shrink-0 group-hover:border-gray-800 dark:group-hover:border-gray-200 group-hover:text-black dark:group-hover:text-white transition-all duration-300">
              <PremiumProjectsLogo />
            </div>
            <div className="flex flex-col overflow-hidden">
              {/* Smaller title */}
              <span className="font-extrabold text-gray-700 dark:text-gray-400 text-sm md:text-base whitespace-nowrap truncate tracking-tight" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                <AnimatedCounter target={6} suffix="+ AI Projects" />
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-tight mt-0.5" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 400, fontStyle: 'italic', letterSpacing: '0.02em' }}>Agentic AI, Data Analytics etc..</span>
            </div>
          </div>

          {/* Certifications */}
          <div className="flex items-center gap-4 group cursor-default">
            {/* Soft Outline Container */}
            <div className="w-14 h-14 rounded-[1.25rem] border-[1.5px] border-gray-200 dark:border-gray-800 bg-gray-50/30 dark:bg-gray-900/30 backdrop-blur-md text-gray-400 dark:text-gray-500 flex items-center justify-center text-2xl shrink-0 group-hover:border-gray-800 dark:group-hover:border-gray-200 group-hover:text-black dark:group-hover:text-white transition-all duration-300">
              <PremiumCertificationsLogo />
            </div>
            <div className="flex flex-col overflow-hidden">
              {/* Smaller title */}
              <span className="font-extrabold text-gray-700 dark:text-gray-400 text-sm md:text-base whitespace-nowrap truncate tracking-tight" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                <AnimatedCounter target={14} suffix="+ Certifications" />
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium leading-tight mt-0.5" style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 400, fontStyle: 'italic', letterSpacing: '0.02em' }}>Microsoft, Oracle etc..</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
