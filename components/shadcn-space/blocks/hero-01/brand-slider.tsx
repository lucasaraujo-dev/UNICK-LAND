"use client";

import { Marquee } from "@/components/shadcn-space/animations/marquee";
import { motion } from "motion/react";

export interface BrandList {
  image: string;
  name: string;
  lightimg: string;
}

function BrandSlider({ brandList }: { brandList: BrandList[] }) {
  return (
    <section aria-label="Parceiros e clientes da UNIK">
      <div className="py-4 md:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.35, ease: "easeInOut" }}
            className="flex flex-col gap-3"
          >
            <div className="relative flex justify-center py-3 text-center md:py-4">
              <div className="flex items-center justify-center gap-4">
                <div className="hidden h-0.5 w-40 bg-linear-to-l from-[#53617a] to-transparent opacity-20 md:block" />
                <p className="px-10 text-center text-sm font-medium text-[#53617a] sm:px-2">
                  Parceiros e clientes oficiais apresentados pela UNIK
                </p>
                <div className="hidden h-0.5 w-40 bg-linear-to-r from-[#53617a] to-transparent opacity-20 md:block" />
              </div>
            </div>

            {brandList && brandList.length > 0 && (
              <div className="overflow-hidden py-4">
                <Marquee pauseOnHover className="[--duration:26s] p-0">
                  {brandList.map((brand) => (
                    <div
                      key={`${brand.name}-${brand.image}`}
                      className="mr-12 flex h-24 w-44 items-center justify-center lg:mr-16"
                    >
                      <img
                        src={brand.image}
                        alt={`Logo ${brand.name}`}
                        className="max-h-16 max-w-36 object-contain"
                      />
                    </div>
                  ))}
                </Marquee>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default BrandSlider;
