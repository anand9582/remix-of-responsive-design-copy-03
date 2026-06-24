import { useRef } from "react";
import { motion, useScroll, useTransform, MotionStyle, useMotionTemplate, useInView } from "framer-motion";
import {
  Diamond,
  ShieldCheck,
  Monitor,
  Lock,
  Cpu,
  Signal,
  RefreshCw,
  Zap,
  AlertTriangle,
  ServerCrash,
  Shield,
  Wrench,
  HeartPulse,
  GraduationCap,
  CheckCircle,
  Users,
  Globe,
} from "lucide-react";
import { ClockFilledIcon, SearchFilledIcon, ImproveIcon, FootageIcon, LockIcon, ScanIcon, LowerIcon, SimplifiedIcon, ReducedIcon } from "./CustomIcons";

import solutionSearch from "@/assets/solution-search.png";
import solutionDevices from "@/assets/solution-devices.png";
import solutionThreat from "@/assets/solutionThreat.png";
import solutionStreaming from "@/assets/solutionStreaming.png";
import AdaptiveStreaming from "@/assets/Adaptive-Streaming.png";
import MultiLanguage from "@/assets/Multi-Language.mp4";

const solutions = [
  {
    title: "Smart Search & Instant Retrieval",
    description:
      "AI-powered search allows operators to instantly find events based on people, objects, behaviors, time, or location — across thousands of video streams.",
    bullets: [
      {
        icon: ClockFilledIcon,
        text: "Reduces investigation time from hours to minutes.",
        color: "text-blue-700",
      },
      {
        icon: SearchFilledIcon,
        text: "Enables rapid evidence retrieval.",
        color: "text-blue-700",
      },
      {
        icon: FootageIcon,
        text: "Improves incident response accuracy.",
        color: "text-blue-700",
      },
      {
        icon: ScanIcon,
        text: "Eliminates manual footage scanning.",
        color: "text-blue-700",
      },
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
      { icon: LockIcon, text: "No vendor lock-in.", color: "text-blue-700" },
      { icon: SimplifiedIcon, text: "Simplified system management.", color: "text-green-600" },
      { icon: ReducedIcon, text: "Reduced operational complexity.", color: "text-purple-600" },
      { icon: LowerIcon, text: "Lower integration costs.", color: "text-orange-600" },
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
      { icon: Zap, text: "Response time reduced from minutes to seconds.", color: "text-blue-700" },
      { icon: Lock, text: "Immediate lockdown or alert activation.", color: "text-blue-700" },
      { icon: Cpu, text: "Reduced human latency.", color: "text-blue-700" },
      { icon: ShieldCheck, text: "Proactive threat mitigation.", color: "text-blue-700" },
    ],
    image: solutionThreat,
    imageAlt: "Real-Time Threat Detection Alert",
    imagePosition: "right" as const,
  },
  {
    title: "Predictive Maintenance & System Health Monitoring",
    description:
      "AI continuously monitors system performance and forecasts equipment failures before they occur.",
    bullets: [
      { icon: ServerCrash, text: "Prevents unexpected hardware downtime.", color: "text-blue-700" },
      { icon: Shield, text: "Eliminates security gaps.", color: "text-blue-700" },
      { icon: Wrench, text: "Reduces maintenance costs.", color: "text-blue-700" },
      { icon: HeartPulse, text: "Increases system lifespan.", color: "text-blue-700" },
    ],
    image: solutionStreaming,
    imageAlt: "Adaptive Streaming Quality Comparison",
    imagePosition: "left" as const,
  },
  {
    title: "Adaptive Streaming & Bandwidth Intelligence",
    description:
      "CamPulse automatically adjusts video streaming quality based on network conditions, ensuring uninterrupted monitoring even during bandwidth fluctuations or connectivity issues.",
    bullets: [
      { icon: Signal, text: "No monitoring blind spots due to network instability.", color: "text-blue-700" },
      { icon: RefreshCw, text: "Continuous security coverage.", color: "text-blue-700" },
      { icon: Cpu, text: "Reliable performance across large distributed deployments.", color: "text-blue-700" },
      { icon: AlertTriangle, text: "Reduced downtime risk.", color: "text-blue-700" },
    ],
    image: AdaptiveStreaming,
    imageAlt: "Adaptive Streaming Quality Comparison",
    imagePosition: "right" as const,
  },
  {
    title: "Multi-Language Operational Interface",
    description:
      "Supports 12+ Indian languages with localized interface, documentation, and support.",
    bullets: [
      { icon: GraduationCap, text: "Reduced training time.", color: "text-blue-700" },
      { icon: CheckCircle, text: "Lower operational errors.", color: "text-blue-700" },
      { icon: Users, text: "Faster adoption across diverse teams.", color: "text-blue-700" },
      { icon: Globe, text: "Improved nationwide deployment capability.", color: "text-blue-700" },
    ],
    image: MultiLanguage,
    isVideo: true,
    imageAlt: "Adaptive Streaming Quality Comparison",
    imagePosition: "left" as const,
  },
];

