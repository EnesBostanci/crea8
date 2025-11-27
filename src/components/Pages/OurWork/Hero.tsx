import clsx from "clsx";
import { Container } from "@/components/Template/Container";
import { FadeIn } from "@/components/Template/FadeIn";

export default function Hero({
  data,
}: {
  data: { title: string; header: string; description: string };
}) {
  return (
    <Container className={clsx("mt-24 sm:mt-32 lg:mt-40")}>
      <FadeIn>
        <h1>
          <span className="block font-display text-neutral-950 font-semibold ">
            {data.title}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              "mt-6 block max-w-5xl font-display text-5xl font-bold tracking-tight text-balance text-primary-800 sm:text-6xl"
            )}
          >
            {data.header}
          </span>
        </h1>
        <div className={clsx("mt-6 max-w-3xl text-xl text-neutral-600")}>
          <p>{data.description}</p>
        </div>
      </FadeIn>
    </Container>
  );
}
