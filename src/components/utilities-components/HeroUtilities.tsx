import { TrendingUp } from "lucide-react";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";
import { Button } from "../ui/button";
import { Link } from "react-router";

export default function UtilitiesHero() {
  return (
    <>
      <section
        id="hero"
        className="relative overflow-hidden bg-[linear-gradient(to_right,#0f131aee,#0f131acc),url('/src/assets/particles.gif')] bg-cover bg-no-repeat py-20 pt-36"
      >
        {/* <div className="absolute inset-0"></div> */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1
            data-aos="fade-down"
            className="font-orbitron mb-6 text-4xl leading-[130%] font-bold text-white md:text-6xl"
          >
            Supercharge Your
            <AnimatedGradientText colorFrom="#7b00ff" colorTo="#00d1ff">
              &nbsp;Telegram Community
            </AnimatedGradientText>
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mx-auto mb-4 text-xl text-gray-200 sm:max-w-7/12 md:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            AI tools, gamified rewards, and decentralized moderation — all in
            one bot.{" "}
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              data-aos="fade-up"
              data-aos-delay="200"
              to="https://t.me/vibezly_bot"
              className="from-vibezly-purple to-vibezly-cyan inline-flex h-auto rounded-md bg-linear-[135deg] px-6 py-3 transition-transform text-shadow-sm"
            >
              {/* <Bot className="mr-2 h-5 w-5" /> */}
              Add Vibezly to Telegram
            </Link>
            <Button
              size="lg"
              data-aos="fade-up"
              data-aos-delay={300}
              className="from-vibezly-purple to-vibezly-cyan relative flex h-auto items-center justify-center bg-linear-[135deg] py-3 transition-opacity hover:opacity-90"
            >
              <div className="bg-vibezly-dark absolute top-1/2 left-1/2 h-[90%] w-[97.5%] -translate-1/2 rounded-sm"></div>
              <span className="relative z-10 flex gap-2">
                <TrendingUp className="mr-2 h-5 w-5" />
                View Dashboard
              </span>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
