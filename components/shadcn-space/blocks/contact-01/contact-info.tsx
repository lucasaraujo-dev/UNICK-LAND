"use client";

import { Mail, MapPin, Phone } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-8 md:gap-12">
      <div className="flex animate-in flex-col gap-6 slide-in-from-left-10 fade-in duration-1000 fill-mode-both ease-in-out">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-[#f47c20]" />
          <p className="text-base font-medium text-[#53617a]">
            Venha conhecer a UNIK
          </p>
        </div>
        <p className="text-3xl font-semibold tracking-tight text-[#071638] md:text-4xl">
          Faça parte de uma operação que organiza, executa e acompanha cada
          serviço com responsabilidade.
        </p>
      </div>

      <div className="grid animate-in grid-cols-1 gap-5 slide-in-from-left-10 fade-in duration-1000 delay-100 fill-mode-both ease-in-out sm:grid-cols-[0.75fr_1.25fr]">
        <div className="flex gap-3 rounded-[8px] border border-[#d7deea] bg-white/82 p-4">
          <Phone className="mt-1 h-5 w-5 text-[#f47c20]" />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-normal text-[#53617a]">Telefone</p>
            <a
              href="tel:+5521995421234"
              className="text-base font-semibold text-[#062a63]"
            >
              (21) 99542-1234
            </a>
          </div>
        </div>
        <div className="flex gap-3 rounded-[8px] border border-[#d7deea] bg-white/82 p-4">
          <Mail className="mt-1 h-5 w-5 text-[#f47c20]" />
          <div className="flex flex-col gap-1">
            <p className="text-sm font-normal text-[#53617a]">E-mail</p>
            <a
              href="mailto:comercial@unikservicos.com.br"
              className="whitespace-nowrap text-[15px] font-semibold text-[#062a63] sm:text-base"
            >
              comercial@unikservicos.com.br
            </a>
          </div>
        </div>
      </div>

      <div className="flex animate-in flex-col gap-4 slide-in-from-left-10 fade-in duration-1000 delay-100 fill-mode-both ease-in-out rounded-[8px] border border-[#d7deea] bg-white/82 p-4">
        <div className="flex gap-3">
          <MapPin className="mt-1 h-5 w-5 text-[#f47c20]" />
          <div>
            <p className="text-sm font-normal text-[#53617a]">Atuação</p>
            <p className="text-base font-semibold text-[#062a63]">
              Rio de Janeiro, São Paulo, Minas Gerais, Rio Grande do Norte e
              Pernambuco
            </p>
          </div>
        </div>
        <a
          href="https://www.unikservicos.com.br"
          className="self-end text-sm font-semibold text-[#c95f0e]"
        >
          www.unikservicos.com.br
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
