export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Elvis Tapfumanei",
    "jobTitle": "Technical Project Delivery Manager",
    "description": "Technical Project Delivery Manager with 7+ years driving digital transformation in fintech. Full-stack developer specializing in AI-powered solutions.",
    "url": "https://elvistapfumanei.com",
    "sameAs": [
      "https://linkedin.com/in/elvistapfumanei",
      "https://github.com/elvistap",
      "https://twitter.com/elvistap"
    ],
    "knowsAbout": [
      "Technical Project Delivery",
      "Fintech",
      "AI Solutions",
      "React Development",
      "Next.js",
      "Node.js",
      "Digital Transformation",
      "Agile Project Management"
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Tapfumanei Digital Solutions",
      "description": "Digital consultancy delivering end-to-end web, mobile, and design solutions"
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Chartered Management Institute"
    },
    "hasCredential": [
      {
        "@type": "EducationalOccupationalCredential",
        "name": "CMI Level 6 Diploma in Professional Management and Leadership Practice",
        "credentialCategory": "Diploma"
      },
      {
        "@type": "EducationalOccupationalCredential",
        "name": "Certified ScrumMaster® (CSM®)",
        "credentialCategory": "Certification"
      }
    ],
    "founder": [
      {
        "@type": "Organization",
        "name": "Orbitrain",
        "description": "Decision Support Platform for Customer Operations",
        "url": "https://orbitrain.com"
      },
      {
        "@type": "Organization",
        "name": "StudyChops",
        "description": "Business Operating System for Education",
        "url": "https://studychops.com"
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2),
      }}
    />
  );
}
