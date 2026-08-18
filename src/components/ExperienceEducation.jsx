import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { educationData, experienceData } from '../data/mockData';

const generateScrollPath = (w, h, mobile, y) => {
  if (!w || !h || !y || y.length < 7) return '';
  const startY = 40; // Starts precisely below the "EDUCATION" text

  if (mobile) {
    const x = 30;
    const a = 20;
    const path = [
      `M ${x},${startY}`,
      `C ${x},${(startY + y[1]) / 2} ${x + a},${(startY + y[1]) / 2} ${x + a},${y[1]}`,
      `C ${x + a},${(y[1] + y[2]) / 2} ${x - a},${(y[1] + y[2]) / 2} ${x - a},${y[2]}`,
      `C ${x - a},${(y[2] + y[3]) / 2} ${x},${(y[2] + y[3]) / 2} ${x},${y[3]}`,
      `C ${x},${(y[3] + y[4]) / 2} ${x + a},${(y[3] + y[4]) / 2} ${x + a},${y[4]}`,
      `C ${x + a},${(y[4] + y[5]) / 2} ${x - a},${(y[4] + y[5]) / 2} ${x - a},${y[5]}`,
      `C ${x - a},${(y[5] + y[6]) / 2} ${x + a},${(y[5] + y[6]) / 2} ${x + a},${y[6]}`
    ];
    if (y.length > 8) {
      path.push(`C ${x + a},${(y[6] + y[7]) / 2} ${x - a},${(y[6] + y[7]) / 2} ${x - a},${y[7]}`);
      path.push(`C ${x - a},${(y[7] + y[8]) / 2} ${x + a},${(y[7] + y[8]) / 2} ${x + a},${y[8]}`);
      path.push(`C ${x + a},${(y[8] + h) / 2} ${x},${(y[8] + h) / 2} ${x},${h}`);
    } else if (y.length > 7) {
      path.push(`C ${x + a},${(y[6] + y[7]) / 2} ${x - a},${(y[6] + y[7]) / 2} ${x - a},${y[7]}`);
      path.push(`C ${x - a},${(y[7] + h) / 2} ${x},${(y[7] + h) / 2} ${x},${h}`);
    } else {
      path.push(`C ${x + a},${(y[6] + h) / 2} ${x},${(y[6] + h) / 2} ${x},${h}`);
    }
    path.push(`L ${x},${h + 150}`);
    return path.join(' ');
  }

  const cx = w * 0.5;
  const r = w * 0.75;
  const l = w * 0.25;

  const path = [
    `M ${cx},${startY}`,
    `C ${cx},${(startY + y[1]) / 2} ${r},${(startY + y[1]) / 2} ${r},${y[1]}`,
    `C ${r},${(y[1] + y[2]) / 2} ${l},${(y[1] + y[2]) / 2} ${l},${y[2]}`,
    `C ${l},${(y[2] + y[3]) / 2} ${cx},${(y[2] + y[3]) / 2} ${cx},${y[3]}`,
    `C ${cx},${(y[3] + y[4]) / 2} ${r},${(y[3] + y[4]) / 2} ${r},${y[4]}`,
    `C ${r},${(y[4] + y[5]) / 2} ${l},${(y[4] + y[5]) / 2} ${l},${y[5]}`,
    `C ${l},${(y[5] + y[6]) / 2} ${r},${(y[5] + y[6]) / 2} ${r},${y[6]}`
  ];

  if (y.length > 8) {
    path.push(`C ${r},${(y[6] + y[7]) / 2} ${l},${(y[6] + y[7]) / 2} ${l},${y[7]}`);
    path.push(`C ${l},${(y[7] + y[8]) / 2} ${r},${(y[7] + y[8]) / 2} ${r},${y[8]}`);
    path.push(`C ${r},${(y[8] + h) / 2} ${cx},${(y[8] + h) / 2} ${cx},${h}`);
  } else if (y.length > 7) {
    path.push(`C ${r},${(y[6] + y[7]) / 2} ${l},${(y[6] + y[7]) / 2} ${l},${y[7]}`);
    path.push(`C ${l},${(y[7] + h) / 2} ${cx},${(y[7] + h) / 2} ${cx},${h}`);
  } else {
    path.push(`C ${r},${(y[6] + h) / 2} ${cx},${(y[6] + h) / 2} ${cx},${h}`);
  }

  path.push(`L ${cx},${h + 150}`);
  return path.join(' ');
};

// Bare-text content block (Masks removed for continuous line flow)
const ContentBlock = ({ data, isActive }) => {
  const isEdu = !!data.degree;
  const title = isEdu ? data.degree : data.role;

  return (
    // Removed z-20 background color caused mask fade
    <div className="flex flex-col w-full max-w-2xl relative z-20 text-gray-950 dark:text-gray-100">
      <div className="mb-1">
        {/* Removed bg color and horizontal padding */}
        <span className="text-sm font-extrabold tracking-[0.2em] uppercase text-red-500 dark:text-red-400 py-0">
          {data.period}
        </span>
      </div>
      <h3
        className={`font-extrabold text-3xl md:text-4xl lg:text-[40px] uppercase mb-4 py-0 transition-all duration-300 ${isActive ? 'text-[#111] dark:text-white [-webkit-text-stroke:2px_#111] dark:[-webkit-text-stroke:2px_#fff] opacity-100' : 'text-outline opacity-30'}`}
        style={{
          fontFamily: '"Syne", "Plus Jakarta Sans", sans-serif',
          lineHeight: 0.92,
          letterSpacing: '-0.03em',
          marginTop: '0.045em',
          position: 'relative',
          zIndex: 30,
        }}
        dangerouslySetInnerHTML={{ __html: title.replace(/\n/g, '<br />') }}
      />
      {/* Removed bg color and horizontal padding */}
      <div
        className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-1 leading-relaxed font-bold py-0"
        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
      >
        {isEdu ? (
          <>
            <span className="block">{data.institution} -</span>
            <span className="block">{data.university}</span>
          </>
        ) : (
          <span className="block">{data.company}</span>
        )}
      </div>
      {/* Removed bg color and horizontal padding */}
      {data.description && (
        <p className="text-sm text-gray-500 dark:text-gray-500 leading-relaxed mb-1 py-0 block w-full text-justify mt-2">
          {data.description}
        </p>
      )}

      {/* List items with no mask */}
      {/* Removed bg color and padding causing breaks */}
      <div className="grid grid-cols-2 gap-4 mt-1 py-0">
        {data.skills ? data.skills.map(skill => (
          <div key={skill} className="flex items-center gap-2 text-sm font-bold text-gray-800 dark:text-gray-200">
            <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
            {skill}
          </div>
        )) : (
          <div className="flex items-center gap-2 text-sm font-bold text-gray-800 dark:text-gray-200">
            <svg className="w-4 h-4 text-red-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
            {data.location}
          </div>
        )}
      </div>
    </div>
  );
};

