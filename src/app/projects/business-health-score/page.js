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
            "The experience asks a structured set of questions across important areas of the business and converts those responses into an overall score from 0 to 100.",
            "The score itself is not the end product. The more important part is helping the user interpret what it means and identify the areas that deserve attention.",
          ],
        },
        {
          title: "Keeping the system lightweight",
          body: [
            "I built the public application in Next.js and deployed it through Vercel, while using a lightweight Google Apps Script and Google Sheets workflow to capture submissions and answer data.",
            "That architecture gave me a practical way to launch and validate the product without building infrastructure that the first version did not need.",
          ],
        },
        {
          title: "From assessment to action",
          body: [
            "The results experience turns the assessment into recommendations rather than simply displaying a grade. Users can see their overall business health, understand where weaknesses are appearing, and leave with clearer next steps.",
            "The project also became a natural bridge between a useful free product and the broader analytics and operations work behind AnalytiConnect.",
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
          label: "Status",
          value: "Built + launched",
        },
      ]}
    />
  );
}
