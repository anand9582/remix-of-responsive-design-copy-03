import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowUpRight, Train, Factory, Landmark, Fuel, Warehouse, ShoppingCart, GraduationCap, Heart } from "lucide-react";
import { useScrolledPast } from "@/hooks/use-scroll-animation";
import logo from "@/assets/logo.png";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "About us", href: "#about" },
  { label: "Our Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries", hasDropdown: true },
  { label: "FAQ", href: "#faq" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blogs", href: "#blogs" },
];

const industryItems = [
  { name: "Railways & Transport Infrastructure", desc: "Real-time crowd monitoring & intrusion detection.", icon: Train, href: "/railway" },
  { name: "Manufacturing & Industrial Facilities", desc: "Perimeter security & operational visibility.", icon: Factory, href: "/manufacturing" },
  { name: "Banking & Financial Institutions", desc: "Fraud detection & secure access control.", icon: Landmark, href: "#industries" },
  { name: "Oil & Gas", desc: "Hazard monitoring & remote asset security.", icon: Fuel, href: "#industries" },
  { name: "Logistics & Warehousing", desc: "Theft prevention & inventory surveillance.", icon: Warehouse, href: "#industries" },
  { name: "Retail & Large Commercial Chains", desc: "Loss prevention & customer behavior insights.", icon: ShoppingCart, href: "#industries" },
  { name: "Education Campuses & Universities", desc: "Campus-wide safety & access management.", icon: GraduationCap, href: "#industries" },
  { name: "Hospitals & Healthcare Networks", desc: "Patient safety & restricted area monitoring.", icon: Heart, href: "#industries" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const scrolled = useScrolledPast(50);

  return (
    <nav
      className={`w-full z-50 fixed top-0 left-0 right-0 transition-all duration-300 ${scrolled
        ? ""
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between transition-all duration-300 px-6 h-16 bg-white border border-white/20 rounded-full mt-4 shadow-lg">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div>
              <img
                src={logo}
                alt="logo"
                className="h-9 w-auto object-contain"
              />
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setDesktopDropdownOpen(true)}
                  onMouseLeave={() => setDesktopDropdownOpen(false)}
                >
                  <button className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors flex items-center gap-1 outline-none">
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${desktopDropdownOpen ? "rotate-180" : ""}`} />
                  </button>

                  {desktopDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 min-w-[560px] grid grid-cols-2 gap-1">
                        {industryItems.map((item) => {
                          const Icon = item.icon;
                          return (
                            <a
                              key={item.name}
                              href={item.href}
                              className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-accent hover:text-accent-foreground transition-colors"
                            >
                              <div className="w-9 h-9 rounded-lg bg-gray-100 group-hover/item:bg-accent-foreground/20 flex items-center justify-center flex-shrink-0 transition-colors">
                                <Icon className="w-[18px] h-[18px] text-accent group-hover/item:text-accent-foreground transition-colors" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-gray-900 group-hover/item:text-accent-foreground leading-tight">{item.name}</p>
                                <p className="text-xs text-gray-500 group-hover/item:text-accent-foreground/70 mt-0.5 leading-snug">{item.desc}</p>
                              </div>
                            </a>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-roboto font-regular text-slate-700 hover:text-slate-900 text-sm transition-colors flex items-center gap-1"
                >
                  {link.label}
                </a>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="#login" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
              Login
            </a>
            <Button className="group h-9 
              bg-[linear-gradient(96.6deg,#2563EB_5.01%,#153885_92.14%)] 
              hover:bg-primary hover:text-primary-foreground
              text-accent-foreground rounded-full px-4 text-sm font-semibold gap-2 
              transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] 
              hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.04] active:scale-[0.97]">
              Book a Demo
            </Button>
          </div>

          {/* Mobile sidebar */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden text-gray-900">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-hero border-l border-white/10 p-0 flex flex-col">
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-sm">C</span>
                  </div>
                  <span className="text-hero-foreground font-display font-bold text-lg tracking-tight">CAMPULSE</span>
                </div>
                <SheetClose asChild>
                  <button className="text-hero-muted hover:text-hero-foreground transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </SheetClose>
              </div>

              <div className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.label}>
                      <button
                        onClick={() => setIndustriesOpen(!industriesOpen)}
                        className="w-full flex items-center gap-3 text-hero-muted hover:text-hero-foreground hover:bg-white/5 text-sm font-medium py-3 px-4 rounded-lg transition-all"
                      >
                        {link.label}
                        <ChevronDown className={`w-3.5 h-3.5 ml-auto transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""}`} />
                      </button>
                      {industriesOpen && (
                        <div className="ml-2 space-y-0.5 mt-1">
                          {industryItems.map((item) => {
                            const Icon = item.icon;
                            return (
                              <a
                                key={item.name}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-start gap-3 text-hero-muted hover:text-hero-foreground hover:bg-white/5 text-xs font-medium py-2.5 px-3 rounded-lg transition-all"
                              >
                                <Icon className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                                <div>
                                  <p className="font-semibold text-xs">{item.name}</p>
                                  <p className="text-[10px] opacity-60 mt-0.5">{item.desc}</p>
                                </div>
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-3 text-hero-muted hover:text-hero-foreground hover:bg-white/5 text-sm font-medium py-3 px-4 rounded-lg transition-all"
                    >
                      {link.label}
                    </a>
                  )
                )}
              </div>

              <div className="px-4 pb-6 space-y-3 border-t border-white/10 pt-4">
                <a
                  href="#login"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center text-hero-muted hover:text-hero-foreground text-sm font-medium py-2.5 rounded-full border border-white/10 transition-colors"
                >
                  Login
                </a>
                <Button
                  onClick={() => setMobileOpen(false)}
                  className="w-full bg-cta hover:bg-cta/90 text-cta-foreground rounded-full text-sm font-semibold"
                >
                  Book a Demo
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
