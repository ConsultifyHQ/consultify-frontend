import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Consultify Care - Online Healthcare & Virtual Medical Consultations",
  description:
    "Book online medical consultations, lab test appointments, home care services, and access trusted healthcare professionals with Consultify.",
  keywords: [
    "online medical consultation",
    "book doctor appointment",
    "virtual healthcare",
    "healthcare SaaS",
    "lab test booking",
    "home care services",
    "find doctors online",
    "telemedicine",
    "mental health support",
  ].join(", "), // Important for search engine ranking

  openGraph: {
    title: "Consultify Care - Online Healthcare & Virtual Medical Consultations",
    description:
      "Book online medical consultations, lab test appointments, home care services, and access trusted healthcare professionals with Consultify.",
    url: "https://consultify.com",
    siteName: "ConsultifyCare",
    images: [
      {
        url: "https://consultify.com/og-image.jpg", // Replace with your actual OG image
        width: 1200,
        height: 630,
        alt: "ConsultifyCare - Online Healthcare Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@consultify", // Replace with your actual Twitter handle
    title: "Consultify - Online Healthcare & Virtual Medical Consultations",
    description:
      "Book online medical consultations, lab test appointments, home care services, and access trusted healthcare professionals with Consultify.",
    images: ["https://consultify.com/og-image.jpg"],
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Consultify Care",
              url: "https://consultifyCare.com",
              logo: "https://consultify.com/logo.png",
              description:
                "Book online medical consultations, lab tests, home care services, and access trusted healthcare professionals with Consultify Care.",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+23470470077770", // Replace with actual number
                contactType: "customer service",
              },
              sameAs: [
                "https://twitter.com/consultify",
                "https://www.linkedin.com/company/consultify",
                "https://www.instagram.com/consultify",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
