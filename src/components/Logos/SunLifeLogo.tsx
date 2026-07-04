import Image from "next/image";

export default function SunLifeLogo() {
    return (
    <Image 
      src="https://www.sunlife.ca/content/dam/sunlife/global/logos/sun-life/current/sun-life-weblogo-127x31.svg" 
      alt="Sun Life" 
      width={127}
      height={31}
      className="h-6 md:h-7 w-auto object-contain"
      // Loading is lazy by default in next/image, so you don't need to declare it!
    />
  );
}