import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Diamond, Train, Factory, Landmark, Fuel, Warehouse, ShoppingBag, GraduationCap, Hospital, ArrowUpRight } from "lucide-react";
import industryRailways from "@/assets/industry-railways.png";
import industryManufacturing from "@/assets/industry-manufacturing.png";
import industryBanking from "@/assets/industry-banking.png";
import OilGas from "@/assets/OilGas.png";
import LogisticsWarehousing from "@/assets/LogisticsWarehousing.png";
import retailLarge from "@/assets/retailLarge.png";
import educationuniversities from "@/assets/educationuniversities.png";
import hospital from "@/assets/hospital.png";

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
    description: "Detect PPE violations, restricted access, and unsafe movement on the shop floor. Monitor facilities in real time to prevent incidents and ensure safety compliance.",
    image: industryManufacturing,
  },
  {
    icon: Landmark,
    label: "Banking & Financial Institutions",
    title: "Banking & Financial Institutions",
    description: "Track activity across branches and ATMs with alerts for unauthorized access and suspicious behavior. Secure vaults and critical areas with real-time monitoring and incident visibility.",
    image: industryBanking,
  },
  {
    icon: Fuel,
    label: "Oil & Gas",
    title: "Oil & Gas",
    description: "Monitor high-risk zones for intrusion, fire hazards, and unsafe activity across sites. Enable instant alerts and rapid response to prevent operational risks.",
    image: OilGas,
  },
  {
    icon: Warehouse,
    label: "Logistics & Warehousing",
    title: "Logistics & Warehousing",
    description: "Track movement across warehouses and transit hubs with real-time visibility. Detect unauthorized access, losses, and delays as they happen.",
    image: LogisticsWarehousing,
  },
  {
    icon: ShoppingBag,
    label: "Retail & Large Commercial Chains",
    title: "Retail & Large Commercial Chains",
    description: "Identify shoplifting, suspicious activity, and unauthorized stockroom access in real time. Monitor store operations across locations with better visibility and control.",
    image: retailLarge,
  },
  {
    icon: GraduationCap,
    label: "Education Campuses & Universities",
    title: "Education Campuses & Universities",
    description: "Monitor campus entry points and common areas for unauthorized access and unusual activity. Enable quick response with centralized visibility across the campus.",
    image: educationuniversities,
  },
  {
    icon: Hospital,
    label: "Hospitals & Healthcare Networks",
    title: "Hospitals & Healthcare Networks",
    description: "Control access to ICUs, pharmacies, and restricted zones while monitoring critical areas. Detect unusual activity and respond quickly to ensure safety at all times.",
    image: hospital,
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
  const desktopSectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobileSectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isClickScroll = useRef(false);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    const observerOptions = {
      threshold: 0,
      rootMargin: "-40% 0px -40% 0px",
    };

    const handleIntersect = (i: number) => ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting && !isClickScroll.current) {
        setActiveIndex(i);
      }
    };

    desktopSectionRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(handleIntersect(i), observerOptions);
      observer.observe(el);
      observers.push(observer);
    });

    mobileSectionRefs.current.forEach((el, i) => {
      if (!el) return;
      const observer = new IntersectionObserver(handleIntersect(i), observerOptions);
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  const handleTabClick = useCallback((index: number) => {
    setActiveIndex(index);
    isClickScroll.current = true;

    // Use desktop ref if on desktop and it exists, else use mobile
    const isDesktop = window.innerWidth >= 1024;
    const element = isDesktop ? desktopSectionRefs.current[index] : mobileSectionRefs.current[index];

    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
      window.setTimeout(() => {
        isClickScroll.current = false;
      }, 1000);
    }
  }, []);

  return (
    <section className="bg-background py-16 lg:pt-24 lg:pb-0" id="industries">
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
                        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.8 }}
                      />
                    )}
                    <industry.icon className="w-[18px] h-[18px] flex-shrink-0" strokeWidth={1.5} />
                    <span className="font-roboto font-medium text-[15px]">{industry.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          <div className="flex-1 min-w-0 relative  lg:pb-32">
            {/* STICKY LEFT, SCROLLING RIGHT CONTENT */}
            <div className="hidden lg:flex flex-col space-y-[12vh] pt-8">
              {industries.map((industry, index) => {
                const isActive = activeIndex === index;
                return (
                  <motion.div
                    key={`desktop-${industry.title}`}
                    ref={(el) => {
                      desktopSectionRefs.current[index] = el;
                    }}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1, ease: EASE_OUT_EXPO }}
                    className="w-full relative scroll-m-32 origin-left"
                  >
                    <div
                      className="transition-all duration-700 ease-out"
                      onClick={() => !isActive && handleTabClick(index)}
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-[28px] font-sans font-bold text-[#111827] tracking-tight">
                          {industry.title}
                        </h3>
                        <a
                          href="#"
                          className="flex items-center gap-1 text-[#2563EB] text-[14px] font-semibold hover:underline flex-shrink-0 mt-1 transition-colors hover:text-blue-700"
                        >
                          Learn more
                          <ArrowUpRight className="w-4 h-4 ml-[2px]" strokeWidth={2.5} />
                        </a>
                      </div>

                      <p className="text-[#52525B] font-roboto font-normal text-[15.5px] leading-[1.7] mb-6 max-w-xl">
                        {industry.description}
                      </p>

                      <div className=" overflow-hidden">
                        <img
                          src={industry.image}
                          alt={industry.title}
                          className="w-full h-auto object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] hover:scale-[1.04]"
                          loading="lazy"
                          width={960}
                          height={640}
                        />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* MOBILE: NORMAL SCROLLING LIST */}
            <div className="block lg:hidden space-y-16">
              {industries.map((industry, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={`mobile-${industry.title}`}
                    ref={(el) => {
                      mobileSectionRefs.current[index] = el;
                    }}
                    className="scroll-mt-24"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.8, ease: EASE_OUT_EXPO }}
                      className="w-full"
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

                      <p className="text-[#52525B] font-roboto font-normal text-[15px] leading-[1.7] mb-5">
                        {industry.description}
                      </p>

                      <div className="rounded-md overflow-hidden">
                        <img
                          src={industry.image}
                          alt={industry.title}
                          className="w-full object-cover transition-transform duration-1000 ease-[0.16,1,0.3,1] hover:scale-105"
                          loading="lazy"
                          width={960}
                          height={640}
                        />
                      </div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
