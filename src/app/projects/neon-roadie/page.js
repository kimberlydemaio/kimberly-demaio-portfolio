import CaseStudyPage from "@/components/CaseStudyPage";

export default function CustomTeeShirtGeneratorPage() {
  return (
    <CaseStudyPage
      number="01"
      category="Product + Creative Development"
      title="Custom Tee-Shirt Generator"
      summary="A playful product experience designed to turn user input into a personalized, vintage-inspired shirt concept—taking an idea from creative generation through mockup and, eventually, fulfillment."
      status="In development"
      role="Product concept, UX + full-stack development"
      stack={[
        "Next.js",
        "JavaScript",
        "AI generation",
        "Image workflows",
        "POD integration",
      ]}
      theme="cognac"
      board={{
        label: "Creative pipeline",
        primary: "INPUT → IDEA → ART → MOCKUP",
        flow: ["Upload", "Generate", "Refine", "Mockup"],
        note: "Creative enough to feel surprising. Structured enough to become a product.",
      }}
      sections={[
        {
          title: "The idea",
          body: [
            "I wanted to explore what happens when generative technology is treated as part of a product experience rather than as an open-ended prompt box.",
            "The concept gives someone a simple way to turn their own image or creative direction into a personalized shirt design without needing design software or technical knowledge.",
          ],
        },
        {
          title: "Designing the experience",
          body: [
            "The goal is to keep the experience playful without making the user do all of the creative work themselves. Instead of asking for a perfect prompt, the product guides the user through a smaller set of meaningful decisions.",
            "Those choices become structured inputs that can drive generation, refinement, and eventually a realistic product mockup.",
          ],
        },
        {
          title: "The product system",
          body: [
            "Behind the creative experience is a much more practical workflow involving image uploads, generated assets, state management, temporary file storage, moderation, mockups, and eventually print-on-demand fulfillment.",
          ],
          bullets: [
            "User image and preference inputs",
            "AI-assisted design generation",
            "Design refinement and preview",
            "Product mockup generation",
            "Content and image lifecycle management",
            "Future print-on-demand ordering workflow",
          ],
        },
        {
          title: "What makes it interesting",
          body: [
            "This project sits at the intersection of software development and creative product design. The challenge is not simply generating an image—it is turning generation into a predictable, usable experience that someone would actually want to complete.",
          ],
        },
      ]}
      highlights={[
        {
          label: "Experience",
          value: "Guided personalization",
        },
        {
          label: "Technical focus",
          value: "AI + image workflows",
        },
        {
          label: "Product direction",
          value: "Generation → commerce",
        },
      ]}
      nextProject={{
        title: "Jobnostic",
        href: "/projects/jobnostic",
      }}
    />
  );
}
