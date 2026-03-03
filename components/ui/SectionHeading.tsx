import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
  alignment?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  alignment = "left",
  className
}: SectionHeadingProps) {
  const alignClass =
    alignment === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={cn("mb-10 flex flex-col gap-3", alignClass, className)}>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.16em] text-silver">
          {eyebrow}
        </p>
      )}
      <h2 className="heading-serif text-2xl sm:text-3xl font-semibold text-white">
        {title}
      </h2>
      {subtitle && (
        <div className="max-w-2xl text-sm sm:text-base text-slate">{subtitle}</div>
      )}
    </div>
  );
}

