"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Menu, X, ChevronLeft, ChevronRight, Phone, Mail, MapPin } from "lucide-react";

const heroImages = [
  {
    url: "https://ext.same-assets.com/896116978/367491559.jpeg",
    alt: "Luxury Kitchen Design by Sireika Renovations"
  },
  {
    url: "https://ext.same-assets.com/896116978/216745566.jpeg",
    alt: "Modern Kitchen Renovation"
  },
  {
    url: "https://ext.same-assets.com/896116978/2656462211.jpeg",
    alt: "Contemporary Kitchen Design"
  }
];

const projects = [
  {
    title: "The Orchard Park Kitchen",
    image: "https://ext.same-assets.com/896116978/216745566.jpeg",
    description: "A stunning blend of modern design and functional living space"
  },
  {
    title: "The Clarence Estate",
    image: "https://ext.same-assets.com/896116978/3767337616.jpeg",
    description: "Sophisticated luxury meets everyday comfort"
  },
  {
    title: "The Hamburg Residence",
    image: "https://ext.same-assets.com/896116978/2656462211.jpeg",
    description: "Contemporary elegance with timeless appeal"
  }
];

const serviceAreas = [
  "Orchard Park, NY",
  "Clarence, NY",
  "Hamburg, NY",
  "West Seneca, NY",
  "Lancaster, NY",
  "Amherst, NY",
  "East Amherst, NY",
  "Blasdell, NY",
  "Lackawanna, NY"
];

