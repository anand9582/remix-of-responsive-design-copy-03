import { Target, ScanEye } from "lucide-react";
import { useRef, useEffect } from "react";
import { useInView, animate } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import founderImg from "@/assets/founder.jpg";
import controlRoomImg from "@/assets/control-room.png";
import logoT from "@/assets/logo-t.png";
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

const AboutUs = () => {
  return (
    <section id="about" className="py-6 sm:py-28 bg-[#FAFAFA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Badge Block */}
        <ScrollReveal direction="up" delay={100} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#EBF1FF] text-[#2563EB] text-[10px] font-bold tracking-[0.15em] uppercase">
            <span className="w-1.5 h-1.5 rotate-45 bg-[#2563EB] font-roboto text-lg font-medium" />
            About Us
          </span>
        </ScrollReveal>

        {/* Heading */}
        <ScrollReveal direction="up" delay={200}>
          <h2 className="text-center text-[#111827] font-roboto font-semibold  text-xll lg:text-xll leading-[1.5] text-center  text-3xl sm:text-4xl md:text-[40px]  tracking-tight">
            Built on <span className="text-[#2563EB] font-bold">25+ Years</span> of Infrastructure Excellence
          </h2>
        </ScrollReveal>

        {/* Stats Row with Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10 mb-24 px-4 lg:px-12 mt-20">
          {stats.map((stat, idx) => (
            <ScrollReveal key={idx} direction="up" delay={300 + idx * 100} className="text-center">
              <p className="text-[#111827] font-display font-bold text-3xl sm:text-4xl md:text-[42px] mb-2 tracking-tight">
                <AnimatedCounter prefix={stat.prefix} num={stat.num} suffix={stat.suffix} stringVal={stat.stringVal} />
              </p>
              <p className="font-roboto text-neutral-600 font-medium text-[11px] sm:text-[13px] uppercase tracking-wide">{stat.label}</p>
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
          <ScrollReveal direction="up" delay={100} className="rounded-xl sm:rounded-[20px] bg-white p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-[48px] h-[48px] rounded-2xl bg-[#F0F5FF] flex items-center justify-center shrink-0">
                <Target className="w-[22px] h-[22px] text-[#2563EB]" strokeWidth={1.5} />
              </div>
              <span className="text-[#2563EB] font-roboto font-medium text-[15px] uppercase tracking-wide mt-0.5">Our Mission</span>
            </div>
            <p className="text-neutral-600 font-roboto font-regular text-[16px] sm:text-[16px] leading-[1.7]">
              To simplify and strengthen security operations by connecting systems, improving visibility, and enabling faster, more effective response.
            </p>
          </ScrollReveal>

          {/* Vision */}
          <ScrollReveal direction="up" delay={100} className="rounded-xl sm:rounded-[20px] bg-white p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-[48px] h-[48px] rounded-2xl bg-[#F4F4FF] flex items-center justify-center shrink-0">
                <ScanEye className="w-[22px] h-[22px] text-[#4F46E5]" strokeWidth={1.5} />
              </div>
              <span className="text-[#4F46E5] font-roboto font-medium text-[15px] uppercase tracking-wide mt-0.5">Our Vision</span>
            </div>
            <p className="text-neutral-600 font-roboto font-regular text-[16px] sm:text-[16px] leading-[1.7] font-normal">
              To create intelligent infrastructure where security systems move beyond monitoring to actively supporting safer, smarter environments.
            </p>
          </ScrollReveal>

          {/* One Platform Card */}
          <ScrollReveal direction="up" delay={100} className="relative rounded-xl sm:rounded-[20px] overflow-hidden  md:h-auto shadow-[0_4px_25px_rgba(0,0,0,0.06)] border border-white/10 group">
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
