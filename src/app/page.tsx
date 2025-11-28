import { Sekleton } from "@/components/Layout/Sekleton";
import Hero from "@/components/Pages/HomePage/Hero";
import Cta from "@/components/Shared/Cta";
import Group from "@/components/Shared/Group";
export default function Home() {
  return (
    <Sekleton>
      <Hero />
      <Group />
      <Cta />
    </Sekleton>
  );
}
