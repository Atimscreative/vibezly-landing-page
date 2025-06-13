import { ArrowDown } from "lucide-react";
import { Link } from "react-router";
import Logo from "@/assets/logo2.svg";
import { title } from "process";

export default function Footer() {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
  };

  return (
    <>
      <footer className="bg-vibezly-dark border-vibezly-border border-t py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <div className="mb-4 flex items-center space-x-2">
                <img src={Logo} alt="Vibezly Logo" className="size-[40px]" />
                <span className="font-orbitron text-gradient text-xl font-bold">
                  Vibezly
                </span>
              </div>
              <p className="text-sm">
                Revolutionizing crypto communities with AI-powered engagement
                and decentralized governance.
              </p>
            </div>

            {footerMenus.map((data, index) => (
              <FooterLinks data={data} key={index} />
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
      <button
        onClick={scrollToTop}
        className="from-vibezly-purple via-vibezly-cyan to-vibezly-green glow fixed right-8 bottom-8 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-linear-[135deg] from-0% via-50% to-100% transition-all duration-300 hover:scale-110"
      >
        <ArrowDown className="h-6 w-6 rotate-180 transform text-white" />
      </button>
    </>
  );
}

function FooterLinks({ data }: any) {
  return (
    <div>
      <h3 className="mb-4 font-semibold text-white">{data.title}</h3>
      <div className="space-y-2 text-sm">
        {data.links.map((link: any) => (
          <Link
            to="#"
            key={link.label}
            className="hover:text-vibezly-purple block transition-colors"
          >
            {link.label}
          </Link>
        ))}
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
      { label: "Tokenomics", url: "/tokenomics" },
      { label: "Team", url: "/team" },
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
