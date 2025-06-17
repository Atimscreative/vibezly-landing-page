import { Button } from "../ui/button";

export default function CTA() {
  return (
    <>
      <section className="relative overflow-hidden py-20">
        <div className="absolute top-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="from-vibezly-purple to-vibezly-cyan absolute -top-[202px] left-1/2 size-[279px] -translate-x-1/2 animate-spin rounded-full bg-linear-180 blur-[60px] duration-1000 ease-in"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h2
            data-aos="fade-down"
            className="font-orbitron mb-6 text-4xl leading-[130%] font-bold text-balance text-white md:text-5xl"
          >
            Start Building a Healthier, Hype-Powered Community
          </h2>
          <p
            data-aos="fade-down"
            data-aos-delay="100"
            className="mx-auto mb-8 max-w-2xl text-xl text-gray-200"
          >
            Built for degens. Designed for teams. Driven by AI.
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <Button
              data-aos="fade-up"
              data-aos-delay="200"
              size="lg"
              className="from-vibezly-purple to-vibezly-cyan h-auto bg-linear-[135deg] py-3 text-shadow-sm"
            >
              Explore the Mini App
            </Button>
            <Button
              size="lg"
              data-aos="fade-up"
              data-aos-delay="300"
              className="from-vibezly-purple to-vibezly-cyan relative flex h-auto items-center justify-center bg-linear-[135deg] py-3 transition-opacity hover:opacity-90"
            >
              <div className="bg-vibezly-dark absolute top-1/2 left-1/2 h-[90%] w-[97.5%] -translate-1/2 rounded-sm"></div>
              <span className="relative z-10">Try Vibezly Now</span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
