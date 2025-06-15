import { features } from "@/utils";
import { Card, CardContent } from "../ui/card";

export default function KeyFeatures() {
  return (
    <>
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
    </>
  );
}
