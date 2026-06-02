import type { Metadata } from "next";
import { FinderWizard } from "@/components/FinderWizard";

export const metadata: Metadata = {
  title: "Build Your System",
  description: "Build your hair piece through a guided New Hair Co flow covering coverage, base, hairline exposure, lifestyle, colour family, density, and experience."
};

export default function BuildPage() {
  return (
    <section className="page-section container">
      <FinderWizard mode="build" />
    </section>
  );
}
