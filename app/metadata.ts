import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://sandtechth.vercel.app"),
  title: "Sandtech Engineering Co.,Ltd,.",
  description: "Quality construction services with integrity and professionalism.",
  openGraph: {
    title: "Sandtech Engineering Company Limited",
    description: "Quality construction services with integrity and professionalism.",
    url: "https://sandtechth.vercel.app/",
    siteName: "Sandtech Engineering",
    images: [
      {
        url: "https://sandtechth.vercel.app/assets/sandtechtemplate.png", // absolute URL
        width: 1200,
        height: 630,
        alt: "Sandtech Engineering Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandtech Engineering Company Limited",
    description: "Quality construction services with integrity and professionalism.",
    images: [
      "https://sandtechth.vercel.app/assets/sandtechtemplate.png", // absolute URL
    ],
  },
};
