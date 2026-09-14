import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

import ScrollReveal from "@/components/ScrollReveal";
import AboutUs from "@/components/AboutUs";
import MeasurableSecurity from "@/components/MeasurableSecurity";
import { ArrowUpRight, Diamond, Video } from "lucide-react";
import { motion, useInView, animate } from "framer-motion";
import bankingfirst from "@/assets/bankingfirst.webp";
import bankingMain from "@/assets/banking-main.png";
import bankingsecond from "@/assets/bankingsecond.webp";
import bankingfourth from "@/assets/bankingfourth.webp";
import bankingcta from "@/assets/bankingcta.jpg";
import bankinglt from "@/assets/bankinglt.png";
import bankinglb from "@/assets/bankinglb.png";
import bgrailway from "@/assets/bg_railway.png";
import bankingrt from "@/assets/bankingrt.png";
import bankingrb from "@/assets/bankingrb.png";
import bankingthird from "@/assets/bankingthird.webp";

import bankingmobilefirst from "@/assets/banking-mb-bg.jpg";
import bankingmobilesecond from "@/assets/banking-mob-second.jpg";
import bankingmobilethird from "@/assets/banking-mob-third.jpg";
import bankingmobilefourth from "@/assets/banking-mob-fourth.jpg";

import { SecurityCameraIcon, MonitorPlayIcon, ClockClockwise, Vault, UserCircleMinus, AuditIcon } from "@/components/icons/RailwayIcons";
import { HandCoinIcon } from "@/components/icons/retailIcons";

