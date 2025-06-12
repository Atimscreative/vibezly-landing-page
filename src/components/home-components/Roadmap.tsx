import { roadmapItems } from "@/utils";
import { Card } from "../ui/card";
import { Badge } from "lucide-react";

export default function Roadmap() {
  return (
    <>
      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-vibezly-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 text-gradient">
              Development Roadmap
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our journey to revolutionize crypto community engagement
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-vibezly-gradient"></div>
            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <div
                  key={item.phase}
                  className={`flex items-center ${
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  } animate-scale-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className={`w-5/12 ${
                      index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"
                    }`}
                  >
                    <Card className="bg-vibezly-card border-border/50 hover:border-primary/50 transition-all duration-300 p-6">
                      <Badge
                        className={`mb-3 ${
                          item.status === "completed"
                            ? "bg-vibezly-green"
                            : item.status === "current"
                            ? "bg-vibezly-gradient"
                            : "bg-gray-600"
                        } text-white`}
                      >
                        {item.phase}
                      </Badge>
                      <h3 className="font-orbitron font-semibold text-xl mb-3">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </Card>
                  </div>
                  <div className="w-2/12 flex justify-center">
                    <div
                      className={`w-6 h-6 rounded-full border-4 ${
                        item.status === "completed"
                          ? "bg-vibezly-green border-vibezly-green"
                          : item.status === "current"
                          ? "bg-vibezly-purple border-vibezly-purple animate-pulse-slow"
                          : "bg-gray-600 border-gray-600"
                      }`}
                    ></div>
                  </div>
                  <div className="w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
