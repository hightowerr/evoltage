import Image from 'next/image';

export default function WhyChooseUs() {
  // Service data
  const services = [
    { title: "Full re-wires", description: "Expert full rewiring services for homes and businesses with quality assurance." },
    { title: "Installation", description: "Professional installation of all electrical systems, fixtures, and components." },
    { title: "Fire alarms", description: "Advanced fire alarm systems to keep your property and people safe." },
    { title: "Inspection", description: "Comprehensive electrical inspections to ensure safety and code compliance." },
    { title: "Lighting", description: "Custom lighting solutions for both interior and exterior spaces." },
    { title: "Unit Upgrades", description: "Modern upgrades to electrical units for improved efficiency and safety." },
  ];

  return (
    <section className="w-full pt-8 pb-8 md:pt-8 md:pb-8 bg-[#B7B4A1] bg-opacity-50" id="why-us">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Title and Stats Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Title Area */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <h3 className="uppercase text-[#151515] font-body font-bold text-size-base tracking-widest">
                What We Do
              </h3>
              
              <h2 className="text-[#151515] font-heading font-semibold text-size-4xl md:text-size-5xl leading-tight">
                Trusted Service on range from
              </h2>
            </div>
          </div>

          {/* Statistics */}
          <div className="lg:col-span-6 flex justify-end">
            <div className="flex items-center">
              {/* First Stat */}
              <div className="flex flex-col gap-1">
                <p className="text-primary font-heading font-bold text-size-3xl leading-tight">
                  10 +
                </p>
                <p className="text-primary font-body font-normal text-size-1xl leading-relaxed">
                  Years Experience
                </p>
              </div>
              
              {/* Divider */}
              <div className="h-16 w-px bg-primary mx-4"></div>
              
              {/* Second Stat */}
              <div className="flex flex-col gap-1">
                <p className="text-primary font-heading font-bold text-size-3xl leading-tight">
                  100 +
                </p>
                <p className="text-primary font-body font-normal text-size-1xl leading-relaxed">
                  Satisfied Clients
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Image Column */}
          <div className="hidden lg:block lg:col-span-4 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden aspect-[3/4]">
              <Image 
                src="/images/Group_image_inspyrenet.png" 
                alt="Professional Electrician" 
                width={400}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Services Grid Column */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col gap-3">
                  {/* Icon */}
                  <div className="mb-2">
                    <div className="w-12 h-12 flex items-center justify-center">
                      <Image 
                        src="/images/check-svgrepo-com.svg" 
                        alt={service.title} 
                        width={24} 
                        height={24}
                      />
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-[#19170B] font-body font-semibold text-size-2xl">
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#19170B] font-body font-normal text-size-1xl leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 