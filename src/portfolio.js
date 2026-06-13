// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: false, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Anushka",
  logo_name: "Welcome",
  full_name: "Anushka Garg",
  subTitle:
    "MS Computer Science candidate at NYU Tandon with full-stack experience across React, Node.js, PostgreSQL, and Firebase. Building scalable AI-powered applications with RAG pipelines, LLM systems, and semantic search.",
  resumeLink:
    "https://drive.google.com/file/d/1kMFWYDl4WdJwuBWWe3lsWd8j0UU2fmD5/view?usp=sharing",
  mail: "mailto:ag10687@nyu.edu",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/anushkagarg-30",
  linkedin: "https://www.linkedin.com/in/anushkagarg20023008/",
  gmail: "ag10687@nyu.edu",
  twitter: "",
  instagram: "",
};

const skills = {
  data: [
    {
      title: "Languages & Frameworks",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in Python, Java, JavaScript, TypeScript, C/C++, and SQL for software development and data science",
        "⚡ Full-stack development with React, Next.js, TypeScript, Node.js, Express, and SQLAlchemy",
        "⚡ Backend development using FastAPI, Django, Flask, and Spring frameworks",
        "⚡ Experience with JWT authentication, authorization, and role-based access control in production applications",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: { color: "#007396" },
        },
        {
          skillName: "C/C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: { color: "#00599C" },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: { color: "#F7DF1E" },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: { color: "#000000" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: { color: "#009688" },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: { color: "#339933" },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "simple-icons:express",
          style: { color: "#000000" },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: { color: "#092E20" },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: { color: "#000000" },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: { color: "#6DB33F" },
        },
      ],
    },
    {
      title: "Data Science & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience in building machine learning models for classification, prediction, and clustering tasks",
        "⚡ Strong in data preprocessing, feature engineering, and model tuning using Scikit-learn and XGBoost",
        "⚡ Hands-on experience with deep learning frameworks like TensorFlow and PyTorch",
        "⚡ Built RAG pipelines, LLM applications, and semantic vector search systems with pgvector and embeddings",
        "⚡ Applied ML techniques to real-world projects like flight delay prediction, CKD detection, and mental health chatbots",
      ],
      softwareSkills: [
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: { color: "#150458" },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: { color: "#013243" },
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: { color: "#FF6F00" },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: { color: "#EE4C2C" },
        },
        {
          skillName: "XGBoost",
          fontAwesomeClassname: "mdi:chart-line",
          style: { color: "#EC6B23" },
        },
        {
          skillName: "RAG",
          fontAwesomeClassname: "mdi:book-search",
          style: { color: "#4285F4" },
        },
        {
          skillName: "LLMs",
          fontAwesomeClassname: "mdi:robot",
          style: { color: "#34A853" },
        },
        {
          skillName: "Semantic Search",
          fontAwesomeClassname: "mdi:magnify-scan",
          style: { color: "#9C27B0" },
        },
        {
          skillName: "Google Gemini",
          fontAwesomeClassname: "simple-icons:google",
          style: { color: "#4285F4" },
        },
      ],
    },
    {
      title: "Big Data & Databases",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experienced with large-scale data handling using Apache Spark and PySpark",
        "⚡ Proficient in Firebase (Auth, Firestore, Hosting, Security Rules) for cloud-based applications",
        "⚡ Designed and optimized relational and NoSQL databases including PostgreSQL, MySQL, MongoDB, and SQLite",
        "⚡ Vector search with pgvector and ivfflat/HNSW indexes on PostgreSQL for sub-second semantic retrieval",
      ],
      softwareSkills: [
        {
          skillName: "Apache Spark",
          fontAwesomeClassname: "simple-icons:apachespark",
          style: { color: "#E25A1C" },
        },
        {
          skillName: "PySpark",
          fontAwesomeClassname: "simple-icons:apachespark",
          style: { color: "#E25A1C" },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: { color: "#FFCA28" },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: { color: "#336791" },
        },
        {
          skillName: "pgvector",
          fontAwesomeClassname: "mdi:vector-triangle",
          style: { color: "#336791" },
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: { color: "#3FCF8E" },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "simple-icons:sqlite",
          style: { color: "#003B57" },
        },
      ],
    },
    {
      title: "Visualization & Tools",
      fileName: "DesignImg",
      skills: [
        "⚡ Skilled in data storytelling using Tableau, Power BI, and Matplotlib",
        "⚡ Experience building and consuming REST APIs for web applications",
        "⚡ Deployed full-stack apps on AWS, Vercel, and Render with Docker, Tailwind CSS, and GitHub Actions CI/CD",
        "⚡ Proficient with Git, REST APIs, system design, unit testing, and Agile/Scrum methodologies",
      ],
      softwareSkills: [
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: { color: "#E97627" },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: { color: "#F2C811" },
        },
        {
          skillName: "Matplotlib",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "REST APIs",
          fontAwesomeClassname: "mdi:api",
          style: { color: "#009688" },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#2496ED" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: { color: "#06B6D4" },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: { color: "#000000" },
        },
        {
          skillName: "Render",
          fontAwesomeClassname: "simple-icons:render",
          style: { color: "#000000" },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: { color: "#E94E32" },
        },
        {
          skillName: "Agile/Scrum",
          fontAwesomeClassname: "simple-icons:scrumalliance",
          style: { color: "#009FDA" },
        },
      ],
    },
  ],
};


