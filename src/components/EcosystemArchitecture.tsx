import { Diamond, Network, Database, Globe, Monitor, Smartphone, Radio, HardDrive, Share2, RefreshCw, Video, Activity, Layers, Cpu, Cctv, Webcam, ShieldCheck, Link, Wifi, AlertCircle, CalendarCheck, Scan, Film, BarChart3, MonitorPlay, MonitorSmartphone, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";
import { AiIcons, VideoIcons } from '@/components/CustomIcons';

// Icon aliases (replacing missing ./icons/HomeIcons module)
const CaptureIcon = MonitorSmartphone;
const OutputIcon = MonitorPlay;
const EvidenceIcon = Scan;
const StorageIcon = Database;
const ManagementIcon = ClipboardList;
const DesktopIcon = Monitor;
const EngineIcon = Layers;

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
        ? "border-[1.5px] border-[#2A65FF] bg-[#2a3a5b] shadow-[0_0_30px_rgba(42,101,255,0.15),inset_0_0_15px_rgba(42,101,255,0.1)]"
        : "border border-white/[0.06] bg-[#273655] shadow-xl"} 
      ${className}`}
    style={{ backdropFilter: glowing ? "none" : "blur(13px)", ...style }}
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

const buildRoundedPath = (points: [number, number][], r = 10) => {
  if (points.length < 2) return "";
  let d = `M${points[0][0]} ${points[0][1]}`;
  for (let i = 1; i < points.length - 1; i++) {
    const [px, py] = points[i - 1];
    const [cx, cy] = points[i];
    const [nx, ny] = points[i + 1];
    const d1x = Math.sign(cx - px), d1y = Math.sign(cy - py);
    const d2x = Math.sign(nx - cx), d2y = Math.sign(ny - cy);
    const len1 = Math.hypot(cx - px, cy - py);
    const len2 = Math.hypot(nx - cx, ny - cy);
    const rr = Math.min(r, len1 / 2, len2 / 2);
    const sx = cx - d1x * rr;
    const sy = cy - d1y * rr;
    const ex = cx + d2x * rr;
    const ey = cy + d2y * rr;
    d += ` L${sx} ${sy} Q${cx} ${cy} ${ex} ${ey}`;
  }
  const last = points[points.length - 1];
  d += ` L${last[0]} ${last[1]}`;
  return d;
};

const ConnectorPath = ({ points, r = 10 }: { points: [number, number][]; r?: number }) => (
  <path
    d={buildRoundedPath(points, r)}
    fill="none"
    stroke="#4762ED"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    vectorEffect="non-scaling-stroke"
  />
);


const StaticBadge = ({ x, y, icon: Icon, flip = false }: { x: number; y: number; icon: any; flip?: boolean }) => (
  <div
    className="absolute w-5 h-5 rounded-full bg-white hidden md:flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.9)] pointer-events-none z-10"
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

const Packet = ({
  points, delay, duration, icon: Icon, flip = false, autoRotate = true, totalCycle = 3.5,
}: { points: [number, number][]; delay: number; duration: number; icon: any; flip?: boolean; autoRotate?: boolean; totalCycle?: number }) => {
  const xs = points.map(p => p[0]);
  const ys = points.map(p => p[1]);

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

  const xKeys: number[] = [xs[0], xs[0], ...xs.slice(1), xs[xs.length - 1], xs[0]];
  const yKeys: number[] = [ys[0], ys[0], ...ys.slice(1), ys[ys.length - 1], ys[0]];
  const posTimes: number[] = [
    0,
    tDelay,
    ...travelTimes.slice(1).map(t => tDelay + t * (tEndTravel - tDelay)),
    0.999,
    1,
  ];

  const angles: number[] = [];
  for (let i = 0; i < points.length - 1; i++) {
    const dx = points[i + 1][0] - points[i][0];
    const dy = points[i + 1][1] - points[i][1];
    let angle = Math.atan2(dy, dx) * (180 / Math.PI);
    angles.push(angle);
  }
  angles.push(angles[angles.length - 1] || 0);

  for (let i = 1; i < angles.length; i++) {
    let diff = angles[i] - angles[i - 1];
    while (diff > 180) diff -= 360;
    while (diff <= -180) diff += 360;
    angles[i] = angles[i - 1] + diff;
  }

  const rotateKeys: number[] = [];
  const rotateTimes: number[] = [];
  const eps = 0.0001;

  rotateKeys.push(angles[0]);
  rotateTimes.push(0);

  for (let i = 0; i < points.length - 1; i++) {
    const tCurrent = tDelay + travelTimes[i] * (tEndTravel - tDelay);
    const tNext = tDelay + travelTimes[i + 1] * (tEndTravel - tDelay);

    let tAddStart = Math.max(tCurrent, rotateTimes[rotateTimes.length - 1] + eps);
    rotateKeys.push(angles[i]);
    rotateTimes.push(tAddStart);

    let tAddEnd = Math.max(tNext - 0.015, tAddStart + eps);
    rotateKeys.push(angles[i]);
    rotateTimes.push(tAddEnd);
  }

  if (0.999 > rotateTimes[rotateTimes.length - 1]) {
    rotateKeys.push(angles[angles.length - 1]);
    rotateTimes.push(0.999);
  }

  rotateKeys.push(angles[0]);
  rotateTimes.push(1);

  const scaleTimes = [0, Math.max(0, tDelay - 0.05), tDelay, (tDelay + tEndTravel) / 2, tEndTravel, Math.min(1, tEndTravel + 0.05), 1];
  const scaleKeys = [1, 1, 1, 1.25, 1, 1, 1];

  const fade = 0.04;
  const opacityTimes = [0, Math.max(0, tDelay), Math.min(1, tDelay + fade), Math.max(0, tEndTravel - fade), Math.min(1, tEndTravel), 1];
  const opacityKeys = [0, 0, 1, 1, 0, 0];

  return (
    <motion.div
      className="absolute w-[22px] h-[22px] rounded-full bg-white flex items-center justify-center z-10 pointer-events-none"
      style={{ marginLeft: -11, marginTop: -11 }}
      initial={{ x: xs[0], y: ys[0], opacity: 0, scale: 1, rotate: autoRotate ? angles[0] : 0 }}
      animate={{
        x: xKeys, y: yKeys, scale: scaleKeys, opacity: opacityKeys,
        ...(autoRotate ? { rotate: rotateKeys } : {})
      }}
      transition={{
        x: { duration: totalCycle, ease: "linear", repeat: Infinity, times: posTimes },
        y: { duration: totalCycle, ease: "linear", repeat: Infinity, times: posTimes },
        scale: { duration: totalCycle, ease: "easeInOut", repeat: Infinity, times: scaleTimes },
        opacity: { duration: totalCycle, ease: "easeInOut", repeat: Infinity, times: opacityTimes },
        ...(autoRotate ? { rotate: { duration: totalCycle, ease: "easeInOut", repeat: Infinity, times: rotateTimes } } : {})
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
    <section className="hidden lg:flex justify-center w-full overflow-hidden">
      <div className="relative w-full  px-2 sm:px-6">
        <div className="absolute inset-x-2 sm:inset-x-8 inset-y-0 rounded-[1.6rem] border border-blue-500/10 bg-[linear-gradient(113.96deg,_#121C31_5.62%,_#1C3468_109.2%)] p-6" />

        <div className="relative z-10 px-4 sm:px-8 pt-12 sm:pt-20  w-full flex flex-col items-center">
          {/* Header */}
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-[#1E40AF33]  rounded-full px-6 py-2 mb-6 shadow-md">
              <Diamond className="w-3 h-3 text-neutral-300" fill="currentColor" />
              <span className="text-14px lg:text-[13px]  font-roboto font-medium tracking-widest  text-neutral-300 uppercase">
                Enterprise Architecture
              </span>
            </div>
            <h2 className="text-white font-aleo font-bold text-3xl sm:text-4xl md:text-[40px] mb-4">
              Campulse Ecosystem
            </h2>
            <p className="text-[#D4D4D4] text-[15px] sm:text-[16px] max-w-2xl mx-auto font-light">
              Intelligent Enterprise Architecture Connecting Everything Securely
            </p>
          </div>

          {/* DESKTOP — fixed canvas */}
          <div className="hidden lg:flex justify-center overflow-visible w-full items-center">
            <div className="relative -ml-4" style={{ width: W, height: H }}>
              <svg
                className="absolute inset-0 z-0 pointer-events-none"
                width={W}
                height={H}
                viewBox={`0 0 ${W} ${H}`}
              >
                <ConnectorPath points={[[170, 150], [170, 400]]} />
                <ConnectorPath points={[[250, 410], [380, 410], [380, 150], [510, 150]]} />
                <ConnectorPath points={[[565, 150], [565, 350]]} />
                <ConnectorPath points={[[635, 150], [635, 350]]} />
                <ConnectorPath points={[[565, 420], [565, 660]]} />
                <ConnectorPath points={[[635, 420], [635, 660]]} />
                <ConnectorPath points={[[680, 135], [960, 135]]} />
                <ConnectorPath points={[[680, 180], [960, 180]]} />
                <ConnectorPath points={[[1030, 150], [1030, 260], [920, 260], [920, 390]]} />
                <ConnectorPath points={[[1030, 150], [1030, 260], [1120, 260], [1120, 390]]} />
                <ConnectorPath points={[[1120, 390], [1120, 540], [800, 540], [800, 425], [780, 425]]} />
                <ConnectorPath points={[[840, 425], [780, 425]]} />
              </svg>

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
                  glowing={true}
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

              <Packet icon={Link} points={[[170, 150], [170, 400]]} delay={0} duration={3.5} />
              <Packet icon={Share2} points={[[250, 410], [380, 410], [380, 150], [510, 150]]} delay={0} duration={3.5} />
              <Packet icon={Wifi} autoRotate={false} points={[[565, 150], [565, 350]]} delay={0} duration={3.5} />
              <Packet icon={Wifi} flip autoRotate={false} points={[[635, 350], [635, 150]]} delay={0} duration={3.5} />
              <Packet icon={EngineIcon} points={[[680, 135], [960, 135]]} delay={0} duration={3.5} />
              <Packet icon={EngineIcon} flip points={[[960, 180], [680, 180]]} delay={0} duration={3.5} />

              <Packet icon={AiIcons} flip points={[[840, 425], [780, 425]]} delay={0} duration={3.5} />

              <Packet icon={VideoIcons} points={[[1030, 150], [1030, 260], [920, 260], [920, 390]]} delay={0} duration={3.5} />
              <Packet icon={HardDrive} points={[[1030, 150], [1030, 260], [1120, 260], [1120, 390]]} delay={0} duration={3.5} />

              <Packet icon={Database} flip points={[[1120, 390], [1120, 540], [800, 540], [800, 425], [780, 425]]} delay={0} duration={3.5} />

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



