import { Diamond } from "lucide-react";

const WhatIsCamPulse = () => {
  return (
    <section className="relative bg-secondary py-20 sm:py-28 overflow-hidden">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-background rounded-full px-4 py-1.5 mb-8 border border-border">
          <Diamond className="w-3.5 h-3.5 text-primary" fill="currentColor" />
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            What is CamPulse
          </span>
        </div>

        {/* Main text */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold leading-snug text-foreground">
          CamPulse delivers flawless VMS as just the starting point.{" "}
          <span className="text-primary">
            Seamlessly integrates AI insights access points, and IoT
          </span>{" "}
          to transform surveillance into a complete, predictive security network.
        </h2>
      </div>
    </section>
  );
};

export default WhatIsCamPulse;
