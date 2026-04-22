import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ProfileFeature from "@/components/ProfileFeature";
import { ArrowUpRight, } from "lucide-react";
import { motion } from "framer-motion";
import heroBgStripes from "@/assets/hero-bg-stripes.png";
import aboutCtaBg from "@/assets/aboutcta-bg.jpg";
import RailwayMain from "@/assets/railway-dashbaord.png";
import founderImg from "@/assets/founder.jpg";
import logoT from "@/assets/logo-t.png";
import etatop from "@/assets/eta-top.png";
import etaalert from "@/assets/eta-left.png";
import etaatop from "@/assets/etatop.png";
import etaright from "@/assets/etaright.png";
import railwayBg from "@/assets/railway-bg.jpg";
import { SecurityCameraIcon, TrackCameraIcon, CrowdIcon, LightningIcon, UsersFourIcon, ShieldCheckIcon, PulseIcon, WarningIcon, MonitorPlayIcon, ProhibitIcon } from "@/components/icons/RailwayIcons";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const Railway = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-36 pb-24 bg-cover bg-center"
        style={{
          backgroundImage: `url(${railwayBg})`,
          height: "753px",
        }}
      >
        <div
          className="absolute inset-0 opacity-50 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url(${heroBgStripes})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="px-5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
              <span className="text-xs tracking-widest text-white font-semibold">
                INDUSTRY SOLUTIONS
              </span>
            </div>
          </div>
          <motion.h1
            className="text-white font-calistoga font-normal not-italic text-[46px] md:text-[56px] leading-[1.2] tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
          >
            CamPulse for Railways <br />
            & Transport Infrastructure
          </motion.h1>
          <motion.p
            className="text-white font-roboto font-regular md:text-sm max-w-3xl mx-auto mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
          >
            End-to-end smarter, high-assurance security platform by Transline
            Technologies for Indian Railways.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT }}
          >
            <button className="group relative flex items-center mx-auto rounded-full h-11 text-sm font-semibold shadow-lg overflow-hidden w-[164px] hover:bg-white transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">

              {/* BLUE DEFAULT → HIDE ON HOVER */}
              <span className="absolute inset-0 opacity-100 group-hover:opacity-0 transition-opacity duration-500 bg-[linear-gradient(96.6deg,#2563EB_5.01%,#153885_92.14%)]" />

              {/* ICON */}
              <span className="absolute z-10 left-1.5 group-hover:left-[calc(100%-2.25rem-6px)] w-8 h-8 rounded-full bg-white group-hover:bg-blue-700 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                <ArrowUpRight className="w-4 h-4 text-blue-700 group-hover:text-white transition-all duration-500 group-hover:rotate-45" />
              </span>

              {/* TEXT */}
              <span className="absolute z-10 left-12 group-hover:left-5 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] whitespace-nowrap text-white group-hover:text-blue-700">
                Book a Demo
              </span>

            </button>
          </motion.div>
        </div>
      </section>

      {/* How CamPulse Powers Railways */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-center text-[#111827] font-aleo font-semibold text-3xl sm:text-4xl md:text-[40px] mb-4 tracking-tight">
              How CamPulse powers Railways
            </h2>
            <p className="text-center font-roboto font-regular text-neutral-500   text-lg max-w-2xl mx-auto mb-16">
              Tailor-made for high-assurance public transport deployments, CamPulse helps
              authorities secure infrastructure, proactively.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: SecurityCameraIcon,
                title: "Platform Surveillance",
                desc: "Monitor platforms for crowding and unattended objects.",
              },
              {
                icon: TrackCameraIcon,
                title: "Track Monitoring",
                desc: "Detect trespassing and unauthorized movement on tracks.",
              },
              {
                icon: ProhibitIcon,
                title: "Intrusion Detection",
                desc: "Identify restricted area access in real time.",
              },
              {
                icon: CrowdIcon,
                title: "Crowd Monitoring",
                desc: "Track passenger movement and density.",
              },
              {
                icon: WarningIcon,
                title: "Incident Alerts",
                desc: "Enable real-time alerts for faster response.",
              },
              {
                icon: MonitorPlayIcon,
                title: "Centralized Monitoring",
                desc: "Manage multiple stations from one system.",
              },
            ].map((feature, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={100 * idx}
                className="bg-white rounded-md p-8 shadow-lg hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl  flex items-center justify-center mb-6">
                  <feature.icon />
                </div>
                <h3 className="text-xl font-roboto font-medium tex-neutral-800 mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Centralized Railway Control Dashboard */}
      <section className="py-8  relative overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Heading */}
          <div className="bg-[#0B1220] rounded-md py-16">
            {/* Heading */}
            <div className="text-center mb-2">
              <h2 className="text-white font-aleo font-semibold text-2xl sm:text-4xl md:text-[40px] tracking-tight mb-4">
                Centralized Railway Control Dashboard
              </h2>
              <p className="text-slate-300 text-lg max-w-[31rem] mx-auto">
                Monitor stations, tracks, and incidents in real time through a unified control system.
              </p>
            </div>

            {/* Dashboard Container */}
            <div className="relative flex justify-center items-center  rounded-2xl">

              {/* Dark background frame */}
              <div className="relative max-w-7xl p-8 w-full flex justify-center items-center">

                {/* Main dashboard image */}
                <motion.img
                  initial={{ opacity: 0, y: 250 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  src={RailwayMain}
                  alt="dashboard"
                  className="rounded-xl relative z-20 h-[560px] object-cover shadow-2xl"
                />

                {/* LEFT TOP CARD */}
                <motion.img
                  initial={{ opacity: 0, x: -140 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  src={etatop}
                  alt=""
                  className="hidden xl:block absolute -left-0 top-8 w-52 rounded-xl shadow-xl z-30"
                />

                {/* LEFT BOTTOM ALERT */}
                <motion.img
                  initial={{ opacity: 0, x: -140 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  src={etaalert}
                  alt=""
                  className="hidden xl:block absolute -left-0 bottom-[164px] w-[200px] rounded-xl shadow-xl z-30"
                />

                {/* RIGHT TOP CARD */}
                <motion.img
                  initial={{ opacity: 0, x: 140 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  src={etaatop}
                  alt=""
                  className="hidden xl:block absolute -right-10 top-5 w-80 rounded-xl shadow-xl z-30"
                />

                {/* RIGHT BOTTOM CARD */}
                <motion.img
                  initial={{ opacity: 0, x: 140 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  src={etaright}
                  alt=""
                  className="hidden xl:block absolute -right-[-30px] bottom-8 w-60 rounded-xl shadow-xl z-30"
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Impact */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-[#171717] font-aleo font-semibold text-3xl md:text-[36px] tracking-tight mb-4">
              Real Impact. Measurable Security.
            </h2>
            <p className="text-black font-roboto font-regular text-md max-w-2xl mx-auto">
              From faster incident response to reduced risks, CamPulse transforms surveillance into actionable intelligence that drives safer, smarter operations.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: LightningIcon,
                title: "Faster response to text situations and safety incidents",
              },
              {
                icon: PulseIcon,
                title: "Reduce instances of trespassing on railway tracks",
              },
              {
                icon: UsersFourIcon,
                title: "Better crowd and passenger flow management",
              },
              {
                icon: ShieldCheckIcon,
                title: "Secure external perimeters and boundary lines",
              },
            ].map((stat, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={100 * idx}
                className="text-center px-4"
              >
                <div className="w-12 h-12 mx-auto bg-blue-50/50 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="w-5 h-5 text-blue-600" />
                </div>
                <p className="font-roboto font-normal text-[18px] leading-[150%] tracking-[0%] text-center mb-4">
                  {stat.title}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Sub-section */}
      <section className="py-24 bg-[#FAFAFA] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <ScrollReveal direction="up" delay={100} className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EBF1FF] text-[#2563EB] text-[10px] font-bold tracking-[0.15em] uppercase">
              <span className="w-1.5 h-1.5 rotate-45 bg-[#2563EB]" />
              About Us
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <h2 className="text-center text-[#111827] font-aleo font-semibold text-3xl sm:text-4xl md:text-[40px] mb-16 tracking-tight">
              Built on <span className="text-[#2563EB] font-bold">25+ Years</span> of Infrastructure Excellence
            </h2>
          </ScrollReveal>

          <ProfileFeature
            imageSrc={founderImg}
            imageAlt="Mr. Arun Gupta - Founder and Chairman"
            profileName="Mr. Arun Gupta"
            profileDesignation="Founder and Chairman, Transline Technologies"
            title={<>CAMPULSE BY TRANSLINE<br />TECHNOLOGIES</>}
            descriptions={[
              "CamPulse is built on Transline Technologies' extensive experience in delivering large-scale, mission-critical infrastructure across India.",
              "Deep engineering capability, field-proven deployment expertise, and an unwavering commitment to seamless integration and service uptime."
            ]}
            className="mb-16  mx-auto"
          />

          {/* CTA Custom Banner for Railways */}
          <ScrollReveal
            direction="up"
            delay={300}
            className="grid grid-cols-12"
          >
            <div className="col-span-12">

              <div className="relative rounded-[20px] overflow-hidden h-[340px] flex items-center justify-center text-center shadow-xl">

                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${aboutCtaBg})` }}
                />

                <div className="absolute inset-0 bg-[#0B2A5B]/80" />

                {/* CONTENT */}
                <div className="relative z-10 max-w-6xl px-6">

                  <h2 className="text-white font-aleo font-semibold text-[50px] leading-[140%] tracking-[-0.01em] text-center leading-[1.3] mb-6">
                    Transform your industrial security <br />
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

      <Footer />
    </div>
  );
};

export default Railway;
