import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen & Bathroom Remodeling Lackawanna NY | Sireika Renovations",
  description: "Expert kitchen and bathroom remodeling in Lackawanna, NY. Sireika Renovations provides custom renovation services with premium materials and exceptional craftsmanship. Free consultation for Lackawanna homeowners!",
  keywords: "kitchen remodeling Lackawanna NY, bathroom remodeling Lackawanna, home renovation Lackawanna, kitchen contractor Lackawanna, bathroom contractor Lackawanna, remodeling services Lackawanna NY",
  openGraph: {
    title: "Kitchen & Bathroom Remodeling Lackawanna NY | Sireika Renovations",
    description: "Transform your Lackawanna home with expert remodeling services from Sireika Renovations.",
    url: "https://sireikarenovations.com/locations/lackawanna",
    images: [
      {
        url: "https://ext.same-assets.com/896116978/2656462211.jpeg",
        width: 1200,
        height: 630,
        alt: "Kitchen Remodeling in Lackawanna, NY",
      },
    ],
  },
};

export default function LackawannaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
