import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { HeroHeader } from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fallbackSiteUrl = "https://www.cuttosize-interiors.com";
const resolvedSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL && process.env.NEXT_PUBLIC_SITE_URL.startsWith("http")
    ? process.env.NEXT_PUBLIC_SITE_URL
    : fallbackSiteUrl;
const assetHost =
  process.env.NEXT_PUBLIC_CDN_URL && process.env.NEXT_PUBLIC_CDN_URL.startsWith("http")
    ? process.env.NEXT_PUBLIC_CDN_URL
    : resolvedSiteUrl;
const ogImageUrl = new URL("/services/kitchen.png", assetHost).toString();
const siteDescription =
  "Custom kitchens, wardrobes, and interior fit-outs crafted in Cairo and delivered with premium materials, precision manufacturing, and turnkey installation.";

export const metadata: Metadata = {
  metadataBase: new URL(resolvedSiteUrl),
  title: {
    default: "Custom Kitchens, Wardrobes & Interiors | CUT TO SIZE INTERIORS",
    template: "%s | CUT TO SIZE INTERIORS",
  },
  description: siteDescription,
  keywords: [
    "custom kitchens",
    "bespoke wardrobes",
    "interior fit-outs",
    "Cairo interiors",
    "Egypt kitchen design",
    "luxury wardrobes",
    "bathroom vanities",
    "interior design and build",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CUT TO SIZE INTERIORS | Custom Kitchens, Wardrobes & Interiors",
    description: siteDescription,
    url: resolvedSiteUrl,
    siteName: "CUT TO SIZE INTERIORS",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 675,
        alt: "Custom kitchen installation by CUT TO SIZE INTERIORS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CUT TO SIZE INTERIORS | Custom Kitchens & Interiors",
    description: siteDescription,
    images: [ogImageUrl],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "CUT TO SIZE INTERIORS",
    url: resolvedSiteUrl,
    image: ogImageUrl,
    telephone: "+201090029220",
    email: "info@cuttosize-interiors.com",
    description: siteDescription,
    address: {
      "@type": "PostalAddress",
      streetAddress: "95 Abo Bakr el Seddik",
      addressLocality: "Heliopolis",
      addressCountry: "EG",
    },
    areaServed: ["Cairo", "Egypt"],
    sameAs: [
      "https://www.instagram.com/cuttosize_interiors/",
      "https://www.facebook.com/people/Cut-to-Size-Interiors/61586089738625/",
      "https://www.linkedin.com/company/95053571/",
    ],
    makesOffer: [
      "Custom kitchens",
      "Bespoke wardrobes and dressing rooms",
      "Bathroom vanities",
      "Custom interior built-ins",
    ],
  };

  const analyticsId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {analyticsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${analyticsId}', { page_path: window.location.pathname });`}
            </Script>
          </>
        ) : null}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <HeroHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
