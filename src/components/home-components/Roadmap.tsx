import { roadmapItems } from "@/utils";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { CheckCircle } from "lucide-react";

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
            <div
              data-aos="fade"
              data-aos-delay="300"
              className="from-vibezly-purple via-vibezly-cyan absolute left-1/2 -z-10 h-full w-1 -translate-x-1/2 transform bg-linear-90"
            ></div>
            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <div
                  key={item.phase}
                  className={cn(
                    `animate-scale-in flex w-full items-center`,
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse",
                  )}
                >
                  <div
                    className={`relative w-full md:w-5/12 ${
                      index % 2 === 0
                        ? "px-0 text-center md:text-right lg:pr-8"
                        : "px-0 text-center md:text-left lg:pl-8"
                    }`}
                  >
                    <Card
                      data-aos="fade-up"
                      data-aos-delay={(index + 1) * 200}
                      className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-primary/50 items-center gap-3 bg-linear-[135deg] p-6 transition-all duration-300 md:items-end"
                    >
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
                      <h3 className="font-orbitron text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm">{item.description}</p>
                    </Card>

                    {item.status === "completed" && (
                      <div
                        data-aos="zoom-in"
                        data-aos-delay={(index + 1) * 200}
                        className={cn(
                          `text-vibezly-dark absolute top-0 left-0 z-10 size-8 rounded-full border-4 md:static md:hidden`,
                          item.status === "completed"
                            ? "bg-vibezly-green border-vibezly-green"
                            : item.status === "current"
                              ? "bg-vibezly-cyan border-vibezly-cyan"
                              : "border-vibezly-purple bg-vibezly-purple",
                        )}
                      >
                        <CheckCircle />
                      </div>
                    )}
                  </div>
                  <div className="hidden w-2/12 justify-center md:flex">
                    <div
                      data-aos="zoom-in"
                      data-aos-delay={(index + 1) * 200}
                      className={cn(
                        `text-vibezly-dark size-8 rounded-full border-4`,
                        item.status === "completed"
                          ? "bg-vibezly-green border-vibezly-green"
                          : item.status === "current"
                            ? "bg-vibezly-cyan border-vibezly-cyan"
                            : "border-vibezly-purple bg-vibezly-purple",
                      )}
                    >
                      {item.status === "completed" && <CheckCircle />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
