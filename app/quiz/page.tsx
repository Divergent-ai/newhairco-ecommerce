import type { Metadata } from "next";
import { QuizClient } from "@/components/QuizClient";

export const metadata: Metadata = {
  title: "Hair Piece Finder",
  description: "Answer three simple questions and get matched to the right men’s hair piece base."
};

export default function QuizPage() {
  return (
    <section className="page-section container">
      <QuizClient />
    </section>
  );
}
