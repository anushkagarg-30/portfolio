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
    "MS in Computer Science from NYU Tandon (4.0 GPA). Full-stack developer and ML engineer building AI-powered applications with RAG, semantic search, and scalable data systems.",
  resumeLink:
    "https://drive.google.com/file/d/1pCK0tcC4pSlRbKmBzpyXJIgipJNyYJAE/view?usp=sharing",
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
        "⚡ Full-stack development with React, Next.js, TypeScript, Node.js, and Express.js",
        "⚡ Backend development using FastAPI, Django, Flask, and Spring frameworks",
        "⚡ Experience with authentication, authorization, and role-based access control in production applications",
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
        "⚡ Built RAG pipelines and semantic search systems using LLMs, vector embeddings, and retrieval-augmented generation",
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
        "⚡ Vector search with pgvector and HNSW indexes on Supabase PostgreSQL for sub-second semantic retrieval",
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
        "⚡ Deployed full-stack apps on AWS, Vercel, and Render with Docker, Tailwind CSS, and modern UI libraries",
        "⚡ Proficient with Git, REST APIs, and system design for scalable web applications",
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
      duration: "2024 - May 2026",
      descriptions: [
        "⚡ Graduated with a Master's in Computer Science and a perfect CGPA of 4.0/4.0.",
        "⚡ Focused on Data Science, Machine Learning, and Big Data technologies.",
        "⚡ Built academic and self-initiated projects in predictive modeling, semantic search, and AI-powered legal research.",
      ],
      website_link: "https://engineering.nyu.edu/",
    },
    {
      title: "VIT University, Vellore, India",
      subtitle: "Bachelor of Technology in Computer Science",
      logo_path: "vit.png", // replace with the VIT logo file in your project
      alt_name: "VIT",
      duration: "2020 - May 2024",
      descriptions: [
        "⚡ Graduated with a CGPA of 8.86/10.",
        "⚡ Specialized in core areas including algorithms, databases, and software development.",
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
          title: "Website Assistant – Civil and Urban Engineering",
          company: "New York University",
          company_url: "https://engineering.nyu.edu/",
          logo_path: "nyu.png",
          duration: "June 2025 - May 2026",
          location: "Brooklyn, NY",
          description: `• Oversaw department-wide digital presence across faculty profiles, academic programs, research laboratories, student organizations, events, and multimedia resources serving 5,000+ monthly visitors.\n• Led large-scale website maintenance and content operations involving 100+ faculty documents, course materials, accreditation resources, and departmental records while ensuring accessibility, SEO, and content governance compliance.\n• Optimized publishing workflows through reusable templates, structured components, video captioning, transcript processing, and cross-functional coordination with faculty, administrators, and web teams, reducing update turnaround time by 40%.`,
          color: "#57068C",
        },
        {
          title: "Software Engineer Intern (Remote)",
          company: "Quantum Pulse Consulting",
          company_url: "https://qpulse.tech/",
          logo_path: "quantum-pulse.jpg",
          duration: "May 2025 - August 2025",
          location: "Detroit, Michigan",
          description: `• Built full-stack features using React, Node.js, Express, and Firebase, including secure authentication, onboarding flows, and role-based access control.\n• Engineered RESTful APIs and AI-driven recommendation workflows using Node.js, Express, and Firebase, enabling personalized habit tracking experiences while improving application reliability and reducing reported issues by 45%.\n• Authored technical documentation, API specifications, and onboarding guides in Coda, accelerating knowledge transfer and reducing ramp-up time for incoming team members.`,
          color: "#4285F4",
        },
        {
          title: "Developer Intern – Open Innovation",
          company: "HCL Tech",
          company_url: "https://www.hcltech.com/",
          logo_path: "hcl.jpg",
          duration: "February 2024 - August 2024",
          location: "Noida, India",
          description: `• Designed and improved PostgreSQL database systems managing 10,000+ records, improving data integrity, scalability, and query performance by 20% for analytics-driven applications.\n• Developed Python-based data processing pipelines and collaborated with cross-functional teams to prepare, validate, and integrate machine learning solutions into backend testing environments.`,
          color: "#0071C5",
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
    "I have built full-stack and AI-powered projects using Python, React, Next.js, FastAPI, and PostgreSQL — from semantic legal search and housing intelligence to large-scale predictive analytics. These projects reflect my focus on solving real-world problems with intelligent, scalable systems.",
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
        "AI-powered legal intelligence platform indexing 10,000+ juvenile justice cases and statutory documents across the United States, India, and the United Kingdom. Built a hybrid retrieval system using PostgreSQL, pgvector, and Google Gemini for top-10 precedent discovery and citation-backed legal research reports. Next.js and TypeScript frontend with case intake, ranked search, report generation, and legal knowledge navigation.",
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
      id: "0",
      name: "Housing Transparency Platform",
      url: "https://github.com/anushkagarg-30/housing-transparency",
      description:
        "Full-stack housing intelligence platform using Django and PostgreSQL to centralize property data, tenant reporting, and administrative oversight workflows. Established secure role-based access controls and reporting services supporting scalable ingestion from multiple external housing datasets. Refined database indexing and query strategies, reducing average response times by 35%.",
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
        "Processed and analyzed over 6 million flight records using Apache Spark and distributed data processing techniques for large-scale predictive analytics. Built scalable ETL workflows and feature engineering pipelines supporting machine learning-based delay prediction. Improved query efficiency and data retrieval through PySpark transformations and optimized storage strategies.",
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
        "Developed a model analyzing satisfaction, attrition, and productivity using Random Forest and XGBoost. Boosted accuracy from 30% to 63% after tuning. Applied imputation, encoding, normalization, and SMOTE for class imbalance correction, improving recall by 35%.",
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
        "Developed an early CKD detection system using KNN, Decision Tree, Random Forest, and LGBM with 98% accuracy. Implemented feature selection and 10-fold cross-validation for model refinement.",
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
        "Built an NLP-based chatbot for mental health support using SVM. Achieved 95% accuracy. Handled 100K+ user inputs to improve personalized responses.",
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
        "Led the development of an AI-based crop disease detection app using a 5-layer CNN. Processed 10K+ images and integrated real-time treatment recommendation algorithms, achieving 90% detection accuracy.",
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
