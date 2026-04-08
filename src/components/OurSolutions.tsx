import { Diamond, Clock, Search, ShieldCheck, Monitor, Lock, Cpu, Signal, RefreshCw, Zap, AlertTriangle, BarChart3 } from "lucide-react";
import solutionSearch from "@/assets/solution-search.jpg";
import solutionDevices from "@/assets/solution-devices.jpg";
import solutionThreat from "@/assets/solution-threat.jpg";
import solutionStreaming from "@/assets/solution-streaming.jpg";

const solutions = [
  {
    title: "Smart Search & Instant Retrieval",
    description:
      "AI-powered search allows operators to instantly find events based on people, objects, behaviors, time, or location — across thousands of video streams.",
    bullets: [
      { icon: Clock, text: "Reduces investigation time from hours to minutes." },
      { icon: Search, text: "Enables rapid evidence retrieval." },
      { icon: ShieldCheck, text: "Improves incident response accuracy." },
      { icon: Monitor, text: "Eliminates manual footage scanning." },
    ],
    image: solutionSearch,
    imageAlt: "AI-Powered Smart Search Interface",
    imagePosition: "right" as const,
  },
  {
    title: "Unified Device Management",
    description:
      "Manage cameras, access control devices, and IoT sensors across multiple vendors from one centralized platform.",
    bullets: [
      { icon: Lock, text: "No vendor lock-in." },
      { icon: Cpu, text: "Simplified system management." },
      { icon: BarChart3, text: "Reduced operational complexity." },
      { icon: Signal, text: "Lower integration costs." },
    ],
    image: solutionDevices,
    imageAlt: "Unified Device Manager Interface",
    imagePosition: "left" as const,
  },
  {
    title: "Real-Time Threat Detection & Automated Response",
    description:
      "AI detects unusual behavior, unauthorized access, safety violations, and anomalies in real time and triggers automated workflows instantly.",
    bullets: [
      { icon: Zap, text: "Response time reduced from minutes to seconds." },
      { icon: Lock, text: "Immediate lockdown or alert activation." },
      { icon: Cpu, text: "Reduced human latency." },
      { icon: ShieldCheck, text: "Proactive threat mitigation." },
    ],
    image: solutionThreat,
    imageAlt: "Real-Time Threat Detection Alert",
    imagePosition: "right" as const,
  },
  {
    title: "Adaptive Streaming & Bandwidth Intelligence",
    description:
      "CamPulse automatically adjusts video streaming quality based on network conditions, ensuring uninterrupted monitoring even during bandwidth fluctuations or connectivity issues.",
    bullets: [
      { icon: Signal, text: "No monitoring blind spots due to network instability." },
      { icon: RefreshCw, text: "Continuous security coverage." },
      { icon: Cpu, text: "Reliable performance across large distributed deployments." },
      { icon: AlertTriangle, text: "Reduced downtime risk." },
    ],
    image: solutionStreaming,
    imageAlt: "Adaptive Streaming Quality Comparison",
    imagePosition: "right" as const,
  },
];

const OurSolutions = () => {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
            <Diamond className="w-3.5 h-3.5 text-primary" fill="currentColor" />
            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
              Our Solutions
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground leading-snug">
            Proven for{" "}
            <span className="text-primary italic">Real-World Security</span>{" "}
            Challenges
          </h2>
        </div>

        {/* Sticky stacking cards */}
        <div className="relative">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="sticky mb-6 last:mb-0"
              style={{ top: `${80 + index * 20}px` }}
            >
              <div className="bg-background rounded-2xl border border-border shadow-lg overflow-hidden">
                <div
                  className={`flex flex-col ${
                    solution.imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
                  } gap-6 lg:gap-0`}
                >
                  {/* Text Content */}
                  <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                    <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    <div className="space-y-3">
                      {solution.bullets.map((bullet, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <bullet.icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                          <span className="text-foreground text-sm">{bullet.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-1 p-4 lg:p-6 flex items-center justify-center">
                    <img
                      src={solution.image}
                      alt={solution.imageAlt}
                      className="w-full rounded-xl object-cover max-h-[350px]"
                      loading="lazy"
                      width={800}
                      height={512}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSolutions;
