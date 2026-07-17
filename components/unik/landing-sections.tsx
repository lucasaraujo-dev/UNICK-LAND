import Image from "next/image";
import { GsapIllustration } from "@/components/unik/gsap-illustration";
import {
  Building2,
  CheckCircle2,
  Factory,
  Hospital,
  MapPinned,
  QrCode,
  School,
  ShoppingBag,
  Store,
  Trees,
  Wrench
} from "lucide-react";

const segments = [
  { icon: Building2, label: "Condomínios residenciais" },
  { icon: Building2, label: "Edifícios comerciais" },
  { icon: Trees, label: "Administradoras de condomínios" },
  { icon: Store, label: "Redes de varejo" },
  { icon: Factory, label: "Indústria" },
  { icon: ShoppingBag, label: "Shoppings" },
  { icon: Hospital, label: "Hospitais" },
  { icon: Store, label: "Supermercados" },
  { icon: School, label: "Escolas" },
  { icon: Wrench, label: "Clínicas, laboratórios e escritórios" }
];

const segmentHighlights = [
  "Rotinas por perfil de ambiente",
  "Equipe dimensionada por demanda",
  "Acompanhamento de execução"
];

const regions = [
  {
    name: "Sudeste",
    summary: "Matriz e filiais operacionais",
    states: [
      { uf: "RJ", name: "Rio de Janeiro", detail: "Matriz", active: true },
      { uf: "SP", name: "São Paulo", detail: "Filial operacional" },
      { uf: "MG", name: "Minas Gerais", detail: "Filial operacional" }
    ]
  },
  {
    name: "Nordeste",
    summary: "Atendimento regional estruturado",
    states: [
      { uf: "PE", name: "Pernambuco", detail: "Filial operacional" },
      { uf: "RN", name: "Rio Grande do Norte", detail: "Filial operacional" }
    ]
  }
];

export function SegmentsSection() {
  return (
    <section id="segmentos" className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 xl:px-16">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-4">
            <p className="w-fit rounded-full border border-[#d7deea] bg-white px-4 py-2 text-sm font-semibold text-[#062a63]">
              Segmentos
            </p>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-[#071638] sm:text-5xl">
              Atendimento para ambientes que exigem rotina, presença e padrão.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-[#53617a]">
              A UNIK adapta equipes, processos e acompanhamento para operações
              residenciais, comerciais, industriais, hospitalares e de varejo.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {segmentHighlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-[8px] border border-[#d7deea] bg-white/82 p-4"
              >
                <CheckCircle2 className="mb-3 h-5 w-5 text-[#f47c20]" />
                <p className="text-sm font-semibold leading-snug text-[#23324d]">
                  {highlight}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-[8px] border border-[#d7deea] bg-white/70 p-3 shadow-[0_24px_70px_-58px_rgba(6,42,99,0.7)]">
            <div className="grid gap-3 sm:grid-cols-2">
              {segments.map((segment) => (
                <div
                  key={segment.label}
                  className="flex min-h-16 items-center gap-3 rounded-[8px] border border-[#e1e7f0] border-l-[#f47c20] bg-white px-4 py-3"
                >
                  <segment.icon className="h-5 w-5 shrink-0 text-[#f47c20]" />
                  <p className="text-sm font-semibold text-[#23324d]">
                    {segment.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-5">
          <GsapIllustration>
            <div className="overflow-visible p-0">
              <Image
                src="/images/coverage-map-full.png"
                alt="Mapa do Brasil usado na apresentação da UNIK"
                width={560}
                height={557}
                className="h-auto w-full object-contain"
              />
            </div>
          </GsapIllustration>

          <div className="rounded-[8px] border border-[#d7deea] bg-white/88 p-5 shadow-[0_18px_55px_-46px_rgba(6,42,99,0.65)]">
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
                    {region.states.map((state) => (
                      <div
                        key={state.uf}
                        className="grid grid-cols-[3rem_1fr_auto] items-center gap-3 rounded-[8px] bg-white px-3 py-2"
                      >
                        <span
                          className={
                            state.active
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
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TechnologySection() {
  return (
    <section id="tecnologia" className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-8 xl:px-16">
        <div className="order-2 grid gap-4 lg:order-1">
          <GsapIllustration>
            <Image
              src="/images/technology-illustration.png"
              alt="Ilustração do sistema operacional e checklist digital da UNIK"
              width={1500}
              height={1000}
              className="rounded-[8px] object-cover shadow-[0_24px_70px_-55px_rgba(6,42,99,0.7)]"
            />
          </GsapIllustration>
          <Image
            src="/images/technology-phone.png"
            alt="Imagem do material UNIK com acompanhamento digital"
            width={955}
            height={1425}
            className="h-64 rounded-[8px] border border-[#d7deea] object-cover object-center lg:hidden"
          />
        </div>

        <div className="order-1 flex flex-col gap-6 lg:order-2">
          <p className="w-fit rounded-full border border-[#d7deea] bg-white px-4 py-2 text-sm font-semibold text-[#062a63]">
            Tecnologia
          </p>
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-[#071638] sm:text-5xl">
            Controle documental, ordens de serviço e checklist via QR Code.
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-[#53617a]">
            A UNIK apresenta um sistema integrado para auxiliar sua empresa na
            parte documental, organizar dados e informações em tempo real e
            formalizar o trabalho por meio de ordens de serviço.
          </p>

          <div className="grid gap-3 sm:grid-cols-3">
            {[
              "Atualizações em tempo real",
              "Controle de tarefas executadas",
              "Materiais disponíveis por serviço"
            ].map((item) => (
              <div
                key={item}
                className="rounded-[8px] border border-[#d7deea] bg-white/82 p-4"
              >
                <QrCode className="mb-4 h-5 w-5 text-[#f47c20]" />
                <p className="text-sm font-semibold leading-snug text-[#23324d]">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="px-4 pb-8 sm:px-6 lg:px-8 xl:px-16">
      <div className="mx-auto mb-3 max-w-7xl border-t border-[#d7deea] pt-4 text-center">
        <p className="text-sm font-semibold text-[#53617a]">
          @2026 Unik Facilites & Serviços
        </p>
      </div>
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[8px] border border-[#071638] bg-[#071638] px-6 py-10 text-white md:px-10">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f47c20]">
              UNIK Facilities & Serviços
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Venha conhecer a UNIK e faça parte desse time.
            </h2>
          </div>
          <a
            href="#contato"
            className="inline-flex h-12 items-center justify-center rounded-full bg-white px-6 text-sm font-semibold text-[#071638] transition hover:bg-white/90"
          >
            Falar com comercial
          </a>
        </div>
      </div>
    </section>
  );
}
