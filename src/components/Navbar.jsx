import { useState, useEffect, useRef } from 'react';
import { LuSun, LuMoon } from 'react-icons/lu';

const Navbar = ({ darkMode, toggleDark, activeSection, isReady }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const isBottom = window.scrollY >= document.documentElement.scrollHeight - window.innerHeight - 64;
      setIsAtBottom(isBottom);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Exp & Edu', href: '#experience', activeId: 'experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const [logoMenuOpen, setLogoMenuOpen] = useState(false);
  const logoMenuRef = useRef(null);

  const [autoLabel, setAutoLabel] = useState('');
  const [autoVisible, setAutoVisible] = useState(false);
  const [logoRotation, setLogoRotation] = useState(0);

  const prevSectionRef = useRef(activeSection);
  const autoVisibleRef = useRef(autoVisible);
  const autoLabelRef = useRef(autoLabel);
  const logoMenuOpenRef = useRef(logoMenuOpen);

  useEffect(() => {
    autoVisibleRef.current = autoVisible;
    autoLabelRef.current = autoLabel;
    logoMenuOpenRef.current = logoMenuOpen;
  }, [autoVisible, autoLabel, logoMenuOpen]);

  const getAutoLabel = (section) => {
    if (section === 'hero') return '';
    if (section === 'about') return 'About';
    if (section === 'services') return 'Services';
    if (section === 'projects') return 'Projects';
    if (section === 'experience') return 'Career & Edu';
    if (section === 'certifications') return 'Certifications';
    if (section === 'skills') return 'Skills';
    if (section === 'contact') return 'Contact';
    return '';
  };

  useEffect(() => {
    if (activeSection === prevSectionRef.current) return;
    prevSectionRef.current = activeSection;

    if (logoMenuOpenRef.current) return;

    const nextLabel = getAutoLabel(activeSection);

    if (!nextLabel) {
      if (autoVisibleRef.current) {
        setAutoVisible(false);
        setLogoRotation(prev => prev - 180);
        setTimeout(() => setAutoLabel(''), 300);
      }
    } else {
      if (!autoVisibleRef.current) {
        setAutoLabel(nextLabel);
        setAutoVisible(true);
        setLogoRotation(prev => prev + 180);
      } else if (autoLabelRef.current !== nextLabel) {
        // Swap instantly without lag
        setAutoLabel(nextLabel);
        setLogoRotation(prev => prev + 180);
      }
    }
  }, [activeSection]);

  const toggleMenu = () => {
    if (logoMenuOpen) {
      setLogoMenuOpen(false);
      setLogoRotation(prev => prev - 180);
      const nextLabel = getAutoLabel(activeSection);
      if (nextLabel) {
        setTimeout(() => {
          setAutoLabel(nextLabel);
          setAutoVisible(true);
          setLogoRotation(prev => prev + 180);
        }, 300);
      } else {
        setAutoVisible(false);
      }
    } else {
      setLogoMenuOpen(true);
      setAutoVisible(false);
      setLogoRotation(prev => prev + 180);
    }
  };

  useEffect(() => {
    if (!logoMenuOpen) return;
    const handleClickOutside = (event) => {
      if (logoMenuRef.current && !logoMenuRef.current.contains(event.target)) {
        toggleMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [logoMenuOpen, activeSection]);

  return (
    <>
      <style>{`
      @keyframes autoLabelFade {
        0% { opacity: 0; transform: translateY(8px); }
        100% { opacity: 1; transform: translateY(0); }
      }
      .animate-auto-label {
        animation: autoLabelFade 0.25s ease-out forwards;
      }
    `}</style>
      <header className="fixed top-0 left-0 right-0 z-50">
        {/* Scrolled Blur Layer with Mask */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-[1500ms] ease-in-out ${(scrolled && !isAtBottom) ? 'opacity-100' : 'opacity-0'} bg-white/1 dark:bg-dark-bg/1 backdrop-blur-[2px]`}
          style={{
            WebkitMaskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)'
          }}
        />
        {/* Bottom Solid Layer (Completely Transparent Now) */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-[1500ms] ease-in-out opacity-0`}
        />

        <div className={`relative max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between z-10 hero-hidden ${isReady ? 'hero-animate-text' : ''}`} style={{ opacity: isReady ? '' : 0 }}>
          {/* Logo */}
          <a href="/" className="grid items-center cursor-pointer hover:opacity-70 transition-opacity duration-300">
            <img
              src="/logos/logo-transparent.png"
              alt="#MIL Logo"
              className={`row-start-1 col-start-1 h-9 md:h-11 w-auto object-contain transition-opacity duration-[1500ms] ease-in-out ${isAtBottom ? 'opacity-0 pointer-events-none' : 'opacity-100 dark:opacity-0 pointer-events-none dark:pointer-events-auto'}`}
            />
            <img
              src="/logos/logo-transparent-dark.png"
              alt="#MIL Logo Dark"
              className={`row-start-1 col-start-1 h-9 md:h-11 w-auto object-contain transition-opacity duration-[1500ms] ease-in-out ${isAtBottom ? 'opacity-100' : 'opacity-0 dark:opacity-100 pointer-events-none dark:pointer-events-auto'}`}
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Interactive Logo Menu */}
            <div className="relative flex items-center" ref={logoMenuRef}>
              {/* Full Links (Manual) */}
              <div
                className={`flex items-center overflow-hidden transition-all duration-300 ease-out ${logoMenuOpen ? 'max-w-[800px] opacity-100 mr-5 gap-5' : 'max-w-0 opacity-0 mr-0 gap-0'}`}
              >
                {navLinks.map((link) => {
                  const isActive = (link.label === 'About' && (activeSection === 'hero' || activeSection === 'about')) || activeSection === (link.activeId || link.label.toLowerCase());
                  return (
                    <a
                      key={`logo-menu-${link.label}`}
                      href={link.href}
                      onClick={(e) => {
                        if (link.href === '#contact') {
                          e.preventDefault();
                          window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
                        }
                        toggleMenu();
                      }}
                      className={`whitespace-nowrap nav-link text-[12px] font-medium transition-colors duration-[1500ms] ease-in-out ${isActive
                        ? (isAtBottom ? 'text-white' : 'text-primary dark:text-dark-primary')
                        : (isAtBottom ? 'text-white/60 hover:text-white' : 'text-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-dark-primary')
                        }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>

              {/* Single Link (Auto) */}
              <div
                className={`flex items-center overflow-hidden transition-all duration-300 ease-out ${autoVisible && !logoMenuOpen ? 'max-w-[200px] opacity-100 mr-5 gap-5' : 'max-w-0 opacity-0 mr-0 gap-0'}`}
              >
                <span
                  key={autoLabel}
                  className={`whitespace-nowrap text-[12px] font-medium animate-auto-label transition-colors duration-500 ease-out ${isAtBottom ? 'text-white/60' : 'text-black/40 dark:text-white/60'}`}
                >
                  {autoLabel}
                </span>
              </div>

              {/* The Logo */}
              <div
                style={{ transform: `rotate(${logoRotation}deg)` }}
                className="transition-transform duration-500 ease-in-out flex items-center justify-center"
              >
                <img
                  src="/logos/favicon-hashtag.png"
                  alt="Menu Logo"
                  className="w-[18px] h-[18px] md:w-[22px] md:h-[22px] cursor-pointer transition-transform duration-300 ease-out hover:scale-110 hover:drop-shadow-md"
                  onClick={toggleMenu}
                />
              </div>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className={`relative w-11 h-6 rounded-full transition-colors duration-[1500ms] ease-in-out focus:outline-none flex items-center px-1 ${isAtBottom ? 'bg-[#222222]' : 'bg-gray-100 dark:bg-[#222222]'
                }`}
            >
              <div
                className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 shadow-sm ${darkMode ? 'bg-[#111111] translate-x-5' : 'bg-white translate-x-0'
                  }`}
              >
                {darkMode ? (
                  <LuMoon className="text-blue-400 text-xs" strokeWidth={2.5} />
                ) : (
                  <LuSun className="text-amber-500 text-xs" strokeWidth={2.5} />
                )}
              </div>
            </button>

            {/* CTA */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
              }}
              className={`px-3.5 py-1 text-[13px] font-semibold rounded transition-all duration-[1200ms] ease-in-out will-change-auto hover:opacity-80 active:scale-95 ${activeSection === 'hero'
                ? 'opacity-100 pointer-events-auto blur-none scale-100'
                : 'opacity-0 pointer-events-none blur-[2px] scale-[0.98]'
                } ${isAtBottom
                  ? 'bg-white text-[#111111]'
                  : 'bg-primary dark:bg-dark-primary text-white dark:text-dark-bg'
                }`}
            >
              Contact
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-1 transition-colors duration-[1500ms] ease-in-out ${isAtBottom ? 'text-white' : 'text-primary dark:text-dark-primary'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden relative z-10 bg-white dark:bg-dark-surface border-t border-border dark:border-dark-border px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (link.href === '#contact') {
                    e.preventDefault();
                    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
                  }
                  setMenuOpen(false);
                }}
                className="text-sm font-medium text-secondary dark:text-dark-secondary hover:text-primary dark:hover:text-dark-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between pt-2">
              <button onClick={toggleDark} className="flex items-center gap-3 text-sm font-medium text-secondary dark:text-dark-secondary">
                <div className="relative w-11 h-6 rounded-full bg-gray-100 dark:bg-[#222222] transition-colors duration-300 flex items-center px-1">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 shadow-sm ${darkMode ? 'bg-[#111111] translate-x-5' : 'bg-white translate-x-0'
                      }`}
                  >
                    {darkMode ? (
                      <LuMoon className="text-blue-400 text-xs" strokeWidth={2.5} />
                    ) : (
                      <LuSun className="text-amber-500 text-xs" strokeWidth={2.5} />
                    )}
                  </div>
                </div>
                <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
                  setMenuOpen(false);
                }}
                className="px-4 py-1.5 bg-primary dark:bg-dark-primary text-white dark:text-dark-bg text-sm font-semibold rounded"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
