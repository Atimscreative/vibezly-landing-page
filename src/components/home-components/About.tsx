import { Card, CardContent } from "../ui/card";
import Pad from "@/assets/personas/Game.svg";
import AI from "@/assets/personas/AI-Drivemn.svg";
import Blockchain from "@/assets/personas/Decentralized.svg";
import { Link } from "react-router";
import { ShineBorder } from "../magicui/shine-border";

export default function About() {
  return (
    <>
      <section
        id="about"
        className="bg-vibezly-dark border-vibezly-border/50 overflow-hidden border-y py-28"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 lg:grid-cols-2">
          <div className="lg:col-start-2">
            <h2
              data-aos="fade-up"
              className="from-vibezly-purple via-vibezly-cyan to-vibezly-green mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
            >
              About Vibezly
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mx-auto max-w-3xl text-base"
            >
              Vibezly is an AI-Powered Telegram bot linked to a sleek interface
              that turns any crypto chat into a data-driven arena. It tracks
              every movement of your community, streams live analytics to
              dashboards, auto-runs gamified contests with instant crypto
              payouts, and propels high-energy groups onto a public trending
              hub.
            </p>

            <Link
              to="https://t.me/vibezly_bot"
              data-aos="fade-up"
              data-aos-delay="200"
              className="from-vibezly-purple to-vibezly-cyan mt-6 inline-block h-auto rounded-md bg-gradient-to-r bg-cover px-6 py-3 text-sm text-white transition-opacity text-shadow-sm hover:opacity-90"
            >
              Get Started
            </Link>
          </div>

          <div className="grid gap-8 lg:col-start-1 lg:col-end-2 lg:row-start-1">
            <Card
              data-aos="fade-up"
              data-aos-delay="150"
              style={{ transition: "500ms ease" }}
              className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-vibezly-purple/50 relative bg-linear-[135deg] from-0% to-100% py-4 duration-300 ease-in hover:scale-105"
            >
              <ShineBorder shineColor="#7b00ff" />
              <CardContent className="grid grid-cols-[64px_1fr] items-center gap-4">
                <div className="drop-shadow-glow/50 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-[135deg]">
                  <span className="text-2xl">
                    <img
                      src={Pad}
                      alt="gamingpad"
                      style={{
                        animationDuration: "3s",
                        animationTimingFunction: "linear",
                      }}
                      // className="animate-bounce"
                      width={300}
                    />
                  </span>
                </div>
                <div className="">
                  <h3 className="text-vibezly-purple text-xl font-semibold">
                    Community Intelligence
                  </h3>
                  {/* <p className="text-neutral-400">
                    Advanced AI analyzes chat patterns and sentiment to enhance
                    community experiences.
                  </p> */}
                </div>
              </CardContent>
            </Card>

            <Card
              data-aos="fade-up"
              data-aos-delay="250"
              style={{ transition: "500ms ease" }}
              className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-vibezly-cyan/50 relative bg-linear-[135deg] from-0% to-100% duration-300 hover:scale-105"
            >
              <ShineBorder shineColor="#00d1ff" duration={20} />

              <CardContent className="grid grid-cols-[64px_1fr] items-center gap-4">
                <div className="drop-shadow-glow-cyan/50 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-[135deg]">
                  <img
                    src={AI}
                    alt="gamingpad"
                    style={{
                      animationDuration: "3s",
                      animationTimingFunction: "linear",
                      animationDelay: "0.2s",
                    }}
                    // className="animate-bounce"
                  />
                </div>
                <div className="">
                  <h3 className="text-vibezly-cyan text-xl font-semibold">
                    Algorithmic Spotlight Booster
                  </h3>
                  {/* <p className="">
                    Community-driven decision making through transparent voting
                    mechanisms and proposal systems.
                  </p> */}
                </div>
              </CardContent>
            </Card>

            <Card
              data-aos="fade-up"
              data-aos-delay="350"
              style={{ transition: "500ms ease" }}
              className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-vibezly-green/50 relative bg-linear-[135deg] from-0% to-100% duration-300 hover:scale-105"
            >
              <ShineBorder shineColor="#50ff54" duration={14} />

              <CardContent className="grid grid-cols-[64px_1fr] items-center gap-4">
                <div className="drop-shadow-glow-green/50 mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-linear-[135deg]">
                  <img
                    src={Blockchain}
                    alt="gamingpad"
                    style={{
                      animationDuration: "3s",
                      animationTimingFunction: "linear",
                      animationDelay: "0.4s",
                    }}
                    // className="animate-bounce"
                  />
                </div>
                <div className="">
                  <h3 className="text-vibezly-green text-xl font-semibold">
                    Automated Reward Engine
                  </h3>
                  {/* <p className="">
                    Earn XP, climb leaderboards, and receive VBZ tokens for
                    active community participation.
                  </p> */}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
