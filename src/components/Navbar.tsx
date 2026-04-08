import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowUpRight } from "lucide-react";
import { useScrolledPast } from "@/hooks/use-scroll-animation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { label: "About us", href: "#about" },
  { label: "Our Solutions", href: "#solutions" },
  { label: "Industries", href: "#industries", hasDropdown: true },
  { label: "FAQ", href: "#faq" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blogs", href: "#blogs" },
];

const industryItems = [
  "Railways & Transport Infrastructure",
  "Manufacturing & Industrial Facilities",
  "Banking & Financial Institutions",
  "Oil & Gas",
  "Logistics & Warehousing",
  "Retail & Smart Stores",
  "Education Campuses & Universities",
  "Hospitals & Healthcare Networks",
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const scrolled = useScrolledPast(50);

  return (
    <nav
      className={`w-full z-50 fixed top-0 left-0 right-0 transition-all duration-300 ${
        scrolled
          ? "bg-hero/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center justify-between transition-all duration-300 px-6 h-16 bg-white border border-white/20 rounded-full mt-4 shadow-lg"
        >
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-bold text-sm">C</span>
            </div>
            <div>
              <span className="text-gray-900 font-display font-bold text-lg tracking-tight">CAMPULSE</span>
              <p className="text-gray-500 text-[10px] leading-none -mt-0.5">By Transline Technologies</p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger asChild>
                    <button className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors flex items-center gap-1 outline-none">
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="bg-white border-gray-200 shadow-lg min-w-[240px]"
                    sideOffset={12}
                  >
                    {industryItems.map((item) => (
                      <DropdownMenuItem
                        key={item}
                        className="text-gray-600 hover:text-gray-900 focus:text-gray-900 focus:bg-gray-100 cursor-pointer text-sm py-2.5"
                        asChild
                      >
                        <a href="#industries">{item}</a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors flex items-center gap-1"
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
            <Button className="group bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-5 text-sm font-semibold gap-2 transition-all duration-300">
              Book a Demo
              <span className="w-5 h-5 rounded-full bg-accent-foreground/20 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowUpRight className="w-3 h-3 text-accent-foreground transition-transform duration-300 group-hover:-translate-y-0.5" />
              </span>
            </Button>
          </div>

          {/* Mobile sidebar toggle */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <button className="lg:hidden text-gray-900">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[280px] bg-hero border-l border-white/10 p-0 flex flex-col"
            >
              {/* Sidebar header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-accent-foreground font-bold text-sm">C</span>
                  </div>
                  <span className="text-hero-foreground font-display font-bold text-lg tracking-tight">
                    CAMPULSE
                  </span>
                </div>
                <SheetClose asChild>
                  <button className="text-hero-muted hover:text-hero-foreground transition-colors">
                    <X className="w-5 h-5" />
                  </button>
                </SheetClose>
              </div>

              {/* Sidebar links */}
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
                        <div className="ml-4 space-y-0.5 mt-1">
                          {industryItems.map((item) => (
                            <a
                              key={item}
                              href="#industries"
                              onClick={() => setMobileOpen(false)}
                              className="block text-hero-muted hover:text-hero-foreground hover:bg-white/5 text-xs font-medium py-2 px-4 rounded-lg transition-all"
                            >
                              {item}
                            </a>
                          ))}
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

              {/* Sidebar footer */}
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