const faqs = [
  {
    question: "What areas does Sireika Renovations serve in New York?",
    answer: "Sireika Renovations proudly serves Orchard Park, Clarence, Hamburg, West Seneca, Lancaster, Amherst, East Amherst, Blasdell, Lackawanna, and the greater Buffalo, NY area."
  },
  {
    question: "How long does a typical kitchen renovation take?",
    answer: "A typical kitchen renovation takes 6-12 weeks depending on the scope and complexity of the project. We provide detailed timelines during the consultation phase."
  },
  {
    question: "Do you offer free consultations?",
    answer: "Yes, we offer free initial consultations to discuss your renovation goals, design preferences, and budget. Contact us to schedule your consultation today."
  },
  {
    question: "What makes Sireika Renovations different from other contractors?",
    answer: "We combine exquisite materials with artisan craftsmanship to create one-of-a-kind spaces. Our personalized approach ensures every renovation is tailored to your unique lifestyle and preferences."
  },
  {
    question: "What is your project minimum?",
    answer: "Our custom renovation projects typically start at $75,000, ensuring the highest quality materials and craftsmanship for your home."
  }
];

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to actual email service or backend API
    console.log("Subscribe:", { firstName, lastName, email });
    alert(`Thank you for subscribing, ${firstName}! We'll be in touch soon.`);
    setEmail("");
    setFirstName("");
    setLastName("");
  };

  return (
    <div className="min-h-screen bg-[#efece9]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#efece9]/95 backdrop-blur-sm border-b border-[#926540]/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold text-[#2f2820]">
                Sireika<br className="md:hidden"/>
                <span className="text-sm md:text-base font-light block md:inline md:ml-2">RENOVATIONS</span>
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#about" className="text-[#2f2820] hover:text-[#926540] transition-colors text-sm uppercase tracking-wider">
                About
              </a>
              <div className="relative group">
                <button className="text-[#2f2820] hover:text-[#926540] transition-colors text-sm uppercase tracking-wider">
                  Services ▾
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <a href="/services/kitchen-remodeling" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                    Kitchen Remodeling
                  </a>
                  <a href="/services/bathroom-remodeling" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                    Bathroom Remodeling
                  </a>
                </div>
              </div>
              <div className="relative group">
                <button className="text-[#2f2820] hover:text-[#926540] transition-colors text-sm uppercase tracking-wider">
                  Locations ▾
                </button>
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 max-h-96 overflow-y-auto">
                  <a href="/locations/orchard-park" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                    Orchard Park
                  </a>
                  <a href="/locations/clarence" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                    Clarence
                  </a>
                  <a href="/locations/hamburg" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                    Hamburg
                  </a>
                  <a href="/locations/west-seneca" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                    West Seneca
                  </a>
                  <a href="/locations/lancaster" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                    Lancaster
                  </a>
                  <a href="/locations/amherst" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                    Amherst
                  </a>
                  <a href="/locations/east-amherst" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                    East Amherst
                  </a>
                  <a href="/locations/blasdell" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                    Blasdell
                  </a>
                  <a href="/locations/lackawanna" className="block px-4 py-3 text-[#2f2820] hover:bg-[#efece9] hover:text-[#926540] transition-colors">
                    Lackawanna
                  </a>
                </div>
              </div>
              <a href="#faq" className="text-[#2f2820] hover:text-[#926540] transition-colors text-sm uppercase tracking-wider">
                FAQ
              </a>
              <a href="#contact" className="text-[#2f2820] hover:text-[#926540] transition-colors text-sm uppercase tracking-wider">
                Contact
              </a>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="default"
                className="bg-[#2f2820] text-[#efece9] hover:bg-[#624f37] text-sm"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Free Consultation
              </Button>
              <a href="tel:+17165550123" className="flex items-center text-[#2f2820] hover:text-[#926540] transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">(716) 555-0123</span>
              </a>
              {/* TODO: Replace with actual phone number */}
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
              <a href="#about" className="text-[#2f2820] hover:text-[#926540] transition-colors text-sm uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
              <div className="border-l-2 border-[#926540] pl-4 space-y-2">
                <p className="text-xs uppercase tracking-wider text-[#624f37] font-semibold mb-2">Services</p>
                <a href="/services/kitchen-remodeling" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                  Kitchen Remodeling
                </a>
                <a href="/services/bathroom-remodeling" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                  Bathroom Remodeling
                </a>
              </div>
              <div className="border-l-2 border-[#926540] pl-4 space-y-2">
                <p className="text-xs uppercase tracking-wider text-[#624f37] font-semibold mb-2">Locations</p>
                <a href="/locations/orchard-park" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                  Orchard Park
                </a>
                <a href="/locations/clarence" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                  Clarence
                </a>
                <a href="/locations/hamburg" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                  Hamburg
                </a>
                <a href="/locations/west-seneca" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                  West Seneca
                </a>
                <a href="/locations/lancaster" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                  Lancaster
                </a>
                <a href="/locations/amherst" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                  Amherst
                </a>
                <a href="/locations/east-amherst" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                  East Amherst
                </a>
                <a href="/locations/blasdell" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                  Blasdell
                </a>
                <a href="/locations/lackawanna" className="block text-[#2f2820] hover:text-[#926540] transition-colors text-sm" onClick={() => setMobileMenuOpen(false)}>
                  Lackawanna
                </a>
              </div>
              <a href="#faq" className="text-[#2f2820] hover:text-[#926540] transition-colors text-sm uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)}>
                FAQ
              </a>
              <a href="#contact" className="text-[#2f2820] hover:text-[#926540] transition-colors text-sm uppercase tracking-wider" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </a>
              <Button
                variant="default"
                className="bg-[#2f2820] text-[#efece9] hover:bg-[#624f37] w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Free Consultation
              </Button>
              <a href="tel:+17165550123" className="flex items-center justify-center text-[#2f2820] hover:text-[#926540] transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">(716) 555-0123</span>
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Slider */}
      <section className="relative h-[70vh] md:h-[85vh] mt-[72px] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.url}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <p className="text-sm md:text-base uppercase tracking-widest mb-4 font-light">
              Premium Renovations in Buffalo, NY
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Space Will Be<br />One of a Kind
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto font-light">
              Different to everything else
            </p>
            <Button
              size="lg"
              className="bg-[#2f2820] text-[#efece9] hover:bg-[#624f37] text-base px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Work
            </Button>
          </div>
        </div>

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full backdrop-blur-sm transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide ? "bg-white w-8" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://ext.same-assets.com/896116978/542784804.png"
                  alt="Design Detail"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2f2820]">
                  Your Renovation Will Be One of a Kind - Different to Everything Else.
                </h2>
                <p className="text-[#624f37] mb-6 leading-relaxed">
                  Sireika Renovations brings exceptional craftsmanship and personalized design to Buffalo and the surrounding New York communities. We specialize in transforming <a href="/services/kitchen-remodeling" className="text-[#926540] hover:underline font-semibold">kitchens</a>, <a href="/services/bathroom-remodeling" className="text-[#926540] hover:underline font-semibold">bathrooms</a>, and home interiors into spaces that perfectly reflect your unique style and lifestyle.
                </p>
                <p className="text-[#624f37] mb-6 leading-relaxed">
                  With exquisite materials and artisan craftsmanship, our renovation projects become striking and innovative—designed specifically for how you live, work, and entertain.
                </p>
                <p className="text-[#2f2820] font-semibold mb-8">
                  Renovations start at $75,000.
                </p>
                <Button
                  variant="outline"
                  className="border-[#2f2820] text-[#2f2820] hover:bg-[#2f2820] hover:text-white"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Explore Our Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-16 md:py-24 bg-[#efece9]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2f2820]">
                  Renovation Excellence in Western New York
                </h2>
                <p className="text-[#624f37] mb-6 leading-relaxed">
                  Our renovation designs combine premium materials like natural stone, custom wood, and designer finishes in a sophisticated and contemporary style. Elegant and timeless, these designs merge beautiful materials with quality craftsmanship in exciting new ways.
                </p>
                <p className="text-[#624f37] italic border-l-4 border-[#926540] pl-6 mb-6">
                  "Throughout our work in Buffalo and beyond, renovations have evolved tremendously, but we still pursue the same goals: exceptional function and the best quality of life. With Sireika Renovations, we focus on seamless functionality, with an emphasis on spaces to cook, live, and entertain."
                </p>
                <Button
                  className="bg-[#2f2820] text-[#efece9] hover:bg-[#624f37]"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Schedule a Consultation
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <img
                  src="https://ext.same-assets.com/896116978/2893344033.png"
                  alt="Renovation Detail"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Projects */}
      <section id="projects" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#2f2820] text-center">
            Our Latest Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden group cursor-pointer border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-2xl font-bold mb-2 text-[#2f2820]">{project.title}</h3>
                  <p className="text-[#624f37]">{project.description}</p>
                  <button className="mt-4 text-[#926540] hover:text-[#624f37] text-sm uppercase tracking-wider font-semibold">
                    View Project →
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section id="services" className="py-16 md:py-24 bg-[#2f2820] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <MapPin className="w-12 h-12 mx-auto mb-6 text-[#926540]" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Proudly Serving Western New York
            </h2>
            <p className="text-lg mb-12 text-gray-300">
              Sireika Renovations brings premium kitchen and home renovation services to communities throughout the Buffalo area
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-left">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#926540] rounded-full" />
                <a href="/locations/orchard-park" className="text-gray-200 hover:text-[#926540] transition-colors cursor-pointer">Orchard Park, NY</a>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#926540] rounded-full" />
                <a href="/locations/clarence" className="text-gray-200 hover:text-[#926540] transition-colors cursor-pointer">Clarence, NY</a>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#926540] rounded-full" />
                <a href="/locations/hamburg" className="text-gray-200 hover:text-[#926540] transition-colors cursor-pointer">Hamburg, NY</a>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#926540] rounded-full" />
                <a href="/locations/west-seneca" className="text-gray-200 hover:text-[#926540] transition-colors cursor-pointer">West Seneca, NY</a>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#926540] rounded-full" />
                <a href="/locations/lancaster" className="text-gray-200 hover:text-[#926540] transition-colors cursor-pointer">Lancaster, NY</a>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#926540] rounded-full" />
                <a href="/locations/amherst" className="text-gray-200 hover:text-[#926540] transition-colors cursor-pointer">Amherst, NY</a>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#926540] rounded-full" />
                <a href="/locations/east-amherst" className="text-gray-200 hover:text-[#926540] transition-colors cursor-pointer">East Amherst, NY</a>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#926540] rounded-full" />
                <a href="/locations/blasdell" className="text-gray-200 hover:text-[#926540] transition-colors cursor-pointer">Blasdell, NY</a>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#926540] rounded-full" />
                <a href="/locations/lackawanna" className="text-gray-200 hover:text-[#926540] transition-colors cursor-pointer">Lackawanna, NY</a>
              </div>
            </div>
            <div className="mt-12">
              <Button
                size="lg"
                className="bg-[#926540] text-white hover:bg-[#624f37]"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#2f2820] text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group border border-[#926540]/20 rounded-lg overflow-hidden"
                >
                  <summary className="cursor-pointer p-6 bg-[#efece9] hover:bg-[#926540]/10 transition-colors list-none flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-[#2f2820] pr-4">
                      {faq.question}
                    </h3>
                    <span className="text-[#926540] text-2xl group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="p-6 bg-white">
                    <p className="text-[#624f37] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="py-16 md:py-24 bg-[#efece9]">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2f2820]">
              Be the First to Explore Our Latest Renovation Projects
            </h2>
            <p className="text-[#624f37] mb-8">
              Get exclusive updates on design trends, completed projects, and special events from Sireika Renovations
            </p>
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="bg-white border-[#926540]/20"
                  required
                />
                <Input
                  type="text"
                  placeholder="Last name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="bg-white border-[#926540]/20"
                  required
                />
              </div>
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border-[#926540]/20"
                required
              />
              <Button
                type="submit"
                className="bg-[#2f2820] text-[#efece9] hover:bg-[#624f37] w-full md:w-auto px-12"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Blog */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <p className="text-sm uppercase tracking-widest text-[#926540] mb-4">Featured from the blog</p>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#2f2820]">
                  Transform Your Kitchen Into a Work of Art
                </h2>
                <p className="text-[#624f37] mb-6 leading-relaxed">
                  Sireika Renovations has perfected the blend of luxury and functionality, creating kitchens that are as stunning as they are practical. From custom cabinetry to premium countertops, every detail is thoughtfully designed to enhance your daily living experience.
                </p>
                <p className="text-[#624f37] mb-6 leading-relaxed">
                  "This renovation is a true reflection of Sireika Renovations' dedication to innovative design and meticulous craftsmanship," says our design team. "The combination of elegance and practicality is seamless, creating a space that homeowners are proud to show off."
                </p>
                <Button
                  variant="outline"
                  className="border-[#2f2820] text-[#2f2820] hover:bg-[#2f2820] hover:text-white"
                >
                  Read More
                </Button>
              </div>
              <div>
                <img
                  src="https://ext.same-assets.com/896116978/1645584300.jpeg"
                  alt="Featured Kitchen Renovation"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2f2820] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">
                Sireika<br/>
                <span className="text-base font-light">RENOVATIONS</span>
              </h3>
              <p className="text-gray-300 mb-4">
                Premium Renovations in Buffalo, NY
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-[#926540] transition-colors" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/><path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
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
                  (716) 555-0123
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
                <a href="#about" className="block hover:text-[#926540] transition-colors">About</a>
                <a href="#projects" className="block hover:text-[#926540] transition-colors">Projects</a>
                <a href="#services" className="block hover:text-[#926540] transition-colors">Service Areas</a>
                <a href="#faq" className="block hover:text-[#926540] transition-colors">FAQ</a>
                <a href="#contact" className="block hover:text-[#926540] transition-colors">Contact</a>
              </div>
              <h4 className="font-semibold mb-4 mt-6">Services</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <a href="/services/kitchen-remodeling" className="block hover:text-[#926540] transition-colors">Kitchen Remodeling</a>
                <a href="/services/bathroom-remodeling" className="block hover:text-[#926540] transition-colors">Bathroom Remodeling</a>
              </div>
              <h4 className="font-semibold mb-4 mt-6">Locations</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <a href="/locations/orchard-park" className="block hover:text-[#926540] transition-colors">Orchard Park</a>
                <a href="/locations/clarence" className="block hover:text-[#926540] transition-colors">Clarence</a>
                <a href="/locations/hamburg" className="block hover:text-[#926540] transition-colors">Hamburg</a>
                <a href="/locations/west-seneca" className="block hover:text-[#926540] transition-colors">West Seneca</a>
                <a href="/locations/lancaster" className="block hover:text-[#926540] transition-colors">Lancaster</a>
                <a href="/locations/amherst" className="block hover:text-[#926540] transition-colors">Amherst</a>
                <a href="/locations/east-amherst" className="block hover:text-[#926540] transition-colors">East Amherst</a>
                <a href="/locations/blasdell" className="block hover:text-[#926540] transition-colors">Blasdell</a>
                <a href="/locations/lackawanna" className="block hover:text-[#926540] transition-colors">Lackawanna</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© Sireika Renovations {new Date().getFullYear()}. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#926540] transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-[#926540] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
