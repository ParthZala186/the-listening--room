import Image from "next/image";

export default function ManulifeLogo() {
  return (
    <div className="flex items-center gap-1.5 md:gap-2">
      <Image 
        src="https://www.manulife.ca/content/dam/consumer-portal/logo/en/manulife-home-100.svg" 
        alt="Manulife Icon" 
        width={31}
        height={31}
        className="h-5 md:h-6 w-auto object-contain"
      />
      <span className="font-sans text-[19px] md:text-[21px] font-bold text-[#00A758] tracking-tight mb-0.5">
        Manulife
      </span>
    </div>
  );
}