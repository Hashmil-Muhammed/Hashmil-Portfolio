import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { certificationsData, galleryCertificatesData } from '../data/mockData';

const VISIBLE_COUNT = 5;

const renderOrgLogo = (organization, customClass = "w-3.5 h-3.5") => {
  const orgLower = (organization || '').toLowerCase();

  // 1. Microsoft & LinkedIn Dual
  if (orgLower.includes('microsoft') && orgLower.includes('linkedin')) {
    return (
      <div className="flex items-center gap-1 shrink-0">
        <svg className={`${customClass} shrink-0 shadow-sm`} viewBox="0 0 21 21" fill="none">
          <rect x="1" y="1" width="9" height="9" fill="#f25022" />
          <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
          <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
          <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
        </svg>
        <span className="text-gray-400 text-[8px] font-medium leading-none">&</span>
        <svg className={`${customClass} text-[#0A66C2] bg-white rounded-[2px] p-[0.5px] shrink-0 shadow-sm`} fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      </div>
    );
  }
  // 2. Microsoft Official 4-Color Squares
  if (orgLower.includes('microsoft')) {
    return (
      <svg className={`${customClass} shrink-0 shadow-sm`} viewBox="0 0 21 21" fill="none">
        <rect x="1" y="1" width="9" height="9" fill="#f25022" />
        <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
        <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
        <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
      </svg>
    );
  }
  // 3. LinkedIn / LinkedIn Learning Official Logo
  if (orgLower.includes('linkedin')) {
    return (
      <svg className={`${customClass} text-[#0A66C2] bg-white rounded-[2px] p-[0.5px] shrink-0 shadow-sm`} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    );
  }
  // 4. Oracle Official Red Ring Logo
  if (orgLower.includes('oracle')) {
    return (
      <svg className={`${customClass} shrink-0 shadow-sm`} viewBox="0 0 24 24" fill="#F80000">
        <path d="M16.412 4.412h-8.82a7.588 7.588 0 0 0-.008 15.176h8.828a7.588 7.588 0 0 0 0-15.176zm-.193 12.502H7.786a4.915 4.915 0 0 1 0-9.828h8.433a4.914 4.914 0 1 1 0 9.828z" />
      </svg>
    );
  }
  // 5. NPTEL / IIT Kharagpur Official Badge
  if (orgLower.includes('nptel') || orgLower.includes('iit') || orgLower.includes('kharagpur')) {
    return (
      <img
        src="/logos/nptel_logo.png"
        alt="NPTEL"
        className={`${customClass} object-contain shrink-0 rounded-full bg-white/10 p-[0.5px]`}
      />
    );
  }
  // 6. Bluestock Fintech Official Ascending Gradient Bars with Trajectory Swoosh
  if (orgLower.includes('bluestock')) {
    return (
      <svg className={`${customClass} shrink-0 shadow-sm`} viewBox="0 0 100 80" fill="none">
        <defs>
          <linearGradient id="bluestockGradTab" x1="0" y1="80" x2="80" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3730A3" />
            <stop offset="0.5" stopColor="#6366F1" />
            <stop offset="1" stopColor="#818CF8" />
          </linearGradient>
        </defs>
        <rect x="6" y="38" width="18" height="42" rx="4" fill="url(#bluestockGradTab)" />
        <rect x="30" y="8" width="18" height="72" rx="4" fill="url(#bluestockGradTab)" />
        <rect x="54" y="20" width="18" height="60" rx="4" fill="url(#bluestockGradTab)" />
        <path
          d="M4 64C28 62 58 48 82 22"
          stroke="#F97316"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="85" cy="20" r="5.5" fill="#FB923C" />
        <circle cx="85" cy="20" r="3.5" fill="#EA580C" />
      </svg>
    );
  }
  // 7. Kaggle Official Cyan K Logo
  if (orgLower.includes('kaggle')) {
    return (
      <svg className={`${customClass} shrink-0 shadow-sm`} viewBox="0 0 24 24" fill="none">
        <path d="M18.825 23.859H13.67L7.697 14.869V23.86H3V0.14h4.697v13.568l5.807-13.568h5.276l-6.852 14.072 6.897 9.647z" fill="#20BEFF" />
      </svg>
    );
  }
  // 8. One Roadmap Official Purple Circle with 'r' Roadmap mark
  if (orgLower.includes('one roadmap') || orgLower.includes('roadmap') || orgLower.includes('oneroadmap')) {
    return (
      <svg className={`${customClass} shrink-0 shadow-sm`} viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="50" fill="#6B4B9A" />
        <path
          d="M26 78V46C26 34 35 25 47 25H74V40H49C44 40 40 44 40 49V78H26Z"
          fill="white"
        />
      </svg>
    );
  }
  // 9. GUVI / HCL Dual Official Logos
  if (orgLower.includes('guvi') || orgLower.includes('hcl')) {
    return (
      <div className="flex items-center gap-1 shrink-0">
        <svg className={`${customClass} shrink-0 shadow-sm`} viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#00D06C" />
          <path
            d="M16 7.5C13.5 7.5 11.5 9.5 11.5 12C11.5 13.7 12.4 15.2 13.8 16C12.4 16.8 11.5 18.3 11.5 20C11.5 22.5 13.5 24.5 16 24.5C18.5 24.5 20.5 22.5 20.5 20C20.5 18.3 19.6 16.8 18.2 16C19.6 15.2 20.5 13.7 20.5 12C20.5 9.5 18.5 7.5 16 7.5ZM16 9.8C17.2 9.8 18.2 10.8 18.2 12C18.2 13.2 17.2 14.2 16 14.2C14.8 14.2 13.8 13.2 13.8 12C13.8 10.8 14.8 9.8 16 9.8ZM16 17.8C17.2 17.8 18.2 18.8 18.2 20C18.2 21.2 17.2 22.2 16 22.2C14.8 22.2 13.8 21.2 13.8 20C13.8 18.8 14.8 17.8 16 17.8Z"
            fill="white"
          />
        </svg>
      </div>
    );
  }
  // 10. NACTET & Luminar Dual Accredited Official Logo
  if (orgLower.includes('nactet') && orgLower.includes('luminar')) {
    return (
      <svg className={`${customClass} shrink-0 shadow-sm rounded-[2px]`} viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="14" fill="#1A2738" />
        <circle cx="28" cy="30" r="8" fill="#F97316" />
        <path d="M16 43C27 41 33 47 36 60C30 55 22 54 16 43Z" fill="#F97316" />
        <circle cx="50" cy="22" r="9" fill="#FFFFFF" />
        <path d="M38 35C45 47 48 55 50 64C52 55 55 47 62 35C56 38 44 38 38 35Z" fill="#FFFFFF" />
        <circle cx="72" cy="30" r="8" fill="#22C55E" />
        <path d="M84 43C73 41 67 47 64 60C70 55 78 54 84 43Z" fill="#22C55E" />
        <line x1="20" y1="71" x2="80" y2="71" stroke="white" strokeWidth="3" />
      </svg>
    );
  }
  // 14. SCMS / KTU University Logo
  if (orgLower.includes('scms') || orgLower.includes('ktu')) {
    return (
      <img src="/logos/scms_logo.png" alt="SCMS" className={`${customClass} object-contain shrink-0 rounded-full bg-white/10 p-[0.5px]`} />
    );
  }
  // 10b. NACTET Official Tri-Color Square Logo
  if (orgLower.includes('nactet') || orgLower.includes('national council')) {
    return (
      <svg className={`${customClass} shrink-0 shadow-sm rounded-[2px]`} viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="14" fill="#1A2738" />
        <circle cx="28" cy="30" r="8" fill="#F97316" />
        <path d="M16 43C27 41 33 47 36 60C30 55 22 54 16 43Z" fill="#F97316" />
        <circle cx="50" cy="22" r="9" fill="#FFFFFF" />
        <path d="M38 35C45 47 48 55 50 64C52 55 55 47 62 35C56 38 44 38 38 35Z" fill="#FFFFFF" />
        <circle cx="72" cy="30" r="8" fill="#22C55E" />
        <path d="M84 43C73 41 67 47 64 60C70 55 78 54 84 43Z" fill="#22C55E" />
        <line x1="20" y1="71" x2="80" y2="71" stroke="white" strokeWidth="3" />
      </svg>
    );
  }
  // 11. Luminar Technolab Official 3D Hexagon 'L' Logo
  if (orgLower.includes('luminar')) {
    return (
      <svg className={`${customClass} shrink-0 shadow-sm`} viewBox="0 0 100 115" fill="none">
        <path d="M50 2L95 28V87L50 113L5 87V28L50 2Z" fill="#581C87" />
        <path d="M50 2L5 28V87L50 113V2Z" fill="#1E0638" fillOpacity="0.32" />
        <path d="M37 28H49V72C49 75.3 51.7 78 55 78H75V88H47C41.5 88 37 83.5 37 78V28Z" fill="white" />
      </svg>
    );
  }
  // 12. Technovalley Software India Pvt. Ltd. Official Soaring Wing Logo
  if (orgLower.includes('technovalley')) {
    return (
      <svg className="w-3.5 h-3 shrink-0 shadow-sm" viewBox="0 0 140 100" fill="none">
        <path
          d="M10 74C35 68 50 48 56 24C50 46 36 62 10 74Z"
          fill="#0F172A"
        />
        <path
          d="M56 24C44 52 28 72 10 74C50 76 86 52 118 10C92 36 66 78 64 94C68 70 80 44 118 10C82 32 64 34 56 24Z"
          fill="#EA580C"
        />
      </svg>
    );
  }
  // 13. Google Official 4-Color Logo
  if (orgLower.includes('google')) {
    return (
      <svg className={`${customClass} shrink-0 shadow-sm`} viewBox="0 0 24 24">
        <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z" />
        <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z" />
        <path fill="#FBBC05" d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.98 0 12s.45 3.82 1.25 5.42l4.03-3.15z" />
        <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z" />
      </svg>
    );
  }
  return (
    <svg className={`${customClass} shrink-0 text-white/90`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138z" />
    </svg>
  );
};

const OrgLogoBadge = React.memo(({ organization }) => {
  return (
    <div className="flex items-center gap-1.5 mb-1.5 text-white/80">
      {renderOrgLogo(organization, "w-3 h-3")}
      <span
        className="text-[10px] md:text-[11px] font-semibold tracking-wider text-white/80 uppercase"
        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
      >
        {organization}
      </span>
    </div>
  );
});

const modalOrganizationLogos = [
  {
    id: 'microsoft',
    name: 'Microsoft',
    targetTab: 0,
    renderLogo: () => (
      <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 shrink-0" viewBox="0 0 21 21" fill="none">
        <rect x="1" y="1" width="9" height="9" fill="#f25022" />
        <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
        <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
        <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
      </svg>
    )
  },
  {
    id: 'oracle',
    name: 'Oracle',
    targetTab: 1,
    renderLogo: () => (
      <svg className="w-6 h-3.5 sm:w-7 sm:h-4 shrink-0" viewBox="0 0 24 24" fill="#F80000">
        <path d="M16.412 4.412h-8.82a7.588 7.588 0 0 0-.008 15.176h8.828a7.588 7.588 0 0 0 0-15.176zm-.193 12.502H7.786a4.915 4.915 0 0 1 0-9.828h8.433a4.914 4.914 0 1 1 0 9.828z" />
      </svg>
    )
  },
  {
    id: 'nptel',
    name: 'NPTEL • IIT',
    targetTab: 2,
    renderLogo: () => (
      <img src="/logos/nptel_logo.png" alt="NPTEL" className="w-5 h-5 sm:w-5.5 sm:h-5.5 object-contain shrink-0 rounded-full" />
    )
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    targetTab: 3,
    renderLogo: () => (
      <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-[#0A66C2] shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
      </svg>
    )
  },
  {
    id: 'scms_ktu',
    name: 'SCMS • KTU',
    targetTab: 4,
    renderLogo: () => (
      <img src="/logos/scms_logo.png" alt="SCMS" className="w-5 h-5 sm:w-5.5 sm:h-5.5 object-contain shrink-0 rounded-full bg-white/10 p-[0.5px]" />
    )
  },
  {
    id: 'bluestock',
    name: 'Bluestock Fintech',
    targetTab: 4,
    renderLogo: () => (
      <svg className="w-5.5 h-4.5 sm:w-6 sm:h-5 shrink-0" viewBox="0 0 100 80" fill="none">
        <rect x="6" y="38" width="18" height="42" rx="4" fill="#4338CA" />
        <rect x="30" y="8" width="18" height="72" rx="4" fill="#6366F1" />
        <rect x="54" y="20" width="18" height="60" rx="4" fill="#818CF8" />
        <path d="M4 64C28 62 58 48 82 22" stroke="#F97316" strokeWidth="4" strokeLinecap="round" />
        <circle cx="85" cy="20" r="5.5" fill="#FB923C" />
        <circle cx="85" cy="20" r="3.5" fill="#EA580C" />
      </svg>
    )
  },
  {
    id: 'oneroadmap',
    name: 'One Roadmap',
    targetTab: 6,
    renderLogo: () => (
      <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 shrink-0" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="50" fill="#6B4B9A" />
        <path d="M26 78V46C26 34 35 25 47 25H74V40H49C44 40 40 44 40 49V78H26Z" fill="white" />
      </svg>
    )
  },
  {
    id: 'technovalley',
    name: 'Technovalley',
    targetTab: 7,
    renderLogo: () => (
      <svg className="w-5.5 h-4 sm:w-6 sm:h-4.5 shrink-0" viewBox="0 0 140 100" fill="none">
        <path d="M10 74C35 68 50 48 56 24C50 46 36 62 10 74Z" fill="#0F172A" />
        <path d="M56 24C44 52 28 72 10 74C50 76 86 52 118 10C92 36 66 78 64 94C68 70 80 44 118 10C82 32 64 34 56 24Z" fill="#EA580C" />
      </svg>
    )
  },
  {
    id: 'guvi',
    name: 'GUVI',
    targetTab: 8,
    renderLogo: () => (
      <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 shrink-0" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="16" fill="#00D06C" />
        <path d="M16 7.5C13.5 7.5 11.5 9.5 11.5 12C11.5 13.7 12.4 15.2 13.8 16C12.4 16.8 11.5 18.3 11.5 20C11.5 22.5 13.5 24.5 16 24.5C18.5 24.5 20.5 22.5 20.5 20C20.5 18.3 19.6 16.8 18.2 16C19.6 15.2 20.5 13.7 20.5 12C20.5 9.5 18.5 7.5 16 7.5ZM16 9.8C17.2 9.8 18.2 10.8 18.2 12C18.2 13.2 17.2 14.2 16 14.2C14.8 14.2 13.8 13.2 13.8 12C13.8 10.8 14.8 9.8 16 9.8ZM16 17.8C17.2 17.8 18.2 18.8 18.2 20C18.2 21.2 17.2 22.2 16 22.2C14.8 22.2 13.8 21.2 13.8 20C13.8 18.8 14.8 17.8 16 17.8Z" fill="white" />
      </svg>
    )
  },
  {
    id: 'hcl',
    name: 'HCL Tech',
    targetTab: 8,
    renderLogo: () => (
      <div className="bg-[#005FB9] px-1 py-0.5 rounded-[2px] flex items-center justify-center shrink-0">
        <svg className="w-5 h-2 sm:w-6 sm:h-2.5 shrink-0" viewBox="0 0 45 16" fill="none">
          <path d="M2 15L5.5 1H10L9 6.5H15.5L17 1H21.5L18 15H13.5L14.7 9.8H8.2L6.8 15H2Z" fill="white" />
          <path d="M33 3.5C31.5 1.5 28.5 1 25.5 1C20.5 1 17.5 4.5 16.5 9C15.5 13.5 18 15.5 22.5 15.5C26 15.5 29 14.2 30.5 12.5L28 9.8C27 10.8 25.2 11.8 23.2 11.8C20.8 11.8 19.8 10.2 20.3 8C20.8 5.8 22.5 4.5 25 4.5C26.8 4.5 28.2 5.2 29 6.2L33 3.5Z" fill="white" />
          <path d="M30 15L33.5 1H38L35.2 11.5H44L43.2 15H30Z" fill="white" />
        </svg>
      </div>
    )
  },
  {
    id: 'luminar',
    name: 'Luminar',
    targetTab: 9,
    renderLogo: () => (
      <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 shrink-0" viewBox="0 0 100 115" fill="none">
        <path d="M50 2L95 28V87L50 113L5 87V28L50 2Z" fill="#581C87" />
        <path d="M50 2L5 28V87L50 113V2Z" fill="#1E0638" fillOpacity="0.32" />
        <path d="M37 28H49V72C49 75.3 51.7 78 55 78H75V88H47C41.5 88 37 83.5 37 78V28Z" fill="white" />
      </svg>
    )
  },
  {
    id: 'nactet',
    name: 'NACTET',
    targetTab: 10,
    renderLogo: () => (
      <svg className="w-5 h-5 sm:w-5.5 sm:h-5.5 shrink-0 rounded-[2px]" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="14" fill="#1A2738" />
        <circle cx="28" cy="30" r="8" fill="#F97316" />
        <path d="M16 43C27 41 33 47 36 60C30 55 22 54 16 43Z" fill="#F97316" />
        <circle cx="50" cy="22" r="9" fill="#FFFFFF" />
        <path d="M38 35C45 47 48 55 50 64C52 55 55 47 62 35C56 38 44 38 38 35Z" fill="#FFFFFF" />
        <circle cx="72" cy="30" r="8" fill="#22C55E" />
        <path d="M84 43C73 41 67 47 64 60C70 55 78 54 84 43Z" fill="#22C55E" />
        <line x1="20" y1="71" x2="80" y2="71" stroke="white" strokeWidth="3" />
        <text x="50" y="86" textAnchor="middle" fill="#FFFFFF" fontSize="18" fontWeight="bold" fontFamily="sans-serif" letterSpacing="1">
          nactet
        </text>
      </svg>
    )
  },
  {
    id: 'kaggle',
    name: 'Kaggle',
    targetTab: 11,
    renderLogo: () => (
      <svg className="w-4.5 h-5 sm:w-5 sm:h-5.5 shrink-0" viewBox="0 0 24 24" fill="none">
        <path d="M18.825 23.859H13.67L7.697 14.869V23.86H3V0.14h4.697v13.568l5.807-13.568h5.276l-6.852 14.072 6.897 9.647z" fill="#20BEFF" />
      </svg>
    )
  }
];

const Certifications = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeGalleryTab, setActiveGalleryTab] = useState(0);
  const [galleryStartIndex, setGalleryStartIndex] = useState(0);
  const lastWheelTime = useRef(0);

  // Preload all images immediately on mount so all images are decoded and cached
  useEffect(() => {
    certificationsData.forEach((cert) => {
      const img = new window.Image();
      img.src = cert.image;
    });
    galleryCertificatesData.forEach((cert) => {
      const img = new window.Image();
      img.src = cert.image;
    });
  }, []);

  const handleNextGalleryTab = useCallback(() => {
    const total = galleryCertificatesData.length;
    const maxStart = Math.max(0, total - VISIBLE_COUNT);
    setActiveGalleryTab((prev) => {
      const nextTab = prev < total - 1 ? prev + 1 : 0;
      setGalleryStartIndex((currStart) => {
        if (nextTab === 0) return 0;
        if (nextTab >= currStart + VISIBLE_COUNT) {
          return Math.min(maxStart, nextTab - VISIBLE_COUNT + 1);
        }
        if (nextTab < currStart) {
          return nextTab;
        }
        return currStart;
      });
      return nextTab;
    });
  }, []);

  const handlePrevGalleryTab = useCallback(() => {
    const total = galleryCertificatesData.length;
    const maxStart = Math.max(0, total - VISIBLE_COUNT);
    setActiveGalleryTab((prev) => {
      const prevTab = prev > 0 ? prev - 1 : total - 1;
      setGalleryStartIndex((currStart) => {
        if (prevTab === total - 1) return maxStart;
        if (prevTab < currStart) {
          return prevTab;
        }
        if (prevTab >= currStart + VISIBLE_COUNT) {
          return Math.max(0, prevTab - VISIBLE_COUNT + 1);
        }
        return currStart;
      });
      return prevTab;
    });
  }, []);

  const handleWheel = (e) => {
    const now = Date.now();
    if (now - lastWheelTime.current < 180) return;
    lastWheelTime.current = now;
    if (e.deltaY > 0) {
      handleNextGalleryTab();
    } else if (e.deltaY < 0) {
      handlePrevGalleryTab();
    }
  };

  // Close gallery on Escape key press, support arrow key navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsGalleryOpen(false);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        handlePrevGalleryTab();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        handleNextGalleryTab();
      }
    };
    if (isGalleryOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isGalleryOpen, handlePrevGalleryTab, handleNextGalleryTab]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === certificationsData.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? certificationsData.length - 1 : prev - 1));
  }, []);

  useEffect(() => {
    if (isGalleryOpen) return; // Pause carousel timer when modal is open
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, currentIndex, isGalleryOpen]);

  const currentCert = certificationsData[currentIndex];
  const activeGalleryCert = galleryCertificatesData[activeGalleryTab] || galleryCertificatesData[0];

  const slideVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (dir) => ({ zIndex: 0, x: dir < 0 ? 300 : -300, opacity: 0 })
  };

  return (
    <section
      id="certifications"
      className="relative w-full flex items-center justify-center overflow-hidden py-16 md:py-20"
      style={{ backgroundColor: currentCert.color, transition: 'background-color 0.5s ease-in-out' }}
    >
      {/* Background Image Texture Overlay */}
      <div className="absolute inset-0 bg-[url('/backgrounds/samedha.jpg')] bg-cover bg-center bg-no-repeat mix-blend-overlay opacity-80 pointer-events-none"></div>

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-6 lg:px-10 relative z-10 pb-8">
        {/* Section Header */}
        <div className="mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 z-20 text-white flex-1 mb-1">
            <span className="text-sm font-bold tracking-[0.2em] text-white/70 uppercase">05.</span>
            <h2
              className="text-3xl md:text-5xl font-extrabold text-white tracking-tight drop-shadow-sm font-sans"
              style={{ fontFamily: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', letterSpacing: '-0.025em' }}
            >
              Top Credentials
            </h2>
            <div className="flex-1 h-px bg-white/20 ml-4 hidden sm:block"></div>
          </div>

          {/* Clean Hardware-Accelerated Smooth "View All Certificates" Trigger Button */}
          <motion.button
            onClick={() => {
              const initialIndex = currentIndex < galleryCertificatesData.length ? currentIndex : 0;
              setActiveGalleryTab(initialIndex);
              const maxStart = Math.max(0, galleryCertificatesData.length - VISIBLE_COUNT);
              const calculatedStart = Math.min(Math.max(0, initialIndex - 2), maxStart);
              setGalleryStartIndex(calculatedStart);
              setIsGalleryOpen(true);
            }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="group relative self-start sm:self-auto inline-flex items-center gap-2 text-white/90 hover:text-white py-1 px-1 z-20 cursor-pointer will-change-transform select-none"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            {/* Minimalist Gallery Grid Icon */}
            <svg
              className="w-4 h-4 text-white/80 group-hover:text-white transition-colors duration-200 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="3" width="7" height="7" rx="1.5" />
              <rect x="14" y="14" width="7" height="7" rx="1.5" />
              <rect x="3" y="14" width="7" height="7" rx="1.5" />
            </svg>

            {/* Button Label */}
            <span className="text-xs sm:text-[13px] font-bold tracking-wide transition-colors duration-200">
              View All Certificates
            </span>

            {/* Smooth Chevron Arrow */}
            <svg
              className="w-3.5 h-3.5 text-white/70 group-hover:text-white group-hover:translate-x-1 transition-transform duration-200 shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </div>

        <div className="relative w-full flex flex-col justify-center min-h-[650px] md:min-h-[500px] lg:min-h-[450px]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 400, damping: 35 },
                opacity: { duration: 0.2 }
              }}
              className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8"
            >

              {/* Left Column: Content */}
              <div className="w-full lg:w-1/2 flex flex-col text-white">
                {/* Organization Logo & Name */}
                <OrgLogoBadge organization={currentCert.organization} />

                <h2
                  className="text-3xl md:text-4xl font-extrabold mb-3 leading-tight drop-shadow-md font-sans"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', letterSpacing: '-0.02em' }}
                >
                  {currentCert.title}
                </h2>

                <p
                  className="text-white/85 text-[13px] lg:text-[14px] mb-4 leading-relaxed max-w-xl font-normal line-clamp-3 font-sans"
                  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                >
                  {currentCert.description}
                </p>

                {/* Clean Metadata Row */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4 text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 text-white/70">
                      <svg className="w-3.5 h-3.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-white/60">Issued:</span>
                    </div>
                    <span className="text-white font-bold tracking-wide" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                      {currentCert.issueDate}
                    </span>
                  </div>

                  <div className="h-3 w-px bg-white/20 hidden sm:block" />

                  <div className="flex items-center gap-2 overflow-hidden">
                    <div className="flex items-center gap-1.5 text-white/70 shrink-0">
                      <svg className="w-3.5 h-3.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-white/60">ID:</span>
                    </div>
                    <span className="text-white font-bold tracking-wide truncate max-w-[180px] sm:max-w-[220px]" title={currentCert.credentialId} style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                      {currentCert.credentialId}
                    </span>
                  </div>
                </div>

                {/* Skills */}
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4">
                  {currentCert.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white/10 rounded-lg text-[10px] md:text-xs font-semibold tracking-wider text-white/90 backdrop-blur-sm"
                    >
                      {skill}
                    </span>
                  ))}
                  <span className="py-1 text-[10px] md:text-xs font-medium tracking-wider text-white/50 ml-1">
                    ETC..
                  </span>
                </div>

                {/* Action Button */}
                <div>
                  <a
                    href={currentCert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white hover:bg-white/95 active:bg-white/90 border border-white text-slate-900 font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_3px_12px_rgba(0,0,0,0.12)] hover:shadow-[0_5px_18px_rgba(255,255,255,0.3)] group text-[11px] sm:text-xs tracking-wide cursor-pointer"
                  >
                    <span>Verify Credential</span>
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-700 group-hover:text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Column: Certificate Image */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative p-2 bg-white/10 rounded-2xl md:rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl w-fit h-fit flex items-center justify-center">
                  <img
                    src={currentCert.image}
                    alt={currentCert.title}
                    loading="eager"
                    fetchPriority="high"
                    className="w-full max-w-[350px] lg:max-w-[550px] max-h-[350px] lg:max-h-[450px] h-auto rounded-xl object-contain shadow-md"
                  />
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 z-30">
        <motion.div
          key={currentIndex}
          className="h-full bg-white/60"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 5, ease: "linear" }}
        />
      </div>

      {/* Pagination & Controls */}
      <div className="absolute bottom-6 md:bottom-10 right-10 md:right-14 lg:right-16 flex items-center gap-4 lg:gap-5 z-30">
        <div
          className="flex items-baseline font-black leading-none select-none drop-shadow-sm"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
        >
          <span className="text-white/90 text-2xl sm:text-3xl md:text-[34px] font-black tracking-tight">
            {(currentIndex + 1).toString().padStart(2, '0')}
          </span>
          <span className="text-white/35 text-xl sm:text-2xl md:text-[26px] font-light mx-1 sm:mx-1.5">
            /
          </span>
          <span className="text-white/50 text-sm sm:text-base md:text-lg font-bold tracking-tight">
            {certificationsData.length.toString().padStart(2, '0')}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            aria-label="Previous Certificate"
            className="group relative w-8 h-8 sm:w-9 sm:h-9 md:w-9.5 md:h-9.5 rounded-full bg-white/[0.10] hover:bg-white/[0.22] active:bg-white/[0.30] border border-white/20 hover:border-white/40 backdrop-blur-xl flex items-center justify-center text-white/90 hover:text-white transition-all duration-300 shadow-[0_3px_14px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.35)] hover:shadow-[0_4px_18px_rgba(255,255,255,0.18),inset_0_1px_1px_rgba(255,255,255,0.5)] active:scale-90 cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:-translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Certificate"
            className="group relative w-8 h-8 sm:w-9 sm:h-9 md:w-9.5 md:h-9.5 rounded-full bg-white/[0.10] hover:bg-white/[0.22] active:bg-white/[0.30] border border-white/20 hover:border-white/40 backdrop-blur-xl flex items-center justify-center text-white/90 hover:text-white transition-all duration-300 shadow-[0_3px_14px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,0.35)] hover:shadow-[0_4px_18px_rgba(255,255,255,0.18),inset_0_1px_1px_rgba(255,255,255,0.5)] active:scale-90 cursor-pointer"
          >
            <svg
              className="w-3.5 h-3.5 md:w-4 md:h-4 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Slide indicator dots */}
      <div className="absolute bottom-8 md:bottom-12 left-6 lg:left-10 flex gap-2.5 z-30">
        {certificationsData.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setDirection(idx > currentIndex ? 1 : -1); setCurrentIndex(idx); }}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-white scale-125 shadow-lg' : 'bg-white/40 hover:bg-white/60'}`}
          />
        ))}
      </div>

      {/* Hidden preloaded images for both carousels and gallery */}
      <div className="hidden" aria-hidden="true">
        {certificationsData.map((cert) => (
          <img key={`preload-${cert.id}`} src={cert.image} alt="" loading="eager" decoding="async" />
        ))}
        {galleryCertificatesData.map((cert) => (
          <img key={`preload-gal-${cert.id}`} src={cert.image} alt="" loading="eager" decoding="async" />
        ))}
      </div>

      {/* ========================================================================= */}
      {/* FULL-SCREEN VERTICAL-TAB MODAL GALLERY (EXACT MATCH TO SCREENSHOT DESIGN) */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            onClick={() => setIsGalleryOpen(false)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-[3px] flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto no-scrollbar transform-gpu"
            style={{ willChange: 'opacity' }}
          >
            {/* Modal Card Container (Larger & More Spacious Landscape UI) */}
            <motion.div
              initial={{ scale: 0.97, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.97, opacity: 0, y: 10 }}
              transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl sm:rounded-[36px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] border border-gray-100/90 w-full max-w-[1380px] flex flex-col px-5 pt-5 pb-7 sm:px-8 sm:pt-7 sm:pb-9 lg:px-10 lg:pt-8 lg:pb-11 relative select-none no-scrollbar overflow-hidden my-auto transform-gpu"
              style={{ willChange: 'transform, opacity', fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              {/* Background Image - Clearly Visible */}
              <div className="absolute inset-0 bg-[url('/backgrounds/samedha.jpg')] bg-cover bg-center bg-no-repeat opacity-90 pointer-events-none rounded-3xl sm:rounded-[36px]" />
              <div className="absolute inset-0 bg-white/30 pointer-events-none rounded-3xl sm:rounded-[36px]" />

              {/* Close Button (X) */}
              <button
                onClick={() => setIsGalleryOpen(false)}
                aria-label="Close Modal"
                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-40 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/85 hover:bg-white active:scale-90 text-gray-700 hover:text-gray-950 flex items-center justify-center transition-all duration-200 shadow-md backdrop-blur-md cursor-pointer border border-white/60"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Title Header (Ultra-Premium & Professional Design) */}
              <div className="flex flex-col items-center justify-center mb-3 sm:mb-4 relative z-10">

                {/* Main Heading */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[38px] font-extrabold tracking-tight text-center font-sans text-gray-900 flex items-center gap-2.5">
                  <span>All</span>
                  <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-600 bg-clip-text text-transparent">
                    Certifications
                  </span>
                </h2>

                {/* Dynamic Accent Bar */}
                <div className="flex items-center gap-1.5 mt-2">
                  <div
                    className="w-12 sm:w-14 h-1 rounded-full shadow-xs"
                    style={{ backgroundColor: activeGalleryCert.theme.primary }}
                  />
                  <div
                    className="w-2.5 h-1 rounded-full opacity-60"
                    style={{ backgroundColor: activeGalleryCert.theme.primary }}
                  />
                  <div
                    className="w-1 h-1 rounded-full opacity-30"
                    style={{ backgroundColor: activeGalleryCert.theme.primary }}
                  />
                </div>
              </div>

              {/* Sleek Organization Logos Section (Standard, Polished & Professional UI) */}
              <div className="w-full mb-4 sm:mb-5 relative z-20 flex flex-col items-center">
                {/* Subheading with Symmetrical Accent Lines */}
                <div className="flex items-center gap-2.5 mb-1 select-none">
                  <div className="h-[1px] w-6 sm:w-10 bg-gradient-to-r from-transparent to-gray-300" />
                  <span className="text-[11px] sm:text-[11.5px] font-semibold tracking-widest text-gray-500 uppercase">
                    Accreditation & Issuing Authorities
                  </span>
                  <div className="h-[1px] w-6 sm:w-10 bg-gradient-to-l from-transparent to-gray-300" />
                </div>

                {/* Refined Standard Description */}
                <p className="text-center text-[11px] sm:text-[12px] text-gray-400 font-normal leading-relaxed max-w-lg mx-auto mb-2.5 select-none">
                  Specialized technical credentials validated and certified by global industry leaders.
                </p>

                {/* Sleek Organization Logos Marquee Section (Exact Hero Marquee & Mask-Edges Pattern) */}
                <div className="w-full max-w-xl sm:max-w-2xl mx-auto overflow-hidden mask-edges py-1">
                  <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="flex shrink-0 items-center justify-start gap-12 pr-12">
                        {modalOrganizationLogos.map((org) => (
                          <button
                            key={`${i}-${org.id}`}
                            onClick={() => {
                              setActiveGalleryTab(org.targetTab);
                              const maxStart = Math.max(0, galleryCertificatesData.length - VISIBLE_COUNT);
                              const calculatedStart = Math.min(Math.max(0, org.targetTab - 2), maxStart);
                              setGalleryStartIndex(calculatedStart);
                            }}
                            title={org.name}
                            aria-label={org.name}
                            className="opacity-75 hover:opacity-100 hover:scale-115 active:scale-95 transition-opacity transition-transform duration-200 cursor-pointer flex items-center justify-center p-1 shrink-0 select-none"
                          >
                            {org.renderLogo()}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Gallery Main Flex Layout: Left Tabs & Right Content */}
              <div className="w-full flex flex-col md:flex-row items-stretch gap-4 md:gap-0 relative">

                {/* ---------------------------------------------------- */}
                {/* LEFT SIDEBAR (Vertical Tabs ~ 24% Width)            */}
                {/* ---------------------------------------------------- */}
                <div className="w-full md:w-[26%] lg:w-[24%] flex md:flex-col items-center md:items-stretch justify-center py-1 md:py-2 relative z-30 shrink-0">

                  {/* Up Chevron Icon */}
                  <button
                    onClick={handlePrevGalleryTab}
                    aria-label="Previous Certificate Tab"
                    className="flex justify-center items-center text-gray-400 hover:text-gray-900 active:scale-95 transition-all duration-200 mb-1.5 py-1 cursor-pointer w-full rounded-lg hover:bg-gray-100/80 group"
                  >
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>

                  {/* Vertical Tabs List (Exactly 5 items visible at a time with taller active color tab) */}
                  <div
                    onWheel={handleWheel}
                    className="flex md:flex-col gap-2 sm:gap-2.5 md:gap-3 w-full overflow-x-auto md:overflow-y-hidden pr-1 md:pr-0 pb-1 md:pb-0 no-scrollbar items-center md:items-stretch"
                  >
                    {galleryCertificatesData.slice(galleryStartIndex, galleryStartIndex + VISIBLE_COUNT).map((cert, offset) => {
                      const idx = galleryStartIndex + offset;
                      const isActive = idx === activeGalleryTab;
                      return (
                        <button
                          key={`${cert.id}-${idx}`}
                          onClick={() => setActiveGalleryTab(idx)}
                          type="button"
                          className={`relative overflow-hidden text-center md:text-left cursor-pointer whitespace-nowrap shrink-0 h-[48px] sm:h-[52px] lg:h-[56px] px-4 sm:px-5.5 rounded-xl md:rounded-l-2xl md:rounded-r-none flex items-center w-full select-none ${isActive
                            ? 'text-white font-bold text-xs sm:text-sm lg:text-[15px] z-30 shadow-md'
                            : 'text-gray-700 hover:text-gray-950 font-medium text-xs sm:text-sm lg:text-[15px] hover:bg-gray-100/80 z-10'
                            }`}
                        >
                          {isActive && (
                            <motion.div
                              layoutId="activeGalleryTabGlider"
                              transition={{ type: "spring", stiffness: 350, damping: 30, mass: 0.8 }}
                              className="absolute inset-0 z-0 rounded-xl md:rounded-l-2xl md:rounded-r-none shadow-md overflow-hidden transform-gpu"
                              style={{
                                backgroundColor: activeGalleryCert.theme.primary,
                                willChange: 'transform'
                              }}
                            >
                              {/* Background Image Texture Overlay matching right side */}
                              <div className="absolute inset-0 bg-[url('/backgrounds/samedha.jpg')] bg-cover bg-center bg-no-repeat mix-blend-overlay opacity-80 pointer-events-none" />
                              {/* Subtle gradient matching right side */}
                              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-black/20 pointer-events-none" />
                            </motion.div>
                          )}
                          <span className="flex items-center gap-2.5 relative z-10 w-full">
                            <span className="w-4.5 h-4.5 shrink-0 flex items-center justify-center">
                              {renderOrgLogo(cert.organization, "w-4 h-4")}
                            </span>
                            <span className="truncate max-w-[150px] sm:max-w-[185px] lg:max-w-[210px] inline-block font-sans">{cert.tabName}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Down Chevron Icon */}
                  <button
                    onClick={handleNextGalleryTab}
                    aria-label="Next Certificate Tab"
                    className="flex justify-center items-center text-gray-400 hover:text-gray-900 active:scale-95 transition-all duration-200 mt-1.5 py-1 cursor-pointer w-full rounded-lg hover:bg-gray-100/80 group"
                  >
                    <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                {/* ---------------------------------------------------- */}
                {/* RIGHT CONTENT SHOWCASE (Wide & Sleek Landscape UI)   */}
                {/* ---------------------------------------------------- */}
                <div className="w-full md:w-[74%] lg:w-[76%] relative z-20">
                  <div
                    className="w-full rounded-2xl sm:rounded-[32px] shadow-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden text-white min-h-[460px] lg:min-h-[490px] flex items-center"
                    style={{
                      backgroundColor: activeGalleryCert.theme.primary
                    }}
                  >
                    {/* Background Image Texture Overlay */}
                    <div className="absolute inset-0 bg-[url('/backgrounds/samedha.jpg')] bg-cover bg-center bg-no-repeat mix-blend-overlay opacity-80 pointer-events-none"></div>

                    {/* Subtle Background Texture & Waves */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/20 pointer-events-none" />
                    <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />

                    {/* Fluid Immediate Fade Transition for Active Certificate Content */}
                    <motion.div
                      key={activeGalleryTab}
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      className="w-full h-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-8 relative z-10 transform-gpu my-auto"
                      style={{ willChange: 'opacity' }}
                    >
                      {/* Left Column: Content */}
                      <div className="w-full lg:w-1/2 flex flex-col text-white z-10">
                        {/* Organization Logo & Name */}
                        <OrgLogoBadge organization={activeGalleryCert.organization} />

                        <h2
                          className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold mb-3 sm:mb-4 leading-tight drop-shadow-md font-sans"
                          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', letterSpacing: '-0.02em' }}
                        >
                          {activeGalleryCert.title}
                        </h2>

                        <p
                          className="text-white/85 text-[13px] lg:text-[14px] mb-4 sm:mb-6 leading-relaxed max-w-xl font-normal line-clamp-3 font-sans"
                          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                        >
                          {activeGalleryCert.description}
                        </p>

                        {/* Clean Metadata Row */}
                        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mb-4 sm:mb-6 text-xs sm:text-sm">
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1.5 text-white/70">
                              <svg className="w-3.5 h-3.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-white/60">Issued:</span>
                            </div>
                            <span className="text-white font-bold tracking-wide" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                              {activeGalleryCert.issueDate || "N/A"}
                            </span>
                          </div>

                          <div className="h-3 w-px bg-white/20 hidden sm:block" />

                          <div className="flex items-center gap-2 overflow-hidden">
                            <div className="flex items-center gap-1.5 text-white/70 shrink-0">
                              <svg className="w-3.5 h-3.5 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                              </svg>
                              <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider text-white/60">ID:</span>
                            </div>
                            <span className="text-white font-bold tracking-wide truncate max-w-[180px] sm:max-w-[220px]" title={activeGalleryCert.credentialId || "Verified Credential"} style={{ fontFamily: '"Space Grotesk", sans-serif' }}>
                              {activeGalleryCert.credentialId || "Verified Credential"}
                            </span>
                          </div>
                        </div>

                        {/* Skills */}
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                          {(activeGalleryCert.skills || []).map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 bg-white/10 rounded-lg text-[10px] md:text-xs font-semibold tracking-wider text-white/90 backdrop-blur-sm"
                            >
                              {skill}
                            </span>
                          ))}
                          <span className="py-1 text-[10px] md:text-xs font-medium tracking-wider text-white/50 ml-1">
                            ETC..
                          </span>
                        </div>

                        {/* Action Button */}
                        <div>
                          <a
                            href={activeGalleryCert.url ? (activeGalleryCert.url.startsWith('http') ? activeGalleryCert.url : `https://${activeGalleryCert.url}`) : '#'}
                            target={activeGalleryCert.url ? "_blank" : "_self"}
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-white hover:bg-white/95 active:bg-white/90 border border-white text-slate-900 font-bold rounded-full hover:scale-105 active:scale-95 transition-all duration-200 shadow-[0_3px_12px_rgba(0,0,0,0.12)] hover:shadow-[0_5px_18px_rgba(255,255,255,0.3)] group text-[11px] sm:text-xs tracking-wide cursor-pointer"
                          >
                            <span>Verify Credential</span>
                            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-slate-700 group-hover:text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      </div>

                      {/* Right Column: Certificate Image */}
                      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end z-10">
                        <div className="relative p-2 bg-white/10 rounded-2xl md:rounded-3xl backdrop-blur-md border border-white/20 shadow-2xl w-fit h-fit flex items-center justify-center">
                          <img
                            src={activeGalleryCert.image}
                            alt={activeGalleryCert.title}
                            loading="eager"
                            decoding="async"
                            className="w-full max-w-[320px] sm:max-w-[400px] lg:max-w-[480px] max-h-[260px] sm:max-h-[300px] lg:max-h-[350px] h-auto rounded-xl object-contain shadow-md"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Number Count at Bottom Right of the Colored Card */}
                    <div className="absolute bottom-3.5 right-5 sm:bottom-4 sm:right-7 lg:bottom-4.5 lg:right-8 flex items-center z-30">
                      <div
                        className="flex items-baseline font-black leading-none select-none drop-shadow-sm"
                        style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
                      >
                        <span className="text-white/90 text-xl sm:text-2xl lg:text-3xl font-black tracking-tight">
                          {(activeGalleryTab + 1).toString().padStart(2, '0')}
                        </span>
                        <span className="text-white/35 text-base sm:text-xl font-light mx-1">
                          /
                        </span>
                        <span className="text-white/50 text-xs sm:text-sm font-bold tracking-tight">
                          {galleryCertificatesData.length.toString().padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
