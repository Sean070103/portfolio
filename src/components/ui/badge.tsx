import { cn } from "@/lib/utils";
import type { ReactNode, HTMLAttributes } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "secondary" | "outline";
  children: ReactNode;
}

export function Badge({ variant = "secondary", className, children, ...props }: BadgeProps) {
  let base = "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold transition-colors";
  let color =
    variant === "secondary"
      ? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200"
      : "border border-primary text-primary bg-transparent";
  return (
    <span className={cn(base, color, className)} {...props}>
      {children}
    </span>
  );
} 