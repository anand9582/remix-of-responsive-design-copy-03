import { Diamond, Server, Network, Settings, Workflow, BarChart3, Database, Globe, Monitor, Smartphone, Camera, Move, Radio, Shield, FileText, AlertTriangle, ClipboardList, Search, HardDrive, ArrowLeftRight, ArrowRight, ArrowDown, Share2, RefreshCw, Video, Activity, Layers, LayoutGrid, Clock, TrendingUp, Maximize, Cpu, Cctv, Webcam, ShieldCheck, Link, Wifi, AlertCircle, CalendarCheck, Scan, Film, Book, GitMerge, FileBadge, PlaySquare, CheckCircle, DatabaseBackup, MonitorPlay, MonitorSmartphone } from "lucide-react";
import { motion } from "framer-motion";

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
}: {
  icon: any;
  title: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  glowing?: boolean;
}) => (
  <div
    className={`rounded-[14px] p-4 flex flex-col relative z-20 
      ${glowing
        ? "border-[1.5px] border-[#2A65FF] bg-[#11192A] shadow-[0_0_30px_rgba(42,101,255,0.15),inset_0_0_15px_rgba(42,101,255,0.1)]"
        : "border border-white/[0.06] bg-[#1E293B] shadow-xl"} 
      ${className}`}
    style={{ backdropFilter: glowing ? "none" : "blur(10px)", ...style }}
  >
    <div className="flex items-start gap-3.5 mb-2.5">
      <div className={`w-[38px] h-[38px] rounded-lg flex items-center justify-center shrink-0 shadow-sm bg-[#254ED0]`}>
        <Icon className={`w-5 h-5 text-white`} strokeWidth={glowing ? 2 : 1.75} />
      </div>
      <div className="min-w-0 pt-0.5">
        <h3 className={`font-display font-medium text-[13px] tracking-wide text-gray-50 leading-none`}>{title}</h3>
        {subtitle && <p className="text-[#8B9DB8] text-[11px] mt-1.5 leading-snug">{subtitle}</p>}
      </div>
    </div>
    {description && <p className="text-[#8B9DB8] text-[11px] leading-relaxed mt-1">{description}</p>}
    {children && <div className="mt-3.5">{children}</div>}
  </div>
);

const ChipIcon = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex flex-col items-center justify-center gap-2">
    <Icon className="w-4 h-4 text-[#8B9DB8]" strokeWidth={1.5} />
    <span className="text-[#8B9DB8] text-[9.5px] uppercase tracking-wider font-semibold">{label}</span>
  </div>
);

const Pill = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-[#111827] border border-white/[0.02]">
    <Icon className="w-3.5 h-3.5 text-[#8B9DB8]" strokeWidth={2} />
    <span className="text-[#A5B6D6] text-[10.5px] font-medium whitespace-nowrap">{label}</span>
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
      className="absolute bg-[#2D4581] z-0"
      style={{
        left: horizontal ? left : left - 0.5,
        top: horizontal ? top - 0.5 : top,
        width: horizontal ? width : 1,
        height: horizontal ? 1 : height,
      }}
    />
  );
};

const StaticBadge = ({ x, y, icon: Icon, flip = false }: { x: number; y: number; icon: any; flip?: boolean }) => (
  <div
    className="absolute w-5 h-5 rounded-full bg-white flex items-center justify-center shadow-[0_0_12px_rgba(255,255,255,0.4)] pointer-events-none z-10"
    style={{ left: x - 10, top: y - 10 }}
  >
    <div className={flip ? "rotate-180" : ""}>
      <Icon className="w-3.5 h-3.5 text-[#0F1522]" strokeWidth={2.5} />
    </div>
  </div>
);

const AbsBox = ({ left, top, width, children }: { left: number; top: number; width: number; children: React.ReactNode }) => (
  <div className="absolute z-20" style={{ left, top, width }}>{children}</div>
);

