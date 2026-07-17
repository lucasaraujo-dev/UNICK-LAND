"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ReactNode } from "react";

type AwakeRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AwakeAtmosphere() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,42,99,0.045)_1px,transparent_1px),linear-gradient(180deg,rgba(6,42,99,0.035)_1px,transparent_1px)] bg-[size:92px_92px] opacity-70" />
      <motion.div
        className="absolute left-[7%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#f47c20]/25 to-transparent"
        animate={{ opacity: [0.18, 0.42, 0.18] }}
        transition={{ duration: 5.6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[18%] top-0 h-full w-px bg-gradient-to-b from-transparent via-[#062a63]/22 to-transparent"
        animate={{ opacity: [0.12, 0.34, 0.12] }}
        transition={{
          duration: 6.4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8
        }}
      />
      <motion.div
        className="absolute top-28 h-px w-[34vw] bg-gradient-to-r from-transparent via-[#f47c20]/38 to-transparent"
        animate={{ x: ["-35vw", "110vw"] }}
        transition={{ duration: 13, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-[18%] h-px w-[28vw] bg-gradient-to-r from-transparent via-[#062a63]/25 to-transparent"
        animate={{ x: ["110vw", "-35vw"] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          delay: 1.8
        }}
      />
    </div>
  );
}

export function AwakeReveal({ children, className, delay = 0 }: AwakeRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 34, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-90px" }}
      transition={{
        duration: 0.72,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AwakeStagger({
  children,
  className,
  delay = 0
}: AwakeRevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        show: {
          transition: {
            delayChildren: delay,
            staggerChildren: 0.08
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AwakeItem({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 22 },
        show: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.58, ease: [0.21, 0.47, 0.32, 0.98] }}
      whileHover={{ y: -4 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AwakeMagnetic({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 170, damping: 18, mass: 0.25 });
  const springY = useSpring(y, { stiffness: 170, damping: 18, mass: 0.25 });
  const rotate = useTransform(springX, [-18, 18], [-1.5, 1.5]);

  return (
    <motion.div
      className={cn("will-change-transform", className)}
      style={{ x: springX, y: springY, rotate }}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * 0.16);
        y.set((event.clientY - rect.top - rect.height / 2) * 0.16);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}

export function AwakeKineticStrip() {
  const items = [
    "Limpeza",
    "Suporte",
    "Propriedade",
    "Checklist",
    "Facilities",
    "Atuação nacional"
  ];

  return (
    <div className="awake-strip overflow-hidden border-y border-[#d7deea]/80 bg-white/48 py-3 backdrop-blur">
      <div className="awake-strip-track flex w-max items-center gap-8">
        {[...items, ...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-xs font-bold uppercase tracking-[0.22em] text-[#53617a]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
