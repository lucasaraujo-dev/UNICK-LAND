import Image from "next/image";
import type { HTMLAttributes } from "react";

type LogoProps = HTMLAttributes<HTMLDivElement> & {
  compact?: boolean;
};

const Logo = ({ className, compact = false, ...props }: LogoProps) => {
  return (
    <div className={className} {...props}>
      <Image
        src="/images/unik-logo-transparent.png"
        alt="UNIK Facilities & Serviços"
        width={compact ? 118 : 168}
        height={compact ? 88 : 126}
        priority
        className={
          compact
            ? "h-auto w-[92px] object-contain sm:w-[104px]"
            : "h-auto w-[118px] object-contain sm:w-[148px]"
        }
      />
    </div>
  );
};

export default Logo;
