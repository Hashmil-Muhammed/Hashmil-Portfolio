// ============================================================
// MOCK DATA — Designed to be API-ready for FastAPI integration
// ============================================================

export const servicesData = [
  {
    id: 1,
    icon: "🧠",
    title: "AI & ML Engineering",
    description:
      "Designing and deploying advanced machine learning models and deep neural networks. Specializing in computer vision (CNNs) and NLP to build scalable, intelligent systems from research to production.",
    tags: ["Machine Learning", "Deep Learning", "NLP", "CNNs"],
  },
  {
    id: 2,
    icon: "🐍",
    title: "Full-Stack Development",
    description:
      "Engineering robust backend architectures and RESTful APIs using Django and FastAPI. Seamlessly integrating complex AI models into modern, responsive web applications with end-to-end deployment.",
    tags: ["Django", "FastAPI", "React", "REST APIs"],
  },
  {
    id: 3,
    icon: "📊",
    title: "Data Science & Analytics",
    description:
      "Extracting actionable intelligence from complex datasets through advanced statistical modeling and EDA. Building automated data preprocessing pipelines and interactive dashboards to drive strategic decisions.",
    tags: ["Power BI", "Pandas", "NumPy", "EDA"],
  },
];

export const projectsData = [
  {
    id: 1,
    title: "MindCare AI",
    subtitle: "Multimodal AI Mental Health Platform",
    description: "A full-stack intelligent counselling platform leveraging four distinct AI modalities—behavioural data, facial emotion recognition, voice emotion detection, and NLP chat analysis—for real-time therapeutic assessment.",
    year: "Deployed",
    status: "Completed",
    projectType: "Full-Stack AI / Multimodal AI", // Triggers AI filter
    tags: ["TensorFlow", "FastAPI", "React", "OpenCV", "NLP"],
    accentColor: "#8b5cf6", // Indigo/Purple accent
    previewVideo: "/projects/mindcare-preview.mp4",
    liveLink: "https://smart-mental-health-counselling-sys.vercel.app/",
    gitLink: "https://github.com/Hashmil-Muhammed/MindCareAI-Smart_Mental_Health_Counselling_SystemUsing_Multimodal_AI"
  },
  {
    id: 2,
    title: "HOSTELLO",
    subtitle: "Automated Smart Hostel Management System",
    description: "A comprehensive digital platform designed to streamline daily hostel operations. Features include smart attendance tracking, dynamic room allocation, automated guardian alerts, and centralized fee management.",
    year: "Deployed",
    status: "Completed",
    projectType: "Full-Stack",
    tags: ["Django", "Python", "SQLite", "Bootstrap", "JavaScript"],
    accentColor: "#10b981", // Emerald Green accent
    previewVideo: "/projects/hostello-preview.mp4",
    liveLink: "https://hashmil.pythonanywhere.com/",
    gitLink: "https://github.com/Hashmil-Muhammed/HOSTELLO-Automated_Smart_Hostel_Management_System_using_Django"
  },
  {
    id: 3,
    title: "WildGuard AI",
    subtitle: "Agentic AI Wildlife Monitoring System",
    description: "An autonomous agentic workflow built on Google ADK 2.0. It ingests wildlife reports through a secure LLM pipeline featuring pre-LLM PII redaction, Model Context Protocol (MCP) integration, and Human-in-the-Loop (HITL) risk routing.",
    year: "",
    status: "Completed",
    projectType: "Agentic AI",
    tags: ["Google ADK", "Python", "LLMs", "MCP", "HITL"],
    accentColor: "#10b981", // Emerald Green accent
    previewVideo: "",
    previewImage: "/projects/WildGuard_AI.png",
    liveLink: "",
    gitLink: "https://github.com/Hashmil-Muhammed/WildGuard_AI"
  },
  {
    id: 4,
    title: "FinSight N100",
    subtitle: "Enterprise-Grade Financial Intelligence & REST API",
    description: "An automated financial engineering and business intelligence platform analyzing 10 years of historical data for 92 NSE Nifty 100 companies. It features a high-performance FastAPI backend, K-Means ML clustering, and a comprehensive 9-screen Streamlit dashboard calculating 50+ advanced KPIs.",
    year: "Deployed",
    status: "Completed",
    projectType: "Data Science & Analytics",
    tags: ["FastAPI", "Streamlit", "Pandas", "Machine Learning", "SQLite"],
    accentColor: "#3b82f6", // Blue accent for finance
    previewVideo: "",
    previewImage: "/projects/finsight_n100.png",
    liveLink: "https://finsight-n100.streamlit.app/",
    gitLink: "https://github.com/Hashmil-Muhammed/FinSight_N100-Nifty100_Financial_Intelligence_Platform"
  },
  {
    id: 5,
    title: "FundLens",
    subtitle: "End-to-End Mutual Fund Analytics Platform",
    description: "A comprehensive business intelligence platform utilizing Python, Power BI, and SQL to analyze live mutual fund data. Features include advanced risk modeling (VaR, Monte Carlo), predictive robo-advisory, and an interactive Streamlit dashboard.",
    year: "Deployed",
    status: "Completed",
    projectType: "Data Science & Analytics",
    tags: ["Python", "Power BI", "SQL", "Streamlit", "Pandas"],
    accentColor: "#f43f5e", // Rose accent
    previewVideo: "",
    previewImage: "/projects/fundlens.png",
    liveLink: "https://bluestock-analytics-hashmil.streamlit.app/",
    gitLink: "https://github.com/Hashmil-Muhammed/FundLens-Mutual_Fund_Analytics"
  },
  {
    id: 6,
    title: "DocPlus",
    subtitle: "Online Doctor Appointment Booking Platform",
    description: "A full-stack healthcare application built with React.js and Firebase, featuring real-time data storage, smart appointment scheduling, and secure doctor-patient interactions.",
    year: "",
    status: "Completed",
    projectType: "Full-Stack",
    tags: ["React", "Firebase", "REST API"],
    accentColor: "#220bf5ff", // Amber/Yellow accent
    previewVideo: "",
    previewImage: "/projects/DocPlus.png",
    gitLink: "https://github.com/Hashmil-Muhammed/Doctor_Appointment-Using_react_firebase"
  },
];

