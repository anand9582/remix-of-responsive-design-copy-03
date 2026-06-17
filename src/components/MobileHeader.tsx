import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import logoCam from "@/assets/logo-cam.png";

interface MobileHeaderProps {
  onMenuClick: () => void;
}

const MobileHeader = ({ onMenuClick }: MobileHeaderProps) => {
  return (
    <header className="block lg:hidden fixed top-0 left-0 right-0 z-50 bg-[#07090e] border-b border-white/10 h-16 flex items-center">
      <div className="w-full px-6 flex items-center justify-between">
        <Link to="/">
          <img
            src={logoCam}
            alt="CamPulse"
            className="h-10 w-auto object-contain"
          />
        </Link>

        <button
          onClick={onMenuClick}
          className="text-white focus:outline-none"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
};

export default MobileHeader;