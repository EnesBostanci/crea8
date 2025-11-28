import { FadeIn, FadeInStagger } from "@/components/Template/FadeIn";
import { Border } from "@/components/Template/Border";
import clsx from "clsx";
import { Container } from "@/components/Template/Container";

function PageIntro({
  eyebrow,
  title,
  children,
  centered = false,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  centered?: boolean;
}) {
  return (
    <Container
      className={clsx("mt-24 sm:mt-32 lg:mt-40", centered && "text-center")}
    >
      <FadeIn>
        <h1
          className={clsx(
            "text-5xl font-bold tracking-tight text-balance sm:text-7xl mt-6 block max-w-5xl",
            centered && "mx-auto"
          )}
        >
          {title}
        </h1>
        <span className="mt-6 block max-w-5xl  text-3xl  tracking-tight text-balance text-primary-800 sm:text-4xl  font-semibold ">
          {eyebrow}
        </span>

        <div
          className={clsx(
            " mt-6 max-w-3xl text-xl text-neutral-600 ",
            centered && "mx-auto"
          )}
        >
          {children}
        </div>
      </FadeIn>
    </Container>
  );
}

function StatList({
  children,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof FadeInStagger>, "children"> & {
  children: React.ReactNode;
}) {
  return (
    <FadeInStagger {...props}>
      <dl className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:auto-cols-fr lg:grid-flow-col lg:grid-cols-none">
        {children}
      </dl>
    </FadeInStagger>
  );
}

export function StatListItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <Border as={FadeIn} position="left" className="flex flex-col-reverse pl-8">
      <dt className="mt-2 text-base text-neutral-600">{label}</dt>
      <dd className=" text-3xl font-semibold text-neutral-950 sm:text-4xl">
        {value}
      </dd>
    </Border>
  );
}

export default function Hero() {
  return (
    <section>
      <PageIntro eyebrow="Our Story" title="About us">
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Cre8 Studios is a full-service media production house dedicated to
            transforming ideas into powerful visual stories. Based between
            Türkiye and Qatar, we support broadcasters, brands, agencies, and
            institutions with cinematic content that is rooted in the region and
            crafted for global standards.
          </p>
          <p>
            As part of The 8 Group, we combine creative storytelling with
            cutting-edge production workflows. Our team of producers, directors,
            cinematographers, and editors handle every stage of the process from
            concept and script to shoot and final delivery.
          </p>
        </div>
      </PageIntro>
    </section>
  );
}
