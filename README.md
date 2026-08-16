# 🚀 Hashmil Muhammed - Interactive 3D Developer Portfolio

![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-8-purple?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-black?style=for-the-badge&logo=framer)
![Three.js](https://img.shields.io/badge/Three.js-3D-white?style=for-the-badge&logo=three.js)

Welcome to the source code of my personal developer portfolio! This project is a highly interactive, performance-optimized, and visually striking web application designed to showcase my skills, projects, certifications, and experience.

It utilizes modern web technologies, incorporating 3D elements, micro-interactions, and smooth physics-based animations to create a memorable and premium user experience.

---

## ✨ Key Features

- **Immersive 3D Experiences**: Integrated interactive 3D globes (`react-globe.gl`) and Spline scenes (`@splinetool/react-spline`) for a modern, futuristic feel.
- **Fluid Animations**: High-performance, hardware-accelerated animations using `framer-motion` for page transitions, scroll-reveals, and micro-interactions.
- **Interactive Galleries**: A custom-built, full-screen vertical-tab modal gallery for viewing certifications with animated layout transitions.
- **Dynamic Theming**: Premium dark-mode aesthetic with glassmorphism overlays, custom gradients, and tailored organization color schemes.
- **Serverless Contact Form**: Fully functional contact system utilizing `Web3Forms`, securely handling both job inquiries and project collaborations without a backend.
- **Fully Responsive**: Flawless execution across all device sizes with custom CSS scrollbar hiding and optimized touch targets.

## 🛠️ Tech Stack

### Core
- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)

### Libraries & Ecosystem
- **Animations**: `framer-motion`
- **3D Graphics**: `three`, `react-globe.gl`, `@splinetool/react-spline`
- **Icons**: `react-icons`
- **Form Handling**: Web3Forms (via secure Environment Variables)

---

## 📂 Project Structure

```text
portfolio6/
├── public/               # Static assets (images, background textures, CV)
│   ├── backgrounds/      # Hero and section backgrounds
│   ├── certificates/     # High-res certificate images
│   ├── logos/            # Organization & company logos
│   └── projects/         # Project screenshots and assets
├── src/
│   ├── components/       # Reusable React components
│   │   ├── About.jsx     # Personal background
│   │   ├── Certifications.jsx # Certificate gallery & modal
│   │   ├── Contact.jsx   # Contact form & 3D Globe
│   │   ├── ExperienceEducation.jsx # Timeline layouts
│   │   ├── Projects.jsx  # Featured work
│   │   ├── Services.jsx  # Service offerings
│   │   └── Skills.jsx    # Tech stack visualizations
│   ├── data/
│   │   └── mockData.js   # Centralized content data for the entire app
│   ├── App.jsx           # Main application entry & layout wrapper
│   ├── index.css         # Global Tailwind directives & custom utilities
│   └── main.jsx          # React DOM mounting
├── .env                  # Environment variables (Ignored in Git)
├── package.json          # Dependencies & scripts
├── tailwind.config.js    # Tailwind configuration & theme extensions
└── vite.config.js        # Vite bundler configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) installed on your machine.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/your-portfolio-repo.git
   cd portfolio6
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   Create a `.env` file in the root directory and add your Web3Forms access key (or any other required secrets):
   ```env
   VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
   ```

4. **Run the Development Server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` to view it in your browser.

### Production Build

To create an optimized production build:
```bash
npm run build
```
You can then preview the built files locally using:
```bash
npm run preview
```

---

## 🤝 Contact

**Hashmil Muhammed**  
Feel free to reach out via the contact form on the live site or connect with me on LinkedIn.

*Designed & Engineered with ❤️ by Hashmil Muhammed.*
