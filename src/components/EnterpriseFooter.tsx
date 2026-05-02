import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Careers", to: "#" },
      { label: "Press", to: "#" },
      { label: "Partners", to: "#" },
      { label: "Blog", to: "#" }
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Platforms", to: "/services" },
      { label: "Growth", to: "/services" },
      { label: "Cloud", to: "/services" },
      { label: "Consultancy", to: "/services" },
      { label: "Support", to: "/services" }
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", to: "#" },
      { label: "Terms", to: "#" },
      { label: "Security", to: "#" },
      { label: "Compliance", to: "#" },
      { label: "Cookies", to: "#" }
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", to: "#" },
      { label: "X / Twitter", to: "#" },
      { label: "GitHub", to: "#" },
      { label: "YouTube", to: "#" },
      { label: "Contact", to: "/contact" }
    ],
  },
];

export function EnterpriseFooter() {
  return (
    <footer className="relative px-4 pt-32 mt-32 pb-10 bg-gray-950 text-gray-400 overflow-hidden">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 -z-0 h-96 opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, oklch(0.5 0.2 270 / 0.6) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Final CTA card */}
        <div className="relative rounded-[2.5rem] bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 backdrop-blur p-10 sm:p-16 text-center overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 -z-0 opacity-30"
            style={{
              background:
                "radial-gradient(40% 60% at 30% 30%, oklch(0.6 0.22 270 / 0.6) 0%, transparent 60%), radial-gradient(40% 50% at 75% 70%, oklch(0.65 0.18 25 / 0.5) 0%, transparent 60%)",
            }}
          />
          <div className="relative">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-white leading-[1.05]">
              Ready to transform your
              <br />
              <span className="text-white/60">digital presence?</span>
            </h2>
            <p className="mt-5 text-base text-white/60 max-w-md mx-auto">
              A 30-minute strategy call. Walk away with a roadmap, no commitment.
            </p>
            <div className="mt-9">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-gray-950 text-base font-medium px-8 py-4 hover:bg-gray-100 transition-transform hover:scale-[1.03] shadow-[0_20px_60px_rgba(255,255,255,0.15)]"
              >
                Let's talk →
              </Link>
            </div>
          </div>
        </div>

        {/* Link columns */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-10">
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/80 font-semibold">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-gray-500 hover:text-white transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img 
              src="/wavelet-logo.png" 
              alt="Wavelet Logo" 
              className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.6)]"
            />
            <span className="text-sm text-gray-500">© {new Date().getFullYear()} Wavelet. Crafted with intention.</span>
          </div>
          <div className="text-xs text-gray-600 font-mono">v2.0 · status: all systems operational</div>
        </div>
      </div>
    </footer>
  );
}
