import { personas } from "@/utils";
import { Card } from "../ui/card";
import { colorClassMap, personaColors } from "@/utils/helper";
import { ShineBorder } from "../magicui/shine-border";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { useNavigate } from "react-router";

export default function PersonaShowcase() {
  const navigate = useNavigate();

  return (
    <>
      <section className="bg-vibezly-dark/50 py-20">
        <div className="mx-auto max-w-5xl px-4">
          <div className="mb-16 text-center">
            <h2
              data-aos="fade-down"
              className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl"
            >
              Meet the Vibez
            </h2>
            <p
              data-aos="fade-down"
              data-aos-delay="100"
              className="mx-auto max-w-3xl text-xl"
            >
              Choose your community's personality with our unique AI personas
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {personas.map((persona, index) => (
              <Card
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 100}
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
              data-aos="fade-up"
              data-aos-delay="500"
              onClick={() => navigate("/personas")}
              className="from-vibezly-purple to-vibezly-cyan h-auto bg-linear-60 py-3 transition-opacity text-shadow-md hover:opacity-90"
            >
              Learn More About Personas
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
