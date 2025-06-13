import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

export default function Utilities() {
  return (
    <>
      {/* Utilities Section */}
      <section id="utilities" className="bg-vibezly-dark py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="from-vibezly-purple via-vibezly-cyan to-vibezly-green mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Core Utilities
            </h2>
            <p className="mx-auto max-w-3xl text-xl">
              Powerful features designed to enhance your crypto community
              experience
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl items-center gap-6 lg:grid-cols-2">
            {utilities.map((data, index) => (
              <Utility key={index} data={data} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Utility({ data }: any) {
  return (
    <div className="group cursor-pointer lg:last:col-span-2">
      <Card
        className={cn(
          "from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-primary/50 bg-linear-[135deg] p-6 transition-all duration-300",
          data.containerClassName,
        )}
      >
        <div className="flex flex-col items-start space-x-4 sm:flex-row">
          <div className="bg-vibezly-gradient flex h-12 w-12 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-110">
            <span className="text-xl">{data.icon}</span>
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
    icon: "🧠",
    title: "AI Chat Moderation",
    content:
      "Intelligent spam detection, sentiment analysis, and automated              moderation to keep your community healthy and engaged.",
    titleClassName: "text-vibezly-purple",
    containerClassName: "hover:border-vibezly-purple",
  },
  {
    icon: "📊",
    title: "Member Rankings",
    content:
      "Dynamic leaderboards based on activity, contribution                         quality, and community engagement metrics.",
    titleClassName: "text-vibezly-cyan",
    containerClassName: "hover:border-vibezly-cyan",
  },
  {
    icon: "🏆",
    title: "Token Rewards",
    content:
      "Earn VBZ tokens for quality contributions, helping                         newcomers, and maintaining positive community vibes.",
    titleClassName: "text-vibezly-green",
    containerClassName: "hover:border-vibezly-green",
  },
];
