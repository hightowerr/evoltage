'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Link from 'next/link';
import { Icons } from './Icons';

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
    <section className="w-full py-20 bg-background-primary font-inter">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h3 className="uppercase text-[#4D4D4D] font-bold text-size-base tracking-widest mb-4">
            Contact Us
          </h3>
          <h1 className="text-[#151515] font-bold text-size-4xl md:text-size-5xl leading-tight mb-6">
            Get in touch with our team
          </h1>
          <p className="text-[#444E55] text-size-xl leading-relaxed">
            Have a question or need assistance? We&apos;re here to help. Reach out to us and we&apos;ll get back to you as soon as possible.
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
                    <label htmlFor="name" className="block text-[#151515] font-semibold text-size-1xl mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:border-[#1053D4] focus:ring-1 focus:ring-[#1053D4] outline-none transition-colors text-size-base"
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-[#151515] font-semibold text-size-1xl mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:border-[#1053D4] focus:ring-1 focus:ring-[#1053D4] outline-none transition-colors text-size-base"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label htmlFor="phone" className="block text-[#151515] font-semibold text-size-1xl mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:border-[#1053D4] focus:ring-1 focus:ring-[#1053D4] outline-none transition-colors text-size-1xl"
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="message" className="block text-[#151515] font-semibold text-size-1xl mb-2">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:border-[#1053D4] focus:ring-1 focus:ring-[#1053D4] outline-none transition-colors text-size-1xl resize-none"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-[hsl(var(--accent-hue),74%,45%)] transition-colors text-primary font-bold py-4 px-8 rounded-lg text-size-1xl"
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
                  <Icons.phone className="w-6 h-6 text-[#1053D4]" />
                  </div>
                  <div>
                    <h3 className="text-[#151515] font-semibold text-size-xl mb-2">Call us</h3>
                    <p className="text-[#444E55] text-size-base">07970 694 321</p>
                    <p className="text-[#444E55] text-size-base">Available 24/7 for emergency</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1053D4]/10">
                    <Icons.mail className="w-6 h-6 text-[#1053D4]" />
                  </div>
                  <div>
                    <h3 className="text-[#151515] font-semibold text-size-xl mb-2">Email us</h3>
                    <p className="text-[#444E55] text-size-base">info@evoltageuk.co.uk</p>
                    <p className="text-[#444E55] text-size-base">We&apos;ll respond within 48 hours</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1053D4]/10">
                    <Icons.mapPin className="w-6 h-6 text-[#1053D4]" />
                  </div>
                  <div>
                    <h3 className="text-[#151515] font-semibold text-size-xl mb-2">Local Community</h3>
                    <p className="text-[#444E55] text-size-base">Loughborough</p>
                    <p className="text-[#444E55] text-size-base">Leicestershire</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h3 className="text-[#151515] font-semibold text-size-xl mb-6">Follow us</h3>
              <div className="flex items-center gap-4">
                <Link 
                  href="https://www.facebook.com/Evoltageuk" 
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Facebook"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1053D4]/10 hover:bg-[#1053D4]/20 transition-colors"
                >
                  <Icons.facebook className="w-6 h-6" />
                </Link>
                <Link 
                  href="https://www.instagram.com/evoltageuk/"
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-[#1053D4]/10 hover:bg-[#1053D4]/20 transition-colors"
                >
                  <Icons.instagram className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
