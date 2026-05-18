import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ServiceCardData = {
  step: string;
  eyebrow: string;
  title: string;
  description: string;
  bullets: string[];
  gradient: string;
  accent: string;
  glow: string;
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
        className={cn(
          "relative w-full rounded-[2.5rem] p-8 sm:p-12 lg:p-16 transition-all duration-700 backdrop-blur-2xl border border-gray-200",
          data.gradient,
          data.glow
        )}
        style={{
          transform: `scale(${scale})`,
          minHeight: "min(65vh, 650px)",
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <span className="inline-flex items-center gap-2 rounded-full bg-gray-50 backdrop-blur-md px-4 py-1.5 text-[10px] font-bold text-gray-900 border border-gray-200 uppercase tracking-widest shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: data.accent }} />
            Phase {data.step}
          </span>
          <span className="hidden sm:inline-flex items-center rounded-full bg-gray-50 backdrop-blur-md px-3 py-1 text-[10px] font-bold text-gray-500 border border-gray-200 uppercase tracking-widest shadow-sm">
            {data.eyebrow}
          </span>
        </div>

        {/* Content layout */}
        <div className="flex flex-col lg:flex-row w-full gap-10 lg:gap-14 items-center">
          {/* Text Column */}
          <div className="w-full lg:w-2/5 space-y-6">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.05]">
              {data.title}
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md">
              {data.description}
            </p>
            <ul className="space-y-3 pt-4">
              {data.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3 text-sm font-medium text-gray-600">
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-gray-900"
                    aria-hidden
                  >
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2.5 6.5L5 9L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Column */}
          <div className="w-full lg:w-3/5 h-64 sm:h-80 lg:h-auto min-h-[250px] lg:min-h-[400px]">
            <div className="h-full rounded-3xl bg-gray-50 backdrop-blur-xl border border-gray-100 shadow-sm p-6 sm:p-8 flex items-center justify-center relative overflow-hidden group">
              {/* Internal glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02),transparent_70%)] group-hover:opacity-100 transition-opacity duration-700" />
              {data.visual}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
