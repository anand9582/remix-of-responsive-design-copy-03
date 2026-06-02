import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import statsCard from "@/assets/stats-card.png";
import alertCard from "@/assets/cta-bg.png";

const CTABanner = () => {
  return (
    <section className="bg-background py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">

        <div
          className="
          relative rounded-lg lg:rounded-[28px] overflow-hidden 
           bg-[linear-gradient(300.97deg,_#121C31_-1.06%,_#1C3468_99.48%)]
          px-6 sm:px-12 py-12 lg:py-16 sm:py-20 
          text-center 
          shadow-[0_20px_60px_rgba(0,0,0,0.25)]
        "
        >
          {/* Glow effect */}
          <div className="absolute inset-0 opacity-30 blur-3xl bg-blue-500/20 pointer-events-none" />

          {/* LEFT FLOATING CARD */}
          <div className="absolute -left-4 top-[35%] sm:top-[200px] -translate-y-1/2 -rotate-[7deg] z-10 w-[75px] sm:w-[130px] lg:w-auto">
            <img
              src={statsCard}
              alt="Statistics Card"
              className="w-full object-cover  animate-float"
              loading="lazy"
            />
          </div>

          {/* RIGHT FLOATING CARD */}
          <div className="absolute -right-6 top-[65%] sm:top-1/2 -translate-y-1/2 rotate-[8deg] z-10 w-[75px] sm:w-[130px] lg:w-auto">
            <img
              src={alertCard}
              alt="Alert Card"
              className="w-full object-cover animate-float-delayed"
              loading="lazy"
            />
          </div>

          {/* CONTENT */}
          <div className="relative z-20 max-w-3xl mx-auto flex flex-col  items-center justify-center">

            {/* HEADING */}
            <h2
              className="
              text-white font-aleo font-medium 
              text-[25px] sm:text-4xl md:text-[47px] 
              leading-[1.2] tracking-tight mb-4
            "
            >
              Built in India.<br className="sm:hidden" /> Made for the World.
            </h2>

            {/* SUBTEXT */}
            <p className="text-[#D4D4D4] text-[15px] sm:text-[16px] mb-8 font-roboto max-w-[280px] sm:max-w-none mx-auto">
              Deploy intelligent surveillance built for scale, speed and resilience.
            </p>

            {/* BUTTON */}
            <Button
              className="
              bg-white hover:bg-slate-100 
              text-[#2563EB] 
              rounded-full 
              px-5 py-5
              text-[15px] font-semibold 
              flex items-center gap-2 
              shadow-lg hover:shadow-xl 
              transition-all duration-300
            "
            >
              Book a Demo
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </Button>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CTABanner;