import { Link, NavLink, useLocation } from "react-router";
import { Button } from "./ui/button";
import Logo from "@/assets/logo2.svg";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { fadeVariants } from "@/utils/motionVariants";
import MobileMenu from "./MobileMenu";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
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

  useEffect(() => {
    if (open) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [open]);

  return (
    <>
      <header>
        <nav className="bg-vibezly-body fixed top-0 right-0 left-0 z-[999] border-b border-neutral-50/10 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
            <Link
              data-aos="fade-right"
              data-aos-delay={100}
              to="/"
              className="flex items-center space-x-2"
            >
              <span className="bg-vibezly-gradient flex h-8 w-8 items-center justify-center rounded-lg">
                <img src={Logo} alt="Vibezly Logo" />
              </span>
              <span className="font-orbitron text-xl font-bold text-white">
                Vibezly
              </span>
            </Link>
            <motion.div
              initial="hidden"
              whileInView="visible"
              variants={fadeVariants.staggeredContainer}
              className="hidden gap-10 lg:flex"
            >
              {navMenu.map((menu, i) => (
                <LinkItem url={menu.url} index={i} key={i} label={menu.label} />
              ))}
            </motion.div>
            <>
              <Button
                data-aos="fade-left"
                data-aos-delay={100}
                onClick={() => setOpen((prev) => !prev)}
                className="from-vibezly-purple to-vibezly-cyan bg-gradient-to-r bg-cover text-white transition-opacity hover:opacity-90 lg:hidden"
              >
                {open ? (
                  <X size={32} className="scale-150" />
                ) : (
                  <Menu size={32} className="scale-150" />
                )}
              </Button>

              <Button
                size="lg"
                data-aos="fade-left"
                data-aos-delay={100}
                className="from-vibezly-purple to-vibezly-cyan relative flex h-auto items-center justify-center bg-linear-[135deg] py-3 transition-opacity hover:opacity-90"
              >
                <div className="bg-vibezly-dark absolute top-1/2 left-1/2 h-[90%] w-[97.5%] -translate-1/2 rounded-sm"></div>
                <span className="relative z-10">Try Vibezly Now</span>
              </Button>

              {/* <Button className="from-vibezly-purple to-vibezly-cyan hidden bg-gradient-to-r bg-cover text-white transition-opacity hover:opacity-90 lg:inline-block">
                Get Started
              </Button> */}
            </>
          </div>
        </nav>
      </header>
      <>{<MobileMenu {...{ setOpen, open }} />}</>
    </>
  );
}

function LinkItem({
  url,
  label,
  index,
}: {
  url: string;
  label: string;
  index: number;
}) {
  const isAnchorLink = url.startsWith("#");

  if (isAnchorLink) {
    return (
      <a
        data-aos="fade-down"
        data-aos-delay={(index + 1) * 100}
        href={url}
        className={cn("hover:text-vibezly-purple text-white")}
      >
        {label}
      </a>
    );
  }
  return (
    <NavLink
      data-aos="fade-down"
      data-aos-delay={(index + 1) * 100}
      to={url}
      className={cn("hover:text-vibezly-purple text-white")}
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
