import { Particles } from "../magicui/particles";
import { TypeAnimation } from "react-type-animation";
import Coin from "@/assets/Coim.png";
import Rocket from "@/assets/Rocket2.png";
import Rocket2 from "@/assets/Rocket.png";
import { Link } from "react-router";

// const phrases = [
//   { text: "Revolutionizing Crypto Communities" },
//   { text: "Revolutionizing Crypto Ecosystems" },
//   { text: "Revolutionizing Crypto Networks" },
//   { text: "Revolutionizing Crypto Movements", className: "text-vibezly-cyan" },
// ];

export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        <div className="bg-vibezly-dark absolute inset-0 h-screen w-full">
          <Particles className="h-full w-full" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <div>
            {/* <h1
              data-aos="fade-down"
              className="font-orbitron mb-6 text-4xl leading-[120%] font-bold text-white md:text-6xl lg:text-7xl"
            >
              Revolutionizing Crypto
              <br />
              <AnimatedGradientText colorFrom="#7b00ff" colorTo="#00d1ff">
                Communities
              </AnimatedGradientText>
            </h1> */}

            <TypeAnimation
              cursor={true}
              wrapper="h1"
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Revolutionizing Crypto Communities",
                1000,
                "Revolutionizing Crypto Ecosystems",
                1000,
                "Revolutionizing Crypto Networks",
                1000,
                "Revolutionizing Crypto Movements",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              preRenderFirstString={true}
              className="font-orbitron mb-6 h-[130px] text-4xl leading-[120%] font-bold text-balance text-white min-[28.79rem]:h-[144px] sm:h-auto md:text-6xl lg:text-7xl"
            />

            <p
              data-aos="fade-down"
              data-aos-delay="100"
              className="mx-auto mb-8 max-w-3xl text-xl text-gray-200 md:text-2xl"
            >
              AI-powered Telegram bot with decentralized governance, gamified
              rewards, and community-driven insights. Powered by VBZ token.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <Link
                to="https://t.me/vibezly_bot"
                data-aos="fade-up"
                data-aos-delay="200"
                className="from-vibezly-purple to-vibezly-cyan h-auto rounded-md bg-gradient-to-r bg-cover px-6 py-3 text-white transition-opacity text-shadow-sm hover:opacity-90"
              >
                Get Started
              </Link>

              <Link
                to="/personas"
                data-aos="fade-left"
                data-aos-delay={100}
                className="from-vibezly-purple to-vibezly-cyan relative flex h-auto items-center justify-center rounded-md bg-linear-[135deg] px-6 py-3 transition-opacity hover:opacity-90"
              >
                <div className="bg-vibezly-dark absolute top-1/2 left-1/2 h-[90%] w-[97.5%] -translate-1/2 rounded-sm"></div>
                <span className="relative z-10 flex items-center gap-2">
                  Meet AI Personas
                </span>
              </Link>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="animate-float absolute top-20 -left-10">
            <div className="drop-shadow-glow/50 flex h-16 w-16 items-center justify-center rounded-full">
              <img src={Coin} />
            </div>
          </div>
          <div
            className="animate-float absolute top-40 -right-20"
            style={{ animationDelay: "1s" }}
          >
            <div className="bg-vibezly-cyan/20 glow-cyan flex h-12 w-12 items-center justify-center rounded-full">
              <img src={Rocket} />
            </div>
          </div>
          <div
            className="animate-float absolute -bottom-40 left-20"
            style={{ animationDelay: "2s" }}
          >
            <div className="bg-vibezly-green/20 glow-green flex h-16 w-16 items-center justify-center rounded-full">
              <img src={Rocket2} className="-rotate-[68deg]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
