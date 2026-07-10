import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F9F8F6] flex items-center justify-center px-6">

      <div className="max-w-xl mx-auto text-center">

        <Image
          src={`${process.env.NEXT_PUBLIC_SITE_URL}/logo/brand-mark.png`}
          alt="The Listening Room"
          width={95}
          height={95}
          className="mx-auto mb-8"
        />

        <p className="uppercase tracking-[0.25em] text-[#7D857B] text-sm mb-3">
          404 Error
        </p>

        <h1 className="font-serif text-5xl text-[#2D4739] leading-tight mb-6">
          Page Not Found
        </h1>

        <p className="text-[#5A6355] leading-8 text-[16px] mb-10">
          The page you&apos;re looking for doesn&apos;t exist
          or may have been moved.

          <br />

          Let&apos;s get you back somewhere familiar.
        </p>

        <Link
          href="/"
          className="
            inline-flex
            items-center
            justify-center
            px-8
            py-4
            rounded-md
            bg-[#2D4739]
            hover:bg-[#203328]
            text-white
            text-[14px]
            font-medium
            transition-all
            duration-300
          "
        >
          Return Home →
        </Link>

      </div>

    </main>
  );
}