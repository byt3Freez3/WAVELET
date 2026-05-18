// Bento visuals — pure SVG/CSS mockups, no external assets.
import { motion } from "framer-motion";

export function PlatformVisual() {
  return (
    <div className="w-full grid grid-cols-3 gap-3">
      <div className="col-span-2 rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 p-4 border border-slate-100">
        <div className="flex gap-1.5 mb-3">
          <span className="h-2 w-2 rounded-full bg-red-300" />
          <span className="h-2 w-2 rounded-full bg-yellow-300" />
          <span className="h-2 w-2 rounded-full bg-green-300" />
        </div>
        <div className="space-y-2">
          <div className="h-2.5 w-3/4 rounded-full bg-slate-200" />
          <div className="h-2.5 w-1/2 rounded-full bg-slate-200" />
          <div className="grid grid-cols-3 gap-2 mt-3">
            <div className="h-14 rounded-lg bg-blue-200/60" />
            <div className="h-14 rounded-lg bg-indigo-200/60" />
            <div className="h-14 rounded-lg bg-sky-200/60" />
          </div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-3 aspect-[9/16] flex flex-col justify-between">
          <div className="h-1.5 w-8 rounded-full bg-gray-300 mx-auto" />
          <div className="space-y-1.5">
            <div className="h-1.5 w-full rounded-full bg-gray-200" />
            <div className="h-1.5 w-2/3 rounded-full bg-gray-200" />
            <div className="h-6 rounded-md bg-blue-500 mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function GrowthVisual() {
  return (
    <div className="w-full space-y-4">
      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-1"
        >
          <span className="text-gray-500 font-bold tracking-[0.2em] text-[10px] uppercase">Organic Traffic</span>
          <p className="text-4xl lg:text-5xl font-bold text-emerald-600 drop-shadow-[0_0_15px_rgba(52,211,153,0.2)]">
            +248%
          </p>
          <div className="mt-2">
            <span className="rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest shadow-sm">
              ↑ 32 this week
            </span>
          </div>
        </motion.div>
      </div>
      <svg viewBox="0 0 300 100" className="w-full h-24">
        <defs>
          <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="rgb(16 185 129)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="rgb(16 185 129)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0,80 C40,70 60,40 100,45 C140,50 160,20 200,25 C240,30 270,10 300,15 L300,100 L0,100 Z" fill="url(#g1)" />
        <path d="M0,80 C40,70 60,40 100,45 C140,50 160,20 200,25 C240,30 270,10 300,15" fill="none" stroke="rgb(16 185 129)" strokeWidth="2" />
      </svg>
      <div className="grid grid-cols-3 gap-2">
        {["SEO", "Ads", "Social"].map((t) => (
          <div key={t} className="rounded-lg bg-emerald-50 border border-emerald-100 p-3">
            <p className="text-[10px] text-emerald-700 font-medium">{t}</p>
            <p className="text-sm font-semibold text-gray-900 mt-1">98%</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EnterpriseVisual() {
  return (
    <div className="w-full grid grid-cols-2 gap-3">
      {[
        { label: "Microsoft 365", color: "bg-orange-100 text-orange-700" },
        { label: "Dynamics CRM", color: "bg-amber-100 text-amber-700" },
        { label: "Azure Cloud", color: "bg-rose-100 text-rose-700" },
        { label: "Endpoint Sec", color: "bg-pink-100 text-pink-700" },
      ].map((item) => (
        <div key={item.label} className="rounded-xl bg-white border border-orange-100 p-4 shadow-sm">
          <div className={`inline-flex items-center justify-center h-8 w-8 rounded-lg ${item.color} font-bold text-xs`}>
            {item.label.charAt(0)}
          </div>
          <p className="text-sm font-semibold text-gray-900 mt-3">{item.label}</p>
          <p className="text-xs text-gray-500 mt-0.5">Active · Licensed</p>
        </div>
      ))}
    </div>
  );
}

export function ConsultancyVisual() {
  return (
    <div className="w-full space-y-4">
      <div className="rounded-xl bg-white border border-violet-100 p-4">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-300 to-purple-400" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-gray-900">Strategy roadmap · Q3</p>
            <p className="text-xs text-gray-500">12 milestones · on track</p>
          </div>
          <span className="text-xs font-medium text-violet-700 bg-violet-100 rounded-full px-2 py-0.5">Live</span>
        </div>
        <div className="mt-4 h-1.5 rounded-full bg-violet-100 overflow-hidden">
          <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-violet-400 to-purple-500" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {["Audit", "Design", "Scale"].map((s, i) => (
          <div key={s} className="rounded-lg bg-violet-50 border border-violet-100 p-3 text-center">
            <p className="text-[10px] text-violet-600 font-medium">Phase {i + 1}</p>
            <p className="text-sm font-semibold text-gray-900 mt-0.5">{s}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
