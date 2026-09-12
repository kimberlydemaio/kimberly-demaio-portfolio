import CaseStudyPage from "@/components/CaseStudyPage";

export default function BusinessHealthScorePage() {
  return (
    <CaseStudyPage
      number="03"
      category="Product + Operations"
      title="Business Health Score"
      summary="A free interactive assessment that turns a set of operational questions into a 0–100 business health score, then helps business owners understand where to focus next."
      status="Live"
      role="Product strategy, scoring model, UX + development"
      stack={[
        "Next.js",
        "JavaScript",
        "Vercel",
        "Google Apps Script",
        "Google Sheets",
      ]}
      theme="clay"
      liveProject={{
        label: "Try the Business Health Score",
        href: "https://score.analyticonnect.com",
      }}
      sampleReport={{
        label: "View a Sample Report",
        href: "/reports/business-health-score-sample.pdf",
      }}
      board={{
        label: "Decision support",
        primary: "ANSWERS → SCORE → PRIORITIES",
        flow: ["Assess", "Score", "Interpret", "Act"],
        note: "A number is only useful if it helps someone decide what to do next.",
      }}
      sections={[
        {
          title: "The problem",
          body: [
            "Small businesses often know something in their operations feels messy without knowing exactly where the problem is—or which issue deserves attention first.",
            "I wanted to create a lightweight entry point that could turn that uncertainty into a clearer picture of the business.",
          ],
        },
        {
          title: "Designing the score",
          body: [
            "The experience guides users through a structured set of questions across key areas of the business and converts those responses into an overall score from 0 to 100.",
            "I wanted the assessment to feel approachable rather than diagnostic or overwhelming, while still collecting enough information to produce something genuinely useful.",
            "The score itself is not the end product. The more important part is helping the user understand what the number means and which areas deserve attention first.",
          ],
          visual: "questionnaire",
          image: "/images/business-health-questionnaire.png",
          imageAlt:
            "Business Health Score questionnaire showing operational assessment questions",
        },
        {
          title: "Keeping the system lightweight",
          body: [
            "I built the public application in Next.js and deployed it through Vercel, while using a lightweight Google Apps Script and Google Sheets workflow to capture submissions and answer data.",
            "That architecture gave me a practical way to launch and validate the product without building infrastructure that the first version did not need.",
            "It was an intentional product decision: build enough infrastructure to support the experience reliably, but avoid adding complexity before the product had earned it.",
          ],
        },
        {
          title: "From assessment to action",
          body: [
            "The results experience turns the assessment into recommendations rather than simply displaying a grade.",
            "Users can see their overall business health, understand which areas are performing well, identify where weaknesses are appearing, and leave with clearer priorities for what to address next.",
          ],
          visual: "results",
          image: "/images/business-health-results.png",
          imageAlt:
            "Business Health Score results page showing score and prioritized recommendations",
        },
        {
          title: "Taking the results with you",
          body: [
            "I also wanted the assessment to create something useful beyond the browser session. The downloadable report gives users a tangible summary of their score, findings, and recommended next steps.",
            "That turns the experience from a one-time quiz into something a business owner can save, revisit, and use as a starting point for future decisions.",
            "For people who want to see the final deliverable without completing the assessment themselves, I also provide a sample report directly from this case study.",
          ],
          visual: "report",
        },
        {
          title: "From free tool to product strategy",
          body: [
            "The Business Health Score also became a natural bridge between a useful free product and the broader analytics and operations work behind AnalytiConnect.",
            "It gives someone immediate value while also demonstrating how I think about operational problems: gather the right information, make the signal easier to understand, and turn it into action.",
          ],
        },
      ]}
      highlights={[
        {
          label: "Output",
          value: "0–100 health score",
        },
        {
          label: "Experience",
          value: "Prioritized recommendations",
        },
        {
          label: "Deliverable",
          value: "Downloadable report",
        },
      ]}
    />
  );
}
