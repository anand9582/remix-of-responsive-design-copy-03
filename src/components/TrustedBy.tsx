const logos = [
  { name: "SpiceJet", subtitle: "", style: "font-display font-bold text-xl tracking-wide italic" },
  { name: "PURE", subtitle: "HOME + LIVING", style: "font-display font-bold text-xl tracking-widest" },
  { name: "Columbia", subtitle: "", style: "font-display font-bold text-2xl" },
  { name: "COBE", subtitle: "living colors of fashion", style: "font-display font-bold text-xl tracking-wider" },
  { name: "CANTABIL", subtitle: "International Clothing", style: "font-display font-bold text-xl tracking-wider" },
  { name: "TATA", subtitle: "", style: "font-display font-bold text-2xl tracking-widest" },
  { name: "Reliance", subtitle: "", style: "font-display font-bold text-xl italic" },
  { name: "Adani", subtitle: "Group", style: "font-display font-bold text-xl tracking-wider" },
];

const TrustedBy = () => {
  const allLogos = [...logos, ...logos];

  return (
    <section className="bg-background py-16 sm:py-20 border-t border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase mb-10">
          Trusted by Industry Leaders
        </p>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex items-center gap-14 sm:gap-20 animate-marquee-left w-max">
          {allLogos.map((logo, i) => (
            <div key={i} className="text-foreground/70 hover:text-foreground transition-colors text-center shrink-0">
              <span className={logo.style}>{logo.name}</span>
              {logo.subtitle && (
                <p className="text-[9px] tracking-[0.15em] -mt-0.5 text-muted-foreground">{logo.subtitle}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
