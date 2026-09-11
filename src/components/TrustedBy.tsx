import logo1 from "@/assets/trust-logo1.png";
import logo2 from "@/assets/trust-logo2.png";
import logo3 from "@/assets/trust-logo3.png";
import logo4 from "@/assets/trust-logo4.png";
import logo5 from "@/assets/trust-logo5.png";
import logo6 from "@/assets/trust-logo6.png";
import logo7 from "@/assets/trust-logo7.png";
import logo8 from "@/assets/trust-logo8.png";
import logo9 from "@/assets/trust-logo9.png";
import logo10 from "@/assets/trust-logo10.png";
import logo11 from "@/assets/trust-logo11.png";
import logo12 from "@/assets/trust-logo12.png";
import logo13 from "@/assets/trust-logo13.png";
import logo14 from "@/assets/trust-logo14.png";
import logo15 from "@/assets/trust-logo15.png";
import logo16 from "@/assets/trust-logo16.png";
import logo17 from "@/assets/trust-logo17.png";
import logo18 from "@/assets/trust-logo18.png";
import logo19 from "@/assets/trust-logo19.png";
import logo20 from "@/assets/trust-logo20.png";
import logo21 from "@/assets/trust-logo21.png";
import logo22 from "@/assets/trust-logo22.png";
import logo23 from "@/assets/trust-logo23.png";
import logo24 from "@/assets/trust-logo24.png";
import logo25 from "@/assets/trust-logo25.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  logo10,
  logo11,
  logo12,
  logo13,
  logo14,
  logo15,
  logo16,
  logo17,
  logo18,
  logo19,
  logo20,
  logo21,
  logo22,
  logo23,
  logo24,
  logo25,
];

const TrustedBy = () => {
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section className="bg-white py-10 pb-5 sm:pt-10 lg:pb-32 border-slate-100 overflow-hidden relative">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-10">
        <p className="text-center text-lg lg:text-[16px] font-roboto font-medium leading-6 text-gray-400 uppercase mb-8">
          Trusted By Industry Leaders
        </p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">

        {/* Left Side Blur / Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Right Side Blur / Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Slider */}
        <div className="flex items-center gap-8 md:gap-20 px-12 md:px-12 animate-marquee-left w-max mx-auto" style={{ animationDuration: "90s" }}>
          {allLogos.map((logo, i) => (
            <div
              key={i}
              className="flex-none flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`Trusted partner logo ${i + 1}`}
                style={{ height: "32px" }}
                className="w-auto object-contain hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
