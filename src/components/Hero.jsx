import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FiDownload, FiX } from 'react-icons/fi';

const Hero = ({ isReady }) => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section
      id="hero"
      className="relative bg-white dark:bg-dark-bg flex flex-col overflow-hidden"
      style={{ minHeight: '100svh' }}
    >

      {/* Top spacing removed to relocate text downwards */}

      {/* ── 2. HERO CENTREPIECE ───────────────────────────────── */}
      <div className="flex-1 flex flex-col items-center justify-end px-4 md:px-6 pb-12" style={{ position: 'relative' }}>


        {/* ── RELOCATED FLOATING LABEL ────────────────────────── */}
        {/* Added -translate-x-8 to gently nudge the text to the left */}
        <div className={`relative flex flex-col items-center justify-center px-4 text-center mb-10 -translate-x-6 hero-hidden ${isReady ? 'hero-animate-text' : ''}`} style={{ zIndex: 40, fontFamily: '"Plus Jakarta Sans", sans-serif', opacity: isReady ? '' : 0 }}>
          <p className="text-primary dark:text-dark-primary text-base md:text-lg font-medium tracking-tight">
            Hi I'm <span className="font-extrabold"> Hashmil Muhammed</span>,
          </p>
          {/* Reduced line height (leading-tight) and negative margin (-mt-1) to bring lines closer */}
          <p className="text-secondary dark:text-dark-secondary text-2xl md:text-2xl font-medium tracking-tight leading-tight -mt-1">
            building intelligent AI solutions as an
          </p>
        </div>

        {/* Text + portrait bounding box */}
        <div
          className="w-full max-w-7xl mx-auto text-center select-none"
          style={{ position: 'relative' }}
        >

          {/* ── LAYER 1: "AI ENGINEER" — z:1, behind portrait ── */}
          <h1
            className={`font-extrabold text-primary dark:text-dark-primary hero-hidden ${isReady ? 'hero-animate-text' : ''}`}
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: 'clamp(56px, 10.8vw, 152px)',
              lineHeight: 1.20,
              letterSpacing: '-0.03em',
              position: 'relative',
              zIndex: 1,
              opacity: isReady ? '' : 0,
            }}
          >
            AI ENGINEER
          </h1>

          {/* ── LAYER 2: PORTRAIT — z:20, between both rows ──── */}
          {/*
            bottom:0 anchors the portrait base to the wrapper base,
            which coincides with the bottom of "& DATA ANALYST".
            The portrait therefore rises UP over "AI ENGINEER" and
            its lower body is covered by the outline text above.
          */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translate(-50%, 23%)', /* Shifted down vertically */
              width: 'clamp(220px, 26vw, 390px)',
              zIndex: 20,
              pointerEvents: 'none',
            }}
          >
            <img
              src="/elements/portrait.png"
              alt="Hashmil Muhammed"
              className={`hero-hidden ${isReady ? 'hero-animate-photo' : ''}`}
              style={{
                display: 'block',
                width: '100%',
                maxHeight: 'clamp(280px, 35vw, 500px)',
                objectFit: 'contain',
                objectPosition: 'top center',
                /*
                  Image already has white background + is grayscale.
                  multiply blend: white × white canvas = invisible.
                  The dark figure pixels survive and show through.
                */
                mixBlendMode: 'multiply',
                /* Smooth waist fade */
                maskImage: 'linear-gradient(to bottom, black 0%, black 65%, rgba(0,0,0,0.4) 82%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 65%, rgba(0,0,0,0.4) 82%, transparent 100%)',
                opacity: isReady ? '' : 0,
              }}
            />
          </div>

          {/* ── LAYER 3: "& DATA SCIENTIST" — z:30, over portrait ─ */}
          <div
            className={`text-outline font-extrabold hero-hidden ${isReady ? 'hero-animate-text' : ''}`}
            style={{
              fontFamily: '"Plus Jakarta Sans", sans-serif',
              fontSize: 'clamp(56px, 10.8vw, 152px)',
              lineHeight: 0.92,
              letterSpacing: '-0.03em',
              marginTop: '0.045em',
              position: 'relative',
              zIndex: 30,
              opacity: isReady ? '' : 0,
            }}
          >
            &amp; DATA SCIENTIST
          </div>

        </div>

        {/* ── 3. BOTTOM META ROW ─────────────────────────────── */}
        <div
          className={`w-full max-w-7xl mx-auto flex items-center justify-between px-2 md:px-6 hero-hidden ${isReady ? 'hero-animate-text' : ''}`}
          style={{ marginTop: 'clamp(10px, 1.8vw, 22px)', position: 'relative', zIndex: 40, opacity: isReady ? '' : 0 }}
        >
          <p className="text-secondary dark:text-dark-secondary text-sm font-medium tracking-wide">
            based in Kerala, India.
          </p>
          <div className="hidden md:flex items-center gap-4 lg:gap-6 text-secondary dark:text-dark-secondary text-xs italic font-light tracking-wide">
            <a
              href="https://www.linkedin.com/in/hashmil-muhammed08/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary dark:hover:text-dark-primary transition-colors duration-200"
            >
              <FaLinkedin className="text-sm not-italic" /> LinkedIn
            </a>
            <a
              href="https://github.com/Hashmil-Muhammed"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary dark:hover:text-dark-primary transition-colors duration-200"
            >
              <FaGithub className="text-base not-italic" /> GitHub
            </a>
            <a
              href="mailto:hashmilmuhammedparammal@gmail.com"
              className="flex items-center gap-2 hover:text-primary dark:hover:text-dark-primary transition-colors duration-200"
            >
              <MdEmail className="text-base not-italic" /> Email
            </a>
          </div>
        </div>

        {/* ── 4. CTA BUTTONS ────────────────────────────────── */}
        <div
          className={`flex items-center justify-center gap-3 mt-8 mb-4 hero-hidden ${isReady ? 'hero-animate-text' : ''}`}
          style={{ position: 'relative', zIndex: 40, opacity: isReady ? '' : 0 }}
        >
          <a
            href="#about"
            id="cta-ai-builder"
            className="px-7 py-3 bg-primary dark:bg-dark-primary text-white dark:text-dark-bg text-sm font-semibold rounded transition-all duration-200 hover:opacity-80 hover:scale-[0.98] active:scale-95 whitespace-nowrap"
          >
            Explore My Work
          </a>
          <button
            id="cta-resume"
            onClick={() => setShowResume(true)}
            className="px-7 py-3 bg-white dark:bg-transparent text-primary dark:text-dark-primary text-sm font-semibold rounded border border-primary dark:border-dark-border transition-all duration-200 hover:bg-surface dark:hover:bg-dark-surface hover:scale-[0.98] active:scale-95 whitespace-nowrap"
          >
            View Resume
          </button>
        </div>

        {/* ── 5. CORE SKILLS MARQUEE ─────────────────────── */}
        <div className={`w-full mt-6 mb-2 hero-hidden ${isReady ? 'hero-animate-text' : ''}`} style={{ position: 'relative', zIndex: 40, opacity: isReady ? '' : 0 }}>
          <p className="text-center text-xs font-semibold tracking-widest text-secondary dark:text-dark-secondary uppercase mt-4 mb-4">
            Core Expertise
          </p>
          <div className="w-full max-w-4xl mx-auto overflow-hidden mask-edges pb-4">
            <div className="flex w-max animate-marquee-smooth hover:[animation-play-state:paused]" style={{ animationDuration: '70s' }}>
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex shrink-0 items-center justify-start gap-12 pr-12 [&>span]:shrink-0 [&>span>svg]:shrink-0 [&>span]:transform-gpu [&>span]:will-change-transform">
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></svg>
                    Data Cleaning
                  </span>
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                    Exploratory Analysis
                  </span>
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" /></svg>
                    Machine Learning
                  </span>
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                    Forecasting
                  </span>
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><rect x="3" y="9" width="18" height="15" rx="2" ry="2" /><line x1="9" y1="9" x2="9" y2="21" /></svg>
                    Dashboard Design
                  </span>
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.9 1.2 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" /></svg>
                    Business Insights
                  </span>
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                    NLP
                  </span>
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
                    Computer Vision
                  </span>
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="16" y="16" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="9" y="2" width="6" height="6" rx="1" /><path d="M5 16v-3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" /><path d="M12 11V8" /></svg>
                    Deep Learning
                  </span>
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>
                    Python
                  </span>
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
                    TensorFlow / PyTorch
                  </span>
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10a10 10 0 0 0-10-10zm0 15a5 5 0 1 1 5-5a5 5 0 0 1-5 5z" /><path d="M12 8a2.5 2.5 0 1 1 2.5 2.5A2.5 2.5 0 0 1 12 8z" /><path d="M19 12h-4" /></svg>
                    Generative AI
                  </span>
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                    MLOps
                  </span>
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
                    Data Visualization
                  </span>
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
                    Predictive Modeling
                  </span>
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>
                    Big Data
                  </span>
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      <circle cx="9" cy="10" r="1.5" fill="currentColor" />
                      <circle cx="15" cy="10" r="1.5" fill="currentColor" />
                    </svg>
                    LLM
                  </span>
                  {/* <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" /></svg>
                    Reinforcement Learning
                  </span> */}
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19c2-5 4-13 8-13s6 8 8 13" /><line x1="2" y1="19" x2="22" y2="19" /></svg>
                    Statistical Analysis
                  </span>
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="5" width="14" height="14" rx="2" ry="2" /><circle cx="9" cy="9" r="1.5" /><circle cx="15" cy="15" r="1.5" /></svg>
                    Probabilistic Analysis
                  </span>
                  <span className="flex items-center gap-2.5 text-lg md:text-xl font-bold text-gray-500 dark:text-gray-500 cursor-default select-none whitespace-nowrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
                    Feature Engineering
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* ── 6. RESUME MODAL ─────────────────────────────────── */}
      <div className={`fixed inset-0 transition-opacity duration-300 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 ${showResume ? 'opacity-100 pointer-events-auto z-[100]' : 'opacity-0 pointer-events-none z-[-1]'}`}>
        <div className="bg-white dark:bg-dark-bg w-full max-w-5xl h-[90vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden relative">

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
              src="/Hashmil_s_Resume.pdf#toolbar=0&view=FitH"
              className="w-full h-full border-none"
              title="Resume Preview"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
