"use client";

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Leaf } from 'lucide-react';
import Link from 'next/link';

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
          <Link href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <div className="w-10 h-10 rounded-full border border-[#2D4739]/30 flex items-center justify-center text-[#2D4739] bg-white/40 shadow-xs">
              <Leaf className="w-5 h-5" strokeWidth={1.2} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[22px] text-[#2C3E2B] leading-none mb-1 font-medium tracking-wide">
                The Listening Room
              </span>
              <span className="text-[10px] text-[#5A6355] uppercase tracking-[0.18em] leading-none font-semibold">
                Counselling & Psychotherapy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className={`text-[14px] font-medium transition-colors hover:text-[#2D4739] ${
                    isActive ? 'text-[#2D4739] border-b border-[#2D4739] pb-0.5' : 'text-[#5A6355]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link 
              href="/contact" 
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
                  className={`block px-3 py-3.5 text-[15px] font-medium border-b border-[#E8E6DF]/40 transition-colors ${
                    isActive ? 'text-[#2D4739] font-bold' : 'text-[#5A6355]'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-5 pb-1">
              <Link 
                href="/contact" 
                onClick={closeMenu}
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