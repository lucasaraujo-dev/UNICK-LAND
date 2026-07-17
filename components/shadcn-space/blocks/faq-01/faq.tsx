import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";
import { PlusIcon } from "lucide-react";

const FAQ_DATA = [
  {
    question: "A UNIK atende quais tipos de serviço?",
    answer:
      "Limpeza e conservação, serviços de suporte e serviços à propriedade, incluindo portaria, recepção, manutenção predial, elétrica, hidráulica, jardinagem e higienização de ambientes."
  },
  {
    question: "Onde a empresa atua?",
    answer:
      "A matriz fica no Rio de Janeiro e a apresentação cita filiais operacionais em São Paulo, Minas Gerais, Rio Grande do Norte e Pernambuco."
  },
  {
    question: "Quais segmentos podem contratar a UNIK?",
    answer:
      "Condomínios, edifícios comerciais, administradoras, varejo, indústria, shoppings, hospitais, supermercados, escolas, clínicas, laboratórios e escritórios."
  },
  {
    question: "A operação tem apoio tecnológico?",
    answer:
      "Sim. O material descreve sistema integrado para organização documental, atualizações em tempo real, ordens de serviço e checklist de limpeza via QR Code."
  },
  {
    question: "Como solicitar uma proposta?",
    answer:
      "Você pode chamar pelo telefone (21) 99542-1234, pelo e-mail comercial@unikservicos.com.br ou pelo formulário desta página."
  }
];

export default function Faq() {
  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16">
        <div className="rounded-[8px] bg-white px-5 py-8 shadow-[0_24px_80px_-64px_rgba(6,42,99,0.75)] sm:px-8 lg:px-10 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="flex flex-col gap-4">
              <h2 className="max-w-xl text-4xl font-semibold tracking-tight text-[#071638] sm:text-5xl">
                Dúvidas comuns antes de contratar facilities
              </h2>
              <p className="max-w-md text-base leading-relaxed text-[#53617a]">
                Uma leitura rápida para entender cobertura, serviços,
                tecnologia e contato comercial da UNIK.
              </p>
            </div>

            <Accordion type="single" collapsible className="grid gap-3">
              {FAQ_DATA.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${index}`}
                  className="rounded-[8px] border border-[#d7deea] bg-[#f8fafd] px-0 transition-colors data-[state=open]:bg-white"
                >
                  <AccordionTrigger className="grid min-h-18 grid-cols-[1fr_2.75rem] items-center gap-4 px-5 py-0 text-left text-base font-semibold text-[#071638] hover:no-underline [&>svg:last-child]:hidden sm:text-lg">
                    <span>{faq.question}</span>
                    <span className="flex h-9 w-9 items-center justify-center justify-self-center rounded-full border border-[#d7deea] bg-white text-[#f47c20] transition-transform duration-200 group-data-[state=open]/item:rotate-45">
                      <PlusIcon className="h-5 w-5" />
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5 pt-0 text-base leading-relaxed text-[#53617a]">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
