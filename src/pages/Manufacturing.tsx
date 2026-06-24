import React, { useRef, useEffect, useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ProfileFeature from "@/components/ProfileFeature";
import CertificationStrip from "@/components/CertificationStrip";
import MeasurableSecurity from "@/components/MeasurableSecurity";
import { ArrowUpRight, Diamond, Video, TrendingDown, } from "lucide-react";
import { motion, useInView, animate } from "framer-motion";
import heroBgStripes from "@/assets/hero-bg-stripes.png";
import manufacturingthirdBg from "@/assets/manufacturing-third.jpg";
import aboutCtaBg from "@/assets/cta_bg.jpg";
import manufacturingfourth from "@/assets/manufacturing-fourth.jpg";
import RailwayMain from "@/assets/manufacturing-dashboard.png";
import manufacturingsecond from "@/assets/manufacturing-second.jpg";
import railway_about from "@/assets/railway_about.png";
import manufacturingtop from "@/assets/manufacturingtop.png";
import manufacturinglfbt from "@/assets/manufacturinglfbt.png";
import bgrailway from "@/assets/bg_railway.png";
import compernsive_alert from "@/assets/manufacturing-right.png";
import manufacturingbt from "@/assets/manufacturing-bt.png";
import railwayBg from "@/assets/manufacturing-bg.jpg";
import { PPEIcon, RestrictedAreaIcon, MapPinAreaIcon, GearIcon, RootIcon, FireIcon, PersonIcon, EnhancedIcon, UptimeIcon } from "@/components/icons/ManufacturingIcons";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import whychosesection from "@/assets/whychosesection.png";

const heroSlides = [
  {
    img: railwayBg,
    title: (
      <>
        CamPulse for Manufacturing <br />
        Security
      </>
    ),
    desc: "Ensure safety, control access, and monitor critical areas in real time.",
    cameras: "20",
    totalCameras: "24",
  },
  {
    img: manufacturingsecond,
    title: (
      <>
        Smart Platform <br />
        &amp; Crowd Surveillance
      </>
    ),
    desc: "Monitor platforms for crowding, track passenger density, and detect unattended baggage.",
    cameras: "15",
    totalCameras: "18",
  },
  {
    img: manufacturingthirdBg,
    title: (
      <>
        Real-time Intrusion <br />
        &amp; Track Detection
      </>
    ),
    desc: "Prevent trespassers and unauthorized entries on tracks using AI-powered motion warnings.",
    cameras: "28",
    totalCameras: "32",
  },
  {
    img: manufacturingfourth,
    title: (
      <>
        Centralized Station <br />
        Command &amp; Control
      </>
    ),
    desc: "Manage multiple remote stations from a single secure central monitoring dashboard.",
    cameras: "42",
    totalCameras: "45",
  },
];

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const stats = [
  { prefix: "₹", num: 350, suffix: "+", stringVal: "", label: "Crore Annual Revenue" },
  { prefix: "", num: 500, suffix: "+", stringVal: "", label: "Enterprise & Govt Clients" },
  { prefix: "", num: 10, suffix: "+", stringVal: "", label: "Industries Served" },
  { prefix: "", num: 0, suffix: "", stringVal: "Pan India", label: "Operational Presence" },
];

const AnimatedCounter = ({ prefix, num, suffix, stringVal }: { prefix: string, num: number, suffix: string, stringVal: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (stringVal) return;
    if (!inView || !nodeRef.current) return;

    const controls = animate(0, num, {
      duration: 2.5,
      ease: "easeOut",
      onUpdate(value) {
        if (nodeRef.current) {
          nodeRef.current.textContent = Math.round(value).toString();
        }
      }
    });

    return () => controls.stop();
  }, [num, inView, stringVal]);

  return (
    <span>
      {prefix}
      <span ref={nodeRef}>{stringVal ? stringVal : "0"}</span>
      {suffix}
    </span>
  );
};

