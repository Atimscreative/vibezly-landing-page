import { Button } from "../ui/button";

export default function CTA() {
  return (
    <>
      <section className="border-vibezly-border border-t py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-orbitron mb-6 text-4xl leading-[130%] font-bold text-balance text-white md:text-5xl">
            Start Building a Healthier, Hype-Powered Community
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-200">
            Built for degens. Designed for teams. Driven by AI.
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <Button
              size="lg"
              className="border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
            >
              Explore the Mini App
            </Button>
            <Button
              size="lg"
              className="bg-vibezly-gradient transition-opacity hover:opacity-90"
            >
              Try Vibezly Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
