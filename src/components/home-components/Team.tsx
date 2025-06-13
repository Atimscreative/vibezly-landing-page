import { teamMembers } from "@/utils";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { ShineBorder } from "../magicui/shine-border";

export default function Team() {
  return (
    <>
      <section id="team" className="bg-vibezly-dark/50 py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2 className="from-vibezly-purple via-vibezly-cyan to-vibezly-green mb-6 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
              Meet Our Team
            </h2>
            <p className="mx-auto max-w-3xl text-xl">
              Experienced builders from top tech companies and crypto projects
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 hover:border-vibezly-purple/50 group animate-scale-in relative overflow-hidden bg-linear-0 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ShineBorder
                  duration={(index + 1) * 10}
                  shineColor={["#7b00ff", "#00d1ff", "#50ff54"]}
                />
                <div className="from-vibezly-purple to-vibezly-green via-vibezly-cyan mx-auto aspect-square size-1/2 overflow-hidden rounded-full bg-linear-180 p-2 transition-[background-image] duration-300 group-hover:bg-linear-90">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full rounded-full object-cover transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-orbitron mb-2 text-xl font-semibold text-white">
                    {member.name}
                  </h3>
                  <Badge className="from-vibezly-purple to-vibezly-cyan mb-3 rounded-full border-0 bg-linear-[135deg] text-white">
                    {member.role}
                  </Badge>
                  <p className="text-sm transition-colors duration-300 group-hover:text-white">
                    {member.bio}
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
