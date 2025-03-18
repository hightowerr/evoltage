import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatars: Array<{
    image: string;
    fallback: string;
  }>;
}

interface Hero151Props {
  top_heading?: string;
  heading?: string;
  description?: string;
  button?: {
    text: string;
    url: string;
  };
  images?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
//   testimonial?: Testimonial;
//   images: {
//     first: string;
//     second: string;
//     third: string;
//     fourth: string;
//   };
}

const Hero151 = ({
  top_heading = "Friendly and professional team of electricians",
  heading = "Electrical Services",
  description = "We cover all types of electrical work from domestic, Industrial to commercial settings.",
  button = {
    text: "Get Started",
    url: "#",
  },
//   testimonial = {
//     quote: "Focused strategy, swift delivery",
//     author: "John Doe",
//     role: "CEO",
//     company: "Company",
//     avatars: [
//       { image: "https://shadcnblocks.com/images/block/avatar-1.webp", fallback: "AB" },
//       { image: "https://shadcnblocks.com/images/block/avatar-2.webp", fallback: "CD" },
//       { image: "https://shadcnblocks.com/images/block/avatar-3.webp", fallback: "EF" },
//     ],
//   },
  images = {
    first: "/images/home_img.jpg",
    second: "/images/Barbers.jpg",
    third: "/images/Barbers.jpg",
    fourth: "/images/services.jpg",
  },
}: Hero151Props) => {
  return (
    <section className="w-full bg-[#FEFDFB] pt-8  pb-8 md:pt-8 md:pb-8">
    {/* <section className="flex items-center justify-center min-h-[80vh] pt-2 pb-4 md:pt-4 md:pb-8"> */}
      <div className="container mx-auto px-4">
      {/* <div className="container mx-auto px-4"> */}
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
        <div className="flex-1 space-y-4">
          <div className="space-y-4">
            <h3 className="uppercase text-[#0B378D] font-body font-bold text-size-base tracking-widest">
              {top_heading}
            </h3>
            <h1 className="max-w-[80%] text-4xl leading-tight font-semibold text-foreground lg:text-5xl xl:text-7xl">
              {heading}
            </h1>
              <p className="text-text-dark text-lg leading-relaxed text-muted-foreground xl:text-2xl">
                {description}
              </p>
            </div>
            <div className="my-4 lg:my-6">
              <Button asChild size="lg">
                <a href={button.url}>{button.text}</a>
              </Button>
            </div>
            {/* <div className="flex flex-wrap items-center gap-3"> */}
              {/* <div className="relative flex -space-x-[1.5rem]">
                {testimonial.avatars.map((avatar, index) => (
                  <Avatar
                    key={index}
                    className={`relative z-${index + 1}0 flex h-12 w-12 flex-shrink-0 rounded-full border-2 border-white object-cover`}
                  >
                    <AvatarImage src={avatar.image} alt="" />
                    <AvatarFallback>{avatar.fallback}</AvatarFallback>
                  </Avatar>
                ))}
              </div> */}
              {/* <div>
                <p className="mb-1 text-sm text-muted-2-foreground italic">
                  &quot;{testimonial.quote}&quot;
                </p>
                <p className="text-sm font-medium text-muted-2-foreground">
                  {testimonial.author}, {testimonial.role} @
                  {testimonial.company}
                </p>
              </div> */}
            {/* </div> */}
          </div>
          <div className="w-full flex-1">
            <div className="w-full max-w-[45rem]">
              <AspectRatio ratio={1 / 1} className="h-full w-full">
                <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-[3.5%]">
                  <div className="overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                    <img
                      src={images.first}
                      alt=""
                      className="object-fit h-full w-full object-center"
                    />
                  </div>
                  <div className="relative overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                    <div className="absolute top-1/2 left-[5%] w-[110%] max-w-[25rem] -translate-y-1/2 overflow-hidden rounded-md">
                      <AspectRatio ratio={1 / 1} className="h-full w-full">
                        <img
                          src={images.second}
                          alt=""
                          className="size-full object-cover object-center scale-[0.9] translate-y-5"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                    <div className="absolute top-[9%] left-[9%] w-[200%] max-w-[37.5rem] overflow-hidden rounded-md">
                      <AspectRatio ratio={1.6 / 1}>
                        <img
                          src={images.third}
                          alt=""
                          className="size-full object-cover object-center"
                        />
                      </AspectRatio>
                    </div>
                  </div>
                  <div className="relative overflow-hidden rounded-[5.2%] border border-muted bg-muted">
                    <div className="relative top-[12%] left-[50%] w-[80%] max-w-[1`0.5rem] overflow-hidden rounded-md -translate-x-[50%]">
                    <AspectRatio ratio={0.8/ 1}>
                        <img
                          src={images.fourth}
                          alt=""
                          className="size-full object-cover object-center absolute z-10 w-full"
                        />
                      </AspectRatio>
                      {/* <AspectRatio ratio={0.52 / 1}>
                        <img
                          src="https://shadcnblocks.com/images/block/mockups/phone-1.png"
                          alt=""
                          className="absolute z-20 w-full"
                        />
                        <img
                          src={images.fourth}
                          alt=""
                          className="absolute z-10 w-full rounded-[16%]"
                        />
                      </AspectRatio> */}
                    </div>
                  </div>
                </div>
              </AspectRatio>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero151 };
