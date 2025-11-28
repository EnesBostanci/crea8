import { Container } from "@/components/Template/Container";
import { FadeIn, FadeInStagger } from "@/components/Template/FadeIn";
const logos = [
  { alt: "C8", src: "/8Group/C8.svg" },
  { alt: "ID8", src: "/8Group/ID8.svg" },
  { alt: "P8", src: "/8Group/P8.svg" },
  { alt: "R8", src: "/8Group/R8.svg" },
];

export default function Group() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-center text-5xl/8 font-bold text-primary-800 leading-normal">
            Part of The 8 Group
          </h2>
        </FadeIn>
        <div className="h-px mt-10 w-full bg-neutral-950/10" />
        <FadeInStagger faster>
          <div className="mx-auto mt-20  grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {logos.map((logo) => (
              <FadeIn key={logo.alt}>
                <img
                  alt={logo.alt}
                  src={logo.src}
                  width={158}
                  height={48}
                  className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                />
              </FadeIn>
            ))}
          </div>
        </FadeInStagger>
      </Container>
    </section>
  );
}
