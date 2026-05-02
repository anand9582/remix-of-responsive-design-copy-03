import React from 'react';
import { ArrowUpRight, TrendingDown, ShieldCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { CrowdIcon, RapidIcon } from './icons/HomeIcons';
// Background patterns
import whychosesection from "@/assets/whychosesection.png";

export interface StatInfo {
  icon: React.ElementType;
  title: string;
  desc: string;
}

interface MeasurableSecurityProps {
  badgeTitle?: string;
  titlePath1?: string;
  titlePath2?: string;
  description?: string;
  buttonText?: string;
  stats?: StatInfo[];
}

const defaultStats: StatInfo[] = [
  {
    icon: RapidIcon,
    title: "Rapid Response",
    desc: "Faster response to intrusions and safety violations",
  },
  {
    icon: TrendingDown,
    title: "Effort Reduction",
    desc: "Reduce manual monitoring effort at control centers",
  },
  {
    icon: CrowdIcon,
    title: "Crowd Optimisation",
    desc: "Improve crowd and passenger flow management efficiency",
  },
  {
    icon: ShieldCheck,
    title: "Disruption Reduction",
    desc: "Minimize service disruptions and safety-related incidents",
  },
];

const MeasurableSecurity: React.FC<MeasurableSecurityProps> = ({
  badgeTitle = "WHY CHOOSE US",
  titlePath1 = "Real Impact.",
  titlePath2 = "Measurable Security.",
  description = "From faster incident response to reduced risks, CamPulse transforms surveillance into actionable intelligence that drives safer, smarter operations.",
  buttonText = "Book a Demo",
  stats = defaultStats,
}) => {
  return (
    <section
      className="py-24 relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${whychosesection})`,
      }}
    >
      {/* Background layer with subtle blended stripes for waveform illusion */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none z-0"
        style={{
          backgroundImage: `url(${whychosesection})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-12 items-center">

        {/* Left Column */}
        <div className="lg:w-[45%] text-left">
          <ScrollReveal direction="up">
            {/* WHY CHOOSE US badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-transparent border border-gray-300 shadow-sm mb-8" style={{ background: "rgba(255,255,255,0.4)" }}>
              <span className="w-2 h-2 rotate-45 bg-blue-600" />
              <span className="text-[#2563EB] font-roboto text-[13px] font-semibold tracking-[0.1em] uppercase">{badgeTitle}</span>
            </div>

            {/* Heading */}
            <h2 className="font-aleo font-semibold text-4xl md:text-[46px] leading-[1.2] tracking-tight mb-6 text-[#171717]">
              <span className="text-[#2563EB]">{titlePath1}</span><br />
              {titlePath2}
            </h2>

            {/* Paragraph */}
            <p className="font-roboto font-regular text-[16px] text-black leading-[1.6]  mb-8">
              {description}
            </p>

            {/* Button */}
            <button className="group relative flex items-center justify-between rounded-full h-11 bg-[#1D4ED8] hover:bg-[#1e40af] text-white px-6 w-fit shadow-md transition-all duration-300">
              <span className="text-sm font-medium mr-4">{buttonText}</span>
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </button>
          </ScrollReveal>
        </div>

        {/* Right Column (Cards Grid) */}
        <div className="lg:w-[55%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {stats.map((stat, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={100 * idx}
                className="bg-white rounded-lg  p-7 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-white hover:shadow-md transition-shadow duration-300"
              >
                <div className="text-[#2563EB] mb-5">
                  <stat.icon className="w-7 h-7 stroke-[1.5]" />
                </div>
                <h3 className="font-roboto font-semibold text-[20px] text-neutral-800 mb-[8px]">{stat.title}</h3>
                <p className="text-[14px] text-[#6b7280] leading-[1.6]">{stat.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default MeasurableSecurity;
