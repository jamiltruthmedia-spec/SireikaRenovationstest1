"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#efece9]/95 backdrop-blur-sm border-b border-[#926540]/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-2xl md:text-3xl font-bold text-[#2f2820] cursor-pointer">
              Sireika
              <span className="text-sm md:text-base font-light block md:inline md:ml-2">RENOVATIONS</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/#about" className="text-[#2f2820] hover:text-[#926540] transition-colors text-sm uppercase tracking-wider">
              About
            </Link>
            <div className="relative group">
              <button className="text-[#2f2820] hover:text-[#926540] transition-colors text-sm uppercase tracking-wider">
                Services ▾
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <Link href="/services/kitchen-remodeling" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                  Kitchen Remodeling
                </Link>
                <Link href="/services/bathroom-remodeling" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                  Bathroom Remodeling
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-[#2f2820] hover:text-[#926540] transition-colors text-sm uppercase tracking-wider">
                Locations ▾
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 max-h-96 overflow-y-auto">
                <Link href="/locations/orchard-park" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                  Orchard Park
                </Link>
                <Link href="/locations/clarence" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                  Clarence
                </Link>
                <Link href="/locations/hamburg" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                  Hamburg
                </Link>
                <Link href="/locations/west-seneca" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                  West Seneca
                </Link>
                <Link href="/locations/lancaster" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                  Lancaster
                </Link>
                <Link href="/locations/amherst" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                  Amherst
                </Link>
                <Link href="/locations/east-amherst" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                  East Amherst
                </Link>
                <Link href="/locations/blasdell" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                  Blasdell
                </Link>
                <Link href="/locations/lackawanna" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                  Lackawanna
                </Link>
              </div>
            </div>
            <Link href="/#faq" className="text-[#2f2820] hover:text-[#926540] transition-colors text-sm uppercase tracking-wider">
              FAQ
            </Link>
            <Link href="/#contact" className="text-[#2f2820] hover:text-[#926540] transition-colors text-sm uppercase tracking-wider">
              Contact
            </Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/#contact">
              <Button className="bg-[#2f2820] text-[#efece9] hover:bg-[#624f37] text-sm">
                Free Consultation
              </Button>
            </Link>
            <a href="tel:+17165550123" className="flex items-center text-[#2f2820] hover:text-[#926540] transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">(716) 555-0123</span>
              {/* TODO: Replace with actual phone number */}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#2f2820]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#efece9] border-t border-[#926540]/10">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            <Link href="/#about" className="text-[#2f2820] hover:text-[#926540] transition-colors text-sm uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <div className="border-l-2 border-[#926540] pl-4 space-y-2">
              <p className="text-xs uppercase tracking-wider text-[#624f37] font-semibold mb-2">Services</p>
              <Link href="/services/kitchen-remodeling" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                Kitchen Remodeling
              </Link>
              <Link href="/services/bathroom-remodeling" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                Bathroom Remodeling
              </Link>
            </div>
            <div className="border-l-2 border-[#926540] pl-4 space-y-2">
              <p className="text-xs uppercase tracking-wider text-[#624f37] font-semibold mb-2">Locations</p>
              <Link href="/locations/orchard-park" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                Orchard Park
              </Link>
              <Link href="/locations/clarence" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                Clarence
              </Link>
              <Link href="/locations/hamburg" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                Hamburg
              </Link>
              <Link href="/locations/west-seneca" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                West Seneca
              </Link>
              <Link href="/locations/lancaster" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                Lancaster
              </Link>
              <Link href="/locations/amherst" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                Amherst
              </Link>
              <Link href="/locations/east-amherst" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                East Amherst
              </Link>
              <Link href="/locations/blasdell" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                Blasdell
              </Link>
              <Link href="/locations/lackawanna" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                Lackawanna
              </Link>
            </div>
            <Link href="/#faq" className="text-[#2f2820] hover:text-[#926540] transition-colors text-sm uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)}>
              FAQ
            </Link>
            <Link href="/#contact" className="text-[#2f2820] hover:text-[#926540] transition-colors text-sm uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link href="/#contact">
              <Button
                variant="default"
                className="bg-[#2f2820] text-[#efece9] hover:bg-[#624f37] w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free Consultation
              </Button>
            </Link>
            <a href="tel:+17165550123" className="flex items-center justify-center text-[#2f2820] hover:text-[#926540] transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm">(716) 555-0123</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
