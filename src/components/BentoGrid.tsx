function MiniChart() {
  return (
    <svg viewBox="0 0 200 80" className="w-full h-20">
      <defs>
        <linearGradient id="bentoChart" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.6 0.18 235)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="oklch(0.6 0.18 235)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 60 L25 50 L50 55 L75 35 L100 40 L125 22 L150 28 L175 12 L200 18 L200 80 L0 80 Z" fill="url(#bentoChart)" />
      <path d="M0 60 L25 50 L50 55 L75 35 L100 40 L125 22 L150 28 L175 12 L200 18" fill="none" stroke="oklch(0.55 0.2 235)" strokeWidth="2" />
    </svg>
  );
}

function ShieldBadge() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-14 w-14 rounded-2xl flex items-center justify-center" style={{ background: "var(--gradient-mint)" }}>
        <svg viewBox="0 0 24 24" fill="none" className="h-7 w-7 text-emerald-700">
          <path d="M12 2L3 6v6c0 5 3.5 9.5 9 10 5.5-.5 9-5 9-10V6l-9-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div>
        <div className="text-xs font-semibold text-emerald-700">SOC 2 · ISO 27001</div>
        <div className="text-xs text-gray-500">Audited & encrypted</div>
      </div>
    </div>
  );
}

function CodeSnippet() {
  return (
    <div className="rounded-xl bg-gray-950 overflow-hidden border border-white/10 shadow-2xl">
      {/* macOS Header */}
      <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <div className="ml-2 text-[10px] text-white/30 font-mono tracking-wider">payment.ts</div>
      </div>
      
      <div className="p-5 font-mono text-[11px] leading-relaxed">
        <div className="flex gap-4">
          <span className="text-white/20 select-none">1</span>
          <div>
            <span className="text-pink-400">const</span> <span className="text-blue-400">payment</span> = <span className="text-pink-400">await</span> gateway
          </div>
        </div>
        <div className="flex gap-4">
          <span className="text-white/20 select-none">2</span>
          <div className="pl-4">
            .<span className="text-blue-400">process</span>({`{`}
          </div>
        </div>
        <div className="flex gap-4">
          <span className="text-white/20 select-none">3</span>
          <div className="pl-8">
            <span className="text-green-400">amount</span>: <span className="text-amber-400">4200.00</span>,
          </div>
        </div>
        <div className="flex gap-4">
          <span className="text-white/20 select-none">4</span>
          <div className="pl-8">
            <span className="text-green-400">currency</span>: <span className="text-amber-400">'USD'</span>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="text-white/20 select-none">5</span>
          <div className="pl-4">
            {`}`});
          </div>
        </div>
      </div>
    </div>
  );
}

function CheckoutSuccess() {
  return (
    <div className="space-y-3">
      <div className="rounded-2xl bg-white border border-gray-100 p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-5 w-5">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] font-bold text-gray-900">Order #8429 Confirmed</div>
            <div className="text-[11px] text-gray-500 truncate">Shipping to New York, USA</div>
          </div>
        </div>
        
        {/* Simplified timeline */}
        <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between px-1">
          {[1, 2, 3].map((step) => (
            <div key={step} className={`h-1 flex-1 rounded-full mx-0.5 ${step < 3 ? 'bg-emerald-500' : 'bg-gray-100'}`} />
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between px-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
        <span>Processing</span>
        <span>Out for delivery</span>
      </div>
    </div>
  );
}

import { useReveal } from "@/hooks/useReveal";

export function BentoGrid() {
  const containerRef = useReveal();

  return (
    <section ref={containerRef} className="px-4 py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16 max-w-2xl mx-auto reveal">
          <span className="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium">Capabilities</span>
          <h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.04em] text-gray-900 leading-[1.05]">
            Everything you need to scale,
            <br />
            <span className="text-gray-400">built right in.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {/* Cloud Infrastructure - col-span-2 */}
          <div className="md:col-span-2 group rounded-3xl bg-white border border-gray-100 p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_45px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1 reveal">
            <div className="flex flex-col h-full justify-between gap-8 min-h-[300px]">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">01 — Infrastructure</span>
                <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-gray-900 tracking-[-0.02em]">Cloud Infrastructure</h3>
                <p className="mt-3 text-base text-gray-500 max-w-md leading-relaxed">Auto-scaling, multi-region deployments on AWS, Azure & GCP — provisioned in minutes.</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-gray-50/50 p-6">
                <div className="flex items-center justify-between mb-2 px-1">
                  <span className="text-xs font-medium text-gray-500">Global Throughput</span>
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+412%</span>
                </div>
                <MiniChart />
              </div>
            </div>
          </div>

          {/* Cybersecurity - col-span-1 */}
          <div className="group rounded-3xl bg-white border border-gray-100 p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_45px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1 reveal" style={{ transitionDelay: "100ms" }}>
            <div className="flex flex-col h-full justify-between gap-8 min-h-[300px]">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">02 — Security</span>
                <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-gray-900 tracking-[-0.02em]">Cybersecurity</h3>
                <p className="mt-3 text-base text-gray-500 leading-relaxed">Enterprise-grade protection baked into every layer.</p>
              </div>
              <ShieldBadge />
            </div>
          </div>

          {/* API Integrations - col-span-1 */}
          <div className="group rounded-3xl bg-white border border-gray-100 p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_45px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1 reveal" style={{ transitionDelay: "200ms" }}>
            <div className="flex flex-col h-full justify-between gap-8 min-h-[300px]">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">03 — Connect</span>
                <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-gray-900 tracking-[-0.02em]">API Engines</h3>
                <p className="mt-3 text-base text-gray-500 leading-relaxed">Wire any system together — gracefully.</p>
              </div>
              <CodeSnippet />
            </div>
          </div>

          {/* E-commerce - col-span-2 */}
          <div className="md:col-span-2 group rounded-3xl bg-white border border-gray-100 p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_15px_45px_rgb(0,0,0,0.08)] transition-all hover:-translate-y-1 reveal" style={{ transitionDelay: "300ms" }}>
            <div className="flex flex-col h-full justify-between gap-8 min-h-[300px]">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-gray-400 font-bold">04 — Commerce</span>
                <h3 className="mt-3 text-2xl sm:text-3xl font-semibold text-gray-900 tracking-[-0.02em]">E-commerce Platform</h3>
                <p className="mt-3 text-base text-gray-500 max-w-md leading-relaxed">Sub-second checkouts, automated fulfillment, and real-time inventory.</p>
              </div>
              <CheckoutSuccess />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
