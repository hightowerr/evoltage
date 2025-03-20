import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Phone } from 'lucide-react';

const CONTENT = {
  topHeading: "About Us",
  mainHeading: "No job is too small",
  description: "No job is too small, from changing a socket in your house to performing full Electrical Rewires. We have the knowledge and experience to deal with all your electrical needs. We cover the whole Midlands area and offer a 24hr call out service. We also offer free no-obligation quotes.",
  button: {
    text: "Get Started",
    url: "#"
  }
} as const;

export default function AboutUs() {
  return (
    <section id="about" className="w-full bg-background-primary pt-8 pb-8 md:pt-8 md:pb-8">
      <div className="container mx-auto px-8 md:px-12 lg:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left column: Image */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#1053D4] rounded-2xl overflow-hidden relative aspect-[526/943]">
              {/* Main gallery image */}
              <Image 
                src="/images/gallery_image.png" 
                alt="Electrician at work" 
                fill
                className="object-cover"
                priority
              />
              
              {/* Decorative circles */}
              {/* <div className="absolute top-6 left-6">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 bg-[#F2F4F8] rounded-full"></div>
                  <div className="absolute inset-0 border border-[#3870DB] rounded-full scale-[1.2]"></div>
                  <div className="absolute inset-0 border border-[#3870DB] rounded-full scale-[1.4]"></div>
                  <div className="absolute inset-0 border border-[#3870DB] rounded-full scale-[1.6]"></div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Right column: Text content */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              {/* Section title */}
              <h3 className="uppercase text-[#4D4D4D] font-body font-bold text-size-base tracking-widest">
                {CONTENT.topHeading}
              </h3>
              
              {/* Main heading */}
              <h2 className="md:text-size-3xl text-3xl leading-tight font-semibold text-primary lg:text-3xl xl:text-5xl">
                {CONTENT.mainHeading}
              </h2>
              
              {/* Description */}
              <p className="text-one text-lg text-muted-foreground font-body font-normal text-size-2xl leading-relaxed">
                {CONTENT.description}
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0 w-10 h-10">
                  <div className="absolute inset-0 bg-accent rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CheckCircle 
                      size={24}
                      className="stroke-black" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-black font-body font-semibold text-size-3xl">Authorized Experts</h4>
                  <p className="text-one text-muted-foreground font-body font-normal text-size-2xl leading-relaxed">Turpis lacus mi arcu mauris lorem non risus. Vel sodales.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0 w-10 h-10">
                  <div className="absolute inset-0 bg-accent rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CheckCircle 
                      size={24}
                      className="stroke-black"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-black font-body font-semibold text-size-3xl">Member of NAPIT</h4>
                  <p className="text-one text-lg text-muted-foreground font-body font-normal text-size-2xl leading-relaxed">Turpis lacus mi arcu mauris lorem non risus. Vel sodales.</p>
                </div>
              </div>
            </div>

            {/* Call to action section */}
            <div className="flex flex-wrap justify-between items-center gap-6 pt-6">
              {/* Call us */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center">
                  <Phone 
                    size={24}
                    className="text-black"
                  />
                </div>
                <div>
                  <h4 className="text-black font-body font-semibold text-size-3xl">Call us</h4>
                  <p className="text-one font-body font-normal text-size-2xl">07970 694 321</p>
                </div>
              </div>

              {/* Contact button */}
              {/* <Link 
                href="/contact" 
                className="bg-accent text-primary py-5 px-10 rounded-full font-inter font-bold text-size-base hover:opacity-90 transition-opacity"
              >
                Get in touch
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}