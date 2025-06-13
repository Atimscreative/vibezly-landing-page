import { roadmapItems } from "@/utils";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

export default function Roadmap() {
  return (
    <>
      {/* Roadmap Section */}
      <section id="roadmap" className="bg-vibezly-dark/50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl">
              Development Roadmap
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
              Our journey to revolutionize crypto community engagement
            </p>
          </div>

          <div className="relative">
            <div className="from-vibezly-purple via-vibezly-cyan absolute left-1/2 -z-10 h-full w-1 -translate-x-1/2 transform bg-linear-90"></div>
            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <div
                  key={item.phase}
                  className={`flex w-full items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } animate-scale-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                    }`}
                  >
                    <Card className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-primary/50 items-end bg-linear-[135deg] p-6 transition-all duration-300">
                      <Badge
                        className={cn(
                          `mb-3 border-0 text-white`,
                          item.status === "completed"
                            ? "bg-vibezly-green text-vibezly-dark"
                            : item.status === "current"
                              ? "bg-vibezly-cyan text-vibezly-dark"
                              : "bg-vibezly-purple",
                        )}
                      >
                        {item.phase}
                      </Badge>
                      <h3 className="font-orbitron mb-0 text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="">{item.description}</p>
                    </Card>
                  </div>
                  <div className="hidden w-2/12 justify-center md:flex">
                    <div
                      className={`h-6 w-6 rounded-full border-4 ${
                        item.status === "completed"
                          ? "bg-vibezly-green border-vibezly-green"
                          : item.status === "current"
                            ? "bg-vibezly-purple border-vibezly-purple animate-pulse-slow"
                            : "border-gray-600 bg-gray-600"
                      }`}
                    ></div>
                  </div>
                  {/* <div className="w-5/12"></div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
