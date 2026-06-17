import HeroSection from "@/components/HeroSection";
import TrustedBy from "@/components/TrustedBy";
import AboutUs from "@/components/AboutUs";
import ComplianceSecurity from "@/components/ComplianceSecurity";
import FAQ from "@/components/FAQ";

import WhatIsCamPulse from "@/components/WhatIsCamPulse";
import SeeEverything from "@/components/SeeEverything";
import TheChallenge from "@/components/TheChallenge";
import OurSolutions from "@/components/OurSolutions";
import EcosystemArchitecture from "@/components/EcosystemArchitecture";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import ScrollReveal from "@/components/ScrollReveal";
import CTABanner from "@/components/CTABanner";

const Index = () => {
  return (
    <div className="min-h-screen">

      {/* Add top padding to compensate for fixed navbar */}
      <div className="bg-hero">
        <HeroSection />
      </div>

      <ScrollReveal direction="up">
        <TrustedBy />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <WhatIsCamPulse />
      </ScrollReveal>

      <ScrollReveal direction="up" delay={100}>
        <SeeEverything />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <TheChallenge />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <OurSolutions />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <EcosystemArchitecture />
      </ScrollReveal>
      <IndustriesWeServe />

      <ScrollReveal direction="up">
        <AboutUs />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <ComplianceSecurity />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <FAQ />
      </ScrollReveal>

      <ScrollReveal direction="up">
        <CTABanner />
      </ScrollReveal>


    </div>
  );
};

export default Index;