const degrees = {
  degrees: [
    {
      title: "New York University, Tandon School of Engineering",
      subtitle: "Master of Science in Computer Science",
      logo_path: "nyu.png", // replace with the NYU logo file in your project
      alt_name: "NYU Tandon",
      duration: "August 2024 - May 2026",
      descriptions: [
        "⚡ Master's in Computer Science with a perfect GPA of 4.0/4.0.",
        "⚡ Coursework: Algorithms, Machine Learning, Deep Learning, Software Engineering, Big Data.",
        "⚡ Built projects in semantic search, RAG pipelines, full-stack AI applications, and developer networking platforms.",
      ],
      website_link: "https://engineering.nyu.edu/",
    },
    {
      title: "VIT University, Vellore, India",
      subtitle: "Bachelor of Technology in Computer Science",
      logo_path: "vit.png", // replace with the VIT logo file in your project
      alt_name: "VIT",
      duration: "September 2020 - May 2024",
      descriptions: [
        "⚡ Graduated with a CGPA of 8.86/10.",
        "⚡ Coursework: Data Structures, Object-Oriented Programming, Operating Systems, Database Systems.",
        "⚡ Completed multiple academic projects in AI, Big Data, and NLP-based systems.",
      ],
      website_link: "https://vit.ac.in/",
    },
  ],
};


const certifications = {
  certifications: [
    {
      title: "Management Consulting Simulation",
      subtitle: "Forage x PwC",
      logo_path: "pwc.png",
      certificate_link: "https://drive.google.com/file/d/14hIwYrkOfizJzODp8EA4vYFoRkTHaalC/view?usp=sharing",
      alt_name: "PwC Forage",
      color_code: "#2A2A2A",
    },
    {
      title: "Data Analytics & Visualization Simulation",
      subtitle: "Forage x Accenture",
      logo_path: "forage.jpg",
      certificate_link: "https://drive.google.com/file/d/1n375dQqYQfPcwdp8bEOTbBBYS8HY7e_U/view?usp=sharing",
      alt_name: "Forage",
      color_code: "#6B5B95",
    },
    {
      title: "Google Cloud Workshop",
      subtitle: "Devtown",
      logo_path: "google.png",
      certificate_link: "https://cert.devtown.in/verify/1zoksp",
      alt_name: "Google Devtown",
      color_code: "#4285F4",
    },
    {
      title: "Capitalist Gabfest Participant",
      subtitle: "Dare2Compete, VIT Vellore",
      logo_path: "d2c.png",
      certificate_link: "https://drive.google.com/file/d/1Qk23Y3GDObGPlL6v-Zrs-9YOigQYjyPG/view?usp=sharing",
      alt_name: "Capitalist Gabfest",
      color_code: "#E2405F",
    },
    {
      title: "StockCircuit Participant",
      subtitle: "Dare2Compete, VIT Vellore",
      logo_path: "d2c.png",
      certificate_link: "https://drive.google.com/file/d/13QjgNEDE9bkpEIC7r1IDUIZRTMfWsakF/view?usp=sharing",
      alt_name: "StockCircuit",
      color_code: "#E2405F",
    },
    {
      title: "Python Basics",
      subtitle: "GUVI Certification",
      logo_path: "guvi.png",
      certificate_link: "https://drive.google.com/file/d/1vPc7Nb4oIcktO3nhoLXeP-UoQVeEfn7R/view?usp=sharing",
      alt_name: "GUVI",
      color_code: "#00c8a0",
    },
    {
      title: "Secretary of Dream Merchants Club",
      subtitle: "VIT Vellore",
      logo_path: "dream_merchants.png",
      certificate_link: "https://drive.google.com/file/d/1qGnuKbkxDiJqTqt2kFBpbPSQz4uETN8C/view?usp=sharing",
      alt_name: "Dream Merchants",
      color_code: "#8C1515",
    },
  ],
};


// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship, and Leadership",
  description:
    "I have worked on full-stack development, machine learning, and data engineering across internships and academic projects. My experience spans AI-powered applications, scalable backend systems, and cross-functional collaboration in professional and leadership settings.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Software Engineer Intern (Remote)",
          company: "Quantum Pulse Consulting",
          company_url: "https://qpulse.tech/",
          logo_path: "quantum-pulse.jpg",
          duration: "May 2025 - Aug 2025",
          location: "Detroit, MI",
          description: `• Built full-stack features (React, Node.js, Express, Firebase) including JWT authorization, onboarding flows, and role-based access.\n• Engineered RESTful APIs and AI-driven recommendation workflows powering personalized habit tracking for end users.\n• Reduced reported bugs by 45% through robust API error handling, input validation, and structured testing practices.\n• Automated CI/CD pipelines via GitHub Actions, streamlining testing and deployment across development cycles.`,
          color: "#4285F4",
        },
        {
          title: "Developer Intern – Open Innovation",
          company: "HCL Tech",
          company_url: "https://www.hcltech.com/",
          logo_path: "hcl.jpg",
          duration: "Feb 2024 - Aug 2024",
          location: "Noida, India",
          description: `• Engineered PostgreSQL schemas with optimized indexing across 10,000+ records, achieving 20% faster query execution.\n• Developed Python ETL pipelines for data processing, validation, and ML model integration into backend test environments.\n• Partnered with data and ML teams in Agile sprints to ship analytics-driven backend features using Python and PostgreSQL.`,
          color: "#0071C5",
        },
        {
          title: "Website Assistant – Civil and Urban Engineering",
          company: "New York University",
          company_url: "https://engineering.nyu.edu/",
          logo_path: "nyu.png",
          duration: "Jun 2025 - May 2026",
          location: "Brooklyn, NY",
          description: `• Maintained department-wide digital presence serving 5,000+ monthly visitors; built reusable templates and structured components reducing content update turnaround by 40%.\n• Ensured accessibility, SEO compliance, and content governance across 100+ faculty and program pages using CMS tools and automated publishing workflows.`,
          color: "#57068C",
        },
      ],
    },
    {
      title: "Leadership & Volunteering",
      experiences: [
        {
          title: "Secretary",
          company: "Dream Merchants Club",
          company_url: "#",
          logo_path: "dream_merchants.png",
          duration: "Jan 2023 - Dec 2023",
          location: "VIT Vellore",
          description:
            "Led club operations and organized student engagement events, improving participation and event coordination. Maintained club documentation and communications as Secretary.",
          color: "#8C1515",
        },
        {
          title: "Core Committee Member",
          company: "Innovators Quest",
          company_url: "#",
          logo_path: "innovators_quest.jpg",
          duration: "2020 - 2022",
          location: "VIT Vellore",
          description:
            "Managed club website and event outreach, promoting technology initiatives among students.",
          color: "#0C9D58",
        },
        {
          title: "Member",
          company: "The Next Chapter Book Club",
          company_url: "#",
          logo_path: "bookclub.jpg",
          duration: "2020 - 2022",
          location: "VIT Vellore",
          description:
            "Organized and promoted reading-focused events including 'BooksMania' to foster literary interest on campus.",
          color: "#FFA500",
        },
      ],
    },
  ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have built full-stack and AI-powered projects spanning semantic legal search, developer networking, housing intelligence, and large-scale predictive analytics. Each project below highlights the problem, architecture, and technical decisions behind the implementation.",
  avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.jpg",
    description:
      "Based in New York, NY. Reach me at ag10687@nyu.edu or +1 (917) 620-3752.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I occasionally write about my learning and projects. You can find them LinkedIn.",
    link: "https://www.linkedin.com/in/anushkagarg20023008/",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "6",
      name: "Juvenile Justice Intelligence Platform",
      url: "https://juvenile-justice-intelligence-platf.vercel.app/",
      description:
        "AI-powered legal research platform for juvenile justice cases across the United States, India, and the United Kingdom. Attorneys and researchers enter structured case facts and receive ranked similar precedents and applicable statutes in 1–3 seconds via semantic search over 10,000+ indexed cases and 56 laws. Built a RAG pipeline with pgvector, HNSW indexes, and Gemini 2.0 (768-dimensional embeddings) on Supabase PostgreSQL — combining dense vector search with keyword ranking to surface the top 10 most relevant cases. Optional AI research memos are generated through a retrieval-augmented pipeline with case citations, statute references, comparative jurisdiction insights, and exportable PDF reports. FastAPI backend handles parallel retrieval across cases and statutes; Next.js 15 / React 19 / TypeScript frontend includes case intake, ranked search results, interactive report viewer, and law database browsers. Bulk ingest pipeline scales the corpus with batch embedding generation and query embedding cache (in-memory + PostgreSQL), with fast search separated from slow report generation for production performance. Deployed on Vercel (frontend) and Render (API).",
      languages: [
        { name: "FastAPI", iconifyClass: "simple-icons:fastapi" },
        { name: "Next.js", iconifyClass: "simple-icons:nextdotjs" },
        { name: "React", iconifyClass: "simple-icons:react" },
        { name: "TypeScript", iconifyClass: "simple-icons:typescript" },
        { name: "PostgreSQL", iconifyClass: "simple-icons:postgresql" },
        { name: "Supabase", iconifyClass: "simple-icons:supabase" },
        { name: "Tailwind CSS", iconifyClass: "simple-icons:tailwindcss" },
        { name: "Python", iconifyClass: "logos-python" },
      ],
      links: [
        {
          name: "Live Demo",
          url: "https://juvenile-justice-intelligence-platf.vercel.app/",
          iconifyClass: "simple-icons:vercel",
        },
        {
          name: "GitHub",
          url: "https://github.com/anushkagarg-30/juvenile-justice-intelligence-platform",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "7",
      name: "AI DevConnect",
      url: "https://aidevconnect-frontend.onrender.com/",
      description:
        "Full-stack developer networking platform that matches collaborators for side projects using semantic similarity — not keyword search. Users submit project ideas, which are embedded with Gemini gemini-embedding-001 (1536-dimensional vectors) and stored in PostgreSQL + pgvector with an ivfflat index. A single cosine-distance query ranks the best collaborator matches in under 120ms p95 under concurrent load (verified via Locust with 50 concurrent users). Features include JWT authentication, role-based access control, async REST APIs (FastAPI + SQLAlchemy + Alembic), match request workflows (send, accept, decline), and real-time WebSocket notifications for match events. React 19 / TypeScript / Tailwind CSS / Vite frontend with responsive project dashboards and live notification toasts. Containerized with Docker Compose, deployed on Render with Neon PostgreSQL (pgvector-enabled), and automated CI/CD via GitHub Actions running pytest, Ruff, ESLint, frontend builds, and load tests enforcing p95 < 200ms on the matching endpoint. Demo clusters span food/ML, DevOps, and justice/social-impact domains with 72% minimum similarity filtering.",
      languages: [
        { name: "FastAPI", iconifyClass: "simple-icons:fastapi" },
        { name: "React", iconifyClass: "simple-icons:react" },
        { name: "TypeScript", iconifyClass: "simple-icons:typescript" },
        { name: "PostgreSQL", iconifyClass: "simple-icons:postgresql" },
        { name: "Docker", iconifyClass: "simple-icons:docker" },
        { name: "Python", iconifyClass: "logos-python" },
      ],
      links: [
        {
          name: "Live Demo",
          url: "https://aidevconnect-frontend.onrender.com/",
          iconifyClass: "simple-icons:render",
        },
        {
          name: "GitHub",
          url: "https://github.com/anushkagarg-30/AiDevConnect",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "0",
      name: "Housing Transparency Platform",
      url: "https://github.com/anushkagarg-30/housing-transparency",
      description:
        "Full-stack housing intelligence platform built with Django REST API and PostgreSQL to centralize property data, tenant reporting, and administrative oversight workflows. Integrated with NYC Open Data to provide insights into building violations, evictions, complaints, and neighborhood statistics. Established secure role-based access controls and reporting services supporting scalable ingestion from multiple external housing datasets. Refined database indexing and query execution strategies — including optimized joins and selective indexing on high-cardinality lookup columns — reducing average API response times by 35% under load. React and TypeScript frontend for interactive data exploration. Achieved 80% test coverage with 346 automated tests across backend services and API endpoints.",
      languages: [
        { name: "Django", iconifyClass: "simple-icons:django" },
        { name: "React", iconifyClass: "simple-icons:react" },
        { name: "PostgreSQL", iconifyClass: "simple-icons:postgresql" },
        { name: "TypeScript", iconifyClass: "simple-icons:typescript" },
        { name: "Python", iconifyClass: "logos-python" },
      ],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/anushkagarg-30/housing-transparency",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "1",
      name: "Flight Delay Prediction (Big Data Pipeline)",
      url: "#",
      description:
        "Large-scale predictive analytics pipeline processing and analyzing over 6 million flight records using Apache Spark and PySpark MLlib. Built scalable ETL workflows for data preprocessing, cleaning, and feature engineering — handling missing values, categorical encoding, and temporal feature extraction across distributed partitions. Optimized storage and retrieval using SQL and PySpark transformations to improve query efficiency on multi-million-row datasets. Trained a Gradient Boosted Trees Classifier (GBTClassifier) for delay prediction, achieving 81% accuracy. Designed the pipeline for horizontal scalability on Spark clusters with partitioned reads and cached intermediate DataFrames to minimize recomputation.",
      languages: [
        { name: "PySpark", iconifyClass: "simple-icons:apachespark" },
        { name: "Python", iconifyClass: "logos-python" },
        { name: "SQL", iconifyClass: "simple-icons:mysql" },
      ],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/anushkagarg-30",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "2",
      name: "Work-Life Balance and Productivity Prediction",
      url: "#",
      description:
        "Machine learning system analyzing employee satisfaction, attrition risk, and productivity outcomes using Random Forest and XGBoost classifiers. Applied a full preprocessing pipeline — imputation for missing values, one-hot encoding, normalization, and SMOTE oversampling to correct severe class imbalance. Hyperparameter tuning with cross-validation boosted model accuracy from 30% to 63% and improved recall by 35%, making the model viable for HR analytics use cases. Evaluated feature importance to identify the strongest predictors of attrition and built comparative performance metrics across model families.",
      languages: [
        { name: "Python", iconifyClass: "logos-python" },
        { name: "XGBoost", iconifyClass: "mdi:chart-line" },
        { name: "Scikit-learn", iconifyClass: "simple-icons:scikitlearn" },
        { name: "SMOTE", iconifyClass: "simple-icons:python" },
      ],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/anushkagarg-30",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "3",
      name: "Chronic Kidney Disease Detection Using ML",
      url: "#",
      description:
        "Early chronic kidney disease (CKD) detection system comparing KNN, Decision Tree, Random Forest, and LightGBM classifiers on clinical lab datasets. Implemented feature selection to reduce dimensionality and 10-fold cross-validation for robust model evaluation. LightGBM achieved 98% accuracy with the best precision-recall tradeoff. Built an end-to-end pipeline from raw patient records through preprocessing, model training, and evaluation dashboards for clinical screening scenarios.",
      languages: [
        { name: "Python", iconifyClass: "logos-python" },
        { name: "LightGBM", iconifyClass: "mdi:tree-outline" },
        { name: "Scikit-learn", iconifyClass: "simple-icons:scikitlearn" },
      ],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/anushkagarg-30",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "4",
      name: "CheerBot - Mental Health ChatBot",
      url: "#",
      description:
        "NLP-based mental health support chatbot using Support Vector Machine (SVM) text classification to route user messages to appropriate response categories. Trained on 100K+ labeled conversational inputs with TF-IDF vectorization and hyperparameter tuning, achieving 95% classification accuracy. Designed response templates for empathetic, context-aware replies across common mental health topics. Built a feedback loop to improve personalized responses based on user interaction patterns.",
      languages: [
        { name: "Python", iconifyClass: "logos-python" },
        { name: "SVM", iconifyClass: "simple-icons:scikitlearn" },
        { name: "NLP", iconifyClass: "mdi:message-text" },
      ],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/anushkagarg-30",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
    {
      id: "5",
      name: "Cropable - The Crop Protection App",
      url: "#",
      description:
        "AI-based crop disease detection mobile application using a custom 5-layer Convolutional Neural Network (CNN) built with TensorFlow/Keras. Processed 10K+ labeled crop images across multiple disease categories with data augmentation (rotation, flip, brightness) to improve generalization. Integrated real-time treatment recommendation algorithms that map detected diseases to actionable remediation steps for farmers. Achieved 90% detection accuracy on held-out test sets. Led the full development lifecycle from dataset curation and model training to deployment-ready inference APIs.",
      languages: [
        { name: "Python", iconifyClass: "logos-python" },
        { name: "TensorFlow", iconifyClass: "simple-icons:tensorflow" },
        { name: "CNN", iconifyClass: "simple-icons:keras" },
      ],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/anushkagarg-30",
          iconifyClass: "ri:github-fill",
        },
      ],
    },
  ],
};

export default projects;


export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
