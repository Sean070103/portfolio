import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md";
  children: ReactNode;
}

export function Button({
  variant = "default",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:pointer-events-none";
  const color =
    variant === "outline"
      ? "border border-primary text-primary bg-transparent hover:bg-primary/10"
      : variant === "ghost"
      ? "bg-transparent hover:bg-primary/10 text-primary"
      : "bg-primary text-white hover:bg-primary/90";
  const padding = size === "sm" ? "px-3 py-1.5 text-sm" : "px-4 py-2 text-base";
  return (
    <button className={cn(base, color, padding, className)} {...props}>
      {children}
    </button>
  );
} 