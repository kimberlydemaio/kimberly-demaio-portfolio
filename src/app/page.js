import RecruiterHeader from "@/components/recruiter/RecruiterHeader";
import RecruiterHero from "@/components/recruiter/RecruiterHero";

export default function Home() {
  return (
    <main className="recruiter-page">
      <RecruiterHeader />
      <RecruiterHero />
    </main>
  );
}