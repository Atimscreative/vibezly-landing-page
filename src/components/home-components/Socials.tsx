import { Instagram, MessageSquare } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

export default function Socials() {
  return (
    <>
      <section id="socials" className="py-20 bg-vibezly-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 text-gradient">
            Join Our Community
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Connect with us across all platforms and be part of the Vibezly
            revolution
          </p>

          <div className="flex justify-center space-x-8 mb-12">
            <a href="#" className="group">
              <div className="w-16 h-16 bg-vibezly-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 glow">
                <MessageSquare className="w-8 h-8 text-white" />
              </div>
              <span className="block mt-2 text-sm font-medium group-hover:text-primary transition-colors">
                Telegram
              </span>
            </a>
            <a href="#" className="group">
              <div className="w-16 h-16 bg-vibezly-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 glow">
                <span className="text-white font-bold text-xl">X</span>
              </div>
              <span className="block mt-2 text-sm font-medium group-hover:text-primary transition-colors">
                Twitter
              </span>
            </a>
            <a href="#" className="group">
              <div className="w-16 h-16 bg-vibezly-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 glow">
                <span className="text-white font-bold text-xl">D</span>
              </div>
              <span className="block mt-2 text-sm font-medium group-hover:text-primary transition-colors">
                Discord
              </span>
            </a>
            <a href="#" className="group">
              <div className="w-16 h-16 bg-vibezly-gradient rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 glow">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <span className="block mt-2 text-sm font-medium group-hover:text-primary transition-colors">
                Instagram
              </span>
            </a>
          </div>

          <Card className="bg-vibezly-card border-border/50 p-8 max-w-md mx-auto">
            <h3 className="font-orbitron font-semibold text-xl mb-4">
              Stay Updated
            </h3>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-vibezly-gradient hover:opacity-90 transition-opacity">
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
