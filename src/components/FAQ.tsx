import { ArrowUpRight, Diamond } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What is CamPulse?", a: "CamPulse is an AI-powered Video Management System (VMS) that integrates security cameras, access control, IoT sensors, and analytics into one unified platform for enterprise-grade surveillance and monitoring." },
  { q: "How is CamPulse different from a traditional VMS?", a: "Unlike traditional VMS, CamPulse uses AI-driven analytics to predict threats, automate responses, and provide actionable insights — going beyond passive monitoring to active security management." },
  { q: "Can CamPulse integrate with existing cameras and devices?", a: "Yes, CamPulse is hardware-agnostic and supports ONVIF-compliant cameras, access control systems, IoT sensors, and third-party devices for seamless integration." },
  { q: "Is CamPulse suitable for large, multi-location deployments?", a: "Absolutely. CamPulse is designed for enterprise-scale deployments across multiple locations with centralized management and monitoring capabilities." },
  { q: "How does CamPulse handle network instability or bandwidth fluctuations?", a: "CamPulse features adaptive streaming, edge processing, and redundant failover systems to ensure uninterrupted surveillance even during network issues." },
  { q: "Does CamPulse support real-time alerts and automated actions?", a: "Yes, CamPulse provides real-time AI-powered alerts for events like intrusion detection, unattended baggage, face matching, and can trigger automated responses." },
  { q: "Is the platform compliant with enterprise and government security standards?", a: "CamPulse meets GDPR, HIPAA, and regional compliance requirements with end-to-end encryption, SOC 2 framework, and full audit trails." },
  { q: "Can CamPulse support industry-specific requirements?", a: "Yes, CamPulse offers tailored solutions for railways, manufacturing, smart cities, retail, healthcare, and other industries with specialized analytics modules." },
  { q: "What kind of deployment models are available?", a: "CamPulse supports on-premise, cloud, and hybrid deployment models to fit your organization's infrastructure and security requirements." },
  { q: "What post-deployment support does Transline provide?", a: "Transline provides 24/7 technical support, regular software updates, proactive system health monitoring, and dedicated account management for all deployments." },
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
