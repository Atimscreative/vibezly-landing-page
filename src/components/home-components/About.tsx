import { Card, CardContent } from "../ui/card";

export default function About() {
  return (
    <>
      <section id="about" className="bg-vibezly-dark py-20">
        <div className="container mx-auto px-4">
          <div className="animate-fade-in mb-16 text-center">
            <h2 className="from-vibezly-purple via-vibezly-cyan to-vibezly-green mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              About Vibezly
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              We're building the future of crypto community engagement through
              AI-powered automation, decentralized governance, and gamified
              reward systems.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-vibezly-purple/50 bg-linear-[135deg] from-0% to-100% transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="drop-shadow-glow/50 from-vibezly-purple via-vibezly-cyan to-vibezly-green mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-[135deg]">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-vibezly-purple mb-3 text-xl font-semibold">
                  AI-Driven Insights
                </h3>
                <p className="text-neutral-400">
                  Advanced AI analyzes chat patterns, sentiment, and engagement
                  to provide personalized community experiences.
                </p>
              </CardContent>
            </Card>

            <Card
              className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-vibezly-cyan/50 bg-linear-[135deg] from-0% to-100% transition-all duration-300"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-6 text-center">
                <div className="drop-shadow-glow-cyan/50 from-vibezly-purple via-vibezly-cyan to-vibezly-green mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-[135deg]">
                  <span className="text-2xl">🗳️</span>
                </div>
                <h3 className="text-vibezly-cyan mb-3 text-xl font-semibold">
                  Decentralized Governance
                </h3>
                <p className="text-muted-foreground">
                  Community-driven decision making through transparent voting
                  mechanisms and proposal systems.
                </p>
              </CardContent>
            </Card>

            <Card
              className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-vibezly-green/50 bg-linear-[135deg] from-0% to-100% transition-all duration-300"
              style={{ animationDelay: "0.4s" }}
            >
              <CardContent className="p-6 text-center">
                <div className="drop-shadow-glow-green/50 from-vibezly-purple via-vibezly-cyan to-vibezly-green mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-[135deg]">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="text-vibezly-green mb-3 text-xl font-semibold">
                  Gamified Rewards
                </h3>
                <p className="text-muted-foreground">
                  Earn XP, climb leaderboards, and receive VBZ tokens for active
                  community participation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

function AboutCard() {
  return (
    <Card className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-vibezly-purple/50 bg-linear-[135deg] from-0% to-100% transition-all duration-300">
      <CardContent className="p-6 text-center">
        <div className="drop-shadow-glow from-vibezly-purple via-vibezly-cyan to-vibezly-green mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-[135deg]">
          <span className="text-2xl">🤖</span>
        </div>
        <h3 className="text-vibezly-purple mb-3 text-xl font-semibold">
          AI-Driven Insights
        </h3>
        <p className="text-neutral-400">
          Advanced AI analyzes chat patterns, sentiment, and engagement to
          provide personalized community experiences.
        </p>
      </CardContent>
    </Card>
  );
}
