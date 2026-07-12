"use client"
import { Mail, Phone, MapPin, Send, Lock, Plus, Calendar } from 'lucide-react';
import LeafDivider from '@/components/Logos/LeafdividerLogo';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { useState } from 'react';
import Image from 'next/image';

// Custom branch line graphic for the background watermarks seen in mockup 1000369616.jpg
const SidebarBranchGraphic = () => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute bottom-0 right-0 w-24 h-24 text-[#2D4739]/10 pointer-events-none">
        <path d="M10 90 C 40 70 60 40 80 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M35 65 C 45 68 52 58 42 48 C 32 38 25 52 35 65 Z" stroke="currentColor" strokeWidth="1" />
        <path d="M55 35 C 65 38 72 28 62 18 C 52 8 45 22 55 35 Z" stroke="currentColor" strokeWidth="1" />
    </svg>
);


export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        website: ""
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        setSuccess("");
        setError("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message);
            }

            setSuccess(
                "Thank you! Your message has been sent successfully. We'll get back to you within 1–2 business days."
            );

            setForm({
                name: "",
                email: "",
                phone: "",
                message: "",
                website: ""
            });
        } catch (err: unknown) {
            console.error("Contact Form Error:", err);

            setError(
                err instanceof Error
                    ? err.message
                    : "Something went wrong. Please try again later."
            );
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-transparent min-h-screen flex flex-col font-sans antialiased">

            {/* 1. HERO HEADER SECTION */}
            <PageHero
                eyebrow="CONTACT"
                heading={<>Let&apos;s Connect <br /> <span className="italic font-light">We&apos;re Here for You</span></>}
                description={
                    <p>
                        Whether you have questions, want to learn more about therapy, or are ready to book a session we&apos;d love to hear from you.
                    </p>
                }
                imageSrc="/images/AboutRoomImage.jpg"
                imageAlt="Minimalist desk setup with botanical branches and warm picture frame"
            />

            {/* 2. CORE WORKSPACE: FORM & CONTEXT PLACEMENTS */}
            <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E8E6DF]">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* LEFT COLUMN: MESSAGE SUBMISSION FORM */}
                    <div>
                        <div className="text-center mb-8 flex flex-col items-center">

                            <Image
                                src={`/logo/brand-mark.png`}
                                alt=""
                                width={75}
                                height={75}
                                className="mb-4"
                            />

                            <h2 className="font-serif text-[18px] text-[#2D4739] font-medium tracking-wide">
                                Send Us a Message
                            </h2>

                            <LeafDivider />

                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label className="block text-[13px] font-semibold text-[#2D4739] mb-1.5 font-sans">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    autoComplete="name"
                                    disabled={loading}
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full bg-[#FCFCFA] border border-[#E8E6DF] rounded-md px-4 py-3 text-[14px] text-[#2D4739] placeholder-[#A0A0A0] focus:outline-none focus:border-[#2D4739] focus:bg-white transition-all font-sans"
                                />
                            </div>

                            <div>
                                <label className="block text-[13px] font-semibold text-[#2D4739] mb-1.5 font-sans">Email Address</label>

                                <input
                                    type="email"
                                    name="email"
                                    autoComplete="email"
                                    disabled={loading}
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Enter your email address"
                                    className="w-full bg-[#FCFCFA] border border-[#E8E6DF] rounded-md px-4 py-3 text-[14px] text-[#2D4739] placeholder-[#A0A0A0] focus:outline-none focus:border-[#2D4739] focus:bg-white transition-all font-sans"
                                />
                            </div>

                            <div>
                                <label className="block text-[13px] font-semibold text-[#2D4739] mb-1.5 font-sans">Phone Number (Optional)</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    autoComplete="tel"
                                    disabled={loading}
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    className="w-full bg-[#FCFCFA] border border-[#E8E6DF] rounded-md px-4 py-3 text-[14px] text-[#2D4739] placeholder-[#A0A0A0] focus:outline-none focus:border-[#2D4739] focus:bg-white transition-all font-sans"
                                />

                            </div>

                            <div>
                                <label className="block text-[13px] font-semibold text-[#2D4739] mb-1.5 font-sans">How can we help you?</label>
                                <textarea
                                    rows={6}
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    disabled={loading}
                                    required
                                    placeholder="Your message..."
                                    className="w-full bg-[#FCFCFA] border border-[#E8E6DF] rounded-md px-4 py-3 text-[14px] text-[#2D4739] placeholder-[#A0A0A0] focus:outline-none focus:border-[#2D4739] focus:bg-white transition-all font-sans resize-none"
                                />
                                <input
                                    type="text"
                                    name="website"
                                    className="hidden"
                                    autoComplete="off"
                                />
                            </div>

                            {success && (
                                <div className="rounded-xl border border-[#CFE8D4] bg-[#F4FBF5] p-5">
                                    <div className="flex gap-3 items-start">
                                        <div className="w-8 h-8 rounded-full bg-[#2D4739] flex items-center justify-center text-white">
                                            ✓
                                        </div>

                                        <div>
                                            <h4 className="font-semibold text-[#2D4739]">
                                                Message Sent Successfully
                                            </h4>

                                            <p className="text-sm text-[#5B635F] mt-1">
                                                We&apos;ll get back to you within 1–2 business days.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="rounded-lg border border-[#F2D4D4] bg-[#FFF8F8] p-5">
                                    <p className="text-[14px] text-red-700">
                                        {error}
                                    </p>
                                </div>
                            )}
                            <button
                                type="submit"
                                disabled={loading}
                                aria-busy={loading}
                                className="
                                
    w-full
    bg-[#2D4739]
    hover:bg-[#203328]
    disabled:opacity-70
    disabled:cursor-not-allowed
    text-white
    py-3.5
    px-6
    rounded-md
    text-[14px]
    font-medium
    tracking-wide
    transition-colors
    flex
    items-center
    justify-center
    gap-2
    font-sans
    shadow-xs
  "
                            >
                                {loading ? (
                                    <>
                                        <svg
                                            className="animate-spin h-5 w-5"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <circle
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="3"
                                                opacity="0.25"
                                            />
                                            <path
                                                fill="currentColor"
                                                d="M22 12a10 10 0 0 1-10 10V19a7 7 0 0 0 7-7h3Z"
                                            />
                                        </svg>

                                        <span>Sending...</span>
                                    </>
                                ) : (
                                    <>
                                        <span>Send Message</span>
                                        <Send className="w-4 h-4" strokeWidth={1.8} />
                                    </>
                                )}
                            </button>

                            <div className="flex items-center justify-center gap-2 text-[12px] text-[#2D4739]/70 pt-1 font-sans">
                                <Lock className="w-3.5 h-3.5" strokeWidth={2} />
                                <span>Your information is safe and confidential.</span>
                            </div>
                        </form>
                    </div>

                    {/* RIGHT COLUMN: ADDITIONAL INTERFACE METHODS */}
                    <div className="flex flex-col justify-between h-full">

                        {/* DESKTOP CONTAINER: LIST VIEWS */}
                        <div className="hidden md:block">
                            <div className="text-center mb-8 flex flex-col items-center">
                                <Image
                                    src={`/logo/brand-mark.png`}
                                    alt=""
                                    width={75}
                                    height={75}
                                    className="mb-4"
                                />
                                <h2 className="font-serif text-[18px] text-[#2D4739] font-medium tracking-wide">Other Ways to Connect</h2>
                                <LeafDivider />
                            </div>
                            <div className="space-y-4">
                                <div className="bg-[#FCFCFA] border border-[#E8E6DF] rounded-xl p-5 flex items-start gap-4 shadow-3xs">
                                    <div className="w-10 h-10 rounded-lg bg-[#EFECE6] border border-[#E8E6DF]/60 flex items-center justify-center text-[#2D4739] shrink-0">
                                        <Mail className="w-5 h-5" strokeWidth={1.5} />
                                    </div>
                                    <div className="font-sans">
                                        <h4 className="text-[14px] font-bold text-[#2D4739]">Email</h4>
                                        <a
                                            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ID}`}
                                            className="text-[14px] text-[#2D4739] font-semibold hover:underline"
                                        >
                                            {process.env.NEXT_PUBLIC_EMAIL_ID}
                                        </a>
                                        <p className="text-[12px] text-[#2D4739]/70 mt-0.5">We&apos;ll respond within 1–2 business days.</p>
                                    </div>
                                </div>

                                <div className="bg-[#FCFCFA] border border-[#E8E6DF] rounded-xl p-5 flex items-start gap-4 shadow-3xs">
                                    <div className="w-10 h-10 rounded-lg bg-[#EFECE6] border border-[#E8E6DF]/60 flex items-center justify-center text-[#2D4739] shrink-0">
                                        <Phone className="w-5 h-5" strokeWidth={1.5} />
                                    </div>
                                    <div className="font-sans">
                                        <h4 className="text-[14px] font-bold text-[#2D4739]">Phone</h4>
                                        <a
                                            href="tel:+15482559555"
                                            className="text-[14px] font-semibold hover:underline"
                                        >
                                            548-255-9555
                                        </a>
                                        <p className="text-[12px] text-[#2D4739]/70 mt-0.5">Mon – Fri, 9:00 AM – 6:00 PM EST</p>
                                    </div>
                                </div>

                                <div className="bg-[#FCFCFA] border border-[#E8E6DF] rounded-xl p-5 flex items-start gap-4 shadow-3xs">
                                    <div className="w-10 h-10 rounded-lg bg-[#EFECE6] border border-[#E8E6DF]/60 flex items-center justify-center text-[#2D4739] shrink-0">
                                        <MapPin className="w-5 h-5" strokeWidth={1.5} />
                                    </div>
                                    <div className="font-sans">
                                        <h4 className="text-[14px] font-bold text-[#2D4739]">Virtual Sessions</h4>
                                        <p className="text-[13.5px] text-[#2D4739] font-semibold mt-0.5">Across Ontario, Canada</p>
                                        <p className="text-[12px] text-[#2D4739]/70 mt-0.5">Secure, private, and convenient online sessions.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* MOBILE VIEW ACCORDION: AS DEPICTED IN MOCKUP */}
                        <div className="block md:hidden mb-6">
                            <details className="group bg-[#FCFCFA] border border-[#E8E6DF] rounded-xl overflow-hidden cursor-pointer shadow-3xs">
                                <summary className="flex items-center justify-between p-5 list-none select-none font-serif text-[16px] text-[#2D4739] font-medium">
                                    <span>Other Ways to Connect</span>
                                    <Plus className="w-4 h-4 text-[#2D4739] group-open:rotate-45 transition-transform" strokeWidth={2.5} />
                                </summary>
                                <div className="p-5 pt-1 border-t border-[#E8E6DF]/40 bg-white space-y-4 font-sans">
                                    <div>
                                        <h4 className="text-[12px] uppercase tracking-wider font-bold text-[#2D4739]/70">Email</h4>
                                        <a
                                            href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ID}`}
                                            className="text-[14px] font-semibold hover:underline"
                                        >
                                            {process.env.NEXT_PUBLIC_EMAIL_ID}
                                        </a>
                                    </div>
                                    <div className="w-full h-px bg-[#E8E6DF]/40" />
                                    <div>
                                        <h4 className="text-[12px] uppercase tracking-wider font-bold text-[#2D4739]/70">Phone</h4>
                                        <a
                                            href="tel:+15482559555"
                                            className="text-[14px] font-semibold hover:underline"
                                        >
                                            548-255-9555
                                        </a>
                                    </div>
                                    <div className="w-full h-px bg-[#E8E6DF]/40" />
                                    <div>
                                        <h4 className="text-[12px] uppercase tracking-wider font-bold text-[#2D4739]/70">Virtual Sessions</h4>
                                        <p className="text-[14px] text-[#2D4739] font-semibold">Across Ontario, Canada</p>
                                    </div>
                                </div>
                            </details>
                        </div>

                        {/* DIRECT CTA BOX: PREFER TO BOOK DIRECTLY */}
                        <div className="bg-[#EFECE6] border border-[#E8E6DF] rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-3xs mt-4 relative overflow-hidden">
                            <SidebarBranchGraphic />
                            <div className="flex items-start gap-4 text-center sm:text-left z-10">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#2D4739] shrink-0 border border-[#E8E6DF]/40 mx-auto sm:mx-0 shadow-3xs">
                                    <Calendar className="w-5 h-5" strokeWidth={1.5} />
                                </div>
                                <div className="font-sans">
                                    <h4 className="font-serif text-[18px] font-medium text-[#2D4739] mb-1">Ready to Take the First Step?</h4>
                                    <p className="text-[13px] text-[#2D4739]/90 leading-relaxed max-w-[280px] font-normal">
                                        You can schedule your free 15-minute consultation at a time that works best for you.
                                    </p>
                                </div>
                            </div>
                            <div className="shrink-0 z-10 w-full lg:w-auto">
                                <Link
                                    href={process.env.NEXT_PUBLIC_MEETING_URL || '#'}
                                    target="_blank"
                                    className="inline-flex items-center justify-center w-full lg:w-auto px-7 py-3.5 bg-[#2D4739] text-white hover:bg-[#203328] transition-colors duration-300 text-[13px] rounded-md tracking-wide font-medium font-sans shadow-xs"
                                >
                                    Book a Free Consultation &rarr;
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* 3. INTERMEDIATE LOWER HORIZONTAL INSET BANNER */}
            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#EFECE6] border-t border-[#E8E6DF]">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4 text-center lg:text-left flex-col sm:flex-row">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#2D4739] shrink-0 border border-[#E8E6DF] shadow-3xs">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mt-0.5">
                                <path d="M12 22C12 22 3 14 3 8C3 4.5 5.5 2 9 2C11 2 12 3 12 3C12 3 13 2 15 2C18.5 2 21 4.5 21 8C21 14 12 22 12 22Z" fill="currentColor" fillOpacity="0.1" />
                            </svg>
                        </div>
                        <div>
                            <h4 className="font-serif text-[18px] font-normal text-[#2D4739] mb-1">
                                You don&apos;t have to face life&apos;s challenges alone.
                            </h4>
                            <p className="text-[13.5px] text-[#2D4739]/90 font-sans font-normal">We&apos;re here to listen, support, and walk alongside you every step of the way.</p>
                        </div>
                    </div>
                    <div className="shrink-0 z-10 w-full lg:w-auto">
                        <Link
                            href={process.env.NEXT_PUBLIC_MEETING_URL || '#'}
                            target="_blank"
                            className="inline-flex items-center justify-center w-full lg:w-auto px-7 py-3.5 bg-[#2D4739] hover:bg-[#203328] text-white transition-colors duration-300 text-[13px] rounded-md tracking-wide font-medium font-sans shadow-xs"
                        >
                            Book a Free Consultation &rarr;
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}