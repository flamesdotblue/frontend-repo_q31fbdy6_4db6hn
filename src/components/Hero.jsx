import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0f]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(236,72,153,0.2),transparent_35%),radial-gradient(circle_at_50%_90%,rgba(16,185,129,0.15),transparent_40%)]" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            <Sparkles size={14} className="text-fuchsia-400" />
            Subscription-based design & development studio
          </div>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            On‑demand web design without the agency hassle
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            Get stunning, scalable designs with fast turnarounds for a flat monthly
            rate. No contracts. No hidden fees. Just results.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              id="get-started"
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-medium text-[#0b0b0f] shadow transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Start your subscription
              <ArrowRight size={16} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
            >
              Explore features
            </a>
          </div>
          <div className="mt-6 text-sm text-white/60">
            • Fast turnaround • Unlimited requests • Cancel anytime
          </div>
        </div>

        <div className="relative">
          <div className="mx-auto aspect-[4/3] w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-emerald-500/20 p-1 shadow-2xl">
            <div className="grid h-full w-full place-items-center rounded-xl bg-[#0b0b10]">
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs text-white/80">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-400" />
                Live design support
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3 px-6">
                <div className="h-24 rounded-lg bg-gradient-to-br from-indigo-500/30 to-indigo-500/10" />
                <div className="h-24 rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-fuchsia-500/10" />
                <div className="h-24 rounded-lg bg-gradient-to-br from-emerald-500/30 to-emerald-500/10" />
              </div>
              <p className="mt-6 max-w-sm px-6 text-center text-sm text-white/70">
                We plug into your workflow and deliver production‑ready designs and
                code that scale with your product.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
