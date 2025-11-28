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
        <h1 className="text-5xl font-bold tracking-tight text-balance sm:text-7xl">
          {data.title}
        </h1>
        <span
          className={clsx(
            "mt-6 block max-w-5xl  text-3xl font-bold tracking-tight text-balance text-primary-800 sm:text-4xl"
          )}
        >
          {data.header}
        </span>
        <div className={clsx("mt-6 max-w-3xl text-xl text-neutral-600")}>
          <p>{data.description}</p>
        </div>
      </FadeIn>
    </Container>
  );
}
