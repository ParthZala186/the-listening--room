import Image from "next/image";
import { ReactNode } from "react";

type PageHeroProps = {
  eyebrow: string;
  heading: ReactNode;
  description: ReactNode;
  imageSrc: string;
  imageAlt: string;
  imageSizes?: string;
  imagePosition?: string;
};

export default function PageHero({
  eyebrow,
  heading,
  description,
  imageSrc,
  imageAlt,
  imageSizes = "(max-width: 768px) 100vw, 45vw",
  imagePosition = "object-center",
}: PageHeroProps) {
  return (
    <section className="w-full bg-[#F9F8F6] flex flex-col md:flex-row items-stretch">
      <div className="w-full md:w-[55%] pt-12 pb-16 md:py-24 px-6 sm:px-12 md:pl-16 lg:pl-28 xl:pl-40 flex flex-col justify-center">
        <span className="text-[#5A6355] text-[11px] lg:text-[12px] tracking-[0.25em] uppercase font-semibold mb-4 block">
          {eyebrow}
        </span>
        <h1 className="font-serif text-[42px] lg:text-[52px] text-[#2C3E2B] leading-[1.15] tracking-tight">
          {heading}
        </h1>

        <div className="w-[64px] h-[1.5px] bg-[#4A5443] my-8"></div>

        <div className="text-[#5A6355] text-[15px] lg:text-[16px] leading-[1.75] max-w-md font-normal">
          {description}
        </div>
      </div>

      <div className="relative w-full md:w-[45%] aspect-[3/2] shrink-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={`object-cover ${imagePosition}`}
          priority
          quality={75}
          sizes={imageSizes}
        />
      </div>
    </section>
  );
}