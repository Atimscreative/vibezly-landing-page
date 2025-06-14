import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Bg from "@/assets/particles.gif";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { cn } from "@/lib/utils";
import Dick from "@/assets/dick.png";
import Sam from "@/assets/sam.png";
import Diamond from "@/assets/diamond.png";
import Karan from "@/assets/karan.png";
import { ShineBorder } from "@/components/magicui/shine-border";

const colorClassMap = {
  red: {
    text: "text-red-400",
    description: "text-red-300/80",
    heading: "text-red-300",
    bgFrom: "from-red-500/10",
    bgTo: "to-red-600/5",
    border: "border-red-500",
    bgSoft: "bg-red-500/10",
  },
  yellow: {
    text: "text-yellow-400",
    description: "text-yellow-300/80",
    heading: "text-yellow-300",
    bgFrom: "from-yellow-500/10",
    bgTo: "to-yellow-600/5",
    border: "border-yellow-500",
    bgSoft: "bg-yellow-500/10",
  },
  pink: {
    text: "text-pink-400",
    description: "text-pink-300/80",
    heading: "text-pink-300",
    bgFrom: "from-pink-500/10",
    bgTo: "to-pink-600/5",
    border: "border-pink-500",
    bgSoft: "bg-pink-500/10",
  },
  blue: {
    text: "text-blue-400",
    description: "text-blue-300/80",
    heading: "text-blue-300",
    bgFrom: "from-blue-500/10",
    bgTo: "to-blue-600/5",
    border: "border-blue-500",
    bgSoft: "bg-blue-500/10",
  },
};

