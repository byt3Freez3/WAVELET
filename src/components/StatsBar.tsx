const stats = [
  { value: "99.9%", label: "Uptime SLA Guarantee", sub: "Mission-critical reliability" },
  { value: "200+", label: "Successful Deployments", sub: "Across 12 industries" },
  { value: "24/7", label: "Dedicated Support", sub: "Global on-call engineers" },
];

import { motion } from "framer-motion";

export function StatsBar() {
  return (
    <section className="relative px-4 py-32 overflow-hidden bg-gray-950">
      {/* Cinematic Ambient Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 opacity-40 blur-[120px]"
        style={{
          background:
            "radial-gradient(50% 60% at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 60%), radial-gradient(40% 50% at 85% 30%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)",
        }}
      />
      
      {/* Subtle Grid Overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold"
          >
            Engineering Excellence
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-white"
          >
            Performance you can <span className="text-white/40 italic">trust</span>.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-center md:px-12 md:border-r border-white/5 last:border-r-0"
            >
              <div className="text-7xl sm:text-8xl lg:text-9xl font-semibold tracking-tighter text-white">
                {s.value}
              </div>
              <p className="mt-6 text-sm font-bold text-white uppercase tracking-widest">{s.label}</p>
              <p className="mt-2 text-xs text-gray-500 uppercase tracking-widest font-medium">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
