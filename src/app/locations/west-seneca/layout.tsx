import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kitchen & Bathroom Remodeling West Seneca NY | Sireika Renovations",
  description: "Expert kitchen and bathroom remodeling in West Seneca, NY. Sireika Renovations provides custom renovation services with premium materials and exceptional craftsmanship. Free consultation for West Seneca homeowners!",
  keywords: "kitchen remodeling West Seneca NY, bathroom remodeling West Seneca, home renovation West Seneca, kitchen contractor West Seneca, bathroom contractor West Seneca, remodeling services West Seneca NY",
  openGraph: {
    title: "Kitchen & Bathroom Remodeling West Seneca NY | Sireika Renovations",
    description: "Transform your West Seneca home with expert remodeling services from Sireika Renovations.",
    url: "https://sireikarenovations.com/locations/west-seneca",
    images: [
      {
        url: "https://ext.same-assets.com/896116978/367491559.jpeg",
        width: 1200,
        height: 630,
        alt: "Kitchen Remodeling in West Seneca, NY",
      },
    ],
  },
};

export default function WestSenecaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
