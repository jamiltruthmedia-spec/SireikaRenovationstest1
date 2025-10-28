"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const serviceAreas = [
  { name: "Orchard Park", slug: "orchard-park" },
  { name: "Clarence", slug: "clarence" },
  { name: "Hamburg", slug: "hamburg" },
  { name: "West Seneca", slug: "west-seneca" },
  { name: "Lancaster", slug: "lancaster" },
  { name: "Amherst", slug: "amherst" },
  { name: "East Amherst", slug: "east-amherst" },
  { name: "Blasdell", slug: "blasdell" },
  { name: "Lackawanna", slug: "lackawanna" }
];

const features = [
  "Custom Cabinet Design & Installation",
  "Premium Countertop Selection (Granite, Quartz, Marble)",
  "Modern Appliance Integration",
  "Kitchen Island Design & Construction",
  "Backsplash Installation",
  "Lighting Design & Installation",
  "Flooring Replacement",
  "Plumbing & Electrical Updates"
];

export default function KitchenRemodelingPage() {
  return (
    <div className="min-h-screen bg-[#efece9]">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] mt-[72px] overflow-hidden">
        <img
          src="https://ext.same-assets.com/896116978/367491559.jpeg"
          alt="Luxury Kitchen Remodeling by Sireika Renovations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Kitchen Remodeling in Buffalo, NY
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Transform Your Kitchen Into a Culinary Masterpiece
            </p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="bg-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-2 text-sm text-[#624f37]">
            <Link href="/" className="hover:text-[#926540]">Home</Link>
            <span>/</span>
            <Link href="/services/kitchen-remodeling" className="text-[#2f2820] font-semibold">Kitchen Remodeling</Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2f2820]">
              Expert Kitchen Remodeling Services
            </h2>
            <p className="text-lg text-[#624f37] mb-6 leading-relaxed">
              At Sireika Renovations, we specialize in creating stunning, functional kitchens that become the heart of your home. Serving the Buffalo, NY area, our expert team brings years of experience in custom kitchen design and remodeling to every project.
            </p>
            <p className="text-lg text-[#624f37] mb-8 leading-relaxed">
              Whether you're looking for a complete kitchen renovation or targeted updates, we combine premium materials with exceptional craftsmanship to deliver results that exceed expectations. From modern minimalist designs to classic traditional kitchens, we tailor every project to your unique style and needs.
            </p>

            {/* Features Grid */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-[#2f2820]">Our Kitchen Remodeling Services Include:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#926540] flex-shrink-0 mt-1" />
                    <span className="text-[#624f37]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-12 bg-[#efece9] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#2f2820]">Our Kitchen Remodeling Process</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#2f2820] mb-2">1. Initial Consultation</h4>
                  <p className="text-[#624f37]">We meet with you to understand your vision, needs, and budget for your kitchen remodel.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#2f2820] mb-2">2. Design & Planning</h4>
                  <p className="text-[#624f37]">Our designers create detailed plans and 3D renderings to bring your dream kitchen to life.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#2f2820] mb-2">3. Material Selection</h4>
                  <p className="text-[#624f37]">Choose from our curated selection of premium cabinets, countertops, fixtures, and finishes.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#2f2820] mb-2">4. Expert Installation</h4>
                  <p className="text-[#624f37]">Our skilled craftsmen execute the renovation with precision and attention to detail.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#2f2820] mb-2">5. Final Walkthrough</h4>
                  <p className="text-[#624f37]">We ensure every detail meets our high standards and your complete satisfaction.</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4 text-[#2f2820]">Ready to Transform Your Kitchen?</h3>
              <p className="text-lg text-[#624f37] mb-6">
                Schedule a free consultation to discuss your kitchen remodeling project.
              </p>
              <Link href="/#contact">
                <Button size="lg" className="bg-[#2f2820] text-[#efece9] hover:bg-[#624f37]">
                  Get Your Free Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-[#efece9]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2f2820] text-center">
              Kitchen Remodeling Services in Your Area
            </h2>
            <p className="text-center text-lg text-[#624f37] mb-12">
              We proudly serve homeowners throughout Western New York with professional kitchen remodeling services.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {serviceAreas.map((area) => (
                <Link key={area.slug} href={`/locations/${area.slug}`}>
                  <Card className="p-6 hover:shadow-xl transition-shadow cursor-pointer border-none bg-white">
                    <h3 className="text-xl font-bold text-[#2f2820] mb-2">
                      Kitchen Remodeling in {area.name}, NY
                    </h3>
                    <p className="text-[#624f37] mb-4">
                      Expert kitchen renovation services for {area.name} homeowners.
                    </p>
                    <span className="text-[#926540] font-semibold hover:text-[#624f37]">
                      Learn More →
                    </span>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related Service */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-[#2f2820]">
              Looking for Bathroom Remodeling?
            </h2>
            <p className="text-lg text-[#624f37] mb-8">
              We also specialize in beautiful bathroom renovations throughout the Buffalo area.
            </p>
            <Link href="/services/bathroom-remodeling">
              <Button variant="outline" size="lg" className="border-[#2f2820] text-[#2f2820] hover:bg-[#2f2820] hover:text-white">
                View Bathroom Remodeling Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
