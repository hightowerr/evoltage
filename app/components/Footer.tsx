'use client';

import Link from 'next/link';
import { Icons } from "./Icons";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer Content */}
      <div className="bg-[#0c0b03] text-white py-16 pt-8 pb-8 space-y-6">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-7 space-y-6">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <div className="relative w-10 h-10">
                  <div className="absolute inset-0 bg-white rounded-full"></div>
                  <div className="absolute inset-[2px] bg-[#CAEE5A] rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Image 
                      src="/images/electric.png" 
                      alt="Evoltage Logo" 
                      width={99} 
                      height={99}
                    />
                  </div>
                </div>
                <span className="text-secondary font-heading font-bold text-size-3xl">e<Icons.zap className="inline w-10 h-10 text-accent" />oltage</span>
              </Link>
              
              {/* Company Description */}
              <div className="max-w-md">
                <p className="text-background-light font-body text-size-base leading-relaxed">
                  Professional electrical services for residential and commercial
                  properties. Available 24/7 for emergency services.
                </p>
              </div>
              
              {/* Social Media */}
              <div className="flex items-center gap-6">
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
            
            {/* Contact Info */}
            <div className="lg:col-span-6 lg:col-start-13 space-y-6">
              <h3 className="text-white font-heading font-bold text-size-2xl">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Icons.phone className="w-5 h-5 mt-1 text-white" />
                  <div>
                    <p className="text-white font-body font-semibold text-size-base">Call us</p>
                    <p className="text-[#BBBDC3] font-body text-size-base">07970 694 321</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icons.mapPin className="w-5 h-5 mt-1 text-white" />
                  <div>
                    <p className="text-white font-body font-semibold text-size-base">Address</p>
                    <p className="text-[#BBBDC3] font-body text-size-base">Loughborough, Leicestershire</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Icons.mail className="w-5 h-5 mt-1 text-white" />
                  <div>
                    <p className="text-white font-body font-semibold text-size-base">Email</p>
                    <p className="text-[#BBBDC3] font-body text-size-base">info@evoltageuk.co.uk</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="bg-accent text-primary py-4">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row justify-end items-center gap-4">
          {/* <p className="text-[#BBBDC3] font-body text-size-sm text-center md:text-left">
            © 2024 Evoltage. All rights reserved.
          </p> */}
          <div className="flex items-center gap-6 flex-wrap justify-end">
            {/* <Link href="/privacy" className="text-[#BBBDC3] hover:text-white transition-colors font-body text-size-sm">
              Privacy Policy
            </Link> */}
            {/* <div className="hidden md:block w-px h-4 bg-[#BBBDC3]"></div> */}
            {/* <Link href="/terms" className="text-[#BBBDC3] hover:text-white transition-colors font-body text-size-sm">
              Terms of Service
            </Link> */}
            {/* <div className="hidden md:block w-px h-4 bg-[#BBBDC3]"></div> */}
            <button 
              onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
              className="text-primary hover:text-black transition-colors font-body text-size-sm flex items-center gap-2"
            >
              <div className="flex items-center gap-2 justify-end">
                Back to Top
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
