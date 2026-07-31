import { backendUrl } from "../../lib/services/apiService";
import { Project } from "../../lib/data/portfolioData";
import { PortfolioView } from "../../components/portfolio/PortfolioView";

async function fetchProjects(): Promise<Project[]> {
  try {
    const res = await fetch(`${backendUrl}/portfolio/`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      console.error("Failed to fetch portfolio projects from backend");
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Error fetching portfolio projects:", error);
    return [];
  }
}

export default async function PortfolioPage() {
  const projects = await fetchProjects();
  console.log(projects);
  return <PortfolioView initialProjects={projects} />;
}
