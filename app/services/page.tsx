import { Button } from "../../components/ui/button";
import {
  ArrowRight,
  Bot,
  Code,
  Database,
  Smartphone,
  Cloud,
  Shield,
  Sparkles,
  HelpCircle,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
  const services = [
    {
      title: "Web Application Development",
      description:
        "High-performance, responsive, and SEO-optimized web applications using Next.js, React, and TypeScript.",
      beginnerExplain: "Ideal for businesses wanting a modern, fast website or web platform that loads instantly on mobile phones and laptops.",
      icon: Code,
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "AI & Machine Learning Solutions",
      description:
        "Custom AI agents, LLM integration, voice support, and predictive analytics pipelines to automate your operations.",
      beginnerExplain: "Ideal for automating repetitive tasks like reading long documents, summarizing customer questions, or generating automated reports.",
      icon: Bot,
      tags: ["Python", "PyTorch", "FastAPI", "LLM Agents"],
    },
    {
      title: "Mobile App Development",
      description:
        "Native and cross-platform iOS & Android mobile applications that deliver smooth touch experiences.",
      beginnerExplain: "Ideal if your customers need a smartphone app with push notifications, offline mode, or camera access.",
      icon: Smartphone,
      tags: ["React Native", "iOS / Android", "GraphQL", "Push Alerts"],
    },
    {
      title: "Cloud & Infrastructure DevOps",
      description:
        "Scalable cloud architecture, containerization, and zero-downtime deployment strategies on AWS, Azure, or GCP.",
      beginnerExplain: "Ideal for making sure your app never crashes even when thousands of people open it at the same time.",
      icon: Cloud,
      tags: ["AWS", "Docker", "Kubernetes", "CI/CD Pipeline"],
    },
    {
      title: "Software & System Architecture",
      description:
        "Robust database design, microservices, and high-throughput backend APIs that grow with your company.",
      beginnerExplain: "Ideal if you have complex data that needs to be organized safely and processed at lighting speed.",
      icon: Database,
      tags: ["PostgreSQL", "Redis", "Django", "Node.js"],
    },
    {
      title: "Cybersecurity & Code Audits",
      description:
        "Zero-trust security protocol implementation, penetration testing, and HIPAA/GDPR compliance audits.",
      beginnerExplain: "Ideal for keeping customer credit cards, health records, and passwords safe from malicious hackers.",
      icon: Shield,
      tags: ["Zero-Trust", "HIPAA/GDPR", "Penetration Testing", "Security Audits"],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 w-11/12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Services Built for <span className="text-primary">Scale &amp; Simplicity</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From early-stage MVPs to complex enterprise systems, we design and build software tailored to your specific business targets.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 w-11/12 pb-20 md:pb-28">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-3xl border bg-card p-6 sm:p-8 hover:shadow-2xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>

                  {/* Beginner Friendly Plain English Explainer */}
                  <div className="p-3.5 rounded-2xl bg-muted/60 border border-border/50 text-xs mb-5">
                    <div className="font-semibold text-foreground flex items-center gap-1.5 mb-1">
                      <HelpCircle className="size-3.5 text-primary" />
                      <span>Why You Need This:</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.beginnerExplain}
                    </p>
                  </div>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-2 border-t">
                    {service.tags.map((t, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-primary/5 text-primary">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link href="/contact" className="w-full block">
                    <Button variant="outline" className="w-full gap-2 rounded-xl h-11 text-xs font-semibold group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <span>Request Quote</span>
                      <ArrowRight className="size-3.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto w-11/12 py-16 md:py-20 bg-slate-900 text-white rounded-3xl mb-16 text-center shadow-lg">
        <div className="flex flex-col items-center text-center gap-6 px-4 max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Need a Custom Solution?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Not sure which service fits your project? Tell us what you want to achieve, and we will recommend the best stack.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2 rounded-xl h-12 px-8 font-semibold shadow-md">
              <span>Talk to an Architect</span>
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
