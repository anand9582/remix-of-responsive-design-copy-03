import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowUpRight, Users, AlignJustify, Bell, Eye, Zap, TrendingUp, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import heroBgStripes from "@/assets/hero-bg-stripes.png";
import RailwayMain from "@/assets/railway-dashbaord.png";
import founderImg from "@/assets/founder.jpg";
import logoT from "@/assets/logo-t.png";
import etatop from "@/assets/eta-top.png";
import etaalert from "@/assets/eta-left.png";
import statsCard from "@/assets/Bannerlefticon.png";
import gridCard from "@/assets/grid-card.png";
import faceMatchCard from "@/assets/face-match-card.png";
import railwayBg from "@/assets/railway-bg.jpg";
import { SecurityCameraIcon, TrackCameraIcon, CrowdIcon, WarningIcon, MonitorPlayIcon, ProhibitIcon } from "@/components/icons/RailwayIcons";

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
            <div className="px-5 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
              <span className="text-xs tracking-widest text-white/80 font-semibold">
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
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full overflow-hidden">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-[#111827] font-display font-semibold text-3xl sm:text-4xl md:text-[40px] tracking-tight mb-4">
              Centralized Railway Control Dashboard
            </h2>
            <p className="text-slate-500 text-lg">
              Manage multiple stations, access controls, and video streams from a single interface.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="relative mt-12 mx-auto flex justify-center items-center w-full  rounded-lg bg-[#111827] p-8 pb-12 shadow-2xl">
              {/* Similar representation of dashboard video area */}
              <div className="w-full flex justify-center items-center relative z-20">
                  <img
                  src={RailwayMain}
                className=" rounded-xl shadow-xl z-30 h-[575px]"
                alt=""
              />
              </div>

              {/* Add decorative elements matching the dashboard shot if needed */}
              <img
                src={etatop}
                className="hidden xl:block absolute -left-10 top-20 w-44 rounded-xl shadow-xl z-30"
                alt=""
              />
              <img
                src={etaalert}
                className="hidden xl:block absolute -left-12 bottom-10 w-[300px] rounded-xl shadow-xl z-30"
                alt=""
              />
              <img
                src={gridCard}
                className="hidden xl:block absolute -right-6 top-10 w-48 rounded-xl shadow-xl z-30"
                alt=""
              />
              <img
                src={faceMatchCard}
                className="hidden xl:block absolute -right-16 bottom-16 w-80 rounded-xl shadow-xl z-30"
                alt=""
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Real Impact */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="text-center mb-16">
            <h2 className="text-[#111827] font-display font-semibold text-3xl md:text-[36px] tracking-tight mb-4">
              Real Impact. Measurable Security.
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              How CamPulse enhances responses to emergencies, flow capacity & overall system resilience.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Faster response to text situations and safety incidents",
              },
              {
                icon: TrendingUp,
                title: "Reduce instances of trespassing on railway tracks",
              },
              {
                icon: Users,
                title: "Better crowd and passenger flow management",
              },
              {
                icon: ShieldCheck,
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
                <p className="text-sm text-gray-700 font-medium leading-relaxed">
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
            <h2 className="text-center text-[#111827] font-display font-semibold text-3xl sm:text-4xl md:text-[40px] mb-16 tracking-tight">
              Built on <span className="text-[#2563EB] font-bold">25+ Years</span> of Infrastructure Excellence
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-12 gap-6 mb-16 max-w-5xl mx-auto">
            {/* Founder Card */}
            <ScrollReveal direction="left" delay={100} className="md:col-span-5 relative rounded-xl overflow-hidden h-[380px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-200">
              <img
                src={founderImg}
                alt="Mr. Arun Gupta - Founder and Chairman"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded bg-[#131313]/50 backdrop-blur-md p-4 shadow-xl">
                <p className="text-white font-roboto font-semibold text-base mb-1">
                  Mr. Arun Gupta
                </p>
                <p className="text-neutral-300 font-roboto text-sm tracking-wide">
                  Founder and Chairman, Transline Technologies
                </p>
              </div>
            </ScrollReveal>

            {/* Description Card */}
            <ScrollReveal direction="right" delay={200} className="md:col-span-7 rounded-xl bg-gradient-to-br from-[#1b44c8] to-[#0a2365] p-10 flex flex-col justify-center relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
              <div className="absolute -top-[-15px] -right-[-15px] pointer-events-none">
                <img
                  src={logoT}
                  alt="Logo"
                  className="h-20 opacity-20 object-contain"
                />
              </div>

              <h3 className="text-white font-calistoga font-medium text-xl sm:text-[28px] uppercase tracking-wide mb-6 leading-[1.3] relative z-10 max-w-2xl">
                CAMPULSE BY TRANSLINE<br />TECHNOLOGIES
              </h3>

              <div className="space-y-4 relative z-10 font-sans max-w-2xl">
                <p className="text-blue-50/90 font-roboto text-base leading-relaxed">
                  CamPulse is built on Transline Technologies' extensive experience in
                  delivering large-scale, mission-critical infrastructure across India.
                </p>
                <p className="text-blue-50/90 font-roboto text-base leading-relaxed">
                  Deep engineering capability, field-proven deployment expertise,
                  and an unwavering commitment to seamless integration and service uptime.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* CTA Custom Banner for Railways */}
          <ScrollReveal direction="up" delay={300} className="max-w-5xl mx-auto">
            <div className="relative w-full rounded-[24px] overflow-hidden bg-gradient-to-r from-[#0F172A] to-[#1E3A8A] py-16 px-6 sm:px-12 flex flex-col items-center justify-center text-center shadow-2xl">
              <div className="absolute inset-0 bg-[url('@/assets/hero-bg-stripes.png')] bg-cover opacity-10 mix-blend-overlay"></div>
              <div className="absolute inset-x-0 bottom-0 top-auto h-1/2 bg-blue-600/10 blur-[80px]" />

              <h2 className="text-white font-calistoga text-3xl sm:text-4xl md:text-[42px] font-normal leading-[1.2] tracking-wide mb-8 z-10">
                Transform your railways security <br className="hidden sm:block" />
                with CamPulse.
              </h2>

              <button className="group relative flex transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02] active:scale-[0.98] z-10">
                <div className="absolute inset-0 rounded-full opacity-60 bg-white/20 blur-md transition-all group-hover:bg-blue-500/30 group-hover:blur-lg" />
                <div className="relative flex items-center h-[52px] rounded-full bg-white shadow-xl overflow-hidden pr-2 pl-[50px]">
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-600 to-indigo-700" />

                  <span className="absolute left-1.5 w-[40px] h-[40px] rounded-full bg-blue-600 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:bg-white/20 group-hover:left-[calc(100%-48px)]">
                    <ArrowUpRight className="w-5 h-5 text-white transition-transform duration-500 group-hover:rotate-45" />
                  </span>

                  <span className="relative z-10 font-semibold text-[15px] px-6 text-slate-800 group-hover:text-white transition-colors duration-300">
                    Book a Demo
                  </span>
                </div>
              </button>
            </div>
          </ScrollReveal>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Railway;
