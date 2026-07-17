"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AwakeMagnetic } from "@/components/unik/awake-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  service: string;
  message: string;
  terms: boolean;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    service: "",
    message: "",
    terms: false
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, terms: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="w-full">
      <Card className="animate-in gap-6 rounded-[8px] border-[#d7deea] bg-white/88 p-6 shadow-[0_26px_70px_-52px_rgba(6,42,99,0.7)] slide-in-from-right-10 fade-in duration-1000 delay-100 fill-mode-both ease-in-out md:gap-8 md:p-8">
        <CardHeader className="p-0">
          <CardTitle className="text-2xl font-semibold text-[#062a63]">
            Solicitar contato
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={handleChange}
                    className="h-10 shadow-xs"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="company">Empresa ou condomínio</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Nome da organização"
                    value={formData.company}
                    onChange={handleChange}
                    className="h-10 shadow-xs"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="voce@empresa.com.br"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="h-10 shadow-xs"
                  required
                />
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="service">Interesse principal</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, service: value ?? "" }))
                  }
                >
                  <SelectTrigger id="service" className="h-10! w-full shadow-xs">
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="limpeza">
                      Limpeza e conservação
                    </SelectItem>
                    <SelectItem value="suporte">Serviços de suporte</SelectItem>
                    <SelectItem value="propriedade">
                      Serviços à propriedade
                    </SelectItem>
                    <SelectItem value="multisservicos">
                      Combinação de serviços
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Conte rapidamente sua necessidade operacional"
                  value={formData.message}
                  onChange={handleChange}
                  className="h-24 resize-none shadow-xs"
                  required
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="terms"
                  checked={formData.terms}
                  onCheckedChange={handleCheckboxChange}
                  required
                  className="mt-0.5"
                />
                <Label
                  htmlFor="terms"
                  className="text-sm font-normal leading-relaxed text-[#23324d]"
                >
                  Autorizo o contato comercial da UNIK para retorno sobre minha
                  solicitação.
                </Label>
              </div>

              <AwakeMagnetic>
                <Button
                  type="submit"
                  size="lg"
                  className="awake-sheen h-11 w-full rounded-full bg-[#062a63] text-white hover:bg-[#083577]"
                >
                  Enviar solicitação
                </Button>
              </AwakeMagnetic>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactForm;
