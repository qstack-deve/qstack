import { Hero } from "../components/hero";
import { Button } from "../components/ui/button";
import Link from "next/link";
import { Code, Bot, Globe, ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2, HelpCircle } from "lucide-react";
import { BackendWarmer } from "../components/BackendWarmer";
import { backendUrl } from "../lib/services/apiService";
import { Project } from "../lib/data/portfolioData";
import Image from "next/image";

async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${backendUrl}/portfolio/`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const projects: Project[] = await res.json();
    return projects.filter((p) => p.is_pinned).slice(0, 3);
  } catch (error) {
    console.error("Error fetching featured projects:", error);
    return [];
  }
}

export default async function Home() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <div className="flex flex-col gap-12 sm:gap-20">
      <BackendWarmer />
      <Hero />

      {/* Services Highlight Section */}
      <section className="container mx-auto px-4 w-11/12 py-12 md:py-20 bg-slate-50 dark:bg-slate-900/60 rounded-3xl border border-border/50">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            What We Build
          </h2>
          <p className="max-w-[85%] leading-relaxed text-muted-foreground text-sm sm:text-base md:text-lg">
            We deliver complete software solutions tailored to solve complex operational challenges and engage your audience.
          </p>
        </div>

        <div className="mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl">
          <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 sm:p-8 hover:shadow-xl hover:border-primary/40 transition-all duration-300">
            <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Globe className="size-6" />
            </div>
            <h3 className="font-bold text-xl mb-2">Modern Web Applications</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
              Ultra-fast, search-engine-friendly web apps built with <strong>Next.js</strong> &amp; <strong>React</strong> that convert visitors into active customers.
            </p>
            <div className="text-xs text-primary font-medium flex items-center gap-1">
              <span>Beginner Friendly: Works seamlessly on all phones &amp; laptops</span>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 sm:p-8 hover:shadow-xl hover:border-primary/40 transition-all duration-300">
            <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Bot className="size-6" />
            </div>
            <h3 className="font-bold text-xl mb-2">Intelligent AI Agents</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
              Automate routine client inquiries, process unstructured documents, and power decisions with custom <strong>LLMs</strong> &amp; <strong>PyTorch</strong> models.
            </p>
            <div className="text-xs text-primary font-medium flex items-center gap-1">
              <span>Beginner Friendly: AI handles repetitive work 24/7 automatically</span>
            </div>
          </div>

          <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 sm:p-8 hover:shadow-xl hover:border-primary/40 transition-all duration-300">
            <div className="size-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Code className="size-6" />
            </div>
            <h3 className="font-bold text-xl mb-2">Custom Cloud Systems</h3>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-4">
              Robust API backends and scalable databases using <strong>Python (Django/FastAPI)</strong> &amp; <strong>PostgreSQL</strong> designed for growth.
            </p>
            <div className="text-xs text-primary font-medium flex items-center gap-1">
              <span>Beginner Friendly: Keeps customer data safe and encrypted</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/services">
            <Button variant="outline" size="lg" className="gap-2 rounded-xl h-11 px-6 font-semibold">
              <span>View All Services</span>
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Portfolio Showcase Teaser */}
      {featuredProjects.length > 0 && (
        <section className="container mx-auto px-4 w-11/12 py-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold text-primary tracking-wider uppercase">Portfolio Spotlight</span>
              <h2 className="text-3xl font-extrabold tracking-tight mt-1">Featured Work</h2>
            </div>
            <Link href="/portfolio">
              <Button variant="ghost" className="gap-2 text-primary font-semibold hover:gap-3 transition-all">
                <span>View All Projects</span>
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl border bg-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                    {project.category && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-background/90 text-foreground shadow-xs">
                        {project.category.toUpperCase()}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-xs leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link href="/portfolio" className="text-xs font-semibold text-primary hover:underline inline-flex items-center gap-1">
                    View Project Details &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Trust & Advantages */}
      <section className="container mx-auto px-4 w-11/12 py-12 md:py-20">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Why Partner with Quantum Stack?
          </h2>
          <p className="max-w-[85%] text-muted-foreground text-sm sm:text-base">
            We bridge deep software engineering precision with simple, transparent client communication.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 border rounded-2xl bg-card space-y-3">
            <div className="size-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
              <CheckCircle2 className="size-5" />
            </div>
            <h3 className="font-bold text-lg">Clean Architecture</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Maintainable, modular code bases that scale easily as your user base expands.
            </p>
          </div>

          <div className="p-6 border rounded-2xl bg-card space-y-3">
            <div className="size-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold">
              <Zap className="size-5" />
            </div>
            <h3 className="font-bold text-lg">Fast Execution</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Agile bi-weekly sprints ensuring continuous deployment and rapid feedback loops.
            </p>
          </div>

          <div className="p-6 border rounded-2xl bg-card space-y-3">
            <div className="size-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center font-bold">
              <HelpCircle className="size-5" />
            </div>
            <h3 className="font-bold text-lg">Beginner Friendly</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              No technical jargon overload. We explain specs and decisions in clear, accessible language.
            </p>
          </div>

          <div className="p-6 border rounded-2xl bg-card space-y-3">
            <div className="size-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold">
              <ShieldCheck className="size-5" />
            </div>
            <h3 className="font-bold text-lg">Dedicated Support</h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Ongoing SLA monitoring, security updates, and post-launch maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto w-11/12 py-16 md:py-24 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl mb-16 text-center shadow-xl">
        <div className="flex flex-col items-center text-center gap-6 max-w-xl mx-auto px-4">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/20 text-primary-foreground">
            Get Started Today
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Ready to bring your software vision to life?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Contact us today for a free technical strategy call. We will review your project scope and craft a clear roadmap.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2 rounded-xl h-12 px-8 font-semibold shadow-lg text-base">
              <span>Schedule Strategy Call</span>
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
