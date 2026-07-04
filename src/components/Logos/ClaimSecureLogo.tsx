
import Image from "next/image";

export default function ClaimSecureLogo() {
    return (
    <Image 
      src="https://www.claimsecure.com/wp-content/uploads/2026/02/ClaimSecure-logo-EN.png" 
      alt="Claim Secure" 
      width={140}
      height={31}
      className="h-6 md:h-7 w-auto object-contain"
      // Loading is lazy by default in next/image, so you don't need to declare it!
    />
  );
}

// https://www.claimsecure.com/wp-content/uploads/2026/02/ClaimSecure-logo-EN.png