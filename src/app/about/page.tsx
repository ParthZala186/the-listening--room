import Image from 'next/image';
import Link from 'next/link';
import {
  HandHeart,
  User,
  Sprout,
  Lock,
  ArrowRight,
  CalendarDays
} from 'lucide-react';
import LeafDivider from '@/components/Logos/LeafdividerLogo';
import PageHero from '@/components/PageHero';

export default function About() {
  const expectations = [
    {
      icon: HandHeart,
      title: "A Safe Space",
      desc: "A warm, non-judgmental environment where you can speak freely."
    },
    {
      icon: User,
      title: "Personalized Support",
      desc: "Therapy tailored to your unique experiences, goals, and needs."
    },
    {
      icon: Sprout,
      title: "Growth & Healing",
      desc: "Evidence-informed approaches to help you heal, grow, and create meaningful change."
    },
    {
      icon: Lock,
      title: "Confidential & Secure",
      desc: "Your privacy and trust are at the heart of everything we do."
    },
  ];

  return (
    <div className="bg-[#F9F8F6] min-h-screen flex flex-col font-sans antialiased">

      {/* 1. HERO SECTION (Asymmetric screen-split flush to right layout matching Figma exactly) */}
      <PageHero
        eyebrow="About"
        heading={<>About The <br /> Listening Room</>}
        description={
          <p>
            The Listening Room is a compassionate online therapy practice created to support your mental wellness and personal growth. This is a space where you can feel heard, understood, and empowered to heal.
          </p>
        }
        imageSrc="/images/about-hero.jpg"
        imageAlt="Calming therapy space with plant and inspirational framed print"
      />
      {/* 2. WHAT YOU CAN EXPECT HERE */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#E8E6DF]">
        <div className="max-w-7xl mx-auto text-center mb-16 flex flex-col items-center">
          <h2 className="font-serif text-[30px] text-[#2C3E2B] font-medium tracking-wide mb-2">What You Can Expect Here</h2>
          <LeafDivider />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 lg:gap-y-0">
          {expectations.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex flex-col items-center text-center px-4 lg:px-8 
                  ${index !== expectations.length - 1 ? 'lg:border-r lg:border-[#E8E6DF]/60' : ''}
                `}
              >
                <div className="mb-6 w-[72px] h-[72px] rounded-full bg-[#F4F3EE] flex items-center justify-center text-[#4A5443] border border-[#E8E6DF]/30 shadow-3xs">
                  <Icon className="w-7 h-7" strokeWidth={1.2} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-[18px] text-[#2C3E2B] font-medium mb-3">{item.title}</h3>
                <p className="text-[13.5px] text-[#5A6355] leading-[1.65] max-w-[220px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. WHY THE LISTENING ROOM */}
      <section className="bg-[#F9F8F6] border-y border-[#E8E6DF] w-full">
        <div className="w-full flex flex-col md:flex-row items-stretch">

          {/* Left Image Aspect Container */}
          <div className="relative w-full h-[300px] md:h-auto md:w-[45%] lg:w-[40%] xl:w-[35%] shrink-0">
            <Image
              src="/images/leaf-branch-decorative.png"
              alt="Leaf Branch Decorative"
              fill
              className="object-cover object-center"
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Right Text Space */}
          <div className="relative py-14 px-6 sm:px-12 md:pl-12 md:pr-16 lg:pl-20 flex-1 flex flex-col justify-center bg-[#F9F8F6]">



            {/* Typography block */}
            <div className="relative z-10 max-w-md">
              <h2 className="font-serif text-[34px] md:text-[42px] font-normal text-[#2C3E2B] tracking-tight mb-5">
                Why &ldquo;The Listening Room&rdquo;?
              </h2>

              <div className="text-[#5A6355] text-[15px] lg:text-[16px] leading-[1.75] font-normal max-w-2xl space-y-5 font-sans">
                <p>
                  Because everyone deserves a space where they can be seen, heard, and accepted exactly as they are. Here, your story matters.
                </p>

                {/* Italics Callout matching the beautiful serif layout style */}
                <p
                  className="
    font-serif
    italic
    text-[24px]
    lg:text-[28px]
    text-[#6E7E68]
    pt-4
    leading-relaxed
  "
                >
                  You don&apos;t have to face life&apos;s challenges alone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 4. DARK BOTTOM CTA BAR */}
      <section className="bg-[#F7F4EF]">
        <div
          className="
          bg-[linear-gradient(90deg,#496044_0%,#5B7257_50%,#496044_100%)]
          rounded-b-[12px]
          lg:rounded-b-[16px]
        "
        >
          <div
            className="
            max-w-[1200px]
            mx-auto

            px-6
            lg:px-12

            py-6
            lg:py-0

            lg:h-[78px]

            flex
            flex-col
            lg:flex-row

            items-center
            justify-between

            gap-5
          "
          >
            {/* Left Side */}
            <div
              className="
              flex
              flex-col
              lg:flex-row

              items-center

              gap-3
              lg:gap-4

              text-center
              lg:text-left
            "
            >
              <CalendarDays
                size={22}
                strokeWidth={1.8}
                className="text-white shrink-0"
              />

              <div>
                <h3
                  className="
                  font-heading
                  text-[18px]
                  lg:text-[15px]
                  text-white
                  leading-tight
                "
                >
                  Ready to take the first step?
                </h3>

                <p
                  className="
                  mt-1
                  text-[13px]
                  lg:text-[11px]
                  text-white/85
                "
                >
                  Let&apos;s connect and explore how I can support you.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href={process.env.METTING_URL || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="
              inline-flex
              items-center
              justify-center
              gap-2
              w-full
              sm:w-auto
              h-[44px]
              lg:h-[34px]
              px-6
              lg:px-5
              border
              border-white/40
              rounded-[8px]
              text-white
              text-[13px]
              lg:text-[12px]
              font-medium
              hover:bg-white/10
              transition-all
            "
            >
              Book a Free Consultation

              <ArrowRight
                size={14}
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}