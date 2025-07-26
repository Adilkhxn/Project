import * as React from "react";

const HamburgerIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="4" y1="6" x2="20" y2="6" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2" strokeLinecap="round" />
    <line x1="4" y1="18" x2="20" y2="18" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export default HamburgerIcon;
