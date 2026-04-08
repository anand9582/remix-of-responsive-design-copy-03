import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import dashboardMain from "@/assets/dashboard-main.png";
import alertCard from "@/assets/alert-card.png";
import statsCard from "@/assets/stats-card.png";
import gridCard from "@/assets/grid-card.png";
import faceMatchCard from "@/assets/face-match-card.png";
import heroBgStripes from "@/assets/hero-bg-stripes.png";
import { useEffect, useState, useCallback } from "react";

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

const HeroSection = () => {
  const [stage, setStage] = useState(0);
  const [cycle, setCycle] = useState(0);

  const runAnimation = useCallback(() => {
    setStage(0);
    const timers = [
      setTimeout(() => setStage(1), 200),
      setTimeout(() => setStage(2), 900),
      setTimeout(() => setStage(3), 1400),
      setTimeout(() => setStage(4), 1800),
      // Hold for 3s then fade out
      setTimeout(() => setStage(5), 5000),
      // Reset and replay
      setTimeout(() => {
        setCycle((c) => c + 1);
      }, 6200),
    ];
    return timers;
  }, []);

  useEffect(() => {
    const timers = runAnimation();
    return () => timers.forEach(clearTimeout);
  }, [cycle, runAnimation]);

  const isVisible = stage >= 2 && stage < 5;
  const showDashboard = stage >= 4 && stage < 5;
  const showButton = stage >= 3 && stage < 5;
  const showStripes = stage >= 1;

  return (
    <section
      className="relative overflow-hidden pb-20"
      style={{
        background:
          "radial-gradient(ellipse at center top, hsl(222 60% 18%) 0%, hsl(222 47% 8%) 70%)",
      }}
    >
      {/* Background image sweep */}
      <motion.div
        key={`stripes-${cycle}`}
        className="absolute inset-0 origin-left will-change-transform"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: showStripes ? 1 : 0,
          opacity: showStripes ? 1 : 0,
        }}
        transition={{
          duration: 2.2,
          ease: [0.16, 1, 0.3, 1],
          opacity: { duration: 1.2, ease: "easeOut" },
        }}
        style={{
          backgroundImage: `url(${heroBgStripes})`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 sm:pt-44 text-center">
        {/* Heading */}
        <motion.h1
          key={`h1-${cycle}`}
          className="text-hero-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 40,
          }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
        >
          AI-Powered VMS That
          <br />
          Integrates Security Systems.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          key={`sub-${cycle}`}
          className="text-hero-muted mt-5 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 25 }}
          animate={{
            opacity: isVisible ? 1 : 0,
            y: isVisible ? 0 : 25,
          }}
          transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: isVisible ? 0.15 : 0 }}
        >
          Video surveillance with seamless access control, IoT & analytics that
          predicts threats, responds instantly.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          key={`cta-${cycle}`}
          className="mt-8"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{
            opacity: showButton ? 1 : 0,
            y: showButton ? 0 : 20,
            scale: showButton ? 1 : 0.95,
          }}
          transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
        >
          <Button className="group bg-background text-foreground hover:bg-accent hover:text-accent-foreground rounded-full px-6 py-3 text-sm font-semibold gap-2 h-auto transition-all duration-300">
            Book a Demo
            <span className="w-6 h-6 rounded-full bg-accent group-hover:bg-accent-foreground/20 flex items-center justify-center transition-all duration-300">
              <ArrowUpRight className="w-3.5 h-3.5 text-accent-foreground transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </Button>
        </motion.div>

        {/* Dashboard showcase */}
        <motion.div
          key={`dash-${cycle}`}
          className="relative mt-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{
            opacity: showDashboard ? 1 : 0,
            y: showDashboard ? 0 : 80,
            scale: showDashboard ? 1 : 0.95,
          }}
          transition={{ duration: 1.2, ease: EASE_OUT_EXPO }}
        >
          {/* Left floating cards */}
          <motion.div
            className="hidden lg:block absolute -left-32 top-8 z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: showDashboard ? 1 : 0,
              x: showDashboard ? 0 : -50,
            }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: showDashboard ? 0.3 : 0 }}
          >
            <img
              src={alertCard}
              alt="AI Alert - Unattended Baggage Detected"
              className="w-52 rounded-2xl shadow-2xl animate-float"
              loading="lazy"
              width={208}
              height={260}
            />
          </motion.div>
          <motion.div
            className="hidden lg:block absolute -left-24 bottom-0 z-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{
              opacity: showDashboard ? 1 : 0,
              x: showDashboard ? 0 : -50,
            }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: showDashboard ? 0.5 : 0 }}
          >
            <img
              src={statsCard}
              alt="Camera Status Statistics"
              className="w-48 rounded-2xl shadow-2xl animate-float-delayed"
              loading="lazy"
              width={192}
              height={120}
            />
          </motion.div>

          {/* Main dashboard */}
          <div className="rounded-xl overflow-hidden shadow-2xl border border-nav-border">
            <img
              src={dashboardMain}
              alt="CamPulse AI-Powered Video Management Dashboard"
              className="w-full"
              width={1200}
              height={800}
            />
          </div>

          {/* Right floating cards */}
          <motion.div
            className="hidden lg:block absolute -right-28 top-4 z-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: showDashboard ? 1 : 0,
              x: showDashboard ? 0 : 50,
            }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: showDashboard ? 0.3 : 0 }}
          >
            <img
              src={gridCard}
              alt="Custom Grid Builder"
              className="w-48 rounded-2xl shadow-2xl animate-float-slow"
              loading="lazy"
              width={192}
              height={240}
            />
          </motion.div>
          <motion.div
            className="hidden lg:block absolute -right-24 bottom-4 z-20"
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: showDashboard ? 1 : 0,
              x: showDashboard ? 0 : 50,
            }}
            transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: showDashboard ? 0.5 : 0 }}
          >
            <img
              src={faceMatchCard}
              alt="Face Match Alert"
              className="w-52 rounded-2xl shadow-2xl animate-float-delayed"
              loading="lazy"
              width={208}
              height={130}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
