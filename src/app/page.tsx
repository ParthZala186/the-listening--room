import Image from "next/image";
import Button from "@/components/Button";
import { HandHeart, Brain, Leaf, Users, User, Flower2 } from "lucide-react";
import LeafDivider from "@/components/Logos/LeafdividerLogo";
import Link from "next/link";

export default function Home() {
  const services = [
    { title: "Anxiety & Stress", desc: "Manage worry, overwhelm,\nand daily stress.", icon: HandHeart },
    { title: "ADHD & Focus", desc: "Improve focus, organization,\nand self-understanding.", icon: Brain },
    { title: "Life Transitions", desc: "Navigate change, uncertainty,\nand new beginnings.", icon: Leaf },
    { title: "Relationships", desc: "Strengthen communication\nand build healthier\nconnections.", icon: Users },
    { title: "Self-Esteem & Growth", desc: "Build confidence, resilience,\nand a stronger sense\nof self.", icon: User },
    { title: "Trauma & Grief", desc: "Find support for past\nexperiences and loss.", icon: Flower2 },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "The Listening Room",
    image: "https://thelisteningroom.com/images/minh-pham-OtXADkUh3-I-unsplash.jpg",
    description: "Compassionate online counselling for anxiety, stress, ADHD, life transitions, relationships, and more.",
    telephone: "548-255-9555",
    email: process.env.NEXT_PUBLIC_EMAIL_ID,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ontario",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    url: "https://thelisteningroom.com",
    medicalSpecialty: ["Psychiatric", "MentalHealth"],
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F9F8F6]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. HERO SECTION (Asymmetric screen-split flush to right layout) */}
      <section className="w-full bg-[#F9F8F6] flex flex-col md:flex-row items-stretch">
        {/* Left Side Copy */}
        <div className="w-full md:w-[55%] pt-12 pb-16 md:py-24 px-6 sm:px-12 md:pl-16 lg:pl-28 xl:pl-40 flex flex-col justify-center">
          <h1 className="font-serif text-[42px] lg:text-[52px] text-[#2C3E2B] leading-[1.15] tracking-tight">
            A safe space to be heard,<br />understood, and supported.
          </h1>

          <div className="w-[64px] h-[1.5px] bg-[#4A5443] my-8"></div>

          <div className="text-[#5A6355] text-[15px] lg:text-[16px] leading-[1.65] mb-10 space-y-4 max-w-md">
            <p>
              Compassionate online counselling for anxiety, stress, ADHD, life transitions, relationships, and more.
            </p>
            <p className="font-medium">You don&apos;t have to carry it all alone.</p>
          </div>

          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href={process.env.NEXT_PUBLIC_MEETING_URL || '#'}
              target="_blank"
              className=" bg-[#4A5443] hover:bg-[#3D4537] text-white px-6 py-3.5 rounded-[4px] text-[14px] inline-block"
            >
              Book a Free 15-Minute Consultation &rarr;
            </Link>
            <Button href="/services" variant="outline" className="border-[#4A5443] text-[#4A5443] px-6 py-3.5 rounded-[4px] text-[14px]">
              Explore Services
            </Button>
          </div>
        </div>

        {/* Right Side: Hero Image sits edge-to-edge on right monitor boundary */}
        <div className="relative w-full md:w-[45%] aspect-[4/3] md:aspect-auto md:h-[550px] lg:h-[600px] shrink-0">
          <Image
            src={`${process.env.NEXT_PUBLIC_SITE_URL}/images/HeroImage.jpg`}
            alt="Calming therapy room layout with a light warm lounge chair"
            fill
            className="object-cover object-center"
            priority
            quality={85}
            sizes="(max-width: 768px) 100vw, 45vw"
          />
        </div>
      </section>

      {/* 2. SERVICES SECTION (Pure crisp white background layout) */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 text-center border-t border-[#E8E6DF]/60">
        <h2 className="font-serif text-[32px] text-[#2C3E2B] tracking-tight mb-2">
          How I Can Support You
        </h2>

        {/* Double decorative leaf element */}
        <div className="flex justify-center mb-16 text-[#4A5443]/40">
          <LeafDivider />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="flex flex-col items-center">
                <div className="mb-4 w-16 h-16 rounded-full bg-[#F4F3EE] flex items-center justify-center text-[#4A5443]">
                  <IconComponent className="w-6 h-6" strokeWidth={1.2} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-[#2C3E2B] text-[17px] font-medium mb-2.5">
                  {service.title}
                </h3>
                <p className="text-[13px] text-[#5A6355] leading-[1.6] max-w-[180px] whitespace-pre-line">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. MIDDLE CTA SECTION */}
      <section className="bg-[#F9F8F6] border-y border-[#E8E6DF] w-full">
        <div className="w-full flex flex-col md:flex-row items-stretch">

          {/* Left Image Aspect Container */}
          <div className="relative w-full h-[300px] md:h-auto md:w-[45%] lg:w-[40%] xl:w-[35%] shrink-0">
            <Image
              src={`${process.env.NEXT_PUBLIC_SITE_URL}/images/wellness-image.jpg`}
              alt="Vase and burning candle on wooden surface"
              fill
              className="object-cover object-center"
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Right Text Space */}
          <div className="relative py-14 px-6 sm:px-12 md:pl-12 md:pr-16 lg:pl-20 flex-1 flex flex-col justify-center bg-[#F9F8F6]">

            {/* Watermark leaf art layout placement */}
            <div className="absolute right-4 bottom-0 md:right-8 pointer-events-none w-[150px] md:w-[220px] opacity-[0.15] z-0 select-none">
              <svg viewBox="0 0 160 220" fill="none" className="w-full h-full text-[#4A5343]">
                <path d="M100 5 C90 40, 105 75, 80 110 C60 140, 75 175, 55 215" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                <g stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                  <path d="M97 25 C97 25, 120 18, 128 30 C120 42, 100 38, 97 25 Z" />
                  <path d="M95 50 C95 50, 70 46, 64 58 C72 68, 92 62, 95 50 Z" />
                  <path d="M99 70 C99 70, 122 64, 130 76 C122 88, 102 82, 99 70 Z" />
                  <path d="M84 95 C84 95, 60 91, 54 103 C62 113, 81 107, 84 95 Z" />
                  <path d="M76 120 C76 120, 99 115, 106 127 C98 138, 79 132, 76 120 Z" />
                  <path d="M68 150 C68 150, 44 146, 38 158 C46 168, 65 162, 68 150 Z" />
                  <path d="M62 178 C62 178, 84 173, 91 185 C83 196, 65 190, 62 178 Z" />
                  <path d="M52 205 C52 205, 70 200, 76 211 C69 221, 55 217, 52 205 Z" />
                </g>
              </svg>
            </div>

            {/* Typography block */}
            <div className="relative z-10 max-w-md">
              <h2 className="font-serif text-[30px] lg:text-[36px] text-[#2C3E2B] leading-[1.2] tracking-tight mb-4">
                You Deserve to Feel Better
              </h2>

              <div className="text-[#5A6355] text-[14px] lg:text-[15px] leading-[1.65] mb-6 space-y-3">
                <p>Therapy is a space to pause, reflect, and grow.</p>
                <p>Together, we&apos;ll work at a pace that feels right for you.</p>
                <p>Your story matters, and healing is possible.</p>
              </div>

              <div>
                <Link  href={process.env.NEXT_PUBLIC_MEETING_URL || '#'} target='_blank' className="inline-flex items-center gap-3 bg-[#2D4739] hover:bg-[#203328] text-white px-6 py-3 rounded-[4px] text-[14px]">
                  Book a Free Consultation <span>&rarr;</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BOTTOM BANNER */}
      <div className="bg-[#4A5443] py-7 text-center px-4">
        <p className="text-[#F9F8F6] text-[15px] font-serif tracking-wide">
          You don&apos;t have to face life&apos;s challenges alone. I&apos;m here to listen.
        </p>
      </div>
    </div>
  );
}