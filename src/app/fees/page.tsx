import Link from 'next/link';
import {
  User,
  Users,
  HandHeart,
  CheckCircle2,
  CreditCard,
  Receipt,
  Plus
} from 'lucide-react';
import SunLifeLogo from '@/components/Logos/SunLifeLogo';
import ManulifeLogo from '@/components/Logos/ManulifeLogo';
import CanadaLifeLogo from '@/components/Logos/CanadaLifeLogo';
import GreenShieldLogo from '@/components/Logos/GreenShieldLogo';
import DesjardinsLogo from '@/components/Logos/DesjardinsLogo';
import BlueCrossLogo from '@/components/Logos/BlueCrossLogo';
import ClaimSecureLogo from '@/components/Logos/ClaimSecureLogo';
import EquitableLogo from '@/components/Logos/EquitableLogo';
import CowanLogo from '@/components/Logos/CowanLogo';
import FirstInsuranceLogo from '@/components/Logos/FirstInsuranceLogo';
import LeafDivider from '@/components/Logos/LeafdividerLogo';
import PageHero from '@/components/PageHero';

export default function Fees() {
  const insuranceProviders = [
    { element: <SunLifeLogo /> },
    { element: <ManulifeLogo /> },
    { element: <CanadaLifeLogo /> },
    { element: <GreenShieldLogo /> },
    { element: <DesjardinsLogo /> },
    { element: <BlueCrossLogo /> },
    { element: <ClaimSecureLogo /> },
    { element: <EquitableLogo /> },
    { element: <CowanLogo /> },
    { element: <FirstInsuranceLogo /> },
  ];

  return (
    <div className="bg-[#F9F8F6] min-h-screen flex flex-col font-sans antialiased">

      {/* 1. HERO SECTION */}
      <PageHero
        eyebrow="FEES & INSURANCE"
        heading="Fees & Insurance"
        description={
          <>
            <p className="font-medium">Accessible, transparent, and supportive care.</p>
            <p className="text-[#555555]">
              Invest in your well-being — you don&apos;t have to navigate it alone.
            </p>
          </>
        }
        imageSrc="/images/fees-hero.jpg"
        imageAlt="Therapy space with candles and cups"
      />

      {/* 2. SESSION FEES SECTION */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E8E6DF]">
        <div className="max-w-7xl mx-auto text-center mb-12 flex flex-col items-center">
          <h2 className="font-serif text-[32px] md:text-[36px] font-normal text-[#2D4739] mb-2">Session Fees</h2>
          <LeafDivider />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

          {/* Individual Session Card */}
          <div className="bg-[#FCFCFA] border border-[#E8E6DF] rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col md:items-center md:text-center shadow-3xs hover:border-[#2D4739]/30 transition-all duration-200">
            <div className="flex items-center justify-between mb-4 md:mb-0 w-full md:w-auto">
              <div className="flex items-center gap-4 md:flex-col md:gap-0">
                <div className="w-12 h-12 md:w-14 md:h-14 md:mb-4 rounded-full border border-[#E8E6DF]/50 bg-white flex items-center justify-center text-[#2D4739] shrink-0 shadow-3xs">
                  <User className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.2} />
                </div>
                <div className="flex flex-col text-left md:text-center">
                  <h3 className="font-serif text-[20px] md:text-[22px] font-medium text-[#2D4739] mb-1">Individual Session</h3>
                  <p className="text-[11px] text-[#2D4739]/70 font-bold uppercase tracking-wider md:mb-6 font-sans">50 Minutes</p>
                </div>
              </div>
              <div className="text-[32px] font-serif font-light text-[#2D4739] block md:hidden">$150</div>
            </div>

            <div className="hidden md:block text-[42px] font-serif font-light text-[#2D4739] mb-6">$150</div>

            <p className="text-[14px] text-[#555555] leading-[1.65] font-sans font-normal">
              One-on-one counselling tailored to your unique needs.
            </p>
          </div>

          {/* Couples Session Card */}
          <div className="bg-[#FCFCFA] border border-[#E8E6DF] rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col md:items-center md:text-center shadow-3xs hover:border-[#2D4739]/30 transition-all duration-200">
            <div className="flex items-center justify-between mb-4 md:mb-0 w-full md:w-auto">
              <div className="flex items-center gap-4 md:flex-col md:gap-0">
                <div className="w-12 h-12 md:w-14 md:h-14 md:mb-4 rounded-full border border-[#E8E6DF]/50 bg-white flex items-center justify-center text-[#2D4739] shrink-0 shadow-3xs">
                  <Users className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.2} />
                </div>
                <div className="flex flex-col text-left md:text-center">
                  <h3 className="font-serif text-[20px] md:text-[22px] font-medium text-[#2D4739] mb-1">Couples Session</h3>
                  <p className="text-[11px] text-[#2D4739]/70 font-bold uppercase tracking-wider md:mb-6 font-sans">50 Minutes</p>
                </div>
              </div>
              <div className="text-[32px] font-serif font-light text-[#2D4739] block md:hidden">$180</div>
            </div>

            <div className="hidden md:block text-[42px] font-serif font-light text-[#2D4739] mb-6">$180</div>

            <p className="text-[14px] text-[#555555] leading-[1.65] font-sans font-normal">
              Support for couples to strengthen connection and communication.
            </p>
          </div>

          {/* Good News Card */}
          <div className="bg-[#EFECE6] rounded-2xl p-6 md:p-8 lg:p-10 flex flex-col items-center text-center justify-center border border-[#E8E6DF] shadow-3xs">
            <div className="mb-4 text-[#2D4739]">
              <HandHeart className="w-10 h-10" strokeWidth={1.2} />
            </div>
            <h3 className="font-serif text-[24px] font-medium text-[#2D4739] mb-4">Good news!</h3>
            <p className="text-[14px] md:text-[15px] text-[#2D4739] leading-[1.6] mb-4 font-semibold font-sans">
              Insurance receipts provided for all sessions.
            </p>
            <div className="w-[30px] h-[1px] bg-[#2D4739]/30 mb-4"></div>
            <p className="text-[14px] md:text-[15px] text-[#555555] leading-[1.6] font-sans font-normal">
              Direct billing available where applicable.
            </p>
          </div>

        </div>
      </section>

      {/* 3. INSURANCE ACCEPTED */}
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white text-center border-t border-[#E8E6DF]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-[30px] md:text-[34px] font-normal text-[#2D4739] mb-4">Insurance Accepted</h2>
          <p className="text-[15px] text-[#555555] mb-10 font-sans font-normal">
            We work with many <span className="font-semibold text-[#2D4739]">major</span> insurance providers.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-10">
            {insuranceProviders.map((provider, index) => (
              <div
                key={index}
                className="bg-[#FCFCFA] border border-[#E8E6DF] rounded-xl h-16 md:h-22 flex items-center justify-center p-3 shadow-3xs content-visibility-auto"
              >
                {provider.element}
              </div>
            ))}
          </div>

          <p className="text-[13px] text-[#555555] max-w-2xl mx-auto leading-[1.65] font-sans font-normal">
            This is not an exhaustive list. If you don&apos;t see your provider listed, please check with your insurance plan or reach out and we&apos;ll be happy to help.
          </p>
        </div>
      </section>

      {/* 4. ADDITIONAL INFO */}
      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E8E6DF]">
        <div className="max-w-7xl mx-auto">

          <div className="hidden md:grid grid-cols-3 gap-6">
            <div className="bg-[#FCFCFA] border border-[#E8E6DF] rounded-xl p-8 flex items-start gap-4 shadow-3xs">
              <CheckCircle2 className="w-5 h-5 text-[#2D4739] shrink-0 mt-0.5" strokeWidth={1.5} />
              <div className="font-sans">
                <h4 className="font-serif text-[18px] font-medium text-[#2D4739] mb-2">Sliding Scale Available</h4>
                <p className="text-[13.5px] text-[#555555] leading-[1.6] font-normal">
                  We believe therapy should be accessible. Sliding scale options are available for eligible clients. Please reach out to learn more.
                </p>
              </div>
            </div>

            <div className="bg-[#FCFCFA] border border-[#E8E6DF] rounded-xl p-8 flex items-start gap-4 shadow-3xs">
              <CreditCard className="w-5 h-5 text-[#2D4739] shrink-0 mt-0.5" strokeWidth={1.5} />
              <div className="font-sans">
                <h4 className="font-serif text-[18px] font-medium text-[#2D4739] mb-3">Payment Options</h4>
                <ul className="text-[13.5px] text-[#555555] leading-[1.8] space-y-1 font-normal">
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#2D4739]/50 rounded-full"></span> Credit Card</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#2D4739]/50 rounded-full"></span> Debit Card</li>
                  <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-[#2D4739]/50 rounded-full"></span> E-Transfer</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#FCFCFA] border border-[#E8E6DF] rounded-xl p-8 flex items-start gap-4 shadow-3xs">
              <Receipt className="w-5 h-5 text-[#2D4739] shrink-0 mt-0.5" strokeWidth={1.5} />
              <div className="font-sans">
                <h4 className="font-serif text-[18px] font-medium text-[#2D4739] mb-2">Insurance & Receipts</h4>
                <p className="text-[13.5px] text-[#555555] leading-[1.6] font-normal">
                  A receipt will be provided after each session that you can submit to your insurance provider for reimbursement (subject to your plan&apos;s coverage).
                </p>
              </div>
            </div>
          </div>

          <div className="md:hidden space-y-3">
            {[
              {
                icon: CheckCircle2,
                title: "Sliding Scale Available",
                content: "We believe therapy should be accessible. Sliding scale options are available for eligible clients. Please reach out to learn more."
              },
              {
                icon: CreditCard,
                title: "Payment Options",
                content: "We accept Credit Card, Debit Card, and E-Transfer."
              },
              {
                icon: Receipt,
                title: "Insurance & Receipts",
                content: "A receipt will be provided after each session that you can submit to your insurance provider for reimbursement (subject to your plan's coverage)."
              }
            ].map((item, i) => (
              <details key={i} className="group bg-[#FCFCFA] border border-[#E8E6DF] rounded-xl overflow-hidden cursor-pointer shadow-3xs">
                <summary className="flex items-center justify-between p-5 list-none">
                  <div className="flex items-center gap-4">
                    <item.icon className="w-5 h-5 text-[#2D4739]" strokeWidth={1.5} />
                    <span className="font-serif text-[16px] text-[#2D4739] font-medium">{item.title}</span>
                  </div>
                  <Plus className="w-4 h-4 text-[#2D4739] group-open:rotate-45 transition-transform" strokeWidth={2.5} />
                </summary>
                <div className="px-5 pb-5 pt-0 text-[13.5px] text-[#555555] leading-[1.65] pl-[44px] font-sans font-normal">
                  {item.content}
                </div>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* 5. DARK BOTTOM CTA BAR */}
      <section className="bg-[#4A5443] text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute left-0 bottom-0 opacity-[0.05] pointer-events-none md:transform md:-translate-x-1/4 md:translate-y-1/4 translate-y-1/2 -translate-x-1/4">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[200px] h-[200px] md:w-[320px] md:h-[320px] text-white">
            <path d="M30 180 C 80 150 120 100 160 30" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M75 140 C 95 145 110 125 90 105 C 70 85 55 115 75 140 Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M115 85 C 135 90 150 70 130 50 C 110 30 95 60 115 85 Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M100 110 C 80 95 75 70 100 65 C 125 60 120 95 100 110 Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M140 50 C 120 35 115 10 140 5 C 165 0 160 35 140 50 Z" stroke="currentColor" strokeWidth="1.5" />
            <path d="M55 160 C 35 145 30 120 55 115 C 80 110 75 145 55 160 Z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10 pl-0 lg:pl-12 ">
          <div className="flex flex-col text-center lg:text-left">
            <h3 className="font-serif text-[24px] md:text-[32px] font-light text-white mb-3 leading-tight">
              Have questions about fees<br className="hidden md:block" /> or insurance coverage?
            </h3>
            <p className="text-[14px] md:text-[15px] text-white/80 font-sans font-normal">
              I&apos;m here to help you understand your options.
            </p>
          </div>

          <div className="shrink-0 flex flex-col items-center lg:items-end w-full lg:w-auto mt-2 lg:mt-0 font-sans">
            <Link
              href={process.env.NEXT_PUBLIC_MEETING_URL || '#'}
              target='_blank'
              className="w-full lg:w-auto inline-flex items-center justify-center px-6 py-3.5 text-[14px] rounded-md font-medium mb-3 transition-all bg-white text-[#2D4739] hover:bg-[#FDFBF7]"
            >
              Book a Free 15-Minute Consultation &rarr;
            </Link>
            <p className="text-[12px] md:text-[13px] text-white/70 font-normal">
              No pressure. Just a supportive conversation.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}