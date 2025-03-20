'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from "../components/icons"
import { useRouter } from 'next/router';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[#0c0b03] py-3 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Contact Info */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 md:gap-6 mb-4 md:mb-0">
            <span className="text-secondary font-inter font-normal text-size-base">Loughborough, Leicestershire</span>
            <div className="hidden md:block border-l border-dashed border-secondary h-4"></div>
            <span className="text-secondary font-inter font-normal text-size-base">info@evoltageuk.co.uk</span>
            <div className="hidden md:block border-l border-dashed border-secondary h-4"></div>
            <span className="text-secondary font-inter font-normal text-size-base">07970 694 321</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-8">
            <Link 
              href="https://www.instagram.com/evoltageuk/" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Instagram" 
              className="text-secondary hover:text-[#E4405F] transition-colors"
            >
              <Icons.instagram className="w-6 h-6" />
            </Link>
            <Link 
              href="https://www.facebook.com/Evoltageuk" 
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on Facebook" 
              className="text-secondary hover:text-[#1877F2] transition-colors"
            >
              <Icons.facebook className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-background-primary py-4 px-6 md:px-12 lg:px-20">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
            aria-label="Go to homepage"
          >
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-white rounded-full"></div>
              <div className="absolute inset-[2px] bg-accent rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Image 
                  src="/images/electric.png" 
                  alt="Evoltage Logo" 
                  width={99} 
                  height={99}
                  priority
                />
              </div>
            </div>
            <span className="text-text font-inter font-normal text-size-4xl">e<Icons.zap className="inline w-10 h-10 text-accent"/>oltage</span>
            
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            <nav className="flex items-center gap-8 mr-8">
              <Link href="/" className="text-text font-inter font-normal text-size-1xl tracking-wide">
                Home
              </Link>
              <Link 
                href="#about" 
                onClick={(e) => scrollToSection(e, 'about')}
                className="text-text font-inter font-normal text-size-1xl tracking-wide transition-colors"
              >
                About Us
              </Link>
              <Link 
                href="#services"
                onClick={(e) => scrollToSection(e, 'services')}
                className="text-text hover:text-text font-inter font-normal text-size-1xl tracking-wide transition-colors"
              >
                Services
              </Link>
              <Link 
                href="#why-us"
                onClick={(e) => scrollToSection(e, 'why-us')}
                className="text-text hover:text-text font-inter font-normal text-size-1xl tracking-wide transition-colors"
              >
                Why Us
              </Link>
            </nav>

            {/* CTA Button */}
            <Link 
              href="/contact"
              className="bg-accent text-primary py-5 px-10 rounded-full font-inter font-bold text-size-base hover:opacity-90 transition-opacity"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-text"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background-primary py-4 px-6">
          <nav className="flex flex-col gap-4">
            <Link href="/" className="text-text font-inter font-bold text-size-base tracking-wide py-2">
              Home
            </Link>
            <Link 
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-text hover:text-text font-inter font-normal text-size-base tracking-wide py-2 transition-colors"
            >
              About Us
            </Link>
            <Link 
              href="#services"
              onClick={(e) => scrollToSection(e, 'services')}
              className="text-text hover:text-text font-inter font-normal text-size-base tracking-wide py-2 transition-colors"
            >
              Services
            </Link>
            <Link 
              href="#why-us"
              onClick={(e) => scrollToSection(e, 'why-us')}
              className="text-text hover:text-text font-inter font-normal text-size-base tracking-wide py-2 transition-colors"
            >
              Why Us
            </Link>
            <Link href="/contact" className="text-text hover:text-text font-inter font-normal text-size-base tracking-wide py-2 transition-colors">
              Contact Us
            </Link>
            <Link 
              href="/contact"
              className="bg-accent text-primary py-4 px-6 rounded-full font-inter font-bold text-size-base w-full mt-2 hover:opacity-90 transition-opacity"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 