import { cn } from "@/lib/utils";

export const BorderBeam = ({ size = 200 }: { size?: number }) => {
  return (
    <div
      style={
        {
          "--size": size,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:2px_solid_transparent]",

        // mask styles
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",

        // pseudo styles
        "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:1s] after:[background:linear-gradient(to_left,#adb5bd,#ced4da,transparent)] after:[offset-anchor:90%_50%] after:[offset-path:rect(0_auto_auto_0_round_250px)]"
      )}
    />
  );
};

