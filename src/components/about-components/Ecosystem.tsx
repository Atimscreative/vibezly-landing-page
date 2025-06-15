import { useRef } from "react";
import { AnimatedBeam } from "../magicui/animated-beam";
import { Bot, MessageSquare, Trophy } from "lucide-react";
import { Card } from "../ui/card";

export default function Ecosystem() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);

  return (
    <>
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
    </>
  );
}
