"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  AwakeItem,
  AwakeMagnetic,
  AwakeStagger
} from "@/components/unik/awake-motion";
import { GsapIllustration } from "@/components/unik/gsap-illustration";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Building,
  CheckCircle2,
  ClipboardCheck,
  ConciergeBell,
  LucideIcon,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";

type ServiceData = {
  icon: LucideIcon;
  title: string;
  description: string;
  items: string[];
  proof: string[];
  tone: string;
  panel: string;
};

const serviceData: ServiceData[] = [
  {
    icon: Sparkles,
    title: "Limpeza e conservação",
    description:
      "Higienização, conservação e tratamento técnico para ambientes corporativos, residenciais e de grande circulação.",
    tone: "bg-[#062a63]/10 text-[#062a63]",
    panel: "bg-[#071638] text-white",
    proof: ["Rotina planejada", "Equipe treinada", "Padrão de execução"],
    items: [
      "Desinfecção de ambientes",
      "Impermeabilização e tratamento de pisos",
      "Limpeza de carpetes",
      "Limpeza de final de obra",
      "Limpeza express",
      "Limpeza técnica",
      "Limpeza, conservação e higienização de ambientes"
    ]
  },
  {
    icon: ConciergeBell,
    title: "Serviços de suporte",
    description:
      "Equipes de apoio para rotinas administrativas, operação, recepção, portaria e suporte ao cliente.",
    tone: "bg-[#f47c20]/12 text-[#c95f0e]",
    panel: "bg-[#fff3e9] text-[#071638]",
    proof: ["Apoio contínuo", "Controle de acesso", "Atendimento ao público"],
    items: [
      "Almoxarifado",
      "Apoio à produção",
      "Apoio administrativo",
      "Apoio técnico",
      "Controle de acesso",
      "Copeiragem",
      "Mensageria",
      "Portaria",
      "Recepção",
      "Recepção bilíngue",
      "Secretariado",
      "Secretariado bilíngue"
    ]
  },
  {
    icon: Building,
    title: "Serviços à propriedade",
    description:
      "Manutenção predial e intervenções técnicas para preservar estrutura, áreas verdes e funcionamento do espaço.",
    tone: "bg-slate-500/10 text-slate-600",
    panel: "bg-[#eef3f9] text-[#071638]",
    proof: ["Manutenção preventiva", "Zeladoria técnica", "Preservação do ativo"],
    items: [
      "Alvenaria",
      "Elétrica",
      "Hidráulica",
      "Jardinagem",
      "Manutenção de áreas verdes",
      "Manutenção predial",
      "Marcenaria",
      "Paisagismo",
      "Pintura",
      "Refrigeração"
    ]
  }
];

const operationPillars = [
  { icon: ClipboardCheck, label: "Planejamento do escopo" },
  { icon: Users, label: "Equipe alocada por demanda" },
  { icon: ShieldCheck, label: "Acompanhamento operacional" }
];

const Services = () => {
  return (
    <section id="servicos" className="bg-transparent py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <Badge
              variant="outline"
              className="h-8 w-fit border-[#d7deea] bg-white px-3 text-sm font-semibold text-[#062a63]"
            >
              Serviços ofertados
            </Badge>
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-semibold tracking-tight text-[#071638] sm:text-5xl">
                Limpeza, suporte e propriedade em uma operação só.
              </h2>
              <p className="text-lg leading-relaxed text-[#53617a]">
                A UNIK estrutura frentes de facilities para quem precisa de
                presença constante, resposta rápida e execução acompanhada do
                início ao fim.
              </p>
            </div>

            <AwakeStagger className="grid gap-3" delay={0.08}>
              {operationPillars.map((pillar) => (
                <AwakeItem
                  key={pillar.label}
                  className="flex items-center gap-3 rounded-[8px] border border-[#d7deea] bg-white/78 px-4 py-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f47c20]/12 text-[#c95f0e]">
                    <pillar.icon size={18} />
                  </span>
                  <p className="text-sm font-semibold text-[#23324d]">
                    {pillar.label}
                  </p>
                </AwakeItem>
              ))}
            </AwakeStagger>

            <GsapIllustration>
              <Image
                src="/images/services-illustration.png"
                alt="Ilustração dos serviços de limpeza, suporte e propriedade"
                width={1400}
                height={980}
                className="rounded-[8px] object-cover shadow-[0_24px_70px_-55px_rgba(6,42,99,0.7)]"
              />
            </GsapIllustration>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {serviceData.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                whileHover={{ y: -6 }}
              >
                <Card className="awake-sheen overflow-hidden rounded-[8px] border-[#d7deea] bg-white/90 p-0 shadow-[0_24px_65px_-52px_rgba(6,42,99,0.72)]">
                  <CardContent className="grid gap-0 p-0 md:grid-cols-[0.9fr_1.1fr]">
                    <div
                      className={`flex flex-col justify-between gap-7 p-6 md:p-8 ${service.panel}`}
                    >
                      <div className="flex flex-col gap-5">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-full ${service.tone}`}
                        >
                          <service.icon size={24} />
                        </div>
                        <div className="flex flex-col gap-3">
                          <h3 className="text-2xl font-semibold tracking-tight">
                            {service.title}
                          </h3>
                          <p className="text-base leading-relaxed opacity-75">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <div className="grid gap-2">
                        {service.proof.map((proof) => (
                          <div
                            key={proof}
                            className="flex items-center gap-2 text-sm font-semibold"
                          >
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#f47c20]" />
                            <span>{proof}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 p-6 md:p-8">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#f47c20]">
                        Escopo atendido
                      </p>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {service.items.map((item) => (
                          <li
                            key={item}
                            className="flex min-h-11 items-center gap-2 rounded-[6px] border border-[#e1e7f0] bg-[#f8fafd] px-3 py-2 text-sm font-semibold text-[#23324d]"
                          >
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#f47c20]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            <div className="rounded-[8px] border border-[#062a63] bg-[#071638] p-6 text-white md:p-8">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-2xl font-semibold">
                    Precisa combinar várias frentes?
                  </p>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/72">
                    A UNIK monta alternativas conforme a necessidade do cliente,
                    com foco em praticidade, eficácia e implementação do
                    projeto.
                  </p>
                </div>
                <AwakeMagnetic className="w-fit">
                  <Button
                    asChild
                    className="group h-12 w-fit rounded-full bg-white p-1 ps-5 text-[#071638] hover:bg-white/92"
                  >
                    <a href="#contato" className="flex items-center gap-4">
                      <span>Montar proposta</span>
                      <div className="rounded-full bg-[#f47c20] p-3 text-white transition-transform duration-300 ease-in-out group-hover:rotate-45">
                        <ArrowUpRight size={16} />
                      </div>
                    </a>
                  </Button>
                </AwakeMagnetic>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
