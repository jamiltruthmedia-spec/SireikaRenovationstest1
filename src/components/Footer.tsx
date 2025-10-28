import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2f2820] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Link href="/">
              <h3 className="text-2xl font-bold mb-4 cursor-pointer hover:text-[#926540] transition-colors">
                Sireika<br/>
                <span className="text-base font-light">RENOVATIONS</span>
              </h3>
            </Link>
            <p className="text-gray-300 mb-4">
              Premium Renovations in Buffalo, NY
            </p>
            <div className="flex space-x-4">
              {/* TODO: Add actual Instagram URL */}
              <a href="#" className="hover:text-[#926540] transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              {/* TODO: Add actual Facebook URL */}
              <a href="#" className="hover:text-[#926540] transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                (716) 555-0123 {/* TODO: Replace with actual phone number */}
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@sireikarenovations.com
              </p>
              <p className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1" />
                Serving Buffalo, NY<br/>and surrounding areas
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <Link href="/#about" className="block hover:text-[#926540] transition-colors">About</Link>
              <Link href="/#projects" className="block hover:text-[#926540] transition-colors">Projects</Link>
              <Link href="/#services" className="block hover:text-[#926540] transition-colors">Service Areas</Link>
              <Link href="/#faq" className="block hover:text-[#926540] transition-colors">FAQ</Link>
              <Link href="/#contact" className="block hover:text-[#926540] transition-colors">Contact</Link>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2 text-gray-300 text-sm">
              <Link href="/services/kitchen-remodeling" className="block hover:text-[#926540] transition-colors">
                Kitchen Remodeling
              </Link>
              <Link href="/services/bathroom-remodeling" className="block hover:text-[#926540] transition-colors">
                Bathroom Remodeling
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Locations</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-gray-300 text-sm">
              <Link href="/locations/orchard-park" className="block hover:text-[#926540] transition-colors">
                Orchard Park
              </Link>
              <Link href="/locations/clarence" className="block hover:text-[#926540] transition-colors">
                Clarence
              </Link>
              <Link href="/locations/hamburg" className="block hover:text-[#926540] transition-colors">
                Hamburg
              </Link>
              <Link href="/locations/west-seneca" className="block hover:text-[#926540] transition-colors">
                West Seneca
              </Link>
              <Link href="/locations/lancaster" className="block hover:text-[#926540] transition-colors">
                Lancaster
              </Link>
              <Link href="/locations/amherst" className="block hover:text-[#926540] transition-colors">
                Amherst
              </Link>
              <Link href="/locations/east-amherst" className="block hover:text-[#926540] transition-colors">
                East Amherst
              </Link>
              <Link href="/locations/blasdell" className="block hover:text-[#926540] transition-colors">
                Blasdell
              </Link>
              <Link href="/locations/lackawanna" className="block hover:text-[#926540] transition-colors">
                Lackawanna
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© Sireika Renovations {new Date().getFullYear()}. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {/* TODO: Create and link to actual Privacy Policy page */}
            <a href="#" className="hover:text-[#926540] transition-colors">Privacy Policy</a>
            {/* TODO: Create and link to actual Terms of Service page */}
            <a href="#" className="hover:text-[#926540] transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
