import { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Card } from "../ui/card";
import { CircleCheck } from "lucide-react";
import { Progress } from "../ui/progress";
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
      <section id="tokenomics" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl">
              VBZ Tokenomics
            </h2>
            <p className="mx-auto max-w-3xl text-xl">
              Our utility token powers the entire Vibezly ecosystem
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <Card className="bg-vibezly-card border-vibezly-border/50 p-8">
              {/* <h3 className="font-orbitron text-vibezly-purple mb-6 text-2xl font-semibold">
                Token Distribution
              </h3> */}
              <TokenomicsChart />
            </Card>

            <Card className="bg-vibezly-card border-border/50 p-8">
              <h3 className="font-orbitron text-accent mb-6 text-2xl font-semibold">
                Token Utility
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <CircleCheck className="text-vibezly-green h-6 w-6" />
                  <span>Governance Voting Rights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CircleCheck className="text-vibezly-green h-6 w-6" />
                  <span>Premium Feature Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CircleCheck className="text-vibezly-green h-6 w-6" />
                  <span>Staking Rewards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CircleCheck className="text-vibezly-green h-6 w-6" />
                  <span>Community Rewards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CircleCheck className="text-vibezly-green h-6 w-6" />
                  <span>NFT Marketplace Currency</span>
                </div>

                <div className="border-border border-t pt-6">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-primary text-2xl font-bold">1B</div>
                      <div className="text-sm">Total Supply</div>
                    </div>
                    <div>
                      <div className="text-accent text-2xl font-bold">650M</div>
                      <div className="text-sm">Circulating</div>
                    </div>
                  </div>

                  <Button
                    onClick={copyContractAddress}
                    className="bg-vibezly-gradient mt-4 w-full transition-opacity hover:opacity-90"
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
