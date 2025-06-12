import { ArrowDown } from "lucide-react";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center bg-moving-gradient"
      >
        <div className="absolute inset-0 bg-background/50"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="font-orbitron font-bold text-4xl md:text-6xl lg:text-7xl mb-6 text-white">
              Revolutionizing Crypto
              <span className="block text-gradient animate-pulse-slow">
                Communities
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              AI-powered Telegram bot with decentralized governance, gamified
              rewards, and community-driven insights. Powered by VBZ token.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                // onClick={() => scrollToSection("about")}
                className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/20 text-white"
              >
                Learn More
                <ArrowDown className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                className="bg-vibezly-gradient hover:opacity-90 transition-opacity"
              >
                Get Started
              </Button>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-20 left-10 animate-float">
            <div className="w-16 h-16 bg-vibezly-purple/20 rounded-full flex items-center justify-center glow">
              <span className="text-2xl">🚀</span>
            </div>
          </div>
          <div
            className="absolute top-40 right-20 animate-float"
            style={{ animationDelay: "1s" }}
          >
            <div className="w-12 h-12 bg-vibezly-cyan/20 rounded-full flex items-center justify-center glow-cyan">
              <span className="text-xl">⚡</span>
            </div>
          </div>
          <div
            className="absolute bottom-40 left-20 animate-float"
            style={{ animationDelay: "2s" }}
          >
            <div className="w-14 h-14 bg-vibezly-green/20 rounded-full flex items-center justify-center glow-green">
              <span className="text-xl">💎</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
