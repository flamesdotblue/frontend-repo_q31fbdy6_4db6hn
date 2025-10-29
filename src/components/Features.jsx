import { Rocket, Timer, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Rocket,
    title: "Stunning, scalable design",
    desc: "Modern UI that elevates your brand and grows with your product.",
  },
  {
    icon: Timer,
    title: "Fast turnaround",
    desc: "Request updates anytime and see results within a few business days.",
  },
  {
    icon: Shield,
    title: "Flexible, no contracts",
    desc: "Pause or cancel anytime. No hidden fees. Full ownership of deliverables.",
  },
  {
    icon: Sparkles,
    title: "Design + development",
    desc: "From Figma to production-ready React — one team, end to end.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative border-t border-white/10 bg-[#0b0b0f] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Everything you need to move fast
          </h2>
          <p className="mt-3 text-base text-white/70">
            Work directly with senior designers and engineers who operate as an
            extension of your team.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-md shadow-fuchsia-500/20">
                <Icon size={18} />
              </div>
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
