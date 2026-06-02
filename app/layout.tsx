import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.newhairco.com"),
  title: {
    default: "The New Hair Co. | Premium Men's Hair Pieces",
    template: "%s | The New Hair Co."
  },
  description: "Premium men's hair pieces bought online and fitted your way. Thin skin, lace, hybrid, and crown coverage with UK delivery and no fitting-package upsells.",
  openGraph: {
    title: "The New Hair Co. | Premium Men's Hair Pieces",
    description: "Shop premium men's hair pieces without fitting packages or salon upsells.",
    url: "/",
    siteName: "The New Hair Co.",
    locale: "en_GB",
    type: "website"
  },
  alternates: { canonical: "/" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <Header />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
