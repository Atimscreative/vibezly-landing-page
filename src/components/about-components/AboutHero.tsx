import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { Badge } from "../ui/badge";

export default function AboutHero() {
  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden bg-[linear-gradient(to_right,#0f131aee,#0f131acc),url('/src/assets/particles.gif')] bg-cover bg-no-repeat py-20 pt-36"
      >
        {/* <div className="absolute inset-0"></div> */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <Badge
            data-aos="fade-down"
            className="border-vibezly-border bg-vibezly-border/40 text-vibezly-cyan mb-2 rounded-full p-2 px-4 text-sm"
          >
            Powering the Future of Crypto Communities
          </Badge>
          <h1
            data-aos="fade-down"
            data-aos-delay="100"
            className="font-orbitron mb-6 text-4xl font-bold text-white md:text-6xl"
          >
            Welcome to{" "}
            <AnimatedGradientText colorFrom="#7b00ff" colorTo="#00d1ff">
              Vibezly
            </AnimatedGradientText>
          </h1>
          <div className="mx-auto max-w-4xl space-y-4">
            <p
              data-aos="fade-down"
              data-aos-delay="200"
              className="text-lg text-gray-300"
            >
              Vibezly is a Telegram bot that brings structure, fun, and
              transparency to Web3 communities. Through AI, gamification, and
              decentralized tools, Vibezly transforms chats into vibrant
              ecosystems.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
