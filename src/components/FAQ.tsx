import { ArrowUpRight, Diamond } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is CamPulse?", a: "CamPulse is an AI-powered unified security and smart infrastructure platform that integrates video surveillance, access control systems, and IoT devices into a single centralized system for monitoring, analysis, and automated response." },
  { q: "How is CamPulse different from a traditional VMS?", a: "Traditional video management systems focus primarily on recording and playback. CamPulse goes beyond video by combining AI-based detection, smart search, access control integration, automated workflows, predictive alerts, and centralized multi-site management within one platform." },
  { q: "Can CamPulse integrate with existing cameras and devices?", a: "Yes. CamPulse is designed to work with existing surveillance cameras, access control systems, and compatible IoT devices. It enables organizations to upgrade intelligence without replacing their entire infrastructure." },
  { q: "Is CamPulse suitable for large, multi-location deployments?", a: "Yes. CamPulse is built for enterprise and government-scale environments. It supports centralized command across multiple sites, distributed architectures, and scalable deployments from single facilities to nationwide networks." },
  { q: "How does CamPulse handle network instability or bandwidth fluctuations?", a: "CamPulse includes adaptive streaming and resilient system architecture to maintain uninterrupted monitoring even during network fluctuations. Built-in redundancy and failover mechanisms reduce downtime and prevent monitoring blind spots." },
  { q: "Does CamPulse support real-time alerts and automated actions?", a: "Yes. The platform detects predefined events and anomalies in real time and can trigger alerts, notifications, or automated workflows to ensure faster response and reduced operational delays." },
  { q: "Is the platform compliant with enterprise and government security standards?", a: "CamPulse is developed by Transline Technologies Limited, which has extensive experience delivering high-security, compliance-driven deployments across government and enterprise sectors. The platform is engineered to support audit logs, secure data handling, and structured access control." },
  { q: "Can CamPulse support industry-specific requirements?", a: "Yes. CamPulse is designed to adapt to sector-specific operational needs across railways, manufacturing, banking, oil and gas, logistics, retail, education, and healthcare environments through configurable analytics and workflow automation." },
  { q: "What kind of deployment models are available?", a: "CamPulse supports centralized, distributed, and hybrid deployment architectures depending on operational scale, network structure, and security requirements." },
  { q: "What post-deployment support does Transline provide?", a: "Transline offers end-to-end implementation, system integration, training, maintenance, upgrades, and long-term support through its pan-India service network." },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#FAFAFA]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

          {/* Left side */}
          <div className="lg:sticky lg:top-32">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 font-roboto font-regular rounded-full bg-[#EEF2FF] text-[#2563EB] text-[11px] font-bold tracking-[0.08em] uppercase mb-8">
              <Diamond className="w-3.5 h-3.5 text-blue" fill="currentColor" />
              FAQ
            </span>

            {/* Heading */}
            <h2 className="font-aleo font-semibold text-[32px] sm:text-[40px] text-[#111827] leading-[1.2] mb-5 tracking-tight">
              <span className="text-[#2563EB]">Your Questions</span> Answered
            </h2>

            {/* Paragraph */}
            <p className="text-black text-[15px] font-roboto font-normal leading-[1.7] mb-10 max-w-[340px]">
              We're here to help you and solve objections. Find answers to the most common questions below.
            </p>

            {/* Button */}
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:bg-[#1E40AF] text-white rounded-full px-8 py-6 text-[15px] font-semibold flex items-center justify-center gap-[6px] shadow-[0_8px_20px_rgba(29,78,216,0.3)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(29,78,216,0.4)] hover:-translate-y-0.5">
              Book a Demo
              <ArrowUpRight className="w-4 h-4 ml-[2px]" strokeWidth={2.5} />
            </Button>
          </div>

          {/* Right side - Accordion */}
          <div className="w-full pt-2 lg:pt-0">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border border-[#E5E7EB] bg-white rounded-[8px] px-6 mb-3 hover:border-[#D1D5DB] data-[state=open]:border-[#93C5FD] data-[state=open]:shadow-sm transition-all duration-200 overflow-hidden"
                >
                  <AccordionTrigger className="text-[14px] sm:text-[15px] font-roboto font-medium text-[#334155] hover:text-[#0F172A] hover:no-underline py-5 outline-none [&[data-state=open]]:text-[#1D4ED8]">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#64748b] font-roboto text-[14px] leading-[1.7] pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQ;
