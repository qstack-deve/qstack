import { StaffMember } from "../../components/StaffCard";

export const sampleStaffMembers: StaffMember[] = [
  {
    id: "alex-vance",
    slug: "alex-vance",
    full_name: "Dr. Alex Vance",
    role: { id: "1", name: "Chief Technology Officer & AI Architect" },
    bio: "Pioneer in distributed systems and conversational AI architecture with 12+ years of experience leading engineering teams across Silicon Valley startups.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    email: "alex@qstack.io",
    socials: [
      { platform: "github", url: "https://github.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "twitter", url: "https://twitter.com" }
    ],
    skills: [
      { id: "s1", name: "AI & Machine Learning" },
      { id: "s2", name: "System Architecture" },
      { id: "s3", name: "Python / PyTorch" },
      { id: "s4", name: "Cloud Infrastructure" }
    ]
  },
  {
    id: "sarah-jenkins",
    slug: "sarah-jenkins",
    full_name: "Sarah Jenkins",
    role: { id: "2", name: "Lead Full-Stack Engineer" },
    bio: "Passionate web artisan building high-throughput React & Next.js applications with a relentless focus on web performance, accessibility, and micro-animations.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    email: "sarah@qstack.io",
    socials: [
      { platform: "github", url: "https://github.com" },
      { platform: "linkedin", url: "https://linkedin.com" }
    ],
    skills: [
      { id: "s5", name: "Next.js & React" },
      { id: "s6", name: "TypeScript" },
      { id: "s7", name: "Tailwind CSS" },
      { id: "s8", name: "GraphQL & REST APIs" }
    ]
  },
  {
    id: "marcus-sterling",
    slug: "marcus-sterling",
    full_name: "Marcus Sterling",
    role: { id: "3", name: "Principal Cloud & Security Architect" },
    bio: "Specialist in zero-trust cybersecurity, Kubernetes orchestration, and resilient DevOps pipelines that handle millions of daily events reliably.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    email: "marcus@qstack.io",
    socials: [
      { platform: "github", url: "https://github.com" },
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "twitter", url: "https://twitter.com" }
    ],
    skills: [
      { id: "s9", name: "AWS & GCP Cloud" },
      { id: "s10", name: "Kubernetes & Docker" },
      { id: "s11", name: "Zero-Trust Security" },
      { id: "s12", name: "Go & Rust" }
    ]
  },
  {
    id: "elena-rostova",
    slug: "elena-rostova",
    full_name: "Elena Rostova",
    role: { id: "4", name: "Director of Product Design & UX" },
    bio: "Crafting intuitive user experiences, design systems, and mobile interfaces that turn complex workflows into simple, delightful human interactions.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    email: "elena@qstack.io",
    socials: [
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "twitter", url: "https://twitter.com" }
    ],
    skills: [
      { id: "s13", name: "UI/UX Research & Design" },
      { id: "s14", name: "Design Systems" },
      { id: "s15", name: "Figma & Prototyping" },
      { id: "s16", name: "Mobile Accessibility" }
    ]
  }
];
