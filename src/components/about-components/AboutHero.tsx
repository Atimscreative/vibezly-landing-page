import { AnimatedGradientText } from "../magicui/animated-gradient-text";

export default function AboutHero() {
  return (
    <>
      <section id="hero" className="pt-28 pb-20">
        {/* <div className="absolute inset-0"></div> */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-orbitron animate-fade-in mb-6 text-4xl font-bold text-white md:text-6xl">
            Welcome to{" "}
            <AnimatedGradientText colorFrom="#7b00ff" colorTo="#00d1ff">
              Vibezly
            </AnimatedGradientText>
          </h1>
          <p
            className="animate-fade-in mb-4 text-xl text-gray-200 md:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            Powering the Future of Crypto Communities
          </p>
          <div
            className="animate-fade-in mx-auto max-w-4xl space-y-4"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-lg text-gray-300">
              Vibezly is a Telegram bot that brings structure, fun, and
              transparency to Web3 communities.
            </p>
            <p className="text-lg text-gray-300">
              Through AI, gamification, and decentralized tools, Vibezly
              transforms chats into vibrant ecosystems.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
