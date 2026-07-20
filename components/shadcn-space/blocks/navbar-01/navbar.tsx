"use client";

import Logo from "@/assets/logo/logo";
import { AwakeMagnetic } from "@/components/unik/awake-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ArrowUpRight, TextAlignJustify } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";

export type NavigationSection = {
  title: string;
  href: string;
};

const navigationData: NavigationSection[] = [
  { title: "Quem somos", href: "#quem-somos" },
  { title: "Serviços", href: "#servicos" },
  { title: "Segmentos", href: "#segmentos" },
  { title: "Tecnologia", href: "#tecnologia" },
  { title: "Contato", href: "#contato" }
];

const CollaborateButton = ({ className }: { className?: string }) => (
  <AwakeMagnetic className={className}>
    <Button
      asChild
      className="awake-sheen group relative h-9 w-fit overflow-hidden rounded-full bg-[#062a63] p-1 ps-4 pe-11 text-xs font-semibold transition-all duration-500 hover:bg-[#083577] hover:ps-11 hover:pe-4"
    >
      <a href="#contato">
        <span className="relative z-10 transition-all duration-500">
          Fale com a UNIK
        </span>
        <div className="absolute right-1 flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#062a63] transition-all duration-500 group-hover:right-[calc(100%-32px)] group-hover:rotate-45">
          <ArrowUpRight size={14} />
        </div>
      </a>
    </Button>
  </AwakeMagnetic>
);

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setSticky(window.scrollY >= 50);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth >= 768) setIsOpen(false);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <div>
      <motion.a
        href="#inicio"
        aria-label="Voltar para o início"
        className="fixed left-4 top-3 z-50 px-2 py-1 sm:left-8 lg:left-10"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
      >
        <Logo compact />
      </motion.a>

      <motion.header
        className="fixed inset-x-0 top-4 z-40 bg-transparent"
        initial={{ opacity: 0, y: -18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.72,
          delay: 0.08,
          ease: [0.21, 0.47, 0.32, 0.98]
        }}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-center px-4 sm:px-6">
          <nav
            className={cn(
              "flex h-11 items-center justify-center gap-3 rounded-full border px-2 transition-all duration-500",
              sticky
                ? "border-[#d7deea] bg-white/84 shadow-[0_18px_42px_-34px_rgba(6,42,99,0.7)] backdrop-blur-lg"
                : "border-white/70 bg-white/62 backdrop-blur-md"
            )}
          >
            <NavigationMenu className="max-lg:hidden rounded-full bg-[#eef2f8] p-0.5">
              <NavigationMenuList className="flex gap-0">
                {navigationData.map((navItem) => (
                  <NavigationMenuItem key={navItem.title}>
                    <NavigationMenuLink
                      href={navItem.href}
                      className="rounded-full px-2.5 py-1.5 text-xs font-semibold tracking-normal text-[#53617a] outline outline-transparent transition hover:-translate-y-0.5 hover:bg-white hover:text-[#062a63] hover:shadow-xs lg:px-3"
                    >
                      {navItem.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <CollaborateButton className="hidden lg:flex" />

            <div className="lg:hidden">
              <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                <DropdownMenuTrigger className="flex cursor-pointer items-center justify-center rounded-full border border-[#d7deea] bg-white p-2 outline-none transition-colors">
                  <TextAlignJustify size={18} />
                  <span className="sr-only">Menu</span>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end" className="mt-2 w-56">
                  {navigationData.map((item) => (
                    <DropdownMenuItem key={item.title}>
                      <a
                        href={item.href}
                        className="w-full cursor-pointer text-sm font-medium"
                      >
                        {item.title}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </nav>
        </div>
      </motion.header>
    </div>
  );
};

export default Navbar;
