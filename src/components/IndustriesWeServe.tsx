import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Diamond, Train, Factory, Landmark, Fuel, Warehouse, ShoppingBag, GraduationCap, Hospital, ArrowUpRight } from "lucide-react";
import industryRailways from "@/assets/industry-railways.png";
import industryManufacturing from "@/assets/industry-manufacturing.jpg";
import industryBanking from "@/assets/industry-banking.jpg";

const industries = [
  {
    icon: Train,
    label: "Railways & Transport Infrastructure",
    title: "Railways & Transport Infrastructure",
    description: "Monitor platforms, tracks, and entry points with real-time alerts for crowding, trespassing, and unattended objects. Enable centralized control rooms to track and respond to incidents instantly across locations.",
    image: industryRailways,
  },
  {
    icon: Factory,
    label: "Manufacturing & Industrial Facilities",
    title: "Manufacturing & Industrial Facilities",
    description: "Complex factories and plants operate with significant safety, compliance, and throughput challenges. AI-powered monitoring detects safety violations, unauthorized access, and equipment anomalies in real time.",
    image: industryManufacturing,
  },
  {
    icon: Landmark,
    label: "Banking & Financial Institutions",
    title: "Banking & Financial Institutions",
    description: "Protect branches, ATMs, and vaults with intelligent surveillance that detects suspicious behavior, unauthorized access attempts, and ensures compliance with security protocols across all locations.",
    image: industryBanking,
  },
  {
    icon: Fuel,
    label: "Oil & Gas",
    title: "Oil & Gas",
    description: "Monitor critical infrastructure across remote and hazardous locations with AI-powered perimeter security, intrusion detection, and safety compliance monitoring for refineries and pipelines.",
    image: industryRailways,
  },
  {
    icon: Warehouse,
    label: "Logistics & Warehousing",
    title: "Logistics & Warehousing",
    description: "Track inventory movement, detect theft, and monitor loading docks with intelligent video analytics. Automate security workflows across large warehouse networks and distribution centers.",
    image: industryManufacturing,
  },
  {
    icon: ShoppingBag,
    label: "Retail & Large Commercial Chains",
    title: "Retail & Large Commercial Chains",
    description: "Prevent shrinkage, monitor customer flow, and optimize store operations with AI-driven video analytics across hundreds of retail locations from a single unified platform.",
    image: industryBanking,
  },
  {
    icon: GraduationCap,
    label: "Education Campuses & Universities",
    title: "Education Campuses & Universities",
    description: "Ensure student safety across sprawling campuses with intelligent monitoring of entry points, common areas, and parking lots. Detect unusual behavior and enable rapid incident response.",
    image: industryRailways,
  },
  {
    icon: Hospital,
    label: "Hospitals & Healthcare Networks",
    title: "Hospitals & Healthcare Networks",
    description: "Protect patients, staff, and sensitive areas with AI surveillance that monitors restricted zones, detects unauthorized access, and ensures compliance with healthcare security standards.",
    image: industryManufacturing,
  },
];

const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

const sidebarVariants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: EASE_OUT_EXPO,
      staggerChildren: 0.05,
      delayChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -18 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: EASE_OUT_EXPO },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 44, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: EASE_OUT_EXPO },
  },
};

const IndustriesWeServe = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isClickScroll = useRef(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionRefs.current.forEach((el, i) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isClickScroll.current) {
            setActiveIndex(i);
          }
        },
        {
          threshold: 0,
          rootMargin: "-40% 0px -40% 0px",
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const handleTabClick = useCallback((index: number) => {
    setActiveIndex(index);
    isClickScroll.current = true;

    const element = sectionRefs.current[index];
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => {
        isClickScroll.current = false;
      }, 900);
    }
  }, []);

  return (
    <section className="bg-background py-16 sm:py-24" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14">
          <motion.div
            className="lg:w-[420px] flex-shrink-0 lg:sticky lg:top-24 lg:self-start"
            variants={sidebarVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EEF2FF] text-[#2563EB] text-[11px] font-bold tracking-[0.08em] uppercase mb-8">
              <Diamond className="w-3.5 h-3.5 text-blue-700 leading-none mb-[1px]" fill="currentColor" />
              INDUSTRIES WE SERVE
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={itemVariants} className="font-aleo font-semibold text-[30px] sm:text-[40px] text-[#2563EB] leading-[1.2] mb-10 tracking-tight">
              Security That Adapts <span className="text-[#111827]">to<br />Every Industry</span>
            </motion.h2>

            <div className="space-y-1">
              {industries.map((industry, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.button
                    key={industry.label}
                    variants={itemVariants}
                    onClick={() => handleTabClick(index)}
                    whileHover={{ x: isActive ? 0 : 4 }}
                    whileTap={{ scale: 0.99 }}
                    className={`relative w-full flex  font-roboto font-regular items-center gap-3 px-5 py-3.5 rounded-[8px] text-left transition-colors duration-300 z-10 ${isActive
                      ? "text-white"
                      : "text-[#52525B] hover:text-[#111827] hover:bg-slate-50"
                      }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTabPill"
                        className="absolute inset-0 bg-primary-gradient rounded-[8px] z-[-1] shadow-md"
                        initial={false}
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <industry.icon className="w-[18px] h-[18px] flex-shrink-0" strokeWidth={1.5} />
                    <span className="font-roboto font-medium text-[15px]">{industry.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          <div className="flex-1 min-w-0 space-y-24 lg:space-y-32">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className="scroll-mt-24 lg:scroll-mt-32"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-[22px] sm:text-[26px] font-sans font-bold text-[#111827] tracking-tight">
                    {industry.title}
                  </h3>
                  <a
                    href="#"
                    className="flex items-center gap-1 text-[#2563EB] text-[14px] font-semibold hover:underline flex-shrink-0 mt-1"
                  >
                    Learn more
                    <ArrowUpRight className="w-4 h-4 ml-[2px]" strokeWidth={2.5} />
                  </a>
                </div>

                <p className="text-[#52525B] font-roboto font-normal text-[15px] leading-[1.7] mb-8 max-w-2xl">
                  {industry.description}
                </p>

                <motion.div
                  className="rounded-[16px] overflow-hidden border border-[#E5E7EB] shadow-[0_12px_40px_rgba(0,0,0,0.08)] bg-white p-2"
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  initial={{ opacity: 0.6, y: 24, scale: 0.95 }}
                  transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.08 }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                    width={960}
                    height={640}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