const SolutionCard = ({ solution, index, totalLength }: { solution: any, index: number, totalLength: number }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const stickyTop = 190 + index * 20;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: [`start ${stickyTop}px`, `start ${stickyTop - 450}px`],
  });

  const isInView = useInView(targetRef, { once: true, margin: "600px" });

  const rotateX = useTransform(scrollYProgress, [0, 1], [0, -8]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.92]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const blurValue = useTransform(scrollYProgress, [0, 1], [0, 0]);
  const filter = useMotionTemplate`blur(${blurValue}px)`;

  const boxShadow = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)",
      "0px 0px 0px 0px rgba(0, 0, 0, 0)"
    ]
  );

  const motionStyle: MotionStyle = {
    top: `${stickyTop}px`,
    scale: index === totalLength - 1 ? 1 : scale,
    rotateX: index === totalLength - 1 ? 0 : rotateX,
    opacity: index === totalLength - 1 ? 1 : opacity,
    filter: index === totalLength - 1 ? "blur(0px)" : filter,
    transformOrigin: "top center",
  };

  return (
    <>
      <div ref={targetRef} className="h-0 w-full" aria-hidden="true" />
      <motion.div
        className="sticky mb-12 lg:mb-16 last:mb-0"
        style={motionStyle}
      >
        <motion.div
          style={{
            boxShadow:
              index === totalLength - 1
                ? "none"
                : boxShadow,
          }}
          className="bg-background rounded-2xl overflow-hidden min-h-[450px] lg:h-[450px]"
        >
          <div
            className={`flex flex-col ${solution.imagePosition === "left" ? "lg:flex-row-reverse" : "lg:flex-row"
              } h-full gap-6 lg:gap-0`}
          >
            {/* Text */}
            <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="text-xl sm:text-2xl font-roboto font-medium text-neutral-800 mb-4">
                {solution.title}
              </h3>

              <p className="text-neutral-600 text-sm sm:text-base font-roboto leading-relaxed mb-6">
                {solution.description}
              </p>

              <div className="space-y-5">
                {solution.bullets.map((bullet: any, i: number) => (
                  <div key={i} className="flex items-center gap-3">
                    <bullet.icon
                      className={`w-5 h-5 ${bullet.color} flex-shrink-0 transition-colors duration-300`}
                      strokeWidth={1.5}
                    />
                    <span className="font-roboto font-normal  text-gray-600 leading-6 tracking-normal">
                      {bullet.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 p-4 lg:p-6 flex items-stretch justify-center h-full">
              {solution.isVideo ? (
                isInView ? (
                  <video
                    src={solution.image}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-[250px] sm:h-[300px] lg:h-full rounded-xl object-contain"
                  />
                ) : <div className="w-full h-[250px] sm:h-[300px] lg:h-full rounded-xl bg-neutral-100/50" />
              ) : (
                <img
                  src={solution.image}
                  alt={solution.imageAlt}
                  className="w-full h-[250px] sm:h-[300px] lg:h-full rounded-xl object-contain"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

const OurSolutions = () => {
  return (
    <section className="bg-background pb-3 sm:pb-48 lg:pb-32 pt-0 relative" id="solutions">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Header */}
        <div className="sticky top-20 z-50 bg-background/95 backdrop-blur-md pt-8 sm:pt-12 pb-6 px-4 -mx-4 sm:px-0 sm:mx-0 text-center mb-10   shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)]">
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-4 py-3 mb-6">
            <Diamond className="w-3.5 h-3.5 text-blue-700" fill="currentColor" />
            <span className="text-xs font-semibold tracking-widest uppercase text-blue-700">
              Our Solutions
            </span>
          </div>

          <h2 className="font-aleo font-semibold text-2xl sm:text-3xl md:text-3xl text-neutral-800 leading-snug">
            Proven for{" "}
            <span className="text-blue-700">Real-World Security</span>{" "}
            Challenges
          </h2>
        </div>

        {/* Cards */}
        <div className="relative [perspective:1200px]">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              solution={solution}
              index={index}
              totalLength={solutions.length}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurSolutions;