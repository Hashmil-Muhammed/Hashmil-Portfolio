import { useEffect, useRef } from 'react';
import { servicesData } from '../data/mockData';
import { LuBrainCircuit, LuCodeXml, LuChartBar } from 'react-icons/lu';

const Services = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.section-fade');
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative pt-12 md:pt-16 pb-24 px-6 lg:px-10 bg-surface dark:bg-dark-surface overflow-hidden z-0 portrait-zoom-about"
    >
      <div
        className="absolute inset-0 -z-10 pointer-events-none transition-all duration-700 dark:opacity-0"
        style={{ backgroundImage: "url('/backgrounds/samedha.jpg')", backgroundSize: "170%", backgroundPosition: "left top", backgroundAttachment: "fixed" }}
      />

      {/* Subtle Background Glow (Matches Contact Page in Dark Mode) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-700 -z-10"></div>
      {/* Decorative Leaf Asset (Anchored perfectly to Bottom-Left) */}
      {/* <img
        src="/elements/planto2.png"
        alt="Decorative Leaf"
        className="absolute bottom-28 left-0 w-48 md:w-64 lg:w-96 -translate-x-1/4 translate-y-1/4 pointer-events-none z-0 dark:opacity-80 dark:brightness-90"
      /> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="section-fade mb-10 md:mb-12 relative z-10 flex flex-col items-center justify-center text-center w-full">
          <div className="inline-flex items-center gap-4 group cursor-default transition-all duration-500 ease-out hover:translate-x-3 hover:scale-[1.02] origin-left">
            <span className="text-sm font-normal tracking-[0.2em] text-transparent dark:text-gray-500 bg-clip-text bg-[url('/backgrounds/samedha.jpg')] dark:bg-[none] bg-cover bg-center drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)] dark:drop-shadow-none uppercase">02.</span>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight flex items-center justify-start"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              <span className="text-transparent dark:text-gray-500 bg-clip-text bg-[url('/backgrounds/samedha.jpg')] dark:bg-[none] bg-cover bg-center [filter:drop-shadow(-1px_-1px_1px_rgba(255,255,255,1))_drop-shadow(3px_5px_8px_rgba(0,0,0,0.4))] dark:[filter:none]">
                What I can do for you
              </span>

            </h2>
          </div>
        </div>
        {/* Premium Cards Grid (Glassmorphism, Colored Underlines, 2-Column Tags) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-12">
          {servicesData.map((service, index) => {
            // Icons
            const PremiumIcons = [LuBrainCircuit, LuCodeXml, LuChartBar];
            const Icon = PremiumIcons[index] || LuCodeXml;

            const topTags = ['CORE', 'WEB', 'DATA'];
            const TopTag = topTags[index];

            // Accent Colors for tags and underlines
            const accentTextColors = ['text-pink-500', 'text-blue-500', 'text-orange-500'];
            const accentBorderColors = ['border-pink-500/30', 'border-blue-500/30', 'border-orange-500/30'];
            const titleUnderlineColors = ['border-pink-500', 'border-blue-600', 'border-orange-500'];

            const AccentText = accentTextColors[index] || 'text-primary';
            const AccentBorder = accentBorderColors[index] || 'border-primary/30';
            const TitleUnderline = titleUnderlineColors[index] || 'border-primary';

            const titleWords = service.title.split(' ');
            const topTitle = titleWords.slice(0, -1).join(' ');
            const bottomTitle = titleWords[titleWords.length - 1];

            // Injecting extra skills to fill the right column
            const extraSkillsList = [
              ['TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn'],
              ['JavaScript', 'HTML/CSS', 'Flask', 'SQL'],
              ['Excel', 'Dashboard design', 'Statistics', 'Data Cleaning']
            ];
            const allTags = [...service.tags, ...(extraSkillsList[index] || [])];

            return (
              <div
                key={service.id}
                className="section-fade flex flex-col p-8 rounded-2xl bg-white dark:bg-[#0d0f14]/90 dark:backdrop-blur-xl border border-gray-100 dark:border-gray-800/80 hover:dark:border-gray-600/80 shadow-sm hover:shadow-lg dark:shadow-none transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Subtle Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent dark:from-white/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="text-4xl text-gray-800 dark:text-gray-200">
                    <Icon strokeWidth={1.5} />
                  </div>
                  <span className={`text-[10px] font-bold tracking-wider px-2 py-1 rounded border ${AccentBorder} ${AccentText} bg-gray-50 dark:bg-black/20`}>
                    {TopTag}
                  </span>
                </div>

                <div className="mb-6 flex flex-col items-start relative z-10">
                  <span className={`text-xl lg:text-2xl font-bold text-black dark:text-white leading-none border-b-4 ${TitleUnderline} pb-1 w-max`} style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                    {topTitle}
                  </span>
                  <span className="text-xl lg:text-2xl font-bold text-black dark:text-white leading-tight mt-1.5" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}>
                    {bottomTitle}
                  </span>
                </div>

                <div className="font-mono text-sm mb-8 flex-1 relative z-10">
                  <div className="text-gray-400 dark:text-gray-600 mb-2 select-none">&lt;h3&gt;</div>
                  <div className="border-l-2 border-gray-300 dark:border-gray-700 pl-4 py-1 text-gray-600 dark:text-gray-400 leading-relaxed">
                    {service.description}
                  </div>
                  <div className="text-gray-400 dark:text-gray-600 mt-2 select-none">&lt;/h3&gt;</div>
                </div>

                {/* 2-Column Tags Grid */}
                <div className="grid grid-cols-2 gap-x-2 gap-y-3 border-t border-gray-100 dark:border-gray-800/50 pt-6 relative z-10">
                  {allTags.map((tag, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-current shrink-0 ${AccentText}`}></div>
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-400 truncate">
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
