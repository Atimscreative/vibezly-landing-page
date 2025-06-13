import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";

export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center"
      >
        <div className="bg-vibezly-dark absolute inset-0"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="font-orbitron mb-6 text-4xl leading-[120%] font-bold text-white md:text-6xl lg:text-7xl">
              Revolutionizing Crypto
              <br />
              <AnimatedGradientText colorFrom="#7b00ff" colorTo="#00d1ff">
                Communities
              </AnimatedGradientText>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-200 md:text-2xl">
              AI-powered Telegram bot with decentralized governance, gamified
              rewards, and community-driven insights. Powered by VBZ token.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Button
                size="lg"
                // onClick={() => scrollToSection("about")}
                className="border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
              >
                Learn More
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                className="bg-vibezly-gradient transition-opacity hover:opacity-90"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="animate-float absolute top-20 left-10">
            <div className="bg-vibezly-purple/20 glow flex h-16 w-16 items-center justify-center rounded-full">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
          <div
            className="animate-float absolute top-40 right-20"
            style={{ animationDelay: "1s" }}
          >
            <div className="bg-vibezly-cyan/20 glow-cyan flex h-12 w-12 items-center justify-center rounded-full">
              <span className="text-xl">⚡</span>
            </div>
          </div>
          <div
            className="animate-float absolute bottom-40 left-20"
            style={{ animationDelay: "2s" }}
          >
            <div className="bg-vibezly-green/20 glow-green flex h-14 w-14 items-center justify-center rounded-full">
              <span className="text-xl">💎</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
