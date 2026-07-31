"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Project, 
  TagItem,
  techExplanations 
} from "../../lib/data/portfolioData";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import {
  Search,
  ExternalLink,
  Github,
  Globe,
  Smartphone,
  Bot,
  Building2,
  Sparkles,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
  Zap,
  Layers,
  Code2,
  Filter,
  X
} from "lucide-react";

interface PortfolioViewProps {
  initialProjects: Project[];
}

const statusColors = {
  live: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30",
  development: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30",
  managing: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30",
};

const statusLabels = {
  live: "Live in Production",
  development: "In Development",
  managing: "Fully Managed",
};

const categoryIcons = {
  all: Layers,
  web: Globe,
  mobile: Smartphone,
  ai: Bot,
  enterprise: Building2,
};

function getTagName(tag: TagItem): string {
  if (typeof tag === "string") return tag;
  return tag?.name || String(tag);
}

function normalizeCategory(category?: string): "web" | "mobile" | "ai" | "enterprise" {
  if (!category) return "web";
  const lower = category.toLowerCase();
  if (lower.includes("web")) return "web";
  if (lower.includes("mobile") || lower.includes("app")) return "mobile";
  if (lower.includes("ai") || lower.includes("machine") || lower.includes("bot")) return "ai";
  if (lower.includes("enterprise") || lower.includes("system") || lower.includes("saas")) return "enterprise";
  return "web";
}

