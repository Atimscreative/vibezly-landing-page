import { ArrowDown } from "lucide-react";
import { Link, useLocation } from "react-router";
import Logo from "@/assets/logo2.svg";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

export default function Footer() {
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
    <>
      <footer className="bg-vibezly-dark border-vibezly-border border-t py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <div
                data-aos="fade-right"
                className="mb-4 flex items-center space-x-2"
              >
                <img src={Logo} alt="Vibezly Logo" className="size-[40px]" />
                <span className="font-orbitron text-xl font-bold text-white">
                  Vibezly
                </span>
              </div>
              <p data-aos="fade-right" data-aos-delay="50" className="text-sm">
                Revolutionizing crypto communities with AI-powered engagement
                and decentralized governance.
              </p>
            </div>

            {footerMenus.map((data, index) => (
              <FooterLinks data={data} key={index} index={index} />
            ))}
          </div>

          <div className="border-vibezly-border mt-8 border-t pt-8 text-center">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Vibezly. All rights reserved.
              Built with love for the crypto community.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <Link
        to="#hero"
        className="from-vibezly-purple via-vibezly-cyan to-vibezly-green glow fixed right-8 bottom-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-linear-[135deg] from-0% via-50% to-100% transition-all duration-300 hover:scale-110"
      >
        <ArrowDown className="h-6 w-6 rotate-180 transform text-white" />
      </Link>
    </>
  );
}

function FooterLinks({ data, index }: any) {
  return (
    <div>
      <h3
        data-aos="fade"
        data-aos-delay={(index + 1) * 100}
        className="mb-4 font-semibold text-white"
      >
        {data.title}
      </h3>
      <div className="inline-flex flex-col space-y-2 text-sm">
        {data.links.map((link: any) => {
          const isAnchorLink = link.url.startsWith("/#");

          if (isAnchorLink) {
            return (
              <a
                data-aos="fade"
                data-aos-delay={(index + 1) * 100}
                href={link.url}
                className={cn("hover:text-vibezly-purple text-neutral-300")}
              >
                {link.label}
              </a>
            );
          }

          return (
            <Link
              data-aos="fade"
              data-aos-delay={(index + 1) * 100}
              to="#"
              key={link.label}
              className="hover:text-vibezly-purple transition-colors"
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

const footerMenus = [
  {
    title: "Quick Links",
    links: [
      { label: "About", url: "/about" },
      { label: "Utilities", url: "/utilities" },
      { label: "AI Personas", url: "/personas" },
      { label: "Tokenomics", url: "/#tokenomics" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", url: "/#docs" },
      { label: "API", url: "/#api" },
      { label: "Support", url: "/#support" },
      { label: "Blog", url: "/#blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", url: "/#terms" },
      { label: "Privacy Policy", url: "/#privacy" },
      { label: "Cookie Policy", url: "/#cookies" },
    ],
  },
];
