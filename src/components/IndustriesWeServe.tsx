import { useState } from "react";
import { Diamond, Train, Factory, Landmark, Fuel, Warehouse, ShoppingBag, GraduationCap, Hospital, ArrowUpRight } from "lucide-react";
import industryRailways from "@/assets/industry-railways.jpg";
import industryManufacturing from "@/assets/industry-manufacturing.jpg";
import industryBanking from "@/assets/industry-banking.jpg";

const industries = [
  {
    icon: Train,
    label: "Railways & Transport Infrastructure",
    title: "Railways & Transport Infrastructure",
    description: "Monitor platforms, tracks, and entry points with real-time alerts for crowding, trespassing, and unattended objects. Enable centralized control rooms to track and respond to incidents instantly across locations.",
    image: industryRailways,
  },
  {
    icon: Factory,
    label: "Manufacturing & Industrial Facilities",
    title: "Manufacturing & Industrial Facilities",
    description: "Complex factories and plants operate with significant safety, compliance, and throughput challenges. AI-powered monitoring detects safety violations, unauthorized access, and equipment anomalies in real time.",
    image: industryManufacturing,
  },
  {
    icon: Landmark,
    label: "Banking & Financial Institutions",
    title: "Banking & Financial Institutions",
    description: "Protect branches, ATMs, and vaults with intelligent surveillance that detects suspicious behavior, unauthorized access attempts, and ensures compliance with security protocols across all locations.",
    image: industryBanking,
  },
  {
    icon: Fuel,
    label: "Oil & Gas",
    title: "Oil & Gas",
    description: "Monitor critical infrastructure across remote and hazardous locations with AI-powered perimeter security, intrusion detection, and safety compliance monitoring for refineries and pipelines.",
    image: industryRailways,
  },
  {
    icon: Warehouse,
    label: "Logistics & Warehousing",
    title: "Logistics & Warehousing",
    description: "Track inventory movement, detect theft, and monitor loading docks with intelligent video analytics. Automate security workflows across large warehouse networks and distribution centers.",
    image: industryManufacturing,
  },
  {
    icon: ShoppingBag,
    label: "Retail & Large Commercial Chains",
    title: "Retail & Large Commercial Chains",
    description: "Prevent shrinkage, monitor customer flow, and optimize store operations with AI-driven video analytics across hundreds of retail locations from a single unified platform.",
    image: industryBanking,
  },
  {
    icon: GraduationCap,
    label: "Education Campuses & Universities",
    title: "Education Campuses & Universities",
    description: "Ensure student safety across sprawling campuses with intelligent monitoring of entry points, common areas, and parking lots. Detect unusual behavior and enable rapid incident response.",
    image: industryRailways,
  },
  {
    icon: Hospital,
    label: "Hospitals & Healthcare Networks",
    title: "Hospitals & Healthcare Networks",
    description: "Protect patients, staff, and sensitive areas with AI surveillance that monitors restricted zones, detects unauthorized access, and ensures compliance with healthcare security standards.",
    image: industryManufacturing,
  },
];

const IndustriesWeServe = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industries[activeIndex];

  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Left side - Badge, Heading & Tabs */}
          <div className="lg:w-[340px] flex-shrink-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
              <Diamond className="w-3.5 h-3.5 text-primary" fill="currentColor" />
              <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                Industries We Serve
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground leading-snug mb-8">
              Security That{" "}
              <span className="text-primary italic">Adapts</span> to Every Industry
            </h2>

            {/* Tab list */}
            <div className="space-y-1">
              {industries.map((industry, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-sm font-medium transition-all duration-200 ${
                    i === activeIndex
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <industry.icon className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                  {industry.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right side - Content */}
          <div className="flex-1 min-w-0">
            {/* Title row */}
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground">
                {active.title}
              </h3>
              <a
                href="#"
                className="flex items-center gap-1 text-primary text-sm font-medium hover:underline flex-shrink-0 mt-1"
              >
                Learn more
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xl">
              {active.description}
            </p>

            {/* Dashboard image */}
            <div className="rounded-xl overflow-hidden border border-border shadow-lg">
              <img
                src={active.image}
                alt={active.title}
                className="w-full object-cover"
                loading="lazy"
                width={960}
                height={640}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesWeServe;
