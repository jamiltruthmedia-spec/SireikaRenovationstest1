import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bathroom Remodeling Buffalo NY | Expert Bathroom Renovation Services | Sireika Renovations",
  description: "Create your dream bathroom with expert remodeling services in Buffalo, NY. Custom vanities, luxury fixtures, and professional design. Free consultation!",
  keywords: "bathroom remodeling Buffalo NY, bathroom renovation, luxury bathroom design, bathroom contractor Buffalo, bathroom vanities, bathroom renovation contractor, spa bathroom design",
  openGraph: {
    title: "Bathroom Remodeling Buffalo NY | Sireika Renovations",
    description: "Transform your bathroom with expert remodeling services from Sireika Renovations.",
    url: "https://sireikarenovations.com/services/bathroom-remodeling",
    images: [
      {
        url: "https://ext.same-assets.com/896116978/3767337616.jpeg",
        width: 1200,
        height: 630,
        alt: "Luxury Bathroom Remodeling by Sireika Renovations",
      },
    ],
  },
};

export default function BathroomRemodelingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
