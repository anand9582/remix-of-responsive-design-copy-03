import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";
import AboutUs from "@/components/AboutUs";
import MeasurableSecurity from "@/components/MeasurableSecurity";
import { ArrowUpRight, Diamond, Video } from "lucide-react";
import { motion, useInView, animate } from "framer-motion";
import educationfirst from "@/assets/education-first.webp";
import educationsecond from "@/assets/education-second.webp";
import educationthird from "@/assets/education-third.webp";
import educationfourth from "@/assets/education-fourth.webp";
import eduCtaBg from "@/assets/edu_cta.jpg";
import educationMain from "@/assets/education-main.png";
import educationrt from "@/assets/educationrt.png";
import educationrlt from "@/assets/educationrlt.png";
import educationlb from "@/assets/educationlb.png";
import bgrailway from "@/assets/bg_railway.png";
import educationrbt from "@/assets/educationrbt.png";
import { LockKeyIcon } from "@/components/icons/LogisticsIcons";
import educationmobilefirst from "@/assets/education-mb-bg.jpg";
import educationmobilesecond from "@/assets/education-mob-second.jpg";
import educationmobilethird from "@/assets/education-mob-third.jpg";
import educationmobilefourth from "@/assets/education-mob-fourth.jpg";

import { SecurityCameraIcon, ShieldCheckIcon, CrowdIcon, GraduationCapIcon, GearIcon, RapidIcon, MapPinLineIcon } from "@/components/icons/RailwayIcons";
import { TheftIcon } from "@/components/icons/LogisticsIcons";
import { MultiStoreIcon } from "@/components/icons/retailIcons";
import whychosesection from "@/assets/whychosesection.png";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const heroSlides = [
  {
    img: educationmobilefirst,
    title: (
      <>
        CamPulse for Education <br />
        Security
      </>
    ),
    desc: "Ensure student safety and monitor campus activity in real time.",
    cameras: "20",
    totalCameras: "24",
  },
  {
    img: educationmobilesecond,
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
    img: educationmobilethird,
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
    img: educationmobilefourth,
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

const Education = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const educationSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "CamPulse Education Security Solution",
    "description": "AI-based student safety monitoring, campus perimeter intrusion detection and automated emergency alert VMS for schools.",
    "brand": { "@type": "Brand", "name": "CamPulse" }
  };

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-0">
      <SEO
        title="Campus & School VMS Security Solutions | CamPulse"
        description="Secure schools and campuses with CamPulse. AI-based student safety monitoring, perimeter intrusion detection, automated access control, and quick emergency alerts."
        keywords="school security, campus surveillance, student safety, perimeter protection, school VMS"
        path="/education"
        schema={educationSchema}
      />
      {/* Hero Section */}
      {/* MOBILE: image on top, content below */}
      <section className="relative overflow-hidden">


        {/* Mobile image block */}
        <div className="block lg:hidden relative w-full overflow-hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            slidesPerView={1}
            speed={600}
            pagination={{ clickable: true }}
            autoplay={{ delay: 1000, disableOnInteraction: false }}
            loop
            onSlideChange={(s) => setActiveIndex(s.realIndex)}
            className="w-full mobile-swiper"
          >
            {heroSlides.map((s, idx) => (
              <SwiperSlide key={idx}>
                <img
                  src={s.img}
                  alt=""
                  className="w-full h-auto object-contain object-center"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-[60%] bg-gradient-to-t from-black via-black/30 to-transparent pointer-events-none z-20" />
        </div>

        {/* Mobile content block */}
        <div className="block lg:hidden bg-[#060606] px-6 pt-6 pb-12 text-center">
          <div className="flex justify-center mb-5">
            <div className="inline-flex items-center justify-center rounded-full bg-white/10 border border-white/10 backdrop-blur-md px-4 py-2">
              <span className="font-roboto text-[14px] font-normal leading-[16.5px] tracking-[0.015em] text-center uppercase text-white whitespace-nowrap">
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
            <h1 className="text-white font-calistoga font-normal text-[28px] md:text-[31px] leading-[1.26] tracking-tight mb-4 max-w-md mx-auto">
              {heroSlides[0]?.title}
            </h1>
            <p className="text-neutral-300 font-roboto  text-[16px] md:text-sm mb-8 leading-relaxed max-w-sm mx-auto">
              {heroSlides[0]?.desc}
            </p>
          </motion.div>
          <div className="flex justify-center">
            <Link to="https://calendly.com/suparv-translineindia/ai-based-cctv-analytics-storepulse-demo-1?month=2026-09">
              <button
                className="
                             inline-flex items-center justify-center gap-2
                             sm:w-auto
                             max-w-[260px]
                             px-6 sm:px-8
                             py-3 sm:py-3.5
                             rounded-full
                             bg-white
                             text-blue-600
                             text-[16px] sm:text-base
                             font-semibold
                             hover:bg-neutral-100
                             transition-all duration-300
                             shadow-md
                             cursor-pointer
                           "
              >
                <span>Book a Demo</span>
                <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
              </button>
            </Link>
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
              {[educationfirst, educationsecond, educationthird, educationfourth].map((img, idx) => (
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
                CamPulse for <br />
                Smart Campus
                <br />
                Security
              </motion.h1>
              <motion.p
                className="text-neutral-300 font-roboto text-sm max-w-md mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
              >
                Ensure student safety and monitor campus activity in real time.
              </motion.p>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
                className="inline-block"
              >
                <Link to="https://calendly.com/suparv-translineindia/ai-based-cctv-analytics-storepulse-demo-1?month=2026-09">
                  <button className="group relative flex items-center rounded-full h-11 text-sm font-semibold shadow-lg overflow-hidden w-[164px] bg-white hover:bg-[linear-gradient(96.6deg,#2563EB_5.01%,#153885_92.14%)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] cursor-pointer">
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
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>



      {/* How CamPulse Powers Transport Infrastructure */}
      <section className="md:py-20 py-12 bg-[#F8FAFC] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Badge */}
          <ScrollReveal direction="up" delay={100}>
            <div className="flex justify-center mb-3">
              <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-5 py-3">
                <Diamond className="w-3 h-3 text-blue-700" fill="currentColor" />
                <span className="text-[14px] lg:text-[13px] font-roboto font-medium leading-[150%] tracking-[0.005em] uppercase text-blue-700">
                  Our Capabilities
                </span>
              </div>
            </div>
          </ScrollReveal>

          {/* Heading */}
          <ScrollReveal direction="up" delay={150}>
            <h2 className="text-center font-aleo font-semibold text-[26px] md:text-[36px] leading-[1.4] tracking-[-0.03em] text-[#111827] mb-6">
              How{" "}
              <span className="text-blue-700">
                CamPulse powers Education
              </span>
            </h2>
          </ScrollReveal>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: SecurityCameraIcon,
                title: "Campus Surveillance",
                desc: "Monitor classrooms, corridors, and campus areas.",
              },
              {
                icon: LockKeyIcon,
                title: "Access Control",
                desc: "Manage and secure all campus entry points.",
              },
              {
                icon: ShieldCheckIcon,
                title: "Student Safety Monitoring",
                desc: "Detect unusual activity and ensure student safety.",
              },
              {
                icon: CrowdIcon,
                title: "Crowd Monitoring",
                desc: "Track crowd movement across campus in real time.",
              },
              {
                icon: TheftIcon,
                title: "Incident Alerts",
                desc: "Enable real-time alerts for campus incidents.",
              },
              {
                icon: MultiStoreIcon,
                title: "Centralized Monitoring",
                desc: "Manage all campus buildings from one dashboard.",
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
                     w-9 h-9
                    rounded-xl
                    flex items-center 
                    mb-2
                    transition-all
                    duration-500
                  "
                  >
                    <div className="text-[#2563EB] transition-colors duration-500">
                      <feature.icon />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="lg:text-[18px] text-[20px] leading-none font-roboto font-medium text-neutral-800 mb-1">
                    {feature.title}
                  </h3>

                  {/* Desc */}
                  <p className="lg:text-[14px] text-[16px] leading-[150%] tracking-[0.005em] text-neutral-500  font-roboto font-normal">
                    {feature.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Centralized Education Control Dashboard */}
      <section className="py-8 pb-0 relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgrailway})` }}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
          <div className="pt-10">
            {/* Heading */}
            <div className="text-center lg:mb-16 mb-6">
              <div className="flex justify-center mb-3">
                <div className="inline-flex items-center gap-2 px-6 py-3  rounded-full  bg-[#111e38]  lg:mb-5  text-neutral-300 text-[12px] font-medium tracking-[0.15em] tracking-[0.15em] uppercase">
                  <Diamond className="w-3 h-3" fill="currentColor" />
                  <span className="text-xs text-md  tracking-widest uppercase text-neutral-300">
                    COMMAND CENTRE
                  </span>
                </div>
              </div>
              <h2 className="text-white font-aleo font-semibold text-[18px] lg:text-4xl md:text-[40px] tracking-tight mb-4 mt-4 lg:mt-0">
                Centralized Education Control Dashboard
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
                  src={educationMain}
                  alt="dashboard"
                  loading="lazy"
                  className="relative z-20 w-[90%] sm:w-[80%] xl:w-auto h-auto xl:h-[660px] -mb-10 md:-mb-28 xl:-mb-40 object-cover"
                />

                {/* LEFT TOP CARD */}
                <motion.img
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  src={educationrlt}
                  alt=""
                  loading="lazy"
                  className="absolute z-30 left-2 top-1 w-[100px] sm:w-[140px] xl:-left-0 xl:top-1 xl:w-72"
                />

                {/* LEFT BOTTOM ALERT */}
                <motion.img
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  src={educationlb}
                  alt=""
                  loading="lazy"
                  className="absolute z-30 left-2 bottom-[-10px] w-[80px] sm:w-[110px] xl:-left-[-5px] xl:bottom-5 xl:w-[220px]"
                />

                {/* RIGHT TOP CARD */}
                <motion.img
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  src={educationrt}
                  alt=""
                  loading="lazy"
                  className="absolute z-30 right-2 top-1 w-[110px] sm:w-[150px] xl:-right-10 xl:top-1 xl:w-80"
                />

                {/* RIGHT BOTTOM CARD */}
                <motion.img
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  src={educationrbt}
                  alt=""
                  loading="lazy"
                  className="absolute z-30 right-2 bottom-[-10px] w-[110px] sm:w-[150px] xl:-right-5 xl:bottom-8 xl:w-72"
                />

              </div>
            </div>
          </div>
        </div>
      </section>
      <MeasurableSecurity
        badgeTitle="WHY CHOOSE US"
        titlePath1="Safer Campuses."
        titlePath2="Better Visibility."
        description="From faster incident response to reduced risks, CamPulse transforms surveillance into actionable intelligence that drives safer, smarter operations."
        buttonText="Book a Demo"
        backgroundImage={whychosesection}
        cardClassName="hover:-translate-y-1"

        stats={[
          {
            icon: GraduationCapIcon,
            title: "Campus Safety",
            desc: "Enable safer learning environments with rapid incident response.",
          },
          {
            icon: GearIcon,
            title: "Effort Reduction",
            desc: "Reduce manual monitoring workload for campus security staff.",
          },
          {
            icon: RapidIcon,
            title: "Rapid Investigation",
            desc: "Accelerate investigations during emergencies with instant access.",
          },
          {
            icon: MapPinLineIcon,
            title: "Zone Visibility",
            desc: "Increase visibility across multiple buildings and campus zones.",
          },
        ]}
      />

      {/* About Us Sub-section */}
      <AboutUs variant="industry">
        {/* CTA Custom Banner for Education */}
        <ScrollReveal
          direction="up"
          delay={300}
          className="grid grid-cols-10 max-w-7xl m-auto"
        >
          <div className="col-span-12 ">

            <div className="relative rounded-2xl lg:rounded-xl overflow-hidden h-[240px]  lg:h-[330px] flex items-center justify-center text-center shadow-xl">

              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${eduCtaBg})` }}
              />

              {/* CONTENT */}
              <div className="relative z-10 max-w-4xl px-6">

                <h2 className="text-white font-aleo font-semibold lg:text-[50px] text-[26px]  leading-[140%] tracking-[-0.01em] text-center leading-[1.3] mb-6">
                  Build a safer Campus with CamPulse.
                </h2>

                {/* SIMPLE BUTTON */}
                <Link to="https://calendly.com/suparv-translineindia/ai-based-cctv-analytics-storepulse-demo-1?month=2026-09">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-blue-700 text-sm font-medium shadow-md hover:shadow-lg transition cursor-pointer">

                    Book a Demo
                    <ArrowUpRight className="w-4 h-4" />

                  </button>
                </Link>
              </div>

            </div>
          </div>
        </ScrollReveal>
      </AboutUs>
    </div>
  );
};

export default Education;
