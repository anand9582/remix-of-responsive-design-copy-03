import { Monitor, Camera, Shield, Cpu, Radio, Fingerprint, Zap, Bell, GitBranch, Globe, Video, Search, Eye, Activity, Server, HardDrive, Cloud, RefreshCw, Terminal, Users, AlertTriangle, Bot, Smartphone, Lock } from "lucide-react";

const inputInfra = [
  { icon: Camera, label: "CCTV Cameras" },
  { icon: Video, label: "IP Cameras" },
  { icon: Shield, label: "Access Control Devices" },
  { icon: Radio, label: "IoT Sensors" },
  { icon: Cpu, label: "Edge Devices" },
  { icon: Fingerprint, label: "Biometric Systems" },
];

const platformFeatures = [
  { label: "Video Management" },
  { label: "AI Analytics Engine" },
  { label: "Smart Search" },
  { label: "Face Recognition" },
  { label: "Event Detection" },
  { label: "Predictive Monitoring" },
];

const enterpriseControl = [
  { icon: Terminal, label: "Command Center" },
  { icon: Users, label: "Operator Console" },
  { icon: AlertTriangle, label: "Incident Alerts" },
  { icon: Bot, label: "Automated Response" },
  { icon: Smartphone, label: "Mobile Monitoring" },
  { icon: Lock, label: "Security Governance" },
];

const orchestration = [
  { icon: Zap, label: "AI Decision Engine" },
  { icon: Bell, label: "Real-Time Alerts" },
  { icon: GitBranch, label: "Workflow\nAutomation" },
  { icon: Globe, label: "Multi-Site\nMonitoring" },
];

const infrastructure = [
  { icon: Server, label: "Storage Servers" },
  { icon: HardDrive, label: "NVR / VMS Storage" },
  { icon: Cloud, label: "Cloud Backup" },
  { icon: RefreshCw, label: "Failover Systems" },
];

