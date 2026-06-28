import Link from 'next/link';
import { 
  Leaf, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#F9F8F6] border-t border-white/10 pt-16 flex flex-col font-sans antialiased text-[#2C3E2B]">
      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        
        {/* Column 1: Brand & Bio */}
        <div className="flex flex-col">
          <Link href="/" className="flex items-center gap-3 mb-6 group">
            <div className="w-9 h-9 rounded-full border border-white/40 flex items-center justify-center text-[#2C3E2B] bg-white/5 group-hover:border-white transition-colors shadow-3xs">
              <Leaf className="w-4 h-4" strokeWidth={1.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-[18px] text-[#2C3E2B] leading-none mb-1 font-medium tracking-wide">
                The Listening Room
              </span>
              <span className="text-[10px] text-[#2C3E2B]/70 uppercase tracking-widest leading-none font-semibold font-sans">
                Counselling & Psychotherapy
              </span>
            </div>
          </Link>
          <p className="text-[13.5px] text-[#2C3E2B]/80 leading-[1.7] max-w-[240px] mb-6 font-normal font-sans">
            A safe space to be heard, understood, and supported.
          </p>
          <div className="flex items-center gap-4 text-[#2C3E2B]/80">
            <a href="#" className="hover:text-[#2C3E2B] transition-colors duration-200" aria-label="Instagram">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-[#2C3E2B] transition-colors duration-200" aria-label="Facebook">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a href="mailto:support@thelisteningrm.com" className="hover:text-[#2C3E2B] transition-colors duration-200" aria-label="Email">
              <Mail className="w-5 h-5" strokeWidth={1.8} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-[14px] font-bold text-[#2C3E2B] tracking-wider uppercase mb-5 font-sans">Quick Links</h4>
          <ul className="space-y-3 font-sans font-normal">
            {[
              { name: 'Home', href: '/' },
              { name: 'About', href: '/about' },
              { name: 'Services', href: '/services' },
              { name: 'Fees & Insurance', href: '/fees' },
              { name: 'FAQ', href: '/faq' },
              { name: 'Contact', href: '/contact' }
            ].map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className="text-[13.5px] text-[#2C3E2B]/80 hover:text-[#2C3E2B] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="text-[14px] font-bold text-[#2C3E2B] tracking-wider uppercase mb-5 font-sans">Services</h4>
          <ul className="space-y-3 font-sans font-normal">
            {[
              'Anxiety & Emotional Wellness',
              'ADHD & Focus',
              'Self-Esteem & Growth',
              'Life Transitions & Immigration',
              'Workplace Wellness',
              'Relationships & Family',
              'Trauma & Grief'
            ].map((service) => (
              <li key={service}>
                <Link 
                  href="/services" 
                  className="text-[13.5px] text-[#2C3E2B]/80 hover:text-[#2C3E2B] transition-colors duration-200"
                >
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="text-[14px] font-bold text-[#2C3E2B] tracking-wider uppercase mb-5 font-sans">Contact</h4>
          <ul className="space-y-4 font-sans font-normal">
            <li>
              <a href="mailto:support@thelisteningrm.com" className="flex items-start gap-3 group">
                <Mail className="w-4 h-4 text-[#2C3E2B]/80 group-hover:text-[#2C3E2B] mt-0.5 shrink-0 transition-colors" strokeWidth={1.8} />
                <span className="text-[13.5px] text-[#2C3E2B]/80 group-hover:text-[#2C3E2B] transition-colors duration-200 break-all">
                  support@thelisteningrm.com
                </span>
              </a>  
            </li>
            <li>
              <a href="tel:548-255-9555" className="flex items-center gap-3 group">
                <Phone className="w-4 h-4 text-[#2C3E2B]/80 group-hover:text-[#2C3E2B] shrink-0 transition-colors" strokeWidth={1.8} />
                <span className="text-[13.5px] text-[#2C3E2B]/80 group-hover:text-[#2C3E2B] transition-colors duration-200">
                  548-255-9555
                </span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-[#2C3E2B]d/80">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" strokeWidth={1.8} />
              <span className="text-[13.5px]">
                Virtual sessions across Ontario
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* DARK BOTTOM COPYRIGHT BAR */}
      <div className="bg-[#1F3328] w-full py-5 px-4 sm:px-6 lg:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-sans text-[12px] text-[#F6F3ED]/70 font-normal">
          <p className="tracking-wide">
            &copy; {new Date().getFullYear()} The Listening Room. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors duration-200">Terms of Use</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}