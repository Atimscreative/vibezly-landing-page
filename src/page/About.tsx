import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bot, MessageSquare, Trophy } from "lucide-react";
import { useNavigate } from "react-router";
import { cn } from "@/lib/utils";
import { colorClassMap, personaColors } from "@/utils/helper";
import { ShineBorder } from "@/components/magicui/shine-border";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { features, personas, problems, solutions } from "@/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { useRef } from "react";

const About = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="pt-28 pb-20">
        {/* <div className="absolute inset-0"></div> */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-orbitron animate-fade-in mb-6 text-4xl font-bold text-white md:text-6xl">
            Welcome to{" "}
            <AnimatedGradientText colorFrom="#7b00ff" colorTo="#00d1ff">
              Vibezly
            </AnimatedGradientText>
          </h1>
          <p
            className="animate-fade-in mb-4 text-xl text-gray-200 md:text-2xl"
            style={{ animationDelay: "0.2s" }}
          >
            Powering the Future of Crypto Communities
          </p>
          <div
            className="animate-fade-in mx-auto max-w-4xl space-y-4"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-lg text-gray-300">
              Vibezly is a Telegram bot that brings structure, fun, and
              transparency to Web3 communities.
            </p>
            <p className="text-lg text-gray-300">
              Through AI, gamification, and decentralized tools, Vibezly
              transforms chats into vibrant ecosystems.
            </p>
          </div>
        </div>
      </section>

      {/* Problem vs Solution Section */}
      <section className="hidden py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Problems */}
            <div className="animate-fade-in">
              <h2 className="font-orbitron mb-8 text-3xl font-bold text-red-400">
                Why Crypto Communities Struggle
              </h2>
              <div className="space-y-6">
                {problems.map((problem, index) => (
                  <div key={index} className="group flex items-start space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-400/10 transition-colors group-hover:bg-red-400/20">
                      <problem.icon className="h-5 w-5 text-red-400" />
                    </div>
                    <p className="group-hover:text-foreground transition-colors">
                      {problem.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Solutions */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-orbitron text-vibezly-green mb-8 text-3xl font-bold">
                How Vibezly Fixes It
              </h2>
              <div className="space-y-6">
                {solutions.map((solution, index) => (
                  <div key={index} className="group flex items-start space-x-4">
                    <div className="bg-vibezly-green/10 group-hover:bg-vibezly-green/20 flex h-10 w-10 items-center justify-center rounded-lg transition-colors">
                      <solution.icon className="text-vibezly-green h-5 w-5" />
                    </div>
                    <p className="group-hover:text-foreground transition-colors">
                      {solution.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="bg-vibezly-dark/50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl">
              Key Features & Benefits
            </h2>
            <p className="mx-auto max-w-3xl text-xl">
              Powerful tools designed to transform your crypto community
              experience
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="sm:odd:from-vibezly-card from-vibezly-card to-vibezly-dark/0 sm:odd:to-vibezly-dark/0 group animate-scale-in sm:even:from-vibezly-dark/0 sm:even:to-vibezly-card border-0 bg-transparent bg-linear-180 from-0% to-50% shadow-none transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="from-vibezly-purple drop-shadow-glow-cyan/30 via-vibezly-cyan to-vibezly-green mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-210 transition-transform duration-300 group-hover:scale-110">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-orbitron mb-3 text-lg font-semibold text-white transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm transition-colors">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ecosystem Infographic */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl">
              How Vibezly Connects the Dots
            </h2>
            <p className="mx-auto max-w-3xl text-xl">
              A complete ecosystem that transforms chat activity into valuable
              insights and rewards
            </p>
          </div>

          <div className="relative mx-auto max-w-6xl">
            <div
              ref={containerRef}
              className="grid grid-cols-1 items-center gap-8 md:grid-cols-3"
            >
              <Card
                ref={div1Ref}
                className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 animate-scale-in z-10 mx-auto w-[80%] gap-0 bg-linear-30 p-6 text-center min-[36rem]:max-w-sm md:w-full"
              >
                <MessageSquare className="text-vibezly-purple mx-auto mb-4 h-12 w-12" />
                <h3 className="font-orbitron text-vibezly-purple mb-2 font-semibold">
                  Telegram Chat Activity
                </h3>
                <p className="text-sm">Messages, reactions, engagement</p>
              </Card>

              <Card
                ref={div2Ref}
                className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 animate-scale-in z-10 mx-auto w-[80%] gap-0 bg-linear-30 p-6 text-center min-[36rem]:max-w-sm md:w-full"
                style={{ animationDelay: "0.4s" }}
              >
                <Bot className="text-vibezly-cyan mx-auto mb-4 h-12 w-12" />
                <h3 className="font-orbitron text-vibezly-cyan mb-2 font-semibold">
                  AI & Sentiment Engine
                </h3>
                <p className="text-sm">Analysis and processing</p>
              </Card>

              <Card
                ref={div3Ref}
                className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 animate-scale-in z-10 mx-auto w-[80%] gap-0 bg-linear-30 p-6 text-center min-[36rem]:max-w-sm md:w-full"
                style={{ animationDelay: "0.8s" }}
              >
                <Trophy className="text-vibezly-green mx-auto mb-4 h-12 w-12" />
                <h3 className="font-orbitron text-vibezly-green mb-2 font-semibold">
                  Rewards & Recognition
                </h3>
                <p className="text-sm">VBZ tokens and leaderboards</p>
              </Card>

              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div1Ref}
                toRef={div2Ref}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={div2Ref}
                toRef={div3Ref}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Personas Showcase */}
      <section className="bg-vibezly-dark/50 py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-16 text-center">
            <h2 className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl">
              Meet the Vibez
            </h2>
            <p className="mx-auto max-w-3xl text-xl">
              Choose your community's personality with our unique AI personas
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {personas.map((persona, index) => (
              <Card
                key={persona.id}
                className={cn(
                  "group animate-scale-in relative cursor-pointer border-0 bg-transparent bg-linear-180 p-6 text-center transition-all duration-300 min-[62rem]:grid min-[62rem]:grid-cols-[96px_1fr]",
                  (colorClassMap as any)[persona.color].bgFrom,
                  (colorClassMap as any)[persona.color].bgTo,
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ShineBorder
                  duration={15}
                  shineColor={(personaColors as any)[persona.color]}
                />
                <figure
                  className={cn(
                    "mx-auto size-24 rounded-full min-[62rem]:mx-0",
                    `bg-gradient-to-br`,
                    (colorClassMap as any)[persona.color].bgFrom,
                    (colorClassMap as any)[persona.color].bgTo,
                  )}
                >
                  <img
                    src={persona.avatar}
                    alt={persona.name}
                    width={500}
                    height={500}
                    className="size-full rounded-full object-cover object-center"
                  />
                </figure>
                <div className="grid gap-3 min-[62rem]:gap-0 min-[62rem]:text-left">
                  <h4
                    className={cn(
                      `font-orbitron mb-2 text-lg font-bold`,
                      (colorClassMap as any)[persona.color].text,
                    )}
                  >
                    {persona.name}
                  </h4>
                  <Badge
                    className={cn(
                      "mx-auto mb-3 rounded-full min-[62rem]:mx-0",
                      (colorClassMap as any)[persona.color].text,
                      (colorClassMap as any)[persona.color].border,
                      (colorClassMap as any)[persona.color].bgSoft,
                    )}
                  >
                    {persona.style}
                  </Badge>
                  <p className="text-sm">{persona.purpose}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button
              onClick={() => navigate("/personas")}
              className="from-vibezly-purple to-vibezly-cyan h-auto bg-linear-60 py-3 transition-opacity text-shadow-md hover:opacity-90"
            >
              Learn More About Personas
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="border-vibezly-border border-t py-20">
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center">
          <h2 className="font-orbitron mb-6 text-4xl leading-[130%] font-bold text-balance text-white md:text-5xl">
            Start Building a Healthier, Hype-Powered Community
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-200">
            Built for degens. Designed for teams. Driven by AI.
          </p>
          <div className="flex flex-col justify-center gap-4 md:flex-row">
            <Button
              size="lg"
              className="border border-white/20 bg-white/10 text-white backdrop-blur-md hover:bg-white/20"
            >
              Explore the Mini App
            </Button>
            <Button
              size="lg"
              className="bg-vibezly-gradient transition-opacity hover:opacity-90"
            >
              Try Vibezly Now
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