const Manufacturing = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      {/* MOBILE: image on top, content below */}
      <section className="relative overflow-hidden">

        {/* Mobile image block */}
        <div className="block lg:hidden relative h-[380px] w-full overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            speed={600}
            pagination={{ clickable: true }}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            loop
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            className="w-full h-full mobile-swiper"
          >
            {heroSlides.map((s, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={s.img}
                  alt=""
                  className="w-full h-full object-cover object-center"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Active Cameras UI Card overlay (static content) */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-white rounded-xl shadow-lg border border-slate-100 p-3 flex items-center w-[205px]">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mr-2.5">
              <Video className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold text-slate-500 leading-none mb-1">Active Cameras</p>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-baseline"
              >
                <span className="text-sm font-bold text-slate-800">
                  {heroSlides[0]?.cameras || "20"}
                </span>
                <span className="text-[9px] text-slate-400 font-medium ml-1">
                  / {heroSlides[0]?.totalCameras || "24"} Total
                </span>
              </motion.div>
            </div>
            <div className="flex items-center gap-1 border border-red-200 bg-red-50 px-2 py-0.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[8px] font-bold text-red-600 uppercase tracking-wider">Live</span>
            </div>
          </div>

          {/* Premium dark gradient fade overlay merging to solid black at the bottom */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-[#07090e] z-10 pointer-events-none" />
        </div>

        {/* Mobile content block */}
        <div className="block lg:hidden bg-[#07090e] px-6 pt-6 pb-12 text-center">
          <div className="flex justify-center mb-6">
            <div className="px-5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">
              <span className="font-roboto font-medium text-[11px] text-white tracking-widest uppercase">
                INDUSTRY SOLUTIONS
              </span>
            </div>
          </div>

          {/* Static text on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-white font-calistoga font-normal text-[31px] leading-[1.15] tracking-tight mb-4 max-w-md mx-auto">
              {heroSlides[0]?.title}
            </h1>
            <p className="text-neutral-300 font-roboto text-sm mb-8 leading-relaxed max-w-sm mx-auto">
              {heroSlides[0]?.desc}
            </p>
          </motion.div>
          <div className="flex justify-center">
            <button className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold px-8 py-3.5 rounded-full hover:bg-neutral-100 transition-colors shadow-md text-base">
              Book a Demo
              <ArrowUpRight className="w-5 h-5 ml-2 text-blue-600" />
            </button>
          </div>
        </div>

        {/* Desktop full-height overlay layout */}
        <div
          className="hidden lg:flex relative overflow-hidden pt-36 pb-24 items-center"
          style={{ height: "753px" }}
        >
          {/* Swiper Background */}
          <div className="absolute inset-0 z-0">
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              speed={600}
              pagination={{ clickable: true }}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              loop={true}
              className="w-full h-full hero-swiper"
            >
              {[railwayBg, manufacturingsecond, manufacturingthirdBg, manufacturingfourth].map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover object-center"
                    loading={idx === 0 ? "eager" : "lazy"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div
            className="absolute inset-0 opacity-50 mix-blend-overlay pointer-events-none z-10"
            style={{
              backgroundImage: `url(${heroBgStripes})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative z-20 max-w-7xl mx-auto px-4 w-full flex flex-col lg:flex-row items-center justify-between">
            <div className="max-w-2xl text-left w-full lg:w-1/2">
              <div className="flex justify-start mb-6">
                <div className="px-5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
                  <span className="font-roboto font-medium text-[12px] text-white leading-[150%] tracking-[0.015em] text-center align-middle mb-[12px]">
                    INDUSTRY SOLUTIONS
                  </span>
                </div>
              </div>
              <motion.h1
                className="text-white font-calistoga font-normal not-italic text-[46px] md:text-[52px] leading-[1.1] tracking-tight mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE_OUT }}
              >
                CamPulse for Manufacturing <br />
                Industrial Security
              </motion.h1>
              <motion.p
                className="text-neutral-300 font-roboto text-sm max-w-md mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
              >
                Ensure safety, compliance, and operational control across production environments.
              </motion.p>

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
            </div>
          </div>
        </div>
      </section>


      <section className="py-24 bg-[#F8FAFC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Badge */}
          <ScrollReveal direction="up" delay={100}>
            <div className="flex justify-center mb-5">
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#eff6ff]">
                <Diamond className="w-4 h-4 md:w-4 md:h-4 text-blue-700" fill="currentColor" />
                <span className="text-[13px] font-aleo font-bold uppercase text-blue-600">
                  Our Capabilities
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal direction="up" delay={150}>
            <h2 className="text-center font-aleo font-semibold text-[30px] sm:text-[38px] leading-[1.2] tracking-[-0.03em] mb-16 text-[#111827]">
              How{" "}
              <span className="text-blue-700">
                CamPulse powers Manufacturing
              </span>
            </h2>
          </ScrollReveal>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: PPEIcon,
                title: "PPE Compliance Detection",
                desc: "Detect missing safety gear in real time.",
              },
              {
                icon: RestrictedAreaIcon,
                title: "Restricted Area Monitoring",
                desc: "Prevent unauthorized access to critical zones.",
              },
              {
                icon: MapPinAreaIcon,
                title: "Perimeter Security",
                desc: "Monitor facility boundaries for intrusion.",
              },
              {
                icon: GearIcon,
                title: "Equipment Monitoring",
                desc: "Track machinery usage and movement.",
              },
              {
                icon: PersonIcon,
                title: "Workforce Safety Monitoring",
                desc: "Identify unsafe behavior on the shop floor.",
              },
              {
                icon: FireIcon,
                title: "Fire & Hazard Detection",
                desc: "Detect fire, smoke, and environmental risks.",
              },
            ].map((feature, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={idx * 100}
              >
                <div
                  className="
                group
                bg-white
                rounded-[14px]
                p-7
                min-h-[165px]

              shadow-lg
                hover:shadow-[0_12px_35px_rgba(37,99,235,0.10)]

                transition-all
                duration-500
                ease-out

                hover:-translate-y-1
              "
                >
                  {/* Icon */}
                  <div
                    className="
                      w-11 h-11
                      rounded-xl
                      bg-[#EEF4FF]
                      flex items-center justify-center
                      mb-5
                      transition-all
                      duration-500
                      group-hover:bg-[#2563EB]
                    "
                  >
                    <div className="text-[#2563EB] group-hover:text-white transition-colors duration-500">
                      <feature.icon />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg leading-none font-roboto font-medium text-neutral-800 mb-2">
                    {feature.title}
                  </h3>

                  {/* Desc */}
                  <p className="text-[14px] leading-[1.7] text-neutral-500 font-normal ">
                    {feature.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Centralized Manufacturing Control Dashboard */}
      <section className="py-8 pb-0 relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgrailway})` }}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
          <div className="pt-10">
            {/* Heading */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-4">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#111e38] mb-4 border border-blue-900/50 text-neutral-300 text-[12px] font-regular tracking-[0.15em] uppercase">
                  <span className="w-1.5 h-1.5 rotate-45 bg-white" />
                  COMMAND CENTRE
                </span>
              </div>
              <h2 className="text-white font-aleo font-semibold text-2xl sm:text-4xl md:text-[40px] tracking-tight">
                Centralized Industrial Control Dashboard
              </h2>
            </div>

            {/* Dashboard Container */}

            <div className="relative flex justify-center items-center  rounded-2xl">

              {/* Dark background frame */}
              <div className="relative max-w-7xl  w-full flex justify-center items-center">
                {/* Main dashboard image */}
                <motion.img
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  src={RailwayMain}
                  alt="dashboard"
                  loading="lazy"
                  className="rounded-xl relative z-20 w-[90%] sm:w-[80%] xl:w-auto h-auto -mb-16 md:-mb-28 xl:-mb-40  xl:h-[660px] object-cover shadow-2xl"
                />

                {/* LEFT TOP CARD */}
                <motion.img
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  src={manufacturingtop}
                  alt=""
                  loading="lazy"
                  className="absolute z-30 left-2 top-[-10px] w-[100px] sm:w-[140px] xl:-left-0 xl:top-[-10px] xl:w-72 rounded-xl"
                />

                {/* LEFT BOTTOM ALERT */}
                <motion.img
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  src={manufacturinglfbt}
                  alt=""
                  loading="lazy"
                  className="absolute z-30 left-2 bottom-[-10px] w-[80px] sm:w-[110px] xl:-left-[-5px] xl:bottom-5 xl:w-[380px]"
                />

                {/* RIGHT TOP CARD */}
                <motion.img
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  src={compernsive_alert}
                  alt=""
                  loading="lazy"
                  className="absolute z-30 right-2 top-[-10px] w-[110px] sm:w-[150px] xl:-right-0 xl:top-[-10px] xl:w-80 rounded-xl"
                />

                {/* RIGHT BOTTOM CARD */}
                <motion.img
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  src={manufacturingbt}
                  alt=""
                  loading="lazy"
                  className="absolute z-30 right-2 bottom-[-10px] w-[110px] sm:w-[150px] xl:-right-[-15px] xl:bottom-5 xl:w-72 rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MeasurableSecurity
        badgeTitle="WHY CHOOSE US"
        titlePath1="Safer Operations."
        titlePath2="Fewer Incidents."
        description="From faster incident response to reduced risks, CamPulse transforms surveillance into actionable intelligence that drives safer, smarter operations."
        buttonText="Book a Demo"
        backgroundImage={whychosesection}
        sectionClassName="py-32"
        cardClassName="hover:-translate-y-1"
        stats={[
          {
            icon: TrendingDown,
            title: "Accident Reduction",
            desc: "Fewer workplace accidents and compliance violations.",
          },
          {
            icon: EnhancedIcon,
            title: "Enhanced Safety",
            desc: "Improve worker safety without increasing staffing requirements.",
          },
          {
            icon: UptimeIcon,
            title: "Operational Uptime",
            desc: "Increase production uptime and operational reliability.",
          },
          {
            icon: RootIcon,
            title: "Root Analysis",
            desc: "Faster incident investigation and root-cause identification.",
          },
        ]}
      />

      {/* About Us Sub-section */}
      <section className="py-12 lg:py-24 bg-[#FAFAFA] relative overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <ScrollReveal direction="up" delay={100} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EBF1FF] text-[#2563EB] text-[10px] font-bold tracking-[0.15em] uppercase">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#2563EB]" />
              About Us
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <h2 className="text-center text-[#111827] font-aleo font-semibold text-3xl sm:text-4xl md:text-[40px] tracking-tight">
              Built on <span className="text-[#2563EB] font-bold">25+ Years</span> of Infrastructure Excellence
            </h2>
          </ScrollReveal>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mb-12 lg:mb-24 px-4 lg:px-12 lg:mt-20 mt-6">
            {stats.map((stat, idx) => (
              <ScrollReveal key={idx} direction="up" delay={300 + idx * 100} className="text-center">
                <p className="text-[#111827] font-display font-bold text-3xl sm:text-4xl md:text-[42px] mb-2 tracking-tight">
                  <AnimatedCounter prefix={stat.prefix} num={stat.num} suffix={stat.suffix} stringVal={stat.stringVal} />
                </p>
                <p className="font-roboto text-neutral-600 font-medium text-[11px] sm:text-[13px] uppercase tracking-wide">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>

          <ProfileFeature
            imageSrc={railway_about}
            variant="image"
            title={<>CAMPULSE BY TRANSLINE<br />TECHNOLOGIES</>}
            descriptions={[
              "CamPulse is built on Transline Technologies' extensive experience in delivering large-scale, mission-critical infrastructure across India.",
              "Deep engineering capability, field-proven deployment expertise, and an unwavering commitment to seamless integration and service uptime."
            ]}
            className="mb-10 mx-auto max-w-7xl"
          />

          <ScrollReveal direction="up" delay={250} className="mb-16">
            <CertificationStrip />
          </ScrollReveal>

          {/* CTA Custom Banner for Manufacturing */}
          <ScrollReveal
            direction="up"
            delay={300}
            className="grid grid-cols-10 max-w-7xl m-auto"
          >
            <div className="col-span-12 ">

              <div className="relative rounded-2xl lg:rounded-xl overflow-hidden h-[240px]  lg:h-[330px] flex items-center justify-center text-center shadow-xl">

                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${aboutCtaBg})` }}
                />

                <div className="absolute inset-0 bg-[#0B2A5B]/80" />

                {/* CONTENT */}
                <div className="relative z-10 max-w-4xl px-6">

                  <h2 className="text-white font-aleo font-semibold lg:text-[50px] text-[22px] leading-[140%] tracking-[-0.01em] text-center leading-[1.3] mb-6">
                    Transform your manufacturing security
                    with CamPulse.
                  </h2>

                  {/* SIMPLE BUTTON */}
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-blue-700 text-sm font-medium shadow-md hover:shadow-lg transition">

                    Book a Demo
                    <ArrowUpRight className="w-4 h-4" />

                  </button>
                </div>

              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>
    </div>
  );
};

export default Manufacturing;
