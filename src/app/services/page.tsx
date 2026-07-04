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
} from 'lucide-react';
import LeafDivider from '@/components/Logos/LeafdividerLogo';
import PageHero from '@/components/PageHero';

const services = [
  {
    icon: Brain,
    number: "01",
    title: "Anxiety, Stress & Emotional Wellness",
    summary: "Calm the noise. Reclaim clarity.",
    tags: ["Stress & Anxiety", "Depression & Low Mood", "Emotional Regulation", "Resilience & Coping Skills", "Loneliness & Isolation"],
  },
  {
    icon: BrainCog,
    number: "02",
    title: "ADHD, Focus & Personal Effectiveness",
    summary: "Work with your brain, not against it.",
    tags: ["ADHD & Focus Challenges", "Organization & Productivity", "Emotional Impact of ADHD", "Self-Management Strategies"],
  },
  {
    icon: Sprout,
    number: "03",
    title: "Self-Esteem, Confidence & Personal Growth",
    summary: "Build the version of yourself you want to be.",
    tags: ["Self-Esteem & Confidence", "Personal Growth", "Identity Exploration", "Building Self-Awareness"],
  },
  {
    icon: Globe,
    number: "04",
    title: "Life Transitions, Immigration & Cultural Adjustment",
    summary: "Navigate change — wherever it takes you.",
    tags: ["Life Transitions", "Immigration & Migration", "Cultural Adjustment", "Acculturation Stress", "Navigating Uncertainty"],
  },
  {
    icon: Briefcase,
    number: "05",
    title: "Workplace Wellness & Career Support",
    summary: "Find your footing at work again.",
    tags: ["Workplace Stress & Burnout", "Work-Life Balance", "Career Concerns", "Professional Transitions"],
  },
  {
    icon: Users,
    number: "06",
    title: "Relationships, Family & Communication",
    summary: "Stronger connections start with understanding.",
    tags: ["Relationship Challenges", "Family Conflict", "Communication Difficulties", "Boundary Setting"],
  },
  {
    icon: Flower2,
    number: "07",
    title: "Trauma, Grief & Major Life Challenges",
    summary: "Healing is possible. You don't have to go through it alone.",
    tags: ["Trauma & PTSD", "Grief, Loss & Bereavement", "Anger Management", "Postpartum & Maternal Mental Health"],
  },
  {
    icon: HandHeart,
    number: "08",
    title: "Other Areas of Support",
    summary: "Every journey is unique — let's talk about yours.",
    tags: ["Something on your mind?", "Let's figure it out together"],
  },
];

