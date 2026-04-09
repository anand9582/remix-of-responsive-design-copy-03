import { Diamond } from "lucide-react";
import { motion } from "framer-motion";

const badgeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.16,
      delayChildren: 0.2,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, filter: "blur(6px)", y: 12, scale: 0.96 },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as const
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
        <motion.div
          variants={badgeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.8 }}
          className="inline-flex items-center gap-2 bg-background rounded-full px-4 py-1.5 mb-8 border border-border justify-center"
        >
          <Diamond className="w-3.5 h-3.5 text-primary" fill="currentColor" />
          <span className="text-xs font-semibold tracking-widest uppercase text-primary">
            What is CamPulse
          </span>
        </motion.div>

        {/* Main text */}
        <motion.h2
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="text-xl sm:text-2xl md:text-3xl lg:text-[1.8rem] 
       font-display font-bold text-foreground text-center"
        >
          <span className="block  leading-[1.8]">
            {renderWords("CamPulse delivers flawless VMS as just the starting point.")}
          </span>

          <span className="block leading-[1.8] text-blue-700">
            {renderWords("Seamlessly integrates AI insights access points, and IoT")}
          </span>

          <span className="block leading-[1.8]">
            {renderWords("to transform surveillance into a complete, predictive security network.")}
          </span>
        </motion.h2>

      </div>
    </section>
  );
};

export default WhatIsCamPulse;
