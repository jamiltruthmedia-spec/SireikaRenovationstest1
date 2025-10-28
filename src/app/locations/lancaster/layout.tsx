import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen & Bathroom Remodeling Lancaster NY | Sireika Renovations",
  description: "Expert kitchen and bathroom remodeling in Lancaster, NY. Sireika Renovations provides custom renovation services with premium materials and exceptional craftsmanship. Free consultation for Lancaster homeowners!",
  keywords: "kitchen remodeling Lancaster NY, bathroom remodeling Lancaster, home renovation Lancaster, kitchen contractor Lancaster, bathroom contractor Lancaster, remodeling services Lancaster NY",
  openGraph: {
    title: "Kitchen & Bathroom Remodeling Lancaster NY | Sireika Renovations",
    description: "Transform your Lancaster home with expert remodeling services from Sireika Renovations.",
    url: "https://sireikarenovations.com/locations/lancaster",
    images: [
      {
        url: "https://ext.same-assets.com/896116978/886960331.jpeg",
        width: 1200,
        height: 630,
        alt: "Kitchen Remodeling in Lancaster, NY",
      },
    ],
  },
};

export default function LancasterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
