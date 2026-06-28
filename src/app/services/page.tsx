import Link from 'next/link';
import {
  Brain,
  BrainCog,
  Sprout,
  Globe,
  Briefcase,
  Users,
  Flower2,
  HandHeart,
  ArrowRight
} from 'lucide-react';
import LeafDivider from '@/components/Logos/LeafdividerLogo';
import PageHero from '@/components/PageHero';

// Delicate Branch Graphic for the bottom CTA banner
const BranchGraphic = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M30 180 C 80 150 120 100 160 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <path d="M75 140 C 95 145 110 125 90 105 C 70 85 55 115 75 140 Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M115 85 C 135 90 150 70 130 50 C 110 30 95 60 115 85 Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M100 110 C 80 95 75 70 100 65 C 125 60 120 95 100 110 Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M140 50 C 120 35 115 10 140 5 C 165 0 160 35 140 50 Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M55 160 C 35 145 30 120 55 115 C 80 110 75 145 55 160 Z" stroke="currentColor" strokeWidth="1.5" />
  </svg>
);

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "Anxiety, Stress & Emotional Wellness",
      desc: "Support for anxiety, worry, stress, and overwhelm. Learn tools to manage emotions, calm your mind, and feel more in control."
    },
    {
      icon: BrainCog,
      title: "ADHD, Focus & Personal Effectiveness",
      desc: "Improve focus, organization, time management, and productivity. Build strategies that work with your brain, not against it."
    },
    {
      icon: Sprout,
      title: "Self-Esteem, Confidence & Personal Growth",
      desc: "Build self-worth, confidence, and a positive self-image. Grow into the version of yourself you want to be."
    },
    {
      icon: Globe,
      title: "Life Transitions, Immigration & Cultural Adjustment",
      desc: "Navigate change, uncertainty, and big life transitions. Support for immigrants and culturally diverse individuals adjusting to life in Canada."
    },
    {
      icon: Briefcase,
      title: "Workplace Wellness & Career Support",
      desc: "Manage work stress, prevent burnout, and build confidence in your career. Support for workplace challenges and career transitions."
    },
    {
      icon: Users,
      title: "Relationships, Family & Communication",
      desc: "Strengthen relationships, improve communication, and navigate family dynamics with understanding and empathy."
    },
    {
      icon: Flower2,
      title: "Trauma, Grief & Major Life Challenges",
      desc: "Compassionate support for past trauma, loss, and life's most difficult moments. Healing is possible, and you don't have to go through it alone."
    },
    {
      icon: HandHeart,
      title: "Other Areas of Support",
      desc: "Every journey is unique. If there's something else on your mind, let's talk about how I can support you."
    },
  ];

  return (
    <div className="bg-[#F9F8F6] min-h-screen flex flex-col font-sans antialiased">

      {/* 1. HERO SECTION */}
      <PageHero
        eyebrow="Services"
        heading="Compassionate support tailored to you."
        description={
          <p>
            Life can feel overwhelming at times. You don&apos;t have to navigate it alone. I offer support for a wide range of challenges so you can feel better, grow, and thrive.
          </p>
        }
        imageSrc="/images/services-hero.jpg"
        imageAlt="Services"
        imageSizes="(max-width: 1024px) 100vw, 50vw"
      />

      {/* 2. SERVICES GRID SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E8E6DF]">
        <div className="max-w-7xl mx-auto text-center mb-16 flex flex-col items-center">
          <h2 className="font-serif text-[30px] text-[#2D4739] font-medium tracking-wide mb-2">How I Can Support You</h2>
          <LeafDivider />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-[#FCFCFA] border border-[#E8E6DF] rounded-2xl p-8 flex flex-col hover:border-[#2D4739]/30 transition-all duration-300 shadow-3xs"
              >
                <div className="mb-6 w-14 h-14 rounded-full bg-[#EFECE6] flex items-center justify-center text-[#2D4739] shrink-0 border border-[#E8E6DF]/30 shadow-3xs">
                  <Icon className="w-6 h-6" strokeWidth={1.2} aria-hidden="true" />
                </div>

                <h3 className="font-serif text-[19px] text-[#2D4739] font-medium leading-[1.35] mb-4">
                  {service.title}
                </h3>

                <p className="text-[13.5px] text-[#2D4739]/90 leading-[1.65] mb-8 flex-grow font-sans font-normal">
                  {service.desc}
                </p>

                <Link
                  href="/contact"
                  className="inline-flex items-center text-[13px] font-semibold text-[#2D4739] hover:text-[#203328] transition-colors mt-auto group font-sans"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-2 transform group-hover:translate-x-1 transition-transform" strokeWidth={2.5} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. LIGHT BOTTOM CTA BANNER */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E8E6DF]/30">
        <div className="max-w-7xl mx-auto bg-[#F9F8F6] rounded-2xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-3xs">

          <div className="absolute left-0 bottom-0 transform -translate-x-1/4 translate-y-1/4 opacity-[0.08] text-[#2D4739] pointer-events-none">
            <BranchGraphic className="w-[200px] h-[200px]" />
          </div>

          <div className="flex flex-col text-center lg:text-left z-10 pl-0 lg:pl-12">
            <h3 className="font-serif text-[24px] lg:text-[28px] text-[#2D4739] font-medium mb-2">
              Not sure where to start?
            </h3>
            <p className="text-[14.5px] text-[#2D4739]/90 leading-[1.6] font-sans font-normal">
              Let&apos;s talk. Together, we can figure out what support looks like for you.
            </p>
          </div>

          <div className="shrink-0 z-10 w-full lg:w-auto">
            <Link
              href="https://calendly.com/ft_185/new-meeting"
              target="_blank"
              className="inline-flex items-center justify-center w-full lg:w-auto px-7 py-3.5 bg-[#2D4739] text-white hover:bg-[#203328] transition-colors duration-300 text-[13px] rounded-md tracking-wide font-medium font-sans shadow-xs"
            >
              Book a Free 15-Minute Consultation &rarr;
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}