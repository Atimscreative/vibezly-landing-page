import { fadeVariants } from "@/utils/motionVariants";
import { Card, CardContent } from "../ui/card";
import { motion } from "motion/react";

export default function About() {
  const MotionCard = motion(Card);
  return (
    <>
      <section id="about" className="bg-vibezly-dark py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="animate-fade-in mb-16 text-center">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              variants={fadeVariants.fadeUp}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="from-vibezly-purple via-vibezly-cyan to-vibezly-green mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
            >
              About Vibezly
            </motion.h2>
            <motion.p
              initial="hidden"
              whileInView="visible"
              variants={fadeVariants.fadeUp}
              transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
              className="mx-auto max-w-3xl text-xl"
            >
              We're building the future of crypto community engagement through
              AI-powered automation, decentralized governance, and gamified
              reward systems.
            </motion.p>
          </div>

          <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <MotionCard
              initial="hidden"
              whileInView="visible"
              variants={fadeVariants.fadeUp}
              transition={{ duration: 1, ease: "easeIn", delay: 0 }}
              className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-vibezly-purple/50 bg-linear-[135deg] from-0% to-100% transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="drop-shadow-glow/50 from-vibezly-purple via-vibezly-cyan to-vibezly-green mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-[135deg]">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-vibezly-purple mb-3 text-xl font-semibold">
                  AI-Driven Insights
                </h3>
                <p className="text-neutral-400">
                  Advanced AI analyzes chat patterns, sentiment, and engagement
                  to provide personalized community experiences.
                </p>
              </CardContent>
            </MotionCard>

            <MotionCard
              initial="hidden"
              whileInView="visible"
              variants={fadeVariants.fadeUp}
              transition={{ duration: 0.8, ease: "easeIn", delay: 0.7 }}
              className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-vibezly-cyan/50 bg-linear-[135deg] from-0% to-100% transition-all duration-300"
              style={{ animationDelay: "0.2s" }}
            >
              <CardContent className="p-6 text-center">
                <div className="drop-shadow-glow-cyan/50 from-vibezly-purple via-vibezly-cyan to-vibezly-green mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-[135deg]">
                  <span className="text-2xl">🗳️</span>
                </div>
                <h3 className="text-vibezly-cyan mb-3 text-xl font-semibold">
                  Decentralized Governance
                </h3>
                <p className="">
                  Community-driven decision making through transparent voting
                  mechanisms and proposal systems.
                </p>
              </CardContent>
            </MotionCard>

            <MotionCard
              initial="hidden"
              whileInView="visible"
              variants={fadeVariants.fadeUp}
              transition={{ duration: 0.8, ease: "easeIn", delay: 0.9 }}
              className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-vibezly-green/50 bg-linear-[135deg] from-0% to-100% transition-all duration-300"
              style={{ animationDelay: "0.4s" }}
            >
              <CardContent className="p-6 text-center">
                <div className="drop-shadow-glow-green/50 from-vibezly-purple via-vibezly-cyan to-vibezly-green mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-[135deg]">
                  <span className="text-2xl">🎮</span>
                </div>
                <h3 className="text-vibezly-green mb-3 text-xl font-semibold">
                  Gamified Rewards
                </h3>
                <p className="">
                  Earn XP, climb leaderboards, and receive VBZ tokens for active
                  community participation.
                </p>
              </CardContent>
            </MotionCard>
          </motion.div>
        </div>
      </section>
    </>
  );
}

// function AboutCard() {
//   return (
//     <Card className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-vibezly-purple/50 bg-linear-[135deg] from-0% to-100% transition-all duration-300">
//       <CardContent className="p-6 text-center">
//         <div className="drop-shadow-glow from-vibezly-purple via-vibezly-cyan to-vibezly-green mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-linear-[135deg]">
//           <span className="text-2xl">🤖</span>
//         </div>
//         <h3 className="text-vibezly-purple mb-3 text-xl font-semibold">
//           AI-Driven Insights
//         </h3>
//         <p className="text-neutral-400">
//           Advanced AI analyzes chat patterns, sentiment, and engagement to
//           provide personalized community experiences.
//         </p>
//       </CardContent>
//     </Card>
//   );
// }
