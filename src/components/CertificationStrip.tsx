
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
    <div className="w-full flex justify-center">
      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] px-6 py-5 flex items-center justify-between gap-10 max-w-7xl w-full">

        {certifications.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-center text-center min-w-[120px]"
          >
            <img
              src={item.img}
              alt={item.label}
              className="h-10  mb-2"
            />
            <p className="text-[12px] text-gray-600 font-medium leading-tight">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
};

export default CertificationStrip;