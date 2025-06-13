import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { FaInstagramSquare, FaTelegram } from "react-icons/fa";
import { Link } from "react-router";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

export default function Socials() {
  return (
    <>
      <section id="socials" className="bg-vibezly-card py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="from-vibezly-purple via-vibezly-cyan to-vibezly-green mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Join Our Community
          </h2>
          <p className="mx-auto mb-12 max-w-3xl text-xl">
            Connect with us across all platforms and be part of the Vibezly
            revolution
          </p>

          <div className="mb-12 flex justify-evenly gap-4 sm:justify-center sm:gap-8">
            {socialMediaList.map((data, i) => (
              <SocialItem data={data} key={i} />
            ))}
          </div>

          <Card className="to-vibezly-card from-vibezly-dark border-vibezly-border/50 mx-auto max-w-md bg-linear-[-135deg] from-0% to-100% p-8">
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

function SocialItem({ data }: any) {
  return (
    <Link to="#" className="group flex flex-col items-center">
      <div className="from-vibezly-purple via-vibezly-cyan to-vibezly-green drop-shadow-glow/50 hover:drop-shadow-glow-cyan/50 flex size-14 items-center justify-center rounded-full bg-linear-[135deg] from-0% via-85% to-100% transition-all duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
        <data.icon className="h-8 w-8 text-white" />
      </div>
      <span className="group-hover:text-vibezly-cyan mt-4 block text-sm font-medium transition-colors">
        {data.label}
      </span>
    </Link>
  );
}

const socialMediaList = [
  {
    icon: FaTelegram,
    label: "Telegram",
  },
  {
    icon: FaXTwitter,
    label: "Twitter X",
  },
  {
    icon: FaDiscord,
    label: "Discord",
  },
  {
    icon: FaInstagramSquare,
    label: "Instagram",
  },
];
