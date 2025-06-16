import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Bot,
  Users,
  Zap,
  Award,
  MessageSquare,
  TrendingUp,
  Shield,
  Gamepad2,
  Star,
  CheckCircle,
  Clock,
  Settings,
} from "lucide-react";

const Utilities = () => {
  const [sentimentScore, setSentimentScore] = useState(0);
  const [activeCommand, setActiveCommand] = useState("");
  const [leaderboardData, setLeaderboardData] = useState([
    { name: "CryptoChad", score: 2840, trend: "up" },
    { name: "MoonWalker", score: 2650, trend: "up" },
    { name: "DiamondHands", score: 2420, trend: "down" },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSentimentScore((prev) => (prev + 1) % 101);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const commands = [
    {
      cmd: "/dashboard",
      action: "Opens mini app with live stats and leaderboard",
      demo: "📊 Dashboard loaded!",
    },
    {
      cmd: "/report",
      action: "Report toxic users (10 flags = auto-mute)",
      demo: "⚠️ User reported! (3/10 flags)",
    },
    {
      cmd: "/leaderboard",
      action: "Displays current top contributors",
      demo: "🏆 Top Contributors loaded!",
    },
    {
      cmd: "/claim",
      action: "DMs to claim contest rewards",
      demo: "💰 Rewards sent to DM!",
    },
    {
      cmd: "/vibe_check",
      action: "Generates sentiment report",
      demo: "📈 Community Sentiment: Bullish!",
    },
  ];

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

  const scoringBreakdown = [
    { category: "Messages", percentage: 20, color: "bg-purple-500" },
    { category: "Sentiment", percentage: 15, color: "bg-cyan-500" },
    { category: "Conversations", percentage: 15, color: "bg-green-500" },
    { category: "Replies", percentage: 12, color: "bg-yellow-500" },
    { category: "Raids", percentage: 10, color: "bg-pink-500" },
    { category: "Reactions", percentage: 10, color: "bg-orange-500" },
    { category: "Competitor Engagement", percentage: 8, color: "bg-blue-500" },
    { category: "Other", percentage: 10, color: "bg-gray-500" },
  ];

  return (
    <div className="bg-background text-foreground min-h-screen">
      {/* Hero Section */}
      <section className="bg-moving-gradient relative overflow-hidden px-4 py-20">
        <div className="relative z-10 container mx-auto text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="font-orbitron animate-fade-in mb-6 text-5xl font-bold text-white md:text-7xl">
              Supercharge Your Telegram Community
            </h1>
            <p className="animate-fade-in mb-8 text-xl text-white/90 md:text-2xl">
              AI tools, gamified rewards, and decentralized moderation — all in
              one bot.
            </p>
            <div className="animate-fade-in flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white font-semibold text-black hover:bg-white/90"
              >
                <Bot className="mr-2 h-5 w-5" />
                Add Vibezly to Telegram
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                View Dashboard
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Animation Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="animate-float absolute top-20 left-10">
            <MessageSquare className="h-8 w-8 text-white/20" />
          </div>
          <div
            className="animate-float absolute top-32 right-20"
            style={{ animationDelay: "1s" }}
          >
            <Star className="h-6 w-6 text-white/20" />
          </div>
          <div
            className="animate-float absolute bottom-20 left-1/4"
            style={{ animationDelay: "2s" }}
          >
            <Zap className="h-10 w-10 text-white/20" />
          </div>
        </div>
      </section>

      {/* AI-Driven Engagement Section */}
      <section className="bg-background px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl">
              🤖 AI That Understands Your Vibes
            </h2>
            <p className="text-muted-foreground mx-auto max-w-4xl text-xl">
              Vibezly's AI tracks real conversations, filters spam, and scores
              engagement based on quality, relevance, and sentiment. From NLP
              message scoring to image recognition on memes, your group activity
              is intelligently analyzed in real-time.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
                    <TrendingUp className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      AI Sentiment Analysis
                    </h3>
                    <p className="text-muted-foreground">
                      Real-time bullish/bearish/neutral detection
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/20">
                    <Shield className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Spam & Flood Detection
                    </h3>
                    <p className="text-muted-foreground">
                      Advanced NLP protects your community
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                    <Bot className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Smart Persona Replies
                    </h3>
                    <p className="text-muted-foreground">
                      Context-aware AI responses
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/20">
                    <MessageSquare className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Message & Tweet Tracking
                    </h3>
                    <p className="text-muted-foreground">
                      Comprehensive activity monitoring
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-vibezly-card border-border rounded-2xl border p-8">
              <h3 className="mb-6 text-xl font-semibold">
                Live Sentiment Analysis
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Community Sentiment</span>
                  <Badge
                    className={
                      sentimentScore > 60
                        ? "bg-green-500"
                        : sentimentScore > 40
                          ? "bg-yellow-500"
                          : "bg-red-500"
                    }
                  >
                    {sentimentScore > 60
                      ? "Bullish"
                      : sentimentScore > 40
                        ? "Neutral"
                        : "Bearish"}
                  </Badge>
                </div>
                <Progress value={sentimentScore} className="h-3" />
                <div className="text-muted-foreground text-sm">
                  Score: {sentimentScore}/100 (Real-time analysis)
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="bg-background/50 rounded-lg border-l-4 border-green-500 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500 text-xs font-bold">
                      SS
                    </div>
                    <span className="font-semibold">Sunny Sam</span>
                    <Badge variant="secondary">AI</Badge>
                  </div>
                  <p className="text-sm">
                    Great vibes today! Love seeing everyone engaged 🌟
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decentralized Governance Section */}
      <section className="bg-secondary/30 px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl">
              🗳️ Community-Controlled Moderation
            </h2>
            <p className="text-muted-foreground mx-auto max-w-4xl text-xl">
              Let your community moderate itself. With the /report command and
              an auto-mute threshold, users can flag bad behavior. All actions
              are logged, and appeals are managed privately via DM.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="bg-vibezly-card border-border rounded-2xl border p-8">
              <h3 className="mb-6 text-xl font-semibold">Moderation Demo</h3>

              <div className="space-y-4">
                <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-xs font-bold">
                      TX
                    </div>
                    <span className="font-semibold text-red-400">
                      ToxicUser
                    </span>
                  </div>
                  <p className="mb-3 text-sm">
                    This project is a scam! Don't buy!
                  </p>
                  <Button size="sm" variant="destructive" className="text-xs">
                    /report ToxicUser
                  </Button>
                </div>

                <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-yellow-400" />
                    <span className="font-semibold">Vibezly Bot</span>
                  </div>
                  <p className="mt-2 text-sm">
                    User reported! Current flags: 7/10
                    <br />
                    <span className="text-yellow-400">
                      3 more reports needed for auto-mute
                    </span>
                  </p>
                </div>

                <div className="rounded-lg border border-green-500/20 bg-green-500/10 p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-400" />
                    <span className="font-semibold">Auto-Moderation</span>
                  </div>
                  <p className="mt-2 text-sm">
                    User auto-muted after 10 reports
                    <br />
                    <Button
                      size="sm"
                      variant="outline"
                      className="mt-2 text-xs"
                    >
                      Appeal via DM
                    </Button>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Community-Powered /report
                    </h3>
                    <p className="text-muted-foreground">
                      Decentralized flagging system
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20">
                    <Shield className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Auto-Mute Threshold
                    </h3>
                    <p className="text-muted-foreground">
                      Automatic action after 10 reports
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                    <MessageSquare className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">DM-Based Appeals</h3>
                    <p className="text-muted-foreground">
                      Private appeal process
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Transparency Audit Trail
                    </h3>
                    <p className="text-muted-foreground">
                      All actions logged and traceable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gamified Contests Section */}
      <section className="bg-background px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl">
              🎮 Gamified Contests with Real Rewards
            </h2>
            <p className="text-muted-foreground mx-auto max-w-4xl text-xl">
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
                      <span className="text-muted-foreground text-sm">
                        {item.percentage}%
                      </span>
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
                    <span className="text-muted-foreground">View stats</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="bg-secondary rounded px-2 py-1">
                      /leaderboard
                    </code>
                    <span className="text-muted-foreground">See rankings</span>
                  </div>
                  <div className="flex justify-between">
                    <code className="bg-secondary rounded px-2 py-1">
                      /claim
                    </code>
                    <span className="text-muted-foreground">Get rewards</span>
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
                        <div className="text-muted-foreground text-sm">
                          {user.score} points
                        </div>
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
                  <p className="text-muted-foreground mb-3 text-sm">
                    Weekly Contest Prize Pool
                  </p>
                  <div className="text-gradient text-2xl font-bold">
                    $2,500 USDC
                  </div>
                  <p className="text-muted-foreground mt-1 text-xs">
                    Distributed to top 10 contributors
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Grid */}
      <section className="bg-secondary/30 px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl">
              🔧 Core Features — Built for Scale
            </h2>
            <p className="text-muted-foreground text-xl">
              A complete toolset for engaged, high-signal communities.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {coreFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-vibezly-card border-border hover:border-primary/50 transition-colors"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{feature.feature}</CardTitle>
                    <Badge className={`${feature.statusColor} text-white`}>
                      {feature.status}
                    </Badge>
                  </div>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Command Showcase */}
      <section className="bg-background px-4 py-20">
        <div className="container mx-auto">
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
                      <p className="text-muted-foreground mt-2 text-sm">
                        {cmd.action}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="bg-background border-border rounded-xl border p-6">
                  <h3 className="mb-4 text-lg font-semibold">Command Output</h3>
                  {activeCommand ? (
                    <div className="space-y-3">
                      <div className="text-muted-foreground text-sm">
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
                    <div className="text-muted-foreground py-8 text-center">
                      <Bot className="mx-auto mb-4 h-12 w-12 opacity-50" />
                      <p>Click a command to see the demo output</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Coming Next */}
      <section className="bg-secondary/30 px-4 py-20">
        <div className="container mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl">
              🔮 Evolving Utilities
            </h2>
            <p className="text-muted-foreground text-xl">
              Vibezly keeps building. Here's what's rolling out next:
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
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
                  key={index}
                  className="bg-vibezly-card border-border text-center"
                >
                  <CardContent className="pt-6">
                    <div className="bg-primary/20 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full">
                      <div className="text-primary">{item.icon}</div>
                    </div>
                    <h3 className="mb-2 font-semibold">{item.title}</h3>
                    <Badge variant="outline" className="text-xs">
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
      <section className="bg-moving-gradient px-4 py-20">
        <div className="container mx-auto text-center">
          <div className="mx-auto max-w-4xl text-white">
            <h2 className="font-orbitron mb-6 text-4xl font-bold md:text-6xl">
              Ready to Engage Smarter?
            </h2>
            <p className="mb-8 text-xl opacity-90">
              Plug Vibezly into your Telegram group and watch your community
              thrive.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-white font-semibold text-black hover:bg-white/90"
              >
                <Bot className="mr-2 h-5 w-5" />
                Add Vibezly
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                <TrendingUp className="mr-2 h-5 w-5" />
                Explore Leaderboard
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black"
              >
                <Gamepad2 className="mr-2 h-5 w-5" />
                Join a Contest
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Utilities;
