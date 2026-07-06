import Image from 'next/image';
import Link from 'next/link';
import {
  HandHeart,
  User,
  Sprout,
  Lock,
  ArrowRight,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Compass,
} from "lucide-react";
import LeafDivider from '@/components/Logos/LeafdividerLogo';
import PageHero from '@/components/PageHero';

const expectations = [
  {
    icon: HandHeart,
    title: "A Safe Space",
    desc: "A warm, welcoming environment where you can speak openly without fear of judgment.",
  },
  {
    icon: User,
    title: "Individualized Care",
    desc: "Every session is tailored to your unique experiences, strengths, and personal goals.",
  },
  {
    icon: Sprout,
    title: "Growth & Healing",
    desc: "Evidence-informed therapy that supports lasting emotional wellbeing and meaningful change.",
  },
  {
    icon: Lock,
    title: "Confidential Support",
    desc: "Your privacy, comfort, and trust remain at the center of every conversation.",
  },
];

const approaches = [
  {
    icon: HeartHandshake,
    title: "Genuine Human Connection",
    desc: "Therapy begins with building a trusting relationship where you feel seen, heard, and accepted.",
  },
  {
    icon: Lightbulb,
    title: "Curiosity & Compassion",
    desc: "Every story is approached with openness, empathy, and respect—never judgment.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-Informed Care",
    desc: "Thoughtful therapeutic approaches are combined with practical strategies tailored to your unique needs.",
  },
  {
    icon: Compass,
    title: "Collaborative Growth",
    desc: "We'll work together to discover your strengths, navigate challenges, and create meaningful change.",
  },
];

