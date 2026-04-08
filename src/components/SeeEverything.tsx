import surveillance1 from "@/assets/surveillance-1.jpg";
import surveillance2 from "@/assets/surveillance-2.jpg";
import surveillance3 from "@/assets/surveillance-3.jpg";
import surveillance4 from "@/assets/surveillance-4.jpg";
import surveillance5 from "@/assets/surveillance-5.jpg";
import surveillance6 from "@/assets/surveillance-6.jpg";
import surveillance7 from "@/assets/surveillance-7.jpg";
import surveillance8 from "@/assets/surveillance-8.jpg";
import surveillance9 from "@/assets/surveillance-9.jpg";
import surveillance10 from "@/assets/surveillance-10.jpg";

const SeeEverything = () => {
  return (
    <section className="bg-secondary py-4 sm:py-8 pb-16 sm:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-display font-bold text-foreground mb-10 sm:mb-14">
          See Everything. Miss Nothing.
        </h2>

        {/* Mobile layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:hidden">
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={surveillance1} alt="Bank lobby CCTV" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={surveillance2} alt="Factory AI detection" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl bg-background border border-border p-5 flex flex-col justify-center">
            <h3 className="text-foreground font-display font-bold text-base mb-1">24/7 Monitoring:</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">No blind spots across diverse locations.</p>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={surveillance3} alt="Refinery night surveillance" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl bg-background border border-border p-5 flex flex-col justify-center">
            <p className="text-foreground text-sm leading-relaxed">Instant anomaly detection with precise object identification.</p>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={surveillance4} alt="Railway station" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl bg-background border border-border p-5 flex flex-col justify-center">
            <h3 className="text-foreground font-display font-bold text-base mb-1">Multi Camera Integration:</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Connect hundreds of feeds to a single view.</p>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={surveillance5} alt="Hospital ICU" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={surveillance6} alt="Classroom whiteboard" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={surveillance10} alt="Classroom students" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl bg-background border border-border p-5 flex flex-col justify-center">
            <h3 className="text-foreground font-display font-bold text-base mb-1">Intelligent alerts:</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Reduce false positives by upto 90%.</p>
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={surveillance7} alt="Supermarket" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={surveillance8} alt="Warehouse" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-2xl overflow-hidden aspect-[4/3]">
            <img src={surveillance9} alt="ATM bank" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>

        {/* Desktop: Exact bento grid matching screenshot */}
        <div
          className="hidden lg:grid gap-3"
          style={{
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gridTemplateRows: "repeat(6, 150px)",
          }}
        >
          {/* Row 1-2, Col 1: Bank lobby (tall) */}
          <div className="rounded-2xl overflow-hidden" style={{ gridColumn: "1", gridRow: "1 / 3" }}>
            <img src={surveillance1} alt="Bank lobby CCTV" className="w-full h-full object-cover" />
          </div>

          {/* Row 1, Col 2: Factory detection */}
          <div className="rounded-2xl overflow-hidden" style={{ gridColumn: "2", gridRow: "1" }}>
            <img src={surveillance2} alt="Factory AI detection" className="w-full h-full object-cover" />
          </div>

          {/* Row 1, Col 3: 24/7 Monitoring text */}
          <div className="rounded-2xl bg-background border border-border p-5 flex flex-col justify-center" style={{ gridColumn: "3", gridRow: "1" }}>
            <h3 className="text-foreground font-display font-bold text-base mb-1">24/7 Monitoring:</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">No blind spots across diverse locations.</p>
          </div>

          {/* Row 1, Col 4: Night refinery */}
          <div className="rounded-2xl overflow-hidden" style={{ gridColumn: "4", gridRow: "1" }}>
            <img src={surveillance3} alt="Refinery night surveillance" className="w-full h-full object-cover" />
          </div>

          {/* Row 2, Col 2: Anomaly detection text */}
          <div className="rounded-2xl bg-background border border-border p-5 flex flex-col justify-center" style={{ gridColumn: "2", gridRow: "2" }}>
            <p className="text-foreground text-sm leading-relaxed">Instant anomaly detection with precise object identification.</p>
          </div>

          {/* Row 2-3, Col 3: Railway station (tall) */}
          <div className="rounded-2xl overflow-hidden" style={{ gridColumn: "3", gridRow: "2 / 4" }}>
            <img src={surveillance4} alt="Railway station surveillance" className="w-full h-full object-cover" />
          </div>

          {/* Row 2, Col 4: Classroom whiteboard */}
          <div className="rounded-2xl overflow-hidden" style={{ gridColumn: "4", gridRow: "2" }}>
            <img src={surveillance6} alt="Classroom whiteboard" className="w-full h-full object-cover" />
          </div>

          {/* Row 3, Col 1: Multi Camera Integration text */}
          <div className="rounded-2xl bg-background border border-border p-5 flex flex-col justify-center" style={{ gridColumn: "1", gridRow: "3" }}>
            <h3 className="text-foreground font-display font-bold text-base mb-1">Multi Camera Integration:</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Connect hundreds of feeds to a single view.</p>
          </div>

          {/* Row 3, Col 2: Hospital ICU */}
          <div className="rounded-2xl overflow-hidden" style={{ gridColumn: "2", gridRow: "3" }}>
            <img src={surveillance5} alt="Hospital ICU surveillance" className="w-full h-full object-cover" />
          </div>

          {/* Row 3, Col 4: Classroom students */}
          <div className="rounded-2xl overflow-hidden" style={{ gridColumn: "4", gridRow: "3" }}>
            <img src={surveillance10} alt="Classroom students" className="w-full h-full object-cover" />
          </div>

          {/* Row 4-6, Col 1: Supermarket (tall - extends to bottom) */}
          <div className="rounded-2xl overflow-hidden" style={{ gridColumn: "1", gridRow: "4 / 7" }}>
            <img src={surveillance7} alt="Supermarket surveillance" className="w-full h-full object-cover" />
          </div>

          {/* Row 4, Col 2: Multi Camera text 2 */}
          <div className="rounded-2xl bg-background border border-border p-5 flex flex-col justify-center" style={{ gridColumn: "2", gridRow: "4" }}>
            <h3 className="text-foreground font-display font-bold text-base mb-1">Multi Camera Integration:</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Connect hundreds of feeds to a single view.</p>
          </div>

          {/* Row 4, Col 3: Intelligent alerts text */}
          <div className="rounded-2xl bg-background border border-border p-5 flex flex-col justify-center" style={{ gridColumn: "3", gridRow: "4" }}>
            <h3 className="text-foreground font-display font-bold text-base mb-1">Intelligent alerts:</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">Reduce false positives by upto 90%.</p>
          </div>

          {/* Row 5-6, Col 2: Anomaly text 2 + extra space */}
          <div className="rounded-2xl bg-background border border-border p-5 flex flex-col justify-center" style={{ gridColumn: "2", gridRow: "5 / 7" }}>
            <p className="text-foreground text-sm leading-relaxed">Instant anomaly detection with precise object identification.</p>
          </div>

          {/* Row 5-6, Col 3: Warehouse (tall) */}
          <div className="rounded-2xl overflow-hidden" style={{ gridColumn: "3", gridRow: "5 / 7" }}>
            <img src={surveillance8} alt="Warehouse AI detection" className="w-full h-full object-cover" />
          </div>

          {/* Row 4-5, Col 4: ATM Bank */}
          <div className="rounded-2xl overflow-hidden" style={{ gridColumn: "4", gridRow: "4 / 6" }}>
            <img src={surveillance9} alt="ATM bank surveillance" className="w-full h-full object-cover" />
          </div>

          {/* Row 6, Col 4: Bank entrance */}
          <div className="rounded-2xl overflow-hidden" style={{ gridColumn: "4", gridRow: "6" }}>
            <img src={surveillance9} alt="Bank entrance surveillance" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeeEverything;
