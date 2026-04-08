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
    <section className="bg-hero py-16 sm:py-24 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-display font-bold leading-snug">
            Enterprise Ecosystem Architecture
          </h2>
          <p className="text-hero-muted mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            A unified orchestration layer connecting your entire security infrastructure into a single intelligent nervous system.
          </p>
        </div>

        {/* Intelligence & Orchestration - Top */}
        <div className="text-center mb-8">
          <p className="text-primary text-[10px] font-semibold tracking-[0.2em] uppercase mb-4">
            Intelligence & Orchestration
          </p>
          <div className="inline-grid grid-cols-2 gap-3">
            {orchestration.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 text-white/90 text-xs font-medium whitespace-pre-line"
                style={{ background: "linear-gradient(180deg, hsla(222, 40%, 16%, 0.8) 0%, hsla(222, 47%, 10%, 0.9) 100%)" }}
              >
                <item.icon className="w-4 h-4 text-blue-400 shrink-0" strokeWidth={1.5} />
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Main 3-column layout */}
        <div className="flex flex-col lg:flex-row items-stretch gap-6 lg:gap-4">
          {/* Left - Input Infrastructure */}
          <div className="flex-1">
            <p className="text-primary text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 text-center lg:text-left">
              Input Infrastructure
            </p>
            <div className="space-y-3">
              {inputInfra.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/10 text-white/90 text-sm"
                  style={{ background: "linear-gradient(180deg, hsla(222, 40%, 16%, 0.6) 0%, hsla(222, 47%, 10%, 0.7) 100%)" }}
                >
                  <item.icon className="w-4 h-4 text-blue-400/70" strokeWidth={1.5} />
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* Center - CamPulse AI Platform */}
          <div className="flex-1 flex flex-col items-center justify-center relative">
            {/* Dashed connector lines - left */}
            <div className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 w-8 items-center">
              <div className="w-full border-t border-dashed border-white/20" />
            </div>
            {/* Dashed connector lines - right */}
            <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 w-8 items-center">
              <div className="w-full border-t border-dashed border-white/20" />
            </div>

            <div className="w-full max-w-[300px] rounded-2xl border-2 border-primary/50 p-6 text-center"
              style={{ background: "linear-gradient(180deg, hsla(222, 40%, 18%, 0.9) 0%, hsla(222, 47%, 8%, 0.95) 100%)", boxShadow: "0 0 40px hsla(217, 91%, 60%, 0.15), inset 0 1px 0 hsla(217, 91%, 60%, 0.1)" }}
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary flex items-center justify-center">
                <Activity className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-white font-display font-bold text-lg mb-1">CamPulse AI</h3>
              <p className="text-primary text-[9px] font-semibold tracking-[0.15em] uppercase mb-5">
                Unified Surveillance Platform
              </p>
              {/* Feature tags - 2 column grid */}
              <div className="grid grid-cols-2 gap-2">
                {platformFeatures.map((f, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[10px] font-medium text-blue-300 border border-blue-400/30"
                    style={{ background: "hsla(217, 91%, 60%, 0.1)" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                    {f.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Enterprise Control */}
          <div className="flex-1">
            <p className="text-primary text-[10px] font-semibold tracking-[0.2em] uppercase mb-4 text-center lg:text-right">
              Enterprise Control
            </p>
            <div className="space-y-3">
              {enterpriseControl.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg border border-white/10 text-white/90 text-sm"
                  style={{ background: "linear-gradient(180deg, hsla(222, 40%, 16%, 0.6) 0%, hsla(222, 47%, 10%, 0.7) 100%)" }}
                >
                  <item.icon className="w-4 h-4 text-blue-400/70" strokeWidth={1.5} />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Infrastructure Backbone - Bottom */}
        <div className="text-center mt-10">
          <p className="text-primary text-[10px] font-semibold tracking-[0.2em] uppercase mb-4">
            Infrastructure Backbone
          </p>
          <div className="inline-grid grid-cols-2 gap-3">
            {infrastructure.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-white/10 text-white/90 text-xs font-medium"
                style={{ background: "linear-gradient(180deg, hsla(222, 40%, 16%, 0.8) 0%, hsla(222, 47%, 10%, 0.9) 100%)" }}
              >
                <item.icon className="w-4 h-4 text-blue-400" strokeWidth={1.5} />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemArchitecture;
