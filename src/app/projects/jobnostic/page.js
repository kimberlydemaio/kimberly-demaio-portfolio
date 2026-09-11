import CaseStudyPage from "@/components/CaseStudyPage";

export default function JobnosticPage() {
  return (
    <CaseStudyPage
      number="02"
      category="AI + Full-Stack Product"
      title="Jobnostic"
      summary="A job discovery platform that analyzes a resume, builds a structured profile around the user's experience and strengths, and helps surface opportunities they may never have thought to search for."
      status="In development"
      role="Product design, AI workflow + full-stack development"
      stack={["Next.js", "OpenAI", "Neon / Postgres", "Stripe", "Vercel"]}
      theme="sage"
      board={{
        label: "Opportunity pipeline",
        primary: "RESUME → PROFILE → FIT → OPPORTUNITY",
        flow: ["Upload", "Analyze", "Profile", "Match"],
        note: "Less searching. More signal.",
      }}
      sections={[
        {
          title: "The problem",
          body: [
            "Traditional job searching assumes people already know which titles to search for. That works well when someone's next role is obvious, but much less well when their experience spans multiple functions or could translate into roles they have never considered.",
            "Jobnostic started from a different question: what if the search began with the person instead of the job title?",
          ],
        },
        {
          title: "Resume to profile",
          body: [
            "A user uploads their resume and Jobnostic analyzes it into a structured profile capturing experience, strengths, skills, and patterns across their work.",
            "That profile becomes the foundation for opportunity discovery instead of forcing the user to repeatedly translate their background into search keywords.",
          ],
        },
        {
          title: "Building the product workflow",
          body: [
            "The application combines traditional application logic with AI processing. Resume uploads, analysis states, database records, product limits, and user actions all need to stay synchronized.",
          ],
          bullets: [
            "Resume upload and file handling",
            "AI-powered profile analysis",
            "Persistent profile and user data",
            "Opportunity discovery workflow",
            "Processing and loading-state UX",
            "Subscription and usage architecture",
          ],
        },
        {
          title: "Thinking beyond the prototype",
          body: [
            "Jobnostic has also pushed me to think about software as a business rather than only as a technical build. AI usage has a real variable cost, which means product limits, subscription pricing, and infrastructure decisions need to be designed together.",
          ],
        },
      ]}
      highlights={[
        {
          label: "Core workflow",
          value: "Resume → profile",
        },
        {
          label: "Product layer",
          value: "AI-assisted discovery",
        },
        {
          label: "Business model",
          value: "Subscription SaaS",
        },
      ]}
      nextProject={{
        title: "Business Health Score",
        href: "/projects/business-health-score",
      }}
    />
  );
}
