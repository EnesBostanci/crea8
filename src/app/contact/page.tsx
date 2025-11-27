import { Sekleton } from "@/components/Layout/Sekleton";
import Contact from "@/components/Pages/Contact/Contact";
import Cta from "@/components/Shared/Cta";
import Group from "@/components/Shared/Group";

export default function Page() {
  return (
    <Sekleton>
      <Contact />
      <Cta />
      <Group />
    </Sekleton>
  );
}
