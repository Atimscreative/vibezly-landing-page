import { Card, CardContent } from "../ui/card";
import { features } from "@/utils";

export default function Utilities() {
  return (
    <>
      {/* Utilities Section */}
      <section id="utilities" className="bg-vibezly-dark py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2
              data-aos="fade-up"
              className="from-vibezly-purple via-vibezly-cyan to-vibezly-green mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
            >
              Core Utilities
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mx-auto max-w-3xl text-xl"
            >
              Powerful features designed to enhance your crypto community
              experience
            </p>
          </div>

          {/* <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2">
            {utilities.map((data, index) => (
              <Utility key={index} data={data} index={index} />
            ))}
          </div> */}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {features.map((feature, index) => (
              <Card
                data-aos={index % 2 === 0 ? "fade-down" : "fade-up"}
                data-aos-delay={(index + 1) * 100}
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

// function Utility({ data, index }: any) {
//   return (
//     <div className="group cursor-pointer lg:last:col-span-2">
//       <Card
//         style={{ transition: "300ms ease" }}
//         data-aos="fade-up"
//         data-aos-delay={(index + 1) * 100}
//         className={cn(
//           "from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-primary/50 bg-linear-[135deg] p-6 transition-all duration-300",
//           data.containerClassName,
//         )}
//       >
//         <div className="flex flex-col items-start space-x-4">
//           <div className="from-vibezly-purple via-vibezly-cyan to-vibezly-green mb-4 flex items-center justify-center rounded-lg bg-linear-240 transition-transform duration-300 group-hover:scale-110">
//             {/* <span className="text-xl">{data.icon}</span> */}
//             <img
//               src={data.icon}
//               alt={data.title}
//               className="block size-14 drop-shadow-sm"
//             />
//           </div>
//           <div>
//             <h3
//               className={cn(
//                 "font-orbitron mb-2 text-xl font-semibold",
//                 data.titleClassName,
//               )}
//             >
//               {data.title}
//             </h3>
//             <p className="text-balance">{data.content}</p>
//           </div>
//         </div>
//       </Card>
//     </div>
//   );
// }

// const utilities = [
//   {
//     icon: Chat,
//     title: "AI Chat Moderation",
//     content:
//       "Intelligent spam detection, sentiment analysis, and automated              moderation to keep your community healthy and engaged.",
//     titleClassName: "text-vibezly-purple",
//     containerClassName: "hover:border-vibezly-purple",
//   },
//   {
//     icon: Chart,
//     title: "Member Rankings",
//     content:
//       "Dynamic leaderboards based on activity, contribution                         quality, and community engagement metrics.",
//     titleClassName: "text-vibezly-cyan",
//     containerClassName: "hover:border-vibezly-cyan",
//   },
//   {
//     icon: Coin,
//     title: "Token Rewards",
//     content:
//       "Earn VBZ tokens for quality contributions, helping                         newcomers, and maintaining positive community vibes.",
//     titleClassName: "text-vibezly-green",
//     containerClassName: "hover:border-vibezly-green",
//   },
// ];