const EcosystemArchitecture = () => {
  return (
    <section className="bg-hero relative py-20 sm:py-32 overflow-hidden border-t border-white/5">
      {/* Background glow effects to match the dark futuristic look */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className="text-white text-3xl sm:text-4xl md:text-[40px] font-display font-semibold tracking-tight mb-5">
            Enterprise Ecosystem Architecture
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            A unified orchestration layer connecting your entire security infrastructure into a single
            intelligent nervous system.
          </p>
        </div>

        {/* Central Complex Diagram */}
        <div className="relative flex flex-col items-center max-w-6xl mx-auto">
          
          {/* Intelligence & Orchestration - Top */}
          <div className="flex flex-col items-center mb-8 w-full relative z-10">
            <p className="text-blue-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-6 drop-shadow-md">
              Intelligence & Orchestration
            </p>
            <div className="inline-grid grid-cols-1 sm:grid-cols-2 gap-4">
              {orchestration.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3.5 p-2 pr-6 rounded-xl border border-white/[0.04] text-slate-200 text-[13px] font-medium bg-[#0A0E17] shadow-sm min-w-[220px]"
                >
                  <div className="flex items-center justify-center w-[38px] h-[38px] rounded-[10px] bg-[#162032] border border-white/5 shrink-0 shadow-inner">
                    <item.icon className="w-[18px] h-[18px] text-blue-400/90" strokeWidth={1.5} />
                  </div>
                  <span className="whitespace-pre-line leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Vertical Connector Top */}
          <div className="hidden lg:block h-8 w-px border-l-2 border-dashed border-blue-500/30 mb-6 relative z-0" />

          {/* Main Middle Section */}
          <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 relative z-10">
            
            {/* Left - Input Infrastructure */}
            <div className="flex-1 w-full flex flex-col items-center lg:items-start relative">
              <p className="text-blue-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-6 lg:ml-2 drop-shadow-md">
                Input Infrastructure
              </p>
              <div className="space-y-2.5 w-full max-w-[280px] relative">
                {/* Simulated multiple animated connector lines for the left side just like screenshot */}
                <div className="absolute top-[28%] -right-16 w-32 border-t-2 border-dashed border-blue-500 hidden lg:block mix-blend-screen opacity-100 drop-shadow-[0_0_8px_rgba(59,130,246,1)] pointer-events-none z-[-1]" />
                <div className="absolute top-[48%] -right-16 w-32 border-t-2 border-dashed border-blue-500/30 hidden lg:block pointer-events-none z-[-1]" />
                <div className="absolute top-[68%] -right-16 w-32 border-t-2 border-dashed border-blue-500/10 hidden lg:block pointer-events-none z-[-1]" />
                
                {inputInfra.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 p-2 pr-5 rounded-xl border border-white/[0.04] text-slate-200 text-[13px] font-medium bg-[#0A0E17] shadow-sm relative z-10"
                  >
                    <div className="flex items-center justify-center w-[38px] h-[38px] rounded-[10px] bg-[#162032] border border-white/5 shrink-0 shadow-inner">
                      <item.icon className="w-[18px] h-[18px] text-blue-400/90" strokeWidth={1.5} />
                    </div>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Horizontal Connector Left (Main Middle) */}
            <div className="hidden lg:flex w-16 xl:w-28 shrink-0 items-center justify-center relative -mx-2 z-0">
               <div className="absolute top-1/2 -translate-y-1/2 w-full border-t-2 border-dashed border-blue-500/30" />
               <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]" />
            </div>

            {/* Center - CamPulse AI Platform */}
            <div className="shrink-0 flex flex-col items-center justify-center rounded-[24px] border-[2px] border-[#2e6aff] p-8 sm:p-10 relative bg-[#090E17] shadow-[0_0_50px_rgba(46,106,255,0.2),inset_0_0_30px_rgba(46,106,255,0.1)] max-w-[400px] w-full mx-auto z-20">
              <div className="absolute inset-0 rounded-[22px] border border-blue-400/20 pointer-events-none" />
              
              {/* Icon */}
              <div className="w-[60px] h-[60px] mx-auto mb-6 rounded-2xl bg-[#2e6aff] flex items-center justify-center shadow-[0_4px_20px_rgba(46,106,255,0.4)]">
                <Activity className="w-8 h-8 text-white relative z-10" />
              </div>
              <h3 className="text-white font-display font-medium text-2xl mb-1 mt-2">CamPulse AI</h3>
              <p className="text-blue-500 text-[10px] font-bold tracking-[0.2em] uppercase mb-8 mt-2">
                Unified Surveillance Platform
              </p>
              
              {/* Feature tags - 2 column grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                {platformFeatures.map((f, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-3 py-2.5 rounded-lg text-[11px] font-medium text-blue-100 bg-[#162137]/80 border border-blue-500/20"
                  >
                    <span className="w-[5px] h-[5px] rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                    {f.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Horizontal Connector Right */}
            <div className="hidden lg:flex w-16 xl:w-28 shrink-0 items-center justify-center relative -mx-2 z-0">
               <div className="absolute top-1/2 -translate-y-1/2 w-full border-t-2 border-dashed border-blue-500/30" />
               <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]" />
            </div>

            {/* Right - Enterprise Control */}
            <div className="flex-1 w-full flex flex-col items-center lg:items-end relative">
              <p className="text-blue-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-6 lg:mr-2 drop-shadow-md text-center lg:text-right">
                Enterprise Control
              </p>
              <div className="space-y-2.5 w-full max-w-[280px]">
                {enterpriseControl.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3.5 p-2 pr-5 rounded-xl border border-white/[0.04] text-slate-200 text-[13px] font-medium bg-[#0A0E17] shadow-sm"
                  >
                    <div className="flex items-center justify-center w-[38px] h-[38px] rounded-[10px] bg-[#162032] border border-white/5 shrink-0 shadow-inner">
                      <item.icon className="w-[18px] h-[18px] text-blue-400/90" strokeWidth={1.5} />
                    </div>
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Vertical Connector Bottom */}
          <div className="hidden lg:block h-8 w-px border-l-2 border-dashed border-blue-500/30 mt-6 relative z-0" />

          {/* Infrastructure Backbone - Bottom */}
          <div className="flex flex-col items-center mt-6 w-full relative z-10">
            <p className="text-blue-500 text-[11px] font-bold tracking-[0.2em] uppercase mb-6 drop-shadow-md">
              Infrastructure Backbone
            </p>
            <div className="inline-grid grid-cols-1 sm:grid-cols-2 gap-4">
              {infrastructure.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3.5 p-2 pr-6 rounded-xl border border-white/[0.04] text-slate-200 text-[13px] font-medium bg-[#0A0E17] shadow-sm min-w-[220px]"
                >
                  <div className="flex items-center justify-center w-[38px] h-[38px] rounded-[10px] bg-[#162032] border border-white/5 shrink-0 shadow-inner">
                    <item.icon className="w-[18px] h-[18px] text-blue-400/90" strokeWidth={1.5} />
                  </div>
                  <span className="whitespace-pre-line leading-tight">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EcosystemArchitecture;
