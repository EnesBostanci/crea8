import { Sekleton } from "@/components/Layout/Sekleton";
import Hero from "@/components/Pages/About/Hero";
import WhatWeDo from "@/components/Pages/About/WhatWeDo";
import Cta from "@/components/Shared/Cta";
export default function Page() {
  return (
    <Sekleton>
      <Hero />
      <WhatWeDo />
      <Cta />
    </Sekleton>
  );
}
