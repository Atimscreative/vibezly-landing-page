import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router";
// import heroImage from "@/assets/Rocket2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Bg from "@/assets/bg.gif";
import phone from "@/assets/personas/Phone.gif";
import { motion } from "motion/react";
import { useState } from "react";

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <section
        id="hero"
        style={{
          backgroundImage: `linear-gradient(90deg, var(--vibezly-dark), #0f131a88), url(${Bg})`,
          backgroundSize: "cover",
        }}
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
      >
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col-reverse items-center px-4 lg:grid lg:grid-cols-[1.1fr_1fr]">
          <div className="mt-12 lg:mt-0">
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
              Track, gamify, and amplify your crypto community with AI-driven
              data and a sleek user interface.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Link
                to="https://t.me/vibezly_bot"
                data-aos="fade-up"
                data-aos-delay="200"
                className="from-vibezly-purple hover:drop-shadow-glow-cyan/50 to-vibezly-cyan h-auto rounded-md bg-gradient-to-r bg-cover px-6 py-3 text-sm text-white transition-opacity text-shadow-sm hover:opacity-90"
              >
                Get Started
              </Link>

              <Link
                to="https://vibezly.gitbook.io/vibezly-docs/"
                data-aos="fade-up"
                data-aos-delay={100}
                className="from-vibezly-purple hover:drop-shadow-glow-cyan/50 to-vibezly-cyan relative flex h-auto items-center justify-center rounded-md bg-linear-[135deg] px-6 py-3 transition-opacity hover:opacity-90"
              >
                <div className="bg-vibezly-dark absolute top-1/2 left-1/2 h-[90%] w-[97.5%] -translate-1/2 rounded-sm"></div>
                <span className="relative z-10 flex items-center gap-2 text-sm">
                  Watch Demo <FaArrowRightLong />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex w-full items-center justify-center">
            <motion.figure
              onHoverStart={() => setIsHovered(true)}
              onHoverEnd={() => setIsHovered(false)}
              initial={{ opacity: 1, y: 50, scale: 0.95, rotate: 5 }}
              whileHover={
                isHovered
                  ? {
                      opacity: [1, 1, 1],
                      y: [50, -10, 0],
                      scale: [0.95, 1.02, 1],
                      rotate: [5, 0, 0],
                    }
                  : {
                      opacity: 0,
                      y: 50,
                      scale: 0.95,
                      rotate: 5,
                    }
              }
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                times: [0, 0.6, 1],
                repeat: isHovered ? Infinity : 0,
                repeatType: "reverse",
              }}
              // style={{
              //   transform: "translateY(50px) scale(0.95) rotate(5deg)",
              // }}
              className="group relative h-[300px] w-full sm:h-[500px] sm:w-[400px]"
            >
              <img
                src={phone}
                alt="Vibezly"
                className="relative z-10 h-full w-full object-contain object-center"
              />
              <div className="group-hover:bg-vibezly-cyan/40 bg-vibezly-cyan/0 absolute top-0 left-0 h-full w-full scale-75 -skew-12 rounded-2xl blur-3xl transition-all duration-500 ease-in-out"></div>
            </motion.figure>
          </div>
        </div>
      </section>
    </>
  );
}
