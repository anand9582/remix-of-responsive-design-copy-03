import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import statsCard from "@/assets/stats-card.png";
import alertCard from "@/assets/alert-card.png";

const CTABanner = () => {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-hero overflow-hidden px-8 py-14 sm:py-16 text-center">
          {/* Vertical stripe texture */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              background:
                "repeating-linear-gradient(90deg, transparent, transparent 3px, hsl(222 30% 15%) 3px, hsl(222 30% 15%) 4px)",
            }}
          />

          {/* Left floating card */}
          <div className="hidden lg:block absolute -left-6 top-1/2 -translate-y-1/2 -rotate-6 z-10">
            <img
              src={statsCard}
              alt="Statistics Card"
              className="w-40 rounded-xl shadow-2xl animate-float"
              loading="lazy"
            />
          </div>

          {/* Right floating card */}
          <div className="hidden lg:block absolute -right-6 top-1/2 -translate-y-1/2 rotate-6 z-10">
            <img
              src={alertCard}
              alt="Alert Card"
              className="w-40 rounded-xl shadow-2xl animate-float-delayed"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="relative z-20">
            <h2 className="text-hero-foreground font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-3">
              Built in India. Made for the World.
            </h2>
            <p className="text-hero-muted text-sm sm:text-base mb-8">
              Deploy intelligent surveillance built for scale, speed and resilience.
            </p>
            <Button className="group bg-background text-foreground hover:bg-accent hover:text-accent-foreground rounded-full px-6 py-3 text-sm font-semibold gap-2 h-auto transition-all duration-300">
              Book a Demo
              <span className="w-6 h-6 rounded-full bg-accent group-hover:bg-accent-foreground/20 flex items-center justify-center transition-all duration-300">
                <ArrowUpRight className="w-3.5 h-3.5 text-accent-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
