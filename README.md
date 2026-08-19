<div align="center">

# 🚀 Hashmil Muhammed | Interactive 3D Developer Portfolio
### *A Next-Generation Personal Web Application*

![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion_12-000000?style=for-the-badge&logo=framer&logoColor=white)
![Three.js](https://img.shields.io/badge/Three.js-WebGL-white?style=for-the-badge&logo=three.js&logoColor=black)
![Deployed on Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

<br>

###  **🔴 Live Portfolio Website:** [https://hashmil-portfolio.vercel.app/](https://hashmil-portfolio.vercel.app/)

<br>

> **Overview:** This project is a highly interactive, performance-optimized, and visually striking personal web application designed to showcase my expertise in AI/ML, Data Science, and Full-Stack Development. It leverages WebGL 3D elements, physics-based micro-interactions, and a premium dark-mode aesthetic.

</div>

---

## 📋 Table of Contents

- [🌟 Project Overview](#-project-overview)
- [✨ Key Features](#-key-features)
- [💻 Tech Stack & Ecosystem](#-tech-stack--ecosystem)
- [📁 Project Structure](#-project-structure)
- [🚀 Local Execution & Setup](#-local-execution--setup)
- [👨‍💻 Author Details](#-author-details)

---

## 🌟 Project Overview

Traditional portfolios are static. This project breaks the mold by incorporating **Three.js 3D renderings**, **Framer Motion physics**, and **Tailwind CSS Glassmorphism** to create a cinematic and immersive user experience. It serves as the central hub for my professional identity, aggregating my top machine learning models, full-stack applications, and data science research into one seamless interface.

---

## ✨ Key Features

- **🌐 Immersive 3D Experiences**: Integrated interactive 3D globes (`react-globe.gl`) and Spline scenes (`@splinetool/react-spline`) for a modern, futuristic feel.
- **⚡ Fluid Animations**: High-performance, hardware-accelerated animations using `framer-motion` for cinematic page transitions, scroll-reveals, and micro-interactions.
- **🎨 Dynamic Theming**: Premium dark-mode aesthetic with glassmorphism overlays, custom mesh gradients, and tailored organization color schemes.
- **🖱️ Custom Interactions**: Engineered a bespoke animated cursor that reacts to hover states across the application.
- **📧 Serverless Contact Architecture**: Fully functional contact system utilizing `Web3Forms`, securely handling job inquiries without requiring a dedicated backend server.
- **📱 Fully Responsive**: Flawless execution across all device sizes (Mobile, Tablet, 4K Displays) with custom CSS scrollbar hiding and optimized touch targets.

---

## 💻 Tech Stack & Ecosystem

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Core Framework** | React 19 + Vite | Next-gen lightning fast frontend rendering |
| **Styling Engine** | Tailwind CSS v3.4 | Utility-first CSS for glassmorphism and layouts |
| **Animations** | Framer Motion v12 | Spring-physics based scroll and layout animations |
| **3D Rendering** | Three.js & React Globe | WebGL hardware-accelerated interactive models |
| **Icons & Assets** | React Icons (Lucide/Si) | Scalable vector typography and brand icons |
| **Form Handling** | Web3Forms | Secure, backend-free SMTP email routing |

---

## 📁 Project Structure

```text
portfolio6/
├── public/               # Static assets (images, background textures, CV)
│   ├── backgrounds/      # Hero and section backgrounds
│   ├── certificates/     # High-res certificate images
│   ├── logos/            # Organization & company logos
│   └── projects/         # Project screenshots and assets
├── src/
│   ├── components/       # Reusable React components
│   │   ├── About.jsx     # Personal background & CLI typing effect
│   │   ├── Certifications.jsx # Certificate gallery & vertical modal
│   │   ├── Contact.jsx   # Contact form & 3D Globe
│   │   ├── ExperienceEducation.jsx # Timeline layouts
│   │   ├── Hero.jsx      # 3D Spline scene and introduction
│   │   ├── Projects.jsx  # Featured work and GitHub links
│   │   ├── Services.jsx  # Service offerings
│   │   └── Skills.jsx    # Tech stack visualizations & counters
│   ├── data/
│   │   └── mockData.js   # Centralized content API for the entire app
│   ├── App.jsx           # Main application entry & layout wrapper
│   ├── index.css         # Global Tailwind directives & custom utilities
│   └── main.jsx          # React DOM mounting
├── .env                  # Environment variables (Ignored in Git)
├── package.json          # Dependencies & scripts
├── tailwind.config.js    # Tailwind configuration & theme extensions
└── vite.config.js        # Vite bundler configuration
```

---

## 🚀 Local Execution & Setup

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) installed on your machine.

### 2. Clone the Repository
```bash
git clone https://github.com/Hashmil-Muhammed/hashmil-portfolio.git
cd portfolio6
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Create a `.env` file in the root directory. You will need a Web3Forms access key for the contact form to function:
```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
```

### 5. Run the Development Server
```bash
npm run dev
```
Open `http://localhost:5173` to view the application in your browser.

### 6. Production Build
To create an optimized production build for deployment (e.g., Vercel, Netlify):
```bash
npm run build
npm run preview
```

---

## 👨‍💻 Author Details

### Hashmil Muhammed
**AI Engineer | Data Scientist | Full-Stack Developer**

- 🎓 MCA — SCMS School of Engineering & Technology
- 💻 Specializing in AI, Machine Learning, Data Engineering, Financial Analytics, and Full-Stack Development
- 🌱 Passionate about building intelligent, scalable, and production-ready software solutions

**Live Portfolio:** [https://hashmil-portfolio.vercel.app/](https://hashmil-portfolio.vercel.app/)  
**GitHub:** [https://github.com/Hashmil-Muhammed](https://github.com/Hashmil-Muhammed)  
**LinkedIn:** [https://www.linkedin.com/in/hashmil-muhammed08/](https://www.linkedin.com/in/hashmil-muhammed08/)

---

<div align="center">

### ⭐ If you found this portfolio useful, consider giving it a Star.

Thank you for visiting!

</div>
