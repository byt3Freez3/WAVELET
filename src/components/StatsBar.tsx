const stats = [
  { value: "99.9%", label: "Uptime SLA Guarantee", sub: "Mission-critical reliability" },
  { value: "200+", label: "Successful Deployments", sub: "Across 12 industries" },
  { value: "24/7", label: "Dedicated Support", sub: "Global on-call engineers" },
];

import { useReveal } from "@/hooks/useReveal";

export function StatsBar() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef} className="relative px-4 py-24 sm:py-32 overflow-hidden bg-gray-950 text-white">
      {/* Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 opacity-60"
        style={{
          background:
            "radial-gradient(50% 60% at 20% 50%, oklch(0.45 0.22 270 / 0.5) 0%, transparent 60%), radial-gradient(40% 50% at 85% 30%, oklch(0.55 0.2 200 / 0.45) 0%, transparent 60%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-16 reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-white/50 font-medium">By the numbers</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-[-0.03em]">
            Performance you can <span className="italic font-light text-white/70">trust</span>.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="text-center md:px-6 md:border-r md:border-white/10 last:border-r-0 first:border-l-0 reveal"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-[-0.05em] bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(180deg, white 0%, oklch(0.7 0.04 260) 100%)" }}>
                {s.value}
              </div>
              <p className="mt-4 text-base font-medium text-white">{s.label}</p>
              <p className="mt-1 text-sm text-white/50">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