// Framer Motion Animated Sequenced Packet
const Packet = ({ points, delay, duration, icon: Icon, flip = false }: { points: [number, number][], delay: number, duration: number, icon: any, flip?: boolean }) => {
  const TOTAL_CYCLE = 6;
  const x = points.map(p => p[0]);
  const y = points.map(p => p[1]);

  let totalDist = 0;
  const dists = [0];
  for (let i = 1; i < points.length; i++) {
    const d = Math.sqrt(Math.pow(x[i] - x[i - 1], 2) + Math.pow(y[i] - y[i - 1], 2));
    totalDist += d;
    dists.push(totalDist);
  }
  const times = dists.map(d => totalDist === 0 ? 0 : d / totalDist);

  return (
    <motion.div
      className="absolute w-[22px] h-[22px] rounded-full bg-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.7)] z-30 pointer-events-none"
      style={{
        marginLeft: -11,
        marginTop: -11,
      }}
      initial={{ x: x[0], y: y[0], opacity: 0 }}
      animate={{
        x,
        y,
        opacity: [0, 1, 1, 0]
      }}
      transition={{
        x: { duration, delay, ease: "linear", repeat: Infinity, repeatDelay: TOTAL_CYCLE - duration, times },
        y: { duration, delay, ease: "linear", repeat: Infinity, repeatDelay: TOTAL_CYCLE - duration, times },
        opacity: { duration, delay, ease: "linear", repeat: Infinity, repeatDelay: TOTAL_CYCLE - duration, times: [0, 0.05, 0.95, 1] }
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
    <section className="bg-[#050B14] py-8 sm:py-16 border-t border-white/5 flex justify-center w-full overflow-hidden">
      <div className="relative w-full max-w-[1440px] px-2 sm:px-6">
        {/* Outer rounded box mimicking deep soft dark blue background */}
        <div className="absolute inset-x-2 sm:inset-x-8 inset-y-0 rounded-[2.5rem] border border-blue-500/10 bg-[#111A31]" />

        <div className="relative z-10 px-4 sm:px-8 pt-12 sm:pt-16 pb-16 w-full flex flex-col items-center">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-[#1A253E] border border-[#2B3F6C] rounded-full px-4 py-1.5 mb-6 shadow-md">
              <Diamond className="w-3.5 h-3.5 text-blue-300" fill="currentColor" />
              <span className="text-[10px] font-bold tracking-widest uppercase text-blue-200">Enterprise Architecture</span>
            </div>
            <h2 className="text-white font-display font-bold text-3xl sm:text-4xl md:text-[42px] mb-4">
              Campulse Ecosystem
            </h2>
            <p className="text-[#8496B5] text-[15px] sm:text-[16px] max-w-2xl mx-auto font-light">
              Intelligent Enterprise Architecture Connecting Everything Securely
            </p>
          </div>

          {/* DESKTOP — fixed canvas, scaled responsively */}
          <div className="hidden lg:flex justify-center overflow-visible w-full items-center">
            <div className="relative -ml-4" style={{ width: W, height: H }}>
              {/* ===== EXPLICIT ORTHOGONAL LINES & BADGES ===== */}

              {/* === Left Flow (EDGE & CONNECTIVITY to VDM) === */}
              {/* EDGE directly drops vertical line down to CONNECTIVITY */}
              <Line x1={170} y1={235} x2={170} y2={360} />

              {/* Horizontal line from right of EDGE to Top Share2 */}
              <Line x1={300} y1={180} x2={380} y2={180} />
              {/* Horizontal line from right of CONNECTIVITY to Bottom Share2 */}
              <Line x1={300} y1={410} x2={380} y2={410} />

              {/* Vertical line connecting Bottom Share2 up to Top Share2 */}
              <Line x1={380} y1={180} x2={380} y2={410} />

              {/* Horizontal line from Top Share2 into VDM */}
              <Line x1={380} y1={180} x2={460} y2={180} />

              {/* === Center Flow (VDM to VMS) === */}
              <Line x1={600} y1={210} x2={600} y2={310} />

              {/* === VMS to Output Flow === */}
              <Line x1={600} y1={490} x2={600} y2={620} />

              {/* === Right Flow (VDM to Streaming) === */}
              <Line x1={740} y1={180} x2={900} y2={180} />

              {/* === Down Flow (Streaming to AI & Analytics Split) === */}
              <Line x1={1030} y1={210} x2={1030} y2={260} />
              <Line x1={920} y1={260} x2={1120} y2={260} />

              {/* Drops into AI & Hybrid */}
              <Line x1={920} y1={260} x2={920} y2={340} />
              <Line x1={1120} y1={260} x2={1120} y2={340} />

              {/* === Return Flow (AI & Hybrid to VMS) === */}
              {/* Drop from bottoms to return bus */}
              <Line x1={920} y1={475} x2={920} y2={540} />
              <Line x1={1120} y1={475} x2={1120} y2={540} />

              {/* Horizontal return bus */}
              <Line x1={800} y1={540} x2={1120} y2={540} />

              {/* Vertical rise up to VMS center logic */}
              <Line x1={800} y1={425} x2={800} y2={540} />

              {/* Horizontal connect into VMS Right edge */}
              <Line x1={780} y1={425} x2={800} y2={425} />


              {/* ===== STRICT NODES ===== */}

              <AbsBox left={40} top={100} width={260}>
                <NodeCard icon={MonitorSmartphone} title="CAMPULSE EDGE" subtitle="Capture real-time data">
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
                  icon={Cpu}
                  title="CAMPULSE VMS"
                  subtitle="ICCC CORE / Central command"
                  description="Central command and decision layer"
                  glowing={true}
                >
                  <div className="grid grid-cols-2 gap-2 mt-4">
                    <Pill icon={Activity} label="SOP Flows" />
                    <Pill icon={AlertCircle} label="Escalation" />
                    <Pill icon={CalendarCheck} label="Incident Management" />
                    <Pill icon={Scan} label="Evidence" />
                    <Pill icon={Database} label="Storage" />
                    <Pill icon={Layers} label="Reports" />
                  </div>
                </NodeCard>
              </AbsBox>

              <AbsBox left={840} top={340} width={160}>
                <NodeCard icon={BarChart3} title="AI Analytics Engine" subtitle="Detect patterns" description="Extracts real-time insights." />
              </AbsBox>

              <AbsBox left={1040} top={340} width={160}>
                <NodeCard icon={Database} title="Hybrid Storage" subtitle="Store and retrieve data" description="Secures critical video evidence." />
              </AbsBox>

              <AbsBox left={460} top={620} width={280}>
                <NodeCard icon={MonitorPlay} title="OUTPUT CHANNELS" subtitle="Access anywhere">
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <ChipIcon icon={Globe} label="Web" />
                    <ChipIcon icon={Monitor} label="Desktop" />
                    <ChipIcon icon={Smartphone} label="Mobile" />
                  </div>
                </NodeCard>
              </AbsBox>

              {/* ===== PACKET ANIMATION SEQUENCE ===== */}
              {/* Step 1: Capture Data (0s to 1s) */}
              <Packet icon={Share2} points={[[300, 180], [380, 180], [460, 180]]} delay={0} duration={1} />
              <Packet icon={Share2} points={[[300, 410], [380, 410], [380, 180], [460, 180]]} delay={0} duration={1} />
              <Packet icon={Link} points={[[170, 235], [170, 360]]} delay={0} duration={1} />

              {/* Step 2: VDM Analytics Dispatch (1s to 2s) */}
              <Packet icon={Wifi} points={[[600, 210], [600, 310]]} delay={1} duration={1} />
              <Packet icon={RefreshCw} points={[[740, 180], [900, 180]]} delay={1} duration={1} />

              {/* Step 3: Streaming to Edge Processing (2s to 3s) */}
              <Packet icon={Video} points={[[1030, 210], [1030, 260], [920, 260], [920, 340]]} delay={2} duration={1} />
              <Packet icon={HardDrive} points={[[1030, 210], [1030, 260], [1120, 260], [1120, 340]]} delay={2} duration={1} />

              {/* Step 4: Hybrid/AI Returns Actionable Intel (3s to 4s) */}
              <Packet icon={Database} flip points={[[920, 475], [920, 540], [800, 540], [800, 425], [780, 425]]} delay={3} duration={1} />
              <Packet icon={Database} flip points={[[1120, 475], [1120, 540], [800, 540], [800, 425], [780, 425]]} delay={3} duration={1} />

              {/* Step 5: VMS routes to OUTPUT CHANNELS (4s to 5s) */}
              <Packet icon={Film} points={[[600, 490], [600, 620]]} delay={4} duration={1} />

            </div>
          </div>

          {/* MOBILE — stacked view */}
          <div className="lg:hidden space-y-6 max-w-[400px] w-full mt-4">
            <NodeCard icon={MonitorSmartphone} title="CAMPULSE EDGE" subtitle="Capture real-time data">
              <div className="grid grid-cols-4 gap-1.5 mt-2">
                <ChipIcon icon={Cctv} label="IP Cam" />
                <ChipIcon icon={Webcam} label="PTZ" />
                <ChipIcon icon={Radio} label="Sensors" />
                <ChipIcon icon={ShieldCheck} label="Access" />
              </div>
            </NodeCard>

            {/* Since mobile layout hides lines, no packet traversal needed */}

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
                <Pill icon={Scan} label="Evidence" />
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
