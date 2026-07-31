import { JobOpening } from "../../components/JobCard";

export const sampleJobOpenings: JobOpening[] = [
  {
    id: "job-1",
    title: "Senior Full-Stack Engineer (Next.js & Python)",
    department: "Engineering",
    location: "Remote (Global) / Hybrid",
    company: "Quantum Stack Technologies",
    site: "remote",
    job_type: "full-time",
    experience: "5+ Years",
    description: "We are seeking a Senior Full-Stack Engineer to architect high-performance web applications and integrate cutting-edge AI services for enterprise clients.",
    responsibilities: [
      { description: "Lead feature development from technical spec to production deployment" },
      { description: "Collaborate with UI/UX designers to implement pixel-perfect, accessible interfaces" },
      { description: "Mentor junior engineers and champion modern code quality standards" },
      { description: "Optimize application load times and server latency" }
    ],
    requirements: [
      { description: "5+ years of software development experience with React, Next.js, and TypeScript" },
      { description: "Proficiency in Python (Django / FastAPI) or Node.js backend services" },
      { description: "Experience with relational databases (PostgreSQL) and caching layers (Redis)" },
      { description: "Strong understanding of web performance optimization and mobile responsiveness" }
    ],
    benefits: [
      { description: "Competitive Salary & Equity" },
      { description: "100% Remote Flexibility" },
      { description: "Health & Dental Insurance" },
      { description: "Annual Learning Stipend" }
    ],
    salary_range: {
      min_salary: "120000",
      max_salary: "160000"
    },
    posted_at: "2026-07-25T10:00:00Z",
    updated_at: "2026-07-25T10:00:00Z"
  },
  {
    id: "job-2",
    title: "AI & Machine Learning Infrastructure Engineer",
    department: "AI Research & Systems",
    location: "Remote",
    company: "Quantum Stack Technologies",
    site: "remote",
    job_type: "full-time",
    experience: "3+ Years",
    description: "Join our AI engineering team building real-time LLM agents, vector search indexing, and automated machine learning pipelines.",
    responsibilities: [
      { description: "Build and optimize low-latency AI inference endpoints" },
      { description: "Implement multi-modal agent workflows with tool calling" },
      { description: "Monitor AI output quality, latency, and token consumption" }
    ],
    requirements: [
      { description: "3+ years experience deploying AI / ML models in production environments" },
      { description: "Proficiency in Python, PyTorch, LangChain / LlamaIndex, and Vector Databases" },
      { description: "Familiarity with Cloudflare Workers AI or AWS Bedrock infrastructure" },
      { description: "Passion for state-of-the-art agentic workflows and function calling" }
    ],
    benefits: [
      { description: "Flexible Working Hours" },
      { description: "Latest M-series Macbook Pro" },
      { description: "Generous PTO & Paid Holidays" }
    ],
    salary_range: {
      min_salary: "130000",
      max_salary: "175000"
    },
    posted_at: "2026-07-20T10:00:00Z",
    updated_at: "2026-07-20T10:00:00Z"
  },
  {
    id: "job-3",
    title: "Lead Product Designer (UI/UX)",
    department: "Design",
    location: "Remote / Hybrid",
    company: "Quantum Stack Technologies",
    site: "hybrid",
    job_type: "full-time",
    experience: "4+ Years",
    description: "Help us shape the next generation of web and mobile software interfaces with clean typography, dark mode palettes, and intuitive component design systems.",
    responsibilities: [
      { description: "Create high-fidelity wireframes, interactive prototypes, and design specs" },
      { description: "Work closely with frontend engineers to ensure design fidelity" },
      { description: "Conduct user research and usability testing" }
    ],
    requirements: [
      { description: "4+ years experience designing complex digital web products" },
      { description: "Mastery of Figma, component libraries, and design token architectures" },
      { description: "Demonstrated portfolio of mobile-first responsive web apps" },
      { description: "Deep understanding of accessibility guidelines (WCAG 2.1)" }
    ],
    benefits: [
      { description: "Design Hardware Allowance" },
      { description: "Global Team Retreats" },
      { description: "Wellness Stipend" }
    ],
    salary_range: {
      min_salary: "110000",
      max_salary: "145000"
    },
    posted_at: "2026-07-15T10:00:00Z",
    updated_at: "2026-07-15T10:00:00Z"
  }
];
