import { Diamond } from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import bgImage from "@/assets/campulse-bg.png";
import dashboardImage from "@/assets/dashboard-home.jpg";
const badgeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

const lines = [
  {
    text: "CamPulse delivers flawless VMS as just the starting point.",
    className: "",
  },
  {
    text: "Seamlessly integrates AI insights access points, and IoT",
    className: "text-blue-700",
  },
  {
    text: "to transform surveillance into a complete, predictive security network.",
    className: "",
  },
];

const wordsData: {
  word: string;
  className: string;
  lineIndex: number;
}[] = [];

lines.forEach((line, lineIndex) => {
  line.text.split(" ").forEach((word) => {
    wordsData.push({
      word,
      className: line.className,
      lineIndex,
    });
  });
});

const totalWords = wordsData.length;

const Word = ({
  children,
  progress,
  range,
}: {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range: number[];
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [20, 0]);
  const filter = useTransform(progress, range, ["blur(10px)", "blur(0px)"]);
  const scale = useTransform(progress, range, [0.92, 1]);

  return (
    <motion.span
      className="inline-block"
      style={{
        opacity,
        y,
        filter,
        scale,
        marginRight: "0.35em",
        marginBottom: "0.15em",
      }}
    >
      {children}
    </motion.span>
  );
};

const WhatIsCamPulse = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Text scroll progress
  const { scrollYProgress: textScrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 90%", "end 40%"],
  });

  const smoothTextProgress = useSpring(textScrollYProgress, {
    stiffness: 40,
    damping: 20,
    mass: 1,
  });

  // Image scroll progress
  const { scrollYProgress: imageScrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start 95%", "center center"],
  });

  const smoothImageProgress = useSpring(imageScrollYProgress, {
    stiffness: 40,
    damping: 20,
    mass: 1,
  });

  // Scale from 0.76 to 1 based on image scroll
  const imageScale = useTransform(smoothImageProgress, [0, 1], [0.76, 1]);
  const imageOpacity = useTransform(smoothImageProgress, [0, 0.3], [0, 1]);

  return (
    <section className="relative  overflow-hidden">
      <div className="relative pt-20 sm:pt-16 pb-12 sm:pb-16">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />

        {/* Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Content */}
        <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.8 }}
            className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-5 h-[44px] mb-8 justify-center"
          >
            <Diamond className="w-3.5 h-3.5 text-blue-600" fill="currentColor" />
            <span className="text-sm font-roboto font-semibold tracking-widest uppercase text-blue-600">
              What is CamPulse
            </span>
          </motion.div>

          {/* Heading */}
          <h2
            ref={textRef}
            className="font-martina font-semibold text-[24px] md:text-[30px] leading-[150%] tracking-[0.01em] mb-2"
          >
            {lines.map((line, lineIndex) => {
              const lineWords = wordsData.filter(
                (w) => w.lineIndex === lineIndex
              );
              const startIndex = wordsData.findIndex(
                (w) => w.lineIndex === lineIndex
              );

              return (
                <span
                  key={lineIndex}
                  className={`block leading-[1.8] ${line.className}`}
                >
                  {lineWords.map((wordData, i) => {
                    const globalIdx = startIndex + i;
                    const step = 1 / totalWords;

                    // SMOOTH TIMING
                    const start = globalIdx * step * 0.5;
                    const end = Math.min(start + step * 5, 1);

                    return (
                      <Word
                        key={`${wordData.word}-${globalIdx}`}
                        progress={smoothTextProgress}
                        range={[start, end]}
                      >
                        {wordData.word}
                      </Word>
                    );
                  })}
                </span>
              );
            })}
          </h2>


        </div>
      </div>
      {/* Scaled Image on Scroll */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-20 sm:pb-16">
        <motion.div
          ref={imageRef}
          className="w-full relative rounded-2xl overflow-hidden bg-white shadow-2xl ring-1 ring-black/5"
          style={
            isMobile
              ? undefined
              : {
                  scale: imageScale,
                  opacity: imageOpacity,
                  willChange: "transform, opacity",
                }
          }
        >
          <img
            src={dashboardImage}
            alt="Hero Dashboard"
            className="w-full h-auto object-cover object-center"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsCamPulse;