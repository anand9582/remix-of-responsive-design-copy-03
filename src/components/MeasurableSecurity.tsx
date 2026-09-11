import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, TrendingDown, ShieldCheck, Diamond } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { CrowdIcon, RapidIcon } from './icons/HomeIcons';
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
  buttonHref?: string;
  stats?: StatInfo[];
  backgroundImage?: string;
  sectionClassName?: string;
  cardClassName?: string;
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
  buttonHref = "/pricing?type=demo",
  stats = defaultStats,
  backgroundImage = whychosesection,
  sectionClassName = "",
  cardClassName = "",
}) => {
  return (
    <section
      className={`lg:py-16 py-12 lg:pt-20 lg:pb-20 relative overflow-hidden bg-cover bg-center bg-no-repeat ${sectionClassName}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-multiply pointer-events-none z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">

        {/* LEFT */}
        <div className="lg:w-[40%] text-center md:text-left">
          <ScrollReveal direction="up">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DBEAFE66] border border-gray-300 shadow-sm lg:mb-8 mb-4"
            >
              <Diamond className="w-3 h-3 text-blue-700" fill="currentColor" />
              <span className="text-[14px] lg:text-md font-roboto font-semibold leading-[150%] tracking-[0.005em] uppercase text-blue-700">
                {badgeTitle}
              </span>
            </div>


            {/* Heading */}
            <h2 className="font-aleo font-semibold text-[26px] md:text-[40px] leading-[1.5] lg:leading-[1.2] tracking-tight text-center md:text-left lg:mb-6 mb-2 text-[#171717]">
              <span className="text-blue-700">
                {titlePath1}
              </span>
              <br />
              {titlePath2}
            </h2>

            {/* Description */}
            <p className="font-roboto  text-[16px] lg:text-[16px] text-black leading-[150%] tracking-[0.005em] lg:mb-8 mb-4 text-black">
              {description}
            </p>

            {/* Button */}
            <Link to={buttonHref}>
              <button
                className="
                    group
                    relative
                    inline-flex items-center justify-center gap-1.5 sm:gap-2
                    h-[46px] lg:h-[45px]
                    px-6 sm:px-8
                    text-[16px] sm:text-[15px]
                    font-semibold
                    text-white
                    rounded-full
                    w-auto
                    bg-[linear-gradient(90deg,#2563EB_0%,#1D4ED8_45%,#153885_100%)]
                    transition-all duration-300 ease-out
                    hover:-translate-y-[2px]
                    hover:scale-[1.02]
                    cursor-pointer
    "
              >
                <span>{buttonText}</span>

                <ArrowUpRight
                  className="
                    w-4 h-4 sm:w-4 sm:h-4
                    transition-transform duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                  strokeWidth={2.5}
                />
              </button>
            </Link>
          </ScrollReveal>
        </div>

        {/* RIGHT */}
        <div className="lg:w-[60%]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {stats.map((stat, idx) => (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={100 * idx}
                className={`
                  bg-white
                  rounded-lg
                  p-5
                  lg:p-7
                  shadow-[0_2px_10px_rgba(0,0,0,0.02)]
                  border
                  border-white
                  hover:shadow-md
                  transition-shadow
                  duration-300
                  ${cardClassName}
                `}
              >
                <div className="text-[#2563EB] lg:mb-3 mb-2 lg:mb-1">
                  <stat.icon className="w-8 h-8 stroke-[1.5]" />
                </div>

                <h3 className="font-roboto font-medium lg:text-lg text-[20px] text-neutral-800 mb-1">
                  {stat.title}
                </h3>

                <p className="font-roboto text-[16px] lg:text-[14px] text-neutral-500 leading-[150%] tracking-[0.005em]">
                  {stat.desc}
                </p>
              </ScrollReveal>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default MeasurableSecurity;