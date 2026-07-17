"use client"

import { cn } from "@/lib/utils";
import { LucideIcon, Plus } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion, useSpring, useTransform, useInView } from "motion/react";

type aboutusData = {
  icon: LucideIcon;
  title: string;
  color: string;
}[];

type statisticsCounter = {
  title: string;
  count: number;
}[];

const AnimatedCounter = ({
  value,
  isInView,
}: {
  value: number;
  isInView: boolean;
}) => {
  const springValue = useSpring(0, {
    bounce: 0,
    duration: 2000,
  });

  const displayValue = useTransform(springValue, (current) =>
    Math.round(current)
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  return <motion.span>{displayValue}</motion.span>;
};

const AboutUs = ({
  aboutusData,
  statisticsCounter,
}: {
  aboutusData: aboutusData;
  statisticsCounter: statisticsCounter;
}) => {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true, margin: "-100px" });

  return (
    <section id="quem-somos" className="lg:py-20 sm:py-16 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-16">
        <div className="flex flex-col items-center justify-center gap-8 md:gap-16">
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98],
            }}
            className="flex flex-col items-center justify-center gap-5"
          >
            <p className="rounded-full border border-[#d7deea] bg-white px-4 py-2 text-sm font-semibold text-[#062a63]">
              Quem somos
            </p>
            <h2 className="max-w-5xl text-center text-3xl font-semibold tracking-tight text-[#071638] sm:text-4xl lg:text-5xl">
              A UNIK compreende a necessidade de cada cliente para entregar a
              estrutura certa, com alternativas práticas e resultados objetivos.
            </h2>
            <p className="max-w-3xl text-center text-base leading-relaxed text-[#53617a]">
              Com matriz no Rio de Janeiro e filiais operacionais em São Paulo,
              Minas Gerais, Rio Grande do Norte e Pernambuco, a empresa atua com
              expertise acumulada e infraestrutura pronta para diferentes
              demandas do território brasileiro.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-4">
              {aboutusData.map((item, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex items-center gap-3 px-6 py-2 rounded-full",
                    item.color
                  )}
                >
                    <item.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span
                    className={cn(
                      "text-xl sm:text-2xl font-semibold tracking-tight"
                    )}
                  >
                    {item.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
          <div
            ref={statsRef}
            className="w-full grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-0 rounded-[8px] border border-[#d7deea] bg-white/78 shadow-[0_22px_65px_-52px_rgba(6,42,99,0.72)]"
          >
            {statisticsCounter?.map((value, index) => {
              return (
                <div
                  key={index}
                  className="relative px-6 py-5 sm:py-10 gap-3 flex flex-col items-center justify-center"
                >
                  {index !== 0 && (
                    <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-40 bg-border" />
                  )}
                  <div className="flex gap-0 sm:gap-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-[#062a63]">
                    <Plus
                      strokeWidth={3.5}
                      className="w-5 h-5 sm:w-7 sm:h-7 lg:w-10 lg:h-10 text-[#f47c20]"
                    />
                    <AnimatedCounter
                      value={value.count}
                      isInView={isInView}
                    />
                  </div>
                  <p className="text-base font-normal text-muted-foreground text-center">
                    {value.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
