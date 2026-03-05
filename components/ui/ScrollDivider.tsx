import { cn } from "@/lib/utils";

type ScrollDividerProps = {
  variant?: "curve-bottom" | "curve-top" | "angle";
  className?: string;
};

/** Curved or angled SVG divider between sections for visual flow */
export function ScrollDivider({
  variant = "curve-bottom",
  className
}: ScrollDividerProps) {
  if (variant === "curve-bottom") {
    return (
      <div
        className={cn("relative h-12 w-full overflow-hidden", className)}
        aria-hidden
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 h-full w-full fill-off-white"
        >
          <path d="M0,120 L0,60 Q600,0 1200,60 L1200,120 Z" />
        </svg>
      </div>
    );
  }

  if (variant === "curve-top") {
    return (
      <div
        className={cn("relative h-12 w-full overflow-hidden", className)}
        aria-hidden
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 h-full w-full fill-gray-50"
        >
          <path d="M0,0 L1200,0 L1200,60 Q600,120 0,60 Z" />
        </svg>
      </div>
    );
  }

  // angle: diagonal clip
  return (
    <div
      className={cn(
        "h-16 w-full bg-gradient-to-b from-transparent to-off-white",
        "clip-path-[polygon(0_0,100%_0,100%_100%,0_30%)]",
        className
      )}
      aria-hidden
    />
  );
}
