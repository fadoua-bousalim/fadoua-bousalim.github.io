export interface SkillItem {
  name: string;
  icon?: string;
  iconSrc?: string;
  iconColor?: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  link?: string;
  skills: string[];
  icon?: string;
  iconSrc?: string;
  credits?: { label: string; link: string };
}

export interface ExperienceItem {
  company: string;
  title: string;
  dateRange: string;
  bullets: string[];
  techStack?: string[];
}

export interface EducationItem {
  school: string;
  degree: string;
  dateRange: string;
  achievements: string[];
}

export interface PaperItem {
  title: string;
  link: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  taglineAccent: string;
  subtitle: string;
  location?: string;
  cvLink?: string;
  description: string;
  /** Absolute URL or root-relative path to the Open Graph preview image (e.g. "/og.png") */
  ogImage?: string;
  accentColor: string;
  social: {
    email?: string;
    linkedin?: string;
    github?: string;
  };
  aboutMe: string;
  skills: SkillItem[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem[];
  papers: PaperItem[];
}

export const siteConfig: SiteConfig = {
  name: "Fadoua Bousalim",
  title: "Senior Data & AI Engineer",
  tagline: "Data / AI / MLOps Engineer",
  taglineAccent: "From Data Pipelines to Production AI",
  subtitle:
    "I manage the complete AI lifecycle, from raw data and ETL pipelines to scalable API deployments. I build production-grade AI systems and the robust data infrastructure that supports them.",
  location: "BASED IN PARIS",
  cvLink: "/English_Resume.pdf",
  description: "Portfolio of Fadoua Bousalim - Senior Data & AI Engineer",
  accentColor: "#FF6B00",
  social: {
    email: "fadoua.bousalim@gmail.com",
    linkedin: "https://www.linkedin.com/in/fadoua-bousalim-7a2716125/",
    github: "https://github.com/fadoua-bousalim",
  },
  aboutMe:
    "Hi, I'm Fadoua, a Senior Data & AI Engineer with a background in applied mathematics and statistics (ECP · NUS · UPMC). Over the past 7+ years, I've built end-to-end data and AI systems, from raw data ingestion and pipeline design to model training and cloud deployment. I work across the entire engineering lifecycle, bridging data infrastructure and applied machine learning. I've led teams, designed MLOps frameworks, and deployed production systems across multiple industries.",
  skills: [
    { name: "Python",           icon: "python" },
    { name: "GCP",              icon: "googlecloud" },
    { name: "VertexAI",         icon: "google" },
    { name: "Cloud Run",        icon: "googlecloud" },
    { name: "Cloud Functions",  icon: "googlecloud" },
    { name: "BigQuery",         icon: "googlebigquery" },
    { name: "FastAPI",          icon: "fastapi" },
    { name: "Docker",           icon: "docker" },
    { name: "Terraform",        icon: "terraform" },
    { name: "MySQL",            icon: "mysql" },
    { name: "GenAI / NLP",      icon: "huggingface" },
    { name: "MLOps",            icon: "mlflow" },
    { name: "AWS",              iconSrc: "/icons/aws.svg" },
    { name: "PyTorch",          icon: "pytorch" },
    { name: "TensorFlow",       icon: "tensorflow" },
    { name: "Transformers",     icon: "huggingface" },
    { name: "GitHub CI/CD",     icon: "github", iconColor: "ffffff" },
    { name: "Render",           icon: "render", iconColor: "ffffff" },
    { name: "Koyeb",            icon: "koyeb", iconColor: "ffffff" },
    { name: "Supabase",         icon: "supabase"},
    { name: "Fly.io",           icon: "flydotio", iconColor: "ffffff" },
    { name: "Airflow",          icon: "apacheairflow" },
    { name: "DBT",              iconSrc: "/icons/dbt.png" },
  ],
  projects: [
    {
      name: "Reddit Sentiment API",
      icon: "reddit",
      description:
        "A FastAPI-powered REST API that searches Reddit for any keyword and returns VADER sentiment analysis across recent posts (positive, neutral, or negative). Includes a built-in browser UI and interactive Swagger docs. Deployed on Fly.io.",
      link: "https://sentiment-analysis-flyio.fly.dev/",
      skills: ["Python", "FastAPI", "NLP", "VADER", "Fly.io"],
    },
    {
      name: "Salicylate Sensitivity Lookup",
      iconSrc: "/icons/leaf.svg",
      description:
        "A food lookup tool helping users identify salicylate levels and manage sensitivity. I built the backend API and data layer.",
      link: "https://salicylate.online/",
      skills: ["Python", "FastAPI", "REST API", "Supabase", "AWS", "Koyeb"],
      credits: { label: "Aqilah Misuary", link: "https://github.com/aqilahmisuary" },
    },
    {
      name: "Spam Filtering - Naive Bayes & Markov Chains",
      icon: "scikitlearn",
      description:
        "Implemented and analysed Naive Bayes spam classifiers (Multinomial & Gaussian) on a real email dataset, achieving up to 97% accuracy and a 0.6% false alarm rate. Paired with a Markov chain text generator to explore the limits of word independence assumptions in human language.",
      link: "https://github.com/fadoua-bousalim/academic-papers/blob/main/Random_Modeling_For_Spam_Filtering.pdf",
      skills: ["Python", "scikit-learn", "Naive Bayes", "Markov Chains", "NLP"],
    },
    {
      name: "COVID-19 Data Visualisation",
      icon: "jupyter",
      description:
        "Exploratory data analysis and interactive visualisation of global COVID-19 trends, including case evolution, mortality rates, and geographic spread across time.",
      link: "https://github.com/fadoua-bousalim/covid-19-data-viz",
      skills: ["Python", "Jupyter", "Data Visualisation", "Pandas"],
    },
  ],
  experience: [
    {
      company: "Opti Digital",
      title: "Senior Data & AI Engineer",
      dateRange: "Oct 2024 – Present",
      bullets: [
        "Building data & MLOps infrastructure for production-ready AI features",
        "Designing and shipping NLP & GenAI features across the full GCP ecosystem",
        "Architecting full ML workflows, from data ingestion to model serving, using Terraform and GitHub CI/CD",
      ],
      techStack: ["GCP", "Cloud Functions", "Cloud Run", "VertexAI", "BigQuery", "FastAPI", "NLP", "Terraform", "Python", "GitHub CI/CD", "Docker"],
    },
    {
      company: "Talarian",
      title: "Senior AI Engineer",
      dateRange: "Jan 2023 – Sept 2024",
      bullets: [
        "Built GenAI products data infrastructure from the ground up",
        "Designed and optimised ETL processes using DBT, GCP, and Airflow",
        "Designed classification models, from training data curation to fine tuning",
      ],
      techStack: ["DBT", "GCP", "BigQuery", "Airflow", "Python", "GenAI", "GitHub CI/CD"],
    },
    {
      company: "Arcane",
      title: "Data Team Lead",
      dateRange: "Feb 2022 – Jan 2023",
      bullets: [
        "Managed a cross-functional team of data scientists and engineers",
        "Led data modelling strategy and full-cycle ML projects",
        "Established engineering best practices, technical standards, and team roadmap",
      ],
      techStack: ["Python", "SQL", "BigQuery", "Statistics", "ML", "Looker Studio"],
    },
    {
      company: "Numberly",
      title: "Data Scientist & Project Manager",
      dateRange: "Jul 2019 – Feb 2022",
      bullets: [
        "Built ML models for audience segmentation and campaign optimisation",
        "Delivered analytics and statistical consulting projects for major clients",
        "Managed data projects end-to-end, from scoping and analysis to client delivery",
      ],
      techStack: ["Python", "R", "SQL", "Statistics", "ML", "Airflow"],
    },
    {
      company: "RATP Smart Systems",
      title: "Data Scientist",
      dateRange: "Apr 2018 – Aug 2018",
      bullets: [
        "Performed data analysis, correction, and visualisation on transport system databases",
        "Built models for passenger flow prediction and error margin estimation & reduction",
      ],
      techStack: ["Python", "R", "Statistics", "Predictive Modelling"],
    },
  ],
  education: [
    {
      school: "National University of Singapore (NUS)",
      degree: "Master of Science · Statistics",
      dateRange: "2018 – 2019",
      achievements: [
        "Advanced topics in applied statistics",
        "Spatial statistics",
        "Generalised linear models",
        "Multivariate data analysis",
        "Decision analysis",
        "Data mining",
        "Statistical consulting",
      ],
    },
    {
      school: "Ecole Centrale Paris (ECP)",
      degree: "Engineering & Applied Mathematics",
      dateRange: "2015 – 2019",
      achievements: [
        "Advanced statistics & probabilities",
        "Theoretical computer science",
        "Random modelling",
        "Information systems",
        "Control systems",
        "Quantum and statistical physics",
        "Thermodynamics & fluid mechanics",
        "Risk management",
        "Leadership in projects",
      ],
    },
    {
      school: "Pierre & Marie Curie University - UPMC Sorbonne",
      degree: "Master of Science · Applied Mathematics – Statistics & Data Science",
      dateRange: "2017 – 2018",
      achievements: [
        "Markov chains",
        "Graph theory",
        "Stochastic processes",
        "Statistical inference",
        "Applied data science",
        "Unsupervised learning",
        "Monte Carlo methods",
      ],
    },
  ],
  papers: [
    {
      title: "STDP-based Spiking Neural Network for Object Recognition",
      link: "https://github.com/fadoua-bousalim/academic-papers/blob/main/STDP_based_SNN_for_object_recognition.pdf",
    },
    {
      title: "Neutrosophic Association Rule Mining Algorithm",
      link: "https://github.com/fadoua-bousalim/academic-papers/blob/main/Neutrosophic_Association_Rule_Mining_Algorithm.pdf",
    },
    {
      title: "Credit Risk Analysis Using Machine Learning",
      link: "https://github.com/fadoua-bousalim/academic-papers/blob/main/Credit_Risk_Analysis_Using_ML.pdf",
    },
    {
      title: "Random Modeling for Spam Filtering",
      link: "https://github.com/fadoua-bousalim/academic-papers/blob/main/Random_Modeling_For_Spam_Filtering.pdf",
    },
  ],
};
