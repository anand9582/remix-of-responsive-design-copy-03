import * as React from "react";
import { Diamond } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ServiceBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const ServiceBadge: React.FC<ServiceBadgeProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EEF2FF] text-blue-600 text-[14px] font-bold tracking-[0.08em] uppercase",
        className
      )}
      {...props}
    >
      <Diamond className="w-3.5 h-3.5 text-blue-700" fill="currentColor" />
      {children}
    </div>
  );
};

export default ServiceBadge;
