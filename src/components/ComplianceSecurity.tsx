import { ShieldCheck, Lock, Wifi, Monitor, Bug } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Compliance Ready",
    desc: "Meets GDPR, HIPAA, regional regulations with full audit trails.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    desc: "AES-256 for all data in transit/rest, SOC 2 framework.",
  },
  {
    icon: Wifi,
    title: "Zero-Trust Architecture",
    desc: "Multi-factor auth + least privilege across components.",
  },
  {
    icon: Monitor,
    title: "Redundant Systems",
    desc: "Fault-tolerant streaming with auto-failover – no interruptions.",
  },
  {
    icon: Bug,
    title: "Proactive Hardening",
    desc: "Regular pen testing + third-party verification.",
  },
];

const ComplianceSecurity = () => {
  return (
    <section className="py-20 bg-hero">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-hero-muted text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Compliance and Certifications
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-hero-foreground font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-12">
          Built with Enterprise Grade Security
        </h2>

        {/* Cards Grid - 3 top, 2 bottom centered */}
        <div className="flex flex-col items-center gap-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {features.slice(0, 3).map((f) => (
              <div
                key={f.title}
                className="bg-background rounded-2xl p-6 text-center border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-foreground font-display font-bold text-base mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full lg:max-w-[66%]">
            {features.slice(3).map((f) => (
              <div
                key={f.title}
                className="bg-background rounded-2xl p-6 text-center border border-border hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-foreground font-display font-bold text-base mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSecurity;
