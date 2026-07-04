
import Image from "next/image";

export default function BlueCrossLogo() {
    return (
    <Image 
      src="https://www.bluecross.ca/wp-content/uploads/2021/11/BlueCross_Logo.svg" 
      alt="Blue Cross" 
      width={127}
      height={31}
      className="h-6 md:h-7 w-auto object-contain"
      // Loading is lazy by default in next/image, so you don't need to declare it!
    />
  );
}