export default function AIPersonas() {
  console.log(Bg);
  return (
    <>
      <>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[linear-gradient(to_right,#0f131aee,#0f131acc),url('/src/assets/particles.gif')] bg-cover bg-no-repeat py-20 pt-36">
          <div className="mx-auto max-w-7xl px-4 text-center">
            <div className="mx-auto max-w-4xl">
              <h1 className="font-orbitron mb-6 text-5xl leading-[130%] font-bold text-white">
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
              <p className="mb-8 text-xl text-white/90">
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
              <h2 className="font-orbitron text-gradient mb-6 text-3xl font-bold">
                Meet the Vibezly AI Personas
              </h2>
              <p className="text-lg">
                Unleash distinct voices to hype, roast, support, or stir your
                community — one vibe at a time. Vibezly offers four distinct AI
                personas designed to engage communities in different tones.
              </p>
            </div>

            {/* Persona Overview Table */}
            <div className="from-vibezly-card to-vibezly-dark border-vibezly-border/45 mb-16 overflow-hidden rounded-lg border bg-linear-180">
              <div className="p-6">
                <h3 className="mb-4 text-xl font-bold text-white">
                  🧠 Persona Overview
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
            <h2 className="font-orbitron text-gradient mb-12 text-center text-3xl font-bold">
              The Personas
            </h2>

            {/* Bento Grid Layout */}
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2">
              {thePersonas.map((persona, i) => (
                <Persona
                  key={i}
                  data={persona}
                  color={persona.color as PersonaColor}
                />
              ))}

              {/* Usage Strategy - Wide card */}
              <Card className="border-primary/20 hidden border bg-gradient-to-r from-purple-500/10 via-cyan-500/10 to-green-500/10 lg:col-span-4">
                <CardHeader>
                  <CardTitle className="text-gradient text-xl">
                    🎛️ How to Use Them Together
                  </CardTitle>
                  <CardDescription>
                    Dynamic strategy for community engagement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-3">
                    <div className="text-center">
                      <div className="mb-2 text-2xl">🔄</div>
                      <h4 className="mb-2 font-semibold">Rotate by Mood</h4>
                      <p className="text-sm">
                        Switch based on mood shifts or market sentiment
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="mb-2 text-2xl">🏁</div>
                      <h4 className="mb-2 font-semibold">Campaign Stages</h4>
                      <p className="text-sm">
                        Assign personas to different campaign phases
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="mb-2 text-2xl">🎯</div>
                      <h4 className="mb-2 font-semibold">Strategic Combos</h4>
                      <p className="text-sm">
                        Use combinations for contests, raids, and onboarding
                      </p>
                    </div>
                  </div>
                  <Separator className="my-4" />
                  <div className="text-center">
                    <p className="text-gradient font-medium">
                      Result: A living, breathing chat space that's never stale
                      and always on-brand.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <div className="mx-auto max-w-2xl">
              <h2 className="font-orbitron mb-4 text-3xl font-bold">
                🚀 Ready to Supercharge Your Community?
              </h2>
              <p className="mb-8 text-lg">
                Switch on Vibezly AI Personas and keep your chat lit 24/7.
              </p>
              <Button
                size="lg"
                className="bg-vibezly-gradient transition-transform"
              >
                Get Started With Vibezly
              </Button>
            </div>
          </div>
        </section>
      </>
    </>
  );
}

const personaColors = {
  red: ["#fca5a5", "#f87171", "#ef4444"], // red
  yellow: ["#fde68a", "#facc15", "#eab308"], // yellow
  pink: ["#f9a8d4", "#f472b6", "#ec4899"], // pink
  blue: ["#93c5fd", "#60a5fa", "#3b82f6"], // blue
};

type PersonaColor = keyof typeof personaColors;

function Persona({ color, data }: { color: PersonaColor; data: any }) {
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

const thePersonas = [
  {
    name: "Dick Johnson",
    alias: "The Roast Master",
    tone: "Sharp, witty, unapologetically savage",
    behavior:
      "Dick Johnson is the default no-nonsense enforcer. He calls out lazy lurkers, drops nuclear roasts, and shows no mercy. Think Gordon Ramsay meets Crypto Twitter.",
    personalty:
      "Edgy, fearless, and proudly offensive, he doesn't hold back. Perfect for communities that thrive on banter and thick skin.",
    bestFor: [
      "Reviving dead chats",
      "Killing FUD",
      "Keeping users on their toes",
    ],
    whenToUse:
      "Dick is the sparkplug every degen chat needs when things get too tame. No slacking. No mercy. Just vibes and verbal bar fights.",
    color: "red",
    avatar: Dick,
  },
  {
    name: "Sunny Sam",
    alias: "The Good Vibes Chadette",
    tone: "Warm, positive, and supportive",
    personalty:
      "She's like sunshine in a sideways market—kind, consistent, and always down to say “WAGMI.” A great onboarding tool for new members.",
    behavior:
      "Sunny Sam spreads good vibes and encouragement. She celebrates contributions, motivates the group, and makes everyone feel seen and appreciated.",
    bestFor: [
      "Uplifting the mood",
      "Welcoming newcomers",
      "Encouraging participation",
    ],
    whenToUse:
      "Sunny Sam keeps morale high and toxicity low—your go-to when community love is needed more than memes.",
    color: "yellow",
    avatar: Sam,
  },
  {
    name: "Karen Beetch",
    alias: "The Drama Queen",
    tone: "Sassy, dramatic, and unapologetically rude",
    personalty:
      "She's bold, dramatic, and chaotic-good. Karen Beetch thrives on attention and keeping the chat spicy.",
    behavior:
      "Karen Beetch doesn't just join the chat—she storms in. She throws shade, starts chaos, and roasts with flair. She's not nice. She's that bitch.",
    bestFor: [
      "Stirring up boring chats",
      "Meme battles and banter",
      "Starting drama (for fun)",
    ],
    whenToUse:
      "When your group's a little too quiet or needs a laugh, Karen keeps it rude, wild, and dangerously fun.",
    color: "pink",
    avatar: Karan,
  },
  {
    name: "Diamond Balls Bob",
    alias: "The Hype Whale",
    tone: "Confident, bullish, motivational",
    personalty:
      "Think: the wealthiest guy in the chat who still hypes everyone else up. Bob's always bullish, never bearish.",
    behavior:
      "Bob talks like every candle is green and every dip is a discount. He's the community's hype beast.",
    bestFor: [
      "Twitter raids",
      "Rallying the troops",
      "Generating market momentum",
    ],
    whenToUse:
      "When it's time to raid or rally, Bob brings the thunder. His vibes are pure green candles and rocket fuel.",
    color: "blue",
    avatar: Diamond,
  },
];
