import type { Metadata } from "next";
import { Sora, Fira_Code } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ScrollProgress } from "@/components/ui";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elvis Tapfumanei | Strategist. Creator. Storyteller.",
  description: "I build operational systems, create digital products, and tell stories through words and ideas. Business Operations, Founder of Orbitrain & StudyChops, Writer.",
  keywords: ["Business Operations", "Fintech", "Founder", "Writer", "Orbitrain", "StudyChops", "Cape Town"],
  authors: [{ name: "Elvis Tapfumanei" }],
  icons: {
    icon: "/elvis-icon.png",
    shortcut: "/elvis-icon.png",
    apple: "/elvis-icon.png",
  },
  openGraph: {
    title: "Elvis Tapfumanei | Strategist. Creator. Storyteller.",
    description: "I build operational systems, create digital products, and tell stories through words and ideas.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvis Tapfumanei | Strategist. Creator. Storyteller.",
    description: "I build operational systems, create digital products, and tell stories through words and ideas.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} ${firaCode.variable} font-sans antialiased bg-background text-foreground`}
      >
        <SmoothScroll>
          <ScrollProgress />
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
