import { Diamond } from "lucide-react";
import { motion } from "framer-motion";
import bgImage from "@/assets/campulse-bg.png";

const badgeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
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
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const renderWords = (text, className = "") => {
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
    <section className="relative bg-secondary py-20 sm:py-16 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      />

      {/* LEFT FADE */}
      <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 
        bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* RIGHT FADE */}
      <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 
        bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* TOP FADE */}
      <div className="absolute top-0 left-0 right-0 h-20 sm:h-32 
        bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* (Optional but recommended) BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 
        bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Badge */}
        <motion.div
          variants={badgeVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.8 }}
          className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-3 mb-8 justify-center"
        >
          <Diamond className="w-3.5 h-3.5 text-blue-700" fill="currentColor" />
          <span className="text-xs font-semibold tracking-widest uppercase text-blue-700">
            What is CamPulse
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={textContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="font-martina font-bold text-[30px] leading-[150%] tracking-[0.01em] mb-2"
        >
          <span className="block leading-[1.8]">
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