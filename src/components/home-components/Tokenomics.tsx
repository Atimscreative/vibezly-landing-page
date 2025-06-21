import { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Card } from "../ui/card";
import { CircleCheck } from "lucide-react";
import TokenomicsChart from "../TokenomicsCard";

export default function Tokenomics() {
  const [copiedContract, setCopiedContract] = useState(false);

  const copyContractAddress = () => {
    const contractAddress = "0x742d35Cc6635C0532925a3b8D72Cc6608e0982Be";
    navigator.clipboard.writeText(contractAddress);
    setCopiedContract(true);
    toast.success(
      <>
        <h3>Contract Address Copied!</h3>
        <p>VBZ token contract address has been copied to your clipboard.</p>
      </>,
    );
    setTimeout(() => setCopiedContract(false), 2000);
  };
  return (
    <>
      {/* Tokenomics Section */}
      <section id="tokenomics" className="overflow-hidden py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <h2
              data-aos="fade-up"
              className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl"
            >
              VBZ Tokenomics
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mx-auto max-w-4xl text-xl"
            >
              The VBZ token powers the entire Vibezly ecosystem, serving as the
              core medium for rewards, access, and governance.
              <span className="hidden md:inline">
                Designed with a limited supply and strong utility, VBZ aligns
                platform growth with community participation and long-term
                sustainability.
              </span>
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="items-center md:grid md:grid-cols-2 lg:grid-cols-1">
              <TokenomicsChart />
              <div className="grid grid-cols-2 gap-4">
                <div className="border-vibezly-border/50 bg-vibezly-dark hover:bg-vibezly-border/5 rounded-xl border p-6">
                  <p className="text-vibezly-cyan pb-2">Buy/Sell Tax</p>
                  <h3 className="font-orbitron text-2xl font-bold text-white">
                    5% / 5%
                  </h3>
                </div>

                <div className="border-vibezly-border/50 bg-vibezly-dark hover:bg-vibezly-border/5 rounded-xl border p-6">
                  <p className="text-vibezly-cyan pb-2">Liquidity</p>
                  <h3 className="font-orbitron text-2xl font-bold text-white">
                    100%
                  </h3>
                </div>

                <div className="border-vibezly-border/50 bg-vibezly-dark hover:bg-vibezly-border/5 col-span-2 rounded-xl border p-6">
                  <p className="text-vibezly-cyan pb-2">Tax Allocation</p>
                  <h3 className="font-orbitron text-2xl font-bold text-white">
                    40% Development, 60% Marketing
                  </h3>
                </div>
              </div>
            </div>
            <Card
              data-aos="fade-left"
              data-aos-delay="300"
              className="from-vibezly-card hover:drop-shadow-glow-cyan/15 to-vibezly-dark border-vibezly-border/50 bg-linear-180 p-8"
            >
              <h3 className="font-orbitron text-accent mb-6 text-2xl font-semibold">
                Token Utility
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <CircleCheck className="text-vibezly-green h-6 w-6" />
                  <span className="font-orbitron">Rewards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CircleCheck className="text-vibezly-green h-6 w-6" />
                  <span className="font-orbitron">Premium Feature Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CircleCheck className="text-vibezly-green h-6 w-6" />
                  <span className="font-orbitron">Revenue Share Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CircleCheck className="text-vibezly-green h-6 w-6" />
                  <span className="font-orbitron">
                    Special Governance Rights
                  </span>
                </div>

                <div className="border-vibezly-border border-t pt-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-vibezly-cyan font-orbitron text-2xl font-bold">
                        100,000VBZ
                      </div>
                      <span className="font-orbitron text-sm">
                        Total Supply
                      </span>
                    </div>
                    <div>
                      <div className="text-vibezly-cyan font-orbitron text-2xl font-bold">
                        100
                      </div>
                      <span className="font-orbitron text-sm">Circulating</span>
                    </div>
                  </div>

                  <Button
                    onClick={copyContractAddress}
                    className="bg-vibezly-cyan text-vibezly-dark mt-4 h-auto w-full py-3 transition-opacity hover:bg-cyan-400 hover:opacity-90"
                  >
                    {copiedContract ? "Copied!" : "Copy Contract Address"}
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
