import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen & Bathroom Remodeling Amherst NY | Sireika Renovations",
  description: "Expert kitchen and bathroom remodeling in Amherst, NY. Sireika Renovations provides custom renovation services with premium materials and exceptional craftsmanship. Free consultation for Amherst homeowners!",
  keywords: "kitchen remodeling Amherst NY, bathroom remodeling Amherst, home renovation Amherst, kitchen contractor Amherst, bathroom contractor Amherst, remodeling services Amherst NY, Williamsville remodeling",
  openGraph: {
    title: "Kitchen & Bathroom Remodeling Amherst NY | Sireika Renovations",
    description: "Transform your Amherst home with expert remodeling services from Sireika Renovations.",
    url: "https://sireikarenovations.com/locations/amherst",
    images: [
      {
        url: "https://ext.same-assets.com/896116978/1645584300.jpeg",
        width: 1200,
        height: 630,
        alt: "Kitchen Remodeling in Amherst, NY",
      },
    ],
  },
};

export default function AmherstLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

