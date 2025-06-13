import { partnerships } from "@/utils";

export default function Partnership() {
  return (
    <>
      <section id="partnerships" className="bg-vibezly-border/20 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="from-vibezly-purple via-vibezly-cyan to-vibezly-green mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Our Partners
            </h2>
            <p className="mx-auto max-w-3xl text-xl">
              Collaborating with leading blockchain and technology companies
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-5">
            {partnerships.map((partner, index) => (
              <div
                key={partner.name}
                className="to-vibezly-card from-vibezly-dark border-vibezly-border/50 hover:border-vibezly-purple/50 group animate-scale-in flex cursor-pointer flex-col items-center justify-center rounded-lg border bg-linear-[135deg] p-6 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-vibezly-gradient mb-3 flex h-16 w-16 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110">
                  <span className="font-orbitron font-bold text-white">
                    {partner.logo}
                  </span>
                </div>
                <span className="group-hover:text-vibezly-purple text-center text-sm font-medium transition-colors duration-300">
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
