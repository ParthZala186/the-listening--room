import Image from "next/image";

export default function DesjardinsLogo() {
  return (
    <div className="flex items-center gap-1.5 md:gap-2">
      <Image
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAA2UlEQVR4AWJwL/AhGjO0+wHYI2MbikEYCnZskA2yQEpq5mAJNmEfdkj/B6BEygT8V7wCWY4FqSmuQRYHZwc8KMQDt3THgugCGVTQSeXZNSuekZ0ggZsSjZsz5ychRQeITPcIwY/0gYezERzTQuYLTNXEpY3nYXLGmULmy/L1RL5eVuhKhSwzj7+KL3uqIFmZKE6c1fYbgRuFHlQtjSVSxXrmCrwlLCCYAgPur8wKmy1bkrYt3MIt3ML/6Fu00b3wpnv1NGAVMAamWROD/o0o+jcT6d8QpntTHwC2Y8jmJ8Pp/gAAAABJRU5ErkJggg==" // Make sure this matches your exact filename in /public
        alt="Desjardins"
        width={31}
        height={31}
        className="h-5 md:h-6 w-auto object-contain"
      />
      <span className="font-sans text-[19px] md:text-[21px] font-bold text-[#00A758] tracking-tight mb-0.5">
        Desjardins
      </span>
    </div>
  );
}
