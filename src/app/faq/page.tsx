import Link from 'next/link';
import { Plus, HeartHandshake } from 'lucide-react';
import LeafDivider from '@/components/Logos/LeafdividerLogo';
import PageHero from '@/components/PageHero';

// Custom branch line graphic for the "Still have questions?" sidebar box
const SidebarBranchGraphic = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 w-24 h-24 text-[#2D4739]/10 pointer-events-none">
    <path d="M10 90 C 40 70 60 40 80 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M35 65 C 45 68 52 58 42 48 C 32 38 25 52 35 65 Z" stroke="currentColor" strokeWidth="1" />
    <path d="M55 35 C 65 38 72 28 62 18 C 52 8 45 22 55 35 Z" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export default function FAQ() {
  const generalQuestions = [
    { q: "What is counselling and how can it help me?", a: "Counselling provides a safe, supportive space to explore your thoughts, feelings, and behaviors. It helps clarify choices, process difficult experiences, and build practical tools for long-term emotional well-being." },
    { q: "How do I know if therapy is right for me?", a: "If life feels overwhelming, or you're navigating tough transitions, feeling stuck, or experiencing stress and anxiety, therapy can offer guided clarity tailored entirely to your personal goals." },
    { q: "What can I expect in my first session?", a: "Our initial session focuses on getting to know you. We'll speak lightly about your goals, what brought you here, and establish a comfortable framework tailored to your pace." },
    { q: "How often should I attend sessions?", a: "Most clients begin with weekly or bi-weekly frequencies to build consistent therapeutic momentum. Over time, we can evaluate your milestones and shift to monthly check-ins." },
    { q: "Is online therapy as effective as in-person therapy?", a: "Yes, extensive research indicates that virtual video therapy delivers identical clinical efficacy to traditional office-based environments, with the added benefit of privacy and home comfort." },
  ];

  const bookingQuestions = [
    { q: "How do I book a session?", a: "You can schedule your appointments dynamically via our online portal, or by selecting any of the Free Consultation options available throughout the website." },
    { q: "What if I need to reschedule or cancel?", a: "We maintain a simple 24-hour notification system. Please notify us at least a day in advance to change your reservation without incurring any full session processing fees." },
    { q: "Do you offer evening or weekend appointments?", a: "Yes, our availability spans select weekday evenings to cleanly accommodate work and personal schedules seamlessly where possible." }
  ];

  const insuranceQuestions = [
    { q: "What are your fees?", a: "Individual sessions are positioned at $150 per 50 minutes, and dedicated couples therapy services run at $180 per session framework." },
    { q: "Do you offer a sliding scale?", a: "Yes, we reserve an active group of reduced-fee slots exclusively to aid clients dealing with significant socioeconomic or structural financial constraints." },
    { q: "Do you direct bill insurance companies?", a: "Direct billing is actively supported where your specific workplace benefit plan structures allow it. Alternatively, full official digital receipts are instantly dispatched for personal insurance claims." }
  ];

  return (
    <div className="bg-[#F6F3ED] min-h-screen flex flex-col font-sans antialiased">

      {/* 1. HERO SECTION */}
      <PageHero
        eyebrow="FAQ"
        heading={<>Frequently Asked <br /> Questions</>}
        description={<p>Here are answers to some common questions about therapy, sessions, and what to expect.</p>}
        imageSrc="/images/services-hero.jpg"
        imageAlt="Services"
        imageSizes="(max-width: 1024px) 100vw, 50vw"
      />



      {/* 2. MAIN ACCORDIONS CATEGORY AREA */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-[#E8E6DF]/80">
        <div className="max-w-7xl mx-auto">

          {/* CATEGORY A: GENERAL QUESTIONS + SIDEBAR CARD SPLIT */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              <div className="lg:col-span-2">
                <div className="text-center mb-8 flex flex-col items-center">
                  <h2 className="font-serif text-[18px] text-[#2D4739] font-medium tracking-wide">General Questions</h2>
                  <LeafDivider />
                </div>
                <div className="space-y-3">
                  {generalQuestions.map((item, i) => (
                    <details key={i} className="group bg-[#FCFCFA] border border-[#E8E6DF] rounded-xl overflow-hidden cursor-pointer transition-all duration-200 shadow-3xs">
                      <summary className="flex items-center justify-between p-5 list-none select-none font-sans text-[15px] font-medium text-[#2D4739] hover:text-[#203328]">
                        <span>{item.q}</span>
                        <Plus className="w-4 h-4 text-[#2D4739] group-open:rotate-45 transition-transform shrink-0 ml-4" strokeWidth={2.5} />
                      </summary>
                      <div className="px-5 pb-5 pt-1 text-[14px] text-[#2D4739]/90 leading-[1.65] bg-white border-t border-[#E8E6DF]/30 font-normal font-sans">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Sidebar box: "Still have questions?" */}
              <div className="bg-[#EFECE6] border border-[#E8E6DF] rounded-2xl p-8 relative overflow-hidden flex flex-col items-start h-full justify-between shadow-3xs">
                <SidebarBranchGraphic />
                <div className="z-10">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2D4739] mb-5 border border-[#E8E6DF]/40">
                    <HeartHandshake className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-[20px] text-[#2D4739] font-medium mb-3">Still have questions?</h3>
                  <p className="text-[13.5px] text-[#2D4739]/90 leading-[1.6] mb-8 max-w-[220px] font-normal font-sans">
                    If you don&apos;t see your question here, feel free to reach out. I&apos;m happy to help.
                  </p>
                </div>
                <Link href="/contact" className="z-10 inline-flex items-center justify-center px-5 py-2.5 bg-[#2D4739] text-white text-[13px] font-medium rounded-md hover:bg-[#203328] transition-colors font-sans">
                  Contact Me &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* LOWER SECTION: SPLIT CATEGORIES IN A 2-COLUMN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* CATEGORY B: BOOKING & SESSIONS */}
            <div>
              <div className="text-center mb-8 flex flex-col items-center">
                <h2 className="font-serif text-[18px] text-[#2D4739] font-medium tracking-wide">Booking & Sessions</h2>
                <LeafDivider />
              </div>
              <div className="space-y-3">
                {bookingQuestions.map((item, i) => (
                  <details key={i} className="group bg-[#FCFCFA] border border-[#E8E6DF] rounded-xl overflow-hidden cursor-pointer transition-all duration-200 shadow-3xs">
                    <summary className="flex items-center justify-between p-5 list-none select-none font-sans text-[15px] font-medium text-[#2D4739] hover:text-[#203328]">
                      <span>{item.q}</span>
                      <Plus className="w-4 h-4 text-[#2D4739] group-open:rotate-45 transition-transform shrink-0 ml-4" strokeWidth={2.5} />
                    </summary>
                    <div className="px-5 pb-5 pt-1 text-[14px] text-[#2D4739]/90 leading-[1.65] bg-white border-t border-[#E8E6DF]/30 font-normal font-sans">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            {/* CATEGORY C: FEES & INSURANCE */}
            <div>
              <div className="text-center mb-8 flex flex-col items-center">
                <h2 className="font-serif text-[18px] text-[#2D4739] font-medium tracking-wide">Fees & Insurance</h2>
                <LeafDivider />
              </div>
              <div className="space-y-3">
                {insuranceQuestions.map((item, i) => (
                  <details key={i} className="group bg-[#FCFCFA] border border-[#E8E6DF] rounded-xl overflow-hidden cursor-pointer transition-all duration-200 shadow-3xs">
                    <summary className="flex items-center justify-between p-5 list-none select-none font-sans text-[15px] font-medium text-[#2D4739] hover:text-[#203328]">
                      <span>{item.q}</span>
                      <Plus className="w-4 h-4 text-[#2D4739] group-open:rotate-45 transition-transform shrink-0 ml-4" strokeWidth={2.5} />
                    </summary>
                    <div className="px-5 pb-5 pt-1 text-[14px] text-[#2D4739]/90 leading-[1.65] bg-white border-t border-[#E8E6DF]/30 font-normal font-sans">
                      {item.a}
                    </div>
                  </details>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. COFFEE-THEMED INTERMEDIATE HORIZONTAL BANNER */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 border-t border-[#E8E6DF]/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left flex-col sm:flex-row">
            <div className="w-12 h-12 rounded-full border border-[#E8E6DF] bg-white flex items-center justify-center text-[#2D4739] shrink-0">
              <HeartHandshake className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-sans text-[15px] font-bold text-[#2D4739] tracking-wide mb-0.5">
                You don&apos;t have to figure it out alone.
              </h4>
              <p className="text-[13.5px] text-[#2D4739]/70 font-normal font-sans">
                I&apos;m here to listen and support you.
              </p>
            </div>
          </div>
          <Link
            href="https://calendly.com/ft_185/new-meeting"
            target="_blank"
            className="bg-[#2D4739] text-white px-6 py-3 rounded-md text-[13px] font-medium tracking-wide hover:bg-[#203328] transition-colors shrink-0 w-full md:w-auto text-center font-sans"
          >
            Book a Free 15-Minute Consultation &rarr;
          </Link>
        </div>
      </section>

    </div>
  );
}