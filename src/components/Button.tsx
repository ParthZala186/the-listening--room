// src/components/Button.tsx
import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
}

export default function Button({ href, children, variant = 'primary', className = '' }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-md font-medium transition-colors duration-300";
  const variants = {
    primary: "bg-[#3A5043] text-white hover:bg-[#2C3E34]",
    outline: "border border-gray-300 bg-transparent text-gray-900 hover:border-[#3A5043]"
  };

  return (
    <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}