"use client";
import AboutUs from "@/components/shadcn-space/blocks/about-us-01/about-us";
import { Building2, ClipboardCheck, MapPinned } from "lucide-react";

const aboutusData = [
    {
      icon: Building2,
      title: "Facilidade",
      color: "bg-[#062a63]/10 text-[#062a63]"
    },
    {
      icon: ClipboardCheck,
      title: "Processos",
      color: "bg-[#f47c20]/10 text-[#c95f0e]" 
    },
    {
      icon: MapPinned,
      title: "Brasil",
      color: "bg-slate-500/10 text-slate-600" 
    }
];

const statisticsCounter = [
    {
        title: "Estados com atuação citados na apresentação",
        count: 5
    },
    {
        title: "Frentes principais de serviços",
        count: 3
    },
    {
        title: "Segmentos atendidos no portfólio",
        count: 10
    },
]

const AboutAndStats01 = () => {
  return (
    <>
      <AboutUs aboutusData={aboutusData} statisticsCounter={statisticsCounter} />
    </>
  );
};

export default AboutAndStats01;
