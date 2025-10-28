import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen & Bathroom Remodeling Blasdell NY | Sireika Renovations",
  description: "Expert kitchen and bathroom remodeling in Blasdell, NY. Sireika Renovations provides custom renovation services with premium materials and exceptional craftsmanship. Free consultation for Blasdell homeowners!",
  keywords: "kitchen remodeling Blasdell NY, bathroom remodeling Blasdell, home renovation Blasdell, kitchen contractor Blasdell, bathroom contractor Blasdell, remodeling services Blasdell NY",
  openGraph: {
    title: "Kitchen & Bathroom Remodeling Blasdell NY | Sireika Renovations",
    description: "Transform your Blasdell home with expert remodeling services from Sireika Renovations.",
    url: "https://sireikarenovations.com/locations/blasdell",
    images: [
      {
        url: "https://ext.same-assets.com/896116978/3767337616.jpeg",
        width: 1200,
        height: 630,
        alt: "Kitchen Remodeling in Blasdell, NY",
      },
    ],
  },
};

export default function BlasdellLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
