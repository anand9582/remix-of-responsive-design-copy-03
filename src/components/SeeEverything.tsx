import { useRef } from "react";
import { useInView } from "framer-motion";
import surveillance1 from "@/assets/surveillance-1.mp4";
import surveillance2 from "@/assets/surveillance-2.mp4";
import surveillance3 from "@/assets/surveillance-3.mp4";
import surveillance5 from "@/assets/surveillance-5.mp4";
import surveillance6 from "@/assets/surveillance-6.mp4";
import surveillance7 from "@/assets/surveillance-7.mp4";
import surveillance8 from "@/assets/surveillance-8.mp4";
import surveillance9 from "@/assets/surveillance-9.mp4";

const LazyVideo = ({ src, className }: { src: string; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "400px" });

  return (
    <div ref={ref} className="w-full h-full">
      {isInView && (
        <video src={src} autoPlay loop muted playsInline className={className} />
      )}
    </div>
  );
};

const SeeEverything = () => {
  return (
    <section className="bg-[linear-gradient(116.72deg,#F5F5F5_0%,#F5F5F5_100%)] py-10 sm:py-10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-roboto font-medium text-neutral-600 text-lg sm:text-[34px] mb-6 lg:mb-10">
          See Everything. Miss Nothing.
        </h2>

        {/* Mobile & Tablet Layout */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:hidden">
          {/* Mobile Col 1 */}
          <div className="flex flex-col gap-4 sm:gap-6 flex-1">
            <div className="rounded-[16px] overflow-hidden aspect-[4/3] bg-neutral-900">
              <LazyVideo src={surveillance1} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[16px] bg-white p-6">
              <h3 className="font-roboto font-bold text-[16px] text-neutral-900 mb-1">95%+ Detection Accuracy:</h3>
              <p className="font-roboto text-[14.5px] leading-[1.6] text-neutral-500">Reduce false alarms and maximize your overall facility security.</p>
            </div>
            <div className="rounded-[16px] overflow-hidden aspect-video bg-neutral-900">
              <LazyVideo src={surveillance2} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[16px] bg-white p-6">
              <h3 className="font-roboto font-bold text-[16px] text-neutral-900 mb-1">1000+ Cameras, One View:</h3>
              <p className="font-roboto text-[14.5px] leading-[1.6] text-neutral-500">Consolidate hundreds of feeds into one unified, intuitive dashboard.</p>
            </div>
            <div className="rounded-[16px] overflow-hidden aspect-[3/4] bg-neutral-900">
              <LazyVideo src={surveillance8} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[16px] bg-white p-6">
              <h3 className="font-roboto font-bold text-[16px] text-neutral-900 mb-1">24/7 Monitoring:</h3>
              <p className="font-roboto text-[14.5px] leading-[1.6] text-neutral-500">Eliminate all blind spots across your locations, around the clock.</p>
            </div>
            <div className="rounded-[16px] overflow-hidden aspect-[4/3] bg-neutral-900">
              <LazyVideo src={surveillance3} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Mobile Col 2 */}
          <div className="flex flex-col gap-4 sm:gap-6 flex-1">
            <div className="rounded-[16px] bg-white p-6">
              <h3 className="font-roboto font-bold text-[16px] text-neutral-900 mb-1">{"<2s Alert Time:"}</h3>
              <p className="font-roboto text-[14.5px] leading-[1.6] text-neutral-500">Instant, real-time alerts delivered straight to your mobile device.</p>
            </div>
            <div className="rounded-[16px] overflow-hidden aspect-video bg-neutral-900">
              <LazyVideo src={surveillance9} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[16px] bg-white p-6">
              <h3 className="font-roboto font-bold text-[16px] text-neutral-900 mb-1">99.9% Uptime:</h3>
              <p className="font-roboto text-[14.5px] leading-[1.6] text-neutral-500">Mission-critical reliability designed for your continuous, daily operations.</p>
            </div>
            <div className="rounded-[16px] overflow-hidden aspect-[4/3] bg-neutral-900">
              <LazyVideo src={surveillance7} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[16px] bg-white p-6">
              <h3 className="font-roboto font-bold text-[16px] text-neutral-900 mb-1">Enterprise Scale:</h3>
              <p className="font-roboto text-[14.5px] leading-[1.6] text-neutral-500">Seamlessly integrates with any existing NVR/VMS security infrastructure.</p>
            </div>
            <div className="rounded-[16px] overflow-hidden aspect-[4/3] bg-neutral-900">
              <LazyVideo src={surveillance6} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[16px] bg-white p-6">
              <h3 className="font-roboto font-bold text-[16px] text-neutral-900 mb-1">Continuous Learning:</h3>
              <p className="font-roboto text-[14.5px] leading-[1.6] text-neutral-500">Advanced AI modules that evolve and improve every day.</p>
            </div>
            <div className="rounded-[16px] overflow-hidden aspect-[4/3] bg-neutral-900">
              <LazyVideo src={surveillance5} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Desktop Layout: Exact Masonry match */}
        <div className="hidden lg:grid grid-cols-4 gap-5 auto-rows-[760px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 xl:gap-5">
            <div className="rounded-xl overflow-hidden aspect-[4/4] shadow-lg">
              <LazyVideo src={surveillance1} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl bg-white p-6 shadow-lg">
              <h3 className="font-roboto font-bold text-[16px] text-neutral-900 mb-1">95%+ Detection Accuracy:</h3>
              <p className="font-roboto text-[14.5px] leading-[1.6] text-neutral-600 pr-2">Reduce false alarms and maximize your overall facility security.</p>
            </div>
            <div className="rounded-xl overflow-hidden aspect-[3/4] shadow-lg">
              <LazyVideo src={surveillance8} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 xl:gap-5">
            <div className="rounded-[16px] overflow-hidden aspect-video  shadow-sm ">
              <LazyVideo src={surveillance2} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm ">
              <h3 className="font-roboto font-bold text-[16px] text-neutral-900 mb-1">1000+ Cameras, One View:</h3>
              <p className="font-roboto text-[14.5px] leading-[1.6] text-neutral-600 pr-2">Consolidate hundreds of feeds into one unified, intuitive dashboard.</p>
            </div>
            <div className="rounded-xl overflow-hidden aspect-video shadow-sm ">
              <LazyVideo src={surveillance7} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm ">
              <h3 className="font-roboto font-bold text-[16px] text-neutral-900 mb-1">99.9% Uptime:</h3>
              <p className="font-roboto text-[14.5px] leading-[1.6] text-neutral-600 pr-2">Mission-critical reliability designed for your continuous, daily operations.</p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm ">
              <h3 className="font-roboto font-bold text-[16px] text-neutral-900 mb-1">Enterprise Scale:</h3>
              <p className="font-roboto text-[14.5px] leading-[1.6] text-neutral-600 pr-2">Seamlessly integrates with any existing NVR/VMS security infrastructure.</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 xl:gap-5">
            <div className="rounded-xl bg-white p-6 shadow-sm ">
              <h3 className="font-roboto font-bold text-[16px] text-neutral-900 mb-1">24/7 Monitoring:</h3>
              <p className="font-roboto text-[14.5px] leading-[1.6] text-neutral-600 pr-2">Eliminate all blind spots across your locations, around the clock.</p>
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3]  shadow-sm ">
              <LazyVideo src={surveillance3} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm ">
              <h3 className="font-roboto font-bold text-[16px] text-neutral-900 mb-1">Continuous Learning:</h3>
              <p className="font-roboto text-[14.5px] leading-[1.6] text-neutral-600 pr-2">Advanced AI modules that evolve and improve every day.</p>
            </div>
            <div className="rounded-xl overflow-hidden aspect-[4/3] shadow-sm">
              <LazyVideo src={surveillance5} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 xl:gap-5">
            <div className="rounded-xl overflow-hidden aspect-[4/3] shadow-sm">
              <LazyVideo src={surveillance9} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden aspect-[3/4] shadow-sm">
              <LazyVideo src={surveillance6} className="w-full h-full object-cover" />
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm ">
              <h3 className="font-roboto font-bold text-[16px] text-neutral-900 mb-1">{"<2s Alert Time:"}</h3>
              <p className="font-roboto text-[14.5px] leading-[1.6] text-neutral-600 pr-2">Instant, real-time alerts delivered straight to your mobile device.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeeEverything;
