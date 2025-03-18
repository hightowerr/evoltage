import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

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
    <section id="about" className="w-full bg-[#FEFDFB] pt-8 pb-8 md:pt-8 md:pb-8">
      <div className="container mx-auto px-6 md:px-2 lg:px-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
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
              <h3 className="uppercase text-[#0A0264] font-body font-bold text-size-base tracking-widest">
                {CONTENT.topHeading}
              </h3>
              
              {/* Main heading */}
              <h2 className="text-[#0B0D0E] font-semibold text-size-4xl md:text-size-5xl leading-tight">
                {CONTENT.mainHeading}
              </h2>
              
              {/* Description */}
              <p className="text-text-secondary text-muted-foreground font-body font-normal text-size-xl leading-relaxed">
                {CONTENT.description}
              </p>
            </div>

            {/* Features list */}
            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0 w-6 h-6">
                  <div className="absolute inset-0 bg-primary rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CheckCircle 
                      size={16}
                      className="stroke-white" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-black font-body font-semibold text-size-2xl">Authorized Experts</h4>
                  <p className="text-text-dark text-muted-foreground font-body font-normal text-size-xl">Turpis lacus mi arcu mauris lorem non risus. Vel sodales.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0 w-6 h-6">
                  <div className="absolute inset-0 bg-primary rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                  <CheckCircle 
                      size={16}
                      className="stroke-white"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="text-black font-body font-semibold text-size-2xl">Member of NAPIT</h4>
                  <p className="text-text-dark text-muted-foreground font-body font-normal text-size-xl">Turpis lacus mi arcu mauris lorem non risus. Vel sodales.</p>
                </div>
              </div>
            </div>

            {/* Call to action section */}
            <div className="flex flex-wrap justify-between items-center gap-6 pt-6">
              {/* Call us */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center border border-[#C9A91D]">
                </div>
                <div>
                  <h4 className="text-black font-body font-semibold text-size-xl">Call us</h4>
                  <p className="text-text-dark font-body font-normal text-size-base">07970 694 321</p>
                </div>
              </div>

              {/* Contact button */}
              <Link 
                href="/contact" 
                className="bg-[#C9A91D] hover:bg-[#B09018] transition-colors text-[#19170B] font-body font-bold py-5 px-8 rounded-full text-size-base"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}