import RecruiterHeader from "@/components/recruiter/RecruiterHeader";
import RecruiterHero from "@/components/recruiter/RecruiterHero";
import FeaturedWork from "@/components/recruiter/FeaturedWork";

export default function Home() {
  return (
    <main className="recruiter-page">
      <RecruiterHeader />
      <RecruiterHero />
      <FeaturedWork />
    </main>
  );
}