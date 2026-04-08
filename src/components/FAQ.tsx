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
    <section id="faq" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start">
          {/* Left side */}
          <div className="lg:sticky lg:top-28">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 text-accent text-xs font-semibold tracking-wider uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              FAQ
            </span>
            <h2 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-foreground leading-tight mb-4">
              <span className="text-accent">Your Questions</span> Answered
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              We're here to help you and solve objections. Find answers to the most common questions below.
            </p>
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6 text-sm font-semibold">
              Book a Demo
            </Button>
          </div>

          {/* Right side - Accordion */}
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border border-border rounded-lg px-5 data-[state=open]:border-accent/30 transition-colors"
              >
                <AccordionTrigger className="text-sm font-medium text-foreground hover:no-underline py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
