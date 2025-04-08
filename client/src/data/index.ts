import {
  Award,
  BarChart,
  Bot,
  Brain,
  Bug,
  Code,
  Database,
  Globe,
  GraduationCap,
  Heart,
  HelpingHand,
  Shirt,
  Utensils,
  Wrench
} from "lucide-react";

export const projects = [
  {
    id: 1,
    title: "Heart Disease Prediction",
    description: "Developed a heart disease prediction model using machine learning classification techniques including SVM and Random Forest.",
    icon: Heart,
    category: "ml",
    githubLink: "https://github.com/khushbunaz/Heart__Disease__Prediction",
    technologies: ["Machine Learning", "Python", "Scikit-learn", "Matplotlib", "Power BI"]
  },
  {
    id: 2,
    title: "AI-Powered Desktop Application",
    description: "Built a Tkinter-based AI-powered application for automated student record management with OCR and NLP-based document classification.",
    icon: Bot,
    category: "ai",
    githubLink: "https://github.com/khushbunaz/AI-Powered-Desktop-Application",
    technologies: ["Python", "Tkinter", "OCR", "NLP"]
  },
  {
    id: 3,
    title: "Restaurant Management System",
    description: "Built a console-based system in Java for efficient order management using ArrayDeque with robust file operations.",
    icon: Utensils,
    category: "web",
    githubLink: "https://github.com/khushbunaz/Restaurant_Management_System",
    technologies: ["Java", "Data Structures", "File I/O"]
  },
  {
    id: 4,
    title: "Fashion Recommendation System",
    description: "Built a personalized fashion recommendation system using collaborative filtering and content-based approaches with Flask deployment.",
    icon: Shirt,
    category: "ml",
    githubLink: "https://github.com/khushbunaz/Fashion_Recommendation_System",
    technologies: ["Python", "Flask", "Scikit-learn", "Pandas"]
  },
  {
    id: 5,
    title: "LeadGenius Scraper",
    description: "Automated web scraping tool that extracts key business data from multiple sources with data cleaning & deduplication features.",
    icon: Bug,
    category: "automation",
    githubLink: "https://github.com/khushbunaz/LeadGenius_Scraper",
    technologies: ["Python", "BeautifulSoup", "Selenium", "Data Processing"]
  }
];

export const skills = [
  {
    id: 1,
    category: "Programming",
    icon: Code,
    items: [
      { name: "Python", proficiency: 95 },
      { name: "Java", proficiency: 85 },
      { name: "JavaScript", proficiency: 80 },
      { name: "C", proficiency: 75 }
    ]
  },
  {
    id: 2,
    category: "AI & Machine Learning",
    icon: Brain,
    items: [
      { name: "PyTorch", proficiency: 90 },
      { name: "TensorFlow", proficiency: 85 },
      { name: "Computer Vision", proficiency: 80 },
      { name: "NLP", proficiency: 85 }
    ]
  },
  {
    id: 3,
    category: "Data Science & Analytics",
    icon: BarChart,
    items: [
      { name: "Pandas", proficiency: 95 },
      { name: "Scikit-learn", proficiency: 90 },
      { name: "NumPy", proficiency: 95 },
      { name: "Power BI", proficiency: 80 }
    ]
  },
  {
    id: 4,
    category: "Web Development",
    icon: Globe,
    items: [
      { name: "HTML5 & CSS3", proficiency: 90 },
      { name: "ReactJS", proficiency: 85 },
      { name: "Node.js", proficiency: 80 },
      { name: "Django", proficiency: 75 }
    ]
  },
  {
    id: 5,
    category: "Database Management",
    icon: Database,
    items: [
      { name: "MySQL", proficiency: 90 },
      { name: "MongoDB", proficiency: 85 }
    ]
  },
  {
    id: 6,
    category: "Tools & Frameworks",
    icon: Wrench,
    items: [
      { name: "Blender", proficiency: 85 },
      { name: "Flask", proficiency: 90 },
      { name: "Tkinter", proficiency: 85 }
    ]
  }
];

