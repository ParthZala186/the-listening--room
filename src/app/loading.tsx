import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-[#F9F8F6] flex items-center justify-center">

      <div className="flex flex-col items-center gap-6">

        <Image
          src={`/logo/brand-mark.png`}
          alt=""
          width={70}
          height={70}
          className="animate-pulse"
        />

        <p className="text-[#2D4739] tracking-wide text-sm">
          Loading...
        </p>

      </div>

    </div>
  );
}