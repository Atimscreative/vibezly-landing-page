import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
import Bg from "@/assets/particles.gif";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import { ShineBorder } from "@/components/magicui/shine-border";
import {
  colorClassMap,
  personaColors,
  type PersonaColor,
} from "@/utils/helper";
import { thePersonas } from "@/utils";

export default function AIPersonas() {
  console.log(Bg);
  return (
    <>
      <>
        {/* Hero Section */}
        <section
          id="hero"
          className="relative overflow-hidden bg-[linear-gradient(to_right,#0f131aee,#0f131acc),url('/src/assets/particles.gif')] bg-cover bg-no-repeat py-20 pt-36"
        >
          <div className="mx-auto max-w-7xl px-4 text-center">
            <div className="mx-auto max-w-4xl">
              <h1
                data-aos="fade-down"
                className="font-orbitron mb-6 text-5xl leading-[130%] font-bold text-white"
              >
                Multiple{" "}
                <AnimatedGradientText
                  // colorFrom="#7b00ff"
                  colorFrom="#00d1ff"
                  colorTo="#50ff54"
                >
                  Personas
                </AnimatedGradientText>
                ,
                <br /> One Vibezly Engine
              </h1>
              <p
                data-aos="fade-down"
                data-aos-delay="100"
                className="mb-8 text-xl text-white/90"
              >
                Tailor your community's energy with AI-powered personas built
                for every mood. Whether it's hype, chaos, support, or savage
                truth, Vibezly's got your back.
              </p>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="bg-vibezly-dark hidden py-16 md:block">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <h2
                data-aos="fade-down"
                className="font-orbitron text-gradient mb-6 text-3xl font-bold"
              >
                Meet the Vibezly AI Personas
              </h2>
              <p data-aos="fade-down" data-aos-delay="100" className="text-lg">
                Unleash distinct voices to hype, roast, support, or stir your
                community — one vibe at a time. Vibezly offers four distinct AI
                personas designed to engage communities in different tones.
              </p>
            </div>

            {/* Persona Overview Table */}
            <div
              data-aos="zoom-in"
              data-aos-delay="100"
              className="from-vibezly-card to-vibezly-dark border-vibezly-border/45 mb-16 overflow-hidden rounded-lg border bg-linear-180"
            >
              <div className="p-6">
                <h3 className="mb-4 text-xl font-bold text-white">
                  Persona Overview
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-vibezly-border/45 border-b">
                        <th className="font-orbitron p-4 text-left font-semibold text-white">
                          Persona Name
                        </th>
                        <th className="font-orbitron p-4 text-left font-semibold text-white">
                          Tone & Style
                        </th>
                        <th className="font-orbitron p-4 text-left font-semibold text-white">
                          Best For
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-vibezly-border/45 border-b">
                        <td className="font-orbitron p-4 font-medium text-red-400">
                          Dick Johnson
                        </td>
                        <td className="p-4">Sharp, offensive, roastful</td>
                        <td className="p-4">
                          Waking up quiet groups, shutting down FUD
                        </td>
                      </tr>
                      <tr className="border-vibezly-border/45 border-b">
                        <td className="font-orbitron p-4 font-medium text-yellow-400">
                          Sunny Sam
                        </td>
                        <td className="p-4">
                          Friendly, warm, relentlessly positive
                        </td>
                        <td className="p-4">
                          Boosting morale and onboarding new users
                        </td>
                      </tr>
                      <tr className="border-vibezly-border/45 border-b">
                        <td className="font-orbitron p-4 font-medium text-pink-400">
                          Karen Beetch
                        </td>
                        <td className="p-4">Sassy, chaotic, rude bitch</td>
                        <td className="p-4">
                          Sparking drama and shaking up quiet chats
                        </td>
                      </tr>
                      <tr>
                        <td className="font-orbitron p-4 font-medium text-blue-400">
                          Diamond Balls Bob
                        </td>
                        <td className="p-4">Bullish, hype-driven, ambitious</td>
                        <td className="p-4">
                          Energizing raids and inspiring holders
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personas Bento Grid */}
        <section className="bg-vibezly-border/20 py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2
              data-aos="fade-down"
              className="font-orbitron text-gradient mb-12 text-center text-3xl font-bold"
            >
              The Personas
            </h2>

            {/* Bento Grid Layout */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
              {thePersonas.map((persona, i) => (
                <Persona
                  key={i}
                  data={persona}
                  index={i}
                  color={persona.color as PersonaColor}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        {/* <section className="relative overflow-hidden py-16">
          <div className="absolute top-0 left-1/2 h-[1px] w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="from-vibezly-purple to-vibezly-cyan absolute -top-[202px] left-1/2 size-[279px] -translate-x-1/2 animate-spin rounded-full bg-linear-180 blur-[60px] duration-1000 ease-in"></div>
          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="mx-auto max-w-3xl">
              <h2
                data-aos="fade-down"
                className="font-orbitron mb-6 text-4xl leading-[130%] font-bold text-balance text-white md:text-5xl"
              >
                Ready to Supercharge Your Community?
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="100"
                className="mb-8 text-lg"
              >
                Switch on Vibezly AI Personas and keep your chat lit 24/7.
              </p>
              <Button
                data-aos="fade-up"
                data-aos-delay="200"
                size="lg"
                className="from-vibezly-purple via-vibezly-cyan to-vibezly-green bg-linear-[135deg] transition-transform text-shadow-sm"
              >
                Get Started With Vibezly
              </Button>
            </div>
          </div>
        </section> */}
      </>
    </>
  );
}

function Persona({
  color,
  data,
  index,
}: {
  color: PersonaColor;
  data: any;
  index: number;
}) {
  const {
    name,
    alias,
    tone,
    behavior,
    bestFor,
    whenToUse,
    avatar,
    personalty,
  } = data;
  return (
    <Card
      data-aos="zoom-in"
      data-aos-delay={(index + 1) * 100}
      className={cn(
        "relative border-0 bg-gradient-to-br transition-all duration-300",
        colorClassMap[color].bgFrom,
        colorClassMap[color].bgTo,
      )}
    >
      <ShineBorder duration={15} shineColor={personaColors[color]} />
      <figure
        className={cn(
          "ml-6 size-24 rounded-full sm:absolute sm:top-6 sm:right-6",
          `bg-gradient-to-br`,
          colorClassMap[color].bgFrom,
          colorClassMap[color].bgTo,
        )}
      >
        <img
          src={avatar}
          alt={alias}
          width={500}
          height={500}
          className="size-full rounded-full object-cover object-center"
        />
      </figure>
      <CardHeader>
        <CardTitle
          className={cn(colorClassMap[color].text, "font-orbitron text-xl")}
        >
          {name}
        </CardTitle>
        <CardDescription
          className={cn(colorClassMap[color].description, "font-orbitron")}
        >
          {alias}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h4
              className={cn(colorClassMap[color].heading, "mb-2 font-semibold")}
            >
              Tone:
            </h4>
            <p className="text-sm">{tone}</p>
          </div>
          <div>
            <h4
              className={cn(colorClassMap[color].heading, "mb-2 font-semibold")}
            >
              Behavior:
            </h4>
            <p className="text-sm">{behavior}</p>
          </div>
          <div>
            <h4
              className={cn(colorClassMap[color].heading, "mb-2 font-semibold")}
            >
              Personalty:
            </h4>
            <p className="text-sm">{personalty}</p>
          </div>
          <div>
            <h4
              className={cn(colorClassMap[color].heading, "mb-2 font-semibold")}
            >
              Best For:
            </h4>
            <ul className="list-disc space-y-1 pl-5 text-sm">
              {bestFor.map((item: string, i: number) => (
                <li key={i} className="text-neutral-300">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div
            className={cn(
              "rounded border-l-4 p-3",
              colorClassMap[color].border,
              colorClassMap[color].bgSoft,
            )}
          >
            <p className="text-sm font-medium">{whenToUse}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
