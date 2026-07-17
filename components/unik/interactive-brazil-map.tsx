"use client";

import Image from "next/image";
import { AwakeReveal } from "@/components/unik/awake-motion";
import { MapPinned } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const bases = [
  {
    uf: "RJ",
    name: "Rio de Janeiro",
    detail: "Matriz",
    region: "Sudeste",
    x: 78,
    y: 63,
    active: true
  },
  {
    uf: "SP",
    name: "Sao Paulo",
    detail: "Filial operacional",
    region: "Sudeste",
    x: 61,
    y: 70
  },
  {
    uf: "MG",
    name: "Minas Gerais",
    detail: "Filial operacional",
    region: "Sudeste",
    x: 68,
    y: 56
  },
  {
    uf: "PE",
    name: "Pernambuco",
    detail: "Filial operacional",
    region: "Nordeste",
    x: 91,
    y: 36
  },
  {
    uf: "RN",
    name: "Rio Grande do Norte",
    detail: "Filial operacional",
    region: "Nordeste",
    x: 93,
    y: 31
  }
];

const regions = [
  {
    name: "Sudeste",
    summary: "Matriz e filiais operacionais",
    states: bases.filter((base) => base.region === "Sudeste")
  },
  {
    name: "Nordeste",
    summary: "Atendimento regional estruturado",
    states: bases.filter((base) => base.region === "Nordeste")
  }
];

export function InteractiveBrazilMap() {
  const [selectedUf, setSelectedUf] = useState("RJ");
  const selected = bases.find((base) => base.uf === selectedUf) ?? bases[0];

  return (
    <div className="grid gap-5">
      <AwakeReveal>
        <div className="relative overflow-visible p-0">
          <Image
            src="/images/coverage-map-full.png"
            alt="Mapa do Brasil com bases de atuação da UNIK"
            width={560}
            height={557}
            className="h-auto w-full object-contain"
          />

          {bases.map((base) => {
            const isSelected = selectedUf === base.uf;

            return (
              <motion.button
                key={base.uf}
                type="button"
                aria-label={`${base.name} - ${base.detail}`}
                onMouseEnter={() => setSelectedUf(base.uf)}
                onFocus={() => setSelectedUf(base.uf)}
                onClick={() => setSelectedUf(base.uf)}
                className="absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow-[0_12px_30px_-16px_rgba(7,22,56,0.9)] outline-none transition"
                style={{
                  left: `${base.x}%`,
                  top: `${base.y}%`,
                  backgroundColor: isSelected ? "#f47c20" : "#062a63"
                }}
                animate={{
                  scale: isSelected ? [1, 1.16, 1] : 1,
                  boxShadow: isSelected
                    ? [
                        "0 0 0 0 rgba(244,124,32,0.28)",
                        "0 0 0 12px rgba(244,124,32,0)",
                        "0 0 0 0 rgba(244,124,32,0)"
                      ]
                    : "0 12px 30px -16px rgba(7,22,56,0.9)"
                }}
                transition={{
                  duration: 1.8,
                  repeat: isSelected ? Infinity : 0,
                  ease: "easeInOut"
                }}
              >
                {base.uf}
              </motion.button>
            );
          })}

          <motion.div
            key={selected.uf}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28 }}
            className="absolute left-3 top-3 rounded-[8px] border border-[#d7deea] bg-white/92 px-4 py-3 shadow-[0_18px_45px_-32px_rgba(6,42,99,0.75)] backdrop-blur"
          >
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#f47c20]">
              {selected.uf}
            </p>
            <p className="text-sm font-semibold text-[#071638]">
              {selected.name}
            </p>
            <p className="text-xs font-medium text-[#53617a]">
              {selected.detail} · {selected.region}
            </p>
          </motion.div>
        </div>
      </AwakeReveal>

      <AwakeReveal
        className="rounded-[8px] border border-[#d7deea] bg-white/88 p-5 shadow-[0_18px_55px_-46px_rgba(6,42,99,0.65)]"
        delay={0.08}
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-2 text-[#062a63]">
            <MapPinned className="h-5 w-5 text-[#f47c20]" />
            <p className="font-semibold">Onde atuamos</p>
          </div>
          <p className="text-sm font-medium text-[#53617a]">
            Bases no RJ, SP, MG, PE e RN
          </p>
        </div>

        <div className="mt-4 grid gap-4">
          {regions.map((region) => (
            <div
              key={region.name}
              className="rounded-[8px] border border-[#e1e7f0] bg-[#f8fafd] p-4"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-base font-semibold text-[#071638]">
                    {region.name}
                  </p>
                  <p className="text-xs font-medium text-[#53617a]">
                    {region.summary}
                  </p>
                </div>
                <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#062a63]">
                  {region.states.length} bases
                </span>
              </div>

              <div className="mt-4 grid gap-2">
                {region.states.map((state) => {
                  const isSelected = selectedUf === state.uf;

                  return (
                    <button
                      key={state.uf}
                      type="button"
                      onMouseEnter={() => setSelectedUf(state.uf)}
                      onFocus={() => setSelectedUf(state.uf)}
                      onClick={() => setSelectedUf(state.uf)}
                      className="grid grid-cols-[3rem_1fr_auto] items-center gap-3 rounded-[8px] bg-white px-3 py-2 text-left transition hover:-translate-y-0.5 hover:shadow-[0_16px_35px_-28px_rgba(6,42,99,0.8)]"
                    >
                      <span
                        className={
                          isSelected
                            ? "flex h-10 w-10 items-center justify-center rounded-full bg-[#f47c20] text-sm font-bold text-white"
                            : "flex h-10 w-10 items-center justify-center rounded-full bg-[#062a63] text-sm font-bold text-white"
                        }
                      >
                        {state.uf}
                      </span>
                      <div>
                        <p className="text-sm font-semibold text-[#071638]">
                          {state.name}
                        </p>
                        <p className="text-xs font-medium text-[#53617a]">
                          {state.detail}
                        </p>
                      </div>
                      {state.active ? (
                        <span className="rounded-full bg-[#fff3e9] px-3 py-1 text-xs font-bold text-[#c95f0e]">
                          Matriz
                        </span>
                      ) : (
                        <span className="h-2 w-2 justify-self-end rounded-full bg-[#d7deea]" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </AwakeReveal>
    </div>
  );
}
