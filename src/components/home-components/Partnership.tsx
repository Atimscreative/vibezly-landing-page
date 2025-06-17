import { partnerships } from "@/utils";
import { Marquee } from "../magicui/marquee";

export default function Partnership() {
  return (
    <>
      <section id="partnerships" className="bg-vibezly-border/20 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2
              data-aos="fade-up"
              className="from-vibezly-purple via-vibezly-cyan to-vibezly-green mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
            >
              Our Partners
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="50"
              className="mx-auto max-w-3xl text-xl"
            >
              Collaborating with leading blockchain and technology companies
            </p>
          </div>

          <div className="relative">
            <Marquee>
              <div className="flex gap-5">
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
            </Marquee>

            <div className="from-[#121721] via-[#121721] pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-[#121721] via-[#121721] pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </div>
      </section>
    </>
  );
}
