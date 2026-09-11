import { ReactNode, useRef } from "react";
import { useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import logoT from "@/assets/logo-t.png";

export interface ProfileFeatureProps {
  imageSrc: string;
  imageAlt?: string;
  profileName?: string;
  profileDesignation?: string;
  title: ReactNode;
  descriptions: string[];
  className?: string;
  variant?: "image" | "video";
}

const ProfileFeature = ({
  imageSrc,
  imageAlt,
  profileName,
  profileDesignation,
  title,
  descriptions,
  className = "",
  variant = "image",
}: ProfileFeatureProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "600px" });

  return (
    <div ref={ref} className={`grid md:grid-cols-12 gap-6 ${className}`}>

      {/* LEFT CARD */}
      <ScrollReveal
        direction="left"
        delay={100}
        className={`md:col-span-5 flex flex-col ${variant === "image"
          ? profileName
            ? "relative rounded-md overflow-hidden border border-slate-200 shadow-[0_8px_30px_rgb(0,0,0,0.06)] h-[300px] sm:h-[380px] md:h-full"
            : "relative rounded-md overflow-hidden h-[300px] sm:h-[380px] md:h-full"
          : "rounded-xl bg-[#1D1D1F] p-6 items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.15)] h-full"
          }`}
      >

        {/* 🖼 IMAGE VERSION (HOME PAGE) */}
        {variant === "image" && (
          <>
            <img
              src={imageSrc}
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />

            {/* Overlay */}
            {profileName && (
              <div className="absolute bottom-5 left-5 right-5 rounded bg-[#131313]/30 backdrop-blur-[40px] p-3 pb-5">
                <p className="font-roboto text-white text-lg lg:text-md  font-medium">
                  {profileName}
                </p>
                {profileDesignation && (
                  <p className="font-roboto text-neutral-300  text-md lg:text-md mt-1">
                    {profileDesignation}
                  </p>
                )}
              </div>
            )}
          </>
        )}

        {/* 🎥 VIDEO VERSION (INNER PAGE) */}
        {variant === "video" && (
          isInView ? (
            <video
              src={imageSrc}
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[520px] object-contain drop-shadow-2xl"
            />
          ) : null
        )}

      </ScrollReveal>

      {/* RIGHT CARD */}
      <ScrollReveal
        direction="right"
        delay={200}
        className="md:col-span-7 rounded-lg bg-gradient-to-br from-[#1b44c8] to-[#0a2365] p-5 py-7 sm:p-12 lg:pr-16 flex flex-col justify-center relative overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] h-full"
      >
        {/* Watermark */}
        <div className="absolute top-[15px] right-[15px] opacity-50">
          <img src={logoT} alt="Logo" className="h-16 object-contain" />
        </div>

        <h3 className="text-white font-calistoga font-regular text-[28px] md:text-[30px] uppercase mb-8 leading-[39px] tracking-[0.04em] max-w-2xl">
          {title}
        </h3>

        <div className="space-y-5 max-w-2xl">
          {descriptions.map((desc, idx) => (
            <p key={idx} className="font-roboto text-[16px]  lg:text-[16px] font-normal leading-[150%] tracking-[0.005em] sm:leading-[24px] tracking-normal text-white">
              {desc}
            </p>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
};

export default ProfileFeature;