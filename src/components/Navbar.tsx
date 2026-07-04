"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Leaf } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Fees & Insurance', href: '/fees' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    // Matches the soft light tone from Section 1
    <nav className="w-full bg-white relative z-50 font-sans antialiased">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">

          {/* Logo Section */}
          <Link
  href="/"
  className="flex items-center shrink-0"
  aria-label="The Listening Room Home"
>
  <Image
    src="/logo/primary-logo.png"
    alt="The Listening Room"
    width={300}
    height={90}
    priority
    className="h-14 lg:h-16 w-auto transition-transform duration-300 hover:scale-[1.02]"
  />
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[14px] font-medium transition-colors hover:text-[#2D4739] ${isActive ? 'text-[#2D4739] border-b border-[#2D4739] pb-0.5' : 'text-[#5A6355]'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link href={process.env.NEXT_PUBLIC_MEETING_URL || '#'} target='_blank'
              className="bg-[#4A5443] text-white px-6 py-3 text-[13px] font-medium tracking-wide rounded-[4px] hover:bg-[#3D4537] transition-colors"
            >
              Book Free Consultation
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#2D4739] focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-24 left-0 w-full bg-[#F9F8F6] border-b border-[#E8E6DF] shadow-md animate-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block px-3 py-3.5 text-[15px] font-medium border-b border-[#E8E6DF]/40 transition-colors ${isActive ? 'text-[#2D4739] font-bold' : 'text-[#5A6355]'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-5 pb-1">
              <Link href={process.env.NEXT_PUBLIC_MEETING_URL || '#'} target='_blank'
                className="block w-full text-center bg-[#2D4739] hover:bg-[#203328] text-white px-5 py-3.5 text-[14px] font-medium tracking-wide rounded-[4px]"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}