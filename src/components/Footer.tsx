import { ArrowUpRight, MapPin, Mail, Phone, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import logowhite from "@/assets/logowhite.png";
import { Link, useLocation } from "react-router-dom";

const productLinks = [
  { label: "Overview", href: "#what-is-campulse" },
  { label: "Smart Search", href: "#solutions" },
  { label: "Unified Device Management", href: "#solutions" },
  { label: "Real-Time Threat Detection", href: "#solutions" },
  { label: "Predictive Maintenance", href: "#solutions" },
  { label: "Adaptive Streaming", href: "#solutions" },
  { label: "Multi-Language Interface", href: "#solutions" },
];

const industryLinks = [
  { name: "Railways & Transport Infrastructure", href: "/railway" },
  { name: "Manufacturing & Industrial Facilities", href: "/manufacturing" },
  { name: "Banking & Financial Institutions", href: "/banking" },
  { name: "Oil & Gas", href: "/oil-gas" },
  { name: "Logistics & Warehousing", href: "/logistics" },
  { name: "Retail & Large Commercial Chains", href: "/retail" },
  { name: "Education Campuses & Universities", href: "/education" },
  { name: "Hospitals & Healthcare Networks", href: "/healthcare" },
];

const resourceLinks = [
  { label: "Blog", href: "#" },
  { label: "FAQs", href: "#faq" },
  { label: "Compliance & Certifications", href: "#" },
];

const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Contact us", href: "#" },
];

const Footer = () => {
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  const industryPages = [
    "/railway",
    "/manufacturing",
    "/banking",
    "/oil-gas",
    "/logistics",
    "/retail",
    "/education",
    "/healthcare",
    "/pricing",
  ];

  const isInnerPage = industryPages.includes(location.pathname);

  useEffect(() => {
    const handle = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#03071c] via-[#05153f] to-[#0d3899] lg:bg-gradient-to-br lg:from-[#1347B9] lg:via-[#011C3C] lg:to-[#010D25] pt-16 relative overflow-hidden font-sans border-t border-[#2563EB]/40 lg:border-[#3B82F6]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 lg:gap-y-14 lg:gap-y-8 gap-y-6 lg:pb-12 pb-4 border-b border-white/10">

            {/* Column 1: Brand Info */}
            <div className="lg:pr-8">
              <div className="flex items-center mb-6">
                <img src={logowhite} alt="CamPulse by Transline Technologies" className="w-[155px] h-[36px] object-contain object-left" />
              </div>
              <p className="text-neutral-100 font-roboto font-regular text-[16px] lg:text-[14px] leading-[1.6] lg:mb-8 mb-6 pr-4">
                AI-powered unified security & smart infrastructure platform by Transline Technologies.
              </p>
              <div className="space-y-4 text-[#9DB2D6] text-[16px] lg:text-[14px]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white/50" />
                  <span className="font-roboto font-regular text-[16px] lg:text-[14px]  text-slate-400 leading-[21px] tracking-[0.005em]">23A, Shivaji Marg, Moti Nagar,<br />Karampura Industrial Area,<br />New Delhi, 110015</span>
                </div>
                <div className="flex items-center gap-3 font-roboto font-regular">
                  <Mail className="w-4 h-4 shrink-0 text-white/50" />
                  <span>marketing@campulse.in</span>
                </div>
                <div className="flex items-center gap-3 font-roboto font-regular">
                  <Phone className="w-4 h-4 shrink-0 text-white/50" />
                  <span className="tracking-wide">+91 7303828700</span>
                </div>
              </div>
            </div>

            {/* Column 2: PRODUCT */}
            <div>
              <h4 className="text-white font-sans font-bold text-[16px] lg:text-[14px] lg:mb-6 mb-2 uppercase tracking-wider">Product</h4>
              <ul className="lg:space-y-1.5 space-y-2">
                {productLinks.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith("#") ? (
                      <a href={isInnerPage ? `/${l.href}` : l.href} className="font-roboto font-regular   text-slate-400 leading-[21px] tracking-[0.005em] hover:text-white text-[16px] lg:text-[14px] transition-colors">
                        {l.label}
                      </a>
                    ) : (
                      <Link to={l.href} className="font-roboto font-regular   text-slate-400 leading-[21px] tracking-[0.005em] hover:text-white text-[16px] lg:text-[14px] transition-colors">
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: INDUSTRIES */}
            <div>
              <h4 className="text-white  font-roboto font-medium text-[16px] lg:text-[14px] lg:mb-6 mb-2 uppercase tracking-wider">Industries</h4>
              <ul className="lg:space-y-1.5 space-y-2">
                {industryLinks.map((l) => (
                  <li key={l.name}>
                    <Link to={l.href} className="font-roboto font-regular   text-slate-400 leading-[21px] tracking-[0.005em] hover:text-white text-[16px] lg:text-[14px] transition-colors">{l.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: RESOURCES & COMPANY */}
            <div>
              <h4 className="text-white font-roboto font-medium text-[14px] lg:mb-6 mb-2 uppercase tracking-wider">Resources</h4>
              <ul className="lg:space-y-1.5 space-y-2 mb-4 lg:mb-6">
                {resourceLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href.startsWith("#") && isInnerPage ? `/${l.href}` : l.href}
                      className="font-roboto  font-regular   text-slate-400 leading-[21px] tracking-[0.005em] hover:text-white text-[16px] lg:text-[14px] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
              <h4 className="text-white font-roboto font-regular text-[16px] lg:text-[14px] lg:mb-6 mb-2 uppercase tracking-wider">Company</h4>
              <ul className="lg:space-y-3.5 space-y-2">
                {companyLinks.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href.startsWith("#") && isInnerPage ? `/${l.href}` : l.href}
                      className="font-roboto font-regular   text-slate-400 leading-[21px] tracking-[0.005em] hover:text-white text-[16px] lg:text-[14px] transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between lg:py-6 py-4 gap-4">
            <p className="font-roboto font-regular   text-slate-400 leading-[21px] tracking-[0.005em] text-[14px] tracking-wide">
              {new Date().getFullYear()} @ CamPulse. Powered by Transline Technologies Limited
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="text-[#9DB2D6] hover:text-white transition-colors  p-1 rounded-sm">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
              </a>
              <span className="text-[#9DB2D6]/80">|</span>
              <a href="#" className="hover:text-white font-roboto font-regular   text-slate-400 leading-[21px] tracking-[0.005em] text-[16px] lg:text-[14px] transition-colors">Privacy Policy</a>
              <span className="text-[#9DB2D6]/80">|</span>
              <a href="#" className=" hover:text-white font-roboto font-regular   text-slate-400 leading-[21px] tracking-[0.005em] text-[16px] lg:text-[14px] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Bottom radial glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[150%] md:w-[100%] h-[150px] md:h-[250px] bg-blue-500/20 blur-[80px] rounded-full pointer-events-none z-0 lg:hidden" />

        {/* Large Background Watermark Text positioned behind bottom bar overlay */}
        <div className="w-full flex justify-center pb-0 pt-8 sm:pt-0 overflow-hidden pointer-events-none select-none relative z-0 translate-y-[3%] pl-2">
          <p className="font-dmSerif text-[25vw] xl:text-[340px] font-medium text-white/[0.09] leading-[0.75] tracking-normal">
            CamPulse
          </p>
        </div>
      </footer>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-[#1E3A8A] text-white flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-[#1E3A8A]/90 ${showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};

export default Footer;
