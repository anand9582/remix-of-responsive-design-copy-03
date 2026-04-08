import { Diamond, Clock, Shuffle, Eye, ShieldAlert, TrendingDown, Lock, Bell, Layers, Languages, Video } from "lucide-react";

const challenges = [
  { icon: Clock, label: "Slow Manual\nResponses" },
  { icon: Shuffle, label: "Constant App\nSwitching" },
  { icon: Eye, label: "Critical Blind\nSpots" },
  { icon: ShieldAlert, label: "Zero Threat\nPrediction" },
  { icon: TrendingDown, label: "Cannot\nScale" },
  { icon: Lock, label: "Trapped by\nVendor Lock" },
  { icon: Bell, label: "Manual Alert\nTriggers" },
  { icon: Layers, label: "Disconnected\nData Silos" },
  { icon: Languages, label: "Single Language\nLimitation" },
  { icon: Video, label: "Frequent Video\nDropouts" },
];

const row1 = challenges.slice(0, 5);
const row2 = challenges.slice(5, 10);

const MarqueeRow = ({ items, direction = "left" }: { items: typeof challenges; direction?: "left" | "right" }) => {
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden py-2">
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 md:w-56 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, hsl(222 47% 8%) 0%, transparent 100%)",
        }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 md:w-56 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, hsl(222 47% 8%) 0%, transparent 100%)",
        }}
      />

      <div
        className={`flex gap-3 sm:gap-4 w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-3 min-w-[120px] sm:min-w-[140px] h-[100px] sm:h-[110px] rounded-xl border border-white/[0.06] text-center px-3"
            style={{
              background: "linear-gradient(180deg, hsl(222 40% 14%) 0%, hsl(222 45% 10%) 100%)",
            }}
          >
            <item.icon className="w-5 h-5 text-white/50" strokeWidth={1.5} />
            <span className="text-white/70 text-xs font-medium leading-tight whitespace-pre-line">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const TheChallenge = () => {
  return (
    <section className="bg-hero py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-10 sm:py-14 overflow-hidden">
          <div className="text-center mb-10 sm:mb-12 px-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-full px-4 py-1.5 mb-5">
              <Diamond className="w-3 h-3 text-accent" fill="currentColor" />
              <span className="text-[11px] font-semibold tracking-widest uppercase text-white/60">
                The Challenge
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-hero-foreground text-2xl sm:text-3xl md:text-4xl font-display font-bold leading-snug">
              Why Traditional VMS Fails at{" "}
              <span className="italic font-serif font-normal">Scale</span>
            </h2>
          </div>

          {/* Marquee Row 1 */}
          <div className="mb-3 sm:mb-4">
            <MarqueeRow items={row1} direction="left" />
          </div>

          {/* Marquee Row 2 */}
          <div>
            <MarqueeRow items={row2} direction="right" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheChallenge;
