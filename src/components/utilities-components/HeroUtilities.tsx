import { Bot, TrendingUp } from "lucide-react";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { Button } from "../ui/button";

export default function UtilitiesHero() {
  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden bg-[linear-gradient(to_right,#0f131aee,#0f131acc),url('/src/assets/particles.gif')] bg-cover bg-no-repeat py-20 pt-36"
      >
        {/* <div className="absolute inset-0"></div> */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-orbitron mb-6 text-4xl leading-[130%] font-bold text-white md:text-6xl">
            Supercharge Your
            <AnimatedGradientText colorFrom="#7b00ff" colorTo="#00d1ff">
              &nbsp;Telegram Community
            </AnimatedGradientText>
          </h1>
          <p
            className="mx-auto mb-4 text-xl text-gray-200 sm:max-w-7/12 md:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            AI tools, gamified rewards, and decentralized moderation — all in
            one bot.{" "}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="font-semibold">
              <Bot className="mr-2 h-5 w-5" />
              Add Vibezly to Telegram
            </Button>
            <Button size="lg" variant="outline" className="">
              <TrendingUp className="mr-2 h-5 w-5" />
              View Dashboard
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
