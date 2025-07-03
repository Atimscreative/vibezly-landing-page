import { roadmapPhases } from "@/utils";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { Brain, CircleCheck, Shield, Zap } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { ShineBorder } from "../magicui/shine-border";

const AnimatedTabsContent = motion(TabsContent);

export default function Roadmap() {
  return (
    <>
      {/* Roadmap Section */}
      <section id="roadmap" className="bg-vibezly-dark/50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl"
            >
              Development Roadmap
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mx-auto max-w-3xl text-xl"
            >
              Our journey to revolutionize crypto community engagement
            </p>
          </div>

          <div className="relative">
            <Tabs defaultValue="Phase 1" className="w-full items-center">
              <TabsList className="bg-vibezly-border/70 mb-12 h-auto gap-2 backdrop-blur-lg">
                {roadmapPhases.map((phase) => (
                  <TabsTrigger
                    key={phase.phase + " tab"}
                    className={cn(
                      `rounded-md border-0 px-4 py-2 text-white`,
                      "data-[state=active]:from-vibezly-purple data-[state=active]:via-vibezly-cyan data-[state=active]:to-vibezly-green font-orbitron data-[state=active]:bg-linear-[135deg] data-[state=active]:text-white data-[state=active]:text-shadow-[0_0_3px_rgba(0,0,0,0.5)]",
                    )}
                    value={phase.phase}
                  >
                    {phase.phase}
                  </TabsTrigger>
                ))}
              </TabsList>
              <>
                {roadmapPhases.map((phase, index) => (
                  <AnimatedTabsContent
                    key={phase.phase + " content"}
                    className="relative"
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    value={phase.phase}
                  >
                    <motion.div
                      className={cn(
                        "absolute top-0 left-1/2 h-[80%] w-[80%] -translate-x-1/2 rounded-full bg-gradient-to-b blur-[60px]",
                        phase.status === "upcoming" &&
                          "from-vibezly-purple via-vibezly-cyan to-vibezly-green",
                        phase.status === "completed" &&
                          "from-vibezly-green via-vibezly-cyan to-vibezly-purple",
                        phase.status === "current" &&
                          "from-vibezly-cyan via-vibezly-purple to-vibezly-green",
                      )}
                      initial={{ opacity: 0, scale: 0.98, y: -100 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98, y: -100 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    ></motion.div>
                    <div
                      key={phase.phase}
                      className="relative rounded-xl bg-white/20 p-2 ring-1 ring-white/20 backdrop-blur-3xl ring-inset"
                    >
                      <ShineBorder
                        borderWidth={2}
                        duration={(index + 1) * 10}
                        shineColor={["#7b00ff", "#00d1ff", "#50ff54"]}
                      />
                      <Card className="bg-vibezly-dark rounded-lg p-5 transition-all duration-300 sm:p-8">
                        <div className="mb-6 flex items-center justify-between">
                          <div>
                            <Badge
                              className={cn(
                                `mb-3 border-0 text-white`,
                                phase.status === "completed"
                                  ? "bg-vibezly-green text-vibezly-dark"
                                  : phase.status === "current"
                                    ? "bg-vibezly-cyan text-vibezly-dark"
                                    : "bg-vibezly-purple",
                              )}
                            >
                              {phase.phase}
                            </Badge>
                            <h3 className="font-orbitron mb-2 text-lg font-bold text-white sm:text-2xl md:text-3xl">
                              {phase.title}
                            </h3>
                            <p className="text-sm sm:text-lg">
                              {phase.objective}
                            </p>
                          </div>
                          <div
                            className={cn(
                              `hidden h-16 w-16 items-center justify-center rounded-full md:flex`,
                              phase.status === "current"
                                ? "bg-vibezly-gradient glow"
                                : phase.status === "upcoming"
                                  ? "bg-vibezly-cyan/20 glow-cyan"
                                  : "bg-gray-600/20",

                              phase.status === "completed"
                                ? "bg-vibezly-green/20 text-vibezly-green"
                                : phase.status === "current"
                                  ? "bg-vibezly-cyan/20 text-vibezly-cyan"
                                  : "bg-vibezly-purple/20 text-vibezly-purple",
                            )}
                          >
                            {phase.status === "completed" && (
                              <Zap className={cn("h-8 w-8")} />
                            )}
                            {phase.status === "current" && (
                              <Brain className={cn("h-8 w-8")} />
                            )}
                            {phase.status === "upcoming" && (
                              <Shield className={cn("h-8 w-8")} />
                            )}
                          </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                          {phase.features.map(
                            (feature, featureIndex: number) => (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.98, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.98, y: 20 }}
                                transition={{
                                  duration: 0.6,
                                  delay: featureIndex * 0.15,
                                  ease: "easeInOut",
                                }}
                                key={feature.name + featureIndex}
                                className="group cursor-pointer"
                              >
                                <Card className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 h-full bg-linear-[135deg] p-4 transition-all duration-300">
                                  <div className="flex items-start space-x-3">
                                    <CircleCheck
                                      className={cn(
                                        "mt-1 h-5 w-5 flex-shrink-0",
                                        phase.status === "completed"
                                          ? "text-vibezly-green"
                                          : phase.status === "current"
                                            ? "text-vibezly-cyan"
                                            : "text-vibezly-purple",
                                      )}
                                    />
                                    <div>
                                      <h4 className="mb-2 text-sm font-semibold">
                                        {feature.name}
                                      </h4>
                                      <p className="text-xs transition-colors group-hover:opacity-80">
                                        {feature.description}
                                      </p>
                                    </div>
                                  </div>
                                </Card>
                              </motion.div>
                            ),
                          )}
                        </div>
                      </Card>
                    </div>
                  </AnimatedTabsContent>
                ))}
              </>
            </Tabs>
          </div>
        </div>
      </section>
    </>
  );
}
