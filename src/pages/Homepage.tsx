import About from "@/components/home-components/About";
import Socials from "@/components/home-components/Socials";
import Hero from "@/components/home-components/Hero";
import Partnership from "@/components/home-components/Partnership";
import Roadmap from "@/components/home-components/Roadmap";
import Team from "@/components/home-components/Team";
import Tokenomics from "@/components/home-components/Tokenomics";
import Utilities from "@/components/home-components/Utilities";
import Demo from "@/components/home-components/Demo";

export default function Homepage() {
  return (
    <>
      <Hero />
      <About />
      <Demo />
      <Utilities />
      <Tokenomics />
      <Team />
      <Partnership />
      <Roadmap />
      <Socials />
    </>
  );
}
