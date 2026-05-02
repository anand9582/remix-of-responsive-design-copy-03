import { Diamond, Network, Database, Globe, Monitor, Smartphone, Radio, HardDrive, Share2, RefreshCw, Video, Activity, Layers, Cpu, Cctv, Webcam, ShieldCheck, Link, Wifi, AlertCircle, CalendarCheck, Scan, Film, BarChart3, MonitorPlay, MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";
import { CaptureIcon, OutputIcon, EvidenceIcon, StorageIcon, ManagementIcon, DesktopIcon } from "./icons/HomeIcons";

/* ---------- Reusable atoms ---------- */
const NodeCard = ({
  icon: Icon,
  title,
  subtitle,
  description,
  children,
  className = "",
  style,
  glowing = false,
  vertical = false,
}: {
  icon: any;
  title: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  glowing?: boolean;
  vertical?: boolean;
}) => (
  <div
    className={`rounded-[14px] p-4 flex flex-col relative z-20 
      ${glowing
        ? "border-[1.5px] border-[#2A65FF] bg-[#11192A] shadow-[0_0_30px_rgba(42,101,255,0.15),inset_0_0_15px_rgba(42,101,255,0.1)]"
        : "border border-white/[0.06] bg-[#273655] shadow-xl"} 
      ${className}`}
    style={{ backdropFilter: glowing ? "none" : "blur(10px)", ...style }}
  >
    <div className={`flex ${vertical ? "flex-col items-start gap-2.5" : "items-start gap-3.5"} mb-2.5`} >
      <div className="w-[38px] h-[38px] rounded-lg flex items-center justify-center shrink-0 shadow-sm bg-blue-900">
        <Icon className="w-5 h-5 text-white" strokeWidth={glowing ? 2 : 1.75} />
      </div>
      <div className="min-w-0 pt-0.5">
        <h3 className="font-roboto font-normal text-sm tracking-wide text-blue-300 leading-none">{title}</h3>
        {subtitle && <p className="font-roboto font-normal text-slate-400 text-sm mt-1.5 leading-snug">{subtitle}</p>}
      </div>
    </div>
    {description && <p className="font-roboto font-normal text-[11px] leading-[150%] tracking-[0.015em]  text-neutral-200 leading-relaxed mt-1">{description}</p>}
    {children && <div className="mt-1">{children}</div>}
  </div>
);

const ChipIcon = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex flex-col items-center justify-center gap-2">
    <Icon className="w-4 h-4 text-blue-100" strokeWidth={1.5} />
    <span className="font-roboto font-normal text-neutral-200 text-[9.5px]  tracking-wider font-semibold">{label}</span>
  </div>
);

const Pill = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[#172554] border border-white/[0.02]">
    <Icon className="w-3.5 h-3.5 text-neutral-200 " strokeWidth={2} />
    <span className="text-neutral-200 text-[12px] font-roboto font-normal whitespace-nowrap">{label}</span>
  </div>
);

/* Solid connector line */
const Line = ({
  x1, y1, x2, y2,
}: { x1: number; y1: number; x2: number; y2: number }) => {
  const horizontal = y1 === y2;
  const left = Math.min(x1, x2);
  const top = Math.min(y1, y2);
  const width = Math.max(Math.abs(x2 - x1), 1);
  const height = Math.max(Math.abs(y2 - y1), 1);

  return (
    <div
      className="absolute z-0"
      style={{
        left: horizontal ? left : left - 0.5,
        top: horizontal ? top - 0.5 : top,
        width: horizontal ? width : 1,
        height: horizontal ? 1 : height,
        backgroundImage: `linear-gradient(${horizontal ? "90deg" : "180deg"}, #4762ED 0%, #111F65 100%)`,
      }}
    />
  );
};

const StaticBadge = ({ x, y, icon: Icon, flip = false }: { x: number; y: number; icon: any; flip?: boolean }) => (
  <div
    className="absolute w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.9)] pointer-events-none z-10"
    style={{ left: x - 10, top: y - 10 }}
  >
    <div className={flip ? "rotate-180" : ""}>
      <Icon className="w-3.5 h-3.5 text-[#0F1522]" strokeWidth={2.5} />
    </div>
  </div>
);

