import { Rocket, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0b0b0f]/80 backdrop-blur supports-[backdrop-filter]:bg-[#0b0b0f]/60">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-fuchsia-500/20">
              <Rocket size={18} />
            </span>
            <span className="text-lg font-semibold tracking-tight text-white">PseudoCode</span>
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/80 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#pricing"
              className="rounded-md border border-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/5"
            >
              View Plans
            </a>
            <a
              href="#get-started"
              className="group inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-[#0b0b0f] shadow hover:shadow-lg"
            >
              Get Started
            </a>
          </div>

          <button
            className="inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:bg-white/5 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <Menu />
          </button>
        </div>

        {open && (
          <div className="grid gap-3 pb-6 pt-2 md:hidden">
            <a href="#features" className="rounded-md px-2 py-2 text-white/80 hover:bg-white/5">Features</a>
            <a href="#pricing" className="rounded-md px-2 py-2 text-white/80 hover:bg-white/5">Pricing</a>
            <a href="#work" className="rounded-md px-2 py-2 text-white/80 hover:bg-white/5">Work</a>
            <a href="#faq" className="rounded-md px-2 py-2 text-white/80 hover:bg-white/5">FAQ</a>
            <a href="#get-started" className="rounded-md bg-white px-3 py-2 text-center text-sm font-medium text-[#0b0b0f]">Get Started</a>
          </div>
        )}
      </div>
    </header>
  );
}
