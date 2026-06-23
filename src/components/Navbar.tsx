import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  Train,
  Factory,
  Landmark,
  Fuel,
  Warehouse,
  ShoppingCart,
  GraduationCap,
  Heart,
} from "lucide-react";

import { useScrolledPast } from "@/hooks/use-scroll-animation";

import logo from "@/assets/logo.png";
import logoCam from "@/assets/logo-cam.png";

import { Link, useLocation } from "react-router-dom";

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
  { label: "Pricing", href: "/pricing" },
  { label: "Blogs", href: "#blogs" },
];

const industryItems = [
  {
    name: "Railways & Transport Infrastructure",
    desc: "Real-time crowd monitoring & intrusion detection.",
    icon: Train,
    href: "/railway",
  },
  {
    name: "Manufacturing & Industrial Facilities",
    desc: "Perimeter security & operational visibility.",
    icon: Factory,
    href: "/manufacturing",
  },
  {
    name: "Banking & Financial Institutions",
    desc: "Fraud detection & secure access control.",
    icon: Landmark,
    href: "/banking",
  },
  {
    name: "Oil & Gas",
    desc: "Hazard monitoring & remote asset security.",
    icon: Fuel,
    href: "/oil-gas",
  },
  {
    name: "Logistics & Warehousing",
    desc: "Theft prevention & inventory surveillance.",
    icon: Warehouse,
    href: "/logistics",
  },
  {
    name: "Retail & Large Commercial Chains",
    desc: "Loss prevention & customer behavior insights.",
    icon: ShoppingCart,
    href: "/retail",
  },
  {
    name: "Education Campuses & Universities",
    desc: "Campus-wide safety & access management.",
    icon: GraduationCap,
    href: "/education",
  },
  {
    name: "Hospitals & Healthcare Networks",
    desc: "Patient safety & restricted area monitoring.",
    icon: Heart,
    href: "/healthcare",
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);

  const scrolled = useScrolledPast(50);

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
  ];

  const isIndustryPage = industryPages.includes(location.pathname);

  return (
    <nav
      className={`w-full z-50 fixed top-0 left-0 right-0 transition-all duration-300 ${scrolled ? "" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-0 lg:px-8">

        {/* Navbar Container */}
        <div
          className={`
            flex items-center justify-between transition-all duration-300 px-6 h-16 shadow-lg

            lg:bg-white
            lg:border lg:border-white/20
            lg:rounded-full
            lg:mt-4

            ${isIndustryPage
              ? "bg-[#07090e] border-b border-white/10 rounded-none mt-0"
              : "bg-white border border-white/20 rounded-full mt-4"
            }
          `}
        >

          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                className={`h-10 w-auto object-contain cursor-pointer ${isIndustryPage ? "hidden lg:block" : "block"
                  }`}
              />

              {isIndustryPage && (
                <img
                  src={logoCam}
                  alt="logo"
                  className="h-10 w-auto object-contain cursor-pointer block lg:hidden"
                />
              )}
            </Link>
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

                  <button className="text-slate-700 hover:text-blue-600 text-sm font-medium transition-colors flex items-center gap-1 outline-none">
                    {link.label}

                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${desktopDropdownOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {desktopDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">

                      <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 min-w-[700px] grid grid-rows-4 grid-flow-col gap-x-8 gap-y-1">

                        {industryItems.map((item) => {
                          const Icon = item.icon;

                          return (
                            <Link
                              key={item.name}
                              to={item.href}
                              onClick={() => setDesktopDropdownOpen(false)}
                              className="group flex items-start gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-slate-50"
                            >
                              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                                <Icon className="w-[18px] h-[18px] text-blue-600" />
                              </div>

                              <div>
                                <p className="text-sm font-semibold text-gray-900 leading-tight transition-colors duration-200 group-hover:text-blue-600">
                                  {item.name}
                                </p>

                                <p className="text-xs text-gray-500 leading-snug">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}

                      </div>
                    </div>
                  )}
                </div>
              ) : (
                link.href.startsWith("#") ? (
                  <a
                    key={link.label}
                    href={isIndustryPage ? `/${link.href}` : link.href}
                    className="text-slate-700 hover:text-blue-600 text-sm transition-colors flex items-center gap-1"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    to={link.href}
                    className="text-slate-700 hover:text-blue-600 text-sm transition-colors flex items-center gap-1"
                  >
                    {link.label}
                  </Link>
                )
              )
            )}

          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">

            <a
              href={isIndustryPage ? "/#login" : "#login"}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Login
            </a>

            <Button
              className="
                group
                h-9
                rounded-full
                px-4
                text-sm
                font-semibold
                text-white

                bg-[linear-gradient(96.6deg,#2563EB_5.01%,#153885_92.14%)]

                shadow-[0_4px_6px_-4px_rgba(0,0,0,0.10),0_10px_15px_-3px_rgba(0,0,0,0.10)]

                transition-all
                duration-300
                ease-out

                hover:bg-[linear-gradient(96.6deg,#2753B5_5.01%,#00226C_92.14%)]
                hover:shadow-[0_4px_6px_-4px_rgba(0,0,0,0.10),0_10px_15px_-3px_rgba(0,0,0,0.10)]

                active:scale-[0.98]
              "
            >
              Book a Demo
            </Button>

          </div>

          {/* Mobile Sidebar */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>

            <SheetTrigger asChild>
              <button
                className={`lg:hidden ${isIndustryPage
                  ? "text-white"
                  : "text-gray-900"
                  }`}
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-[280px] bg-[#07090e] border-l border-white/10 p-0 flex flex-col"
            >

              {/* Top */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">

                <Link to="/" onClick={() => setMobileOpen(false)}>
                  <img
                    src={logoCam}
                    alt="logo"
                    className="h-10 w-auto object-contain"
                  />
                </Link>

                <SheetClose asChild>
                  <button className="text-white">
                    <X className="w-5 h-5" />
                  </button>
                </SheetClose>

              </div>

              {/* Mobile Links */}
              <div className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">

                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.label}>

                      <button
                        onClick={() =>
                          setIndustriesOpen(!industriesOpen)
                        }
                        className="w-full flex items-center gap-3 text-neutral-300 hover:text-white hover:bg-white/5 text-sm font-medium py-3 px-4 rounded-lg transition-all"
                      >
                        {link.label}

                        <ChevronDown
                          className={`w-3.5 h-3.5 ml-auto transition-transform duration-200 ${industriesOpen ? "rotate-180" : ""
                            }`}
                        />
                      </button>

                      {industriesOpen && (
                        <div className="ml-2 space-y-0.5 mt-1">

                          {industryItems.map((item) => {
                            const Icon = item.icon;

                            return (
                              <Link
                                key={item.name}
                                to={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-start gap-3 text-neutral-300 hover:text-white hover:bg-white/5 text-xs font-medium py-2.5 px-3 rounded-lg transition-all"
                              >

                                <Icon className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />

                                <div>
                                  <p className="font-semibold text-xs">
                                    {item.name}
                                  </p>

                                  <p className="text-[10px] opacity-60 mt-0.5">
                                    {item.desc}
                                  </p>
                                </div>

                              </Link>
                            );
                          })}

                        </div>
                      )}

                    </div>
                  ) : (
                    link.href.startsWith("#") ? (
                      <a
                        key={link.label}
                        href={isIndustryPage ? `/${link.href}` : link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 text-neutral-300 hover:text-white hover:bg-white/5 text-sm font-medium py-3 px-4 rounded-lg transition-all"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center gap-3 text-neutral-300 hover:text-white hover:bg-white/5 text-sm font-medium py-3 px-4 rounded-lg transition-all"
                      >
                        {link.label}
                      </Link>
                    )
                  )
                )}

              </div>

              {/* Bottom CTA */}
              <div className="px-4 pb-6 space-y-3 border-t border-white/10 pt-4">

                <a
                  href={isIndustryPage ? "/#login" : "#login"}
                  onClick={() => setMobileOpen(false)}
                  className="block text-center text-neutral-300 hover:text-white text-sm font-medium py-2.5 rounded-full border border-white/10 transition-colors"
                >
                  Login
                </a>

                <Button
                  onClick={() => setMobileOpen(false)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold"
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