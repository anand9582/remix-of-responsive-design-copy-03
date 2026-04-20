import { Link } from "react-router-dom";
import { ArrowLeft, Activity, Layers, ShieldCheck, MonitorPlay, MonitorSmartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// Assets
import pricingBg from "@/assets/pricing-bg.png";
import logoWhite from "@/assets/logowhite.png";

export default function Pricing() {
  return (
    <div className="min-h-screen md:h-screen w-full flex flex-col md:flex-row bg-white font-roboto font-sans overflow-x-hidden">

      {/* Left Panel - Blue Section with Exact Screenshot Background */}
      <div className="w-full md:w-[45%] xl:w-[641px] flex-shrink-0 relative flex flex-col justify-between px-6 sm:px-12 py-8 lg:py-10 text-white min-h-[500px] md:h-screen overflow-hidden">

        {/* Rotated Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute top-0 left-[-20%] w-[140%] h-[120%] bg-cover bg-center transform rotate-[-12deg] scale-125"
            style={{ backgroundImage: `url(${pricingBg})` }}
          />
        </div>

        {/* Blue Overlay (same tone as image) */}
        <div className="absolute inset-0 bg-[#0B2A78]/85" />

        {/* Top soft gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/80 via-transparent to-transparent" />

        {/* Bottom dark fade */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full items-start">

          {/* Header: Logo */}
          <div className="w-full flex items-center mb-8">
            <Link to="/">
              <img 
                src={logoWhite} 
                alt="Campulse" 
                className="h-[36px] md:h-[42px] object-contain" 
              />
            </Link>
          </div>

          {/* Float Card (Fully inside blue area) */}
          <div className="bg-white rounded-2xl text-slate-800 p-6 lg:p-7 shadow-[0_15px_40px_rgba(0,0,0,0.15)] relative w-[95%] lg:w-[90%] xl:w-[420px] max-w-lg z-20 mx-auto md:mx-0">
            <h3 className="font-bold text-[14px] mb-4 text-slate-900 tracking-tight">Whats New?</h3>

            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-[40px] h-[40px] rounded-xl bg-[#E8F0FF] flex items-center justify-center">
                  <Activity className="w-4 h-4 text-[#5A8DFF]" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-[12px] font-semibold text-slate-800 mb-0.5">Real-time Device Monitoring</h4>
                  <p className="text-[10.5px] text-slate-500 leading-relaxed max-w-[250px]">
                    Monitor camera feeds and IoT sensors in real-time with low-latency streaming.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-[40px] h-[40px] rounded-xl bg-[#E8F0FF] flex items-center justify-center">
                  <Layers className="w-4 h-4 text-[#5A8DFF]" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-[12px] font-semibold text-slate-800 mb-0.5">Centralized Playback</h4>
                  <p className="text-[10.5px] text-slate-500 leading-relaxed max-w-[250px]">
                    Access recorded footage from distributed storage nodes in one unified timeline.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-[40px] h-[40px] rounded-xl bg-[#E8F0FF] flex items-center justify-center">
                  <ShieldCheck className="w-4 h-4 text-[#5A8DFF]" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-[12px] font-semibold text-slate-800 mb-0.5">Smart Health Alerts</h4>
                  <p className="text-[10.5px] text-slate-500 leading-relaxed max-w-[250px]">
                    Receive instant notifications for device offline status, motion detection, and errors.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-[40px] h-[40px] rounded-xl bg-[#E8F0FF] flex items-center justify-center">
                  <MonitorPlay className="w-4 h-4 text-[#5A8DFF]" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-[12px] font-semibold text-slate-800 mb-0.5">Centralized Playback</h4>
                  <p className="text-[10.5px] text-slate-500 leading-relaxed max-w-[250px]">
                    Access recorded footage from distributed storage nodes in one unified timeline.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-[40px] h-[40px] rounded-xl bg-[#E8F0FF] flex items-center justify-center">
                  <MonitorSmartphone className="w-4 h-4 text-[#5A8DFF]" strokeWidth={2} />
                </div>
                <div>
                  <h4 className="text-[12px] font-semibold text-slate-800 mb-0.5">Easy Onboarding</h4>
                  <p className="text-[10.5px] text-slate-500 leading-relaxed max-w-[250px]">
                    Seamlessly discover and configure new cameras with our auto-provisioning tools.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-grow"></div>

          {/* Footer terms in blue box */}
          <div className="mt-4 pt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center text-[10.5px] text-white/50 w-full gap-3 relative z-20">
            <div>© 2025 Transline Security Systems. All rights reserved.</div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>



      {/* Right Panel - Form Section */}
      <div className="flex-1 w-full bg-white px-6 py-10 md:py-8 md:px-12 lg:px-16 xl:px-[10%] relative flex flex-col md:h-screen md:overflow-y-auto justify-center">

        <div className="w-full max-w-[540px] mx-auto flex flex-col relative">

          {/* Back Button */}
          <div className="absolute -left-2 -top-6 md:-left-12 md:-top-0">
            <Link
              to="/"
              className="w-[36px] h-[36px] rounded-full bg-[#f4f4f5] flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-[16px] h-[16px]" strokeWidth={2.5} />
            </Link>
          </div>

          <div className="mb-8 pt-8 md:pt-4">
            <h1 className="text-[25px] font-bold text-slate-900 mb-1 tracking-tight font-display">Request Pricing</h1>
            <p className="text-[12.5px] text-slate-500 font-medium leading-relaxed max-w-md">
              Tell us about your deployment needs and our team will share a tailored enterprise quotation.
            </p>
          </div>

          <form className="space-y-[14px]" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-[14px]">
              <div className="flex-1 space-y-1">
                <label className="text-[11.5px] font-bold text-slate-900">First Name<span className="text-red-500 ml-[2px]">*</span></label>
                <Input placeholder="eg. Ayush" className="bg-white text-[13px] font-medium placeholder:text-gray-400 border-gray-200 shadow-none focus-visible:ring-1 focus-visible:ring-blue-600 rounded-md h-10 px-3.5" />
              </div>
              <div className="flex-1 space-y-1">
                <label className="text-[11.5px] font-bold text-slate-900">Last Name<span className="text-red-500 ml-[2px]">*</span></label>
                <Input placeholder="Gupta" className="bg-white text-[13px] font-medium placeholder:text-gray-400 border-gray-200 shadow-none focus-visible:ring-1 focus-visible:ring-blue-600 rounded-md h-10 px-3.5" />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[11.5px] font-bold text-slate-900">Work Email<span className="text-red-500 ml-[2px]">*</span></label>
              <Input type="email" placeholder="ayushgupta@gmail.com" className="bg-white text-[13px] font-medium placeholder:text-gray-400 border-gray-200 shadow-none focus-visible:ring-1 focus-visible:ring-blue-600 rounded-md h-10 px-3.5" />
            </div>

            <div className="space-y-1">
              <label className="text-[11.5px] font-bold text-slate-900">Mobile phone number<span className="text-red-500 ml-[2px]">*</span></label>
              <Input type="tel" placeholder="736392747" className="bg-white text-[13px] font-medium placeholder:text-gray-400 border-gray-200 shadow-none focus-visible:ring-1 focus-visible:ring-blue-600 rounded-md h-10 px-3.5" />
            </div>

            <div className="space-y-1">
              <label className="text-[11.5px] font-bold text-slate-900">Job title<span className="text-red-500 ml-[2px]">*</span></label>
              <Input placeholder="Senior Product Manager" className="bg-white text-[13px] font-medium placeholder:text-gray-400 border-gray-200 shadow-none focus-visible:ring-1 focus-visible:ring-blue-600 rounded-md h-10 px-3.5" />
            </div>

            <div className="space-y-1">
              <label className="text-[11.5px] font-bold text-slate-900">Company name<span className="text-red-500 ml-[2px]">*</span></label>
              <Input placeholder="Transline Security Systems" className="bg-white text-[13px] font-medium placeholder:text-gray-400 border-gray-200 shadow-none focus-visible:ring-1 focus-visible:ring-blue-600 rounded-md h-10 px-3.5" />
            </div>

            <div className="space-y-1">
              <label className="text-[11.5px] font-bold text-slate-900">Message<span className="text-red-500 ml-[2px]">*</span></label>
              <Textarea placeholder="Tell us what you are looking for" className="bg-white text-[13px] font-medium placeholder:text-gray-400 border-gray-200 shadow-none focus-visible:ring-1 focus-visible:ring-blue-600 rounded-md min-h-[85px] resize-none px-3.5 py-3" />
            </div>

            <div className="pt-5 flex justify-center">
              <Button type="submit" className="bg-[#19409A] hover:bg-[#12317A] text-white rounded-[100px] px-10 h-[46px] text-[13.5px] font-semibold shadow-[0_8px_20px_rgba(25,64,154,0.3)] transition-all tracking-wide">
                Submit Request
              </Button>
            </div>
          </form>

        </div>
      </div>
    </div>
  );
}
