import { ButtonHTMLAttributes, ReactNode, cloneElement, isValidElement } from "react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "outline";
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  className,
  variant = "primary",
  asChild,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-primary focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-blue-primary px-5 py-2.5 text-white shadow-sm hover:bg-blue-dark hover:scale-[1.03] hover:-translate-y-0.5 active:scale-[0.99] disabled:opacity-60 disabled:hover:scale-100 disabled:hover:translate-y-0",
    outline:
      "border-2 border-blue-primary bg-transparent px-5 py-2.5 text-blue-primary hover:bg-blue-pale hover:border-blue-dark hover:text-blue-dark"
  };

  const combinedClassName = cn(base, variants[variant], className);

  if (asChild && isValidElement(children)) {
    return cloneElement(children as React.ReactElement<{ className?: string }>, {
      className: cn((children as React.ReactElement<{ className?: string }>).props?.className, combinedClassName)
    });
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
}