export const experienceData = [
  {
    id: 1,
    period: "Aug 2022 – Mar 2023",
    role: "1. Django Full-Stack \n Developer - Intern",
    company: "Inmakes Infotech Pvt Ltd",
    location: "Kochi, Kerala, India",
    description:
      "Developed robust backend logic, RESTful APIs, and managed end-to-end database design with responsive HTML/CSS/JavaScript frontend integration.",
    // skills: ["Django", "Python", "REST API", "MySQL", "HTML/CSS"],
  },
  {
    id: 2,
    period: "July 2023 – Feb 2024",
    role: "2. Data Science - Intern",
    company: "Luminar Technolab",
    location: "Kochi, Kerala, India",
    description:
      "Optimized ML/DL predictive models, engineered robust data preprocessing pipelines using NumPy and Pandas, and designed interactive Power BI and SQL dashboards for business intelligence reporting.",
    // skills: ["Python", "ML/DL", "Power BI", "NumPy", "Pandas", "SQL"],
  },
  {
    id: 3,
    period: "May 2026 – July 2026",
    role: " 3. Data Analyst - Intern",
    company: "Bluestock™",
    location: "Pune, Maharashtra, India",
    description:
      "Analyzed large datasets to extract actionable business insights, built interactive dashboards, and optimized data workflows to support data-driven decision-making.",
    // skills: ["Data Analysis", "SQL", "Excel", "Power BI", "Python"],
  },

  // {
  //   id: 4,
  //   period: "Aug 2026 – Dec 2026",
  //   role: "Dummy Experience",
  //   company: "Test Company",
  //   location: "Remote",
  //   description: "Dummy role on the left side to test the final curve.",
  // },
  // {
  //   id: 5,
  //   period: "Jan 2027 – May 2027",
  //   role: "Dummy Experience 2",
  //   company: "Test Company 2",
  //   location: "Remote",
  //   description: "Dummy role on the right side to test the extended curve.",
  // }

];

export const educationData = [
  {
    id: 1,
    period: "2020 – 2023",
    degree: "B.Sc Computer Science",
    institution: "College of Applied Science (CAS)",
    university: "University of Calicut",
    location: "Malappuram, Kerala, India",
    status: "Completed",
  },
  {
    id: 2,
    period: "2024 – 2026",
    degree: "Master of Computer\nApplications (MCA)",
    institution: "SCMS School of Engineering and Technology (SSET)",
    university: "APJ Abdul Kalam Technological University (KTU)",
    location: "Ernakulam, Kerala, India",
    status: "Ongoing",
  },
];

