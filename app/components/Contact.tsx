'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section className="w-full py-20 bg-[#FEFDFB]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h3 className="uppercase text-[#0A0264] font-body font-bold text-size-base tracking-widest mb-4">
            Contact Us
          </h3>
          <h1 className="text-[#151515] font-heading font-bold text-size-4xl md:text-size-5xl leading-tight mb-6">
            Get in touch with our expert team
          </h1>
          <p className="text-[#444E55] font-body text-size-xl leading-relaxed">
            Have a question or need assistance? We're here to help. Reach out to us and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-[#151515] font-body font-semibold text-size-base mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:border-[#1053D4] focus:ring-1 focus:ring-[#1053D4] outline-none transition-colors font-body text-size-base"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-[#151515] font-body font-semibold text-size-base mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:border-[#1053D4] focus:ring-1 focus:ring-[#1053D4] outline-none transition-colors font-body text-size-base"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="block text-[#151515] font-body font-semibold text-size-base mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:border-[#1053D4] focus:ring-1 focus:ring-[#1053D4] outline-none transition-colors font-body text-size-base"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-[#151515] font-body font-semibold text-size-base mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:border-[#1053D4] focus:ring-1 focus:ring-[#1053D4] outline-none transition-colors font-body text-size-base resize-none"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1053D4] hover:bg-[#0A42A9] transition-colors text-white font-body font-bold py-4 px-8 rounded-lg text-size-base"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1053D4]/10">
                    <Image 
                      src="/images/call-icon.svg" 
                      alt="Phone" 
                      width={24} 
                      height={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-[#151515] font-body font-semibold text-size-xl mb-2">Call us</h3>
                    <p className="text-[#444E55] font-body text-size-base">+1 (333) 000-0000</p>
                    <p className="text-[#444E55] font-body text-size-base">Available 24/7 for emergency</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1053D4]/10">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-[#151515] font-body font-semibold text-size-xl mb-2">Email us</h3>
                    <p className="text-[#444E55] font-body text-size-base">hi@electema.com</p>
                    <p className="text-[#444E55] font-body text-size-base">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1053D4]/10">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="text-[#151515] font-body font-semibold text-size-xl mb-2">Visit us</h3>
                    <p className="text-[#444E55] font-body text-size-base">123 Anywhere Street</p>
                    <p className="text-[#444E55] font-body text-size-base">New York, NY</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-[#151515] font-body font-semibold text-size-xl mb-6">Follow us</h3>
              <div className="flex items-center gap-4">
                <Link href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1053D4]/10 hover:bg-[#1053D4]/20 transition-colors">
                  <Image src="/images/twitter-icon.svg" alt="Twitter" width={20} height={20} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1053D4]/10 hover:bg-[#1053D4]/20 transition-colors">
                  <Image src="/images/facebook-icon.svg" alt="Facebook" width={20} height={20} />
                </Link>
                <Link href="#" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1053D4]/10 hover:bg-[#1053D4]/20 transition-colors">
                  <Image src="/images/instagram-icon.svg" alt="Instagram" width={20} height={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
