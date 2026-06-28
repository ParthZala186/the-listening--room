"use client";

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function ConditionalFooter() {
  const pathname = usePathname();

  // Prevents duplicate footer stacking on viewports with large inline content sections
  if (pathname === '/' || pathname === '/about' || pathname === '/fees') {
    return null; 
  }

  return <Footer />;
}