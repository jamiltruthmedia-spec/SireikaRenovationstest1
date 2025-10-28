import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen & Bathroom Remodeling Clarence NY | Sireika Renovations",
  description: "Expert kitchen and bathroom remodeling in Clarence, NY. Sireika Renovations provides custom renovation services with premium materials and exceptional craftsmanship. Free consultation for Clarence homeowners!",
  keywords: "kitchen remodeling Clarence NY, bathroom remodeling Clarence, home renovation Clarence, kitchen contractor Clarence, bathroom contractor Clarence, remodeling services Clarence NY",
  openGraph: {
    title: "Kitchen & Bathroom Remodeling Clarence NY | Sireika Renovations",
    description: "Transform your Clarence home with expert remodeling services from Sireika Renovations.",
    url: "https://sireikarenovations.com/locations/clarence",
    images: [
      {
        url: "https://ext.same-assets.com/896116978/3767337616.jpeg",
        width: 1200,
        height: 630,
        alt: "Kitchen Remodeling in Clarence, NY",
      },
    ],
  },
};

export default function ClarenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
