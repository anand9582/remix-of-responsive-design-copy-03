import React, { SVGProps } from "react";

export interface CustomIconProps extends SVGProps<SVGSVGElement> {
  size?: number | string;
  className?: string;
}

export const DashboardIcon = ({ size = 24, className = "", ...props }: CustomIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 21V8C10 7.73478 9.89464 7.48043 9.70711 7.29289C9.51957 7.10536 9.26522 7 9 7H4C3.73478 7 3.48043 7.10536 3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 20.2652 3.10536 20.5196 3.29289 20.7071C3.48043 20.8946 3.73478 21 4 21H16C16.2652 21 16.5196 20.8946 16.7071 20.7071C16.8946 20.5196 17 20.2652 17 20V15C17 14.7348 16.8946 14.4804 16.7071 14.2929C16.5196 14.1054 16.2652 14 16 14H3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};


export const ClockIcon = ({ size = 24, className = "", ...props }: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M12 6V12L16 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 21.1601C14.2026 21.9453 12.214 22.1846 10.2816 21.8481C8.34918 21.5117 6.55841 20.6144 5.13212 19.2679C3.70583 17.9214 2.70702 16.1852 2.26 14.2754C1.81297 12.3656 1.93747 10.3664 2.618 8.52681C3.29853 6.6872 4.50505 5.08834 6.08737 3.92923C7.6697 2.77011 9.55797 2.10193 11.5172 2.00785C13.4764 1.91377 15.42 2.39794 17.1061 3.40009C18.7922 4.40225 20.1464 5.87815 21 7.64409"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 11.5V17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 21.5H20.01"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const BlocksIcon = ({
  size = 24,
  className = "",
  ...props
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M20 14H16C14.8954 14 14 14.8954 14 16V20C14 21.1046 14.8954 22 16 22H20C21.1046 22 22 21.1046 22 20V16C22 14.8954 21.1046 14 20 14Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 2H4C2.89543 2 2 2.89543 2 4V8C2 9.10457 2.89543 10 4 10H8C9.10457 10 10 9.10457 10 8V4C10 2.89543 9.10457 2 8 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 14V15C7 15.5304 7.21071 16.0391 7.58579 16.4142C7.96086 16.7893 8.46957 17 9 17H10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 7H15C15.5304 7 16.0391 7.21071 16.4142 7.58579C16.7893 7.96086 17 8.46957 17 9V10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const SettingsIcon = ({
  size = 24,
  className = "",
  ...props
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M10.1 2.18005C11.3548 1.93543 12.6451 1.93543 13.9 2.18005"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6 3.70996C18.6622 4.42822 19.5757 5.34503 20.29 6.40996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.8199 10.1001C22.0646 11.355 22.0646 12.6452 21.8199 13.9001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.29 17.6001C19.5717 18.6624 18.6549 19.5758 17.59 20.2901"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.9 21.8201C12.6451 22.0644 11.3549 22.0644 10.1 21.8201"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.39996 20.2901C5.33769 19.5718 4.42427 18.655 3.70996 17.5901"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.18005 13.9001C1.93543 12.6452 1.93543 11.355 2.18005 10.1001"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.70996 6.39996C4.42822 5.33769 5.34503 4.42427 6.40996 3.70996"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const ChartIcon = ({
  size = 24,
  className = "",
  ...props
}: SVGProps<SVGSVGElement> & { size?: number | string }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M3 8L7 4L11 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 4V20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 12H15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 16H18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 20H21"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};


export const ClockFilledIcon = ({ className }: { className?: string }) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 6V12H16.5" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export default ClockFilledIcon;


export const SearchFilledIcon = ({
  size = 24,
  className = "",
  ...props
}: CustomIconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 11L10 13L14 9" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M21 21L16.7 16.7" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export const ImproveIcon = ({
  size = 22,
  className = "",
  ...props
}: CustomIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 22 22"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.11 6.01C21.24 8.37 21.45 11.06 20.71 13.56C19.97 16.07 18.33 18.22 16.1 19.58C13.87 20.95 11.22 21.44 8.65 20.97C6.08 20.49 3.77 19.08 2.18 17.01C0.59 14.93 -0.17 12.34 0.03 9.74C0.24 7.13 1.4 4.7 3.3 2.9C5.2 1.1 7.69 0.07 10.31 0C12.92 -0.06 15.47 0.84 17.45 2.54L19.75 0.24C19.9 0.09 20.11 0 20.33 0C20.54 0 20.75 0.09 20.9 0.24C21.05 0.39 21.14 0.6 21.14 0.81C21.14 1.03 21.05 1.24 20.9 1.39L11.15 11.14C11 11.29 10.79 11.38 10.58 11.38C10.36 11.38 10.15 11.29 10 11.14C9.85 10.99 9.76 10.78 9.76 10.56C9.76 10.35 9.85 10.14 10 9.99L12.82 7.17C12.05 6.67 11.14 6.44 10.23 6.51C9.32 6.59 8.46 6.97 7.8 7.6C7.13 8.23 6.69 9.06 6.56 9.96C6.42 10.87 6.6 11.79 7.05 12.59C7.51 13.38 8.22 14 9.07 14.34C9.92 14.67 10.86 14.72 11.74 14.46C12.61 14.2 13.38 13.65 13.9 12.9C14.43 12.15 14.68 11.24 14.63 10.33C14.62 10.22 14.64 10.12 14.68 10.02C14.71 9.92 14.77 9.82 14.84 9.74C14.91 9.66 15 9.6 15.09 9.55C15.19 9.51 15.29 9.48 15.4 9.47C15.62 9.46 15.83 9.54 15.99 9.68C16.07 9.75 16.13 9.84 16.18 9.93C16.22 10.03 16.25 10.13 16.26 10.24C16.33 11.53 15.96 12.81 15.21 13.87C14.46 14.92 13.37 15.69 12.12 16.04C10.88 16.39 9.55 16.31 8.36 15.8C7.17 15.3 6.18 14.4 5.57 13.26C4.96 12.12 4.75 10.8 4.99 9.53C5.22 8.26 5.89 7.1 6.87 6.26C7.85 5.41 9.09 4.93 10.38 4.88C11.68 4.84 12.95 5.23 13.98 6.01L16.3 3.7C14.6 2.29 12.45 1.56 10.25 1.65C8.05 1.73 5.96 2.63 4.38 4.16C2.8 5.69 1.84 7.75 1.69 9.95C1.54 12.14 2.2 14.32 3.55 16.05C4.91 17.79 6.85 18.96 9.02 19.35C11.19 19.74 13.42 19.31 15.29 18.16C17.16 17 18.54 15.19 19.16 13.08C19.78 10.96 19.59 8.7 18.64 6.71C18.55 6.52 18.54 6.29 18.61 6.09C18.68 5.89 18.83 5.72 19.03 5.63C19.22 5.54 19.45 5.52 19.65 5.6C19.85 5.67 20.02 5.82 20.11 6.01Z"
        fill="currentColor"
      />
    </svg>
  );
};

export const FootageIcon = ({
  size = 22,
  className = "",
  ...props
}: CustomIconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M22 12H18" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6 12H2" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 6V2" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 22V18" stroke="#525252" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export const LockIcon = ({
  size = 22,
  className = "",
  ...props
}: CustomIconProps) => {
  return (

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7 11.0002V7.00015C6.99876 5.7602 7.45828 4.56402 8.28938 3.64382C9.12047 2.72362 10.2638 2.14506 11.4975 2.02044C12.7312 1.89583 13.9671 2.23406 14.9655 2.96947C15.9638 3.70488 16.6533 4.785 16.9 6.00015" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>

  );
};
export const SimplifiedIcon = ({
  size = 22,
  className = "",
  ...props
}: CustomIconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.852 14.772L10.469 15.695" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M13.148 14.7722C13.512 14.6214 13.8428 14.4004 14.1214 14.1218C14.4 13.8433 14.6211 13.5125 14.7719 13.1485C14.9227 12.7845 15.0003 12.3944 15.0003 12.0004C15.0003 11.6064 14.9228 11.2162 14.772 10.8522C14.6212 10.4882 14.4003 10.1574 14.1217 9.87876C13.8431 9.60014 13.5123 9.37912 13.1483 9.22832C12.7843 9.07751 12.3942 8.99989 12.0002 8.99986C11.6062 8.99984 11.216 9.07742 10.852 9.22818L10.469 8.30518" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M13.148 9.22818L13.531 8.30518" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M13.53 15.696L13.148 14.772C12.784 14.9228 12.3938 15.0004 11.9998 15.0003C11.6058 15.0003 11.2157 14.9227 10.8517 14.7719C10.4877 14.6211 10.1569 14.4001 9.87834 14.1214C9.59975 13.8428 9.37877 13.5121 9.22801 13.148C9.07725 12.784 8.99967 12.3938 8.99969 11.9998C8.99972 11.6058 9.07735 11.2157 9.22815 10.8517C9.37895 10.4877 9.59998 10.1569 9.8786 9.87835C10.1572 9.59977 10.488 9.37878 10.852 9.22803" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M14.772 10.8522L15.695 10.4692" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M14.772 13.1479L15.695 13.5309" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M4.5 10H4C3.46957 10 2.96086 9.78929 2.58579 9.41421C2.21071 9.03914 2 8.53043 2 8V4C2 3.46957 2.21071 2.96086 2.58579 2.58579C2.96086 2.21071 3.46957 2 4 2H20C20.5304 2 21.0391 2.21071 21.4142 2.58579C21.7893 2.96086 22 3.46957 22 4V8C22 8.53043 21.7893 9.03914 21.4142 9.41421C21.0391 9.78929 20.5304 10 20 10H19.5" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M4.5 14H4C3.46957 14 2.96086 14.2107 2.58579 14.5858C2.21071 14.9609 2 15.4696 2 16V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H20C20.5304 22 21.0391 21.7893 21.4142 21.4142C21.7893 21.0391 22 20.5304 22 20V16C22 15.4696 21.7893 14.9609 21.4142 14.5858C21.0391 14.2107 20.5304 14 20 14H19.5" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6 18H6.01" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M6 6H6.01" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.22799 10.8522L8.30499 10.4692" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.22799 13.1479L8.30499 13.5309" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};


export const ReducedIcon = ({
  size = 22,
  className = "",
  ...props
}: CustomIconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.39 4.39009C15.5157 4.51592 15.6727 4.60594 15.8448 4.65089C16.0169 4.69583 16.1978 4.69406 16.369 4.64577C16.5402 4.59747 16.6954 4.50439 16.8186 4.37613C16.9418 4.24787 17.0286 4.08906 17.07 3.91609C17.1738 3.48399 17.3909 3.08736 17.699 2.76707C18.007 2.44677 18.3949 2.21437 18.8226 2.09381C19.2503 1.97325 19.7025 1.96888 20.1324 2.08116C20.5624 2.19343 20.9547 2.41829 21.2689 2.73258C21.5831 3.04687 21.8078 3.43922 21.9199 3.86924C22.0321 4.29926 22.0275 4.75139 21.9068 5.17908C21.7861 5.60677 21.5536 5.99456 21.2332 6.3025C20.9128 6.61045 20.5161 6.82743 20.084 6.93109C19.911 6.97249 19.7522 7.05927 19.6239 7.18249C19.4957 7.30571 19.4026 7.46091 19.3543 7.63208C19.306 7.80326 19.3042 7.98422 19.3492 8.15631C19.3941 8.3284 19.4842 8.48539 19.61 8.61109L21.293 10.2931C21.5172 10.5173 21.695 10.7834 21.8163 11.0763C21.9376 11.3691 22.0001 11.6831 22.0001 12.0001C22.0001 12.3171 21.9376 12.631 21.8163 12.9239C21.695 13.2168 21.5172 13.4829 21.293 13.7071L19.61 15.3901C19.4843 15.5159 19.3273 15.6059 19.1552 15.6509C18.9831 15.6958 18.8022 15.6941 18.631 15.6458C18.4598 15.5975 18.3046 15.5044 18.1814 15.3761C18.0582 15.2479 17.9714 15.0891 17.93 14.9161C17.8262 14.484 17.6091 14.0874 17.301 13.7671C16.993 13.4468 16.6051 13.2144 16.1774 13.0938C15.7496 12.9733 15.2975 12.9689 14.8675 13.0812C14.4375 13.1934 14.0453 13.4183 13.7311 13.7326C13.4169 14.0469 13.1922 14.4392 13.08 14.8692C12.9679 15.2993 12.9724 15.7514 13.0931 16.1791C13.2138 16.6068 13.4464 16.9946 13.7668 17.3025C14.0872 17.6104 14.4838 17.8274 14.916 17.9311C15.089 17.9725 15.2478 18.0593 15.376 18.1825C15.5043 18.3057 15.5974 18.4609 15.6457 18.6321C15.694 18.8033 15.6957 18.9842 15.6508 19.1563C15.6058 19.3284 15.5158 19.4854 15.39 19.6111L13.707 21.2931C13.4828 21.5173 13.2167 21.6951 12.9238 21.8164C12.6309 21.9377 12.317 22.0002 12 22.0002C11.683 22.0002 11.369 21.9377 11.0762 21.8164C10.7833 21.6951 10.5171 21.5173 10.293 21.2931L8.60999 19.6101C8.48428 19.4843 8.32729 19.3942 8.15521 19.3493C7.98312 19.3043 7.80216 19.3061 7.63098 19.3544C7.4598 19.4027 7.3046 19.4958 7.18138 19.624C7.05816 19.7523 6.97138 19.9111 6.92999 20.0841C6.82618 20.5162 6.60907 20.9128 6.30102 21.2331C5.99297 21.5534 5.6051 21.7858 5.17737 21.9064C4.74964 22.0269 4.29751 22.0313 3.86753 21.919C3.43755 21.8067 3.04527 21.5819 2.73109 21.2676C2.4169 20.9533 2.19217 20.561 2.08004 20.1309C1.96791 19.7009 1.97242 19.2488 2.09313 18.8211C2.21383 18.3934 2.44635 18.0056 2.76675 17.6977C3.08715 17.3897 3.48385 17.1728 3.91599 17.0691C4.08896 17.0277 4.24777 16.9409 4.37603 16.8177C4.50429 16.6945 4.59737 16.5393 4.64566 16.3681C4.69396 16.1969 4.69573 16.016 4.65078 15.8439C4.60584 15.6718 4.51581 15.5148 4.38999 15.3891L2.70699 13.7071C2.48281 13.4829 2.30499 13.2168 2.18366 12.9239C2.06234 12.631 1.9999 12.3171 1.9999 12.0001C1.9999 11.6831 2.06234 11.3691 2.18366 11.0763C2.30499 10.7834 2.48281 10.5173 2.70699 10.2931L4.38999 8.61009C4.51569 8.48426 4.67268 8.39423 4.84476 8.34929C5.01685 8.30435 5.19781 8.30612 5.36899 8.35441C5.54017 8.40271 5.69537 8.49579 5.81859 8.62405C5.94181 8.75231 6.02859 8.91111 6.06999 9.08409C6.17379 9.51619 6.3909 9.91281 6.69895 10.2331C7.00701 10.5534 7.39487 10.7858 7.8226 10.9064C8.25033 11.0269 8.70246 11.0313 9.13244 10.919C9.56242 10.8067 9.9547 10.5819 10.2689 10.2676C10.5831 9.95331 10.8078 9.56095 10.9199 9.13094C11.0321 8.70092 11.0275 8.24879 10.9068 7.8211C10.7861 7.39341 10.5536 7.00562 10.2332 6.69767C9.91282 6.38973 9.51612 6.17275 9.08399 6.06909C8.91101 6.02769 8.75221 5.94091 8.62394 5.81769C8.49568 5.69447 8.40261 5.53927 8.35431 5.36809C8.30601 5.19692 8.30424 5.01596 8.34919 4.84387C8.39413 4.67178 8.48416 4.51479 8.60999 4.38909L10.293 2.70709C10.5171 2.48291 10.7833 2.30509 11.0762 2.18377C11.369 2.06244 11.683 2 12 2C12.317 2 12.6309 2.06244 12.9238 2.18377C13.2167 2.30509 13.4828 2.48291 13.707 2.70709L15.39 4.39009Z" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};


export const LowerIcon = ({
  size = 22,
  className = "",
  ...props
}: CustomIconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 17H22V11" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M22 17L13.5 8.5L8.5 13.5L2 7" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export const ScanIcon = ({
  size = 22,
  className = "",
  ...props
}: CustomIconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 7V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H7" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M17 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V7" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M21 17V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H17" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V17" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7 12H17" stroke="#1D4ED8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};


export const LockIcons = ({
  size = 22,
  className = "",
  ...props
}: CustomIconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M19 10H5C3.89543 10 3 10.8954 3 12V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V12C21 10.8954 20.1046 10 19 10Z" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M7 10V7C7 5.67392 7.52678 4.40215 8.46447 3.46447C9.40215 2.52678 10.6739 2 12 2C13.3261 2 14.5979 2.52678 15.5355 3.46447C16.4732 4.40215 17 5.67392 17 7V10" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export const ManualAlertIcons = ({
  size = 22,
  className = "",
  ...props
}: CustomIconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 16H12.01" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 8V12" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M15.312 2C15.8424 2.00011 16.351 2.2109 16.726 2.586L21.414 7.274C21.7891 7.64899 21.9999 8.15761 22 8.688V15.312C21.9999 15.8424 21.7891 16.351 21.414 16.726L16.726 21.414C16.351 21.7891 15.8424 21.9999 15.312 22H8.688C8.15761 21.9999 7.64899 21.7891 7.274 21.414L2.586 16.726C2.2109 16.351 2.00011 15.8424 2 15.312V8.688C2.00011 8.15761 2.2109 7.64899 2.586 7.274L7.274 2.586C7.64899 2.2109 8.15761 2.00011 8.688 2H15.312Z" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};

export const TrendingIcons = ({
  size = 22,
  className = "",
  ...props
}: CustomIconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 17H22V11" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M22 17L13.5 8.5L8.5 13.5L2 7" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};


export const BrokenIcons = ({
  size = 22,
  className = "",
  ...props
}: CustomIconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14.5 12.5L9.5 7.5" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M9.5 12.5L14.5 7.5" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M20 3H4C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H20C21.1046 17 22 16.1046 22 15V5C22 3.89543 21.1046 3 20 3Z" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M12 17V21" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      <path d="M8 21H16" stroke="#FAFAFA" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  );
};






