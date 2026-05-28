import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Careers", to: "/" },
      { label: "Press", to: "/" },
      { label: "Partners", to: "/" },
      { label: "Blog", to: "/" }
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Platforms", to: "/what-we-do/software-services" },
      { label: "Growth", to: "/what-we-do/software-services" },
      { label: "Cloud", to: "/what-we-do/cloud" },
      { label: "Consultancy", to: "/what-we-do/software-services" },
      { label: "Support", to: "/what-we-do/software-services" }
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", to: "/" },
      { label: "Terms", to: "/" },
      { label: "Security", to: "/" },
      { label: "Compliance", to: "/" },
      { label: "Cookies", to: "/" }
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "LinkedIn", to: "/" },
      { label: "X / Twitter", to: "/" },
      { label: "GitHub", to: "/" },
      { label: "YouTube", to: "/" },
      { label: "Contact", to: "/contact" }
    ],
  },
];

export interface EnterpriseFooterProps {
  hideCta?: boolean;
}

export function EnterpriseFooter({ hideCta = false }: EnterpriseFooterProps = {}) {
  return (
    <footer className="relative px-4 pt-8 mt-8 pb-10 bg-transparent text-gray-600 overflow-hidden">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 -z-0 h-96 opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(50% 60% at 50% 50%, oklch(0.95 0.05 270 / 0.8) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Final CTA card */}
        {!hideCta && (
          <div className="relative rounded-[2.5rem] bg-white border border-gray-200 p-10 sm:p-16 text-center overflow-hidden shadow-sm">
            <div
              aria-hidden
              className="absolute inset-0 -z-0 opacity-40"
              style={{
                background:
                  "radial-gradient(40% 60% at 30% 30%, oklch(0.95 0.05 270 / 0.8) 0%, transparent 60%), radial-gradient(40% 50% at 75% 70%, oklch(0.95 0.05 25 / 0.6) 0%, transparent 60%)",
              }}
            />
            <div className="relative">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-gray-900 leading-[1.05]">
                Ready to transform your
                <br />
                <span className="text-gray-500">digital presence?</span>
              </h2>
              <p className="mt-5 text-base text-gray-600 max-w-md mx-auto">
                A 30-minute strategy call. Walk away with a roadmap, no commitment.
              </p>
              <div className="mt-9">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white text-base font-medium px-8 py-4 hover:bg-gray-800 transition-transform hover:scale-[1.03] shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
                >
                  Let's talk →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Link columns */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-10 ${!hideCta ? 'mt-10' : ''}`}>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-gray-900 font-semibold">{col.title}</h4>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-gray-600 hover:text-gray-900 transition">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <img 
              src="/wavelet-logo.png" 
              alt="Wavelet Logo" 
              className="h-10 sm:h-12 w-auto object-contain drop-shadow-[0_0_15px_rgba(0,0,0,0.1)]"
            />
            <span className="text-sm text-gray-500">© {new Date().getFullYear()} Wavelet. Crafted with intention.</span>
          </div>
          <div className="text-xs text-gray-600 font-mono">v2.0 · status: all systems operational</div>
        </div>
      </div>
    </footer>
  );
}
