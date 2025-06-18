import { cn } from "@/lib/utils";
import { Card } from "../ui/card";
import Chat from "@/assets/chat.png";
import Chart from "@/assets/chart.png";
import Star from "@/assets/star.png";

export default function Utilities() {
  return (
    <>
      {/* Utilities Section */}
      <section id="utilities" className="bg-vibezly-dark py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2
              data-aos="fade-up"
              className="from-vibezly-purple via-vibezly-cyan to-vibezly-green mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
            >
              Core Utilities
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mx-auto max-w-3xl text-xl"
            >
              Powerful features designed to enhance your crypto community
              experience
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2">
            {utilities.map((data, index) => (
              <Utility key={index} data={data} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Utility({ data, index }: any) {
  return (
    <div className="group cursor-pointer lg:last:col-span-2">
      <Card
        style={{ transition: "300ms ease" }}
        data-aos="fade-up"
        data-aos-delay={(index + 1) * 100}
        className={cn(
          "from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-primary/50 bg-linear-[135deg] p-6 transition-all duration-300",
          data.containerClassName,
        )}
      >
        <div className="flex flex-col items-start space-x-4">
          <div className="from-vibezly-purple via-vibezly-cyan to-vibezly-green mb-4 flex items-center justify-center rounded-lg bg-linear-240 transition-transform duration-300 group-hover:scale-110">
            {/* <span className="text-xl">{data.icon}</span> */}
            <img src={data.icon} alt={data.title} className="block size-14" />
          </div>
          <div>
            <h3
              className={cn(
                "font-orbitron mb-2 text-xl font-semibold",
                data.titleClassName,
              )}
            >
              {data.title}
            </h3>
            <p className="text-balance">{data.content}</p>
          </div>
        </div>
      </Card>
    </div>
  );
}

const utilities = [
  {
    icon: Chat,
    title: "AI Chat Moderation",
    content:
      "Intelligent spam detection, sentiment analysis, and automated              moderation to keep your community healthy and engaged.",
    titleClassName: "text-vibezly-purple",
    containerClassName: "hover:border-vibezly-purple",
  },
  {
    icon: Chart,
    title: "Member Rankings",
    content:
      "Dynamic leaderboards based on activity, contribution                         quality, and community engagement metrics.",
    titleClassName: "text-vibezly-cyan",
    containerClassName: "hover:border-vibezly-cyan",
  },
  {
    icon: Star,
    title: "Token Rewards",
    content:
      "Earn VBZ tokens for quality contributions, helping                         newcomers, and maintaining positive community vibes.",
    titleClassName: "text-vibezly-green",
    containerClassName: "hover:border-vibezly-green",
  },
];
