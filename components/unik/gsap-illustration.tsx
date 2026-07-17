"use client";

import { ReactNode, useEffect, useRef } from "react";
import gsap from "gsap";

type GsapIllustrationProps = {
  children: ReactNode;
  className?: string;
  intensity?: "soft" | "hero";
};

export function GsapIllustration({
  children,
  className,
  intensity = "soft"
}: GsapIllustrationProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0.96, y: 10, scale: intensity === "hero" ? 0.985 : 0.995 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "power3.out"
        }
      );

      gsap.to(element, {
        y: intensity === "hero" ? -10 : -7,
        rotate: intensity === "hero" ? 0.35 : 0.25,
        duration: intensity === "hero" ? 3.6 : 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true
      });
    }, element);

    return () => ctx.revert();
  }, [intensity]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
