import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import ExperienceEducation from './components/ExperienceEducation';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './index.css';


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    document.fonts.ready.then(() => setIsReady(true));
  }, []);

  // Dark mode persistence
  useEffect(() => {
    const saved = localStorage.getItem('hm-dark-mode');
    if (saved === 'true') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDark = () => {
    const next = !darkMode;
    setDarkMode(next);
    localStorage.setItem('hm-dark-mode', next.toString());
    if (next) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Active section tracking for nav (Robust Scroll-based)
  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'projects', 'experience', 'certifications', 'skills', 'contact-trigger'];
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = scrollY + window.innerHeight * 0.65; // Trigger early as soon as section enters screen
      
      let currentSection = 'hero';
      
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + scrollY;
          if (triggerPoint >= top - 50) { // 50px buffer
            currentSection = id === 'contact-trigger' ? 'contact' : id;
          }
        }
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount after a short delay to ensure layout is settled
    const timeoutId = setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={`min-h-screen font-sans bg-transparent ${darkMode ? 'dark' : ''}`}>
      <Navbar darkMode={darkMode} toggleDark={toggleDark} activeSection={activeSection} isReady={isReady} />
      
      <main className="relative w-full bg-transparent">
        
        {/* 1. FOREGROUND LAYER (Contains everything including Skills) */}
        {/* The mb-[100vh] creates a transparent "hole" at the very bottom of the scrollable page to reveal the footer */}
        <div className="relative z-10 w-full bg-white dark:bg-[#0a0a0a] shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-[100vh]">
          <Hero isReady={isReady} />
          <About />
          <Services />
          <Projects />
          <ExperienceEducation />
          <Certifications />
          <Skills />
          {/* Invisible trigger for Contact section */}
          <div id="contact-trigger" className="absolute bottom-0 translate-y-full w-full h-[50vh] pointer-events-none" />
        </div>

        {/* 2. BACKGROUND REVEAL LAYER (Contact Section) */}
        {/* Fixed to the bottom of the screen, behind the foreground content */}
        <div className="fixed bottom-0 left-0 w-full h-screen z-0">
          <div className="h-full w-full">
            <Contact />
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
