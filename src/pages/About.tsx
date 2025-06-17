import AboutHero from "@/components/about-components/AboutHero";
import PersonaShowcase from "@/components/about-components/PersonaShowcase";
import CTA from "@/components/about-components/CTA";
import Ecosystem from "@/components/about-components/Ecosystem";
import KeyFeatures from "@/components/about-components/KeyFeatures";

const About = () => {
  return (
    <>
      <AboutHero />
      <KeyFeatures />
      <Ecosystem />
      <PersonaShowcase />
      <CTA />
    </>
  );
};

export default About;
