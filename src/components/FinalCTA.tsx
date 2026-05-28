import { Link } from "@tanstack/react-router";

export function FinalCTA() {
  return (
    <section id="contact" className="px-4 py-16 lg:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 px-6 py-20 sm:py-28 text-center shadow-[0_30px_80px_rgba(8,_112,_184,_0.08)]">
          <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "radial-gradient(circle at 50% 0%, oklch(0.95 0.06 260) 0%, transparent 60%)" }} />
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-gray-900 leading-[0.98]">
            Ready to
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "var(--gradient-headline)" }}> build</span>?
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-md mx-auto">
            Let's map out your next 12 months. A 30-minute call, zero pressure.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/contact"
              className="w-full sm:w-auto rounded-full bg-gray-900 text-white text-base font-medium px-8 py-4 hover:bg-gray-800 transition-transform hover:scale-[1.03] shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
            >
              Book a strategy call
            </Link>
            <Link
              to="/work"
              className="w-full sm:w-auto rounded-full text-gray-900 text-base font-medium px-7 py-4 hover:bg-gray-100 transition"
            >
              See our work →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-100 px-4 py-12">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-md bg-gray-900 flex items-center justify-center text-white text-[10px] font-bold">W</span>
          <span className="text-sm text-gray-500">© {new Date().getFullYear()} Wavelet. All rights reserved.</span>
        </div>
        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-gray-900 transition">Privacy</Link>
          <Link to="/" className="hover:text-gray-900 transition">Terms</Link>
          <Link to="/" className="hover:text-gray-900 transition">Security</Link>
          <Link to="/" className="hover:text-gray-900 transition">Careers</Link>
          <Link to="/contact" className="hover:text-gray-900 transition">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
