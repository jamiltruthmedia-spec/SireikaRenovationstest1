import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen & Bathroom Remodeling Hamburg NY | Sireika Renovations",
  description: "Expert kitchen and bathroom remodeling in Hamburg, NY. Sireika Renovations provides custom renovation services with premium materials and exceptional craftsmanship. Free consultation for Hamburg homeowners!",
  keywords: "kitchen remodeling Hamburg NY, bathroom remodeling Hamburg, home renovation Hamburg, kitchen contractor Hamburg, bathroom contractor Hamburg, remodeling services Hamburg NY",
  openGraph: {
    title: "Kitchen & Bathroom Remodeling Hamburg NY | Sireika Renovations",
    description: "Transform your Hamburg home with expert remodeling services from Sireika Renovations.",
    url: "https://sireikarenovations.com/locations/hamburg",
    images: [
      {
        url: "https://ext.same-assets.com/896116978/2656462211.jpeg",
        width: 1200,
        height: 630,
        alt: "Kitchen Remodeling in Hamburg, NY",
      },
    ],
  },
};

export default function HamburgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
