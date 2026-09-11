import { Target, ScanEye, Diamond } from "lucide-react";
import { useRef, useEffect, ReactNode } from "react";
import { useInView, animate } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import founderImg from "@/assets/founder.jpg";
import controlRoomImg from "@/assets/control-room.png";
import railwayAboutImg from "@/assets/railway_about.png";
import CertificationStrip from "./CertificationStrip";
import ProfileFeature from "./ProfileFeature";

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

interface AboutUsProps {
  variant?: "home" | "industry";
  children?: ReactNode;
}

const AboutUs = ({ variant = "home", children }: AboutUsProps) => {
  if (variant === "industry") {
    return (
      <section className="py-12 lg:py-20 bg-[#FAFAFA] relative overflow-hidden">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Badge Block */}
          <ScrollReveal direction="up" delay={100} className="flex justify-center mb-4">
            <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-5 py-3 mb-6">
              <Diamond className="w-3 h-3 text-blue-700" fill="currentColor" />
              <span className="text-[14px] lg:text-[13px] font-roboto font-semibold tracking-widest uppercase text-blue-700">
                About Us
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <h2 className="text-center text-[#111827] font-aleo font-medium text-[26px] lg:text-[40px] leading-[1.5] text-3xl sm:text-4xl md:text-[40px] tracking-tight lg:mb-16 mb-8">
              Built on <span className="text-[#2563EB] font-bold">25+ Years</span> of Infrastructure Excellence
            </h2>
          </ScrollReveal>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 lg:mb-24 mb-14 px-4 lg:px-12 lg:mt-10 mt-5">
            {stats.map((stat, idx) => (
              <ScrollReveal key={idx} direction="up" delay={300 + idx * 100} className="text-center">
                <p className="text-black font-roboto font-semibold text-[24px] sm:text-4xl md:text-[36px] mb-1 tracking-tight">
                  <AnimatedCounter prefix={stat.prefix} num={stat.num} suffix={stat.suffix} stringVal={stat.stringVal} />
                </p>
                <p className="font-roboto text-neutral-600 font-regular text-[18px] lg:text-[16px] leading-[150%] tracking-[0.005em]">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>

          <ProfileFeature
            imageSrc={railwayAboutImg}
            variant="image"
            title={<>CAMPULSE BY TRANSLINE<br />TECHNOLOGIES</>}
            descriptions={[
              "CamPulse is built on Transline Technologies’ extensive experience in delivering large-scale, mission-critical infrastructure across industries.",
              "It brings together cameras, access control, and on-ground systems into one unified platform, helping organizations monitor better, respond faster, and stay in control across all locations."
            ]}
            className="mb-10 mx-auto max-w-7xl"
          />

          <ScrollReveal direction="up" delay={250} className="mb-20">
            <CertificationStrip />
          </ScrollReveal>

          {children}
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 pb-8 pt-8 sm:px-6 lg:px-8 lg:pt-6 lg:pb-16 relative z-10">

        <ScrollReveal direction="up" delay={100} className="flex justify-center mb-2 lg:mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-50 rounded-full px-6 py-3 mb-3">
            <Diamond className="w-3 h-3 text-blue-700" fill="currentColor" />
            <span className="text-14px lg:text-[13px] font-roboto font-medium leading-[150%] tracking-[0.005em] uppercase text-blue-700">
              About Us
            </span>
          </div>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal direction="up" delay={200}>
          <h2 className="text-center text-[#111827] font-aleo font-medium text-[26px] lg:text-[40px] leading-[1.5] text-3xl sm:text-4xl md:text-[40px] tracking-tight lg:mb-16 mb-8">
            Built on <span className="text-[#2563EB] font-bold">25+ Years of </span> Infrastructure Excellence
          </h2>
        </ScrollReveal>

        {/* Stats Row with Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 lg:mb-16 mb-14 px-4 lg:px-12 lg:mt-10 mt-5">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} direction="up" delay={300 + idx * 100} className="text-center">
              <p className="text-black font-roboto font-semibold text-[24px] sm:text-4xl md:text-[36px] mb-1 tracking-tight">
                <AnimatedCounter prefix={stat.prefix} num={stat.num} suffix={stat.suffix} stringVal={stat.stringVal} />
              </p>
              <p className="font-roboto text-neutral-600 font-regular text-[18px] lg:text-[16px] leading-[150%] tracking-[0.005em]">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* Top Cards Row */}
        <ProfileFeature
          imageSrc={founderImg}
          imageAlt="Mr. Arun Gupta - Founder and Chairman"
          profileName="Mr. Arun Gupta"
          profileDesignation="Founder and Chairman, Transline Technologies"
          title={<>CAMPULSE BY TRANSLINE<br />TECHNOLOGIES</>}
          descriptions={[
            "CamPulse is built on Transline Technologies' extensive experience in delivering large-scale, mission-critical infrastructure across industries.",
            "It brings together cameras, access control, and on-ground systems into one unified platform—helping organizations monitor better, respond faster, and stay in control across all locations."
          ]}
          className="mb-8"
        />

        {/* Bottom Cards Row */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">

          {/* Mission */}
          <ScrollReveal direction="up" delay={100} className="rounded-xl sm:rounded-1xl bg-white lg:p-8 p-4 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
            <div className="flex items-center gap-4 lg:mb-6 mb-4">
              <div className="w-[48px] h-[48px] rounded-xl bg-[#F0F5FF] flex items-center justify-center shrink-0">
                <Target className="w-[22px] h-[22px] text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <span className="text-[#2563EB] font-roboto font-medium text-[20px] lg:text-[16px] uppercase tracking-wide mt-0.5">Our Mission</span>
            </div>
            <p className="text-neutral-600 font-roboto font-regular text-[16px] lg:text-[16px] leading-[1.7]">
              To simplify and strengthen security operations by connecting systems, improving visibility, and enabling faster, more effective response.
            </p>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal direction="up" delay={100} className="rounded-xl sm:rounded-1xl bg-white lg:p-8 p-4 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
            <div className="flex items-center gap-4 lg:mb-6 mb-4">
              <div className="w-[48px] h-[48px] rounded-xl bg-[#F4F4FF] flex items-center justify-center shrink-0">
                <ScanEye className="w-[22px] h-[22px] text-[#4F46E5]" strokeWidth={1.5} />
              </div>
              <span className="text-[#4F46E5] font-roboto font-medium text-[20px] lg:text-[16px] uppercase tracking-wide mt-0.5">Our Vision</span>
            </div>
            <p className="text-neutral-600 font-roboto font-regular text-[16px] sm:text-[16px] leading-[1.7] font-normal">
              To create intelligent infrastructure where security systems move beyond monitoring to actively supporting safer, smarter environments.
            </p>
          </ScrollReveal>

          {/* One Platform Card */}
          <ScrollReveal direction="up" delay={100} className="relative rounded-xl sm:rounded-1xl overflow-hidden md:h-auto shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-white/10 group">
            <img
              src={controlRoomImg}
              alt="One Platform Total Control"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={620}
              height={412}
            />

            <div className="absolute inset-0 flex items-center justify-center p-8">
              <h3 className="text-white font-calistoga font-regular text-[28px] sm:text-[34px] xl:text-[35px] text-center leading-[1.1]">
                One Platform.<br />Total Control.
              </h3>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
