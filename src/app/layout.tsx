import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sireika Renovations | Premium Kitchen & Home Renovations in Buffalo, NY",
  description: "Expert kitchen and home renovations serving Orchard Park, Clarence, Hamburg, West Seneca, Lancaster, Amherst, East Amherst, Blasdell, and Lackawanna, NY. Custom designs, quality craftsmanship, and personalized service.",
  keywords: "kitchen renovation Buffalo NY, home renovation Orchard Park, custom kitchens Clarence NY, bathroom remodeling Hamburg, luxury renovations West Seneca, kitchen remodel Lancaster NY, home improvement Amherst, renovation contractor East Amherst, kitchen design Blasdell, home renovations Lackawanna",
  authors: [{ name: "Sireika Renovations" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sireikarenovations.com",
    siteName: "Sireika Renovations",
    title: "Sireika Renovations | Premium Kitchen & Home Renovations in Buffalo, NY",
    description: "Expert kitchen and home renovations serving Orchard Park, Clarence, Hamburg, West Seneca, Lancaster, Amherst, East Amherst, Blasdell, and Lackawanna, NY.",
    images: [
      {
        url: "https://ext.same-assets.com/896116978/367491559.jpeg",
        width: 1200,
        height: 630,
        alt: "Luxury Kitchen Renovation by Sireika Renovations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sireika Renovations | Premium Kitchen & Home Renovations in Buffalo, NY",
    description: "Expert kitchen and home renovations serving the Buffalo, NY area with custom designs and quality craftsmanship.",
    images: ["https://ext.same-assets.com/896116978/367491559.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://sireikarenovations.com/#organization",
        "name": "Sireika Renovations",
        "description": "Premium kitchen and home renovation services in Buffalo, NY area",
        "url": "https://sireikarenovations.com",
        "telephone": "+1-716-555-0123", // TODO: Replace with actual phone number
        "priceRange": "$$$$",
        "image": "https://ext.same-assets.com/896116978/367491559.jpeg",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Buffalo",
          "addressRegion": "NY",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 42.8864,
          "longitude": -78.8784
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Orchard Park",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "NY"
            }
          },
          {
            "@type": "City",
            "name": "Clarence",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "NY"
            }
          },
          {
            "@type": "City",
            "name": "Hamburg",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "NY"
            }
          },
          {
            "@type": "City",
            "name": "West Seneca",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "NY"
            }
          },
          {
            "@type": "City",
            "name": "Lancaster",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "NY"
            }
          },
          {
            "@type": "City",
            "name": "Amherst",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "NY"
            }
          },
          {
            "@type": "City",
            "name": "East Amherst",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "NY"
            }
          },
          {
            "@type": "City",
            "name": "Blasdell",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "NY"
            }
          },
          {
            "@type": "City",
            "name": "Lackawanna",
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "NY"
            }
          }
        ],
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "15:00"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://sireikarenovations.com/#service",
        "serviceType": "Kitchen Renovation",
        "provider": {
          "@id": "https://sireikarenovations.com/#organization"
        },
        "areaServed": {
          "@type": "State",
          "name": "New York"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Renovation Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Kitchen Design & Renovation"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Bathroom Remodeling"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Home Interior Design"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Custom Cabinetry"
              }
            }
          ]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What areas does Sireika Renovations serve in New York?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sireika Renovations proudly serves Orchard Park, Clarence, Hamburg, West Seneca, Lancaster, Amherst, East Amherst, Blasdell, Lackawanna, and the greater Buffalo, NY area."
            }
          },
          {
            "@type": "Question",
            "name": "How long does a typical kitchen renovation take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A typical kitchen renovation takes 6-12 weeks depending on the scope and complexity of the project. We provide detailed timelines during the consultation phase."
            }
          },
          {
            "@type": "Question",
            "name": "Do you offer free consultations?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer free initial consultations to discuss your renovation goals, design preferences, and budget. Contact us to schedule your consultation today."
            }
          },
          {
            "@type": "Question",
            "name": "What makes Sireika Renovations different from other contractors?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We combine exquisite materials with artisan craftsmanship to create one-of-a-kind spaces. Our personalized approach ensures every renovation is tailored to your unique lifestyle and preferences."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <link rel="canonical" href="https://sireikarenovations.com" />
      </head>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
