import { Link, NavLink } from "react-router";
import { Button } from "./ui/button";
import Logo from "@/assets/logo2.svg";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <div>
      <nav className="bg-vibezly-body fixed top-0 right-0 left-0 z-50 border-b border-neutral-50/10 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link to="/" className="flex items-center space-x-2">
            <span className="bg-vibezly-gradient flex h-8 w-8 items-center justify-center rounded-lg">
              <img src={Logo} alt="Vibezly Logo" />
            </span>
            <span className="font-orbitron text-xl font-bold text-white">
              Vibezly
            </span>
          </Link>
          <div className="hidden gap-10 md:flex">
            {navMenu.map((menu) => (
              <LinkItem
                url={menu.url || `/#${menu?.label?.toLowerCase()}`}
                label={menu.label}
              />
            ))}
          </div>
          <Button className="from-vibezly-purple to-vibezly-cyan bg-gradient-to-r bg-cover text-white transition-opacity hover:opacity-90">
            Get Started
          </Button>
        </div>
      </nav>
    </div>
  );
}

function LinkItem({ url, label }: { url: string; label: string }) {
  return (
    <NavLink to={url} className={cn("hover:text-vibezly-purple text-white")}>
      {label}
    </NavLink>
  );
}

const navMenu = [
  {
    label: "About",
  },
  {
    label: "Utilities",
  },
  {
    label: "AI Personas",
    url: "/personas",
  },
  {
    label: "Tokenomics",
  },
  {
    label: "Team",
  },
  {
    label: "Roadmap",
  },
];
