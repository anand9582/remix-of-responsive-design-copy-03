import logo1 from "../assets/trust-logo1.png";
import logo2 from "../assets/trust-logo2.png";
import logo3 from "../assets/trust-logo3.png";
import logo4 from "../assets/trust-logo4.png";
import logo5 from "../assets/trust-logo5.png";
import logo6 from "../assets/trust-logo6.png";
import logo7 from "../assets/trust-logo7.png";
import logo8 from "../assets/trust-logo8.png";

const logos = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo1,
  logo2,
  logo3,
];

const TrustedBy = () => {
  const allLogos = [...logos, ...logos];

  return (
    <section className="bg-background py-16 sm:py-20 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <p className="text-center font-roboto font-normal text-[16px] leading-[150%] tracking-normal text-gray-400">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto overflow-hidden">

        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Slider */}
        <div className="flex items-center animate-marquee-left w-max">
          {allLogos.map((logo, i) => (
            <div
              key={i}
              className="w-48 sm:w-64 shrink-0 flex items-center justify-center   transition-opacity"
            >
              <img
                src={logo}
                alt="Trusted partner logo"
                className="max-h-12 sm:max-h-16 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
