"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AwakeMagnetic } from "@/components/unik/awake-motion";
import { GsapIllustration } from "@/components/unik/gsap-illustration";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  ClipboardCheck,
  MapPin,
  ShieldCheck,
  Star
} from "lucide-react";

export type AvatarList = {
  image: string;
};

type HeroSectionProps = {
  avatarList: AvatarList[];
};

const highlights = [
  {
    icon: MapPin,
    label: "RJ, SP, MG, RN e PE"
  },
  {
    icon: ClipboardCheck,
    label: "Ordens de serviço e checklist via QR Code"
  },
  {
    icon: ShieldCheck,
    label: "Facilities com controle e confiança"
  }
];

function HeroSection({ avatarList }: HeroSectionProps) {
  return (
    <section id="inicio" className="relative overflow-hidden pt-24 md:pt-28">
      <div className="absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(circle_at_16%_10%,rgba(244,124,32,0.16),transparent_28rem),radial-gradient(circle_at_78%_0%,rgba(6,42,99,0.16),transparent_30rem)]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-4 py-8 sm:px-6 lg:min-h-[640px] lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 lg:py-12 xl:px-16">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col items-start gap-7"
        >
          <div className="flex flex-col gap-5">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="max-w-3xl text-4xl font-semibold leading-[0.98] tracking-tight text-[#071638] sm:text-5xl lg:text-6xl"
            >
              Soluções que constroem confiança para sua operação.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.72,
                delay: 0.12,
                ease: [0.21, 0.47, 0.32, 0.98]
              }}
              className="max-w-2xl text-base leading-relaxed text-[#53617a] sm:text-lg"
            >
              A UNIK atende demandas de facilities, limpeza, suporte e
              propriedade com matriz no Rio de Janeiro, filiais operacionais e
              estrutura pronta para diferentes setores em todo o Brasil.
            </motion.p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <AwakeMagnetic className="w-fit">
              <Button
                asChild
                className="awake-sheen group relative h-12 overflow-hidden rounded-full bg-[#062a63] p-1 ps-6 pe-14 text-sm font-semibold text-white transition-all duration-500 hover:bg-[#083577] hover:ps-14 hover:pe-6"
              >
                <a href="#contato">
                  <span className="relative z-10">Solicitar proposta</span>
                  <span className="absolute right-1 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#062a63] transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </span>
                </a>
              </Button>
            </AwakeMagnetic>
            <AwakeMagnetic className="w-fit">
              <Button
                asChild
                variant="outline"
                className="h-12 rounded-full border-[#c9d4e4] bg-white/70 px-6 text-sm font-semibold text-[#062a63] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
              >
                <a href="#servicos">Ver serviços</a>
              </Button>
            </AwakeMagnetic>
          </div>

          <div className="grid w-full gap-3 sm:grid-cols-3">
            {highlights.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + index * 0.08,
                  duration: 0.58,
                  ease: [0.21, 0.47, 0.32, 0.98]
                }}
                whileHover={{ y: -5 }}
                className="flex min-h-20 items-center gap-3 rounded-[8px] border border-[#d7deea] bg-white/74 p-4 shadow-[0_24px_50px_-42px_rgba(7,22,56,0.6)] backdrop-blur"
              >
                <item.icon className="h-5 w-5 shrink-0 text-[#f47c20]" />
                <p className="text-sm font-medium leading-snug text-[#23324d]">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 34, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.9,
            delay: 0.12,
            ease: [0.21, 0.47, 0.32, 0.98]
          }}
          className="relative"
        >
          <GsapIllustration
            intensity="hero"
            className="relative overflow-hidden rounded-[8px] border border-[#d7deea] bg-white shadow-[0_34px_90px_-62px_rgba(6,42,99,0.72)]"
          >
            <Image
              src="/images/hero-facilities-illustration.png"
              alt="Ilustração de prédios e serviços integrados da UNIK"
              width={1600}
              height={1050}
              priority
              className="aspect-[1.52] w-full object-cover"
            />
          </GsapIllustration>

          <motion.div
            className="mt-5 flex flex-col gap-4 rounded-[8px] border border-[#d7deea] bg-white/80 p-4 backdrop-blur sm:flex-row sm:items-center sm:justify-between"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <ul className="flex items-center">
                {avatarList.map((avatar, index) => (
                  <li key={avatar.image} className="-mr-2">
                    <img
                      src={avatar.image}
                      alt={`Registro visual UNIK ${index + 1}`}
                      className="h-10 w-10 rounded-full border-2 border-white object-cover"
                    />
                  </li>
                ))}
              </ul>
              <div>
                <div className="flex gap-0.5 text-[#f47c20]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-[#53617a]">
                  Atendimento para condomínios, varejo, hospitais e indústria.
                </p>
              </div>
            </div>
            <div className="rounded-full bg-[#f47c20]/10 px-4 py-2 text-sm font-semibold text-[#a64807]">
              Matriz RJ
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
