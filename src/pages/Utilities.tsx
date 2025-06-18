import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Bot,
  Zap,
  Award,
  // TrendingUp,
  Gamepad2,
  Star,
  Settings,
} from "lucide-react";
import UtilitiesHero from "@/components/utilities-components/HeroUtilities";
import AIDrivenEngagement from "@/components/utilities-components/AIDrivenEngagement";
import DecentralizedGovernance from "@/components/utilities-components/DecentralizedGovernance";
import { cn } from "@/lib/utils";
import { Link } from "react-router";
// import { colorClassMap } from "@/utils/helper";
// import { personas } from "@/utils";

const Utilities = () => {
  const [, setSentimentScore] = useState(0);
  // const [activeCommand, setActiveCommand] = useState("");
  // const [leaderboardData] = useState([
  //   { name: "CryptoChad", score: 2840, trend: "up" },
  //   { name: "MoonWalker", score: 2650, trend: "up" },
  //   { name: "DiamondHands", score: 2420, trend: "down" },
  // ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSentimentScore((prev) => (prev + 1) % 101);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // const commands = [
  //   {
  //     cmd: "/dashboard",
  //     action: "Opens mini app with live stats and leaderboard",
  //     demo: "📊 Dashboard loaded!",
  //   },
  //   {
  //     cmd: "/report",
  //     action: "Report toxic users (10 flags = auto-mute)",
  //     demo: "⚠️ User reported! (3/10 flags)",
  //   },
  //   {
  //     cmd: "/leaderboard",
  //     action: "Displays current top contributors",
  //     demo: "🏆 Top Contributors loaded!",
  //   },
  //   {
  //     cmd: "/claim",
  //     action: "DMs to claim contest rewards",
  //     demo: "💰 Rewards sent to DM!",
  //   },
  //   {
  //     cmd: "/vibe_check",
  //     action: "Generates sentiment report",
  //     demo: "📈 Community Sentiment: Bullish!",
  //   },
  // ];

  const coreFeatures = [
    {
      feature: "Message & Tweet Tracking",
      description: "Logs messages, GIFs, stickers & auto-tracks raid tweets",
      status: "Live",
      statusColor: "bg-green-500",
    },
    {
      feature: "Dynamic AI Personas",
      description: "Choose from edgy, sassy, positive, or hype personas",
      status: "Live",
      statusColor: "bg-green-500",
    },
    {
      feature: "Mini App Dashboard",
      description: "Real-time leaderboards and engagement visibility",
      status: "Live",
      statusColor: "bg-green-500",
    },
    {
      feature: "Anti-Spam & Moderation Tools",
      description: "Flood control, rate limiting, auto-mute & DM appeal",
      status: "Live",
      statusColor: "bg-green-500",
    },
    {
      feature: "Gamified Engagement & Contests",
      description: "AI contests with token rewards for quality activity",
      status: "Live",
      statusColor: "bg-green-500",
    },
    {
      feature: "Sentiment Analysis & Reports",
      description: "Group sentiment + influencer/toxic behavior tracking",
      status: "Rolling Out",
      statusColor: "bg-yellow-500",
    },
    {
      feature: "Advanced Analytics & Integrations",
      description: "Profile stats, DEX Screener, wallet connect, token-gating",
      status: "Rolling Out",
      statusColor: "bg-yellow-500",
    },
    {
      feature: "AI Moderation & Smart Rewards",
      description: "NLP-based spam detection, smart persona replies",
      status: "In Progress",
      statusColor: "bg-blue-500",
    },
  ];

  // const scoringBreakdown = [
  //   { category: "Messages", percentage: 20, color: "bg-purple-500" },
  //   { category: "Sentiment", percentage: 15, color: "bg-cyan-500" },
  //   { category: "Conversations", percentage: 15, color: "bg-green-500" },
  //   { category: "Replies", percentage: 12, color: "bg-yellow-500" },
  //   { category: "Raids", percentage: 10, color: "bg-pink-500" },
  //   { category: "Reactions", percentage: 10, color: "bg-orange-500" },
  //   { category: "Competitor Engagement", percentage: 8, color: "bg-blue-500" },
  //   { category: "Other", percentage: 10, color: "bg-gray-500" },
  // ];

  return (
    <>
      <UtilitiesHero />
      <AIDrivenEngagement />
      <DecentralizedGovernance />

      {/* Gamified Contests Section */}
      {/* <section className="hidden px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl">
              🎮 Gamified Contests with Real Rewards
            </h2>
            <p className="mx-auto max-w-4xl text-xl">
              Turn your community into an arena of vibes. Weekly or biweekly
              contests score users based on quality contributions, rewarding top
              performers with ETH, USDC, or VBZ.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Contest Scoring Breakdown</h3>
              <div className="space-y-4">
                {scoringBreakdown.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.category}</span>
                      <span className="text-sm">{item.percentage}%</span>
                    </div>
                    <div className="bg-secondary h-3 overflow-hidden rounded-full">
                      <div
                        className={`h-full ${item.color} animate-pulse-slow`}
                        style={{ width: `${item.percentage * 5}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-vibezly-card border-border rounded-xl border p-6">
                <h4 className="mb-4 font-semibold">Featured Commands</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <code className="bg-secondary rounded px-2 py-1">
                      /dashboard
                    </code>
                    <span className="">View stats</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="bg-secondary rounded px-2 py-1">
                      /leaderboard
                    </code>
                    <span className="">See rankings</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="bg-secondary rounded px-2 py-1">
                      /claim
                    </code>
                    <span className="">Get rewards</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-vibezly-card border-border rounded-2xl border p-8">
              <h3 className="mb-6 text-xl font-semibold">Live Leaderboard</h3>
              <div className="space-y-4">
                {leaderboardData.map((user, index) => (
                  <div
                    key={index}
                    className="bg-background/50 flex items-center justify-between rounded-lg p-4"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <div className="font-semibold">{user.name}</div>
                        <div className="text-sm">{user.score} points</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp
                        className={`h-4 w-4 ${user.trend === "up" ? "text-green-400" : "text-red-400"}`}
                      />
                      <Badge
                        variant={
                          user.trend === "up" ? "default" : "destructive"
                        }
                      >
                        {user.trend === "up" ? "+" : "-"}
                        {Math.floor(Math.random() * 100)}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-border mt-6 border-t pt-6">
                <div className="text-center">
                  <p className="mb-3 text-sm">Weekly Contest Prize Pool</p>
                  <div className="text-gradient text-2xl font-bold">
                    $2,500 USDC
                  </div>
                  <p className="mt-1 text-xs">
                    Distributed to top 10 contributors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Core Features Grid */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2
              data-aos="fade-down"
              className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl"
            >
              Core Features — Built for Scale
            </h2>
            <p data-aos="fade-down" data-aos-delay="100" className="text-xl">
              A complete toolset for engaged, high-signal communities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {coreFeatures.map((feature, index) => (
              <Card
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
                key={index}
                className="from-vibezly-card to-vibezly-dark border-vibezly-border hover:border-vibezly-border/50 bg-linear-[135deg] transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-orbitron text-lg text-white">
                      {feature.feature}
                    </CardTitle>
                    <Badge className={`${feature.statusColor} text-white`}>
                      {feature.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-neutral-300">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Command Showcase */}
      {/* <section className="hidden px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl">
              💬 Commands That Keep the Vibes High
            </h2>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="bg-vibezly-card border-border rounded-2xl border p-8">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="mb-6 text-xl font-semibold">
                    Available Commands
                  </h3>
                  {commands.map((cmd, index) => (
                    <div
                      key={index}
                      className={`cursor-pointer rounded-lg border p-4 transition-colors ${
                        activeCommand === cmd.cmd
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setActiveCommand(cmd.cmd)}
                    >
                      <div className="flex items-center justify-between">
                        <code className="bg-secondary rounded px-2 py-1 font-mono text-sm">
                          {cmd.cmd}
                        </code>
                        <Button size="sm" variant="ghost">
                          Try
                        </Button>
                      </div>
                      <p className="mt-2 text-sm">{cmd.action}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-background border-border rounded-xl border p-6">
                  <h3 className="mb-4 text-lg font-semibold">Command Output</h3>
                  {activeCommand ? (
                    <div className="space-y-3">
                      <div className="text-sm">
                        Input:{" "}
                        <code className="bg-secondary rounded px-1 py-0.5">
                          {activeCommand}
                        </code>
                      </div>
                      <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-3">
                        <div className="flex items-center gap-2">
                          <Bot className="h-4 w-4 text-green-400" />
                          <span className="text-sm font-medium">
                            Vibezly Bot
                          </span>
                        </div>
                        <p className="mt-2 text-sm">
                          {
                            commands.find((cmd) => cmd.cmd === activeCommand)
                              ?.demo
                          }
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="py-8 text-center">
                      <Bot className="mx-auto mb-4 h-12 w-12 opacity-50" />
                      <p>Click a command to see the demo output</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* What's Coming Next */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2
              data-aos="fade-down"
              className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl"
            >
              Evolving Utilities
            </h2>
            <p data-aos="fade-down" data-aos-delay="100" className="text-xl">
              Vibezly keeps building. Here's what's rolling out next:
            </p>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Wallet Connect",
                  icon: <Settings className="h-6 w-6" />,
                  status: "Coming Soon",
                },
                {
                  title: "Token-Gated Premium",
                  icon: <Star className="h-6 w-6" />,
                  status: "In Development",
                },
                {
                  title: "Ecosystem Integration",
                  icon: <Zap className="h-6 w-6" />,
                  status: "Planned",
                },
                {
                  title: "Project Token Rewards",
                  icon: <Award className="h-6 w-6" />,
                  status: "Research",
                },
              ].map((item, index) => (
                <Card
                  data-aos="fade-up"
                  data-aos-delay={(index + 1) * 100}
                  key={index}
                  className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 bg-linear-[136deg] text-center"
                >
                  <CardContent className="pt-6">
                    <div className="bg-vibezly-purple/20 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                      <div className={cn("text-vibezly-purple")}>
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <Badge
                      variant="outline"
                      className="rounded-full border-neutral-300/20 bg-neutral-300/10 text-xs text-neutral-300 uppercase"
                    >
                      {item.status}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden px-4 py-20">
        <div className="absolute top-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        <div className="from-vibezly-purple to-vibezly-cyan absolute -top-[202px] left-1/2 size-[279px] -translate-x-1/2 animate-spin rounded-full bg-linear-180 blur-[60px] duration-1000 ease-in"></div>

        <div className="relative z-10 mx-auto max-w-7xl text-center">
          <div className="mx-auto max-w-4xl text-white">
            <h2
              data-aos="fade-down"
              className="font-orbitron mb-4 text-4xl leading-[130%] font-bold md:text-6xl"
            >
              Ready to Engage Smarter?
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mb-8 text-xl opacity-90"
            >
              Plug Vibezly into your Telegram group and watch your community
              thrive.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                data-aos="fade-right"
                data-aos-delay={200}
                to="https://t.me/vibezly_bot"
                target="_blank"
                className="from-vibezly-purple to-vibezly-cyan flex h-auto rounded-md bg-gradient-to-r bg-cover px-6 py-3 text-white transition-opacity text-shadow-sm hover:opacity-90"
              >
                <Bot className="mr-2 h-5 w-5" />
                Add Vibezly
              </Link>

              <Button
                size="lg"
                data-aos="fade-left"
                data-aos-delay={300}
                className="from-vibezly-purple to-vibezly-cyan relative flex h-auto items-center justify-center bg-linear-[135deg] py-3 transition-opacity hover:opacity-90"
              >
                <div className="bg-vibezly-dark absolute top-1/2 left-1/2 h-[90%] w-[97.5%] -translate-1/2 rounded-sm"></div>
                <span className="relative z-10 inline-flex gap-2 text-white">
                  <Gamepad2 className="mr-2 h-5 w-5" />
                  Join a Contest
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Utilities;
