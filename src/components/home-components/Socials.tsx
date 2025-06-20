import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { FaTelegram } from "react-icons/fa";
import { Link } from "react-router";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import Etherscan from "@/assets/etherscan-logo-circle-light.svg";
import Dexscreener from "@/assets/dexscreener.png";
import Dextools from "@/assets/dextools@3x.png";

export default function Socials() {
  return (
    <>
      <section id="socials" className="bg-vibezly-card py-20">
        <div className="container mx-auto px-4 text-center">
          <h2
            data-aos="fade-up"
            data-aos-offset="2"
            className="from-vibezly-purple via-vibezly-cyan to-vibezly-green mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
          >
            Join Our Community
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mx-auto mb-12 max-w-3xl text-xl"
          >
            Connect with us across all platforms and be part of the Vibezly
            revolution
          </p>

          <div className="mx-auto mb-12 grid max-w-sm grid-cols-3 justify-center gap-4 sm:max-w-xl sm:grid-cols-6 sm:justify-center sm:gap-8">
            {socialMediaList.map((data, i) => (
              <Link
                key={i}
                data-aos="zoom-in"
                data-aos-delay={(i + 1) * 200}
                to={data.link}
                target="_blank"
                className="group flex flex-col items-center"
              >
                {data.type === "icon" && (
                  <div className="from-vibezly-purple via-vibezly-cyan to-vibezly-green drop-shadow-glow/50 hover:drop-shadow-glow-cyan/50 flex size-14 items-center justify-center rounded-full bg-linear-[135deg] from-0% via-85% to-100% transition-all duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
                    <data.icon className="h-8 w-8 text-white" />
                  </div>
                )}

                {data.type === "image" && (
                  <img
                    src={data.icon as string}
                    className="drop-shadow-glow/50 hover:drop-shadow-glow-cyan/50 size-14 rounded-full sm:h-16 sm:w-16"
                  />
                )}
                <span className="group-hover:text-vibezly-cyan mt-4 block text-sm font-medium transition-colors">
                  {data.label}
                </span>
              </Link>
            ))}
          </div>

          <Card
            data-aos="zoom-in"
            className="to-vibezly-card from-vibezly-dark border-vibezly-border/50 mx-auto max-w-md bg-linear-[-135deg] from-0% to-100% p-8"
          >
            <h3 className="mb-4 text-xl font-semibold text-white">
              Stay Updated
            </h3>
            <div className="flex flex-wrap justify-center gap-y-4 sm:flex-nowrap sm:gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-vibezly-dark border-vibezly-border focus:ring-vibezly-cyan h-10 flex-1 rounded-lg border px-4 py-2 text-neutral-400 placeholder:text-sm placeholder:text-neutral-50/70 focus:ring-1 focus:outline-none"
              />
              <Button className="from-vibezly-purple to-vibezly-cyan h-10 bg-linear-[135deg] from-0% to-100% transition-opacity hover:opacity-90">
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

const socialMediaList = [
  {
    icon: FaTelegram,
    label: "Telegram",
    link: "https://t.me/vibezly",
    type: "icon",
  },
  {
    icon: FaXTwitter,
    label: "Twitter X",
    link: "https://x.com/_vibezly",
    type: "icon",
  },
  {
    icon: FaYoutube,
    label: "Youtube",
    link: "#",
    type: "icon",
  },
  {
    icon: Dextools,
    label: "Dextools",
    link: "#",
    type: "image",
  },
  {
    icon: Dexscreener,
    label: "Dexscreener",
    link: "#",
    type: "image",
  },
  {
    icon: Etherscan,
    label: "Etherscan",
    link: "#",
    type: "image",
  },
];
