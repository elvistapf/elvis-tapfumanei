import { HeroSection } from "@/components/sections/HeroSection";
import { WhatIDoSection } from "@/components/sections/WhatIDoSection";
import { FeaturedVenturesSection } from "@/components/sections/FeaturedVenturesSection";
import { RecentWritingSection } from "@/components/sections/RecentWritingSection";
import { CurrentlySection } from "@/components/sections/CurrentlySection";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatIDoSection />
      <FeaturedVenturesSection />
      <RecentWritingSection />
      <CurrentlySection />
      <CTASection />
    </>
  );
}