export const skillsData = [
  {
    id: 1,
    title: "Programming Languages",
    category: "Languages",
    group: "Languages & Web",
    iconKey: "code",
    color: "#F59E0B", // Amber / Gold
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    accentBorder: "group-hover:border-amber-500/50",
    badgeBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    description: "Core syntax, data structures, and algorithmic scripting languages powering end-to-end applications and data pipelines.",
    skills: ["Python", "SQL", "JavaScript", "HTML", "CSS"],
  },
  {
    id: 2,
    title: "Frontend Development",
    category: "Frontend",
    group: "Languages & Web",
    iconKey: "layout",
    color: "#06B6D4", // Cyan
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accentBorder: "group-hover:border-cyan-500/50",
    badgeBg: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    description: "Building responsive, modern, and accessible user interfaces with reactive frameworks and agentic UI protocols.",
    skills: ["React.js", "HTML", "CSS", "JavaScript", "Responsive Design", "Frontend Basics", "Google ADK", "MCP"],
  },
  {
    id: 3,
    title: "Backend Frameworks",
    category: "Backend",
    group: "Full-Stack & APIs",
    iconKey: "server",
    color: "#10B981", // Emerald
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accentBorder: "group-hover:border-emerald-500/50",
    badgeBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    description: "Architecting high-throughput server runtimes, asynchronous microservices, and secure enterprise web backends.",
    skills: ["Django", "Flask Basics", "FastAPI", "REST APIs"],
  },
  {
    id: 4,
    title: "API Integration",
    category: "APIs",
    group: "Full-Stack & APIs",
    iconKey: "network",
    color: "#8B5CF6", // Violet / Purple
    gradient: "from-purple-500/20 via-violet-500/10 to-transparent",
    accentBorder: "group-hover:border-purple-500/50",
    badgeBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    description: "Designing RESTful contracts, third-party webhook integrations, and seamless full-stack state synchronizations.",
    skills: ["REST APIs", "API Design", "Third-Party API Integration", "Backend-Frontend Integration"],
  },
  {
    id: 5,
    title: "ML & AI Frameworks",
    category: "Machine Learning",
    group: "AI & Deep Learning",
    iconKey: "brain",
    color: "#EF4444", // Crimson / Red
    gradient: "from-red-500/20 via-rose-500/10 to-transparent",
    accentBorder: "group-hover:border-red-500/50",
    badgeBg: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
    description: "Constructing, training, and deploying deep neural networks and state-of-the-art pretrained transformer architectures.",
    skills: ["PyTorch", "TensorFlow", "Keras", "Hugging Face Transformers"],
  },
  {
    id: 6,
    title: "NLP & Deep Learning",
    category: "Deep Learning",
    group: "AI & Deep Learning",
    iconKey: "cpu",
    color: "#EC4899", // Pink / Rose
    gradient: "from-pink-500/20 via-rose-500/10 to-transparent",
    accentBorder: "group-hover:border-pink-500/50",
    badgeBg: "bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20",
    description: "Specialized language processing pipelines, attention mechanisms, convolutional vision models, and custom training loops.",
    skills: ["Natural Language Processing", "Transformer Architecture", "CNN", "Training Loops", "Evaluation Pipelines"],
  },
  {
    id: 7,
    title: "Data Science & Analytics",
    category: "Analytics",
    group: "Data Science & Analytics",
    iconKey: "chart",
    color: "#3B82F6", // Blue
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
    accentBorder: "group-hover:border-blue-500/50",
    badgeBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    description: "Comprehensive statistical modeling, automated ETL extraction, feature engineering, and predictive inference.",
    skills: ["Machine Learning", "Deep Learning", "ETL", "Feature Engineering", "Data Cleaning", "Data Analysis"],
  },
  {
    id: 8,
    title: "Data Science Tools",
    category: "Data Tools",
    group: "Data Science & Analytics",
    iconKey: "table",
    color: "#14B8A6", // Teal
    gradient: "from-teal-500/20 via-emerald-500/10 to-transparent",
    accentBorder: "group-hover:border-teal-500/50",
    badgeBg: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
    description: "High-performance vector computation, exploratory data analysis, business intelligence, and dynamic visualizations.",
    skills: ["Pandas", "NumPy", "Scikit-learn", "OpenCV", "Matplotlib", "Seaborn", "Power BI", "Microsoft Excel"],
  },
  {
    id: 9,
    title: "Database Management",
    category: "Databases",
    group: "Databases & Tools",
    iconKey: "database",
    color: "#6366F1", // Indigo
    gradient: "from-indigo-500/20 via-blue-500/10 to-transparent",
    accentBorder: "group-hover:border-indigo-500/50",
    badgeBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    description: "Relational database modeling, query optimization, indexing strategy, and scalable structured storage.",
    skills: ["MySQL", "SQLite", "PostgreSQL", "Database Design", "SQL Queries"],
  },
  {
    id: 10,
    title: "Developer Tools",
    category: "DevTools",
    group: "Databases & Tools",
    iconKey: "tools",
    color: "#64748B", // Slate
    gradient: "from-slate-500/20 via-zinc-500/10 to-transparent",
    accentBorder: "group-hover:border-slate-500/50",
    badgeBg: "bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/20",
    description: "Modern developer tooling, containerization, collaborative version control, and GPU-accelerated computing environments.",
    skills: ["Git", "GitHub", "Docker", "VS Code", "Jupyter Notebook", "Google Colab", "PyCharm"],
  },
  {
    id: 11,
    title: "Soft Skills",
    category: "Mindset",
    group: "Soft Skills",
    iconKey: "users",
    color: "#10B981", // Emerald / Green
    gradient: "from-emerald-500/20 via-green-500/10 to-transparent",
    accentBorder: "group-hover:border-emerald-500/50",
    badgeBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
    description: "Analytical problem solving, active communication, collaborative project leadership, and continuous learning adaptability.",
    skills: ["Problem Solving", "Good Communication", "Learning Attitude", "Team Collaboration", "Project Discussions", "Attention to Detail", "Quick Learning", "Structured Team Environment"],
  },
];