export default function Services() {
  return (
    <div className="bg-[#F9F8F6] min-h-screen flex flex-col font-sans antialiased">

      {/* 1. HERO */}
      <PageHero
        eyebrow="Services"
        heading="Compassionate support tailored to you."
        description={
          <p>
            Life can feel overwhelming at times — like your thoughts are too heavy to hold on your own.
            The Listening Room is a space where you can slow down, speak freely, and feel truly heard.
            Support for a wide range of challenges, so you can feel better, grow, and thrive.
          </p>
        }
        imageSrc="/images/services-hero.jpg"
        imageAlt="Calm therapy room with warm natural light"
        imageSizes="(max-width: 1024px) 100vw, 45vw"
      />

      {/* 2. INTRO STRIP */}
      <div className="bg-[#2D4739] py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-[20px] lg:text-[24px] text-[#F9F8F6] leading-[1.6] font-normal">
            &ldquo;This is a place for reflection, understanding, and support —
            without pressure or judgment.&rdquo;
          </p>
        </div>
      </div>

      {/* 3. SERVICES SECTION */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E8E6DF]">

        <div className="max-w-7xl mx-auto text-center mb-16 flex flex-col items-center">
          <h2 className="font-serif text-[30px] text-[#2D4739] font-medium tracking-wide mb-2">
            Areas of Support
          </h2>
          <LeafDivider />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                className="group relative bg-[#FCFCFA] border border-[#E8E6DF] rounded-2xl p-7 flex flex-col hover:border-[#2D4739]/40 hover:shadow-md transition-all duration-300"
              >
                {/* Number tag */}
                <span className="absolute top-6 right-6 font-sans text-[11px] font-semibold tracking-[0.15em] text-[#2D4739]/25 select-none">
                  {service.number}
                </span>

                {/* Icon circle */}
                <div className="mb-5 w-12 h-12 rounded-full bg-[#EFECE6] flex items-center justify-center text-[#2D4739] shrink-0 border border-[#E8E6DF]/60 group-hover:bg-[#2D4739] group-hover:text-white transition-colors duration-300">
                  <Icon className="w-5 h-5" strokeWidth={1.3} aria-hidden="true" />
                </div>

                {/* Title */}
                <h3 className="font-serif text-[17px] text-[#2D4739] font-medium leading-[1.3] mb-2">
                  {service.title}
                </h3>

                {/* Summary */}
                <p className="text-[13px] text-[#5A6355] italic leading-[1.55] mb-5 font-sans font-normal">
                  {service.summary}
                </p>

                {/* Divider */}
                <div className="w-8 h-[1px] bg-[#2D4739]/20 mb-5" />

                {/* Tags */}
                <ul className="flex flex-col gap-1.5 mt-auto">
                  {service.tags.map((tag) => (
                    <li
                      key={tag}
                      className="flex items-start gap-2 text-[12.5px] text-[#2D4739]/80 font-sans font-normal leading-[1.5]"
                    >
                      <span className="mt-[5px] w-1 h-1 rounded-full bg-[#2D4739]/40 shrink-0" />
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. APPROACH STRIP */}
      <section className="bg-[#F9F8F6] border-t border-[#E8E6DF] py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {[
            { label: "Safe & Confidential", body: "Everything shared in session stays between us. A space fully free of judgment." },
            { label: "Online & Flexible", body: "Sessions from the comfort of your own home, at a time that works for your life." },
            { label: "At Your Pace", body: "No pressure, no script. We work in a way that feels right for you, at every step." },
          ].map((item) => (
            <div key={item.label} className="flex flex-col items-center">
              <div className="w-8 h-[1.5px] bg-[#2D4739]/40 mb-5" />
              <h4 className="font-serif text-[18px] text-[#2D4739] font-medium mb-3">{item.label}</h4>
              <p className="text-[14px] text-[#5A6355] leading-[1.65] font-sans font-normal max-w-[240px]">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. BOTTOM CTA */}
      <section className="bg-[#2D4739] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          <span className="text-[#F9F8F6]/50 text-[11px] tracking-[0.25em] uppercase font-semibold mb-4 block font-sans">
            Ready to begin?
          </span>
          <h3 className="font-serif text-[28px] lg:text-[34px] text-[#F9F8F6] font-normal leading-[1.2] mb-4">
            Not sure where to start?
          </h3>
          <p className="text-[15px] text-[#F9F8F6]/70 leading-[1.7] mb-10 max-w-md font-sans font-normal">
            Let&apos;s talk. A free 15-minute consultation is a no-pressure way to see if we&apos;re a good fit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href={process.env.NEXT_PUBLIC_MEETING_URL || '#'}
              target="_blank"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-[#F9F8F6] text-[#2D4739] hover:bg-white transition-colors duration-300 text-[13.5px] rounded-[4px] tracking-wide font-medium font-sans"
            >
              Book a Free 15-Minute Consultation &rarr;
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 border border-[#F9F8F6]/30 text-[#F9F8F6]/80 hover:border-[#F9F8F6]/60 hover:text-[#F9F8F6] transition-colors duration-300 text-[13.5px] rounded-[4px] tracking-wide font-medium font-sans"
            >
              Send a Message
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}