import { ArrowUpRight, MapPin, Mail, Phone, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import logowhite from "@/assets/logowhite.png";

const productLinks = [
  "Overview",
  "Smart Search",
  "Unified Device Management",
  "Real-Time Threat Detection",
  "Predictive Maintenance",
  "Adaptive Streaming",
  "Multi-Language Interface",
];

const industryLinks = [
  "Railways & Transport Infrastructure",
  "Manufacturing & Industrial Facilities",
  "Banking & Financial Institutions",
  "Oil & Gas",
  "Logistics & Warehousing",
  "Retail & Large Commercial Chains",
  "Education Campuses & Universities",
  "Hospitals & Healthcare Networks",
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

  useEffect(() => {
    const handle = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#06337A] via-[#031B4A] to-[#010D25] pt-16 relative overflow-hidden font-sans border-t border-[#3B82F6]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">

          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-14 pb-12 border-b border-white/10">

            {/* Column 1: Brand Info */}
            <div className="lg:pr-8">
              <div className="flex items-center mb-6">
                <img src={logowhite} alt="CamPulse by Transline Technologies" className="w-[155px] h-[36px] object-contain object-left" />
              </div>
              <p className="text-[#9DB2D6] font-roboto font-regular text-[13px] leading-[1.6] mb-8 pr-4">
                AI-powered unified security & smart infrastructure platform by Transline Technologies.
              </p>
              <div className="space-y-4 text-[#9DB2D6] text-[13px]">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-white/50" />
                  <span className="font-roboto font-regular leading-relaxed">23A, Shivaji Marg, Moti Nagar,<br />Karampura Industrial Area,<br />New Delhi, 110015</span>
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
              <h4 className="text-white font-sans font-bold text-[13px] mb-6 uppercase tracking-wider">Product</h4>
              <ul className="space-y-3.5">
                {productLinks.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-[#9DB2D6] font-roboto font-regular hover:text-white text-[13px] transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: INDUSTRIES */}
            <div>
              <h4 className="text-white  font-roboto font-medium text-[13px] mb-6 uppercase tracking-wider">Industries</h4>
              <ul className="space-y-3.5">
                {industryLinks.map((l) => (
                  <li key={l}>
                    <a href="#industries" className="text-[#9DB2D6] font-roboto font-regular hover:text-white text-[13px] transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: RESOURCES & COMPANY */}
            <div>
              <h4 className="text-white   font-roboto font-medium text-[13px] mb-6 uppercase tracking-wider">Resources</h4>
              <ul className="space-y-3.5 mb-8">
                {resourceLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[#9DB2D6] font-roboto font-regular hover:text-white text-[13px] transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
              <h4 className="text-white font-roboto font-medium text-[13px]  mb-6 uppercase tracking-wider">Company</h4>
              <ul className="space-y-3.5">
                {companyLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-[#9DB2D6] font-roboto font-regular hover:text-white text-[13px] transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
            <p className="text-[#9DB2D6] text-[12px] tracking-wide">
              2025 @ CamPulse. Powered by Transline Technologies Limited
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="text-[#9DB2D6] hover:text-white transition-colors border border-[#9DB2D6]/30 p-1 rounded-sm">
                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" /></svg>
              </a>
              <span className="text-[#9DB2D6]/30">|</span>
              <a href="#" className="text-[#9DB2D6] hover:text-white text-[12px] transition-colors">Privacy Policy</a>
              <span className="text-[#9DB2D6]/30">|</span>
              <a href="#" className="text-[#9DB2D6] hover:text-white text-[12px] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Large Background Watermark Text positioned behind bottom bar overlay */}
        <div className="w- flex justify-center pb-0 pt-8 sm:pt-0 overflow-hidden pointer-events-none select-none relative z-0 translate-y-[25%] pl-2">
          <p className="font-dmSerif text-[25vw] xl:text-[340px] font-medium text-white/[0.04] leading-[0.75] tracking-normal">
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