import { LossIcon, LockKeyIcon } from "@/components/icons/LogisticsIcons";
import whychosesection from "@/assets/whychosesection.png";
import { RapidIcon } from "@/components/icons/HomeIcons";
// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const heroSlides = [
  {
    img: bankingmobilefirst,
    title: (
      <>
        CamPulse for Banking <br />
        & Financial Security
      </>
    ),
    desc: "Secure branches, ATMs, and critical assets with real-time monitoring.",
    cameras: "20",
    totalCameras: "24",
  },
  {
    img: bankingmobilesecond,
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
    img: bankingmobilethird,
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
    img: bankingmobilefourth,
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

const Banking = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const bankingSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "CamPulse Banking Security Solution",
    "description": "AI-powered ATM surveillance, vault security and real-time fraud prevention VMS for banking institutions.",
    "brand": { "@type": "Brand", "name": "CamPulse" }
  };

  return (
    <div className="min-h-screen bg-white pt-16 lg:pt-0">
      <SEO
        title="Banking & Financial VMS Security Solutions | CamPulse"
        description="Secure bank branches, ATMs, vaults, and corporate headquarters with CamPulse. AI-powered real-time security surveillance and fraud prevention systems."
        keywords="banking security, ATM surveillance, vault security, bank fraud prevention, financial institution VMS"
        path="/banking"
        schema={bankingSchema}
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
                          w-full
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
              {[bankingfirst, bankingsecond, bankingthird, bankingfourth].map((img, idx) => (
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
                Banking & Financial Security
              </motion.h1>
              <motion.p
                className="text-neutral-300 font-roboto text-sm max-w-md mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
              >
                Secure branches, ATMs, and critical assets with real-time monitoring.
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
      <section className="py-12 md:py-20  bg-[#F8FAFC] relative overflow-hidden">
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
            <h2 className="text-center font-aleo font-semibold text-[26px] md:text-[36px] leading-[1.4] tracking-[-0.03em] text-[#111827] mb-10">
              How{" "}
              <span className="text-blue-700">
                CamPulse powers Banking
              </span>
            </h2>
          </ScrollReveal>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: SecurityCameraIcon,
                title: "ATM Surveillance",
                desc: "Monitor ATM activity and suspicious behavior.",
              },
              {
                icon: ClockClockwise,
                title: "Branch Monitoring",
                desc: "Track real-time activity across branches.",
              },
              {
                icon: Vault,
                title: "Vault Security",
                desc: "Secure restricted areas with controlled access.",
              },
              {
                icon: UserCircleMinus,
                title: "Fraud Detection Support",
                desc: "Identify unusual activity patterns in real time.",
              },
              {
                icon: LockKeyIcon,
                title: "Access Control Integration",
                desc: "Manage entry across high-security zones securely.",
              },
              {
                icon: MonitorPlayIcon,
                title: "Centralized Monitoring",
                desc: "Enable visibility across all locations in real time.",
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

      {/* Centralized Banking Control Dashboard */}
      <section className="py-8 pb-0 relative overflow-hidden bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgrailway})` }}>
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-0 relative z-10">
          <div className="pt-10">
            {/* Heading */}
            <div className="text-center mb-2 lg:mb-16">
              <ScrollReveal direction="up" delay={100}>
                <div className="flex justify-center">
                  <div className="inline-flex items-center gap-2 px-8 py-3  rounded-full  bg-[#111e38]  lg:mb-4  text-neutral-300 text-[12px] font-medium tracking-[0.15em] tracking-[0.15em] uppercase">
                    <Diamond className="w-3 h-3" fill="currentColor" />
                    <span className="text-[14px] lg:text-[13px] font-roboto font-medium leading-[150%] tracking-[0.005em] uppercase text-neutral-300">
                      COMMAND CENTRE
                    </span>
                  </div>
                </div>
              </ScrollReveal>

              <h2 className="text-white font-aleo font-semibold text-[18px] lg:text-4xl md:text-[40px] tracking-tight mb-8 mt-4 lg:mt-0">
                Centralized Banking Control Dashboard
              </h2>
            </div>

            <div className="relative flex justify-center items-center  rounded-2xl">

              {/* Dark background frame */}
              <div className="relative max-w-7xl  w-full flex justify-center items-center">

                {/* Main dashboard image */}
                <motion.img
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  src={bankingMain}
                  alt="dashboard"
                  loading="lazy"
                  className="relative z-20 w-[90%] sm:w-[80%] xl:w-auto h-auto -mb-10 md:-mb-28 xl:-mb-40 xl:h-[700px] object-cover"
                />

                {/* LEFT TOP CARD */}
                <motion.img
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  src={bankinglt}
                  alt=""
                  loading="lazy"
                  className="absolute z-30 left-2 top-[-10px] w-[100px] sm:w-[140px] xl:-left-0 xl:top-[-18px] xl:w-80"
                />

                {/* LEFT BOTTOM ALERT */}
                <motion.img
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  src={bankinglb}
                  alt=""
                  loading="lazy"
                  className="absolute z-30 left-2 bottom-[-2px] w-[80px] sm:w-[110px] xl:-left-[-5px] xl:bottom-12 xl:w-[280px]"
                />

                {/* RIGHT TOP CARD */}
                <motion.img
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  src={bankingrt}
                  alt=""
                  loading="lazy"
                  className="absolute z-30 right-2 top-[-10px] w-[110px] sm:w-[150px] xl:-right-10 xl:top-1 xl:w-80"
                />

                {/* RIGHT BOTTOM CARD */}
                <motion.img
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  src={bankingrb}
                  alt=""
                  loading="lazy"
                  className="absolute z-30 right-2 bottom-[-2px] w-[110px] sm:w-[150px] xl:-right-[-5px] xl:bottom-8 xl:w-72"
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      <MeasurableSecurity
        badgeTitle="WHY CHOOSE US"
        titlePath1="Stronger Security."
        titlePath2="Smarter Monitoring."
        description="From faster incident response to reduced risks, CamPulse transforms surveillance into actionable intelligence that drives safer, smarter operations."
        buttonText="Book a Demo"
        backgroundImage={whychosesection}
        cardClassName="hover:-translate-y-1"

        stats={[
          {
            icon: LossIcon,
            title: "Fraud Reduction",
            desc: "Reduce fraud and overall security risk exposure.",
          },
          {
            icon: RapidIcon,
            title: "Dispute Resolution",
            desc: "Resolve disputes faster with clear video evidence.",
          },
          {
            icon: AuditIcon,
            title: "Audit Compliance",
            desc: "Improve compliance and incident audit reporting accuracy.",
          },
          {
            icon: HandCoinIcon,
            title: "Cost Efficiency",
            desc: "Lower security operational overheads across all locations.",
          },
        ]}
      />

      {/* About Us Sub-section */}
      <AboutUs variant="industry">
        {/* CTA Custom Banner for Banking */}
        <ScrollReveal
          direction="up"
          delay={300}
          className="grid grid-cols-10 max-w-7xl m-auto"
        >
          <div className="col-span-12 ">

            <div className="relative rounded-2xl lg:rounded-xl overflow-hidden h-[240px]  lg:h-[330px] flex items-center justify-center text-center shadow-xl">

              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${bankingcta})` }}
              />

              <div className="absolute inset-0 bg-[#0B2A5B]/80" />

              {/* CONTENT */}
              <div className="relative z-10 max-w-4xl px-6">

                <h2 className="text-white font-aleo font-semibold lg:text-[50px] text-[26px]  leading-[140%] tracking-[-0.01em] text-center leading-[1.3] mb-6">
                  Strengthen your Banking Security with CamPulse.
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

export default Banking;
