import surveillance1 from "@/assets/surveillance-1.mp4";
import surveillance2 from "@/assets/surveillance-2.mp4";
import surveillance3 from "@/assets/surveillance-3.mp4";
import surveillance5 from "@/assets/surveillance-5.mp4";
import surveillance6 from "@/assets/surveillance-6.mp4";
import surveillance7 from "@/assets/surveillance-7.mp4";
import surveillance8 from "@/assets/surveillance-8.mp4";
import surveillance9 from "@/assets/surveillance-9.mp4";

import { Target, LayoutPanelLeft, Server, Globe, Cctv, Zap, BrainCircuit } from "lucide-react";

const SeeEverything = () => {
  return (
    <section className="bg-[linear-gradient(116.72deg,#F5F5F5_0%,#F5F5F5_100%)] py-16 sm:py-7">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-roboto font-medium text-neutral-600 text-[30px]  sm:text-[30px]  mb-10 sm:mb-8">
          See Everything. Miss Nothing.
        </h2>

        {/* Mobile & Tablet Layout */}
        <div className="flex flex-col sm:flex-row gap-6 lg:hidden">
          {/* Mobile Col 1 */}
          <div className="flex flex-col gap-6 flex-1">
            <div className="rounded-md overflow-hidden shadow-lg aspect-[2/3]">
              <video src={surveillance1} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-md bg-white p-6 shadow-lg border border-neutral-100">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-roboto font-bold text-[15px] text-neutral-900">95%+ Detection Accuracy:</h3>
                <Target className="w-5 h-5 text-neutral-400 stroke-[1.5]" />
              </div>
              <p className="font-roboto font-normal text-base leading-[150%] tracking-normal">Minimized false positives, maximized security.</p>
            </div>
            <div className="rounded-md overflow-hidden shadow-lg aspect-video">
              <video src={surveillance2} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-md bg-white p-6 shadow-lg border border-neutral-100">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-roboto font-bold text-[15px] text-neutral-900">1000+ Cameras, One View:</h3>
                <LayoutPanelLeft className="w-5 h-5 text-neutral-400 stroke-[1.5]" />
              </div>
              <p className="font-roboto font-normal text-base leading-[150%] tracking-normal">A unified, single view across hundreds of feeds.</p>
            </div>
            <div className="rounded-md overflow-hidden shadow-lg aspect-[9/16]">
              <video src={surveillance8} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-md bg-white p-6 shadow-lg border border-neutral-100">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-roboto font-bold text-[15px] text-neutral-900">24/7 Monitoring:</h3>
                <Cctv className="w-5 h-5 text-neutral-400 stroke-[1.5]" />
              </div>
              <p className="font-roboto font-normal text-base leading-[150%] tracking-normal">No blind spots across diverse locations.</p>
            </div>
            <div className="rounded-md overflow-hidden shadow-lg aspect-[5/4]">
              <video src={surveillance3} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Mobile Col 2 */}
          <div className="flex flex-col gap-6 flex-1">
            <div className="rounded-md bg-white p-6 shadow-lg border border-neutral-100">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-roboto font-bold text-[15px] text-neutral-900">{"<2s Alert Time:"}</h3>
              </div>
              <p className="font-roboto font-normal text-base leading-[150%] tracking-normal">Real time analysis from feed to mobile alert.</p>
            </div>
            <div className="rounded-md overflow-hidden shadow-lg aspect-[4/4]">
              <video src={surveillance9} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-md bg-white p-6 shadow-lg border border-neutral-100">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-roboto font-bold text-[15px] text-neutral-900">99.9% Uptime:</h3>
                <Server className="w-5 h-5 text-neutral-400 stroke-[1.5]" />
              </div>
              <p className="font-roboto font-normal text-base leading-[150%] tracking-normal">Mission-critical reliability designed for your continuous, daily operations.</p>
            </div>
            <div className="rounded-md overflow-hidden shadow-lg aspect-[3/3]">
              <video src={surveillance5} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-md bg-white p-6 shadow-lg border border-neutral-100">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-roboto font-bold text-[15px] text-neutral-900">Enterprise Scale:</h3>
                <Globe className="w-5 h-5 text-neutral-400 stroke-[1.5]" />
              </div>
              <p className="font-roboto font-normal text-base leading-[150%] tracking-normal">Seamlessly integrates with any existing NVR/VMS security infrastructure.</p>
            </div>
            <div className="rounded-md overflow-hidden shadow-lg aspect-[4/5]">
              <video src={surveillance6} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-md bg-white p-6 shadow-lg border border-neutral-100">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-roboto font-bold text-[15px] text-neutral-900">Continuous Learning:</h3>
              </div>
              <p className="font-roboto font-normal text-base leading-[150%] tracking-normal">Advanced AI modules that evolve and improve every day.</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Flexible Masonry-style precise match */}
        <div className="hidden lg:grid grid-cols-4 gap-4 xl:gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 xl:gap-6 h-full gap-4 xl:gap-6 flex-1">
            <div className="rounded-md overflow-hidden shadow-lg aspect-[4/3]">
              <video src={surveillance1} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-md bg-white p-6 shadow-lg border border-neutral-100">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-roboto font-bold text-[15px] xl:text-[16px] text-neutral-900">95%+ Detection Accuracy:</h3>
              </div>
              <p className="text-neutral-500 text-[13.5px] xl:text-[14.5px] leading-relaxed">Reduce false alarms and maximize your overall facility security.</p>
            </div>
            <div className="rounded-md overflow-hidden shadow-lg aspect-[5/6]">
              <video src={surveillance8} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 xl:gap-6 flex-1">
            <div className="rounded-md overflow-hidden shadow-lg aspect-video">
              <video src={surveillance2} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-md bg-white p-6 shadow-lg border border-neutral-100">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-roboto font-bold text-[15px] xl:text-[16px] text-neutral-900">1000+ Cameras, One View:</h3>
              </div>
              <p className="text-neutral-600 text-[13.5px] xl:text-[14.5px] leading-relaxed">Consolidate hundreds of feeds into one unified, intuitive dashboard.</p>
            </div>
            <div className="rounded-md overflow-hidden shadow-lg aspect-[2/2">
              <video src={surveillance7} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-md bg-white p-6 shadow-lg border border-neutral-100">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-roboto font-bold text-[15px] xl:text-[16px] text-neutral-900">99.9% Uptime:</h3>
              </div>
              <p className="text-neutral-500 text-[13.5px] xl:text-[14.5px] leading-relaxed">Designed for 24/7 uninterrupted operations with enterprise-grade reliability.</p>
            </div>
            <div className="rounded-md bg-white p-6 shadow-lg border border-neutral-100">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-roboto font-bold text-[15px] xl:text-[16px] text-neutral-900">Enterprise Scale:</h3>
              </div>
              <p className="text-neutral-500 text-[13.5px] xl:text-[14.5px] leading-relaxed">Seamlessly integrates with any NVR/VMS infrastructure.</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 xl:gap-6 flex-1">
            <div className="rounded-md bg-white p-6 shadow-lg border border-neutral-100">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-roboto font-bold text-[15px] xl:text-[16px] text-neutral-900">24/7 Monitoring:</h3>
              </div>
              <p className="text-neutral-500 text-[13.5px] xl:text-[14.5px] leading-relaxed">Eliminate all blind spots across your locations, around the clock.</p>
            </div>
            <div className="rounded-md overflow-hidden shadow-lg aspect-[5/4]">
              <video src={surveillance3} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-md bg-white p-6 shadow-lg border border-neutral-100">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-roboto font-bold text-[15px] xl:text-[16px] text-neutral-900">{"<2s Alert Time:"}</h3>
              </div>
              <p className="text-neutral-500 text-[13.5px] xl:text-[14.5px] leading-relaxed">Instant, real-time alerts delivered straight to your mobile device.</p>
            </div>
            <div className="rounded-md overflow-hidden shadow-lg h-[270px]">
              <video src={surveillance5} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 xl:gap-6 flex-1">
            <div className="rounded-md overflow-hidden shadow-lg aspect-[4/3]">
              <video src={surveillance9} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-md overflow-hidden shadow-lg h-[438px]">
              <video src={surveillance6} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-md bg-white p-6 shadow-lg border border-neutral-100">
              <div className="flex items-start justify-between mb-1">
                <h3 className="font-roboto font-bold text-[15px] xl:text-[16px] text-neutral-900">Continuous Learning:</h3>
              </div>
              <p className="text-neutral-500 text-[13.5px] xl:text-[14.5px] leading-relaxed">Advanced AI modules that evolve and improve every day.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeeEverything;

