import { NavLink } from "react-router";
import { Button } from "./ui/button";
import Logo from "@/assets/logo2.svg";
import { cn } from "@/lib/utils";

export default function Header() {
  return (
    <div>
      <nav className="bg-vibezly-body fixed top-0 right-0 left-0 z-50 border-b border-neutral-50/10 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center space-x-2">
            <div className="bg-vibezly-gradient flex h-8 w-8 items-center justify-center rounded-lg">
              <img src={Logo} alt="Vibezly Logo" />
            </div>
            <span className="font-orbitron text-white text-xl font-bold">
              Vibezly
            </span>
          </div>
          <div className="hidden gap-10 md:flex">
            {navMenu.map((menu) => (
              <LinkItem
                url={`#${menu?.label?.toLowerCase()}`}
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
    <NavLink
      to={url}
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      className={cn(
        "hover:text-vibezly-purple text-white",
        // isActive && "text-vibezly-green",
      )}
    >
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
    label: "Tokenomics",
  },
  {
    label: "Team",
  },
  {
    label: "Roadmap",
  },
];
