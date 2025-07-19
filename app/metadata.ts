import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sandtech Engineering Company Limited",
  description: "Quality construction services with integrity and professionalism.",
  openGraph: {
    title: "Sandtech Engineering Company Limited",
    description: "Quality construction services with integrity and professionalism.",
    url: "https://sandtechth.vercel.app/",
    siteName: "Sandtech Engineering",
    images: [
      {
        url: "/assets/sandtechtemplate.png",  // path relative to public folder
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
    images: ["/assets/sandtechtemplate.png"],  // path relative to public folder
  },
};
