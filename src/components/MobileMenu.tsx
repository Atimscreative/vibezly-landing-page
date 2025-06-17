import { Link } from "react-router";
import { Button } from "./ui/button";
import type { SetStateAction } from "react";
import { cn } from "@/lib/utils";

export default function MobileMenu({
  setOpen,
  open,
}: {
  setOpen: React.Dispatch<SetStateAction<boolean>>;
  open: boolean;
}) {
  return (
    <div
      className={cn(
        "bg-vibezly-dark/50 fixed top-0 z-[99] h-screen w-full backdrop-blur-lg duration-300",
        open ? "right-0" : "-right-full",
      )}
    >
      <div className="bg-vibezly-dark absolute right-0 h-full w-full pt-20 md:w-[400px]">
        <div className="inline-flex flex-col gap-6 p-6 md:pl-10">
          {navMenu.map((menu, i) => (
            <Link
              onClick={() => setOpen(false)}
              to={menu.url}
              key={i}
              className="hover:from-vibezly-purple hover:to-vibezly-cyan text-lg font-medium duration-300 ease-in-out hover:translate-x-3 hover:bg-linear-90 hover:bg-clip-text hover:text-transparent"
            >
              {menu.label}
            </Link>
          ))}
        </div>
        <div className="px-6">
          <Button
            onClick={() => setOpen(false)}
            className="from-vibezly-purple to-vibezly-cyan mt-6 h-auto w-full bg-gradient-to-r bg-cover py-3 text-white transition-opacity hover:opacity-90 md:w-auto"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
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
