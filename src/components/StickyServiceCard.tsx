import type { ReactNode } from "react";

export type ServiceCardData = {
  step: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  gradient: string;
  accent: string;
  visual: ReactNode;
};

type Props = {
  data: ServiceCardData;
  index: number;
  total: number;
};

export function StickyServiceCard({ data, index, total }: Props) {
  const scale = 1 - (total - 1 - index) * 0.015;

  return (
    <div className="w-full">
      <div
        className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 lg:p-14 transition-transform duration-500"
        style={{
          background: data.gradient,
          boxShadow: "var(--shadow-card)",
          transform: `scale(${scale})`,
          minHeight: "min(70vh, 720px)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm font-medium text-gray-900 border border-white/60">
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: data.accent }} />
            Step {data.step}
          </span>
          <span className="hidden sm:inline-flex items-center rounded-full bg-white/50 backdrop-blur-md px-3 py-1 text-xs font-medium text-gray-700 border border-white/50">
            {data.eyebrow}
          </span>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-2 space-y-5">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.05]">
              {data.title}
            </h3>
            <p className="text-base sm:text-lg text-gray-700/90 leading-relaxed max-w-md">
              {data.description}
            </p>
            <ul className="space-y-2.5 pt-2">
              {data.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm sm:text-[15px] text-gray-800">
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-gray-900"
                    aria-hidden
                  >
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.5L5 9L9.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual bento area */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl bg-white/90 backdrop-blur-sm border border-white shadow-sm p-5 sm:p-7 min-h-[260px] sm:min-h-[340px] lg:min-h-[400px] flex items-center justify-center">
              {data.visual}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
