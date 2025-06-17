import AboutHero from "@/components/about-components/AboutHero";
import PersonaShowcase from "@/components/about-components/PersonaShowcase";
import CTA from "@/components/about-components/CTA";
import Ecosystem from "@/components/about-components/Ecosystem";
import KeyFeatures from "@/components/about-components/KeyFeatures";

const About = () => {
  return (
    <>
      <AboutHero />
      <section className="hidden py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Problems */}
            <div className="animate-fade-in">
              <h2 className="font-orbitron mb-8 text-3xl font-bold text-red-400">
                Why Crypto Communities Struggle
              </h2>
              <div className="space-y-6">
                {/* {problems.map((problem, index) => (
                  <div key={index} className="group flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-400/10 transition-colors group-hover:bg-red-400/20">
                      <problem.icon className="h-5 w-5 text-red-400" />
                    </div>
                    <p className="group-hover:text-foreground transition-colors">
                      {problem.text}
                    </p>
                  </div>
                ))} */}
              </div>
            </div>

            {/* Solutions */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-orbitron text-vibezly-green mb-8 text-3xl font-bold">
                How Vibezly Fixes It
              </h2>
              <div className="space-y-6">
                {/* {solutions.map((solution, index) => (
                  <div key={index} className="group flex items-start space-x-4">
                    <div className="bg-vibezly-green/10 group-hover:bg-vibezly-green/20 flex h-10 w-10 items-center justify-center rounded-lg transition-colors">
                      <solution.icon className="text-vibezly-green h-5 w-5" />
                    </div>
                    <p className="group-hover:text-foreground transition-colors">
                      {solution.text}
                    </p>
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <KeyFeatures />
      <Ecosystem />
      <PersonaShowcase />
      <CTA />
    </>
  );
};

export default About;
