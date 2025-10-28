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
  "Custom Vanity Design & Installation",
  "Shower & Tub Renovation",
  "Tile & Stone Work",
  "Luxury Fixture Selection",
  "Modern Lighting Solutions",
  "Storage & Organization Systems",
  "Accessible Bathroom Design",
  "Water-Efficient Plumbing Updates"
];

export default function BathroomRemodelingPage() {
  return (
    <div className="min-h-screen bg-[#efece9]">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] mt-[72px] overflow-hidden">
        <img
          src="https://ext.same-assets.com/896116978/3767337616.jpeg"
          alt="Luxury Bathroom Remodeling by Sireika Renovations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bathroom Remodeling in Buffalo, NY
            </h1>
            <p className="text-xl md:text-2xl mb-8 font-light">
              Create Your Perfect Personal Sanctuary
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
            <Link href="/services/bathroom-remodeling" className="text-[#2f2820] font-semibold">Bathroom Remodeling</Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2f2820]">
              Professional Bathroom Remodeling Services
            </h2>
            <p className="text-lg text-[#624f37] mb-6 leading-relaxed">
              Sireika Renovations transforms ordinary bathrooms into luxurious retreats throughout the Buffalo, NY area. Our comprehensive bathroom remodeling services combine elegant design with practical functionality to create spaces you'll love for years to come.
            </p>
            <p className="text-lg text-[#624f37] mb-8 leading-relaxed">
              From spa-like master bathrooms to efficient powder rooms, we handle every aspect of your bathroom renovation with meticulous attention to detail. Our experienced team works with premium materials and the latest design trends to deliver stunning results that enhance your home's value and your daily routine.
            </p>

            {/* Features Grid */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-[#2f2820]">Our Bathroom Remodeling Services Include:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-[#926540] flex-shrink-0 mt-1" />
                    <span className="text-[#624f37]">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Bathroom Styles */}
            <div className="mb-12 bg-[#efece9] p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-[#2f2820]">Popular Bathroom Styles We Create</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-[#2f2820] mb-2">Modern Spa Bathrooms</h4>
                  <p className="text-[#624f37]">Clean lines, minimalist design, and luxurious features create a resort-like atmosphere.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#2f2820] mb-2">Traditional Elegance</h4>
                  <p className="text-[#624f37]">Classic designs with timeless appeal featuring rich materials and refined details.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#2f2820] mb-2">Contemporary Chic</h4>
                  <p className="text-[#624f37]">Bold fixtures, geometric patterns, and statement pieces for a striking look.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#2f2820] mb-2">Accessible Design</h4>
                  <p className="text-[#624f37]">Beautiful bathrooms designed for safety, comfort, and aging-in-place.</p>
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-[#2f2820]">Our Bathroom Remodeling Process</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#2f2820] mb-2">1. Design Consultation</h4>
                  <p className="text-[#624f37]">We discuss your vision, assess your space, and create a plan tailored to your needs and budget.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#2f2820] mb-2">2. Material & Fixture Selection</h4>
                  <p className="text-[#624f37]">Choose from our curated collection of vanities, tiles, fixtures, and finishes.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#2f2820] mb-2">3. Professional Demolition</h4>
                  <p className="text-[#624f37]">Careful removal of existing fixtures and finishes while protecting your home.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#2f2820] mb-2">4. Expert Installation</h4>
                  <p className="text-[#624f37]">Skilled craftsmen install all components with precision and attention to detail.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#2f2820] mb-2">5. Quality Assurance</h4>
                  <p className="text-[#624f37]">Final inspection and walkthrough to ensure your complete satisfaction.</p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold mb-4 text-[#2f2820]">Ready to Upgrade Your Bathroom?</h3>
              <p className="text-lg text-[#624f37] mb-6">
                Contact us today for a free consultation and let's bring your dream bathroom to life.
              </p>
              <Link href="/#contact">
                <Button size="lg" className="bg-[#2f2820] text-[#efece9] hover:bg-[#624f37]">
                  Schedule Your Free Consultation
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
              Bathroom Remodeling Services in Your Area
            </h2>
            <p className="text-center text-lg text-[#624f37] mb-12">
              Serving homeowners throughout Western New York with expert bathroom renovation services.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {serviceAreas.map((area) => (
                <Link key={area.slug} href={`/locations/${area.slug}`}>
                  <Card className="p-6 hover:shadow-xl transition-shadow cursor-pointer border-none bg-white">
                    <h3 className="text-xl font-bold text-[#2f2820] mb-2">
                      Bathroom Remodeling in {area.name}, NY
                    </h3>
                    <p className="text-[#624f37] mb-4">
                      Professional bathroom renovation for {area.name} residents.
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
              Need Kitchen Remodeling Too?
            </h2>
            <p className="text-lg text-[#624f37] mb-8">
              We also provide expert kitchen renovation services throughout the Buffalo, NY area.
            </p>
            <Link href="/services/kitchen-remodeling">
              <Button variant="outline" size="lg" className="border-[#2f2820] text-[#2f2820] hover:bg-[#2f2820] hover:text-white">
                View Kitchen Remodeling Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
