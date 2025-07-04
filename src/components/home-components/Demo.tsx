import { ShineBorder } from "../magicui/shine-border";
import { Link } from "react-router";

export default function Demo() {
  return (
    <section id="demo" className="py-16 pt-20">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center justify-center gap-5 px-4 lg:grid lg:grid-cols-[1fr_1.3fr] lg:gap-10">
        <div className="md:mx-auto md:max-w-lg md:text-center lg:max-w-full lg:text-left">
          <h2 className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl">
            How to Get Started
          </h2>
          <p className="my-2">
            Getting started with Vibezly is simple. Just invite the bot to your
            Telegram group using the official link, then head to the mini app
            dashboard to set up your preferred persona, configure moderation
            tools, and activate features like contests, leaderboards, and
            sentiment tracking.
          </p>
          <p>
            Check out this short product demo and see how easy it is to navigate
            our Bot!
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

        <div className="relative w-full rounded-xl bg-white/20 p-2 ring-1 ring-white/20 backdrop-blur-3xl ring-inset md:max-w-xl lg:h-[350px] lg:max-w-full">
          <ShineBorder
            borderWidth={2}
            shineColor={["#7b00ff", "#00d1ff", "#50ff54"]}
          />
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Ttv2VxMvYtU?si=jRSr4ZZzGQdTJyCM"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={false}
            className="rounded-md"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