export const experiences = [
  {
    id: 1,
    title: "Python and Machine Learning Intern",
    company: "BrainyBeam Technologies Pvt. Ltd.",
    location: "Ahmedabad, India",
    period: "Feb 2023 — Present",
    responsibilities: [
      "Designed and optimized machine learning models for predictive analytics using TensorFlow and PyTorch.",
      "Implemented neural network architectures for deep learning applications in image segmentation and classification.",
      "Conducted feature engineering and data preprocessing for enhanced model accuracy and performance.",
      "Collaborated in developing ML model applications for production environments using Docker."
    ]
  },
  {
    id: 2,
    title: "Python Developer Intern",
    company: "Oceanmtech Pvt Ltd",
    location: "Ahmedabad, India",
    period: "May 2022 — Sep 2022",
    responsibilities: [
      "Developed AI-powered web applications using Flask and Python.",
      "Created and optimized API integrations for ML model deployment and data pipelines.",
      "Built user authentication systems and implemented database schema designs.",
      "Improved application performance through code optimization and efficient algorithms."
    ]
  },
  {
    id: 3,
    title: "Python Developer (Freelancer)",
    company: "Freelancer",
    location: "Ahmedabad, India",
    period: "Oct 2021 — Present",
    responsibilities: [
      "Automated 3D modeling processes using Blender Python API for AI-driven design optimization.",
      "Developed AI-based Telegram bots for workflow automation and client engagement.",
      "Created custom Python modules for data processing and analysis tasks.",
      "Implemented machine learning models for various client-specific requirements and use cases."
    ]
  }
];

export type AboutSectionItem = 
  | { title: string; organization: string; period: string; description?: string }
  | { title: string; description: string };

export const aboutSections = [
  {
    id: 1,
    title: "Education",
    icon: GraduationCap,
    items: [
      {
        title: "Bachelor of Engineering in Computer Science",
        organization: "LJ University, Ahmedabad, India",
        period: "Sep 2021 — May 2025"
      }
    ] as AboutSectionItem[]
  },
  {
    id: 2,
    title: "Achievements",
    icon: Award,
    items: [
      {
        title: "Successful Freelance Projects",
        description: "Received excellent client feedback with measurable improvements in predictive modeling"
      },
      {
        title: "NASA Hackathon Participant",
        description: "Developed a prototype for efficient data visualization in space exploration"
      }
    ] as AboutSectionItem[]
  },
  {
    id: 3,
    title: "Volunteering",
    icon: HelpingHand,
    items: [
      {
        title: "AI/ML Research Volunteer",
        organization: "Omdena",
        period: "Mar 2025 — Present",
        description: "Contributing to the \"Automating Digital Document Indexing\" project using NLP, OCR, and Machine Learning."
      }
    ] as AboutSectionItem[]
  }
];

export const certifications = [
  {
    id: 1,
    title: "Microsoft Certified Azure AI Fundamentals",
    issuer: "Microsoft Learn Student Ambassadors"
  },
  {
    id: 2,
    title: "Exploratory Data Analysis For Machine Learning",
    issuer: "Coursera"
  },
  {
    id: 3,
    title: "Building Generative AI-Powered Applications with Python",
    issuer: "IBM"
  },
  {
    id: 4,
    title: "Data Structure",
    issuer: "Coursera"
  },
  {
    id: 5,
    title: "HTML, CSS and JavaScript for Web Developers",
    issuer: "Coursera"
  }
];

export const publications = [
  {
    id: 1,
    title: "Enhanced Movie Recommendation Systems: Integrating Collaborative Filtering with Content-Based Approaches for Improved User Experience",
    date: "Feb 2025",
    journal: "International Journal of Innovative Research in Computer Technology (IJIRCT)",
    link: "https://www.ijirct.org/viewPaper.php?paperId=2502077",
    description: "This research explores hybrid movie recommendation systems by integrating collaborative filtering with content-based approaches. It addresses data sparsity, optimizes similarity metrics, and incorporates metadata-driven enhancements to improve recommendation accuracy. The study leverages machine learning techniques, including cosine similarity, demographic filtering, and sentiment analysis, to refine user preferences and enhance personalization in modern recommendation engines.",
    tags: ["Recommendation Systems", "Machine Learning", "Collaborative Filtering", "Content-Based Filtering", "Sentiment Analysis"]
  }
];

export const filterCategories = [
  { id: "all", label: "All" },
  { id: "ml", label: "Machine Learning" },
  { id: "ai", label: "AI Applications" },
  { id: "web", label: "Web Development" },
  { id: "automation", label: "Automation" }
];
