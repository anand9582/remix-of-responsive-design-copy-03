import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import dashboardMain from "@/assets/dashboard-main.mp4";
import alertCard from "@/assets/alert-card.png";
import statsCard from "@/assets/Bannerlefticon.png";
import gridCard from "@/assets/grid-card.png";
import faceMatchCard from "@/assets/face-match-card.png";
import heroBgStripes from "@/assets/hero-bg-stripes.png";
import { useEffect, useState, useCallback } from "react";

const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;
const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, filter: "blur(2px)", y: 12, scale: 0.96 },
  visible: {
        opacity: 1,
    filter: "blur(0px)",
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: EASE_OUT
    },
  },
};

const renderWords = (text: string, className: string = "") => {
  return text.split(" ").map((word, index) => (
    <motion.span
      key={`${word}-${index}`}
      variants={wordVariants}
      className={`inline-block ${className}`}
      style={{ marginRight: "0.25em", marginBottom: "0.1em" }}
    >
      {word}
    </motion.span>
  ));
};

const HeroSection = () => {
  const [stage, setStage] = useState(0);

  const runAnimation = useCallback(() => {
    setStage(0);
    const timers = [
      setTimeout(() => setStage(1), 50),
      setTimeout(() => setStage(2), 200),
      setTimeout(() => setStage(3), 500),
      setTimeout(() => setStage(4), 800),
    ];
    return timers;
  }, []);

  useEffect(() => {
    const timers = runAnimation();
    return () => timers.forEach(clearTimeout);
  }, [runAnimation]);

  const showStripes = stage >= 1;
  const showHeading = stage >= 2;
  const showCTA = stage >= 3;
  const showDashboard = stage >= 4;

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center top, hsl(222 60% 18%) 0%, hsl(222 47% 8%) 70%)",
      }}
    >
      {/* Background */}
      <motion.div
        className="absolute inset-0 origin-left"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{
          scaleX: showStripes ? 1 : 0,
          opacity: showStripes ? 1 : 0,
        }}
        transition={{
          scaleX: { duration: 1.5, ease: EASE_SMOOTH },
          opacity: { duration: 1.0 },
        }}
        style={{
          backgroundImage: `url(${heroBgStripes})`,
          backgroundSize: "cover",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-36 text-center">
        {/* Heading */}
        <motion.h1
          className="text-white font-calistoga font-normal not-italic text-[46px] leading-[1.24] tracking-[0.035em] mb-[14px]"
          variants={textContainerVariants}
          initial="hidden"
          animate={showHeading ? "visible" : "hidden"}
        >
          {renderWords("AI-Powered VMS That")} <br /> {renderWords("Integrates Security Systems")}
        </motion.h1>
        <motion.p
          className="font-roboto font-regular text-white text-sm md:text-lg font-light leading-relaxed max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={showHeading ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Video surveillance with seamless access control, IoT & analytics that predicts threats, responds instantly.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={showCTA ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 22 }}
            className="inline-block"
          >
            <button className="group relative flex items-center rounded-full h-11 text-sm font-semibold shadow-lg overflow-hidden w-[164px] bg-white hover:bg-[linear-gradient(96.6deg,#2563EB_5.01%,#153885_92.14%)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
              {/* Gradient Overlay */}
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[linear-gradient(96.6deg,#2563EB_5.01%,#153885_92.14%)]" />

              {/* Circle */}
              <span className="absolute z-10 left-1.5 group-hover:left-[calc(100%-2.25rem-6px)] w-8 h-8 rounded-full bg-blue-700 group-hover:bg-white flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <ArrowUpRight className="w-4 h-4 text-white group-hover:text-blue-700 transition-all duration-500 group-hover:rotate-45" />
              </span>

              {/* Text */}
              <span className="absolute z-10 left-12 group-hover:left-5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap text-blue-700 group-hover:text-white">
                Book a Demo
              </span>
            </button>
          </motion.div>
        </motion.div>
        {/* DASHBOARD SECTION */}
        <motion.div
          className="relative mt-5 max-w-5xl mx-auto flex justify-center items-center"
          initial={{ opacity: 0, y: 100 }}
          animate={showDashboard ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.0 }}
        >
          {/* LEFT CARDS */}
          <motion.img
            src={alertCard}
            className="hidden lg:block absolute -left-[4rem] top-[6%] w-45 rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 80 }}
            animate={showDashboard ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: EASE_OUT, delay: 0.1 }}
          />

          <motion.img
            src={statsCard}
            className="hidden lg:block absolute -left-[8rem] bottom-[4%] w-90 rounded-xl shadow-xl"
            initial={{ opacity: 0, y: 80 }}
            animate={showDashboard ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: EASE_OUT, delay: 0.2 }}
          />

          {/* MAIN DASHBOARD (CENTERED) */}
          <div className="flex justify-center items-center w-full">
            <video
              src={dashboardMain}
              autoPlay
              loop
              muted
              playsInline
              className="mx-auto w-full max-w-2xl object-contain position-relative  rounded-2xl top-[15px]"
            />
          </div>

          {/* RIGHT CARDS */}
          <motion.img
            src={gridCard}
            className="hidden lg:block absolute -right-[3rem] top-[0%] w-48 rounded-xl "
            initial={{ opacity: 0, y: 80 }}
            animate={showDashboard ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: EASE_OUT, delay: 0.15 }}
          />

          <motion.img
            src={faceMatchCard}
            className="hidden lg:block absolute  -right-[8rem]  bottom-[2%] w-90 rounded-xl"
            initial={{ opacity: 0, y: 80 }}
            animate={showDashboard ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: EASE_OUT, delay: 0.25 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;