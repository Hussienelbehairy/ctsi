import Image from "next/image";
import { cn } from "@/lib/utils";

const brandLogo = {
  src: "/brand/logo-b-tb.png",
  width: 6215,
  height: 1961,
  alt: "Cut to Size Interiors logo",
};

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      {...brandLogo}
      priority
      sizes="(max-width: 768px) 140px, (max-width: 1024px) 160px, 180px"
      className={cn("h-10 w-auto md:h-12", className)}
    />
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  return (
    <Image
      {...brandLogo}
      sizes="(max-width: 768px) 140px, (max-width: 1024px) 160px, 180px"
      className={cn("h-10 w-auto md:h-12", className)}
    />
  );
};
