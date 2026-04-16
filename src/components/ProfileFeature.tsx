import { ReactNode } from "react";
import ScrollReveal from "./ScrollReveal";
import logoT from "@/assets/logo-t.png";

export interface ProfileFeatureProps {
  imageSrc: string;
  imageAlt: string;
  profileName: string;
  profileDesignation: string;
  title: ReactNode;
  descriptions: string[];
  className?: string;
}

const ProfileFeature = ({
  imageSrc,
  imageAlt,
  profileName,
  profileDesignation,
  title,
  descriptions,
  className = ""
}: ProfileFeatureProps) => {
  return (
    <div className={`grid md:grid-cols-12 gap-6 ${className}`}>
      {/* Profile Card */}
      <ScrollReveal direction="left" delay={100} className="md:col-span-5 relative rounded-md overflow-hidden h-[380px] shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-200">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover object-center"
          loading="lazy"
          width={640}
          height={640}
        />
        {/* Floating text box */}
        <div className="absolute bottom-5 left-5 right-5 rounded 
          bg-[#131313]/30 backdrop-blur-[43.5px] 
          p-3 pb-6 shadow-xl"
        >
          <p className="text-white font-roboto font-medium text-md sm:text-md leading-tight mb-0.5">
            {profileName}
          </p>
          <p className="text-neutral-300 font-roboto font-medium text-sm sm:text-sm mt-1 tracking-wide">
            {profileDesignation}
          </p>
        </div>
      </ScrollReveal>

      {/* Description Card */}
      <ScrollReveal direction="right" delay={200} className="md:col-span-7 rounded-md bg-gradient-to-br from-[#1b44c8] to-[#0a2365] p-10 sm:p-12 flex flex-col justify-center relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
        {/* Logo Watermark Decoration */}
        <div className="absolute top-[15px] right-[15px] pointer-events-none opacity-50">
          <img
            src={logoT}
            alt="Logo"
            className="h-16 md:h-[69px] mb-1 object-contain"
          />
        </div>

        <h3 className="text-white font-calistoga font-medium text-xl sm:text-[30px] md:text-[30px] uppercase tracking-wide mb-8 leading-[1.3] relative z-10 shadow-black/10 text-shadow-sm max-w-2xl">
          {title}
        </h3>

        <div className="space-y-6 relative z-10 font-sans max-w-2xl">
          {descriptions.map((desc, idx) => (
            <p key={idx} className="text-blue-50/90 font-roboto font-regular text-base sm:text-[16px] leading-relaxed font-normal">
              {desc}
            </p>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ProfileFeature;
