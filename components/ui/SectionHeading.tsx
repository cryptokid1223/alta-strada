import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  label: string;
  title: ReactNode;
  subtitle?: ReactNode;
  alignment?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  label,
  title,
  subtitle,
  alignment = "center",
  className
}: SectionHeadingProps) {
  const alignClass =
    alignment === "center"
      ? "items-center text-center mx-auto"
      : "items-start text-left";

  return (
    <div
      className={cn(
        "mb-10 flex flex-col gap-3 max-w-3xl",
        alignClass,
        alignment === "center" && "max-w-3xl",
        className
      )}
    >
      <p className="section-label">{label}</p>
      <h2 className="font-heading text-3xl md:text-4xl font-normal text-gray-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base md:text-lg leading-relaxed text-gray-600">
          {subtitle}
        </p>
      )}
    </div>
  );
}
