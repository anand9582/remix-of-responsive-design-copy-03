import { Diamond, Eye, ShieldAlert, TrendingDown, Bell, Layers, Languages, Video } from "lucide-react";
import { DashboardIcon, ClockIcon, BlocksIcon, SettingsIcon, ChartIcon } from "./CustomIcons";

const challenges = [
  { icon: DashboardIcon, label: "Dashboard\nFusion" },
  { icon: ClockIcon, label: "Slow Manual\nResponses" },
  { icon: BlocksIcon, label: "Constant App\nSwitching" },
  { icon: SettingsIcon, label: "Critical Blind\nSpots" },
  { icon: ShieldAlert, label: "Zero Threat\nPrediction" },
  { icon: ChartIcon, label: "Cannot\nScale Up" },

  { icon: Bell, label: "Manual Alert\nTriggers" },
  { icon: Layers, label: "Disconnected\nData Silos" },
  { icon: Languages, label: "Single Language\nLimitation" },
  { icon: Video, label: "Frequent Video\nDropouts" },
  { icon: Eye, label: "Delayed\nInsights" },
  { icon: ShieldAlert, label: "No Real-time\nVisibility" },
];

const half = Math.ceil(challenges.length / 2);
const row1 = challenges.slice(0, half);
const row2 = challenges.slice(half);

const MarqueeRow = ({ items, direction = "left", offset = false }: { items: typeof challenges; direction?: "left" | "right", offset?: boolean }) => {
  const doubled = [...items, ...items, ...items, ...items];

  return (
    <div className={`relative overflow-hidden py-3 ${offset ? "ml-12" : ""}`}>
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 md:w-56 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, #141A27 0%, transparent 100%)",
        }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-32 md:w-56 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, #141A27 0%, transparent 100%)",
        }}
      />

      <div
        className={`flex gap-4 sm:gap-6 w-max ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="
            flex flex-col items-start justify-between
            min-w-[160px] w-[160px] h-[110px]
            rounded-lg p-5
            bg-[linear-gradient(301.12deg,#121C31_0%,#1C3468_100%)]
            transition-all duration-300 ease-out
            hover:scale-[1.05]
            hover:shadow-[0_10px_30px_rgba(0,0,0,0.4)]
            hover:brightness-110
            cursor-pointer
          "
          >
            <item.icon className="w-5 h-5 text-white" strokeWidth={1.5} />

            <span className="text-neutral-100 text-[12px] font-roboto font-normal leading-[1.5] tracking-[0.005em] whitespace-pre-line text-left">
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
    <section className="bg-background py-16 sm:py-24">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#141A27] rounded-[32px] py-10 sm:py-24 overflow-hidden shadow-2xl relative">

          <div className="text-center mb-14 px-4">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#121C36]   rounded-full px-7 py-3 mb-8">
              <Diamond className="w-3.5 h-3.5 text-white" fill="currentColor" />
              <span className="text-xs font-roboto font-medium tracking-[0.1em] text-neutral-300 uppercase">
                THE CHALLENGE
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-aleo font-semibold text-white text-3xl sm:text-4xl md:text-[40px]  leading-tight">
              Why Traditional VMS Fails at Scale
            </h2>
          </div>

          <div className="relative max-w-5xl m-auto">
            {/* Marquee Row 1 */}
            <div className="mb-4 sm:mb-6">
              <MarqueeRow items={row1} direction="left" />
            </div>

            {/* Marquee Row 2 */}
            <div>
              <MarqueeRow items={row2} direction="left" offset={true} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TheChallenge;
