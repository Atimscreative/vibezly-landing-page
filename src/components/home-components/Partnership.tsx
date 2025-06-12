import { partnerships } from "@/utils";

export default function Partnership() {
  return (
    <>
      <section id="partnerships" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 text-gradient">
              Our Partners
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Collaborating with leading blockchain and technology companies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partnerships.map((partner, index) => (
              <div
                key={partner.name}
                className="flex flex-col items-center justify-center p-6 bg-vibezly-card rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-vibezly-gradient rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                  <span className="font-orbitron font-bold text-white">
                    {partner.logo}
                  </span>
                </div>
                <span className="text-sm font-medium text-center group-hover:text-primary transition-colors duration-300">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
