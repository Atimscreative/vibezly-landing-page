import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router";
import heroImage from "@/assets/Rocket2.png";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Hero() {
  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center px-4 lg:grid lg:grid-cols-[1.1fr_1fr]">
          <div>
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
              className="font-orbitron mb-6 text-center text-[28px] leading-[120%] font-bold text-balance text-white sm:h-auto sm:text-4xl md:text-6xl lg:text-left lg:text-[56px]"
            />

            <p
              data-aos="fade-down"
              data-aos-delay="100"
              className="mx-auto mb-8 max-w-3xl text-center text-lg text-gray-200 lg:text-left lg:text-xl"
            >
              AI-powered Telegram bot with decentralized governance, gamified
              rewards, and community-driven insights. Powered by VBZ token.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                to="https://t.me/vibezly_bot"
                data-aos="fade-up"
                data-aos-delay="200"
                className="from-vibezly-purple to-vibezly-cyan h-auto rounded-md bg-gradient-to-r bg-cover px-6 py-3 text-sm text-white transition-opacity text-shadow-sm hover:opacity-90"
              >
                Get Started
              </Link>

              <Link
                to="/#demo"
                data-aos="fade-left"
                data-aos-delay={100}
                className="from-vibezly-purple to-vibezly-cyan relative flex h-auto items-center justify-center rounded-md bg-linear-[135deg] px-6 py-3 transition-opacity hover:opacity-90"
              >
                <div className="bg-vibezly-dark absolute top-1/2 left-1/2 h-[90%] w-[97.5%] -translate-1/2 rounded-sm"></div>
                <span className="relative z-10 flex items-center gap-2 text-sm">
                  Watch Demo <FaArrowRightLong />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <img
              src={heroImage}
              alt="Vibezly"
              className="h-auto w-[50%] object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
