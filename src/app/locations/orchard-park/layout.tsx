import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen & Bathroom Remodeling Orchard Park NY | Sireika Renovations",
  description: "Expert kitchen and bathroom remodeling in Orchard Park, NY. Sireika Renovations provides custom renovation services with premium materials and exceptional craftsmanship. Free consultation for Orchard Park homeowners!",
  keywords: "kitchen remodeling Orchard Park NY, bathroom remodeling Orchard Park, home renovation Orchard Park, kitchen contractor Orchard Park, bathroom contractor Orchard Park, remodeling services Orchard Park NY",
  openGraph: {
    title: "Kitchen & Bathroom Remodeling Orchard Park NY | Sireika Renovations",
    description: "Transform your Orchard Park home with expert remodeling services from Sireika Renovations.",
    url: "https://sireikarenovations.com/locations/orchard-park",
    images: [
      {
        url: "https://ext.same-assets.com/896116978/216745566.jpeg",
        width: 1200,
        height: 630,
        alt: "Kitchen Remodeling in Orchard Park, NY",
      },
    ],
  },
};

export default function OrchardParkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
