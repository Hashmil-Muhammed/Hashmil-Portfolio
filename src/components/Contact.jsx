import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FiUser as User, FiMail as Mail, FiMessageSquare as MessageSquare, FiSend as Send, FiBriefcase as Briefcase, FiDownload, FiX } from 'react-icons/fi';
import { BsStars as Sparkles } from 'react-icons/bs';
import { motion, useInView } from 'framer-motion';
import { LuBriefcase, LuRocket, LuCodeXml, LuBrainCircuit, LuGraduationCap, LuBuilding2, LuNetwork } from 'react-icons/lu';
/* ─── Animated Counter ─── */
const AnimatedCounter = ({ target, suffix = "", duration = 1200 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = parseInt(target, 10);
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiryType, setInquiryType] = useState('job');
  const [showResume, setShowResume] = useState(false);
  const [isGlobeHovered, setIsGlobeHovered] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Hashmil, replace this with your actual Web3Forms Access Key
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    const isHire = inquiryType === 'job';
    const emailSubject = isHire
      ? '🚀 New "Hire Me" Job Offer from Portfolio'
      : '💡 New "Build Together" Project Collaboration from Portfolio';

    const emailBody = `Hello Hashmil,

You have received a new message through your portfolio website.

[ INQUIRY DETAILS ]
Type     : ${isHire ? 'Job Opportunity (Hire Me)' : 'Project Collaboration (Build Together)'}
${isHire ? 'Company  ' : 'Name     '} : ${form.name}
Email    : ${form.email}

[ MESSAGE ]
${form.message}

--
Automated from Hashmil's Portfolio
(Reply directly to this email to connect with ${form.name})`;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: form.name,
          email: form.email,
          subject: emailSubject,
          message: emailBody,
          from_name: "Hashmil's Portfolio",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setForm({ name: '', email: '', subject: '', message: '' });
      } else {
        alert("Something went wrong! Please try again.");
      }
    } catch (error) {
      alert("Network error! Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <footer
        id="contact"
        className="relative z-10 w-full h-screen flex flex-col justify-between bg-[#111115] text-white pt-24 pb-10 px-6 lg:px-12 overflow-hidden"
      >
        {/* Subtle Background Glow/Gradient for Premium Feel */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10">

          {/* Floating Tech Illustration - Right Side */}
          <div className="tech-hover-group absolute right-6 -top-2 hidden lg:block w-[350px] xl:w-[410px] select-none z-10 animate-float" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
            <style>
              {`
              @keyframes inlineGlobeSpin {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              @keyframes inlineGlobeBlink {
                0% { opacity: 0.1; }
                15% { opacity: 1; }
                25% { opacity: 1; }
                40%, 100% { opacity: 0.1; }
              }
              .inline-spin-y {
                animation: inlineGlobeSpin 250s linear infinite;
                transform-style: preserve-3d;
                transition: filter 1s ease-in-out;
                will-change: filter, transform;
                cursor: pointer;
                backface-visibility: hidden;
              }
              .tech-hover-group:hover .inline-spin-y {
                filter: brightness(2) drop-shadow(0 0 50px rgba(255,255,255,0.6));
              }
              .tech-hover-group:hover .orbit-logo {
                opacity: 1 !important;
                filter: grayscale(0) brightness(1.2) !important;
              }
              .orbit-logo {
                transition: all 0.5s ease-in-out;
              }
              .inline-blink-hard {
                animation: inlineGlobeBlink 10s ease-in-out infinite;
                filter: brightness(15) drop-shadow(0 0 80px rgba(255,255,255,1));
                will-change: opacity;
              }
              .python-orbit-plane {
                position: absolute;
                top: 50%; left: 50%;
                width: 440px; height: 440px;
                margin-top: -220px; margin-left: -220px;
                transform-style: preserve-3d;
                transform: rotateZ(45deg) rotateX(75deg);
                border: 1.5px dashed rgba(255,255,255,0.15);
                border-radius: 50%;
                pointer-events: none;
                transition: all 0.5s ease-in-out;
              }
              .tech-hover-group:hover .python-orbit-plane {
                border: 1.5px dashed rgba(255,255,255,0.3);
                box-shadow: 0 0 10px rgba(255,255,255,0.1), inset 0 0 10px rgba(255,255,255,0.1);
              }
              @keyframes orbitSpin {
                from { transform: rotateZ(360deg); }
                to { transform: rotateZ(0deg); }
              }
              .python-orbit-spin {
                position: absolute;
                inset: 0;
                animation: orbitSpin 16s linear infinite;
                transform-style: preserve-3d;
              }
              @keyframes counterOrbitSpin {
                from { transform: rotateZ(-360deg) rotateX(-75deg) rotateZ(-45deg); }
                to { transform: rotateZ(0deg) rotateX(-75deg) rotateZ(-45deg); }
              }
              .python-orbit-counter {
                position: absolute;
                top: -14px; left: 50%;
                width: 28px; height: 28px;
                margin-left: -14px;
                animation: counterOrbitSpin 16s linear infinite;
                display: flex;
                align-items: center;
                justify-content: center;
              }
            `}
            </style>

            {/* Orbit System */}
            <div className="python-orbit-plane">
              {/* 1. Python */}
              <div className="python-orbit-spin" style={{ animationDelay: '0s' }}>
                <div className="python-orbit-counter" style={{ animationDelay: '0s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="orbit-logo w-full h-full object-contain filter grayscale brightness-[1.1] drop-shadow-[0_0_2px_rgba(255,255,255,0.3)] opacity-70" />
                </div>
              </div>

              {/* 2. React */}
              <div className="python-orbit-spin" style={{ animationDelay: '-2s' }}>
                <div className="python-orbit-counter" style={{ animationDelay: '-2s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="orbit-logo w-full h-full object-contain filter grayscale brightness-[1.3] drop-shadow-[0_0_2px_rgba(255,255,255,0.3)] opacity-70" />
                </div>
              </div>

              {/* 3. TensorFlow */}
              <div className="python-orbit-spin" style={{ animationDelay: '-4s' }}>
                <div className="python-orbit-counter" style={{ animationDelay: '-4s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" alt="TensorFlow" className="orbit-logo w-full h-full object-contain filter grayscale brightness-[1.3] drop-shadow-[0_0_2px_rgba(255,255,255,0.3)] opacity-70" />
                </div>
              </div>

              {/* 4. FastAPI */}
              <div className="python-orbit-spin" style={{ animationDelay: '-6s' }}>
                <div className="python-orbit-counter" style={{ animationDelay: '-6s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" alt="FastAPI" className="orbit-logo w-full h-full object-contain filter grayscale brightness-[1.3] drop-shadow-[0_0_2px_rgba(255,255,255,0.3)] opacity-70" />
                </div>
              </div>

              {/* 5. PostgreSQL */}
              <div className="python-orbit-spin" style={{ animationDelay: '-8s' }}>
                <div className="python-orbit-counter" style={{ animationDelay: '-8s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="orbit-logo w-full h-full object-contain filter grayscale brightness-[1.3] drop-shadow-[0_0_2px_rgba(255,255,255,0.3)] opacity-70" />
                </div>
              </div>

              {/* 6. Git */}
              <div className="python-orbit-spin" style={{ animationDelay: '-10s' }}>
                <div className="python-orbit-counter" style={{ animationDelay: '-10s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="orbit-logo w-full h-full object-contain filter grayscale brightness-[1.3] drop-shadow-[0_0_2px_rgba(255,255,255,0.3)] opacity-70" />
                </div>
              </div>

              {/* 7. NumPy */}
              <div className="python-orbit-spin" style={{ animationDelay: '-12s' }}>
                <div className="python-orbit-counter" style={{ animationDelay: '-12s' }}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" alt="NumPy" className="orbit-logo w-full h-full object-contain filter grayscale brightness-[1.3] drop-shadow-[0_0_2px_rgba(255,255,255,0.3)] opacity-70" />
                </div>
              </div>

              {/* 8. PowerBI */}
              <div className="python-orbit-spin" style={{ animationDelay: '-14s' }}>
                <div className="python-orbit-counter" style={{ animationDelay: '-14s' }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" className="orbit-logo text-[#F2C811] w-full h-full object-contain filter grayscale brightness-[1.3] drop-shadow-[0_0_2px_rgba(255,255,255,0.3)] opacity-70">
                    <path d="M17 2h5v20h-5V2zm-7 6h5v14h-5V8zM3 14h5v8H3v-8z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 3D Sway from left to right (Maintains sphere shape) */}
            <div
              className="relative w-full h-auto inline-spin-y"
              onMouseEnter={() => setIsGlobeHovered(true)}
              onMouseLeave={() => setIsGlobeHovered(false)}
            >
              {/* Base Globe */}
              <img src="/elements/globe-base.png" alt="Neural Tech Illustration" className="w-full h-auto object-contain filter brightness-[1.5] drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]" />
              {/* Alternating Independent Blinking Nodes with Time Gap */}
              <img src="/elements/globe-glow1.png" alt="" className="absolute inset-0 w-full h-auto object-contain inline-blink-hard" style={{ transform: 'translateZ(1px)', animationDelay: '0s' }} />
              <img src="/elements/globe-glow2.png" alt="" className="absolute inset-0 w-full h-auto object-contain inline-blink-hard" style={{ transform: 'translateZ(2px)', animationDelay: '5s' }} />
            </div>
          </div>

          {/* Huge Hero Header */}
          <div className="mb-4 lg:mb-6">
            <h2
              className={`text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] transition-[filter] duration-1000 ease-in-out will-change-[filter] ${isGlobeHovered ? 'drop-shadow-[0_0_15px_rgba(255,255,255,0.15)]' : ''}`}
              style={{ fontFamily: '"Plus Jakarta Sans", -apple-system, sans-serif' }}
            >
              {inquiryType === 'project' ? (
                <>Let's build <br className="hidden md:block" /><span className="text-white/30 transition-colors duration-1000">something great.</span></>
              ) : (
                <>Let's work <br className="hidden md:block" /><span className="text-white/30 transition-colors duration-1000">together.</span></>
              )}
            </h2>
            <p className={`mt-6 text-xs md:text-sm text-white/20 max-w-2xl font-medium leading-relaxed transition-[filter] duration-1000 ease-in-out will-change-[filter] ${isGlobeHovered ? 'drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]' : ''} ${inquiryType === 'project' ? 'text-left' : 'text-justify'}`}>
              {inquiryType === 'project'
                ? <>Got a vision? Let's turn it into reality. Share your project details, <br className="hidden lg:block" /> and let's build an exceptional digital experience.</>
                : <>I am actively seeking full-time opportunities. If you're looking for a passionate <br className="hidden lg:block" /> developer who builds with precision and purpose, I'd love to connect.</>}
            </p>

            {/* ── Minimalist Tech Metric Strip ── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`relative w-full lg:w-[40%] overflow-hidden mask-edges group mt-4 py-1.5 transition-[filter] duration-1000 ease-in-out will-change-[filter] ${isGlobeHovered ? 'drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]' : ''}`}
            >
              <div
                className="animate-marquee-smooth w-max flex items-center whitespace-nowrap group-hover:[animation-play-state:paused]"
                style={{ animationDuration: '70s' }}
              >
                {[...Array(10)].map((_, idx) => (
                  <div key={idx} className="flex items-center gap-6 shrink-0 pr-6">
                    {/* Experience */}
                    <div className="flex items-center gap-2">
                      <LuBriefcase className="w-4 h-4 text-white/40 shrink-0" />
                      <span className="font-mono font-black text-sm sm:text-base text-white/70 tracking-tight">1+</span>
                      <span className="text-xs font-medium text-white/30">Years Exp.</span>
                    </div>

                    {/* Projects */}
                    <div className="flex items-center gap-2">
                      <LuRocket className="w-4 h-4 text-white/40 shrink-0" />
                      <span className="font-mono font-black text-sm sm:text-base text-white/70 tracking-tight">6+</span>
                      <span className="text-xs font-medium text-white/30">Projects</span>
                    </div>

                    {/* Skills */}
                    <div className="flex items-center gap-2">
                      <LuCodeXml className="w-4 h-4 text-white/40 shrink-0" />
                      <span className="font-mono font-black text-sm sm:text-base text-white/70 tracking-tight">57</span>
                      <span className="text-xs font-medium text-white/30">Skills</span>
                    </div>

                    {/* Certifications */}
                    <div className="flex items-center gap-2">
                      <LuGraduationCap className="w-4 h-4 text-white/40 shrink-0" />
                      <span className="font-mono font-black text-sm sm:text-base text-white/70 tracking-tight">14</span>
                      <span className="text-xs font-medium text-white/30">Certifications</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left: Info Side */}
            <div className={`lg:col-span-5 space-y-8 w-full pt-2 sm:pt-4 md:pt-6 transition-[filter] duration-1000 ease-in-out will-change-[filter] ${isGlobeHovered ? 'drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]' : ''}`}>

              {/* Email */}
              <div className="flex items-center gap-1.5 sm:gap-2 group">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:text-white transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hashmilmuhammedparammal@gmail.com" className="text-xs md:text-sm font-medium text-white/30 hover:text-white transition-colors break-all">
                  hashmilmuhammedparammal@gmail.com
                </a>
              </div>

              {/* Phone & WhatsApp */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-6 sm:gap-x-8">
                <a href="tel:+919567868658" className="flex items-center gap-1.5 sm:gap-2 group">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:text-white transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-xs md:text-sm font-medium text-white/30 group-hover:text-white transition-colors">
                    +91 95678 68658
                  </span>
                </a>

                <a href="https://wa.me/919567868658" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 group">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:text-white transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 2.19.71 4.2 1.91 5.82L2.5 21.5l3.82-1.41C7.8 21.29 9.81 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.87 0-3.62-.61-5.04-1.64l-.36-.26-2.58.95.95-2.58-.26-.36A8.17 8.17 0 013.8 12c0-4.52 3.68-8.2 8.2-8.2 4.52 0 8.2 3.68 8.2 8.2s-3.68 8.2-8.2 8.2zm4.18-5.83c-.23-.12-1.35-.67-1.56-.75-.21-.08-.36-.12-.51.12-.15.23-.59.75-.72.9-.13.15-.26.17-.49.05-.23-.12-1.04-.38-2-1.22-.75-.66-1.25-1.48-1.4-1.71-.15-.23-.02-.35.1-.47.11-.1.23-.27.35-.41.12-.14.15-.23.23-.39.08-.16.04-.29-.02-.41-.06-.12-.51-1.23-.7-1.68-.19-.44-.38-.38-.51-.39h-.44c-.15 0-.4.06-.6.29-.2.23-.78.76-.78 1.85s.8 2.14.91 2.29c.11.15 1.56 2.38 3.78 3.34.53.23.94.37 1.26.47.53.17 1.01.15 1.39.09.43-.07 1.35-.55 1.54-1.08.19-.53.19-.99.13-1.08-.06-.09-.21-.14-.44-.26z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs md:text-sm font-medium text-white/30 group-hover:text-white transition-all duration-300">
                    WhatsApp
                  </span>
                </a>
              </div>

              {/* Socials (LinkedIn & GitHub) */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-6 sm:gap-x-8">
                <a href="https://www.linkedin.com/in/hashmil-muhammed08/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2 group">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:text-white transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  <span className="text-xs md:text-sm font-medium text-white/30 group-hover:text-white transition-all duration-300">
                    LinkedIn
                  </span>
                </a>
                <a href="https://github.com/Hashmil-Muhammed/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 sm:gap-2 group">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:text-white transition-colors shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-xs md:text-sm font-medium text-white/30 group-hover:text-white transition-all duration-300">
                    GitHub
                  </span>
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5 sm:gap-2 group">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white/40 group-hover:text-white transition-colors shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-xs md:text-sm font-medium text-white/30">
                  Kerala, India
                </p>
              </div>

              {/* Resume */}
              <button onClick={() => setShowResume(true)} className="group text-left w-fit">
                <p className="text-xs md:text-sm font-medium text-white/30 group-hover:text-white transition-colors duration-300">
                  View Resume
                </p>
              </button>

            </div>

            {/* Right: Form Side */}
            <div className={`lg:-mt-4 lg:-translate-x-12 lg:col-span-6 lg:col-start-7 transition-[filter] duration-1000 ease-in-out will-change-[filter] ${isGlobeHovered ? 'drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]' : ''}`}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full lg:w-[90%] ml-auto">

                {/* Pure Typography Toggle */}
                <div className="flex items-center gap-8 mt-4 mb-2">
                  <button
                    type="button"
                    onClick={() => setInquiryType('job')}
                    className={`text-base transition-all ${inquiryType === 'job'
                      ? 'text-white font-bold'
                      : 'text-white/30 font-medium hover:text-white/60'
                      }`}
                  >
                    Hire Me
                  </button>
                  <button
                    type="button"
                    onClick={() => setInquiryType('project')}
                    className={`text-base transition-all ${inquiryType === 'project'
                      ? 'text-white font-bold'
                      : 'text-white/30 font-medium hover:text-white/60'
                      }`}
                  >
                    Build Together
                  </button>
                </div>

                {/* Minimal Underlined Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                  <div className="flex flex-col gap-1">
                    <label htmlFor="name" className="text-xs text-white/40 font-medium tracking-wide ml-1">
                      {inquiryType === 'project' ? "Name" : "Company Name"}
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={inquiryType === 'project' ? "John Doe" : "Infosys"}
                      required
                      className="w-full px-4 py-2.5 bg-white/[0.02] border border-white/10 rounded-2xl text-white placeholder:text-white/[0.15] placeholder:text-sm focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1">
                    <label htmlFor="email" className="text-xs text-white/40 font-medium tracking-wide ml-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={inquiryType === 'project' ? "hello@example.com" : "careers@infosys.com"}
                      required
                      pattern="[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.(com|in|org|net|edu|gov|io|co\.in|ac\.in)$"
                      title="Please enter a valid email address (e.g., name@domain.com)"
                      className="w-full px-4 py-2.5 bg-white/[0.02] border border-white/10 rounded-2xl text-white placeholder:text-white/[0.15] placeholder:text-sm focus:outline-none focus:border-white/30 transition-colors"
                    />
                  </div>
                </div>

                {/* Full Width Subject/Role Input */}
                {/* <div className="flex flex-col gap-1">
                <label htmlFor="subject" className="text-xs text-white/40 font-medium tracking-wide ml-1">
                  {inquiryType === 'project' ? "Project Type" : "Job Role"}
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  value={form.subject || ''}
                  onChange={handleChange}
                  placeholder={inquiryType === 'project' ? "e.g. Web App" : "e.g. Developer"}
                  required
                  className="w-full px-4 py-2.5 bg-white/[0.02] border border-white/10 rounded-2xl text-white placeholder:text-white/[0.15] placeholder:text-sm focus:outline-none focus:border-white/30 transition-colors"
                />
              </div> */}


                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-xs text-white/40 font-medium tracking-wide ml-1">
                    {inquiryType === 'project' ? "Project Details" : "Job Role Description"}
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder={inquiryType === 'project' ? "Tell me about your project..." : "Please share the job role, description, tech stack, or JD link..."}
                    rows={6}
                    required
                    className="w-full px-4 py-2.5 bg-white/[0.02] border border-white/10 rounded-2xl text-white placeholder:text-white/[0.15] placeholder:text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
                  />
                </div>

                {/* Standard Button */}
                <div className="mt-0 flex justify-start sm:justify-end">
                  <button
                    type="submit"
                    disabled={submitted || isSubmitting}
                    className={`w-fit text-sm font-semibold tracking-wide transition-all duration-300 flex items-center justify-center gap-3 group ${submitted || isSubmitting
                      ? 'text-white/40 cursor-default'
                      : 'text-white/50 hover:text-white hover:font-bold hover:-translate-y-0.5 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]'
                      }`}
                  >
                    {isSubmitting ? 'Sending...' : submitted ? 'Message Delivered' : 'Send Message'}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>

        {/* Response Time & Footer Bottom Line */}
        <div className={`max-w-7xl mx-auto w-full -mt-8 mb-2 text-center sm:text-left relative z-10 transition-[filter] duration-1000 ease-in-out will-change-[filter] ${isGlobeHovered ? 'drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]' : ''}`}>
          <p className="text-[11px] md:text-xs font-medium text-white/20 italic">
            Typical response time: within 24 hours.
          </p>
        </div>
        <div className={`max-w-7xl mx-auto w-full pt-2 -mb-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 transition-[filter] duration-1000 ease-in-out will-change-[filter] ${isGlobeHovered ? 'drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]' : ''}`}>
          <p className="text-[10px] font-medium text-white/20 uppercase tracking-widest">
            © {new Date().getFullYear()} Hashmil Muhammed <span className="hidden sm:inline text-gray-300 dark:text-white/20 select-none text-[10px] font-medium text-white/20 uppercase tracking-widest">•</span> All rights reserved
          </p>
          <img
            src="/logos/logo-transparent-dark.png"
            alt="#MIL Logo Dark"
            className="h-8 md:h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
          />
        </div>

        {/* ── RESUME MODAL ─────────────────────────────────── */}
        {createPortal(
          <div className={`fixed inset-0 transition-opacity duration-300 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 ${showResume ? 'opacity-100 pointer-events-auto z-[9999]' : 'opacity-0 pointer-events-none z-[-1]'}`}>
            <div className="bg-white dark:bg-dark-bg w-full max-w-4xl h-[min(80vh,800px)] rounded-2xl shadow-2xl flex flex-col overflow-hidden relative">
  
              {/* Header */}
              <div className="border-b border-border dark:border-dark-border p-4 flex justify-between items-center bg-gray-50 dark:bg-dark-surface">
                <h2 className="font-bold text-primary dark:text-dark-primary text-lg">Hashmil's Resume</h2>
                <div className="flex items-center gap-4">
                  <a
                    href="/docs/Hashmil_s_Resume.pdf"
                    download
                    className="flex items-center gap-2 text-sm font-semibold text-primary dark:text-dark-primary hover:opacity-70 transition-opacity"
                  >
                    <FiDownload className="text-lg" /> Download PDF
                  </a>
                  <button
                    onClick={() => setShowResume(false)}
                    className="text-secondary dark:text-dark-secondary hover:text-red-500 transition-colors p-1"
                  >
                    <FiX className="text-2xl" />
                  </button>
                </div>
              </div>
  
              {/* Body */}
              <div className="flex-1 w-full h-full bg-gray-100 dark:bg-gray-900">
                <iframe
                  src="/docs/Hashmil_s_Resume.pdf#toolbar=0&view=FitH"
                  className="w-full h-full border-none"
                  title="Resume Preview"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
      </footer>

      {/* Success Cinematic Overlay (No Card Box) */}
      {submitted && createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSubmitted(false)}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center p-6 bg-black/20 backdrop-blur-md cursor-pointer"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-white/[0.03] rounded-full blur-[100px] pointer-events-none"></div>

          {/* Floating Content Array */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
            className="flex flex-col items-center text-center z-10 w-full max-w-2xl relative"
          >
            {/* Logo */}
            <div className="mb-10 md:mb-12">
              <img src="/logos/logo-transparent-dark.png" alt="#MIL" className="h-20 md:h-24 object-contain drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]" />
            </div>

            {/* Massive Typography */}
            <h3 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 mb-6 tracking-tighter">
              Message Delivered.
            </h3>

            <p className="text-white/50 text-base md:text-lg leading-relaxed mb-12 max-w-md font-medium px-4">
              Thank you for reaching out. Your inquiry has been securely sent. I'll connect with you within <br />24 hours.
            </p>

            {/* Minimalist Text Button */}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevents double firing
                setSubmitted(false);
              }}
              className="group relative px-8 py-3 text-white/15 hover:text-white/50 font-medium rounded-full overflow-hidden transition-all duration-300 active:scale-95"
            >
              <span className="relative z-10 tracking-widest text-[11px] md:text-xs uppercase transition-colors">Return to Portfolio</span>
            </button>
          </motion.div>

          {/* Subtle Close Button Top Right */}
          <button
            className="absolute top-8 right-8 text-white/10 hover:text-white/40 transition-colors p-4 z-50"
          >
            <FiX className="w-8 h-8" />
          </button>
        </motion.div>,
        document.body
      )}
    </>
  );
};

export default Contact;
