import Link from "next/link";
import Image from "next/image";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const email = process.env.NEXT_PUBLIC_EMAIL_ID!;

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Fees & Insurance", href: "/fees" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "Anxiety & Emotional Wellness",
  "ADHD, Focus & Personal Effectiveness",
  "Self-Esteem & Personal Growth",
  "Life Transitions & Immigration",
  "Workplace Wellness",
  "Relationships & Family",
  "Trauma & Grief",
];

export default function Footer() {
  return (
    <footer className="bg-[#FCFCFA] border-t border-[#ECE8E0]">

      {/* ================= MAIN FOOTER ================= */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-10">

          {/* ================= BRAND ================= */}

          <div>

            <Link href="/" className="inline-block">

              <Image
                src="/logo/primary-logo-dark.png"
                alt="The Listening Room"
                width={300}
                height={90}
                priority
                className="h-20 w-auto"
              />

            </Link>

            <p className="mt-6 text-[14px] leading-7 text-[#5A6355] max-w-[260px]">
              A safe space to be heard,
              understood, and supported.
              Compassionate online counselling
              designed to help you move forward
              with confidence.
            </p>

            {/* Social Icons */}

            <div className="flex items-center gap-4 mt-8">

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-[#E8E6DF] bg-white flex items-center justify-center text-[#2D4739] hover:bg-[#2D4739] hover:text-white transition-all duration-300"
              >
                <FaInstagram size={18} />
              </a>

              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-[#E8E6DF] bg-white flex items-center justify-center text-[#2D4739] hover:bg-[#2D4739] hover:text-white transition-all duration-300"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href={`mailto:${email}`}
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-[#E8E6DF] bg-white flex items-center justify-center text-[#2D4739] hover:bg-[#2D4739] hover:text-white transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>

            </div>

          </div>

          {/* ================= QUICK LINKS ================= */}

          <div>

            <h3 className="font-serif text-[20px] text-[#2D4739] mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {quickLinks.map((link) => (

                <li key={link.name}>

                  <Link
                    href={link.href}
                    className="text-[14px] text-[#5A6355] hover:text-[#2D4739] hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {link.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* ================= SERVICES ================= */}

          <div>

            <h3 className="font-serif text-[20px] text-[#2D4739] mb-6">
              Services
            </h3>

            <ul className="space-y-4">

              {services.map((service) => (

                <li key={service}>

                  <Link
                    href="/services"
                    className="text-[14px] leading-6 text-[#5A6355] hover:text-[#2D4739] hover:translate-x-1 transition-all duration-300 inline-block"
                  >
                    {service}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* ================= CONTACT ================= */}

          <div>

            <h3 className="font-serif text-[20px] text-[#2D4739] mb-6">
              Contact
            </h3>

            <div className="space-y-6">

              <a
                href={`mailto:${email}`}
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#F4F3EE] flex items-center justify-center shrink-0 group-hover:bg-[#2D4739] transition-all duration-300">
                  <Mail className="w-4 h-4 text-[#2D4739] group-hover:text-white" />
                </div>

                <div>

                  <p className="text-[13px] uppercase tracking-wider text-[#9B988F] mb-1">
                    Email
                  </p>

                  <p className="text-[14px] text-[#2D4739] break-words">
                    {email}
                  </p>

                </div>

              </a>

              <a
                href="tel:+15482559555"
                className="flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#F4F3EE] flex items-center justify-center shrink-0 group-hover:bg-[#2D4739] transition-all duration-300">
                  <Phone className="w-4 h-4 text-[#2D4739] group-hover:text-white" />
                </div>

                <div>

                  <p className="text-[13px] uppercase tracking-wider text-[#9B988F] mb-1">
                    Phone
                  </p>

                  <p className="text-[14px] text-[#2D4739]">
                    548-255-9555
                  </p>

                </div>

              </a>

              <div className="flex items-start gap-4">

                <div className="w-10 h-10 rounded-full bg-[#F4F3EE] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#2D4739]" />
                </div>

                <div>

                  <p className="text-[13px] uppercase tracking-wider text-[#9B988F] mb-1">
                    Location
                  </p>

                  <p className="text-[14px] leading-6 text-[#2D4739]">
                    Virtual Sessions<br />
                    Across Ontario, Canada
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
      {/* ================= BOTTOM BAR ================= */}

      <div className="border-t border-[#E8E6DF] bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            {/* Copyright */}

            <p className="text-[13px] text-[#7A8077] text-center md:text-left">
              © {new Date().getFullYear()}{" "}
              <span className="font-medium text-[#2D4739]">
                The Listening Room
              </span>
              . Counselling & Psychotherapy. All rights reserved.
            </p>

            {/* Footer Links */}

            {/* <div className="flex items-center gap-6">

              <Link
                href="/privacy"
                className="text-[13px] text-[#7A8077] hover:text-[#2D4739] transition-colors duration-300"
              >
                Privacy Policy
              </Link>

              <span className="w-[1px] h-4 bg-[#D8D4CB]" />

              <Link
                href="/terms"
                className="text-[13px] text-[#7A8077] hover:text-[#2D4739] transition-colors duration-300"
              >
                Terms of Use
              </Link>

            </div> */}

          </div>

        </div>
      </div>

    </footer>
  );
}