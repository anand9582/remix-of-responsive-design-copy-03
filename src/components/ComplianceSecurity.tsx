import { CircleCheck, Diamond } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

import GradeIcon1 from "@/assets/GradeIcon1.png";
import GradeIcon2 from "@/assets/GradeIcon2.png";
import GradeIcon3 from "@/assets/GradeIcon3.png";
import GradeIcon4 from "@/assets/GradeIcon4.png";
import GradeIcon5 from "@/assets/GradeIcon5.png";

const cards = [
  {
    icon: <img src={GradeIcon1} alt="ISO/IEC 27001:2013" className="h-[40px] sm:h-[56px] w-auto object-contain transform transition-transform group-hover:scale-110 duration-300" />,
    title: "ISO/IEC 27001:2013",
    desc: "Securing your data with excellence.",
  },
  {
    icon: <img src={GradeIcon2} alt="CMMI Maturity Level 5" className="h-[40px] sm:h-[56px] w-auto object-contain transform transition-transform group-hover:scale-110 duration-300" />,
    title: "CMMI Maturity Level 5",
    desc: "Proven capability in service delivery.",
  },
  {
    icon: <img src={GradeIcon3} alt="ISO 9001:2015" className="h-[40px] sm:h-[56px] w-auto object-contain transform transition-transform group-hover:scale-110 duration-300" />,
    title: "ISO 9001:2015",
    desc: "Commitment to world-class quality.",
  },
  {
    icon: <img src={GradeIcon4} alt="ISO 14001:2015" className="h-[40px] sm:h-[56px] w-auto object-contain transform transition-transform group-hover:scale-110 duration-300" />,
    title: "ISO 14001:2015",
    desc: "Driving sustainable, eco-friendly operations.",
  },
  {
    icon: <img src={GradeIcon5} alt="ISO/IEC 20000-1:2018" className="h-[40px] sm:h-[56px] w-auto object-contain transform transition-transform group-hover:scale-110 duration-300" />,
    title: "ISO/IEC 20000-1:2018",
    desc: "Delivering superior IT service management.",
  },
];

const bottomFeatures = [
  "Compliance Ready",
  "End-to-End Encryption",
  "Zero-Trust Architecture",
  "Redundant Systems",
  "Proactive Hardening",
];

const ComplianceSecurity = () => {
  return (
    <section className="py-10 sm:py-10 bg-[#FAFAFA]">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        {/* Dark Container */}
        <ScrollReveal direction="up" delay={100} className="bg-[#131B2A] rounded-xl md:rounded-sm px-3 md:px-12 py-8 md:py-16  relative overflow-hidden ">

          {/* Badge */}


          <ScrollReveal direction="up" delay={100} className="flex justify-center  mb-2 lg:mb-8">
            <div className="inline-flex items-center gap-2 bg-[#121C36] rounded-full px-7 py-3 mb-3">
              <Diamond className="w-3 h-3 md:w-3.4 md:h-3.4 text-neutral-300" fill="currentColor" />
              <span className="text-[15px] md:text-[14px] font-roboto font-medium leading-[150%] tracking-[0.005em] text-neutral-300 uppercase">
                Compliance and Certifications
              </span>
            </div>
          </ScrollReveal>

          {/* Heading */}
          <h2 className="text-center text-white font-aleo font-bold text-[26px]  md:text-[40px] mb-8 md:mb-16 tracking-wide text-shadow-sm">
            Built with Enterprise Grade Security
          </h2>

          {/* Cards Layout - MOBILE (Screenshot Match) */}
          <div className="flex md:hidden flex-wrap justify-center  gap-x-3 gap-y-4 w-full mt-4">
            {cards.map((card, i) => (
              <div key={i} className="bg-white rounded-[8px] p-2 py-3 lg:p-4 text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1 w-[calc(50%-0.375rem)]">
                <div className="mb-2 h-[40px] flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="font-roboto font-medium text-[#0f172a] text-[18px] lg:text-[18px] mb-[4px] mt-1 lg:mt-0 tracking-wide">{card.title}</h3>
                <p className="text-neutral-500 font-roboto text-[16px] lg:text-[16px]  foleading-[150%] tracking-[0.005em] font-medium">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Cards Layout - DESKTOP (Original) */}
          <div className="hidden md:flex flex-col gap-12 w-full mt-4">
            {/* Top Row - 3 cards */}
            <div className="grid grid-cols-3 gap-8 w-full">
              {cards.slice(0, 3).map((card, i) => (
                <div key={i} className="bg-white rounded-sm p-8 text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1">
                  <div className="mb-4 h-[60px] flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h3 className="text-neutral-800 font-roboto font-medium text-[14px] md:text-[18px] mb-[6px] tracking-wide">{card.title}</h3>
                  <p className="text-neutral-500  font-roboto text-[12px] md:text-[14px] leading-relaxed font-regular">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* Bottom Row - 2 cards centered */}
            <div className="flex flex-row justify-center gap-5 w-full">
              {cards.slice(3, 5).map((card, i) => (
                <div key={i} className="bg-white rounded-[12px] p-6 text-center flex flex-col items-center justify-center w-[calc(33.333%-0.8rem)] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-1">
                  <div className="mb-4 h-[60px] flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h3 className="text-neutral-800 font-roboto font-medium text-[14px] md:text-[18px] mb-[6px] tracking-wide">{card.title}</h3>
                  <p className="text-neutral-500  font-roboto text-[12px] md:text-[14px] leading-relaxed font-regular">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Bottom Features Row - MOBILE */}
        <ScrollReveal direction="up" delay={300} className="flex md:hidden mt-8 flex-wrap justify-center items-center gap-y-3 px-1 max-w-[400px] mx-auto">
          {bottomFeatures.map((feat, idx) => (
            <div key={idx} className={`flex items-center gap-1.5 group px-1 ${idx === 4 ? 'w-full justify-center mt-1' : 'w-1/2 justify-start'}`}>
              <CircleCheck className="w-[14px] h-[14px] text-[#10B981] group-hover:scale-110 transition-transform shrink-0" strokeWidth={2.5} />
              <span className="font-roboto font-medium text-neutral-700 leading-[150%] tracking-[0.005em] text-[14px] lg-text-[12px]">{feat}</span>
            </div>
          ))}
        </ScrollReveal>

        {/* Bottom Features Row - DESKTOP */}
        <ScrollReveal direction="up" delay={300} className="hidden md:flex mt-14 flex-wrap justify-center items-center gap-x-8 gap-y-5 px-4">
          {bottomFeatures.map((feat, idx) => (
            <div key={idx} className="flex items-center gap-2 group">
              <CircleCheck className="w-[18px] h-[18px] text-[#10B981] group-hover:scale-110 transition-transform" strokeWidth={2.5} />
              <span className="font-roboto font-medium text-neutral-700  leading-[150%] tracking-[0.005em] text-[14px] lg-text-[12px]">{feat}</span>
            </div>
          ))}
        </ScrollReveal>

      </div>
    </section>
  );
};

export default ComplianceSecurity;
