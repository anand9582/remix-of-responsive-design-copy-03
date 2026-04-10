import { Globe, Target } from "lucide-react";
import founderImg from "@/assets/founder.jpg";
import controlRoomImg from "@/assets/control-room.jpg";

const stats = [
  { value: "₹350+", label: "Crore Annual Revenue" },
  { value: "500+", label: "Enterprise & Govt Clients" },
  { value: "10+", label: "Industries Served" },
  { value: "Pan India", label: "Operational Presence" },
];

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accent/30 text-accent text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            About Us
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-center text-foreground font-display font-bold text-2xl sm:text-3xl md:text-4xl mb-12">
          Built on <span className="text-accent">25+ Years</span> of Infrastructure Excellence
        </h2>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-foreground font-display font-bold text-2xl sm:text-3xl">{stat.value}</p>
              <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Cards Row */}

        <div className="grid md:grid-cols-12 gap-5 mb-5">
          {/* Founder Card */}
          <div className="md:col-span-4 relative rounded-2xl overflow-hidden h-72 sm:h-80">
            <img
              src={founderImg}
              alt="Mr. Arun Gupta - Founder and Chairman"
              className="w-full h-full object-cover"
              loading="lazy"
              width={640}
              height={640}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6">
              <p className="text-white font-display font-bold text-lg">Mr. Arun Gupta</p>
              <p className="text-white/70 text-sm">Founder and Chairman, Transline Technologies</p>
            </div>
          </div>

          {/* Description Card */}
          <div className="md:col-span-8 rounded-2xl bg-[linear-gradient(100.48deg,#2563EB_-24.18%,#042F63_86.34%)] p-8 flex flex-col justify-center relative overflow-hidden">
            {/* Corner bracket decoration */}
            <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-lg" />

            <h3 className="text-accent-foreground font-display font-bold text-lg sm:text-xl uppercase tracking-wide mb-4">
              CamPulse by Transline Technologies
            </h3>
            <p className="text-accent-foreground/80 text-sm leading-relaxed mb-3">
              CamPulse is built on Transline Technologies' extensive experience in delivering large-scale, mission-critical infrastructure across industries.
            </p>
            <p className="text-accent-foreground/80 text-sm leading-relaxed">
              It brings together cameras, access control, and on-ground systems into one unified platform—helping organizations monitor better, respond faster, and stay in control across all locations.
            </p>
          </div>
        </div>

        {/* Bottom Cards Row */}
        <div className="grid md:grid-cols-3 gap-5">
          {/* Mission */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <Target className="w-4 h-4 text-accent" />
              </div>
              <span className="text-accent font-display font-bold text-sm uppercase tracking-wider">Our Mission</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To simplify and strengthen security operations by connecting systems, improving visibility, and enabling faster, more effective response.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                <Globe className="w-4 h-4 text-accent" />
              </div>
              <span className="text-accent font-display font-bold text-sm uppercase tracking-wider">Our Vision</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              To create intelligent infrastructure where security systems move beyond monitoring to actively supporting safer, smarter environments.
            </p>
          </div>

          {/* One Platform Card */}
          <div className="relative rounded-2xl overflow-hidden h-48 md:h-auto">
            <img
              src={controlRoomImg}
              alt="One Platform Total Control"
              className="w-full h-full object-cover"
              loading="lazy"
              width={640}
              height={512}
            />
            <div className="absolute inset-0 bg-hero/60" />
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <p className="text-white font-display font-bold text-2xl sm:text-3xl text-center leading-tight">
                One Platform.<br />Total Control.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
