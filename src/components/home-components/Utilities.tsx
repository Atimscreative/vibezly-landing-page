import { Card } from "../ui/card";


export default function Utilities() {
  return (
    <>
      {/* Utilities Section */}
      <section id="utilities" className="py-20 bg-vibezly-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 text-gradient">
              Core Utilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Powerful features designed to enhance your crypto community
              experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="group cursor-pointer">
                <Card className="bg-vibezly-card border-border/50 hover:border-primary/50 transition-all duration-300 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-vibezly-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl">🧠</span>
                    </div>
                    <div>
                      <h3 className="font-orbitron font-semibold text-xl mb-2 text-primary">
                        AI Chat Moderation
                      </h3>
                      <p className="text-muted-foreground">
                        Intelligent spam detection, sentiment analysis, and
                        automated moderation to keep your community healthy and
                        engaged.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="group cursor-pointer">
                <Card className="bg-vibezly-card border-border/50 hover:border-accent/50 transition-all duration-300 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-vibezly-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl">📊</span>
                    </div>
                    <div>
                      <h3 className="font-orbitron font-semibold text-xl mb-2 text-accent">
                        Member Rankings
                      </h3>
                      <p className="text-muted-foreground">
                        Dynamic leaderboards based on activity, contribution
                        quality, and community engagement metrics.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="group cursor-pointer">
                <Card className="bg-vibezly-card border-border/50 hover:border-vibezly-green/50 transition-all duration-300 p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-vibezly-gradient rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-xl">🏆</span>
                    </div>
                    <div>
                      <h3 className="font-orbitron font-semibold text-xl mb-2 text-vibezly-green">
                        Token Rewards
                      </h3>
                      <p className="text-muted-foreground">
                        Earn VBZ tokens for quality contributions, helping
                        newcomers, and maintaining positive community vibes.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            <div className="relative">
              <div className="bg-vibezly-gradient rounded-2xl p-8 text-center animate-pulse-slow">
                <h3 className="font-orbitron font-bold text-2xl text-white mb-4">
                  Live Community Stats
                </h3>
                <div className="grid grid-cols-2 gap-4 text-white">
                  <div>
                    <div className="text-3xl font-bold">15.2K</div>
                    <div className="text-sm opacity-80">Active Members</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-sm opacity-80">Satisfaction Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">2.4M</div>
                    <div className="text-sm opacity-80">VBZ Distributed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">450+</div>
                    <div className="text-sm opacity-80">Communities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
