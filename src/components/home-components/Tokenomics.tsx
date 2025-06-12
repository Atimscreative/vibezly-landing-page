import { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Card } from "../ui/card";
import { CircleCheck } from "lucide-react";
import { Progress } from "../ui/progress";

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
      </>
    );
    setTimeout(() => setCopiedContract(false), 2000);
  };
  return (
    <>
      {/* Tokenomics Section */}
      <section id="tokenomics" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-orbitron font-bold text-4xl md:text-5xl mb-6 text-gradient">
              VBZ Tokenomics
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our utility token powers the entire Vibezly ecosystem
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-vibezly-card border-border/50 p-8">
              <h3 className="font-orbitron font-semibold text-2xl mb-6 text-primary">
                Token Distribution
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Community Rewards</span>
                  <span className="font-semibold">40%</span>
                </div>
                <Progress value={40} className="h-2" />

                <div className="flex justify-between items-center">
                  <span>Development</span>
                  <span className="font-semibold">25%</span>
                </div>
                <Progress value={25} className="h-2" />

                <div className="flex justify-between items-center">
                  <span>Team & Advisors</span>
                  <span className="font-semibold">15%</span>
                </div>
                <Progress value={15} className="h-2" />

                <div className="flex justify-between items-center">
                  <span>Marketing</span>
                  <span className="font-semibold">10%</span>
                </div>
                <Progress value={10} className="h-2" />

                <div className="flex justify-between items-center">
                  <span>Liquidity</span>
                  <span className="font-semibold">10%</span>
                </div>
                <Progress value={10} className="h-2" />
              </div>
            </Card>

            <Card className="bg-vibezly-card border-border/50 p-8">
              <h3 className="font-orbitron font-semibold text-2xl mb-6 text-accent">
                Token Utility
              </h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <CircleCheck className="w-6 h-6 text-vibezly-green" />
                  <span>Governance Voting Rights</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CircleCheck className="w-6 h-6 text-vibezly-green" />
                  <span>Premium Feature Access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CircleCheck className="w-6 h-6 text-vibezly-green" />
                  <span>Staking Rewards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CircleCheck className="w-6 h-6 text-vibezly-green" />
                  <span>Community Rewards</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CircleCheck className="w-6 h-6 text-vibezly-green" />
                  <span>NFT Marketplace Currency</span>
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">1B</div>
                      <div className="text-sm text-muted-foreground">
                        Total Supply
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-accent">650M</div>
                      <div className="text-sm text-muted-foreground">
                        Circulating
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={copyContractAddress}
                    className="w-full mt-4 bg-vibezly-gradient hover:opacity-90 transition-opacity"
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
