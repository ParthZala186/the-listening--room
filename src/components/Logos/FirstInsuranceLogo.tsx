import Image from "next/image";

export default function FirstInsuranceLogo() {
    return (
    <Image 
      src="https://home.firstcanadian.ca/wp-content/uploads/2021/02/FCIC-Website.png" 
      alt="First Insurance" 
      width={127}
      height={31}
      className="h-6 md:h-7 w-auto object-contain"
      // Loading is lazy by default in next/image, so you don't need to declare it!
    />
  );
}