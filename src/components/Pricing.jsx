export default function Pricing() {
  return (
    <section id="pricing" className="relative border-t border-white/10 bg-[#0b0b0f] py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Simple, flat pricing
          </h2>
          <p className="mt-3 text-base text-white/70">
            One monthly rate. Unlimited requests. Cancel anytime.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {/* Starter */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-2 text-sm font-medium text-white/80">Starter</div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-semibold text-white">$2,500</span>
              <span className="text-sm text-white/60">/mo</span>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Perfect for early-stage startups needing a modern landing page.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>• One active request</li>
              <li>• Weekly updates</li>
              <li>• Design system starter</li>
              <li>• Basic analytics setup</li>
            </ul>
            <a href="#get-started" className="mt-6 block rounded-md bg-white px-4 py-2 text-center text-sm font-medium text-[#0b0b0f]">Get started</a>
          </div>

          {/* Pro */}
          <div className="relative rounded-2xl border border-fuchsia-500/30 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl shadow-fuchsia-500/20">
            <div className="absolute -top-3 left-6 rounded-full border border-fuchsia-500/30 bg-fuchsia-500/20 px-2 py-0.5 text-[10px] font-semibold tracking-wide text-fuchsia-100">
              MOST POPULAR
            </div>
            <div className="mb-2 text-sm font-medium text-white/90">Pro</div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-semibold text-white">$4,800</span>
              <span className="text-sm text-white/60">/mo</span>
            </div>
            <p className="mt-3 text-sm text-white/70">
              Best for growing teams shipping features every week.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/90">
              <li>• Two active requests</li>
              <li>• 48–72h turnaround</li>
              <li>• Full design system</li>
              <li>• Design + React implementation</li>
              <li>• Priority support</li>
            </ul>
            <a href="#get-started" className="mt-6 block rounded-md bg-white px-4 py-2 text-center text-sm font-medium text-[#0b0b0f]">Start Pro</a>
          </div>

          {/* Scale */}
          <div className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-2 text-sm font-medium text-white/80">Scale</div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-semibold text-white">$7,500</span>
              <span className="text-sm text-white/60">/mo</span>
            </div>
            <p className="mt-3 text-sm text-white/70">
              For product teams that need continuous, embedded support.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-white/80">
              <li>• Unlimited active requests</li>
              <li>• 24–48h turnaround</li>
              <li>• Research & UX strategy</li>
              <li>• Frontend engineering squad</li>
              <li>• Quarterly roadmap planning</li>
            </ul>
            <a href="#get-started" className="mt-6 block rounded-md bg-white px-4 py-2 text-center text-sm font-medium text-[#0b0b0f]">Talk to us</a>
          </div>
        </div>

        <p id="faq" className="mx-auto mt-10 max-w-2xl text-center text-sm text-white/60">
          Need a custom plan or enterprise security review? Reach out and we’ll tailor
          a plan that fits your workflow.
        </p>
      </div>
    </section>
  );
}
