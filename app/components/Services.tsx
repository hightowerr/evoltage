import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  return (
    <section id="services" className="w-full py-20 bg-[#FEFDFB] pt-8 pb-8 md:pt-8 md:pb-8">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col gap-16">
          {/* Top Row: Text and Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left column: Text */}
            <div className="lg:col-span-6 space-y-8">
              <h3 className="uppercase text-[#0A0264] font-body font-bold text-size-base tracking-widest">
                Services
              </h3>
              <div className="space-y-5">
                <h2 className="text-[#151515] font-heading font-bold text-size-4xl md:text-size-5xl leading-tight">
                  Safe, and Efficient Electrical Work
                </h2>
                <p className="text-[#444E55] font-body font-normal text-size-xl leading-relaxed">
                  All aspects of electrical work from domestic, commercial and industrial.
                </p>
              </div>
            </div>
            
            {/* Right column: Image */}
            <div className="lg:col-span-6">
              <div className="bg-[#1053D4] rounded-2xl overflow-hidden">
                <Image 
                  src="/images/switchboard.png" 
                  alt="Electrical switchboard" 
                  width={464}
                  height={276}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Bottom Row: Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Card 1 */}
            <div className="bg-[#FCF8E9] rounded-2xl p-8 md:p-10">
              <div className="space-y-3">
                <h3 className="text-[#19170B] font-body font-semibold text-size-2xl">
                  Domestic
                </h3>
                <p className="text-[#19170B] font-body font-normal text-size-base leading-relaxed">
                  From changing a light fitting to updating your fuse board. We have the expertise to keep your property looking the best it can be.
                </p>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-[#FCF8E9] rounded-2xl p-8 md:p-10">
              <div className="space-y-3">
                <h3 className="text-[#19170B] font-body font-semibold text-size-2xl">
                  Industrial
                </h3>
                <p className="text-[#19170B] font-body font-normal text-size-base leading-relaxed">
                  From large factories to small workshops. We at Evoltageuk offer a high quality design and installation solution for you
                </p>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-[#FCF8E9] rounded-2xl p-8 md:p-10">
              <div className="space-y-3">
                <h3 className="text-[#19170B] font-body font-semibold text-size-2xl">
                  Commercial
                </h3>
                <p className="text-[#19170B] font-body font-normal text-size-base leading-relaxed">
                  Is your office in need of updating? Here at Evoltageuk we offer maintenance contracts and solutions to give you peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 