import type { Metadata } from "next";
import { Sora, Fira_Code } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { ScrollProgress } from "@/components/ui";
import { StructuredData } from "@/components/seo/StructuredData";

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
  title: {
    default: "Elvis Tapfumanei | Business Strategist, Founder, Writer",
    template: "%s | Elvis Tapfumanei"
  },
  description: "Business Strategist with 7+ years driving digital transformation in fintech. Full-stack developer specializing in AI-powered solutions, React/Next.js, and Node.js. Founder of Orbitrain & StudyChops. Delivering 20-75% efficiency gains through intelligent automation.",
  keywords: [
    "Technical Project Delivery Manager",
    "Writer",
    "Author",
    "Poet",
    "Manager",
    "Strategist",
    "Founder",
    "Developer",
    "Full-stack Developer",
    "Fintech",
    "AI Solutions",
    "React Developer",
    "Next.js",
    "Node.js",
    "Full-stack Development",
    "Digital Transformation",
    "Agile Project Management",
    "Orbitrain",
    "StudyChops",
    "Scrum Master",
    "Product Owner",
    "Music Production",
    "Lyricist",
    "Cape Town",
    "Remote",
    "AI Integration",
    "Google Gemini API",
    "OpenAI",
    "Technical Writing",
    "Creative Writing",
    "Poetry",
    "Business Operations",
    "Entrepreneur"
  ],
  authors: [{ name: "Elvis Tapfumanei" }],
  icons: {
    icon: "/elvis-icon.png",
    shortcut: "/elvis-icon.png",
    apple: "/elvis-icon.png",
  },
  openGraph: {
    title: "Elvis Tapfumanei | Business Strategist, Founder, Writer",
    description: "Business Strategist, Founder, Writer with 7+ years driving digital transformation in fintech. Full-stack strategist specializing in intelligent solutions, React/Next.js, and Node.js.",
    type: "website",
    locale: "en_GB",
    url: "https://elvistapfumanei.com",
    siteName: "Elvis Tapfumanei",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elvis Tapfumanei | Business Strategist, Founder, Writer",
    description: "Business Strategist, Founder, Writer with 7+ years driving digital transformation in fintech. Full-stack strategist specialising in intelligent solutions.",
    creator: "@elvistapf",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add this after verifying with Google
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
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
