import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Diamond, Train, Factory, Landmark, ChevronDown, Fuel, Warehouse, ShoppingBag, GraduationCap, Hospital, ArrowUpRight } from "lucide-react";
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
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null);
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
          rootMargin: "-45% 0px -45% 0px",
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

  const toggleMobileAccordion = useCallback((index: number) => {
    setMobileOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <section className="bg-background py-16 sm:py-24" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* DESKTOP */}
        <div className="hidden lg:flex flex-col lg:flex-row gap-10 lg:gap-14">
          <motion.div
            className="lg:w-[420px] flex-shrink-0 lg:sticky lg:top-24 lg:self-start flex flex-col items-center lg:items-start"
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
            <motion.h2 variants={itemVariants} className="font-aleo font-semibold text-[30px] sm:text-[40px] text-[#2563EB] leading-[1.2] lg:mb-10 tracking-tight text-center lg:text-left">
              Security That Adapts <span className="text-[#111827]">to<br />Every Industry</span>
            </motion.h2>

            <div className="space-y-1">
              {industries.map((industry, index) => {
                const isActive = index === activeIndex;
                return (
                  <motion.button
                    key={industry.label}
                    variants={itemVariants}
                    onClick={() => handleTabClick(index)} a
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

          <div className="flex-1 min-w-0 space-y-20">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                ref={(el) => {
                  sectionRefs.current[index] = el;
                }}
                className="scroll-mt-20"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
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

                <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xl">
                  {industry.description}
                </p>

                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0.88, y: 24 }}
                  transition={{ duration: 0.8, ease: EASE_OUT_EXPO, delay: 0.08 }}
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full object-cover"
                    loading="lazy"
                    width={960}
                    height={640}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* MOBILE ACCORDION */}
        <div className="lg:hidden">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: EASE_OUT_EXPO }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <Diamond className="w-3.5 h-3.5 text-primary" fill="currentColor" />
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                Industries We Serve
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-foreground leading-snug">
              Security That <span className="text-primary italic">Adapts</span> to Every Industry
            </h2>
          </motion.div>

          <div className="space-y-3">
            {industries.map((industry, index) => {
              const isOpen = mobileOpenIndex === index;
              return (
                <motion.div
                  key={industry.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: EASE_OUT_EXPO, delay: index * 0.05 }}
                  className="border border-border rounded-xl overflow-hidden bg-card"
                >
                  <button
                    onClick={() => toggleMobileAccordion(index)}
                    className="w-full flex items-center justify-between gap-3 px-5 py-4 text-left"
                  >
                    <div className="flex items-center gap-3">
                      <industry.icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                      <span className="font-medium text-sm text-foreground">
                        {industry.label}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: EASE_OUT_EXPO }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0">
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {industry.description}
                          </p>
                          <div className="rounded-md overflow-hidden">
                            <img
                              src={industry.image}
                              alt={industry.title}
                              className="w-full object-cover"
                              loading="lazy"
                              width={960}
                              height={640}
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
