import type { Metadata } from "next";
import { FinderWizard } from "@/components/FinderWizard";

export const metadata: Metadata = {
  title: "Hair Match Finder",
  description: "Use the New Hair Co Smart Finder to match coverage, lifestyle, colour family, density, and experience level to the right hair piece."
};

export default function QuizPage() {
  return (
    <section className="page-section container">
      <FinderWizard mode="finder" />
    </section>
  );
}