const TOTAL_CYCLE = 4;

const AbsBox = ({
  left, top, width, children, highlightAt = [], totalCycle = TOTAL_CYCLE,
}: {
  left: number;
  top: number;
  width: number;
  children: React.ReactNode;
  /** Time windows (in seconds within the cycle) when this box should glow */
  highlightAt?: [number, number][];
  totalCycle?: number;
}) => {
  const OFF = "0 0 0 1px rgba(42,101,255,0)";
  const ON = "0 0 24px 2px rgba(42,101,255,0.55), 0 0 0 1.5px rgba(95,150,255,0.9)";

  const rawTimes: number[] = [0];
  const rawValues: string[] = [OFF];
  const eps = 0.005;

  highlightAt
    .slice()
    .sort((a, b) => a[0] - b[0])
    .forEach(([s, e]) => {
      const ts = s / totalCycle;
      const te = e / totalCycle;
      rawTimes.push(Math.max(0, ts - eps), ts, te, Math.min(1, te + eps));
      rawValues.push(OFF, ON, ON, OFF);
    });

  if (rawTimes[rawTimes.length - 1] < 1) {
    rawTimes.push(1);
    rawValues.push(OFF);
  }

  const times: number[] = [];
  const values: string[] = [];
  rawTimes.forEach((t, i) => {
    if (times.length === 0 || t > times[times.length - 1]) {
      times.push(t);
      values.push(rawValues[i]);
    }
  });

  const shouldAnimate = highlightAt.length > 0;

  return (
    <motion.div
      className="absolute z-20 rounded-[14px]"
      style={{ left, top, width }}
      animate={shouldAnimate ? { boxShadow: values } : undefined}
      transition={
        shouldAnimate
          ? { boxShadow: { duration: totalCycle, ease: [0.22, 1, 0.36, 1], repeat: Infinity, times } }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
};

/**
 * Sequenced Packet:
 *  - Always visible (never blank) — sits at the start of its line by default.
 *  - During its time slot in the cycle, it travels along `points` to the end.
 *  - Stays at end until cycle restarts, then instantly resets to start (still visible).
 *  - Only one packet moves at a time → strict one-by-one sequence.
 */
const Packet = ({
  points, delay, duration, icon: Icon, flip = false, totalCycle = 3.5,
}: { points: [number, number][]; delay: number; duration: number; icon: any; flip?: boolean; totalCycle?: number }) => {
  const xs = points.map(p => p[0]);
  const ys = points.map(p => p[1]);

  // Distance-weighted timing for the travel portion
  let totalDist = 0;
  const dists = [0];
  for (let i = 1; i < points.length; i++) {
    const d = Math.hypot(xs[i] - xs[i - 1], ys[i] - ys[i - 1]);
    totalDist += d;
    dists.push(totalDist);
  }
  const travelTimes = dists.map(d => (totalDist === 0 ? 0 : d / totalDist));

  const tDelay = delay / totalCycle;
  const tEndTravel = (delay + duration) / totalCycle;

  // Position keyframes across the full cycle (always visible):
  // 0 → tDelay : stay at start
  // tDelay → tEndTravel : travel through all points
  // tEndTravel → ~1 : stay at end
  // 1 : snap back to start for next loop
  const xKeys: number[] = [xs[0], xs[0], ...xs.slice(1), xs[xs.length - 1], xs[0]];
  const yKeys: number[] = [ys[0], ys[0], ...ys.slice(1), ys[ys.length - 1], ys[0]];
  const posTimes: number[] = [
    0,
    tDelay,
    ...travelTimes.slice(1).map(t => tDelay + t * (tEndTravel - tDelay)),
    0.999,
    1,
  ];

  // Smooth scale breathe pulse during travel
  const scaleTimes = [0, Math.max(0, tDelay - 0.05), tDelay, (tDelay + tEndTravel) / 2, tEndTravel, Math.min(1, tEndTravel + 0.05), 1];
  const scaleKeys = [1, 1, 1, 1.25, 1, 1, 1];

  // Completely soft fade out so icon vanishes invisibly at ends and user never sees the snap back 
  const fade = 0.04;
  const opacityTimes = [0, Math.max(0, tDelay), Math.min(1, tDelay + fade), Math.max(0, tEndTravel - fade), Math.min(1, tEndTravel), 1];
  const opacityKeys = [0, 0, 1, 1, 0, 0];

  return (
    <motion.div
      className="absolute w-[22px] h-[22px] rounded-full bg-white flex items-center justify-center  z-10 pointer-events-none"
      style={{ marginLeft: -11, marginTop: -11 }}
      initial={{ x: xs[0], y: ys[0], opacity: 0, scale: 1 }}
      animate={{ x: xKeys, y: yKeys, scale: scaleKeys, opacity: opacityKeys }}
      transition={{
        x: { duration: totalCycle, ease: "linear", repeat: Infinity, times: posTimes },
        y: { duration: totalCycle, ease: "linear", repeat: Infinity, times: posTimes },
        scale: { duration: totalCycle, ease: "easeInOut", repeat: Infinity, times: scaleTimes },
        opacity: { duration: totalCycle, ease: "easeInOut", repeat: Infinity, times: opacityTimes },
      }}
    >
      <div className={flip ? "rotate-180" : ""}>
        <Icon className="w-3.5 h-3.5 text-[#0B1221]" strokeWidth={2.5} />
      </div>
    </motion.div>
  );
};

/* ---------- Component ---------- */
const EcosystemArchitecture = () => {
  const W = 1200;
  const H = 840;

  return (
    <section className="py-8 sm:py-16 border-t border-white/5 flex justify-center w-full overflow-hidden">
      <div className="relative w-full  px-2 sm:px-6">
        {/* Outer rounded box mimicking deep soft dark blue background */}
        <div className="absolute inset-x-2 sm:inset-x-8 inset-y-0 rounded-[1.6rem] border border-blue-500/10 bg-[linear-gradient(113.96deg,_#121C31_5.62%,_#1C3468_109.2%)] p-6 rounded-xl" />

        <div className="relative z-10 px-4 sm:px-8 pt-12 sm:pt-16 pb-16 w-full flex flex-col items-center">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#1A253E] border border-[#2B3F6C] rounded-full px-4 py-1.5 mb-6 shadow-md">
              <Diamond className="w-3.5 h-3.5 text-neutral-300" fill="currentColor" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-neutral-300">Enterprise Architecture</span>
            </div>
            <h2 className="text-white font-display font-bold text-3xl sm:text-4xl md:text-[42px] mb-4">
              Campulse Ecosystem
            </h2>
            <p className="text-[#8496B5] text-[15px] sm:text-[16px] max-w-2xl mx-auto font-light">
              Intelligent Enterprise Architecture Connecting Everything Securely
            </p>
          </div>

          {/* DESKTOP — fixed canvas */}
          <div className="hidden lg:flex justify-center overflow-visible w-full items-center">
            <div className="relative -ml-4" style={{ width: W, height: H }}>
              {/* Lines */}
              {/* EDGE -> CONNECTIVITY */}
              <Line x1={170} y1={150} x2={170} y2={400} />

              {/* CONNECTIVITY -> VDM */}
              <Line x1={250} y1={410} x2={380} y2={410} />
              <Line x1={380} y1={150} x2={380} y2={410} />
              <Line x1={380} y1={150} x2={510} y2={150} />

              {/* VDM <-> VMS */}
              <Line x1={565} y1={150} x2={565} y2={350} />
              <Line x1={635} y1={150} x2={635} y2={350} />

              {/* VMS <-> OUTPUT */}
              <Line x1={565} y1={420} x2={565} y2={660} />
              <Line x1={635} y1={420} x2={635} y2={660} />

              {/* VDM <-> Streaming */}
              <Line x1={680} y1={135} x2={960} y2={135} />
              <Line x1={680} y1={180} x2={960} y2={180} />

              {/* Streaming -> AI / Hybrid */}
              <Line x1={1030} y1={150} x2={1030} y2={260} />
              <Line x1={920} y1={260} x2={1120} y2={260} />
              <Line x1={920} y1={260} x2={920} y2={390} />
              <Line x1={1120} y1={260} x2={1120} y2={390} />

              {/* Hybrid -> VMS Return */}
              <Line x1={1120} y1={390} x2={1120} y2={540} />
              <Line x1={800} y1={540} x2={1120} y2={540} />
              <Line x1={800} y1={425} x2={800} y2={540} />
              <Line x1={720} y1={425} x2={800} y2={425} />

              {/* Nodes */}
              <AbsBox left={40} top={100} width={260}>
                <NodeCard icon={CaptureIcon} title="CAMPULSE EDGE" subtitle="Capture real-time data">
                  <div className="grid grid-cols-4 gap-1.5 mt-3">
                    <ChipIcon icon={Cctv} label="IP Cam" />
                    <ChipIcon icon={Webcam} label="PTZ" />
                    <ChipIcon icon={Radio} label="Sensors" />
                    <ChipIcon icon={ShieldCheck} label="Access" />
                  </div>
                </NodeCard>
              </AbsBox>

              <AbsBox left={460} top={100} width={280}>
                <NodeCard icon={Cpu} title="VDM" subtitle="Vendor Device Manager" description="Device orchestration and control" />
              </AbsBox>

              <AbsBox left={900} top={100} width={260}>
                <NodeCard icon={Layers} title="Streaming Engine" subtitle="Real-time processing" description="Ensures continuous data flow" />
              </AbsBox>

              <AbsBox left={40} top={360} width={260}>
                <NodeCard icon={Network} title="CONNECTIVITY" subtitle="Secure data transmission">
                  <div className="text-[#8B9DB8] text-[10px] font-medium tracking-widest uppercase mt-3">
                    LAN / WAN / VPN / 5G
                  </div>
                </NodeCard>
              </AbsBox>

              <AbsBox left={420} top={310} width={360}>
                <NodeCard
                  glowing={false}
                  icon={Cpu}
                  title="CAMPULSE VMS"
                  subtitle="ICCC CORE / Central command"
                  description="Central command and decision layer"
                >
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <Pill icon={Activity} label="SOP Flows" />
                    <Pill icon={AlertCircle} label="Escalation" />
                    <Pill icon={ManagementIcon} label="Incident Management" />
                    <Pill icon={EvidenceIcon} label="Evidence" />
                    <Pill icon={StorageIcon} label="Storage" />
                    <Pill icon={Layers} label="Reports" />
                  </div>
                </NodeCard>
              </AbsBox>

              <AbsBox left={840} top={340} width={160}>
                <NodeCard vertical icon={BarChart3} title="AI Analytics Engine" subtitle="Detect patterns" description="Extracts real-time insights." />
              </AbsBox>

              <AbsBox left={1040} top={340} width={180}>
                <NodeCard vertical icon={Database} title="Hybrid Storage" subtitle="Store and retrieve data" description="Secures critical video evidence." />
              </AbsBox>

              <AbsBox left={460} top={620} width={280}>
                <NodeCard icon={OutputIcon} title="OUTPUT CHANNELS" subtitle="Access anywhere">
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <ChipIcon icon={Globe} label="Web" />
                    <ChipIcon icon={DesktopIcon} label="Desktop" />
                    <ChipIcon icon={Smartphone} label="Mobile" />
                  </div>
                </NodeCard>
              </AbsBox>

              {/* Packet animation — all packets travel simultaneously, smooth & slow */}

              {/* EDGE → CONNECTIVITY */}
              <Packet icon={Link} points={[[170, 150], [170, 400]]} delay={0} duration={3.5} />

              {/* CONNECTIVITY → VDM L-shape */}
              <Packet icon={Share2} points={[[250, 410], [380, 410], [380, 150], [510, 150]]} delay={0} duration={3.5} />

              {/* VDM ↔ VMS */}
              <Packet icon={Database} points={[[565, 150], [565, 350]]} delay={0} duration={3.5} />
              <Packet icon={Wifi} flip points={[[635, 350], [635, 150]]} delay={0} duration={3.5} />

              {/* VDM ↔ Streaming */}
              <Packet icon={RefreshCw} points={[[680, 135], [960, 135]]} delay={0} duration={3.5} />
              <Packet icon={RefreshCw} flip points={[[960, 180], [680, 180]]} delay={0} duration={3.5} />

              {/* Streaming → AI / Hybrid */}
              <Packet icon={Video} points={[[1030, 150], [1030, 260], [920, 260], [920, 390]]} delay={0} duration={3.5} />
              <Packet icon={HardDrive} points={[[1030, 150], [1030, 260], [1120, 260], [1120, 390]]} delay={0} duration={3.5} />

              {/* Hybrid → return bus → VMS */}
              <Packet icon={Database} flip points={[[1120, 390], [1120, 540], [800, 540], [800, 425], [720, 425]]} delay={0} duration={3.5} />

              {/* VMS ↔ Output */}
              <Packet icon={Film} points={[[565, 420], [565, 660]]} delay={0} duration={3.5} />
              <Packet icon={Film} flip points={[[635, 660], [635, 420]]} delay={0} duration={3.5} />
            </div>
          </div>

          {/* MOBILE — stacked */}
          <div className="lg:hidden space-y-6 max-w-[400px] w-full mt-4">
            <NodeCard icon={MonitorSmartphone} title="CAMPULSE EDGE" subtitle="Capture real-time data">
              <div className="grid grid-cols-4 gap-1.5 mt-2">
                <ChipIcon icon={Cctv} label="IP Cam" />
                <ChipIcon icon={Webcam} label="PTZ" />
                <ChipIcon icon={Radio} label="Sensors" />
                <ChipIcon icon={ShieldCheck} label="Access" />
              </div>
            </NodeCard>

            <NodeCard icon={Network} title="CONNECTIVITY" subtitle="Secure data transmission">
              <div className="text-[#8B9DB8] text-[10px] font-medium tracking-widest uppercase mt-3">
                LAN / WAN / VPN / 5G
              </div>
            </NodeCard>

            <div className="flex justify-center -my-3 relative z-10"><StaticBadge x={10} y={10} icon={Share2} /></div>

            <NodeCard icon={Cpu} title="VDM" subtitle="Vendor Device Manager" description="Device orchestration and control" />

            <div className="flex flex-col items-center justify-center -my-1 space-y-4 relative z-10">
              <StaticBadge x={10} y={10} icon={Wifi} />
              <StaticBadge x={10} y={10} icon={Database} />
            </div>

            <NodeCard icon={Layers} title="Streaming Engine" subtitle="Real-time processing" description="Ensures continuous data flow" />

            <div className="flex justify-center -my-3 relative z-10"><StaticBadge x={10} y={10} icon={Database} /></div>

            <NodeCard icon={Cpu} title="CAMPULSE VMS" subtitle="ICCC CORE / Central command" description="Central command and decision layer" glowing={true}>
              <div className="grid grid-cols-2 gap-2 mt-4">
                <Pill icon={Activity} label="SOP Flows" />
                <Pill icon={AlertCircle} label="Escalation" />
                <Pill icon={CalendarCheck} label="Incident Mgmt" />
                <Pill icon={EvidenceIcon} label="Evidence" />
                <Pill icon={Database} label="Storage" />
                <Pill icon={Layers} label="Reports" />
              </div>
            </NodeCard>

            <div className="grid grid-cols-2 gap-4">
              <NodeCard icon={BarChart3} title="AI Analytics" subtitle="Detect patterns" description="Real-time insights." />
              <NodeCard icon={HardDrive} title="Hybrid Storage" subtitle="Store data" description="Secures evidence." />
            </div>

            <div className="flex flex-col items-center justify-center -my-1 space-y-4 relative z-10">
              <StaticBadge x={10} y={10} icon={Film} />
              <StaticBadge x={10} y={10} icon={Film} />
            </div>

            <NodeCard icon={MonitorPlay} title="OUTPUT CHANNELS" subtitle="Access anywhere">
              <div className="grid grid-cols-3 gap-2 mt-4">
                <ChipIcon icon={Globe} label="Web" />
                <ChipIcon icon={Monitor} label="Desktop" />
                <ChipIcon icon={Smartphone} label="Mobile" />
              </div>
            </NodeCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemArchitecture;
