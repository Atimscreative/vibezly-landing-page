import { teamMembers } from "@/utils";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";

export default function Team() {
  return (
    <>
      <section id="team" className="py-20 bg-vibezly-dark/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 text-gradient">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experienced builders from top tech companies and crypto projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="bg-vibezly-card border-border/50 hover:border-primary/50 transition-all duration-300 overflow-hidden group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="font-orbitron font-semibold text-xl mb-2">
                    {member.name}
                  </h3>
                  <Badge className="mb-3 bg-vibezly-gradient text-white">
                    {member.role}
                  </Badge>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300">
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
