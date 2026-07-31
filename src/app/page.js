import RecruiterHeader from "@/components/recruiter/RecruiterHeader";
import RecruiterHero from "@/components/recruiter/RecruiterHero";
import FeaturedWork from "@/components/recruiter/FeaturedWork";
import ExperienceSnapshot from "@/components/recruiter/ExperienceSnapshot";
import VisualizationCallout from "@/components/recruiter/VisualizationCallout";

export default function Home() {
  return (
    <main className="recruiter-page">
      <RecruiterHeader />
      <RecruiterHero />
      <FeaturedWork />
      <ExperienceSnapshot />
      <VisualizationCallout />
    </main>
  );
}
