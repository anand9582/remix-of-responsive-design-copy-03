import { Target, ScanEye } from "lucide-react";
import { useRef, useEffect } from "react";
import { useInView, animate } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import founderImg from "@/assets/founder.jpg";
import controlRoomImg from "@/assets/control-room.png";
import logoT from "@/assets/logo-t.png";

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

const AboutUs = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Badge Block */}
        <ScrollReveal direction="up" delay={100} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EBF1FF] text-[#2563EB] text-[10px] font-bold tracking-[0.15em] uppercase">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#2563EB]" />
            About Us
          </span>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal direction="up" delay={200}>
          <h2 className="text-center text-[#111827] font-display font-semibold text-3xl sm:text-4xl md:text-[40px] mb-16 tracking-tight">
            Built on <span className="text-[#2563EB] font-bold">25+ Years</span> of Infrastructure Excellence
          </h2>
        </ScrollReveal>

        {/* Stats Row with Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mb-24 px-4 lg:px-12">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} direction="up" delay={300 + idx * 100} className="text-center">
              <p className="text-[#111827] font-display font-bold text-3xl sm:text-4xl md:text-[42px] mb-2 tracking-tight">
                <AnimatedCounter prefix={stat.prefix} num={stat.num} suffix={stat.suffix} stringVal={stat.stringVal} />
              </p>
              <p className="text-slate-500 font-medium text-[11px] sm:text-[13px] uppercase tracking-wide">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>

        {/* Top Cards Row */}
        <div className="grid md:grid-cols-12 gap-6 mb-8">

          {/* Founder Card */}
          <ScrollReveal direction="left" delay={100} className="md:col-span-5 relative  rounded-md  overflow-hidden h-[380px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-200">
            <img
              src={founderImg}
              alt="Mr. Arun Gupta - Founder and Chairman"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              width={640}
              height={640}
            />
            {/* Floating text box as shown in screenshot */}
            <div className="absolute bottom-5 left-5 right-5 rounded 
              bg-[#131313]/30 backdrop-blur-[43.5px] 
              p-3 pb-6 shadow-xl"
            >
              <p className="text-white  font-roboto font-medium text-md sm:text-md leading-tight mb-0.5">
                Mr. Arun Gupta
              </p>

              <p className="text-neutral-300 font-roboto font-medium   text-sm sm:text-sm mt-1 tracking-wide">
                Founder and Chairman, Transline Technologies
              </p>
            </div>
          </ScrollReveal>

          {/* Description Card */}
          <ScrollReveal direction="right" delay={200} className="md:col-span-7 rounded-md  bg-gradient-to-br from-[#1b44c8] to-[#0a2365] p-10 sm:p-12 flex flex-col justify-center relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            {/* Logo Watermark Decoration */}
            <div className="absolute -top-[-15px] -right-[-15px]  pointer-events-none ">
              <img
                src={logoT}
                alt="Logo"
                className="h-16 md:h-[69px] mb-1 object-contain"
              />
            </div>

            <h3 className="text-white font-calistoga font-medium text-xl sm:text-[30px] md:text-[30px] uppercase tracking-wide mb-8 leading-[1.3] relative z-10 shadow-black/10 text-shadow-sm max-w-2xl">
              CAMPULSE BY TRANSLINE<br />TECHNOLOGIES
            </h3>

            <div className="space-y-6 relative z-10 font-sans max-w-2xl">
              <p className="text-blue-50/90 font-roboto font-regular text-base sm:text-[16px] leading-relaxed font-normal">
                CamPulse is built on Transline Technologies' extensive experience in delivering large-scale, mission-critical infrastructure across industries.
              </p>
              <p className="text-blue-50/90 font-roboto font-regular text-base sm:text-[16px] leading-relaxed font-normal">
                It brings together cameras, access control, and on-ground systems into one unified platform—helping organizations monitor better, respond faster, and stay in control across all locations.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Cards Row */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">

          {/* Mission */}
          <ScrollReveal direction="up" delay={100} className="rounded-xl sm:rounded-[20px] bg-white p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-[48px] h-[48px] rounded-2xl bg-[#F0F5FF] flex items-center justify-center shrink-0">
                <Target className="w-[22px] h-[22px] text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <span className="text-[#2563EB] font-medium text-[15px] uppercase tracking-wide mt-0.5">Our Mission</span>
            </div>
            <p className="text-neutral-600 font-roboto font-regular text-[16px] sm:text-[16px] leading-[1.7]">
              To simplify and strengthen security operations by connecting systems, improving visibility, and enabling faster, more effective response.
            </p>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal direction="up" delay={200} className="rounded-xl sm:rounded-[20px] bg-white p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-[48px] h-[48px] rounded-2xl bg-[#F4F4FF] flex items-center justify-center shrink-0">
                <ScanEye className="w-[22px] h-[22px] text-[#4F46E5]" strokeWidth={1.5} />
              </div>
              <span className="text-[#4F46E5] font-medium text-[15px] uppercase tracking-wide mt-0.5">Our Vision</span>
            </div>
            <p className="text-neutral-600 font-roboto font-regular text-[16px] sm:text-[16px] leading-[1.7] font-normal">
              To create intelligent infrastructure where security systems move beyond monitoring to actively supporting safer, smarter environments.
            </p>
          </ScrollReveal>

          {/* One Platform Card */}
          <ScrollReveal direction="up" delay={300} className="relative rounded-xl sm:rounded-[20px] overflow-hidden h-[260px] md:h-auto shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-white/10 group">
            <img
              src={controlRoomImg}
              alt="One Platform Total Control"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={640}
              height={512}
            />
            {/* Dramatic dark overlay */}
            <div className="absolute inset-0 bg-[#060B14]/70" />

            <div className="absolute inset-0 flex items-center justify-center p-8">
              <h3 className="text-white font-display font-medium text-[32px] sm:text-[40px] xl:text-[44px] text-center leading-[1.1] tracking-tight drop-shadow-2xl">
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
