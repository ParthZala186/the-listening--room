import Image from "next/image";

export default function CowanLogo() {
    return (
    <Image 
      src="https://www.cowangroup.ca/wp-content/themes/theme/images/logo/Cowan_Logo_EN.svg" 
      alt="Cowan" 
      width={127}
      height={31}
      className="h-6 md:h-7 w-auto object-contain"
      // Loading is lazy by default in next/image, so you don't need to declare it!
    />
  );
}