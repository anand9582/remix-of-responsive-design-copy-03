import { Link } from "react-router-dom";
import { ArrowLeft, Activity, ShieldCheck, MonitorSmartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// Assets
import pricingBg from "@/assets/pricing-bg.png";
import logoWhite from "@/assets/logowhite.png";
import { CentralizedIcon, PlayerIcon } from "@/components/icons/CommonIcons";
export default function Pricing() {
  const features = [
    {
      icon: Activity,
      title: "Real-time Device Monitoring",
      description:
        "Monitor camera feeds and IoT sensors in real-time with low-latency streaming.",
    },
    {
      icon: CentralizedIcon,
      title: "Centralized Playback",
      description:
        "Access recorded footage from distributed storage nodes in one unified timeline.",
    },
    {
      icon: ShieldCheck,
      title: "Smart Health Alerts",
      description:
        "Receive instant notifications for device offline status, motion detection, and errors.",
    },
    {
      icon: PlayerIcon,
      title: "Easy Onboarding",
      description:
        "Seamlessly discover and configure new cameras with our auto-provisioning tools.",
    },
    {
      icon: MonitorSmartphone,
      title: "Easy Onboarding",
      description:
        "Seamlessly discover and configure new cameras with our auto-provisioning tools.",
    },
  ];

  return (
    <div className="min-h-screen flex bg-white font-roboto overflow-hidden">
      {/* Left Side - Gradient with Features */}
      <div className="hidden lg:flex w-full md:w-[45%] xl:max-w-[621px] relative h-screen">
        <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(158.17deg,_#123391_12.13%,_#010C2B_96.95%)]">
          <div
            className="absolute top-[40%] left-[-20%] w-[140%] h-[120%] bg-cover bg-center transform rotate-[-12deg] scale-125 mix-blend-overlay opacity-60"
            style={{ backgroundImage: `url(${pricingBg})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1E3A8A]/80 via-transparent to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#04123b]/80 via-[#0B2A78]/40 to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 flex flex-col w-full p-8 lg:p-8 xl:w-[620px] h-full justify-between">
          <div className="mb-6">
            <Link to="/">
              <img
                src={logoWhite}
                alt="Campulse"
                className="h-[36px] md:h-[42px] object-contain"
              />
            </Link>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <div className="bg-white backdrop-blur-sm rounded-2xl p-6 w-[390px] xl:w-[380px] shadow-xl">
              <h3 className="text-md font-roboto font-semibold text-slate-800 mb-5">What's New?</h3>
              <div className="space-y-4">
                {features.map((feature, index) => {
                  const isLast = index === features.length - 1;
                  return (
                    <div key={index} className="flex gap-4 items-start mb-6">
                      <div className="flex-shrink-0 w-8 h-8 rounded bg-blue-100 flex items-center justify-center mt-0.5">
                        <feature.icon className="w-4 h-4 text-blue-600" strokeWidth={2.5} />
                      </div>

                      <div>
                        <h4 className="font-roboto font-normal text-base leading-[150%] tracking-normal">
                          {feature.title}
                        </h4>
                        <p
                          className={`font-roboto font-normal text-slate-600 leading-[150%] tracking-normal text-[13px] ${isLast ? "mb-0" : "mb-2"
                            }`}
                        >
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mt-6 text-white gap-2">
            <span className="font-roboto font-normal text-xs leading-[150%] tracking-[0.015em]">© 2025 Transline Security Systems. All rights reserved.</span>
            <div className="flex gap-2 font-medium">
              <a href="#" className="hover:text-white transition-colors font-roboto font-normal text-xs leading-[150%] tracking-[0.015em]">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors font-roboto font-normal text-xs leading-[150%] tracking-[0.015em]">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Pricing Form */}
      <div className="w-full flex-1 flex items-center justify-center p-6 md:p-8 lg:p-12 xl:p-[7%] bg-white relative h-screen overflow-y-auto">
        <Link
          to="/"
          className="absolute top-4 left-6 md:top-8 md:left-8 p-2.5 rounded-full bg-[#F5F5F5] hover:bg-slate-200 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-slate-600" />
        </Link>

        <div className="w-full max-w-[700px] mt-4">
          <div className="mb-7">
            <h2 className="font-roboto font-semibold text-[24px] leading-[120%] tracking-[-0.02em] mb-2">Request Pricing</h2>
            <p className="text-[13px] font-roboto text-gray-500 font-medium leading-[1.6]">
              Tell us about your deployment needs and our team will share a tailored enterprise quotation.
            </p>
          </div>

          <form className="space-y-[14px]" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-[14px]">
              <div className="flex-1 space-y-1.5">
                <label className="text-sm font-medium text-slate-900">First Name <span className="text-red-500">*</span></label>
                <Input placeholder="eg. Ayush" className="bg-white text-[13px] font-regular placeholder:text-slate-400 border-slate-200 shadow-sm focus-visible:ring-1 focus-visible:ring-blue-600 rounded-sm  px-3.5" />
              </div>
              <div className="flex-1 space-y-1.5">
                <label className="text-sm font-medium text-slate-900">Last Name <span className="text-red-500">*</span></label>
                <Input placeholder="Gupta" className="bg-white text-[13px] font-regular placeholder:text-slate-400 border-slate-200 shadow-sm focus-visible:ring-1 focus-visible:ring-blue-600 rounded-sm  px-3.5" />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-900">Work Email <span className="text-red-500">*</span></label>
              <Input type="email" placeholder="ayushgupta@gmail.com" className="bg-white text-[13px] font-regular placeholder:text-slate-400 border-slate-200 shadow-sm focus-visible:ring-1 focus-visible:ring-blue-600 rounded-sm  px-3.5" />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-900">Mobile phone number <span className="text-red-500">*</span></label>
              <Input type="tel" placeholder="736392747" className="bg-white text-[13px] font-regular placeholder:text-slate-400 border-slate-200 shadow-sm focus-visible:ring-1 focus-visible:ring-blue-600 rounded-sm  px-3.5" />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-900">Job title <span className="text-red-500">*</span></label>
              <Input placeholder="Senior Product Manager" className="bg-white text-[13px] font-regular placeholder:text-slate-400 border-slate-200 shadow-sm focus-visible:ring-1 focus-visible:ring-blue-600 rounded-sm px-3.5" />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-900">Company name <span className="text-red-500">*</span></label>
              <Input placeholder="Transline Security Systems" className="bg-white text-[13px] font-regular placeholder:text-slate-400 border-slate-200 shadow-sm focus-visible:ring-1 focus-visible:ring-blue-600 rounded-sm  px-3.5" />
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-900">Message <span className="text-red-500">*</span></label>
              <Textarea placeholder="Tell us what you are looking for" className="bg-white text-[13px] font-regular placeholder:text-slate-400 border-slate-200 shadow-sm focus-visible:ring-1 focus-visible:ring-blue-600 rounded-sm min-h-[30px] resize-none px-3.5 py-3" />
            </div>

            <div className="flex w-full justify-center">
              <div className="pt-2 flex w-full mt-2 justify-center">
                <Button
                  type="submit"
                  className="
                            bg-[linear-gradient(105.27deg,_#2563EB_-13.4%,_#153885_82.59%)]
                            hover:opacity-90
                            text-white
                            rounded-full
                            px-10
                            h-[46px]
                            text-[14px]
                            font-bold
                            shadow-[0_8px_20px_rgba(37,99,235,0.35)]
                            transition-all
                            flex mx-auto md:mx-0
                            w-[80%] md:w-auto
                            justify-center
                          "
                >
                  Submit Request
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
