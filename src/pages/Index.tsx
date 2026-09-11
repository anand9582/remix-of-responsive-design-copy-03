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
import SEO from "@/components/SEO";

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CamPulse",
    "url": "https://campulse.app",
    "logo": "https://campulse.app/src/assets/logo.png",
    "description": "AI-Powered Video Management System with seamless access control, IoT & analytics that predicts threats.",
    "sameAs": [
      "https://twitter.com/CamPulse",
      "https://linkedin.com/company/campulse"
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="AI-Powered VMS & Video Security Systems | CamPulse" 
        description="CamPulse is a state-of-the-art AI-powered Video Management System (VMS) providing smart surveillance, proactive threat detection, and seamless access control." 
        keywords="AI VMS, video management system, smart surveillance, camera security, threat detection, access control"
        path="/"
        schema={organizationSchema}
      />

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
        <CTABanner />
      </ScrollReveal>


    </div>
  );
};

export default Index;
