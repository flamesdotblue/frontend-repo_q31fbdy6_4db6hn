import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0f] text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <footer className="border-t border-white/10 bg-[#0b0b0f] py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-white/60 sm:flex-row">
          <div>© {new Date().getFullYear()} PseudoCode Studio. All rights reserved.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
