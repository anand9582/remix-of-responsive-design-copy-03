import surveillance1 from "@/assets/surveillance-1.mp4";
import surveillance2 from "@/assets/surveillance-2.mp4";
import surveillance3 from "@/assets/surveillance-3.mp4";
import surveillance4 from "@/assets/surveillance-4.jpg";
import surveillance5 from "@/assets/surveillance-5.mp4";
import surveillance6 from "@/assets/surveillance-6.mp4";
import surveillance7 from "@/assets/surveillance-7.mp4";
import surveillance8 from "@/assets/surveillance-8.mp4";
import surveillance9 from "@/assets/surveillance-9.jpg";

import { Target, LayoutPanelLeft, Server, Globe, Cctv, Zap, BrainCircuit } from "lucide-react";

const SeeEverything = () => {
  return (
    <section className="bg-[#FAFBFD] py-16 sm:py-24">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-roboto font-semibold text-neutral-800 text-[28px] sm:text-3xl md:text-[34px] mb-10 sm:mb-14">
          See Everything. Miss Nothing.
        </h2>

        {/* Mobile & Tablet Layout */}
        <div className="flex flex-col sm:flex-row gap-6 lg:hidden">
          {/* Mobile Col 1 */}
          <div className="flex flex-col gap-6 flex-1">
            <div className="rounded-[16px] overflow-hidden shadow-custom aspect-[4/5]">
              <video src={surveillance1} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[16px] bg-white p-6 shadow-custom border border-neutral-100">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-roboto font-bold text-[15px] text-neutral-900">95%+ Detection Accuracy:</h3>
                <Target className="w-5 h-5 text-neutral-400 stroke-[1.5]" />
              </div>
              <p className="text-neutral-500 text-[14px] leading-relaxed">Minimized false positives, maximized security.</p>
            </div>
            <div className="rounded-[16px] overflow-hidden shadow-custom aspect-video">
              <video src={surveillance2} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[16px] bg-white p-6 shadow-custom border border-neutral-100">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-roboto font-bold text-[15px] text-neutral-900">1000+ Cameras, One View:</h3>
                <LayoutPanelLeft className="w-5 h-5 text-neutral-400 stroke-[1.5]" />
              </div>
              <p className="text-neutral-500 text-[14px] leading-relaxed">A unified, single view across hundreds of feeds.</p>
            </div>
            <div className="rounded-[16px] overflow-hidden shadow-custom aspect-[9/16]">
              <video src={surveillance8} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[16px] bg-white p-6 shadow-custom border border-neutral-100">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-roboto font-bold text-[15px] text-neutral-900">24/7 Monitoring:</h3>
                <Cctv className="w-5 h-5 text-neutral-400 stroke-[1.5]" />
              </div>
              <p className="text-neutral-500 text-[14px] leading-relaxed">No blind spots across diverse locations.</p>
            </div>
            <div className="rounded-[16px] overflow-hidden shadow-custom aspect-[5/4]">
              <video src={surveillance3} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Mobile Col 2 */}
          <div className="flex flex-col gap-6 flex-1">
            <div className="rounded-[16px] bg-white p-6 shadow-custom border border-neutral-100">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-roboto font-bold text-[15px] text-neutral-900">{"<2s Alert Time:"}</h3>
                <Zap className="w-5 h-5 text-neutral-400 stroke-[1.5]" />
              </div>
              <p className="text-neutral-500 text-[14px] leading-relaxed">Real time analysis from feed to mobile alert.</p>
            </div>
            <div className="rounded-[16px] overflow-hidden shadow-custom aspect-[4/3]">
              <img src={surveillance9} alt="Refinery" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="rounded-[16px] bg-white p-6 shadow-custom border border-neutral-100">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-roboto font-bold text-[15px] text-neutral-900">99.9% Uptime:</h3>
                <Server className="w-5 h-5 text-neutral-400 stroke-[1.5]" />
              </div>
              <p className="text-neutral-500 text-[14px] leading-relaxed">Designed for 24/7 uninterrupted operations with enterprise-grade reliability.</p>
            </div>
            <div className="rounded-[16px] overflow-hidden shadow-custom aspect-[3/2]">
              <video src={surveillance5} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[16px] bg-white p-6 shadow-custom border border-neutral-100">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-roboto font-bold text-[15px] text-neutral-900">Enterprise Scale:</h3>
                <Globe className="w-5 h-5 text-neutral-400 stroke-[1.5]" />
              </div>
              <p className="text-neutral-500 text-[14px] leading-relaxed">Seamlessly integrates with any NVR/VMS infrastructure.</p>
            </div>
            <div className="rounded-[16px] overflow-hidden shadow-custom aspect-[4/5]">
              <video src={surveillance6} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[16px] bg-white p-6 shadow-custom border border-neutral-100">
              <div className="flex items-start justify-between mb-2">
                <h3 className="font-roboto font-bold text-[15px] text-neutral-900">Continuous Learning:</h3>
                <BrainCircuit className="w-5 h-5 text-neutral-400 stroke-[1.5]" />
              </div>
              <p className="text-neutral-500 text-[14px] leading-relaxed">AI modules that get smarter everyday.</p>
            </div>
          </div>
        </div>

        {/* Desktop Layout: Flexible Masonry-style precise match */}
        <div className="hidden lg:flex gap-4 xl:gap-6">
          {/* Column 1 */}
          <div className="flex flex-col gap-4 xl:gap-6 flex-1">
            <div className="rounded-[16px] overflow-hidden shadow-custom aspect-[4/5]">
              <video src={surveillance1} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[16px] bg-white p-6 shadow-custom border border-neutral-100">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-roboto font-bold text-[15px] xl:text-[16px] text-neutral-900">95%+ Detection Accuracy:</h3>
                <Target className="w-[18px] h-[18px] text-neutral-400 stroke-[2] flex-shrink-0" />
              </div>
              <p className="text-neutral-500 text-[13.5px] xl:text-[14.5px] leading-relaxed">Minimized false positives, maximized security.</p>
            </div>
            <div className="rounded-[16px] overflow-hidden shadow-custom aspect-[5/7]">
              <video src={surveillance8} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 xl:gap-6 flex-1">
            <div className="rounded-[16px] overflow-hidden shadow-custom aspect-video">
              <video src={surveillance2} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[16px] bg-white p-6 shadow-custom border border-neutral-100">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-roboto font-bold text-[15px] xl:text-[16px] text-neutral-900">1000+ Cameras, One View:</h3>
                <LayoutPanelLeft className="w-[18px] h-[18px] text-neutral-400 stroke-[2] flex-shrink-0" />
              </div>
              <p className="text-neutral-500 text-[13.5px] xl:text-[14.5px] leading-relaxed">A unified, single view across hundreds of feeds.</p>
            </div>
            <div className="rounded-[16px] overflow-hidden shadow-custom aspect-[3/2]">
              <video src={surveillance7} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[16px] bg-white p-6 shadow-custom border border-neutral-100">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-roboto font-bold text-[15px] xl:text-[16px] text-neutral-900">99.9% Uptime:</h3>
                <Server className="w-[18px] h-[18px] text-neutral-400 stroke-[2] flex-shrink-0" />
              </div>
              <p className="text-neutral-500 text-[13.5px] xl:text-[14.5px] leading-relaxed">Designed for 24/7 uninterrupted operations with enterprise-grade reliability.</p>
            </div>
            <div className="rounded-[16px] bg-white p-6 shadow-custom border border-neutral-100">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-roboto font-bold text-[15px] xl:text-[16px] text-neutral-900">Enterprise Scale:</h3>
                <Globe className="w-[18px] h-[18px] text-neutral-400 stroke-[2] flex-shrink-0" />
              </div>
              <p className="text-neutral-500 text-[13.5px] xl:text-[14.5px] leading-relaxed">Seamlessly integrates with any NVR/VMS infrastructure.</p>
            </div>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 xl:gap-6 flex-1">
            <div className="rounded-[16px] bg-white p-6 shadow-custom border border-neutral-100">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-roboto font-bold text-[15px] xl:text-[16px] text-neutral-900">24/7 Monitoring:</h3>
                <Cctv className="w-[18px] h-[18px] text-neutral-400 stroke-[2] flex-shrink-0" />
              </div>
              <p className="text-neutral-500 text-[13.5px] xl:text-[14.5px] leading-relaxed">No blind spots across diverse locations.</p>
            </div>
            <div className="rounded-[16px] overflow-hidden shadow-custom aspect-[5/4]">
              <video src={surveillance3} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[16px] bg-white p-6 shadow-custom border border-neutral-100">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-roboto font-bold text-[15px] xl:text-[16px] text-neutral-900">{"<2s Alert Time:"}</h3>
                <Zap className="w-[18px] h-[18px] text-neutral-400 stroke-[2] flex-shrink-0" />
              </div>
              <p className="text-neutral-500 text-[13.5px] xl:text-[14.5px] leading-relaxed">Real time analysis from feed to mobile alert.</p>
            </div>
            <div className="rounded-[16px] overflow-hidden shadow-custom aspect-[3/2]">
              <video src={surveillance5} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 xl:gap-6 flex-1">
            <div className="rounded-[16px] overflow-hidden shadow-custom aspect-[4/3]">
              <img src={surveillance9} alt="Refinery" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[16px] overflow-hidden shadow-custom aspect-[4/5]">
              <video src={surveillance6} autoPlay loop muted playsInline className="w-full h-full object-cover" />
            </div>
            <div className="rounded-[16px] bg-white p-6 shadow-custom border border-neutral-100">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-roboto font-bold text-[15px] xl:text-[16px] text-neutral-900">Continuous Learning:</h3>
                <BrainCircuit className="w-[18px] h-[18px] text-neutral-400 stroke-[2] flex-shrink-0" />
              </div>
              <p className="text-neutral-500 text-[13.5px] xl:text-[14.5px] leading-relaxed">AI modules that get smarter everyday.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeeEverything;

