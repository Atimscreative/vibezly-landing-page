import { Button } from "./ui/button";
import Logo from "@/assets/logo2.svg";

export default function Header() {
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-vibezly-gradient rounded-lg flex items-center justify-center">
              <img src={Logo} alt="Vibezly Logo" />
            </div>
            <span className="font-orbitron font-bold text-xl text-gradient">
              Vibezly
            </span>
          </div>
          <div className="hidden md:flex space-x-6">
            <button className="hover:text-primary transition-colors">
              About
            </button>
            <button className="hover:text-primary transition-colors">
              Utilities
            </button>
            <button className="hover:text-primary transition-colors">
              Tokenomics
            </button>
            <button className="hover:text-primary transition-colors">
              Team
            </button>
            <button className="hover:text-primary transition-colors">
              Roadmap
            </button>
          </div>
          <Button className="bg-vibezly-dark text-white hover:opacity-90 transition-opacity">
            Get Started
          </Button>
        </div>
      </nav>
    </div>
  );
}
