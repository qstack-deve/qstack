import { StaffCard, StaffMember } from "../../components/StaffCard";
import { backendUrl } from "../../lib/services/apiService";
import { Users, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/button";

async function getStaffMembers(): Promise<StaffMember[]> {
  try {
    const res = await fetch(`${backendUrl}/staff/`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Failed to fetch staff members");
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching staff:", error);
    return [];
  }
}

export default async function StaffPage() {
  const staffMembers = await getStaffMembers();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 w-11/12 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Meet the <span className="text-primary">Innovators &amp; Builders</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We are a team of software architects, full-stack engineers, and product designers united by a passion for technical excellence and human-centered design.
          </p>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="container mx-auto px-4 w-11/12 pb-20 md:pb-28">
        {staffMembers.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {staffMembers.map((member) => (
              <StaffCard key={member.id} member={member} className="h-full" />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 px-4 bg-muted/30 rounded-3xl border border-dashed">
            <p className="text-muted-foreground text-base">
              Team information is currently loading or updating from the server.
            </p>
          </div>
        )}
      </section>

      {/* Join Us CTA */}
      <section className="container mx-auto w-11/12 py-16 md:py-20 bg-slate-900 text-white rounded-3xl mb-16 text-center shadow-lg">
        <div className="flex flex-col items-center text-center gap-6 px-4 max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Want to join our team?
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base">
            We are always looking for curious, driven builders who love solving hard engineering problems.
          </p>
          <Link href="/careers">
            <Button size="lg" className="gap-2 rounded-xl h-12 px-8 font-semibold shadow-md">
              <span>View Open Positions</span>
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