const ExperienceEducation = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);
  const pathRef = useRef(null);
  const badgeRef = useRef(null);

  const [pathD, setPathD] = useState('');
  const [viewBox, setViewBox] = useState('0 0 0 0');
  const prevDimsRef = useRef({ w: 0, h: 0 });

  const [activeIndex, setActiveIndex] = useState(-1);
  const activeIndexRef = useRef(-1);
  const yOffsetsRef = useRef([]);

  const [expHighlight, setExpHighlight] = useState(false);
  const [eduHighlight, setEduHighlight] = useState(false);
  const [isExpHovered, setIsExpHovered] = useState(false);
  const [isEduHovered, setIsEduHovered] = useState(false);

  const { scrollYProgress: sectionProgress } = useScroll({
    target: sectionRef,
    offset: ['start 90%', 'start 10%']
  });

  useMotionValueEvent(sectionProgress, 'change', (v) => {
    if (v > 0.1 && v <= 0.45) {
      setExpHighlight(true);
      setEduHighlight(false);
    } else if (v > 0.45 && v <= 0.8) {
      setExpHighlight(false);
      setEduHighlight(true);
    } else {
      setExpHighlight(false);
      setEduHighlight(false);
    }
  });

  const [scrollOffset, setScrollOffset] = useState(['start center', window.innerWidth < 768 ? 'end 95%' : 'end 0%']);

  useEffect(() => {
    const handleResize = () => {
      setScrollOffset(['start center', window.innerWidth < 768 ? 'end 95%' : 'end 0%']);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: scrollOffset,
  });

  const updateBadgePosition = useCallback((v) => {
    const path = pathRef.current;
    const badge = badgeRef.current;
    if (!path || !badge) return;

    try {
      const len = path.getTotalLength();
      if (!len) return;
      const clamped = Math.max(0, Math.min(1, v));
      const pt = path.getPointAtLength(clamped * len);

      const lookahead = path.getPointAtLength(Math.min(len, clamped * len + 5));
      const angle = Math.atan2(lookahead.y - pt.y, lookahead.x - pt.x) * (180 / Math.PI);

      badge.style.transform = `translate(${pt.x}px, ${pt.y}px) rotate(${angle}deg)`;

      // Determine active role
      const yOffsets = yOffsetsRef.current;
      let newActiveIndex = -1;

      if (clamped > 0.01) {
        for (let i = yOffsets.length - 1; i >= 0; i--) {
          if (pt.y >= yOffsets[i] - 60) {
            newActiveIndex = i;
            break;
          }
        }
      }

      if (newActiveIndex !== activeIndexRef.current) {
        activeIndexRef.current = newActiveIndex;
        setActiveIndex(newActiveIndex);
      }

    } catch { }
  }, []);

  useMotionValueEvent(scrollYProgress, 'change', updateBadgePosition);

  const recalcPath = useCallback(() => {
    const el = timelineRef.current;
    if (!el) return;
    const h = el.scrollHeight;
    const w = el.scrollWidth;
    const mobile = window.innerWidth < 768;

    // Dynamically calculate exact node Y-centers for perfect mathematical S-curves
    const nodes = Array.from(el.querySelectorAll('.timeline-node'));
    const yOffsets = nodes.map(node => node.offsetTop + (node.offsetHeight / 2));
    yOffsetsRef.current = yOffsets;

    setPathD(generateScrollPath(w, h, mobile, yOffsets));
    setViewBox(`0 0 ${w} ${h}`);
    prevDimsRef.current = { w, h };

    // Place the badge immediately at its correct initial position
    setTimeout(() => {
      const currentProgress = scrollYProgress.get();
      updateBadgePosition(currentProgress || 0);
    }, 50);
  }, [updateBadgePosition, scrollYProgress]);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;
    requestAnimationFrame(recalcPath);
    const ro = new ResizeObserver(() => requestAnimationFrame(recalcPath));
    ro.observe(el);
    return () => ro.disconnect();
  }, [recalcPath]);

  const timeline = [
    { type: 'header', title: 'Education', side: 'center' },
    { type: 'item', kind: 'edu', data: educationData[0], side: 'right' },
    { type: 'item', kind: 'edu', data: educationData[1], side: 'left' },
    { type: 'header', title: 'Experience', side: 'center' },
    { type: 'item', kind: 'exp', data: experienceData[0], side: 'right' },
    { type: 'item', kind: 'exp', data: experienceData[1], side: 'left' },
    { type: 'item', kind: 'exp', data: experienceData[2], side: 'right' },
    // { type: 'item', kind: 'exp', data: experienceData[3], side: 'left' },
    // { type: 'item', kind: 'exp', data: experienceData[4], side: 'right' }
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative pt-32 pb-10 px-6 lg:px-10 bg-[url('/backgrounds/samedha.jpg')] dark:bg-none bg-cover bg-top bg-no-repeat dark:bg-[#080a0e] overflow-x-hidden"
    >
      {/* Semi-transparent overlay to keep text readable over the image */}
      <div className="absolute inset-0 bg-white/20 dark:hidden z-0 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Main Section Header ── */}
        <div className="mb-16 relative z-20 px-6 lg:px-8">
          {/* Standardized Section Indicator (Number + Line) */}
          <div className="flex items-center gap-4 mb-1">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-white dark:text-[#080a0e]" style={{ WebkitTextStroke: '1px #ef4444', textShadow: '2px 2px 0px #ef4444' }}>04.</span>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight text-white dark:text-[#080a0e]" style={{ fontFamily: '"Syne", sans-serif', WebkitTextStroke: '1px #ef4444', textShadow: '3px 3px 0px #ef4444' }}>
              My Professional Journey
            </h2>
          </div>

          {/* Main Hero Style Title with Prefix and Trailing Line */}
          <div className="flex flex-col mb-6 -mt-2 md:-mt-6">
            {/* First Line */}
            <div className="flex items-baseline gap-4 md:gap-6">
              <h2
                className="text-[50px] md:text-[80px] lg:text-[110px] font-black leading-[1.05] tracking-tight"
                style={{ fontFamily: '"Syne", sans-serif' }}
              >
                <span
                  className="py-2 inline-block text-white dark:text-[#080a0e] cursor-default"
                  style={{
                    WebkitTextStroke: '2px #ef4444',
                    textShadow: (isExpHovered || expHighlight) ? '8px 8px 0px #b91c1c' : '8px 8px 0px #ef4444',
                    color: (isExpHovered || expHighlight) ? '#ef4444' : '',
                    transition: 'color 0.4s ease-out, text-shadow 0.4s ease-out'
                  }}
                  onMouseEnter={() => setIsExpHovered(true)}
                  onMouseLeave={() => setIsExpHovered(false)}
                >
                  Experience
                </span>
              </h2>
            </div>

            {/* Second Line */}
            <div className="flex items-center">
              <h2
                className="text-[50px] md:text-[80px] lg:text-[110px] font-black leading-[1.05] tracking-tight shrink-0"
                style={{ fontFamily: '"Syne", sans-serif' }}
              >
                <span
                  className="py-2 inline-block text-white dark:text-[#080a0e] cursor-default"
                  style={{
                    WebkitTextStroke: '2px #ef4444',
                    textShadow: (isEduHovered || eduHighlight) ? '8px 8px 0px #b91c1c' : '8px 8px 0px #ef4444',
                    color: (isEduHovered || eduHighlight) ? '#ef4444' : '',
                    transition: 'color 0.4s ease-out, text-shadow 0.4s ease-out'
                  }}
                  onMouseEnter={() => setIsEduHovered(true)}
                  onMouseLeave={() => setIsEduHovered(false)}
                >
                  &nbsp;&nbsp;&nbsp;&nbsp;& Education
                </span>
              </h2>
              <div className="flex-1 h-px bg-border dark:bg-dark-border ml-4 md:ml-8 hidden sm:block opacity-550 translate-y-2 md:translate-y-3 lg:translate-y-4"></div>
            </div>

          </div>
          <br />
          {/* Subtitle / Quote */}
          <motion.p
            className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-4xl leading-relaxed mb-6 ml-8 md:ml-16"
            style={{ fontFamily: '"Space Grotesk", sans-serif', fontWeight: 600, fontStyle: 'italic', letterSpacing: '0.02em' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ldquo;From foundational theory to production reality <br className="hidden md:block" /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; charting my continuous evolution in AI innovation and scalable software architecture.&rdquo; */}
          </motion.p>
        </div>


        {/* ── Scroll-Driven S-Curve Timeline (No Fading/Masking) ── */}
        <div ref={timelineRef} className="relative mt-12">
          {pathD && (
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox={viewBox} fill="none" style={{ overflow: 'visible' }}>
              <path
                ref={pathRef}
                d={pathD}
                stroke="#ef4444"
                strokeWidth="2.5"
                strokeDasharray="4 8"
                strokeLinecap="round"
              // Removed opacity so it passes uninterrupted through the content
              />
            </svg>
          )}

          {/* Bare Travelling Logo */}
          {pathD && (
            <div
              ref={badgeRef}
              className="absolute z-30 pointer-events-none top-0 left-0"
              style={{ width: 40, height: 40, marginLeft: -20, marginTop: -20, willChange: 'transform' }}
            >
              <img
                src="/logos/favicon-hashtag.png"
                alt="Cursor"
                className="w-full h-full object-contain drop-shadow-xl"
                draggable={false}
              />
            </div>
          )}

          <div className="relative z-10 flex flex-col gap-32 md:gap-48 pt-0 pb-20 px-6 lg:px-8">
            {timeline.map((item, index) => {
              const isCenter = item.side === 'center';
              const isLeft = item.side === 'left';

              // Simplified alignment logic to ensure perfect centering at 25% and 75%
              let alignmentClass = '';
              if (isCenter) {
                alignmentClass = 'justify-center w-full';
              } else if (isLeft) {
                alignmentClass = 'justify-start w-full'; // Hugs the left side
              } else {
                alignmentClass = 'justify-end w-full'; // Hugs the right side
              }

              return (
                <motion.div
                  key={index}
                  className={`timeline-node w-full flex ${alignmentClass} ${index === 3 ? '-my-16 md:-my-20' :
                    index === 1 ? '-mt-16 md:-mt-20' : ''
                    }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-10%' }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  {/* By using w-1/2 and justify-center, the block perfectly aligns with l=0.25 and r=0.75 */}
                  <div className={`flex ${isCenter ? 'w-full justify-center items-center text-center' : 'w-full md:w-1/2 justify-center'}`}>
                    {item.type === 'header' ? (
                      <div className={`relative inline-block px-12 md:px-24 py-4 z-20 ${index === 0 ? '-translate-y-1/2' : ''}`}>
                        <h3
                          className={`text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-[0.1em] transition-colors duration-500 ${index <= activeIndex ? 'text-[#ef4444]' : 'text-transparent'
                            }`}
                          style={{
                            fontFamily: '"Syne", sans-serif',
                            WebkitTextStroke: '2px #ef4444'
                          }}
                        >
                          {item.title}
                        </h3>
                      </div>
                    ) : (
                      <div className="ml-4 md:ml-8 lg:ml-12">
                        <ContentBlock data={item.data} kind={item.kind} isActive={index <= activeIndex} />
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceEducation;