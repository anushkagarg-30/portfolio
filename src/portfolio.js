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
  subTitle: "A passionate Machine Learning enthusiast exploring the intersection of AI and data science to solve real-world problems.",
  resumeLink:
    "https://drive.google.com/file/d/1440HGPDL8W-ta4hrBDfflhaTHApEetXP/view?usp=sharing",
  mail: "mailto:anushkagarg3008@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/anushkagarg-30",
  linkedin: "https://www.linkedin.com/in/anushkagarg20023008/",
  gmail: "anushkagarg3008@gmail.com",
  twitter: "",
  instagram: "",
};

const skills = {
  data: [
    {
      title: "Languages & Frameworks",
      fileName: "FullStackImg",
      skills: [
        "⚡ Proficient in Python, Java, C/C++ for software development and data science",
        "⚡ Full-stack development experience with React, Node.js, and Express.js",
        "⚡ Backend development using Django, Flask, and Spring frameworks",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: { color: "#007396" },
        },
        {
          skillName: "C/C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: { color: "#00599C" },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
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
      ],
    },
    {
      title: "Big Data & Databases",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experienced with large-scale data handling using Apache Spark and PySpark",
        "⚡ Proficient in Firebase (Auth, Firestore, Hosting, Security Rules) for cloud-based applications",
        "⚡ Designed and optimized relational and NoSQL databases including PostgreSQL, MySQL, MongoDB, and SQLite",
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
        "⚡ Proficient with Git for version control and Agile/Scrum methodologies",
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
      duration: "2024 - 2026",
      descriptions: [
        "⚡ Currently pursuing a Master's degree with a perfect GPA of 4.0/4.0.",
        "⚡ Focusing on Data Science, Machine Learning, and Big Data technologies.",
        "⚡ Engaged in academic research and real-world projects involving predictive modeling and AI.",
      ],
      website_link: "https://engineering.nyu.edu/",
    },
    {
      title: "VIT University, Vellore, India",
      subtitle: "Bachelor of Technology in Computer Science",
      logo_path: "vit.png", // replace with the VIT logo file in your project
      alt_name: "VIT",
      duration: "2020 - 2024",
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
    "I have worked on full-stack development, machine learning, and data engineering projects during internships, and I have taken leadership roles in student organizations. My experience spans both technical development and soft skill enhancement.",
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
          duration: "June 2025 - Present",
          location: "Brooklyn, NY",
          description: `• Updated and maintained academic websites using WordPress, including faculty profiles, labs, Ph.D. program content, awards listings, and student club pages.\n• Enhanced accessibility by editing video captions, fixing broken links, and applying NYU digital standards across faculty and course pages.\n• Created and designed various event assets (banners, fliers, newsletters) in Canva and coordinated approvals with faculty and the web team, strengthening departmental outreach.`,
          color: "#57068C",
        },
        {
          title: "Software Engineer Intern (Remote)",
          company: "Quantum Pulse Consulting",
          company_url: "https://qpulse.tech/",
          logo_path: "quantum-pulse.jpg",
          duration: "May 2025 - Aug 2025",
          location: "Detroit, Michigan",
          description: `• Engineered full-stack features using React, Firebase (Authentication, Firestore, Hosting), and Node/Express APIs, including secure log-in and sign-up flows, onboarding, and rule-based AI interactions.\n• Integrated standardized visual themes utilizing Android SDK and Firebase Web; decreased cross-platform compatibility issues by 45% as measured by the number of user-reported bugs.\n• Streamlined team delivery through PRD drafting, knowledge-hub documentation (Coda), and structured mentor and mentee sessions to support engineering and HR initiatives.`,
          color: "#4285F4",
        },
        {
          title: "Developer Intern – Open Innovation",
          company: "HCL Technologies",
          company_url: "https://www.hcltech.com/",
          logo_path: "hcl.jpg",
          duration: "Feb 2024 - Aug 2024",
          location: "Noida, India",
          description: `• Directed collaborative efforts on developing a cutting-edge predictive analytics model utilizing Random Forest and XGBoost; achieved significant enhancement in data integrity by improving accuracy measurements up to 30%.\n• Engineered a PostgreSQL database architecture paired with Python scripts to manage 10,000+ data entries, enhancing data integrity and improving accuracy measurements by 20%.`,
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
    "I have worked on a range of data science, machine learning, and full-stack projects using technologies such as Python, TensorFlow, ReactJS, and PostgreSQL. These projects reflect my passion for solving real-world problems with data and intelligent systems. Some of these are academic, while others are self-initiated or internship-based.",
  avatar_image_path: "projects_image.svg",
};


// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.jpg",
    description:
      "You can contact me at the places mentioned below.",
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
      id: "0",
      name: "Housing Transparency Platform",
      url: "https://github.com/anushkagarg-30/housing-transparency",
      description:
        "A comprehensive housing data analysis platform providing insights into building violations, evictions, complaints, and neighborhood statistics. Built with Django REST API backend and React frontend, integrated with NYC Open Data. Achieved 80% test coverage with 346 tests.",
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
      name: "Prediction of Flight Delays using Big Data",
      url: "#",
      description:
        "Incorporated large-scale data preprocessing, cleaning, and feature engineering for flight delay prediction on 6M+ records using Apache Spark and PySpark MLlib. Optimized storage and retrieval using SQL and PySpark. Achieved 81% accuracy using Gradient Boosted Trees Classifier (GBTClassifier).",
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
