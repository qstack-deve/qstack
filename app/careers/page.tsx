import Link from "next/link";
import { Button } from "../../components/ui/button";
import { ArrowRight, Building2, Users, Zap, Heart, Briefcase } from "lucide-react";
import { backendUrl } from "../../lib/services/apiService";
import { JobCard, JobOpening } from "../../components/JobCard";

const perks = [
  {
    icon: Users,
    title: "Collaborative Team",
    description: "Work directly alongside experienced engineers who love pair-programming and knowledge sharing.",
  },
  {
    icon: Zap,
    title: "Continuous Growth",
    description: "Generous learning stipend for conferences, technical books, and cloud certifications.",
  },
  {
    icon: Building2,
    title: "Remote First",
    description: "Flexible working hours and location independence with async-first communication.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Sustainable pacing, zero weekend crunch, and comprehensive health coverage.",
  },
];

async function getJobOpenings(): Promise<JobOpening[]> {
  try {
    const res = await fetch(`${backendUrl}/jobs/`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error("Failed to fetch job openings");
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching jobs:", error);
    return [];
  }
}

export default async function CareersPage() {
  const jobOpenings = await getJobOpenings();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 w-11/12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Build the <span className="text-primary">Future of Software</span> With Us
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We are always looking for passionate builders, designers, and system architects. Discover our open roles below or drop us a line!
          </p>
        </div>
      </section>

      {/* Perks Section */}
      <section className="container mx-auto px-4 w-11/12 pb-16 pt-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="p-6 rounded-3xl border bg-card hover:shadow-xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                <perk.icon className="size-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">{perk.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Openings */}
      <section className="container mx-auto px-4 w-11/12 pb-20 md:pb-28">
        <div className="flex items-center gap-3 mb-10">
          <h2 className="text-2xl font-bold tracking-tight">Open Opportunities</h2>
          <div className="h-px flex-1 bg-border/60" />
          <span className="text-xs font-mono text-muted-foreground">{jobOpenings.length} Positions</span>
        </div>

        {jobOpenings.length > 0 ? (
          <div className="space-y-6 max-w-4xl mx-auto">
            {jobOpenings.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-4 bg-muted/30 rounded-3xl border border-dashed">
            <p className="text-muted-foreground text-base mb-2">
              No open positions posted at the moment.
            </p>
            <p className="text-xs text-muted-foreground">
              Send us your resume and we will contact you when a role opens up!
            </p>
          </div>
        )}
      </section>

      {/* No Matching Role CTA */}
      <section className="container mx-auto w-11/12 py-16 md:py-20 bg-slate-900 text-white rounded-3xl mb-16 text-center shadow-lg">
        <div className="flex flex-col items-center text-center gap-6 px-4 max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Don&apos;t see a matching role?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            We are always open to introducing great talent. Send us your resume and tell us how you would like to contribute!
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="gap-2 rounded-xl h-12 px-8 font-semibold">
              <span>Send Your Resume</span>
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
