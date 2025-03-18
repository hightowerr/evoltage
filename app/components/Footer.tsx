'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      {/* Main Footer Content */}
      <div className="bg-[#1053D4] text-white py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-4 space-y-6">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-white rounded-full"></div>
                  <div className="absolute inset-[2px] bg-[#CAEE5A] rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                      src="/images/zap-icon.svg" 
                      alt="Zap Icon" 
                      width={16} 
                      height={16}
                    />
                  </div>
                </div>
                <span className="text-white font-heading font-bold text-size-3xl">electema</span>
              </Link>
              
              {/* Company Description */}
              <p className="text-[#BBBDC3] font-body text-size-base leading-relaxed">
                Professional electrical services for residential and commercial properties. Available 24/7 for emergency services.
              </p>
              
              {/* Social Media */}
              <div className="flex items-center gap-6">
                <Link href="#" aria-label="Twitter">
                  <Image src="/images/twitter-icon.svg" alt="Twitter" width={24} height={24} className="hover:opacity-80 transition-opacity" />
                </Link>
                <Link href="#" aria-label="Facebook">
                  <Image src="/images/facebook-icon.svg" alt="Facebook" width={24} height={24} className="hover:opacity-80 transition-opacity" />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Image src="/images/instagram-icon.svg" alt="Instagram" width={24} height={24} className="hover:opacity-80 transition-opacity" />
                </Link>
              </div>
            </div>
            
            {/* Quick Links */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-white font-heading font-bold text-size-2xl">Links</h3>
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-[#BBBDC3] hover:text-white transition-colors font-body text-size-base">
                  Home
                </Link>
                <Link href="/about" className="text-[#BBBDC3] hover:text-white transition-colors font-body text-size-base">
                  About Us
                </Link>
                <Link href="/services" className="text-[#BBBDC3] hover:text-white transition-colors font-body text-size-base">
                  Services
                </Link>
                <Link href="/contact" className="text-[#BBBDC3] hover:text-white transition-colors font-body text-size-base">
                  Contact Us
                </Link>
              </nav>
            </div>
            
            {/* Services */}
            <div className="lg:col-span-3 space-y-6">
              <h3 className="text-white font-heading font-bold text-size-2xl">Services</h3>
              <nav className="flex flex-col gap-4">
                <Link href="/services/domestic" className="text-[#BBBDC3] hover:text-white transition-colors font-body text-size-base">
                  Domestic
                </Link>
                <Link href="/services/industrial" className="text-[#BBBDC3] hover:text-white transition-colors font-body text-size-base">
                  Industrial
                </Link>
                <Link href="/services/commercial" className="text-[#BBBDC3] hover:text-white transition-colors font-body text-size-base">
                  Commercial
                </Link>
                <Link href="/services/emergency" className="text-[#BBBDC3] hover:text-white transition-colors font-body text-size-base">
                  Emergency Service
                </Link>
              </nav>
            </div>
            
            {/* Contact Info */}
            <div className="lg:col-span-3 space-y-6">
              <h3 className="text-white font-heading font-bold text-size-2xl">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Image 
                    src="/images/call-icon.svg" 
                    alt="Phone" 
                    width={20} 
                    height={20}
                    className="mt-1"
                  />
                  <div>
                    <p className="text-white font-body font-semibold text-size-base">Call us</p>
                    <p className="text-[#BBBDC3] font-body text-size-base">+1 (333) 000-0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center mt-1">
                    <span className="text-lg">📍</span>
                  </div>
                  <div>
                    <p className="text-white font-body font-semibold text-size-base">Address</p>
                    <p className="text-[#BBBDC3] font-body text-size-base">123 Anywhere Street, NY</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center mt-1">
                    <span className="text-lg">📧</span>
                  </div>
                  <div>
                    <p className="text-white font-body font-semibold text-size-base">Email</p>
                    <p className="text-[#BBBDC3] font-body text-size-base">hi@electema.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-[#0A42A9] text-white py-4">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#BBBDC3] font-body text-size-sm text-center md:text-left">
            © 2024 Electema. All rights reserved.
          </p>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <Link href="/privacy" className="text-[#BBBDC3] hover:text-white transition-colors font-body text-size-sm">
              Privacy Policy
            </Link>
            <div className="hidden md:block w-px h-4 bg-[#BBBDC3]"></div>
            <Link href="/terms" className="text-[#BBBDC3] hover:text-white transition-colors font-body text-size-sm">
              Terms of Service
            </Link>
            <div className="hidden md:block w-px h-4 bg-[#BBBDC3]"></div>
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="text-[#CAEE5A] hover:text-white transition-colors font-body text-size-sm flex items-center gap-2"
            >
              Back to Top
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
