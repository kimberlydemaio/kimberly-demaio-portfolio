import CaseStudyPage from "@/components/CaseStudyPage";

export default function ExperigraphPage() {
  return (
    <CaseStudyPage
      number="01"
      category="AI + Full-Stack Product Development"
      title="Experigraph"
      summary="An AI-powered career intelligence platform I built and launched to help people discover what their experience makes possible, beyond the job titles they already know."
      status="Live · Actively evolving"
      role="Founder, product strategy, AI architecture, data modeling + full-stack development"
      stack={[
        "Next.js",
        "React",
        "JavaScript",
        "OpenAI API",
        "PostgreSQL",
        "Neon",
        "Clerk",
        "AWS S3",
        "Stripe",
        "Vercel",
      ]}
      theme="sage"
      liveProject={{
        label: "Explore Experigraph",
        href: "https://experigraph.com",
      }}
      board={{
        label: "From experience to opportunity",
        primary: "EXPERIENCE → WORK GRAPH → OPPORTUNITY → ACTION",
        flow: ["Understand", "Map", "Discover", "Move Forward"],
        note: "Your next move shouldn't depend on knowing the right job title.",
      }}
      sections={[
        {
          title: "The problem",
          body: [
            "Most career platforms start with a job title. They assume people already know what they want to do next and can describe their experience using the right keywords.",
            "But careers rarely follow perfectly defined paths. Someone might spend years building systems, improving operations, managing people, or solving technical problems without holding a title that fully reflects those capabilities.",
            "I wanted to approach career discovery differently. Instead of asking people what job they wanted, I wanted to understand what their experience actually demonstrated and show them where it could lead.",
          ],
        },
        {
          title: "Designing the experience",
          body: [
            "I designed Experigraph around a person-first workflow: understand professional experience, organize the evidence, explore potential career directions, and turn those possibilities into practical next steps.",
            "The challenge was making a technically complex process feel intuitive. Users shouldn't need to understand AI models, data structures, or matching algorithms to explore their careers.",
            "The experience begins with a resume and builds toward a personalized workspace for career discovery and development.",
          ],
          visual: "experigraph",
          image: "/images/experigraph-onboarding.png",
          imageAlt:
            "Experigraph onboarding experience showing the beginning of the career discovery process",
        },
        {
          title: "Building an evidence-first AI system",
          body: [
            "One of my most important architectural decisions was separating career evidence extraction from career recommendations.",
            "Experigraph uses a two-pass OpenAI workflow for resume analysis. The first pass extracts structured evidence, including responsibilities, achievements, projects, technical capabilities, leadership signals, and professional scope.",
            "A second pass audits that interpretation for unsupported inferences, missing evidence, and potential misclassifications.",
            "I implemented strict JSON-schema outputs to make the results consistent, validated, and usable throughout the application. The goal isn't to make someone's experience sound more impressive. It's to understand what they've actually demonstrated.",
          ],
          bullets: [
            "Two-pass AI extraction and evidence auditing",
            "Schema-constrained structured outputs",
            "Evidence provenance and persistent identifiers",
            "Validation of unsupported or overstated claims",
          ],
          visual: "experigraph",
          image: "/images/experigraph-profile.png",
          imageAlt:
            "Experigraph career profile showing structured professional experience and capabilities",
        },
        {
          title: "From profile to Work Graph",
          body: [
            "After analyzing the resume, Experigraph builds a Work Graph that connects professional evidence to broader capabilities and career families.",
            "Instead of treating a person's experience as a flat list of keywords, the system preserves relationships between responsibilities, skills, accomplishments, scope, and ownership.",
            "This became the foundation for the rest of the platform. The same structured evidence can support career exploration, development planning, and opportunity matching without requiring users to repeatedly explain their background.",
          ],
          visual: "experigraph",
          image: "/images/experigraph-work-graph.png",
          imageAlt:
            "Experigraph Work Graph showing relationships between career evidence and professional capabilities",
        },
        {
          title: "Discovering unexpected opportunities",
          body: [
            "The Opportunity Map translates the Work Graph into potential career directions. It evaluates how demonstrated capabilities align with different types of work and identifies areas where additional development may be needed.",
            "I wanted the results to be more useful than a list of suggested job titles. Each direction needed to communicate why it was relevant, which strengths supported it, and how realistic the transition might be.",
            "This required combining AI interpretation with structured readiness criteria and validation logic.",
          ],
          visual: "experigraph",
          image: "/images/experigraph-opportunity-map.png",
          imageAlt:
            "Experigraph Opportunity Map displaying potential career directions and readiness assessments",
        },
        {
          title: "Turning possibilities into a plan",
          body: [
            "Discovering a new career direction is exciting, but it's only useful when someone understands what to do next.",
            "I built Path to turn career possibilities into targeted development plans. It identifies capabilities already supported by the user's experience and recommends practical actions for closing gaps or strengthening qualifications.",
            "An important engineering challenge was preserving progress when plans changed. I developed versioned relational models and transactional persistence so users could revisit their career direction without losing completed work or supporting evidence.",
          ],
          bullets: [
            "Evidence-based development recommendations",
            "Actionable checklists and progress tracking",
            "Versioned career path records",
            "Transactional saving and progress preservation",
          ],
          visual: "experigraph",
          image: "/images/experigraph-path.png",
          imageAlt:
            "Experigraph Path showing a personalized career development plan and actionable steps",
        },
        {
          title: "Connecting discovery to real opportunities",
          body: [
            "Career intelligence needed to extend beyond theoretical possibilities and connect to actual employment opportunities.",
            "I developed a structured job-source architecture that collects and normalizes employer opportunities from supported applicant-tracking systems.",
            "The Search experience uses career evidence to evaluate alignment with real positions, helping users understand the relationship between their demonstrated experience and specific job requirements.",
            "Behind the interface, the engineering challenges include source reliability, duplicate prevention, stable opportunity identifiers, and maintaining current job information.",
          ],
          bullets: [
            "Structured employer and ATS source registry",
            "Job ingestion and normalization",
            "Opportunity identity and refresh tracking",
            "AI-assisted job-fit evaluation",
          ],
          visual: "experigraph",
          image: "/images/experigraph-search.png",
          imageAlt:
            "Experigraph Search showing employment opportunities and career-fit analysis",
        },
        {
          title: "Making the search manageable",
          body: [
            "Finding opportunities is only one part of a job search. Keeping track of them and deciding what to do next can become another complicated process.",
            "I included an opportunity tracker so users can save positions, monitor application progress, and maintain a more organized view of their search.",
            "This gives the platform continuity between discovering opportunities and taking action on them.",
          ],
          visual: "experigraph",
          image: "/images/experigraph-tracker.png",
          imageAlt:
            "Experigraph opportunity tracker showing saved jobs and application statuses",
        },
        {
          title: "Engineering the complete product",
          body: [
            "Experigraph is more than an AI interface. I built the surrounding full-stack application, including authentication, file handling, relational data models, backend APIs, persistent workspaces, billing integration, and deployment infrastructure.",
            "The application uses Next.js and React, PostgreSQL through Neon, AWS S3 for uploaded files, OpenAI APIs for analysis, and Stripe for billing.",
            "A significant part of the work involves making these technologies behave as one connected product: coordinating asynchronous analysis, handling failures, enforcing access rules, and protecting existing user data as features evolve.",
          ],
          bullets: [
            "Full-stack application and API development",
            "PostgreSQL schema design and database migrations",
            "Authentication and user-specific data access",
            "Private resume storage and secure file access",
            "Subscription and feature-access workflows",
            "Deployment, validation, and iterative testing",
          ],
          visual: "experigraph",
          image: "/images/experigraph-dashboard.png",
          imageAlt:
            "Experigraph workspace dashboard bringing together career intelligence features",
        },
        {
          title: "From concept to a live product",
          body: [
            "I took Experigraph from an initial concept through product strategy, architecture, interface design, AI workflows, database development, integrations, and launch.",
            "Building it independently has required constant decisions about where complexity is justified, what should be deterministic rather than AI-generated, and how to balance new features with reliability.",
            "Experigraph is now live and continues to evolve. The most meaningful accomplishment for me has been turning a complicated, deeply personal problem into a connected product that people can actually use.",
          ],
        },
      ]}
      highlights={[
        {
          label: "Product",
          value: "Live SaaS platform",
        },
        {
          label: "AI architecture",
          value: "Two-pass evidence analysis",
        },
        {
          label: "Development",
          value: "End-to-end ownership",
        },
      ]}
      nextProject={{
        title: "Business Health Score",
        href: "/projects/business-health-score",
      }}
    />
  );
}
