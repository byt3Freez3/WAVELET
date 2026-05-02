const stack = [
  { name: "React", letter: "⚛" },
  { name: "TypeScript", letter: "TS" },
  { name: "Node.js", letter: "N" },
  { name: "Firebase", letter: "🔥" },
  { name: "Tailwind", letter: "≋" },
  { name: "Razorpay", letter: "R" },
];

import { useReveal } from "@/hooks/useReveal";

export function TechEcosystem() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef} className="px-4 py-24 sm:py-32 bg-[#fbfbfd]">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Ecosystem</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-semibold tracking-[-0.04em] text-gray-900 leading-[1.05]">
            Seamlessly integrating with your
            <br />
            <span className="text-gray-400">favorite modern stack.</span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          {stack.map((s, i) => (
            <div
              key={s.name}
              className="group w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white border border-gray-100 shadow-sm flex flex-col items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="text-2xl sm:text-3xl font-semibold text-gray-700 group-hover:text-gray-900 transition">{s.letter}</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest group-hover:text-gray-600 transition">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
