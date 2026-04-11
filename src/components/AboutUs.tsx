import { Target, Eye } from "lucide-react";
import { useRef, useEffect } from "react";
import { useInView, animate } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import founderImg from "@/assets/founder.jpg";
import controlRoomImg from "@/assets/control-room.jpg";

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
          <ScrollReveal direction="left" delay={100} className="md:col-span-5 relative rounded-xl sm:rounded-[20px] overflow-hidden h-[380px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-200">
            <img
              src={founderImg}
              alt="Mr. Arun Gupta - Founder and Chairman"
              className="w-full h-full object-cover object-center"
              loading="lazy"
              width={640}
              height={640}
            />
            {/* Floating text box as shown in screenshot */}
            <div className="absolute bottom-5 left-5 right-5 rounded-[14px] bg-[#1a1b1ecc]/80 backdrop-blur-md p-5 pb-6 shadow-xl border border-white/10">
              <p className="text-white font-sans font-bold text-lg sm:text-[19px] leading-tight mb-0.5">Mr. Arun Gupta</p>
              <p className="text-white/80 font-medium text-[13px] sm:text-[14px] mt-1 tracking-wide">Founder and Chairman, Transline Technologies</p>
            </div>
          </ScrollReveal>

          {/* Description Card */}
          <ScrollReveal direction="right" delay={200} className="md:col-span-7 rounded-xl sm:rounded-[20px] bg-gradient-to-br from-[#1b44c8] to-[#0a2365] p-10 sm:p-14 flex flex-col justify-center relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
            {/* Logo Watermark Decoration */}
            <div className="absolute -top-4 -right-4 opacity-[0.05] pointer-events-none rotate-6">
              <svg width="250" height="250" viewBox="0 0 100 100" fill="white" xmlns="http://www.w3.org/2000/svg">
                 {/* Abstract Logo Shape Based on Screenshot Watermark */}
                 <rect x="15" y="25" width="45" height="20" rx="8" />
                 <rect x="65" y="25" width="20" height="60" rx="8" />
              </svg>
            </div>

            <h3 className="text-white font-display font-semibold text-2xl sm:text-[32px] md:text-[38px] uppercase tracking-wide mb-8 leading-[1.3] relative z-10 shadow-black/10 text-shadow-sm max-w-2xl">
              CAMPULSE BY TRANSLINE<br />TECHNOLOGIES
            </h3>
            
            <div className="space-y-6 relative z-10 font-sans max-w-2xl">
              <p className="text-blue-50/90 text-base sm:text-[17px] leading-relaxed font-normal">
                CamPulse is built on Transline Technologies' extensive experience in delivering large-scale, mission-critical infrastructure across industries.
              </p>
              <p className="text-blue-50/90 text-base sm:text-[17px] leading-relaxed font-normal">
                It brings together cameras, access control, and on-ground systems into one unified platform—helping organizations monitor better, respond faster, and stay in control across all locations.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Cards Row */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          
          {/* Mission */}
          <ScrollReveal direction="up" delay={100} className="rounded-xl sm:rounded-[20px] border border-slate-100 bg-white p-8 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow">
            <div className="flex items-center gap-4 mb-7">
              <div className="w-[48px] h-[48px] rounded-[14px] bg-[#EEF2FF] flex items-center justify-center shrink-0 border border-[#E0E7FF]">
                <Target className="w-[22px] h-[22px] text-[#3B82F6]" strokeWidth={2.5} />
              </div>
              <span className="text-[#3B82F6] font-bold text-[14px] uppercase tracking-widest leading-none mt-1">Our Mission</span>
            </div>
            <p className="text-[#4B5563] text-[15px] leading-relaxed font-medium">
              To simplify and strengthen security operations by connecting systems, improving visibility, and enabling faster, more effective response.
            </p>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal direction="up" delay={200} className="rounded-xl sm:rounded-[20px] border border-slate-100 bg-white p-8 sm:p-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-shadow">
            <div className="flex items-center gap-4 mb-7">
              <div className="w-[48px] h-[48px] rounded-[14px] bg-[#F5F3FF] flex items-center justify-center shrink-0 border border-[#EDE9FE]">
                <Eye className="w-[22px] h-[22px] text-[#8B5CF6]" strokeWidth={2.5} />
              </div>
              <span className="text-[#8B5CF6] font-bold text-[14px] uppercase tracking-widest leading-none mt-1">Our Vision</span>
            </div>
            <p className="text-[#4B5563] text-[15px] leading-relaxed font-medium">
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
