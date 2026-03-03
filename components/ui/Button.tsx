import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "ghost";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md border text-sm font-medium transition-colors focus-ring";

  const variants: Record<typeof variant, string> = {
    primary:
      "border-transparent bg-accent px-5 py-2.5 text-white hover:bg-accent-hover disabled:bg-accent disabled:opacity-60",
    ghost:
      "border-ice/70 bg-transparent px-4 py-2 text-silver hover:border-accent hover:text-white"
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}

