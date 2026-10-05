import CaseStudyPage from "@/components/CaseStudyPage";

export default function JobnosticPage() {
  return (
    <CaseStudyPage
      number="02"
      category="AI + Full-Stack Product"
      title="Experigraph"
      summary="A career intelligence platform that turns a person’s experience into a structured Work Graph, uncovering transferable strengths, unexpected career paths, and opportunities they may never have thought to search for."
      role="Product strategy, AI systems design, data modeling + full-stack development"
      stack={["Next.js", "OpenAI", "Neon / Postgres", "Stripe", "Vercel"]}
      theme="sage"
      board={{
        label: "Career intelligence flow",
        primary: "EXPERIENCE → WORK GRAPH → FIT → OPPORTUNITY",
        flow: ["Experience", "Map", "Evaluate", "Discover"],
        note: "See where your experience can take you.",
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
          title: "Building beyond the prototype",
          body: [
            "Traditional job searching assumes people already know which titles to search for. That works when the next step is obvious, but breaks down when someone's experience spans functions, industries, or skills that could translate in unexpected ways.",
            "Experigraph starts from a different question: what if career discovery began with everything a person has actually done — and used that experience to reveal where they could go next?",
          ],
        },
      ]}
      highlights={[
        {
          label: "Core workflow",
          value: "Experience → Work Graph",
        },
        {
          label: "Intelligence layer",
          value: "AI-powered career mapping",
        },
        {
          label: "Business model",
          value: "Tiered subscription SaaS",
        },
      ]}
      nextProject={{
        title: "Business Health Score",
        href: "/projects/business-health-score",
      }}
    />
  );
}
