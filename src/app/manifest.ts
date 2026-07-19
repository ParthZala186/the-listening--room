import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "The Listening Room",
    short_name: "Listening Room",
    description:
      "Compassionate online counselling and psychotherapy across Ontario.",
    start_url: "/",
    display: "standalone",
    background_color: "#F6F3ED",
    theme_color: "#2D4739",
    icons: [
      {
        src: "/logo/favicon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/logo/favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}