export default function About() {
  return (
    <div className="bg-[#F9F8F6] min-h-screen flex flex-col font-sans antialiased">

      {/* 1. HERO */}
      <PageHero
        eyebrow="About"
        heading={<>About The <br /> Listening Room</>}
        description={
          <p>
            At The Listening Room, meaningful healing begins with feeling
            truly heard. This is a compassionate online counselling practice
            where you can slow down, reflect, and explore life&apos;s challenges
            in a supportive, non-judgmental environment.
          </p>
        }
        imageSrc="/images/about-hero.jpg"
        imageAlt="Calming therapy space with plant and inspirational framed print"
      />

      {/* 2. WHAT YOU CAN EXPECT */}
      <section className="py-28 px-4 sm:px-6 lg:px-8 bg-white border-y border-[#E8E6DF]">
        <div className="max-w-7xl mx-auto text-center mb-16 flex flex-col items-center">
          <h2 className="font-serif text-[30px] text-[#2C3E2B] font-medium tracking-wide mb-2">
            What You Can Expect
          </h2>
          <LeafDivider />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 lg:gap-y-0">
          {expectations.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`group flex flex-col items-center text-center px-4 lg:px-8 transition-all duration-500 hover:-translate-y-2 ${index !== expectations.length - 1 ? "lg:border-r lg:border-[#E8E6DF]/60" : ""
                  }`}
              >
                <div className="mb-6 w-[78px] h-[78px] rounded-full bg-gradient-to-br from-[#F7F5F1] to-[#ECE8E0] flex items-center justify-center text-[#4A5443] border border-[#E8E6DF]/40 shadow-sm transition-all duration-500 group-hover:scale-110">
                  <Icon className="w-8 h-8" strokeWidth={1.2} aria-hidden="true" />
                </div>
                <h3 className="font-serif text-[20px] text-[#2C3E2B] font-medium mb-3">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#5A6355] leading-7 max-w-[220px]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. WHY THE LISTENING ROOM */}
      <section className="bg-[#FCFBF8] py-28 border-y border-[#E8E6DF]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10">

          <div className="text-center mb-16">
            <span className="uppercase tracking-[0.25em] text-[#7D857B] text-[12px] font-semibold">
              About Us
            </span>
            <h2 className="mt-5 font-serif text-[40px] lg:text-[52px] text-[#2D4739] leading-tight">
              Why The Listening Room?
            </h2>
            <div className="mt-8 flex justify-center">
              <LeafDivider />
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 text-[#5A6355] text-[17px] leading-[2]">
            <p>
              At <strong className="text-[#2D4739]">The Listening Room</strong>, we believe
              meaningful change begins with feeling truly heard. In a world that often moves
              too quickly, it can be difficult to find a space where you can pause, reflect,
              and speak openly without fear of judgment.
            </p>
            <p>
              This practice was created to offer exactly that a calm, supportive environment
              where you can bring your thoughts, emotions, and experiences just as they are.
              Every person&apos;s journey is unique, which is why counselling is approached with
              curiosity, compassion, and respect for your individual story.
            </p>
            <p>
              Rather than rushing toward solutions, we take time to understand what matters most
              to you, moving at a pace that feels comfortable and supportive. Together, we explore
              challenges, build on strengths, and develop practical tools to help you navigate
              life&apos;s complexities with greater confidence and clarity.
            </p>
            <p>
              Whether you&apos;re experiencing anxiety, relationship challenges, life transitions,
              cultural adjustment, or simply feeling overwhelmed, The Listening Room offers a
              place where your voice is valued and your experiences are honored.
            </p>
            <p>
              Our approach combines genuine human connection with evidence-informed therapeutic
              strategies, creating a counselling experience that supports healing, growth, and
              lasting change.
            </p>
          </div>

          <div className="mt-20 text-center">
            <div className="w-20 h-[2px] bg-[#B7C1B4] mx-auto mb-8" />
            <p className="font-serif italic text-[30px] lg:text-[36px] leading-relaxed text-[#6E7E68] max-w-3xl mx-auto">
              &ldquo;Above all, The Listening Room is a place where you don&apos;t have to carry everything alone.&rdquo;
            </p>
          </div>

        </div>
      </section>

      {/* 4. MEET FORAM */}
      <section className="bg-white py-28 border-b border-[#E8E6DF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Photo */}
            <div className="relative overflow-hidden rounded-[32px] border border-[#E8E6DF] shadow-lg ring-1 ring-[#E8E6DF]">
              <Image
                src="/images/foram.jpeg"
                alt="Foram Trivedi — Registered Psychotherapist"
                width={700}
                height={900}
                quality={90}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            {/* Content */}
            <div>
              <span className="uppercase tracking-[0.25em] text-[#7D857B] text-[12px] font-semibold">
                Meet Foram Trivedi
              </span>
              <p className="mt-2 text-[#6E7E68] text-[15px] uppercase tracking-[0.15em]">
                Registered Psychotherapist
              </p>
              <h2 className="mt-4 font-serif text-[42px] text-[#2D4739] leading-tight">
                My Story
              </h2>

              <div className="mt-8 space-y-7 text-[#5A6355] text-[16px] leading-8">
                <p>
                  Long before I became a psychotherapist, I found that friends, family, colleagues, and
                  even strangers naturally felt comforatable opening up to me about their experiences, challenges, hopes and fears.
                </p>
                <p>
                  I didn&apos;t always have the answers, but I genuinely cared and I listened.
                  Over time I realized that behind every person is a unique story waiting to
                  be understood. That realization became a calling.
                </p>
                <p>
                  As I continued my own journey, I witnessed the profound impact that genuine
                  understanding and human connection can have. I learned that people don&apos;t
                  always need someone to fix their problems. Sometimes they simply need a safe
                  place to speak openly and be heard without judgment.
                </p>
                <p>
                  This belief ultimately led me to pursue psychotherapy and create{" "}
                  <strong className="text-[#2D4739]">The Listening Room</strong> a space where
                  people could pause from the demands of everyday life, feel supported, and know
                  they don&apos;t have to navigate life&apos;s challenges alone.
                </p>
                <p>
                  Today, I continue to be inspired by the resilience, courage, and strength I
                  see in the people I work with. It is a privilege to walk alongside individuals
                  as they navigate change, overcome obstacles, and create lives that feel more
                  aligned with who they truly are.
                </p>
                <p>
                  At the heart of my work is a simple belief: every person&apos;s story matters,
                  every voice deserves to be heard, and meaningful healing often begins with
                  a conversation.
                </p>
              </div>

              <div className="mt-12">
                <Link
                  href={process.env.NEXT_PUBLIC_MEETING_URL || "#"}
                  target="_blank"
                  className="inline-flex items-center gap-3 rounded-md bg-[#2D4739] px-7 py-4 text-white text-[15px] font-medium hover:bg-[#203328] transition-all duration-300"
                >
                  Book a Free 15-Minute Consultation
                  <ArrowRight size={18} strokeWidth={2} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. MY THERAPEUTIC APPROACH */}
      <section className="bg-[#F9F8F6] py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="text-center max-w-3xl mx-auto">
            <span className="uppercase tracking-[0.25em] text-[#7D857B] text-[12px] font-semibold">
              My Approach
            </span>
            <h2 className="mt-4 font-serif text-[40px] lg:text-[48px] text-[#2D4739]">
              My Therapeutic Approach
            </h2>
            <div className="mt-6 flex justify-center">
              <LeafDivider />
            </div>
            <p className="mt-8 text-[#5A6355] text-[17px] leading-8">
              Therapy isn&apos;t about having someone tell you what to do. It&apos;s about creating
              a safe, collaborative relationship where we can explore your experiences,
              understand your strengths, and work together toward meaningful change.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-20">
            {approaches.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl border border-[#E8E6DF] p-10 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#F5F2ED] to-[#ECE7DE] flex items-center justify-center mb-7 transition-transform duration-500 group-hover:scale-110">
                    <Icon className="w-7 h-7 text-[#2D4739]" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-serif text-[24px] text-[#2D4739] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-[#5A6355] text-[15px] leading-8">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="max-w-3xl mx-auto text-center mt-24">
            <div className="w-24 h-[2px] bg-[#C8D0C3] mx-auto mb-8" />
            <p className="font-serif italic text-[30px] leading-relaxed text-[#6E7E68]">
              &ldquo;Together, we&apos;ll move at a pace that feels comfortable, supportive, and true to your journey.&rdquo;
            </p>
          </div>

        </div>
      </section>

      {/* 6. FINAL CTA */}
      <section className="relative overflow-hidden bg-[#2D4739]">
        <div className="relative max-w-6xl mx-auto px-6 lg:px-12 py-28 text-center">

          <span className="uppercase tracking-[0.25em] text-white/70 text-[12px] font-semibold">
            Begin Your Journey
          </span>
          <div className="flex justify-center mt-6 mb-8 opacity-70 text-white">
            <LeafDivider />
          </div>
          <h2 className="font-serif text-[40px] lg:text-[52px] leading-tight text-white">
            Ready to Take <br /> the First Step?
          </h2>
          <p className="mt-8 max-w-2xl mx-auto text-[17px] leading-8 text-white/80">
            You don&apos;t have to navigate life&apos;s challenges alone. Whether you&apos;re seeking
            support for anxiety, relationships, life transitions, or simply looking for a
            safe place to talk, I&apos;m here to walk alongside you.
          </p>
          <Link
            href={process.env.NEXT_PUBLIC_MEETING_URL || "#"}
            target="_blank"
            className="mt-12 inline-flex items-center gap-3 rounded-md border border-white/30 bg-white px-8 py-4 text-[#2D4739] font-medium hover:bg-[#F4F3EE] transition-all duration-300"
          >
            Book a Free 15-Minute Consultation
            <ArrowRight size={18} strokeWidth={2} />
          </Link>

        </div>
      </section>

    </div>
  );
}