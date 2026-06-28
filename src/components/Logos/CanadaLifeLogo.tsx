import Image from "next/image";

export default function CanadaLifeLogo() {
  return (
    <div className="flex items-center gap-1.5 md:gap-2">
      <Image 
        src="https://www.canadalife.com/content/dam/canadalife/logos/L_CanadaLife_PrideProgress_RGB_E.323032352d30352d32383a31303a3031.svg" 
        alt="Canada Life" 
        width={127}
        height={31}
        className="h-6 md:h-7 w-auto object-contain"
      />
      
    </div>
  );
}