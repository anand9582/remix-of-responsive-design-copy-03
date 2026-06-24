import React, { SVGProps } from "react";

export interface CustomIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const IconWrapper = ({
  size = 36,
  className = "",
  viewBox = "0 0 36 34",
  children,
  ...props
}: CustomIconProps & { children: React.ReactNode }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      {children}
    </svg>
  );
};
