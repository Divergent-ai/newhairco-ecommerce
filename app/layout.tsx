import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.newhairco.com"),
  title: {
    default: "The New Hair Co. | Premium Hair Pieces for Men",
    template: "%s | The New Hair Co."
  },
  description: "Premium men’s hair pieces, thin skin systems, lace systems, hybrid bases, and crown patches. Product-first ecommerce for discreet hair confidence.",
  openGraph: {
    title: "The New Hair Co. | Premium Hair Pieces for Men",
    description: "Shop premium men’s hair pieces without fitting packages or salon upsells.",
    url: "/",
    siteName: "The New Hair Co.",
    locale: "en_GB",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
