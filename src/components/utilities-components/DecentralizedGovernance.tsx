import { CheckCircle, MessageSquare, Shield, Users } from "lucide-react";
import { Button } from "../ui/button";

export default function DecentralizedGovernance() {
  return (
    <>
      <section className="bg-vibezly-border/10 px-4 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2
              data-aos="fade-up"
              className="font-orbitron text-gradient mb-6 text-4xl font-bold md:text-5xl"
            >
              Community-Controlled Moderation
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="mx-auto max-w-4xl text-xl"
            >
              Let your community moderate itself. With the /report command and
              an auto-mute threshold, users can flag bad behavior. All actions
              are logged, and appeals are managed privately via DM.
            </p>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div
              data-aos="zoom-in-up"
              data-aos-delay="200"
              className="from-vibezly-card to-vibezly-dark border-vibezly-border/50 rounded-2xl border bg-linear-[135deg] p-8"
            >
              <h3 className="mb-6 text-xl font-semibold text-white">
                Moderation Demo
              </h3>

              <div className="space-y-4">
                <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                      TX
                    </div>
                    <h4 className="font-semibold text-red-400">ToxicUser</h4>
                  </div>
                  <p className="mb-3 text-sm">
                    This project is a scam! Don't buy!
                  </p>
                  <Button size="sm" variant="destructive" className="text-xs">
                    /report ToxicUser
                  </Button>
                </div>

                <div className="rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-4">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-yellow-400" />
                    <h4 className="font-semibold">Vibezly Bot</h4>
                  </div>
                  <p className="mt-2 text-sm">
                    User reported! Current flags: 7/10
                    <br />
                    <span className="text-yellow-400">
                      3 more reports needed for auto-mute
                    </span>
                  </p>
                </div>

                <div className="border-vibezly-green/20 bg-vibezly-green/10 rounded-lg border p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="text-vibezly-green h-5 w-5" />
                    <h4 className="font-semibold">Auto-Moderation</h4>
                  </div>
                  <p className="mt-2 text-sm">
                    User auto-muted after 10 reports
                    <br />
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-vibezly-green hover:bg-vibezly-green/20 hover:text-vibezly-green text-vibezly-green mt-2 bg-transparent text-xs"
                    >
                      Appeal via DM
                    </Button>
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="space-y-6">
                <div
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-500/20">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Community-Powered /report
                    </h3>
                    <p className="">Decentralized flagging system</p>
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="300"
                  className="flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20">
                    <Shield className="h-6 w-6 text-red-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Auto-Mute Threshold
                    </h3>
                    <p className="">Automatic action after 10 reports</p>
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="400"
                  className="flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20">
                    <MessageSquare className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">DM-Based Appeals</h3>
                    <p className="">Private appeal process</p>
                  </div>
                </div>

                <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                  className="flex items-center gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Transparency Audit Trail
                    </h3>
                    <p className="">All actions logged and traceable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
