import logo1 from "../assets/trust-logo1.png";
import logo2 from "../assets/trust-logo2.png";
import logo3 from "../assets/trust-logo3.png";
import logo4 from "../assets/trust-logo4.png";
import logo5 from "../assets/trust-logo5.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
];

const TrustedBy = () => {
  // Tripling the logos ensures a very smooth and long continuous marquee without gaps
  const allLogos = [...logos, ...logos, ...logos];

  return (
    <section className="bg-white py-16 sm:py-10 border-t border-slate-100 overflow-hidden relative">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-10">
        <p className="text-center font-roboto font-normal text-base leading-[150%] tracking-normal text-gray-400 uppercase">
          Trusted By Industry Leaders
        </p>
      </div>

      <div className="relative w-full max-w-7xl mx-auto overflow-hidden">

        {/* Left Side Blur / Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Right Side Blur / Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Slider */}
        <div className="flex items-center animate-marquee-left w-max">
          {allLogos.map((logo, i) => (
            <div
              key={i}
              className="w-48 sm:w-64 shrink-0 flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`Trusted partner logo ${i + 1}`}
                className="max-h-8 sm:max-h-12 w-auto object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
