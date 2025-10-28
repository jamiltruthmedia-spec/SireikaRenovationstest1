"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MapPin, CheckCircle } from "lucide-react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function BlasdellPage() {
  return (
    <div className="min-h-screen bg-[#efece9]">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[50vh] mt-[72px] overflow-hidden">
        <img
          src="https://ext.same-assets.com/896116978/3767337616.jpeg"
          alt="Kitchen and Bathroom Remodeling in Blasdell, NY"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <div className="flex items-center justify-center mb-4">
              <MapPin className="w-8 h-8 mr-2" />
              <span className="text-xl font-light">Serving</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Blasdell, NY
            </h1>
            <p className="text-xl md:text-2xl font-light">
              Kitchen & Bathroom Remodeling Experts
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
            <Link href="/locations/blasdell" className="text-[#2f2820] font-semibold">Blasdell, NY</Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2f2820]">
              Premier Remodeling Services in Blasdell, NY
            </h2>
            <p className="text-lg text-[#624f37] mb-6 leading-relaxed">
              Sireika Renovations is proud to serve the Blasdell community with exceptional <Link href="/services/kitchen-remodeling" className="text-[#926540] hover:underline font-semibold">kitchen remodeling</Link> and <Link href="/services/bathroom-remodeling" className="text-[#926540] hover:underline font-semibold">bathroom remodeling</Link> services. As your local renovation experts, we understand the unique character and style preferences of Blasdell homeowners.
            </p>
            <p className="text-lg text-[#624f37] mb-8 leading-relaxed">
              Whether you're renovating a cozy village home or updating a property near Woodlawn Beach State Park, our team brings years of experience and a commitment to quality that Blasdell residents trust. We combine premium materials, expert craftsmanship, and personalized design to create spaces that enhance your home's value and your quality of life.
            </p>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-8 border-none shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-[#2f2820] mb-4">Kitchen Remodeling</h3>
                <p className="text-[#624f37] mb-6">
                  Transform your Blasdell kitchen with our comprehensive remodeling services. From custom cabinetry to modern appliances, we create kitchens that are both beautiful and functional.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-[#624f37]">
                    <CheckCircle className="w-5 h-5 text-[#926540] mr-2 flex-shrink-0" />
                    Custom Cabinet Design
                  </li>
                  <li className="flex items-center text-[#624f37]">
                    <CheckCircle className="w-5 h-5 text-[#926540] mr-2 flex-shrink-0" />
                    Premium Countertops
                  </li>
                  <li className="flex items-center text-[#624f37]">
                    <CheckCircle className="w-5 h-5 text-[#926540] mr-2 flex-shrink-0" />
                    Kitchen Islands
                  </li>
                  <li className="flex items-center text-[#624f37]">
                    <CheckCircle className="w-5 h-5 text-[#926540] mr-2 flex-shrink-0" />
                    Complete Renovations
                  </li>
                </ul>
                <Link href="/services/kitchen-remodeling">
                  <Button className="w-full bg-[#2f2820] text-[#efece9] hover:bg-[#624f37]">
                    Learn More About Kitchen Remodeling
                  </Button>
                </Link>
              </Card>

              <Card className="p-8 border-none shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-[#2f2820] mb-4">Bathroom Remodeling</h3>
                <p className="text-[#624f37] mb-6">
                  Create your dream bathroom with Sireika Renovations. We specialize in luxury bathroom renovations that combine style, comfort, and functionality for Blasdell homes.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-[#624f37]">
                    <CheckCircle className="w-5 h-5 text-[#926540] mr-2 flex-shrink-0" />
                    Shower & Tub Renovation
                  </li>
                  <li className="flex items-center text-[#624f37]">
                    <CheckCircle className="w-5 h-5 text-[#926540] mr-2 flex-shrink-0" />
                    Custom Vanities
                  </li>
                  <li className="flex items-center text-[#624f37]">
                    <CheckCircle className="w-5 h-5 text-[#926540] mr-2 flex-shrink-0" />
                    Tile & Stone Work
                  </li>
                  <li className="flex items-center text-[#624f37]">
                    <CheckCircle className="w-5 h-5 text-[#926540] mr-2 flex-shrink-0" />
                    Full Bath Remodels
                  </li>
                </ul>
                <Link href="/services/bathroom-remodeling">
                  <Button className="w-full bg-[#2f2820] text-[#efece9] hover:bg-[#624f37]">
                    Learn More About Bathroom Remodeling
                  </Button>
                </Link>
              </Card>
            </div>

            {/* Why Choose Us */}
            <div className="bg-[#efece9] p-8 rounded-lg mb-12">
              <h3 className="text-2xl font-bold mb-6 text-[#2f2820]">Why Blasdell Homeowners Choose Sireika Renovations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-[#2f2820] mb-2">Local Expertise</h4>
                  <p className="text-[#624f37]">We understand Blasdell homes and what works best for this community.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#2f2820] mb-2">Quality Craftsmanship</h4>
                  <p className="text-[#624f37]">Every project is completed with meticulous attention to detail and superior materials.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#2f2820] mb-2">Custom Designs</h4>
                  <p className="text-[#624f37]">No cookie-cutter solutions - each renovation is tailored to your unique vision.</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#2f2820] mb-2">Trusted Service</h4>
                  <p className="text-[#624f37]">Transparent pricing, clear communication, and on-time project completion.</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-[#2f2820]">
                Ready to Start Your Blasdell Renovation Project?
              </h3>
              <p className="text-lg text-[#624f37] mb-6">
                Contact Sireika Renovations today for a free consultation and let's bring your vision to life.
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

      <Footer />
    </div>
  );
}