export function PortfolioView({ initialProjects }: PortfolioViewProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [selectedTechExplainer, setSelectedTechExplainer] = useState<{ name: string; desc: string } | null>(null);

  // Filter projects based on category & search
  const filteredProjects = useMemo(() => {
    return (initialProjects || []).filter((project) => {
      const catKey = normalizeCategory(project.category);
      const matchesCategory =
        selectedCategory === "all" || catKey === selectedCategory || (project.category && project.category.toLowerCase().includes(selectedCategory.toLowerCase()));
      
      const tagsList = project.tags || [];
      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tagsList.some((t) => getTagName(t).toLowerCase().includes(searchQuery.toLowerCase()));

      return matchesCategory && matchesSearch;
    });
  }, [initialProjects, selectedCategory, searchQuery]);

  const pinnedProjects = useMemo(
    () => filteredProjects.filter((p) => p.is_pinned),
    [filteredProjects]
  );
  
  const standardProjects = useMemo(
    () => filteredProjects.filter((p) => !p.is_pinned),
    [filteredProjects]
  );

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ai", label: "AI & ML" },
    { id: "enterprise", label: "Enterprise Systems" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 w-11/12 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Projects Built by <br className="hidden sm:inline" />
            <span className="text-primary">Quantum Stack</span>
          </h1>
          
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
            Explore our real-world software deployments. Search by tech stack or category, and click any project for a full breakdown!
          </p>

          {/* Search & Filter Bar */}
          <div className="max-w-3xl mx-auto space-y-4">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search projects by name, description, or tech (e.g. Next.js, Django, React)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-10 py-6 text-base rounded-2xl border-border/80 shadow-lg bg-background/90 focus-visible:ring-2 focus-visible:ring-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="size-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 pt-1 no-scrollbar px-1">
              {categories.map((cat) => {
                const IconComponent = categoryIcons[cat.id as keyof typeof categoryIcons];
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 min-h-[44px] ${
                      isSelected
                        ? "bg-primary text-primary-foreground shadow-md scale-105"
                        : "bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground border border-transparent hover:border-border"
                    }`}
                  >
                    <IconComponent className="size-4" />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Projects Section */}
      <section className="container mx-auto px-4 w-11/12 py-12">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 px-4 bg-muted/30 rounded-3xl border border-dashed">
            <Filter className="size-12 mx-auto text-muted-foreground mb-4 opacity-50" />
            <h3 className="text-xl font-bold mb-2">No matching projects found</h3>
            <p className="text-muted-foreground text-sm max-w-md mx-auto mb-6">
              We couldn&apos;t find any projects matching your filter &quot;{searchQuery}&quot;.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="rounded-xl"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <>
            {/* Pinned Featured Projects */}
            {pinnedProjects.length > 0 && (
              <div className="mb-16">
                <div className="flex items-center gap-3 mb-8">
                  <div className="size-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                    ★
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">Featured Projects</h2>
                  <div className="h-px flex-1 bg-border/60" />
                  <span className="text-xs text-muted-foreground font-mono">
                    {pinnedProjects.length} {pinnedProjects.length === 1 ? 'Project' : 'Projects'}
                  </span>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {pinnedProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onOpenModal={() => setActiveProject(project)}
                      onExplainTech={(name, desc) => setSelectedTechExplainer({ name, desc })}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Standard Projects */}
            {standardProjects.length > 0 && (
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="size-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <Layers className="size-4" />
                  </div>
                  <h2 className="text-2xl font-bold tracking-tight">
                    {pinnedProjects.length > 0 ? "More Projects" : "All Projects"}
                  </h2>
                  <div className="h-px flex-1 bg-border/60" />
                  <span className="text-xs text-muted-foreground font-mono">
                    {standardProjects.length} {standardProjects.length === 1 ? 'Project' : 'Projects'}
                  </span>
                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {standardProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onOpenModal={() => setActiveProject(project)}
                      onExplainTech={(name, desc) => setSelectedTechExplainer({ name, desc })}
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </section>

      {/* Tech Guide Section */}
      <section className="container mx-auto px-4 w-11/12 py-16 my-12 bg-slate-900 text-white rounded-3xl shadow-xl">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Our Software Stack Powers Your Business
          </h2>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed">
            Understanding software technology doesn&apos;t have to be complicated. Here is how Quantum Stack builds modern applications:
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/60 hover:border-primary/50 transition-colors">
            <div className="size-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
              <Globe className="size-5" />
            </div>
            <h3 className="font-bold text-lg mb-2">1. Frontend UI</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              What your users experience on screen. Powered by <strong>Next.js</strong> &amp; <strong>React</strong> for sub-second page loads and mobile responsiveness.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/60 hover:border-primary/50 transition-colors">
            <div className="size-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
              <Code2 className="size-5" />
            </div>
            <h3 className="font-bold text-lg mb-2">2. Django Backend API</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              The engine behind the scenes. Powered by <strong>Python &amp; Django REST framework</strong> to process transactions and handle business logic safely.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/60 hover:border-primary/50 transition-colors">
            <div className="size-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
              <Bot className="size-5" />
            </div>
            <h3 className="font-bold text-lg mb-2">3. PostgreSQL Database</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Rock-solid database storage ensuring your customer accounts, orders, and data stay isolated, backed up, and protected.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/60 hover:border-primary/50 transition-colors">
            <div className="size-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
              <Zap className="size-5" />
            </div>
            <h3 className="font-bold text-lg mb-2">4. Cloud Deployment</h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Hosted on secure HTTPS servers with high availability to ensure zero downtime and maximum reliability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto w-11/12 py-16 md:py-24 bg-slate-900 text-white rounded-3xl mb-16 text-center shadow-lg">
        <div className="max-w-xl mx-auto space-y-6 px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Have a project in mind?</h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            Whether you need a full SaaS application, an e-commerce platform, or a custom internal tool, Quantum Stack is ready to build it.
          </p>
          <Link href="/contact" className="inline-block">
            <Button size="lg" className="gap-2 rounded-xl h-12 px-8 text-base shadow-lg">
              <span>Start Your Project</span>
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Project Detail Modal */}
      {activeProject && (
        <Dialog open={!!activeProject} onOpenChange={() => setActiveProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl p-6 sm:p-8">
            <DialogHeader className="space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[activeProject.status] || statusColors["development"]}`}>
                  {statusLabels[activeProject.status] || activeProject.status}
                </span>
                <span className="text-xs text-muted-foreground font-medium px-2.5 py-1 bg-muted rounded-md uppercase tracking-wider">
                  {activeProject.category || "Web App"}
                </span>
                {activeProject.client && (
                  <span className="text-xs text-muted-foreground font-medium px-2 py-1 bg-muted rounded-md">
                    Client: {activeProject.client}
                  </span>
                )}
              </div>
              <DialogTitle className="text-2xl sm:text-3xl font-bold">
                {activeProject.title}
              </DialogTitle>
              <DialogDescription className="text-sm text-muted-foreground leading-relaxed">
                {activeProject.description}
              </DialogDescription>
            </DialogHeader>

            {/* Project Image / Visual Hero */}
            <div className="relative aspect-video rounded-2xl overflow-hidden my-4 border bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 flex items-center justify-center">
              {activeProject.image ? (
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="p-8 text-center flex flex-col items-center gap-3">
                  <div className="size-16 rounded-2xl bg-primary/20 text-primary flex items-center justify-center shadow-lg">
                    <Globe className="size-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white tracking-tight">{activeProject.title}</h4>
                  <span className="text-xs text-slate-400 font-mono">Quantum Stack Production App</span>
                </div>
              )}
            </div>

            {/* Overview */}
            {activeProject.longDescription && (
              <div className="space-y-2 mb-6">
                <h4 className="text-base font-bold flex items-center gap-2">
                  <Layers className="size-4 text-primary" />
                  Overview
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activeProject.longDescription}
                </p>
              </div>
            )}

            {/* Key Features */}
            {activeProject.keyFeatures && activeProject.keyFeatures.length > 0 && (
              <div className="space-y-3 mb-6">
                <h4 className="text-base font-bold flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-500" />
                  Key Features
                </h4>
                <ul className="grid sm:grid-cols-2 gap-2 text-xs sm:text-sm text-muted-foreground">
                  {activeProject.keyFeatures.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technology Stack Breakdown */}
            <div className="space-y-3 mb-6">
              <h4 className="text-base font-bold flex items-center gap-2">
                <Code2 className="size-4 text-chart-1" />
                Technology Stack Used
              </h4>
              <div className="grid gap-2">
                {(activeProject.tags || []).map((tag, idx) => {
                  const tagName = getTagName(tag);
                  const explanation = techExplanations[tagName] || "Modern software engineering framework.";
                  return (
                    <div key={idx} className="p-3 rounded-xl border bg-card flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                      <span className="font-semibold text-primary">{tagName}</span>
                      <span className="text-muted-foreground">{explanation}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t">
              {activeProject.githubUrl && (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border hover:bg-muted text-xs font-medium transition-colors"
                >
                  <Github className="size-4" />
                  View Code
                </a>
              )}
              {activeProject.url && (
                <a
                  href={activeProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 text-xs font-semibold shadow-md transition-colors"
                >
                  <ExternalLink className="size-4" />
                  Visit Application
                </a>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}

      {/* Tech Explainer Quick Dialog */}
      {selectedTechExplainer && (
        <Dialog open={!!selectedTechExplainer} onOpenChange={() => setSelectedTechExplainer(null)}>
          <DialogContent className="max-w-md rounded-2xl p-6">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold flex items-center gap-2">
                <Sparkles className="size-4 text-primary" />
                What is {selectedTechExplainer.name}?
              </DialogTitle>
            </DialogHeader>
            <p className="text-sm text-muted-foreground leading-relaxed my-2">
              {selectedTechExplainer.desc}
            </p>
            <div className="pt-3 border-t text-right">
              <Button size="sm" onClick={() => setSelectedTechExplainer(null)} className="rounded-xl">
                Got it!
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

// Individual Project Card Component
function ProjectCard({
  project,
  onOpenModal,
  onExplainTech,
}: {
  project: Project;
  onOpenModal: () => void;
  onExplainTech: (name: string, desc: string) => void;
}) {
  const tags = project.tags || [];

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1.5">
      <div>
        {/* Project Image or Visual Header */}
        <div 
          onClick={onOpenModal}
          className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 cursor-pointer flex items-center justify-center"
        >
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="p-6 text-center flex flex-col items-center gap-2">
              <div className="size-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                <Globe className="size-6" />
              </div>
              <span className="font-bold text-sm text-slate-100 tracking-tight line-clamp-1">{project.title}</span>
              <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider">{project.category || "Web App"}</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
          
          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border backdrop-blur-md shadow-xs ${statusColors[project.status] || statusColors["development"]}`}
            >
              {statusLabels[project.status] || project.status}
            </span>
          </div>

          {/* Quick View overlay hint */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg">
              <Sparkles className="size-3.5 text-chart-4" />
              Click for Details
            </span>
            <ExternalLink className="size-4" />
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <h3 
            onClick={onOpenModal}
            className="text-xl font-bold mb-2 group-hover:text-primary transition-colors cursor-pointer leading-snug"
          >
            {project.title}
          </h3>
          
          {project.client && (
            <p className="text-xs text-muted-foreground mb-3 font-medium">
              Client: <span className="text-foreground">{project.client}</span>
            </p>
          )}

          <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mb-5 line-clamp-3">
            {project.description}
          </p>

          {/* Technology Tags (with explainer click) */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {tags.slice(0, 5).map((tag, idx) => {
              const tagName = getTagName(tag);
              const desc = techExplanations[tagName] || "Modern software development tool";
              return (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    onExplainTech(tagName, desc);
                  }}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-colors flex items-center gap-1 group/tag"
                  title={`Click to learn what ${tagName} is`}
                >
                  <span>{tagName}</span>
                  <HelpCircle className="size-2.5 opacity-40 group-hover/tag:opacity-100 transition-opacity" />
                </button>
              );
            })}
            {tags.length > 5 && (
              <span className="px-2 py-1 rounded-lg text-[11px] font-medium bg-muted text-muted-foreground">
                +{tags.length - 5} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-6 pt-0 flex items-center justify-between border-t border-border/40 mt-2">
        <button
          onClick={onOpenModal}
          className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 py-2 min-h-[44px]"
        >
          View Details &rarr;
        </button>

        <div className="flex items-center gap-2">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
              title="Visit Live Application"
            >
              <Globe className="size-4" />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
              title="GitHub Repository"
            >
              <Github className="size-4" />
            </a>
          )}
        </div>
      </div>

      {/* Bottom Accent line */}
      <div className="h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
}
