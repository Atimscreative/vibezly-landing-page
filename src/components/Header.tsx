import { Link, NavLink, useLocation } from "react-router";
import { Button } from "./ui/button";
import Logo from "@/assets/logo2.svg";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export default function Header() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        // Optional: add smooth behavior
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

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
              <LinkItem url={menu.url} label={menu.label} />
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
  const isAnchorLink = url.startsWith("#");

  if (isAnchorLink) {
    return (
      <a
        href={url}
        className={cn("hover:text-vibezly-purple text-white uppercase")}
      >
        {label}
      </a>
    );
  }
  return (
    <NavLink
      to={url}
      className={cn("hover:text-vibezly-purple text-white uppercase")}
    >
      {label}
    </NavLink>
  );
}

const navMenu = [
  {
    label: "About",
    url: "/about",
  },
  {
    label: "Utilities",
    url: "/utilities",
  },
  {
    label: "AI Personas",
    url: "/personas",
  },
  {
    label: "Tokenomics",
    url: "/#tokenomics",
  },
  {
    label: "Team",
    url: "/#team",
  },
  {
    label: "Roadmap",
    url: "/#roadmap",
  },
];
