import { Sekleton } from "@/components/Layout/Sekleton";
import Gallery from "@/components/Pages/OurWork/Gallery";
import Hero from "@/components/Pages/OurWork/Hero";
import Cta from "@/components/Shared/Cta";
const heroTitle = {
  title: "Our Work",
  header: "Signature projects. Real results.",
  description:
    "Explore key projects that showcase how we create, capture, and elevate original content for artists, broadcasters, and brands across the region.",
};
export default function Page() {
  return (
    <Sekleton>
      <Hero data={heroTitle} />
      <Gallery />
      <Cta />
    </Sekleton>
  );
}
