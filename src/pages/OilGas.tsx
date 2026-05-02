import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ProfileFeature from "@/components/ProfileFeature";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

// Icons 
import { ShieldCheck, Flame, Lock, Briefcase, BellRing, MonitorPlay, Shield, Zap, TrendingDown, ClipboardCheck } from "lucide-react";

import aboutCtaBg from "@/assets/aboutcta-bg.jpg";
import DashboardMain from "@/assets/railway-dashbaord.png";
import founderImg from "@/assets/founder.jpg";
import oilGasBg from "@/assets/oil-bg.jpg"; // Using the closest asset

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

// Dashboard overlays
import etatop from "@/assets/eta-top.png";
import etaalert from "@/assets/eta-left.png";
import etaatop from "@/assets/etatop.png";
import etaright from "@/assets/etaright.png";

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const OilGas = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section
        className="relative overflow-hidden pt-36 pb-24 flex items-center"
        style={{ height: "753px" }}
      >
        {/* Swiper Background Container */}
        <div className="absolute inset-0 z-0">
          <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            effect="fade"
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            loop={true}
            className="w-full h-full hero-swiper"
          >
            {[oilGasBg, DashboardMain, aboutCtaBg].map((img, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${img})` }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="absolute inset-0 bg-black opacity-60 mix-blend-normal z-10" />
        <div className="relative z-20 max-w-7xl mx-auto px-4 text-center w-full">
          <div className="flex justify-center mb-6">
            <div className="px-5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
              <span className="text-[10px] tracking-[0.2em] text-white font-bold uppercase items-center block">
                INDUSTRY SOLUTIONS
              </span>
            </div>
          </div>
          <motion.h1
            className="text-white font-aleo font-semibold text-[46px] md:text-[64px] leading-[1.1] tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE_OUT }}
          >
            CamPulse for Oil & <br />
            Gas Security
          </motion.h1>

          {/* Dotted Separator */}
          <motion.div
            className="flex items-center justify-center max-w-[500px] mx-auto mb-5 opacity-80"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
          >
            <div className="flex-1 border-t-[1.5px] border-dashed border-[#3b82f6]"></div>
            <div className="mx-4 relative w-2 h-2">
              <div className="absolute inset-0 border-[1.5px] border-[#3b82f6] rotate-45"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-dashed border-[#3b82f6] opacity-30"></div>
            </div>
            <div className="flex-1 border-t-[1.5px] border-dashed border-[#3b82f6]"></div>
          </motion.div>

          <motion.p
            className="text-white font-roboto font-regular md:text-[15px] max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE_OUT }}
          >
            Protect critical assets, monitor infrastructure, and ensure operational safety with zero downtime.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT }}
            className="flex justify-center"
          >
            <button className="flex items-center justify-between rounded-full h-12 bg-white shadow-xl hover:shadow-2xl transition-all duration-300 w-auto px-1.5 pr-6 cursor-pointer hover:scale-105 active:scale-95">
              <span className="w-9 h-9 rounded-full bg-[#1D4ED8] flex items-center justify-center mr-3">
                <ArrowUpRight className="w-4 h-4 text-white" />
              </span>
              <span className="text-[#1D4ED8] font-semibold text-sm">Book a Demo</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* How CamPulse Powers Oil & Gas */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <h2 className="text-center text-[#111827] font-aleo font-semibold text-3xl sm:text-4xl md:text-[40px] mb-4 tracking-tight">
              How CamPulse powers Oil & Gas
            </h2>
            <p className="text-center font-roboto font-regular text-neutral-500 flex justify-center text-lg max-w-2xl mx-auto mb-16">
              Specifically architected to handle the challenging out-door conditions and scaling requirements of Oil & Gas.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Perimeter Monitoring",
                desc: "Detect breaches and prevent theft across vast perimeters.",
              },
              {
                icon: Flame,
                title: "Fire & Hazard Detection",
                desc: "Identify fire, smoke, and gas leaks instantaneously.",
              },
              {
                icon: Lock,
                title: "Restricted Zone Monitoring",
                desc: "Track authorized access and presence in high-risk areas.",
              },
              {
                icon: Briefcase,
                title: "Asset Protection",
                desc: "Guard remote wellheads, valves, and exposed pipeline stretches.",
              },
              {
                icon: BellRing,
                title: "Incident Alerts",
                desc: "Get instant notifications for safety protocol deviations.",
              },
              {
                icon: MonitorPlay,
                title: "Centralized Monitoring",
                desc: "Manage multiple disparate production sites from one single platform.",
              },
            ].map((feature, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={100 * idx}
                className="bg-white rounded-md p-8 shadow-lg hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl flex items-center mb-2">
                  <feature.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-roboto font-medium tex-neutral-800 mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Centralized Energy Control Dashboard */}
      <section className="py-8 relative overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-[#0B1220] rounded-md py-16">
            <div className="text-center mb-2">
              <h2 className="text-white font-aleo font-semibold text-2xl sm:text-4xl md:text-[40px] tracking-tight mb-4">
                Centralized Energy Control Dashboard
              </h2>
              <p className="text-slate-300 text-lg max-w-[31rem] mx-auto">
                Monitor remote sites, track alerts, and manage incidents from a unified interface.
              </p>
            </div>

            <div className="relative flex justify-center items-center rounded-2xl">
              <div className="relative max-w-7xl p-8 w-full flex justify-center items-center">
                {/* Main dashboard image */}
                <motion.img
                  initial={{ opacity: 0, y: 120 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  src={DashboardMain}
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

      {/* Safer Operations. Reduced Risk. */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-[#171717] font-aleo font-semibold text-3xl md:text-[36px] tracking-tight mb-4">
              Safer Operations. Reduced Risk.
            </h2>
            <p className="text-black font-roboto font-regular text-md max-w-2xl mx-auto">
              From faster incident response to proactive compliance monitoring, CamPulse helps you maintain high-stakes security operations seamlessly.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: "Enhance perimeter protection in harsh environments",
              },
              {
                icon: Zap,
                title: "Faster response to safety incidents",
              },
              {
                icon: TrendingDown,
                title: "Reduce operational downtime due to security breaches",
              },
              {
                icon: ClipboardCheck,
                title: "Strengthen environmental and worker safety compliance",
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
                <p className="font-roboto font-normal text-[15px] leading-[150%] tracking-[0%] text-center mb-4">
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
            className="mb-16 mx-auto max-w-5xl"
          />

          {/* CTA Custom Banner for Oil & Gas */}
          <ScrollReveal
            direction="up"
            delay={300}
            className="grid grid-cols-12 max-w-5xl mx-auto"
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
                  <h2 className="text-white font-aleo font-semibold text-[50px] leading-[140%] tracking-[-0.01em] text-center mb-6">
                    Secure your oil & gas operations <br />
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

export default OilGas;
