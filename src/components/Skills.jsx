import { useState, useMemo, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

/* ─── Animated Counter (counts up when in view) ─── */
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

import {
  LuSearch, LuX, LuSparkles, LuCodeXml, LuServer, LuNetwork,
  LuBrainCircuit, LuChartBar, LuTable, LuDatabase, LuWrench,
  LuUsers, LuTerminal, LuWorkflow, LuGraduationCap, LuZap,
  LuBoxes, LuLightbulb, LuActivity, LuRefreshCw, LuGauge,
  LuScan, LuBinary, LuBuilding2, LuCheckCheck, LuLayers,
  LuGlobe, LuSlidersHorizontal, LuCpu, LuFlame, LuRocket,
  LuMessageSquare, LuHandshake, LuFocus, LuPuzzle
} from "react-icons/lu";

import {
  SiPython, SiJavascript, SiHtml5, SiReact, SiDjango,
  SiFlask, SiFastapi, SiPytorch, SiTensorflow, SiKeras,
  SiHuggingface, SiPandas, SiNumpy, SiScikitlearn,
  SiOpencv, SiPostgresql, SiMysql, SiSqlite,
  SiGit, SiGithub, SiDocker, SiJupyter, SiPycharm, SiGoogle,
  SiTailwindcss, SiGooglecolab, SiPostman, SiVercel,
  SiStreamlit, SiBootstrap
} from "react-icons/si";

import { VscAzure } from "react-icons/vsc";

import { FaCss3Alt } from "react-icons/fa";

/* ─── Vector Brand Icons ─── */
const PythonIcon = ({ className = "w-8 h-8" }) => (
  <svg className={`${className} shrink-0`} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
    <linearGradient id="python-original-a" gradientUnits="userSpaceOnUse" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#5A9FD4"/>
      <stop offset="1" stopColor="#306998"/>
    </linearGradient>
    <linearGradient id="python-original-b" gradientUnits="userSpaceOnUse" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
      <stop offset="0" stopColor="#FFD43B"/>
      <stop offset="1" stopColor="#FFE873"/>
    </linearGradient>
    <path fill="url(#python-original-a)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z" transform="translate(0 10.26)"/>
    <path fill="url(#python-original-b)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z" transform="translate(0 10.26)"/>
    <radialGradient id="python-original-c" cx="1825.678" cy="444.45" r="26.743" gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)" gradientUnits="userSpaceOnUse">
      <stop offset="0" stopColor="#B8B8B8" stopOpacity=".498"/>
      <stop offset="1" stopColor="#7F7F7F" stopOpacity="0"/>
    </radialGradient>
    <path opacity=".444" fill="url(#python-original-c)" d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"/>
  </svg>
);

const CssIcon = ({ className = "w-8 h-8" }) => <FaCss3Alt className={`${className} text-[#1572B6] shrink-0`} />;

