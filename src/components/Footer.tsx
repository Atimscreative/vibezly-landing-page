import { ArrowDown } from "lucide-react";
import { Link } from "react-router";
import Logo from "@/assets/logo2.svg";

export default function Footer() {
  const scrollToTop = () => {
    document.body.scrollTop = 0;
  };

  return (
    <>
      <footer className="bg-vibezly-dark border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img src={Logo} alt="Vibezly Logo" className="size-[40px]" />
                <span className="font-orbitron font-bold text-xl text-gradient">
                  Vibezly
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                Revolutionizing crypto communities with AI-powered engagement
                and decentralized governance.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Quick Links</h3>
              <div className="space-y-2 text-sm">
                <Link
                  to="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </Link>
                <Link
                  to="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Utilities
                </Link>
                <Link
                  to="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Tokenomics
                </Link>
                <Link
                  to="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Team
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Resources</h3>
              <div className="space-y-2 text-sm">
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Documentation
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  API
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4 text-white">Legal</h3>
              <div className="space-y-2 text-sm">
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block text-muted-foreground hover:text-primary transition-colors"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-8 mt-8 text-center">
            <p className="text-muted-foreground text-sm">
              © 2024 Vibezly. All rights reserved. Built with 💜 for the crypto
              community.
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-vibezly-gradient rounded-full flex items-center justify-center glow hover:scale-110 transition-all duration-300 z-50"
      >
        <ArrowDown className="w-6 h-6 text-white transform rotate-180" />
      </button>
    </>
  );
}
