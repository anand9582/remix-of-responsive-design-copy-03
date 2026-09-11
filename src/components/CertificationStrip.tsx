
// import your icons
import iso1 from "@/assets/logo-img/ico-icon.png";
import iso2 from "@/assets/logo-img/cmmi-icon.png";
import iso3 from "@/assets/logo-img/ico-icon.png";
import iso4 from "@/assets/logo-img/ico-icon.png";
import iso5 from "@/assets/logo-img/ico-icon.png";

const certifications = [
  { img: iso1, label: "ISO/IEC 27001:2013" },
  { img: iso2, label: "CMMI Maturity Level 5" },
  { img: iso3, label: "ISO 9001:2015" },
  { img: iso4, label: "ISO 14001:2015" },
  { img: iso5, label: "ISO/IEC 20000-1:2018" },
];

const CertificationStrip = () => {
  return (
    <div className="w-full flex justify-center  sm:px-6 lg:px-0">
      <div className="w-full bg-[#f8fafc] border border-slate-100 rounded-[24px]  lg:p-5 grid grid-cols-2 gap-3 lg:flex lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:bg-white lg:shadow-[0_8px_30px_rgba(0,0,0,0.08)] lg:px-16 lg:py-5 lg:rounded-2xl lg:border-none lg:max-w-7xl">

        {certifications.map((item, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center justify-center text-center p-4 bg-white rounded-2xl border border-slate-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)] lg:bg-transparent lg:border-none lg:shadow-none lg:p-0 lg:min-w-[120px] ${idx === 4 ? "col-span-2 w-[calc(50%-8px)] mx-auto lg:col-span-1 lg:mx-0 lg:w-auto" : ""
              }`}
          >
            <img
              src={item.img}
              alt={item.label}
              className="h-12 mb-2 object-contain"
            />
            <p className="text-[16px] font-roboto lg:text-[14px] text-neutral-800 font-medium lg:leading-[18px] tracking-[0.015em] mt-1">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default CertificationStrip;