import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen & Bathroom Remodeling East Amherst NY | Sireika Renovations",
  description: "Expert kitchen and bathroom remodeling in East Amherst, NY. Sireika Renovations provides custom renovation services with premium materials and exceptional craftsmanship. Free consultation for East Amherst homeowners!",
  keywords: "kitchen remodeling East Amherst NY, bathroom remodeling East Amherst, home renovation East Amherst, kitchen contractor East Amherst, bathroom contractor East Amherst, remodeling services East Amherst NY",
  openGraph: {
    title: "Kitchen & Bathroom Remodeling East Amherst NY | Sireika Renovations",
    description: "Transform your East Amherst home with expert remodeling services from Sireika Renovations.",
    url: "https://sireikarenovations.com/locations/east-amherst",
    images: [
      {
        url: "https://ext.same-assets.com/896116978/216745566.jpeg",
        width: 1200,
        height: 630,
        alt: "Kitchen Remodeling in East Amherst, NY",
      },
    ],
  },
};

export default function EastAmherstLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
