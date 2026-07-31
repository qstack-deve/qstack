export type TagItem = string | { id: string; name: string; explanation?: string };

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image?: string | null;
  tags: TagItem[];
  category: string;
  url?: string;
  githubUrl?: string;
  status: "live" | "development" | "managing";
  client?: string;
  is_pinned?: boolean;
  metrics?: { label: string; value: string }[];
  keyFeatures?: string[];
  beginnerExplanation?: string;
  created_at?: string;
  updated_at?: string;
}

export const techExplanations: Record<string, string> = {
  "React": "Popular library for building interactive user interfaces.",
  "Next.js": "React framework for creating fast, search-engine-friendly web applications.",
  "TypeScript": "A safer version of JavaScript that catches code errors early.",
  "Python": "Versatile programming language widely used for AI and data science.",
  "PyTorch": "Machine learning framework used to build intelligent AI models.",
  "FastAPI": "High-performance Python framework for building cloud APIs.",
  "Tailwind CSS": "Modern styling system for sleek, responsive UI designs.",
  "Tailwind": "Modern styling system for sleek, responsive UI designs.",
  "Django": "Secure Python web framework ideal for complex database applications.",
  "PostgreSQL": "Rock-solid open-source database for storing critical application data.",
  "Docker": "Tool to package applications into consistent running containers.",
  "React Native": "Framework to build cross-platform iOS and Android mobile apps.",
  "Node.js": "JavaScript backend environment for fast real-time network services.",
  "GraphQL": "Query language allowing apps to request exactly the data they need.",
  "Redis": "Ultra-fast in-memory storage used for caching and instant data retrieval.",
  "Stripe": "Secure payment infrastructure for online transactions and subscriptions.",
  "Prisma": "Modern database toolkit for type-safe database queries.",
  "Go": "Super-fast programming language designed for scalable cloud systems.",
  "Rust": "High-performance system programming language focused on security.",
  "Kubernetes": "Automated system for managing and scaling cloud container applications.",
  "Prometheus": "Monitoring system for tracking cloud server health and metrics.",
  "Whisper AI": "State-of-the-art speech recognition and voice processing model.",
  "WebSocket": "Protocol for real-time two-way communication between server and client."
};
