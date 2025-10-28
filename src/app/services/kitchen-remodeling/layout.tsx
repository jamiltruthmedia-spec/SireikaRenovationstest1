import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen Remodeling Buffalo NY | Expert Kitchen Renovation Services | Sireika Renovations",
  description: "Transform your kitchen with expert kitchen remodeling services in Buffalo, NY. Custom cabinets, premium countertops, and professional design. Free consultation!",
  keywords: "kitchen remodeling Buffalo NY, kitchen renovation, custom kitchen design, kitchen contractor Buffalo, kitchen cabinets, kitchen countertops, kitchen renovation contractor",
  openGraph: {
    title: "Kitchen Remodeling Buffalo NY | Sireika Renovations",
    description: "Transform your kitchen with expert remodeling services from Sireika Renovations.",
    url: "https://sireikarenovations.com/services/kitchen-remodeling",
    images: [
      {
        url: "https://ext.same-assets.com/896116978/367491559.jpeg",
        width: 1200,
        height: 630,
        alt: "Luxury Kitchen Remodeling by Sireika Renovations",
      },
    ],
  },
};

export default function KitchenRemodelingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