// Real Certification Data with premium hex colors perfectly suited to each certificate image
export const certificationsData = [
  {
    id: 1,
    title: "Machine Learning Operations Engineer Associate",
    organization: "Microsoft",
    issueDate: "23 Jun 2026",
    expirationDate: "24 Jun 2027",
    credentialId: "327A435299965C34",
    description: "Successfully passed all requirements for the Microsoft Certified: Machine Learning Operations Engineer Associate credential, demonstrating expertise in MLOps and Azure.",
    skills: ["Azure Machine Learning", "MLOps", "Model Deployment"],
    url: "https://learn.microsoft.com/en-gb/users/hashmilmuhammed-9788/credentials/327a435299965c34?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    image: "/certificates/Microsoft Certified Machine Learning Operations Engineer Associate.png",
    color: "#15803d" // Microsoft Azure Blue
  },
  {
    id: 2,
    title: "Oracle Cloud Infrastructure 2024 Generative AI Professional",
    organization: "Oracle University",
    issueDate: "2024",
    expirationDate: "No Expiration",
    credentialId: "313037274OCI2024GAIOCP",
    description: "Recognized by Oracle Corporation as an Oracle Certified Professional in Generative AI, demonstrating proficiency in leveraging OCI for Generative AI solutions.",
    skills: ["Generative AI", "LLMs", "RAG Architecture"],
    url: "https://profile.oracle.com/myprofile/account/certificate-browser?id=5BE127091739C8E38E013C288E3F94F803",
    image: "/certificates/Oracle Cloud Infrastructure 2024 Generative AI Professional certification.jpg",
    color: "#991B1B" // Oracle Crimson Red
  },
  {
    id: 3,
    title: "Introduction to Internet of Things (Elite)",
    organization: "NPTEL / IIT Kharagpur",
    issueDate: "Apr 2026",
    expirationDate: "No Expiration",
    credentialId: "NPTEL26CS37S766900199",
    description: "Successfully completed the 12-week Elite course on Introduction to Internet of Things with a consolidated score of 80%, awarded by IIT Kharagpur and NPTEL.",
    skills: ["Internet of Things (IoT)", "Sensors & Actuators", "Embedded Systems"],
    url: "https://nptel.ac.in/noc/E_Certificate/NOC26CS37S76690019904540522",
    image: "/certificates/NPTEL - Introduction to Internet of Things.jpg",
    color: "#B45309" // NPTEL Elite Warm Amber/Gold
  },
  {
    id: 4,
    title: "Microsoft Azure AI Essentials Professional Certificate",
    organization: "Microsoft & LinkedIn",
    issueDate: "29 Jun 2026",
    expirationDate: "No Expiration",
    credentialId: "793b062ab97bb34a...",
    description: "Completed the comprehensive learning path for Microsoft Azure AI Essentials, covering foundational AI concepts and practical Microsoft Azure AI capabilities.",
    skills: ["Azure AI Studio", "Azure OpenAI", "Generative AI"],
    url: "https://www.linkedin.com/learning/certificates/793b062ab97bb34a8ae768152f70e5a93f6a62bc21dc349c360544b5c59c7622",
    image: "/certificates/Microsoft Azure AI Essentials Professional Certificate by Microsoft and LinkedIn.jpg",
    color: "#0077B5" // LinkedIn / Microsoft Blue
  }
];

