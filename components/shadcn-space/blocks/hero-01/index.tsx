import HeroSection from "@/components/shadcn-space/blocks/hero-01/hero";
import BrandSlider, { BrandList } from "@/components/shadcn-space/blocks/hero-01/brand-slider";
import type { AvatarList } from "@/components/shadcn-space/blocks/hero-01/hero";

export default function AgencyHeroSection() {
  const avatarList: AvatarList[] = [
    {
      image: "/images/building-rio.png",
    },
    {
      image: "/images/technology-phone.png",
    },
    {
      image: "/images/coverage-map-source.png",
    },
    {
      image: "/images/meeting-room.png",
    },
  ];

  const brandList: BrandList[] = [
    {
      image: "/images/partners/vtal.png",
      lightimg: "/images/partners/vtal.png",
      name: "V.tal",
    },
    {
      image: "/images/partners/lojas-americanas.png",
      lightimg: "/images/partners/lojas-americanas.png",
      name: "Lojas Americanas",
    },
    {
      image: "/images/partners/caixa.png",
      lightimg: "/images/partners/caixa.png",
      name: "Caixa",
    },
    {
      image: "/images/partners/real-grandeza.png",
      lightimg: "/images/partners/real-grandeza.png",
      name: "Real Grandeza",
    },
    {
      image: "/images/partners/servier.png",
      lightimg: "/images/partners/servier.png",
      name: "Servier",
    },
    {
      image: "/images/partners/saude.png",
      lightimg: "/images/partners/saude.png",
      name: "Saúde",
    },
    {
      image: "/images/partners/carvalho-hosken.png",
      lightimg: "/images/partners/carvalho-hosken.png",
      name: "Carvalho Hosken",
    },
    {
      image: "/images/partners/brafer.png",
      lightimg: "/images/partners/brafer.png",
      name: "Brafer",
    },
    {
      image: "/images/partners/upa.png",
      lightimg: "/images/partners/upa.png",
      name: "UPA 24h",
    },
    {
      image: "/images/partners/jotun.png",
      lightimg: "/images/partners/jotun.png",
      name: "Jotun",
    },
    {
      image: "/images/partners/rio-cultura.png",
      lightimg: "/images/partners/rio-cultura.png",
      name: "Rio",
    },
  ];

  return (
    <div className="relative">
      <main>
        <HeroSection avatarList={avatarList} />
        <BrandSlider brandList={brandList} />
      </main>
    </div>
  );
}
