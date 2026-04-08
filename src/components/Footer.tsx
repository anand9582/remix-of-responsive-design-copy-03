import { ArrowUpRight, MapPin, Mail, Phone, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

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
      <footer className="bg-hero pt-16 pb-0 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center">
                  <span className="text-accent-foreground font-bold text-xs">C</span>
                </div>
                <div>
                  <span className="text-hero-foreground font-display font-bold text-base tracking-tight">CAMPULSE</span>
                  <p className="text-hero-muted text-[9px] leading-none -mt-0.5">By Transline Technologies</p>
                </div>
              </div>
              <p className="text-hero-muted text-xs leading-relaxed mb-5">
                AI-powered unified security & smart infrastructure platform by Transline Technologies.
              </p>
              <div className="space-y-3 text-hero-muted text-xs">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                  <span>23A, Shivaji Marg, Moti Nagar, Karampura Industrial Area, New Delhi, 110015</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  <span>marketing@campulse.in</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 shrink-0" />
                  <span>+91 7303828700</span>
                </div>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-hero-foreground font-display font-bold text-sm mb-4 uppercase tracking-wider">Product</h4>
              <ul className="space-y-2.5">
                {productLinks.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-hero-muted hover:text-hero-foreground text-xs transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="text-hero-foreground font-display font-bold text-sm mb-4 uppercase tracking-wider">Industries</h4>
              <ul className="space-y-2.5">
                {industryLinks.map((l) => (
                  <li key={l}>
                    <a href="#industries" className="text-hero-muted hover:text-hero-foreground text-xs transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources + Company */}
            <div>
              <h4 className="text-hero-foreground font-display font-bold text-sm mb-4 uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2.5 mb-6">
                {resourceLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-hero-muted hover:text-hero-foreground text-xs transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
              <h4 className="text-hero-foreground font-display font-bold text-sm mb-4 uppercase tracking-wider">Company</h4>
              <ul className="space-y-2.5">
                {companyLinks.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-hero-muted hover:text-hero-foreground text-xs transition-colors">{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-4">
            <p className="text-hero-muted text-xs">
              2025 © CamPulse. Powered by Transline Technologies Limited
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-hero-muted hover:text-hero-foreground transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
              </a>
              <span className="text-hero-muted/30">|</span>
              <a href="#" className="text-hero-muted hover:text-hero-foreground text-xs transition-colors">Privacy Policy</a>
              <span className="text-hero-muted/30">|</span>
              <a href="#" className="text-hero-muted hover:text-hero-foreground text-xs transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Large watermark text */}
        <div className="relative h-24 sm:h-32 overflow-hidden">
          <p className="absolute bottom-0 left-1/2 -translate-x-1/2 text-[8rem] sm:text-[12rem] font-display font-bold text-white/[0.03] leading-none whitespace-nowrap select-none pointer-events-none">
            CamPulse
          </p>
        </div>
      </footer>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-accent/90 ${
          showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </>
  );
};

export default Footer;
