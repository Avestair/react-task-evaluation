import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "none";
  shadow?: "sm" | "md" | "lg" | "xl" | "2xl" | "none";
}

export default function Card({
  children,
  className = "",
  rounded = "lg",
  shadow = "md",
  ...props
}: CardProps) {
  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
    none: "rounded-none",
  };

  const shadowClasses = {
    sm: "shadow-sm",
    md: "shadow-md",
    lg: "shadow-lg",
    xl: "shadow-xl",
    "2xl": "shadow-2xl",
    none: "shadow-none",
  };

  return (
    <div
      className={`w-fit h-fit bg-white shadow-[#90929433]/20 p-4 rounded-[10px] ${roundedClasses[rounded]} ${shadowClasses[shadow]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
