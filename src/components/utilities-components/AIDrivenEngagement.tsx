import { Bot, MessageSquare, Shield, TrendingUp } from "lucide-react";

export default function AIDrivenEngagement() {
  return (
    <>
      <section className="px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2
              data-aos="fade-up"
              className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl"
            >
              AI That Understands Your Vibes
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mx-auto max-w-4xl text-xl"
            >
              Vibezly's AI tracks real conversations, filters spam, and scores
              engagement based on quality, relevance, and sentiment. From NLP
              message scoring to image recognition on memes, your group activity
              is intelligently analyzed in real-time.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl items-center gap-6 lg:grid-cols-2">
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-vibezly-purple/50 flex items-center gap-4 rounded-[10px] border bg-linear-[135deg] p-6 duration-300"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
                <TrendingUp className="text-vibezly-purple h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  AI Sentiment Analysis
                </h3>
                <p className="">Real-time bullish/bearish/neutral detection</p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-vibezly-cyan/50 flex items-center gap-4 rounded-[10px] border bg-linear-[135deg] p-6 duration-300"
            >
              <div className="bg-vibezly-cyan/20 flex h-12 w-12 items-center justify-center rounded-full">
                <Shield className="text-vibezly-cyan h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Spam & Flood Detection
                </h3>
                <p className="">Advanced NLP protects your community</p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-vibezly-green/50 flex items-center gap-4 rounded-[10px] border bg-linear-[135deg] p-6 duration-300"
            >
              <div className="bg-vibezly-green/20 flex h-12 w-12 items-center justify-center rounded-full">
                <Bot className="text-vibezly-green h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Smart Persona Replies
                </h3>
                <p className="">Context-aware AI responses</p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              data-aos-delay="500"
              className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 flex items-center gap-4 rounded-[10px] border bg-linear-[135deg] p-6 duration-300 hover:border-yellow-400/50"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-500/20">
                <MessageSquare className="h-6 w-6 text-yellow-400" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">
                  Message & Tweet Tracking
                </h3>
                <p className="">Comprehensive activity monitoring</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