const VscodeIcon = ({ className = "w-8 h-8" }) => (
  <svg className={`${className} text-[#007ACC] shrink-0`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.276A1 1 0 0 0 .3 8.709L4.08 12 .3 15.291a1 1 0 0 0 .027 1.433l1.322 1.217a1 1 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.94-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zM18 17.567l-6.845-5.567L18 6.433v11.134z" />
  </svg>
);

const PowerBiIcon = ({ className = "w-8 h-8" }) => (
  <svg className={`${className} text-[#F2C811] shrink-0`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17 2h5v20h-5V2zm-7 6h5v14h-5V8zM3 14h5v8H3v-8z" />
  </svg>
);

const ExcelIcon = ({ className = "w-8 h-8" }) => (
  <svg className={`${className} text-[#217346] shrink-0`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.17 3.25L13.83.67A1.5 1.5 0 0 0 12 2.08V21.92a1.5 1.5 0 0 0 1.83 1.41l7.34-2.58A1.5 1.5 0 0 0 22.25 19.33V4.67a1.5 1.5 0 0 0-1.08-1.42zM10.5 4H3.5A1.5 1.5 0 0 0 2 5.5v13A1.5 1.5 0 0 0 3.5 20h7V4zm-3.2 11.2l-1.3-2.2-1.3 2.2H3.1l2.1-3.2-2-3h1.6l1.2 2 1.2-2h1.6l-2 3 2.1 3.2h-1.6z" />
  </svg>
);

const MatplotlibIcon = ({ className = "w-8 h-8" }) => (
  <svg className={`${className} text-[#11557C] shrink-0`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.894 13.916c-.075.056-.164.07-.253.078h-.028a1.2 1.2 0 0 1-.365-.028c-.028-.014-.07-.014-.098-.028-.014-.014-.028-.014-.042-.028-.183-.169-.323-.393-.323-.745 0-.253.084-.52.267-.759.183-.239.464-.464.787-.717.323-.253.717-.534 1.124-.843.408-.309.843-.66 1.251-1.04.408-.38.801-.787 1.124-1.208.323-.422.562-.843.688-1.251l.014-.028h2.081c-.112.562-.351 1.096-.717 1.63-.365.534-.787.983-1.25 1.405-.464.422-.927.801-1.363 1.152-.436.351-.843.66-1.18.941-.337.281-.604.534-.759.703a1.44 1.44 0 0 1-.393.267c.014.014.014.014.028.028a.43.43 0 0 0 .126.042c.042.014.084.028.14.028.084.014.169.014.281.014.225 0 .548-.056.927-.14 1.462-.281 3.528-.97 4.962-1.742a12 12 0 0 1 1.096-.548c-.014-.028-.028-.056-.056-.098a5.2 5.2 0 0 0-.211-.323 10.4 10.4 0 0 0-.548-.688 12.6 12.6 0 0 0-.913-.913c-.351-.295-.745-.59-1.18-.843-.436-.253-.885-.478-1.335-.632l.745-1.926c.464.126.941.323 1.405.59.464.267.913.59 1.321.941.408.351.787.73 1.11 1.11.323.38.59.745.773 1.082l.028.042v-.014l-.014-.014c.267.351.534.688.787 1.012.253.323.534.66.759.983a9.4 9.4 0 0 1 1.11 2.292l-1.912.759c-.098-.365-.253-.745-.436-1.096a6 6 0 0 0-.618-.941 7.1 7.1 0 0 0-.801-.843c-.281-.253-.59-.492-.885-.717-.295-.225-.618-.422-.913-.618a8.3 8.3 0 0 0-1.785-.885l-.014.014v.028c-1.391.759-3.416 1.405-4.849 1.701-.393.084-.759.14-1.082.169-.323.028-.618.042-.871.042-.323 0-.604-.014-.857-.084-.253-.07-.464-.169-.604-.295-.14-.126-.239-.281-.295-.45a1.2 1.2 0 0 1-.028-.464zm4.4-7.514a3.1 3.1 0 0 0 .197-.815 3.3 3.3 0 0 0 .042-.829c-.014-.281-.056-.562-.126-.829a2.7 2.7 0 0 0-.323-.773c-.028-.028-.056-.07-.098-.098-.028-.014-.056-.028-.084-.028l-.056.028-.028.028a.54.54 0 0 0-.056.126 1.2 1.2 0 0 0-.042.239c-.014.098-.014.211-.014.337v.393c0 .281.014.576.056.885.042.309.112.59.211.857.098.267.225.506.393.703a1.4 1.4 0 0 0 .337.281l1.729-1.251a3.1 3.1 0 0 1-.365-.45 2.1 2.1 0 0 1-.309-.646c-.084-.267-.14-.548-.155-.871-.014-.323 0-.646.042-.983.042-.337.112-.66.239-.956.126-.295.267-.534.464-.703.197-.169.436-.267.703-.267.267 0 .534.056.787.169.253.112.492.295.703.52.211.225.393.492.534.787.14.295.225.618.281.97.056.351.056.717.028 1.096-.028.38-.084.759-.169 1.138-.084.38-.197.745-.337 1.082l-1.855-.871c.07-.155.14-.309.197-.478.056-.169.112-.351.14-.534.028-.183.056-.393.056-.59V3.882c0-.183-.014-.351-.042-.506-.028-.155-.07-.281-.14-.38-.07-.098-.169-.169-.295-.197-.126-.028-.281-.014-.45.028-.169.042-.337.126-.506.239-.169.112-.323.267-.45.45-.126.183-.239.393-.337.618-.098.225-.155.492-.197.773-.042.281-.056.576-.056.885v.983c0 .351.014.73.056 1.11.042.38.126.773.239 1.152l-1.841-.632zm6.738.998c.197-.042.365-.098.534-.183.169-.084.309-.169.436-.281.126-.112.211-.239.267-.393.056-.155.07-.337.042-.548-.028-.211-.084-.436-.169-.675-.084-.239-.211-.478-.365-.73-.155-.253-.337-.506-.534-.73-.197-.225-.422-.45-.66-.646l.73-1.897c.309.267.618.548.913.857.295.309.562.646.801.998.239.351.45.717.604 1.096.155.38.253.773.281 1.18.028.408 0 .801-.112 1.18-.112.38-.281.717-.506.983-.225.267-.492.478-.815.632-.323.155-.66.239-1.012.253-.351.014-.717-.014-1.068-.112l.632-1.912zm-.309 6.275c-.323 0-.646-.028-.97-.084-.323-.056-.632-.14-.941-.267-.309-.126-.59-.281-.843-.45-.253-.169-.478-.38-.675-.618-.197-.239-.365-.506-.478-.801-.112-.295-.197-.618-.211-.941-.014-.323.014-.66.084-.97l1.785.408c-.028.169-.028.323-.014.464.014.14.042.267.098.38.056.112.126.197.225.267.098.07.211.112.337.14.126.028.267.014.436-.028.169-.042.337-.098.534-.183.197-.084.393-.211.604-.337.211-.126.436-.295.66-.464l1.208 1.49c-.281.253-.59.492-.913.703-.323.211-.66.408-.998.562-.337.155-.675.281-1.012.365-.337.084-.646.126-.913.126z" />
  </svg>
);

/* ─── Pure Skills & Brand Logos (No Cards, No Descriptions) ─── */
const PURE_SKILLS = [
  // ── Languages
  { name: "Python", category: "Languages", color: "#3776AB", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <PythonIcon className={sz} /> },
  { name: "SQL", category: "Languages", color: "#00758F", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuDatabase className={`${sz} text-[#00758F]`} /> },
  { name: "JavaScript", category: "Languages", color: "#F7DF1E", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiJavascript className={`${sz} text-[#F7DF1E]`} /> },
  { name: "HTML5", category: "Languages", color: "#E34F26", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiHtml5 className={`${sz} text-[#E34F26]`} /> },
  { name: "CSS3", category: "Languages", color: "#1572B6", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <CssIcon className={sz} /> },

  // ── Frontend
  { name: "React.js", category: "Frontend", color: "#61DAFB", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiReact className={`${sz} text-[#61DAFB]`} /> },
  { name: "Tailwind CSS", category: "Frontend", color: "#06B6D4", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiTailwindcss className={`${sz} text-[#06B6D4]`} /> },
  { name: "Bootstrap", category: "Frontend", color: "#7952B3", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiBootstrap className={`${sz} text-[#7952B3]`} /> },
  { name: "Responsive UI", category: "Frontend", color: "#06B6D4", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuSlidersHorizontal className={`${sz} text-[#06B6D4]`} /> },
  { name: "Google ADK", category: "Frontend", color: "#4285F4", level: "Intermediate", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiGoogle className={`${sz} text-[#4285F4]`} /> },
  { name: "MCP", category: "Frontend", color: "#8B5CF6", level: "Intermediate", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuNetwork className={`${sz} text-[#8B5CF6]`} /> },

  // ── Backend & APIs
  { name: "Django", category: "Backend", color: "#2BA977", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiDjango className={`${sz} text-[#092E20] dark:text-[#2BA977]`} /> },
  { name: "FastAPI", category: "Backend", color: "#009688", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiFastapi className={`${sz} text-[#009688]`} /> },
  { name: "Flask", category: "Backend", color: "#71717A", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiFlask className={`${sz} text-gray-800 dark:text-gray-200`} /> },
  { name: "REST APIs", category: "Backend", color: "#8B5CF6", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuWorkflow className={`${sz} text-[#8B5CF6]`} /> },
  { name: "API Design", category: "Backend", color: "#A855F7", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuLayers className={`${sz} text-[#A855F7]`} /> },
  { name: "Third-Party APIs", category: "Backend", color: "#3B82F6", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuGlobe className={`${sz} text-[#3B82F6]`} /> },

  // ── AI & Machine Learning
  { name: "PyTorch", category: "AI & ML", color: "#EE4C2C", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiPytorch className={`${sz} text-[#EE4C2C]`} /> },
  { name: "TensorFlow", category: "AI & ML", color: "#FF6F00", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiTensorflow className={`${sz} text-[#FF6F00]`} /> },
  { name: "Keras", category: "AI & ML", color: "#D00000", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiKeras className={`${sz} text-[#D00000]`} /> },
  { name: "Hugging Face", category: "AI & ML", color: "#FFD21E", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiHuggingface className={`${sz} text-[#FFD21E]`} /> },
  { name: "NLP", category: "AI & ML", color: "#EC4899", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuBrainCircuit className={`${sz} text-[#EC4899]`} /> },
  { name: "CNNs", category: "AI & ML", color: "#FB7185", level: "Intermediate", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuScan className={`${sz} text-[#FB7185]`} /> },
  { name: "Machine Learning", category: "AI & ML", color: "#3B82F6", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuCpu className={`${sz} text-[#3B82F6]`} /> },
  { name: "Deep Learning", category: "AI & ML", color: "#6366F1", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuBrainCircuit className={`${sz} text-[#6366F1]`} /> },

  // ── Data Science & Tools
  { name: "Pandas", category: "Data Science", color: "#E70488", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiPandas className={`${sz} text-[#150458] dark:text-[#E70488]`} /> },
  { name: "NumPy", category: "Data Science", color: "#4DABCF", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiNumpy className={`${sz} text-[#013243] dark:text-[#4DABCF]`} /> },
  { name: "Scikit-Learn", category: "Data Science", color: "#F7931E", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiScikitlearn className={`${sz} text-[#F7931E]`} /> },
  { name: "OpenCV", category: "Data Science", color: "#5C3EE8", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiOpencv className={`${sz} text-[#5C3EE8]`} /> },
  { name: "Streamlit", category: "Data Science", color: "#FF4B4B", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiStreamlit className={`${sz} text-[#FF4B4B]`} /> },
  { name: "Matplotlib", category: "Data Science", color: "#11557C", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <MatplotlibIcon className={sz} /> },
  { name: "Seaborn", category: "Data Science", color: "#4C72B0", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuActivity className={`${sz} text-[#4C72B0]`} /> },
  { name: "Power BI", category: "Data Science", color: "#F2C811", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <PowerBiIcon className={sz} /> },
  { name: "MS Excel", category: "Data Science", color: "#217346", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <ExcelIcon className={sz} /> },
  { name: "ETL Pipelines", category: "Data Science", color: "#0EA5E9", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuWorkflow className={`${sz} text-[#0EA5E9]`} /> },
  { name: "Feature Engineering", category: "Data Science", color: "#2563EB", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuBinary className={`${sz} text-[#2563EB]`} /> },
  { name: "Data Cleaning", category: "Data Science", color: "#1D4ED8", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuSparkles className={`${sz} text-[#1D4ED8]`} /> },

  // ── Databases
  { name: "PostgreSQL", category: "Databases", color: "#336791", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiPostgresql className={`${sz} text-[#336791]`} /> },
  { name: "MySQL", category: "Databases", color: "#4479A1", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiMysql className={`${sz} text-[#4479A1]`} /> },
  { name: "SQLite", category: "Databases", color: "#4299E1", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiSqlite className={`${sz} text-[#003B57] dark:text-[#4299E1]`} /> },
  { name: "Database Design", category: "Databases", color: "#6366F1", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuBoxes className={`${sz} text-[#6366F1]`} /> },

  // ── Developer Tools
  { name: "Docker", category: "Tools", color: "#2496ED", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiDocker className={`${sz} text-[#2496ED]`} /> },
  { name: "Azure", category: "Tools", color: "#0089D6", level: "Intermediate", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <VscAzure className={`${sz} text-[#0089D6]`} /> },
  { name: "Git", category: "Tools", color: "#F05032", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiGit className={`${sz} text-[#F05032]`} /> },
  { name: "GitHub", category: "Tools", color: "#8B5CF6", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiGithub className={`${sz} text-gray-800 dark:text-white`} /> },
  { name: "VS Code", category: "Tools", color: "#007ACC", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <VscodeIcon className={sz} /> },
  { name: "Postman", category: "Tools", color: "#FF6C37", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiPostman className={`${sz} text-[#FF6C37]`} /> },
  { name: "Vercel", category: "Tools", color: "#000000", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiVercel className={`${sz} text-black dark:text-white`} /> },
  { name: "Jupyter", category: "Tools", color: "#F37626", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiJupyter className={`${sz} text-[#F37626]`} /> },
  { name: "Google Colab", category: "Tools", color: "#F9AB00", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiGooglecolab className={`${sz} text-[#F9AB00]`} /> },
  { name: "PyCharm", category: "Tools", color: "#000000", level: "Advanced", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <SiPycharm className={`${sz} text-black dark:text-white`} /> },

  // ── Soft Skills / Mindset
  { name: "Problem Solving", category: "Soft Skills", color: "#F59E0B", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuPuzzle className={`${sz} text-[#F59E0B]`} /> },
  { name: "Good Communication", category: "Soft Skills", color: "#10B981", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuMessageSquare className={`${sz} text-[#10B981]`} /> },
  { name: "Team Collaboration", category: "Soft Skills", color: "#8B5CF6", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuHandshake className={`${sz} text-[#8B5CF6]`} /> },
  { name: "Attention to Detail", category: "Soft Skills", color: "#06B6D4", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuFocus className={`${sz} text-[#06B6D4]`} /> },
  { name: "Quick Learning", category: "Soft Skills", color: "#EAB308", level: "Expert", renderIcon: (sz = "w-8 h-8 sm:w-9 sm:h-9") => <LuZap className={`${sz} text-[#EAB308]`} /> },
];

/* ─── Category Filter Tabs ─── */
const CATEGORIES = [
  { id: "all", label: "All Skills" },
  { id: "AI & ML", label: "AI & Machine Learning" },
  { id: "Backend", label: "Backend & APIs" },
  { id: "Languages", label: "Languages" },
  { id: "Frontend", label: "Frontend" },
  { id: "Data Science", label: "Data Science & Analytics" },
  { id: "Databases", label: "Databases" },
  { id: "Tools", label: "Dev Tools" },
  { id: "Soft Skills", label: "Soft Skills" },
];

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-80px" });
  const galleryRef = useRef(null);
  const galleryInView = useInView(galleryRef, { once: true, margin: "-60px" });
  const searchRef = useRef(null);

  const totalSkillsCount = PURE_SKILLS.length;

  // Keyboard shortcut: "/" to focus search, Escape to clear
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '/' && document.activeElement !== searchRef.current) {
        e.preventDefault();
        searchRef.current?.focus();
      }
      if (e.key === 'Escape') {
        setSearchQuery('');
        setSelectedCategory('all');
        searchRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter skills by category & search
  const filteredSkills = useMemo(() => {
    let list = PURE_SKILLS;
    if (selectedCategory !== "all") {
      list = list.filter((s) => s.category === selectedCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (s) =>
          s.name.toLowerCase().includes(q) ||
          s.category.toLowerCase().includes(q)
      );
    }
    return list;
  }, [selectedCategory, searchQuery]);

  return (
    <section
      id="skills"
      className="relative pt-12 md:pt-16 pb-14 px-5 lg:px-12 bg-no-repeat text-gray-900 dark:text-white overflow-hidden transition-colors duration-500 h-full min-h-screen flex flex-col justify-center"
    >
      <div 
        className="absolute inset-0 -z-10 pointer-events-none transition-all duration-700 dark:opacity-20 dark:brightness-150"
        style={{ backgroundImage: "url('/backgrounds/samedha.jpg')", backgroundSize: "170%", backgroundPosition: "left top", backgroundAttachment: "fixed" }}
      />
      {/* Light mode overlay */}
      <div className="absolute inset-0 bg-white/20 dark:hidden z-0 pointer-events-none"></div>
      {/* Dark mode — fully solid dark background */}
      <div className="absolute inset-0 hidden dark:block bg-[#07070A] z-0 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── PREMIUM EDITORIAL HEADER ── */}
        <div ref={headerRef} className="mb-10 relative z-20">

          {/* Top Row: Section number + title + divider */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            <span 
              className="text-sm font-bold tracking-[0.2em] uppercase text-white dark:text-[#0A0A0D] skills-title-sm" 
            >
              06.
            </span>
            <h2
              className="text-5xl md:text-6xl font-black tracking-tight"
              style={{ fontFamily: '"Syne", sans-serif' }}
            >
              <span 
                className="py-1 inline-block text-white dark:text-[#0A0A0D] cursor-default skills-title-lg"
              >
                Skills Suite
              </span>
            </h2>
            <div className="flex-1 h-px bg-gray-200 dark:bg-white/20 ml-4 hidden sm:block"></div>
            <a
              href="https://github.com/Hashmil-Muhammed"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 transition-all text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white group"
              style={{ fontFamily: '"Space Grotesk",sans-serif' }}
            >
              <SiGithub className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Explore GitHub</span>
            </a>
          </motion.div>

          {/* Main Title Block */}
          <div className="relative mb-6 overflow-hidden">
            {/* Giant background number watermark */}
            <span
              className="absolute -top-4 -left-2 text-[120px] md:text-[180px] font-black leading-none text-gray-100 dark:text-white/[0.03] select-none pointer-events-none z-0"
              style={{ fontFamily: '"Syne", sans-serif' }}
              aria-hidden="true"
            >
              06
            </span>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative z-10"
            >
              {/* Line 1: Outlined word */}
              {/* <h2
                className="text-[52px] sm:text-[72px] md:text-[96px] lg:text-[120px] font-black leading-[0.9] tracking-tight"
                style={{
                  fontFamily: '"Syne", sans-serif',
                  WebkitTextStroke: '2px currentColor',
                  color: 'transparent',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                <span className="text-gray-900 dark:text-white" style={{ WebkitTextStroke: '2px', WebkitTextFillColor: 'transparent' }}>
                  Tools &
                </span>
              </h2> */}
              {/* Line 2: Solid filled word */}
              {/* <h2
                className="text-[52px] sm:text-[72px] md:text-[96px] lg:text-[120px] font-black leading-[0.9] tracking-tight text-gray-900 dark:text-white pl-4 md:pl-10"
                style={{ fontFamily: '"Syne", sans-serif' }}
              >
                Technologies
                <span className="text-red-500">.</span>
              </h2> */}
            </motion.div>
          </div>

          {/* ── Minimalist Tech Metric Strip (Boxless Icons) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 sm:gap-6 flex-wrap text-sm"
          >
            {/* Metric 1: Tools */}
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center gap-2 cursor-default group"
            >
              <LuWrench className="w-4 h-4 text-red-500 shrink-0 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
              <span className="font-mono font-black text-sm sm:text-base text-gray-900 dark:text-white tracking-tight group-hover:text-red-500 transition-colors duration-300"><AnimatedCounter target={PURE_SKILLS.length} suffix="+" /></span>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">Tools</span>
            </motion.div>

            <span className="hidden sm:inline text-gray-300 dark:text-white/20 select-none">•</span>

            {/* Metric 2: Domains */}
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center gap-2 cursor-default group"
            >
              <LuLayers className="w-4 h-4 text-red-500 shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-mono font-black text-sm sm:text-base text-gray-900 dark:text-white tracking-tight group-hover:text-red-500 transition-colors duration-300">8</span>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">Domains</span>
            </motion.div>

            <span className="hidden sm:inline text-gray-300 dark:text-white/20 select-none">•</span>

            {/* Metric 3: Frameworks */}
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center gap-2 cursor-default group"
            >
              <LuCodeXml className="w-4 h-4 text-red-500 shrink-0 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300" />
              <span className="font-mono font-black text-sm sm:text-base text-gray-900 dark:text-white tracking-tight group-hover:text-red-500 transition-colors duration-300"><AnimatedCounter target={15} suffix="+" /></span>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">Frameworks</span>
            </motion.div>

            <span className="hidden sm:inline text-gray-300 dark:text-white/20 select-none">•</span>

            {/* Metric 4: Projects */}
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center gap-2 cursor-default group"
            >
              <LuRocket className="w-4 h-4 text-red-500 shrink-0 group-hover:scale-110 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              <span className="font-mono font-black text-sm sm:text-base text-gray-900 dark:text-white tracking-tight group-hover:text-red-500 transition-colors duration-300"><AnimatedCounter target={10} suffix="+" /></span>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">Projects</span>
            </motion.div>

            <span className="hidden sm:inline text-gray-300 dark:text-white/20 select-none">•</span>

            {/* Metric 5: AI Models */}
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center gap-2 cursor-default group"
            >
              <LuBrainCircuit className="w-4 h-4 text-red-500 shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
              <span className="font-mono font-black text-sm sm:text-base text-gray-900 dark:text-white tracking-tight group-hover:text-red-500 transition-colors duration-300"><AnimatedCounter target={12} suffix="+" /></span>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">AI Models</span>
            </motion.div>


            <span className="hidden sm:inline text-gray-300 dark:text-white/20 select-none">•</span>

            {/* Metric 7: APIs */}
            <motion.div 
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center gap-2 cursor-default group"
            >
              <LuNetwork className="w-4 h-4 text-red-500 shrink-0 group-hover:scale-110 group-hover:rotate-180 transition-transform duration-500" />
              <span className="font-mono font-black text-sm sm:text-base text-gray-900 dark:text-white tracking-tight group-hover:text-red-500 transition-colors duration-300"><AnimatedCounter target={20} suffix="+" /></span>
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">APIs</span>
            </motion.div>
          </motion.div>

        </div>

        {/* ═════════════════════════════════════════════════════════════════ */}
        {/* PURE LOGOS SHOWCASE (NO CARDS, NO DESCRIPTIONS, 100% CLEAN)       */}
        {/* ═════════════════════════════════════════════════════════════════ */}
        <div ref={galleryRef} className="space-y-10">

          {/* Minimalist Controls: Category Tabs & Instant Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-4 border-b border-gray-200/80 dark:border-white/[0.08]">

            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <motion.button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className={`relative px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors duration-200 cursor-pointer ${isSelected
                      ? "text-white dark:text-gray-900 shadow-xs"
                      : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                      }`}
                    style={{ fontFamily: '"Space Grotesk",sans-serif' }}
                  >
                    {isSelected && (
                      <motion.div
                        layoutId="activePureLogoTab"
                        className="absolute inset-0 rounded-xl bg-gray-900 dark:bg-white z-0"
                        transition={{ type: "spring", stiffness: 450, damping: 32 }}
                      />
                    )}
                    <span className="relative z-10">{cat.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Live Search */}
            <div className="relative w-full md:w-56 shrink-0 group">
              <LuSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-gray-500 pointer-events-none z-10 transition-colors group-focus-within:text-gray-900 dark:group-focus-within:text-white" />
              <input
                ref={searchRef}
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search skills..."
                className="w-full pl-9 pr-10 py-2 rounded-2xl bg-gray-50/80 dark:bg-white/[0.03] border border-gray-200/50 dark:border-white/5 text-xs text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-gray-300/80 dark:focus:border-white/20 focus:bg-white dark:focus:bg-white/[0.06] transition-all duration-300 font-medium shadow-sm hover:border-gray-300/50 dark:hover:border-white/10 focus:shadow-md"
                style={{ fontFamily: '"Space Grotesk",sans-serif' }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/10 cursor-pointer transition-all z-10"
                >
                  <LuX className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

          </div>

          {/* Live Result Count (only shows when filtering) */}
          {(selectedCategory !== "all" || searchQuery.trim()) && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="flex items-center justify-between py-2"
            >
              <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400" style={{ fontFamily: '"Space Grotesk",sans-serif' }}>
                Showing <span className="text-gray-900 dark:text-white font-bold">{filteredSkills.length}</span> of {PURE_SKILLS.length} skills
              </span>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="text-[10px] font-bold text-red-500 hover:text-red-600 cursor-pointer transition-colors"
                style={{ fontFamily: '"Space Grotesk",sans-serif' }}
              >
                Clear All
              </button>
            </motion.div>
          )}

          {/* ── PURE LOGOS MATRIX (Floating Icons with Names - Ultra Compact) ── */}
          <motion.div
            layout
            className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-y-4 sm:gap-y-5 gap-x-2 sm:gap-x-3 items-center justify-items-center"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="col-span-full py-16 text-center"
                >
                  <LuSearch className="w-8 h-8 mx-auto text-gray-400 mb-2 opacity-50" />
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-300">
                    No matching technology found
                  </p>
                  <button
                    onClick={() => { setSearchQuery(""); setSelectedCategory("all"); }}
                    className="mt-3 text-xs font-bold text-red-500 hover:underline cursor-pointer"
                  >
                    Clear Filter
                  </button>
                </motion.div>
              ) : (
                filteredSkills.map((skill, index) => {
                  return (
                    <motion.div
                      layout
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8, y: 8 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2, delay: index * 0.008 }}
                      className="group relative flex flex-col items-center justify-center text-center select-none cursor-pointer"
                    >
                      {/* Logo Container with Subtle Hover Micro-Effect */}
                      <div
                        className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-transform duration-300 ease-out group-hover:scale-[1.15] group-hover:-translate-y-1 transform-gpu"
                      >
                        {skill.renderIcon("w-5 h-5 sm:w-5.5 sm:h-5.5")}

                        {/* Full name on hover (No Box) */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 text-[10.5px] font-bold text-gray-800 dark:text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out pointer-events-none whitespace-nowrap z-50 drop-shadow-md"
                          style={{ fontFamily: '"Space Grotesk",sans-serif' }}
                        >
                          {skill.name}
                        </div>
                      </div>

                      {/* Clean Skill Name Below Logo */}
                      <span
                        className="mt-1 text-[10px] sm:text-[11px] font-bold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 ease-out tracking-tight text-center truncate max-w-[60px] sm:max-w-[70px]"
                        style={{ fontFamily: '"Syne",sans-serif' }}
                      >
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })
              )}
            </AnimatePresence>
          </motion.div>
          <br /><br />
          {/* ── Enterprise Technology Stream (Continuous Marquee) ── */}
          <div className="mt-10">
            <div className="flex items-center justify-between gap-4 mb-5">
              <div className="flex items-center gap-2.5">
                <LuFlame className="w-4 h-4 text-red-500 animate-pulse" />
                <span
                  className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-gray-500 dark:text-white/50"
                  style={{ fontFamily: '"Space Grotesk",sans-serif' }}
                >
                  Advanced Tech Arsenal
                </span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-r from-gray-200/70 dark:from-white/[0.06] to-transparent" />
              <span className="text-[10px] font-mono text-gray-400 hidden sm:inline-block uppercase tracking-wider">
                Dynamic Skill Spectrum
              </span>
            </div>

            {/* Smooth Marquee Stream */}
            <div className="relative w-full overflow-hidden py-1.5 mask-edges group">
              <div className="animate-marquee-smooth flex items-center gap-6 whitespace-nowrap group-hover:[animation-play-state:paused]">
                {[...PURE_SKILLS, ...PURE_SKILLS].map((item, idx) => (
                  <div
                    key={`m-${item.name}-${idx}`}
                    className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-all shrink-0 select-none cursor-default"
                    style={{ fontFamily: '"Space Grotesk",sans-serif' }}
                  >
                    <div className="shrink-0">{item.renderIcon("w-5 h-5")}</div>
                    <span className="text-xs font-bold text-gray-800 dark:text-gray-200">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