export const galleryCertificatesData = [
  {
    id: 1,
    tabName: "MLOps Engineer",
    shortOrg: "Microsoft",
    title: "Machine Learning Operations Engineer Associate",
    organization: "Microsoft",
    theme: {
      primary: "#0078D4", // Microsoft Azure Blue
      gradient: "from-[#005a9e] via-[#0078d4] to-[#38bdf8]",
      lightBadge: "bg-blue-50 text-blue-700 border-blue-200",
      accent: "#93c5fd"
    },
    description: "Successfully passed all requirements for the Microsoft Certified: Machine Learning Operations Engineer Associate credential, demonstrating expertise in MLOps and Azure.",
    highlights: [
      "Microsoft Certified Azure MLOps Engineer",
      "Production ML Pipelines & Model Monitoring",
      "Azure Machine Learning Workspace & Compute",
      "Continuous Integration & Continuous Delivery (CI/CD) for AI"
    ],
    skills: ["Azure Machine Learning", "MLOps", "Model Deployment"],
    issueDate: "23 Jun 2026",
    expirationDate: "24 Jun 2027",
    credentialId: "327A435299965C34",
    url: "https://learn.microsoft.com/en-gb/users/hashmilmuhammed-9788/credentials/327a435299965c34?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    image: "/certificates/Microsoft Certified Machine Learning Operations Engineer Associate.png"
  },
  {
    id: 2,
    tabName: "OCI Generative AI",
    shortOrg: "Oracle University",
    title: "Oracle Cloud Infrastructure 2024 Generative AI Professional",
    organization: "Oracle University",
    theme: {
      primary: "#991B1B", // Oracle Crimson Red
      gradient: "from-[#7f1d1d] via-[#991b1b] to-[#ef4444]",
      lightBadge: "bg-red-50 text-red-700 border-red-200",
      accent: "#fca5a5"
    },
    description: "Recognized by Oracle Corporation as an Oracle Certified Professional in Generative AI, demonstrating proficiency in leveraging OCI for Generative AI solutions.",
    highlights: [
      "Oracle Certified Professional Credential",
      "Large Language Models (LLMs) & Fine-Tuning on OCI",
      "Retrieval-Augmented Generation (RAG) Architecture",
      "OCI Generative AI Dedicated AI Clusters"
    ],
    skills: ["Generative AI", "LLMs", "RAG Architecture"],
    issueDate: "2024",
    expirationDate: "No Expiration",
    credentialId: "313037274OCI2024GAIOCP",
    url: "https://profile.oracle.com/myprofile/account/certificate-browser?id=5BE127091739C8E38E013C288E3F94F803",
    image: "/certificates/Oracle Cloud Infrastructure 2024 Generative AI Professional certification.jpg"
  },
  {
    id: 3,
    tabName: "NPTEL IoT (Elite)",
    shortOrg: "NPTEL / IIT Kharagpur",
    title: "Introduction to Internet of Things (Elite)",
    organization: "NPTEL / IIT Kharagpur",
    theme: {
      primary: "#B45309", // NPTEL Warm Amber / Gold
      gradient: "from-[#92400e] via-[#b45309] to-[#f59e0b]",
      lightBadge: "bg-amber-50 text-amber-700 border-amber-200",
      accent: "#fde68a"
    },
    description: "Successfully completed the 12-week Elite course on Introduction to Internet of Things with a consolidated score of 80%, awarded by IIT Kharagpur and NPTEL.",
    highlights: [
      "12-Week Rigorous Curriculum by IIT Kharagpur Faculty",
      "Awarded Elite Distinction Certificate (80% Score)",
      "IoT Sensors, Actuators, Communication Protocols & Cloud",
      "Python for IoT & Embedded System Design"
    ],
    skills: ["Internet of Things (IoT)", "Sensors & Actuators", "Embedded Systems"],
    issueDate: "Apr 2026",
    expirationDate: "No Expiration",
    credentialId: "NPTEL26CS37S766900199",
    url: "https://nptel.ac.in/noc/E_Certificate/NOC26CS37S76690019904540522",
    image: "/certificates/NPTEL - Introduction to Internet of Things.jpg"
  },
  {
    id: 4,
    tabName: "Azure AI Essentials",
    shortOrg: "Microsoft & LinkedIn",
    title: "Microsoft Azure AI Essentials Professional Certificate",
    organization: "Microsoft & LinkedIn",
    theme: {
      primary: "#0077B5", // LinkedIn / Microsoft Blue
      gradient: "from-[#005582] via-[#0077b5] to-[#38bdf8]",
      lightBadge: "bg-sky-50 text-sky-700 border-sky-200",
      accent: "#7dd3fc"
    },
    description: "Completed the comprehensive learning path for Microsoft Azure AI Essentials, covering foundational AI concepts and practical Microsoft Azure AI capabilities.",
    highlights: [
      "Joint Career Credential by Microsoft & LinkedIn Learning",
      "Azure AI Vision, NLP & Azure OpenAI Service",
      "Responsible AI Framework & Safe Model Deployment",
      "Hands-on AI Solution Building on Azure"
    ],
    skills: ["Azure AI Studio", "Azure OpenAI", "Generative AI"],
    issueDate: "29 Jun 2026",
    expirationDate: "No Expiration",
    credentialId: "793b062ab97bb34a...",
    url: "https://www.linkedin.com/learning/certificates/793b062ab97bb34a8ae768152f70e5a93f6a62bc21dc349c360544b5c59c7622",
    image: "/certificates/Microsoft Azure AI Essentials Professional Certificate by Microsoft and LinkedIn.jpg"
  },
  {
    id: 5,
    tabName: "MCA Degree",
    shortOrg: "SCMS / KTU",
    title: "Master of Computer Applications (MCA)",
    organization: "SCMS / KTU",
    theme: {
      primary: "#4F46E5", // Indigo
      gradient: "from-[#3730A3] via-[#4F46E5] to-[#818CF8]",
      lightBadge: "bg-indigo-50 text-indigo-700 border-indigo-200",
      accent: "#A5B4FC"
    },
    description: "Postgraduate degree in Master of Computer Applications (MCA) from SCMS School of Engineering and Technology (SSET), affiliated with APJ Abdul Kalam Technological University (KTU).",
    highlights: [
      "Advanced Computer Science Curriculum",
      "Software Engineering & Architecture",
      "Full-Stack Development & AI Integration",
      "Major Capstone Project Execution"
    ],
    skills: ["Computer Science", "Software Engineering", "Application Development"],
    issueDate: "2026",
    expirationDate: "No Expiration",
    credentialId: "MCA-KTU-SSET",
    url: "",
    image: "/certificates/MCA-Programme_Completion_Certificate.jpeg"
  },
  {
    id: 6,
    tabName: "Data Analyst Intern",
    shortOrg: "Bluestock Fintech",
    title: "Data Analyst Intern",
    organization: "Bluestock Fintech",
    theme: {
      primary: "#0284C7", // Ocean Sky Blue
      gradient: "from-[#0369a1] via-[#0284c7] to-[#38bdf8]",
      lightBadge: "bg-sky-50 text-sky-700 border-sky-200",
      accent: "#7dd3fc"
    },
    description: "Successfully completed the internship as a Data Analyst Intern at Bluestock Fintech under the guidance of Mr. Yash Kale.",
    highlights: [
      "Data Analysis & Financial Analytics Workflows",
      "Internship Experience under Industry Mentorship",
      "Market Data Processing & Reporting Pipelines",
      "Analytical Dashboard & Metric Formulations"
    ],
    skills: ["Financial Data Analytics", "Python (Pandas/NumPy)", "SQL"],
    issueDate: "28/07/2026",
    expirationDate: "",
    credentialId: "BFDA89276",
    url: "https://bluestock.in/hr/emp/",
    image: "/certificates/BlueStock-DataAnalyst_Intern.jpg"
  },
  {
    id: 7,
    tabName: "What Is GenAI?",
    shortOrg: "LinkedIn Learning",
    title: "What Is Generative AI?",
    organization: "LinkedIn Learning",
    theme: {
      primary: "#0077B5", // LinkedIn Blue
      gradient: "from-[#005582] via-[#0077b5] to-[#38bdf8]",
      lightBadge: "bg-blue-50 text-blue-700 border-blue-200",
      accent: "#93c5fd"
    },
    description: "Course completed covering top skills in Artificial Intelligence and Generative AI Tools.",
    highlights: [
      "Foundations of Generative Artificial Intelligence",
      "Modern Generative AI Tools & Prompt Systems",
      "Large Model Capabilities & Deep Learning Concepts",
      "Responsible & Ethical AI Application Practices"
    ],
    skills: ["Generative AI", "Large Language Models (LLMs)", "Prompt Engineering"],
    issueDate: "Jun 21, 2026",
    expirationDate: "",
    credentialId: "8a66452a94ef6c86aee6cbe437459e6f510b2ae81220cab18c5c9dc9b8b21f34",
    url: "https://www.linkedin.com/learning/certificates/8a66452a94ef6c86aee6cbe437459e6f510b2ae81220cab18c5c9dc9b8b21f34?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3Bzf408E70Q%2BiwESSA8RN58w%3D%3D",
    image: "/certificates/What Is Generative AI.jpg"
  },
  {
    id: 8,
    tabName: "Data Analyst (Big 4)",
    shortOrg: "One Roadmap",
    title: "Data Analyst - Big 4 Ready",
    organization: "One Roadmap",
    theme: {
      primary: "#7C3AED", // Vibrant Violet / Purple
      gradient: "from-[#6d28d9] via-[#7c3aed] to-[#a78bfa]",
      lightBadge: "bg-purple-50 text-purple-700 border-purple-200",
      accent: "#c4b5fd"
    },
    description: "Passed the One Roadmap Skill Certification Test in Data Analyst - Big 4 Ready.",
    highlights: [
      "Big 4 Ready Advanced Data Analytical Methods",
      "Statistical Analysis & Business Intelligence Insights",
      "Data Transformation, Cleaning & Structured Modeling",
      "Verified Certification by One Roadmap Platform"
    ],
    skills: ["Advanced SQL", "Business Intelligence", "Exploratory Data Analysis (EDA)"],
    issueDate: "May 19, 2026",
    expirationDate: "",
    credentialId: "CERT-605E2A49",
    url: "https://www.oneroadmap.io/skills/data-analyst-big4/certificate/CERT-605E2A49",
    image: "/certificates/Data Analyst - Big 4 Ready.jpg"
  },
  {
    id: 9,
    tabName: "AI Orientation",
    shortOrg: "Technovalley",
    title: "5-Day Career Orientation on Artificial Intelligence",
    organization: "Technovalley Software India Pvt. Ltd.",
    theme: {
      primary: "#0D9488", // Deep Emerald Teal
      gradient: "from-[#0f766e] via-[#0d9488] to-[#2dd4bf]",
      lightBadge: "bg-teal-50 text-teal-700 border-teal-200",
      accent: "#99f6e4"
    },
    description: "Successfully participated in the 5-Day Career Orientation on Artificial Intelligence conducted by Technovalley.",
    highlights: [
      "AI Industry Ecosystem & Career Roadmap",
      "Applied Machine Learning & Real-World Use Cases",
      "Emerging Trends in Intelligent Automation",
      "Conducted by Technovalley Software India Pvt. Ltd."
    ],
    skills: ["Artificial Intelligence (AI)", "Machine Learning", "Deep Learning"],
    issueDate: "February 20, 2026",
    expirationDate: "",
    credentialId: "",
    url: "",
    image: "/certificates/5-Day Career Orientation on Artificial Intelligence.jpg"
  },
  {
    id: 10,
    tabName: "Data Science & ML",
    shortOrg: "GUVI / HCL",
    title: "Level Up your Career with Data Science & Machine Learning Fundamentals",
    organization: "GUVI / HCL",
    theme: {
      primary: "#16A34A", // Fresh Green
      gradient: "from-[#15803d] via-[#16a34a] to-[#4ade80]",
      lightBadge: "bg-green-50 text-green-700 border-green-200",
      accent: "#86efac"
    },
    description: "Certificate of participation in GUVI's webinar on Data Science and Machine Learning Fundamentals.",
    highlights: [
      "Data Science & Predictive Modeling Fundamentals",
      "Core Machine Learning Algorithms & Applications",
      "Joint Technical Initiative by GUVI & HCL Tech",
      "Hands-on ML Exploration & Practical Foundations"
    ],
    skills: ["Data Science", "Machine Learning", "Predictive Modeling"],
    issueDate: "19 June, 2026",
    expirationDate: "",
    credentialId: "823e1yM817z81HX6T9",
    url: "https://www.guvi.in/verify-certificate?id=823e1yM817z81HX6T9",
    image: "/certificates/HCL GUVI Certification.png"
  },
  {
    id: 11,
    tabName: "Data Science (Python)",
    shortOrg: "Luminar Technolab",
    title: "Data Science - Python",
    organization: "Luminar Technolab",
    theme: {
      primary: "#EA580C", // Sunset Orange
      gradient: "from-[#c2410c] via-[#ea580c] to-[#fb923c]",
      lightBadge: "bg-orange-50 text-orange-700 border-orange-200",
      accent: "#fdba74"
    },
    description: "Successfully completed the course in Data Science - Python of 07 months duration with grade A+.",
    highlights: [
      "07 Months Comprehensive Intensive Training",
      "Graduated with Top Distinction: Grade A+",
      "Python for Data Science, Pandas, NumPy & Scikit-Learn",
      "End-to-End Machine Learning & Deep Learning Projects"
    ],
    skills: ["Data Science", "Machine Learning", "Python (Pandas/NumPy)"],
    issueDate: "04 March 2024",
    expirationDate: "",
    credentialId: "LUM/KOC/32336",
    url: "",
    image: "/certificates/Luminar - Course Completion Certificat3.jpg"
  },
  {
    id: 12,
    tabName: "NACTET Data Science",
    shortOrg: "NACTET / Luminar",
    title: "DATA SCIENCE - Python",
    organization: "National Council for Technology and Training (NACTET)",
    theme: {
      primary: "#B91C1C", // Deep Crimson Red
      gradient: "from-[#991b1b] via-[#b91c1c] to-[#f87171]",
      lightBadge: "bg-red-50 text-red-700 border-red-200",
      accent: "#fca5a5"
    },
    description: "Successfully completed the course in DATA SCIENCE - Python of 6 Months duration with grade A+.",
    highlights: [
      "National Council for Technology & Training (NACTET) Accredited",
      "6 Months Rigorous Curriculum completed with Grade A+",
      "Advanced Statistical Analysis & Python ML Pipelines",
      "Government & Autonomous Body Verified Credential"
    ],
    skills: ["Data Science", "Statistical Analysis", "Machine Learning"],
    issueDate: "15.03.2024",
    expirationDate: "",
    credentialId: "45348",
    url: "https://www.nactetindia.org/search.php",
    image: "/certificates/Luminar - NACTET Certification.jpg"
  },
  {
    id: 13,
    tabName: "AI Agents Course",
    shortOrg: "Kaggle",
    title: "5-Day AI Agents: Intensive Vibe Coding Course",
    organization: "Kaggle",
    theme: {
      primary: "#0284C7", // Kaggle Cyan / Blue
      gradient: "from-[#0369a1] via-[#0284c7] to-[#22d3ee]",
      lightBadge: "bg-cyan-50 text-cyan-700 border-cyan-200",
      accent: "#67e8f9"
    },
    description: "Successfully earned the badge for completing the 5-Day AI Agents Intensive Vibe Coding Course.",
    highlights: [
      "Autonomous AI Agents Architecture & Tool Use",
      "Multi-Agent Orchestration & Workflow Design",
      "Vibe Coding & Rapid AI Agent Prototyping",
      "Awarded by Kaggle AI Competitions & Learning Platform"
    ],
    skills: ["Autonomous AI Agents", "Multi-Agent Systems", "LLM Orchestration"],
    issueDate: "July 30, 2026",
    expirationDate: "",
    credentialId: "",
    url: "https://www.kaggle.com/certification/badges/hashmilmuhammed/108",
    image: "/certificates/5-Day AI Agents_ Intensive Vibe Coding Course.png"
  },
  {
    id: 14,
    tabName: "AI & Data Scientist",
    shortOrg: "One Roadmap",
    title: "AI and Data Scientist",
    organization: "One Roadmap",
    theme: {
      primary: "#4F46E5", // Deep Royal Indigo
      gradient: "from-[#3730a3] via-[#4f46e5] to-[#818cf8]",
      lightBadge: "bg-indigo-50 text-indigo-700 border-indigo-200",
      accent: "#a5b4fc"
    },
    description: "Passed the One Roadmap Skill Certification Test in AI and Data Scientist.",
    highlights: [
      "Comprehensive AI & Data Science Skill Assessment",
      "Machine Learning Algorithms, Feature Engineering & Evaluation",
      "Data Science Problem Solving & Model Deployment",
      "Verified One Roadmap Skill Certification"
    ],
    skills: ["Machine Learning", "Deep Learning", "Statistical Modeling"],
    issueDate: "May 19, 2026",
    expirationDate: "",
    credentialId: "CERT-7A70B674",
    url: "https://www.oneroadmap.io/skills/ai-ds/certificate/CERT-7A70B674",
    image: "/certificates/AI and Data Scientist-Certificate.jpg"
  },
  {
    id: 15,
    tabName: "AI Engineer",
    shortOrg: "One Roadmap",
    title: "AI Engineer",
    organization: "One Roadmap",
    theme: {
      primary: "#D97706", // Amber / Warm Gold
      gradient: "from-[#b45309] via-[#d97706] to-[#fcd34d]",
      lightBadge: "bg-amber-50 text-amber-700 border-amber-200",
      accent: "#fde68a"
    },
    description: "Passed the One Roadmap Skill Certification Test in AI Engineer.",
    highlights: [
      "AI Engineering Principles & Scalable System Architectures",
      "Deep Learning Neural Networks & Model Integration",
      "Production AI Pipelines & API Integrations",
      "Verified One Roadmap AI Engineering Certification"
    ],
    skills: ["Neural Networks", "Computer Vision & NLP", "Model Deployment"],
    issueDate: "May 19, 2026",
    expirationDate: "",
    credentialId: "CERT-E0E5E37A",
    url: "https://www.oneroadmap.io/skills/ai/certificate/CERT-E0E5E37A",
    image: "/certificates/AI Engineer-Certificate.jpg"
  }
];

