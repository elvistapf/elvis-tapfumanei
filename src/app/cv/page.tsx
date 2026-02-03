import { Metadata } from "next";
import { DownloadCVButton } from "@/components/cv/DownloadCVButton";
import { Section, SectionHeader } from "@/components/ui/Section";
import { FileText, Download, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "CV - Elvis Tapfumanei",
  description: "Download the CV of Elvis Tapfumanei - Technical Project Delivery Manager specializing in AI-powered fintech solutions.",
};

export default function CVPage() {
  return (
    <main className="min-h-screen pt-10 pb-20">
      <Section background="white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="relative w-24 h-24 mx-auto mb-6">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-terracotta/30 to-sage/30 blur-xl animate-pulse" />
              {/* Image container */}
              <div className="relative w-full h-full rounded-full border-4 border-white shadow-2xl overflow-hidden">
                <img 
                  src="/elvis-pro-pic.jpeg" 
                  alt="Elvis Tapfumanei"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-charcoal mb-4">
              Curriculum Vitae
            </h1>
            <p className="text-xl text-warm-gray-600 max-w-2xl mx-auto">
              Technical Project Delivery Manager with full-stack development capabilities
            </p>
          </div>

          <div className="bg-warm-gray-50 rounded-2xl p-8 md:p-12 mb-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-terracotta mb-2">7+</div>
                <div className="text-sm text-warm-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-sage mb-2">5+</div>
                <div className="text-sm text-warm-gray-600">Major Products Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-charcoal mb-2">30+</div>
                <div className="text-sm text-warm-gray-600">Clients Consulted</div>
              </div>
            </div>

            <div className="space-y-4 text-left mb-8">
              <h3 className="text-lg font-semibold text-charcoal mb-4">Key Highlights:</h3>
              <ul className="space-y-3 text-warm-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-terracotta mt-1">•</span>
                  <span>AI-powered fintech solutions with proven 20-75% efficiency gains</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta mt-1">•</span>
                  <span>Full-stack development expertise (React, Next.js, Node.js, TypeScript)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta mt-1">•</span>
                  <span>Cross-functional team leadership across 3 continents</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-terracotta mt-1">•</span>
                  <span>Certified ScrumMaster with extensive Agile delivery experience</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <DownloadCVButton />
              <a
                href="/work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-charcoal text-charcoal font-medium rounded-lg hover:bg-charcoal hover:text-white transition-colors"
              >
                <Briefcase size={20} />
                View Portfolio
              </a>
            </div>
          </div>

          <div className="text-sm text-warm-gray-500">
            <p className="mb-2">
              The CV is automatically generated with the latest information and includes:
            </p>
            <ul className="space-y-1">
              <li>• Complete professional experience with quantified achievements</li>
              <li>• Technical proficiency and certifications</li>
              <li>• Leadership competencies and project highlights</li>
              <li>• ATS-friendly formatting for easy processing</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section background="light">
        <SectionHeader
          eyebrow="What's Included"
          title="CV Contents"
          description="A comprehensive overview of my professional journey and capabilities"
        />
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-charcoal mb-3">Professional Experience</h3>
            <ul className="space-y-2 text-sm text-warm-gray-600">
              <li>• Lula - Strategic Technical Delivery Lead</li>
              <li>• Teya - Delivery Manager</li>
              <li>• Yoyo - Delivery Manager</li>
              <li>• Network of Lawyers - PM/BA</li>
              <li>• ChatFind - Agile Scrum Master</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-charcoal mb-3">Technical Skills</h3>
            <ul className="space-y-2 text-sm text-warm-gray-600">
              <li>• AI/ML: Google Gemini, OpenAI, AssemblyAI</li>
              <li>• Development: React, Next.js, Node.js, TypeScript</li>
              <li>• Cloud: Azure, Google Cloud, Cloudflare</li>
              <li>• Data: SQL, Tableau, Mixpanel, Snowflake</li>
              <li>• Methodologies: Agile, Scrum, Kanban, DevOps</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-charcoal mb-3">Ventures & Projects</h3>
            <ul className="space-y-2 text-sm text-warm-gray-600">
              <li>• Orbitrain - AI Decision Support Platform</li>
              <li>• StudyChops - EdTech Operating System</li>
              <li>• qScore - QA Assessment Platform</li>
              <li>• Lily - Business Value Calculator</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-charcoal mb-3">Certifications</h3>
            <ul className="space-y-2 text-sm text-warm-gray-600">
              <li>• PMP (In Progress)</li>
              <li>• CMI Level 6 Diploma</li>
              <li>• Certified ScrumMaster (CSM)</li>
              <li>• BCS Business Analysis</li>
              <li>• Product School Certifications</li>
            </ul>
          </div>
        </div>
      </Section>
    </main>
  );
}
