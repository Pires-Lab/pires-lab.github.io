import type { Metadata } from "next";
import Script from "next/script";
import { Manrope, Lora } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "./components/ConditionalLayout";

/* ---------- local fonts ---------- */
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* ---------- site-wide <head> metadata ---------- */
export const metadata: Metadata = {
  metadataBase: new URL("https://pires-lab.github.io"),
  title: "Pires Lab",
  description:
    "Seeking answers. Developing solutions. | Soil Health • Cover Crops • Applied Research",

  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico" },
    ],
  },

  openGraph: {
    type: "website",
    url: "https://pires-lab.github.io/",
    siteName: "Pires Lab",
    title: "Pires Lab",
    description:
      "Seeking answers. Developing solutions. | Soil Health • Cover Crops • Applied Research",
    images: [
      {
        url: "/lab-logo.png",
        width: 512,
        height: 512,
        alt: "Pires Lab logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    images: ["/lab-logo.png"],
  },

  robots: {
    "max-image-preview": "large",
  },

  verification: {
    google: "ypOgEpElFzU7fdEsaDRwEZNOyfmk0KhY06Gl5FsUhbg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          id="website-ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://pires-lab.github.io/",
              name: "Pires Lab",
              alternateName: "Pires Lab",
              logo: "https://pires-lab.github.io/favicon.png",
            }),
          }}
        />
      </head>

      <body
        className={`${manrope.variable} ${lora.variable} antialiased min-h-screen flex flex-col`}
      >
        <ConditionalLayout>{children}</ConditionalLayout>
      </body>
    </html>
  );
}