import { motion } from "framer-motion";

function MiniChart() {
  return (
    <svg viewBox="0 0 200 80" className="w-full h-20">
      <defs>
        <linearGradient id="bentoChart" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path 
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        d="M0 60 L25 50 L50 55 L75 35 L100 40 L125 22 L150 28 L175 12 L200 18" 
        fill="none" 
        stroke="#10b981" 
        strokeWidth="3" 
        strokeLinecap="round" 
      />
      <motion.path 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        d="M0 60 L25 50 L50 55 L75 35 L100 40 L125 22 L150 28 L175 12 L200 18 L200 80 L0 80 Z" 
        fill="url(#bentoChart)" 
      />
    </svg>
  );
}

function ShieldBadge() {
  return (
    <div className="flex items-center gap-4">
      <motion.div 
        whileHover={{ scale: 1.05 }}
        className="h-16 w-16 rounded-2xl flex items-center justify-center bg-emerald-500/10 border border-emerald-500/20 shadow-sm"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-emerald-400">
          <path d="M12 2L3 6v6c0 5 3.5 9.5 9 10 5.5-.5 9-5 9-10V6l-9-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
      <div>
        <div className="text-sm font-bold text-white uppercase tracking-wider">SOC 2 · ISO 27001</div>
        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Audited & Encrypted</div>
      </div>
    </div>
  );
}

function CodeSnippet() {
  return (
    <div className="rounded-xl bg-black/40 overflow-hidden border border-white/10 shadow-2xl">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-white/5 border-b border-white/5">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <div className="ml-2 text-[10px] text-white/30 font-mono tracking-wider uppercase">integration.ts</div>
      </div>
      
      <div className="p-5 font-mono text-[11px] leading-relaxed">
        <div className="flex gap-4">
          <span className="text-white/20 select-none">1</span>
          <div>
            <span className="text-pink-400">const</span> <span className="text-blue-400">api</span> = <span className="text-pink-400">await</span> connect
          </div>
        </div>
        <div className="flex gap-4">
          <span className="text-white/20 select-none">2</span>
          <div className="pl-4">
            .<span className="text-blue-400">sync</span>({`{`}
          </div>
        </div>
        <div className="flex gap-4">
          <span className="text-white/20 select-none">3</span>
          <div className="pl-8">
            <span className="text-emerald-400">realtime</span>: <span className="text-amber-400">true</span>,
          </div>
        </div>
        <div className="flex gap-4">
          <span className="text-white/20 select-none">4</span>
          <div className="pl-8">
            <span className="text-emerald-400">latency</span>: <span className="text-amber-400">'24ms'</span>
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
    <div className="space-y-4">
      <div className="rounded-2xl bg-black/40 border border-white/10 p-6 shadow-2xl relative overflow-hidden group">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-6 w-6">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[14px] font-bold text-white uppercase tracking-wider">Payment Success</div>
            <div className="text-[10px] font-bold text-emerald-400/60 uppercase tracking-widest mt-1">$4,200.00 confirmed</div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between px-1">
          {[1, 2, 3].map((step) => (
            <motion.div 
              key={step} 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: step * 0.2 }}
              className={`h-1.5 flex-1 rounded-full mx-1 origin-left ${step < 3 ? 'bg-emerald-500' : 'bg-white/10'}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function BentoGrid() {
  return (
    <section className="px-4 py-24 sm:py-32 bg-gray-950">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-24 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">Capabilities Matrix</span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.05]">
            Everything you need to scale,
            <br />
            <span className="text-white/20">built right in.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cloud Infrastructure */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 group rounded-[2.5rem] bg-gray-900/40 backdrop-blur-xl border border-white/10 p-10 sm:p-12 shadow-2xl hover:border-white/20 transition-all duration-500"
          >
            <div className="flex flex-col h-full justify-between gap-16 min-h-[350px]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">01 — Infrastructure</span>
                <h3 className="mt-4 text-3xl font-semibold text-white tracking-tight">Cloud Infrastructure</h3>
                <p className="mt-5 text-lg text-gray-400 max-w-md leading-relaxed">Auto-scaling, multi-region deployments on AWS, Azure & GCP — provisioned in minutes.</p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-black/20 p-8">
                <div className="flex items-center justify-between mb-6 px-1">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Node Performance</span>
                  <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full uppercase tracking-widest">+412%</span>
                </div>
                <MiniChart />
              </div>
            </div>
          </motion.div>

          {/* Security */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="group rounded-[2.5rem] bg-gray-900/40 backdrop-blur-xl border border-white/10 p-10 sm:p-12 shadow-2xl hover:border-white/20 transition-all duration-500"
          >
            <div className="flex flex-col h-full justify-between gap-16 min-h-[350px]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">02 — Security</span>
                <h3 className="mt-4 text-3xl font-semibold text-white tracking-tight">Cybersecurity</h3>
                <p className="mt-5 text-lg text-gray-400 leading-relaxed">Enterprise-grade protection baked into every layer of your application.</p>
              </div>
              <ShieldBadge />
            </div>
          </motion.div>

          {/* API Engines */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="group rounded-[2.5rem] bg-gray-900/40 backdrop-blur-xl border border-white/10 p-10 sm:p-12 shadow-2xl hover:border-white/20 transition-all duration-500"
          >
            <div className="flex flex-col h-full justify-between gap-16 min-h-[350px]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">03 — Connect</span>
                <h3 className="mt-4 text-3xl font-semibold text-white tracking-tight">API Engines</h3>
                <p className="mt-5 text-lg text-gray-400 leading-relaxed">Wire any system together — gracefully and reliably.</p>
              </div>
              <CodeSnippet />
            </div>
          </motion.div>

          {/* E-commerce Platform */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 group rounded-[2.5rem] bg-gray-900/40 backdrop-blur-xl border border-white/10 p-10 sm:p-12 shadow-2xl hover:border-white/20 transition-all duration-500"
          >
            <div className="flex flex-col h-full justify-between gap-16 min-h-[350px]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">04 — Commerce</span>
                <h3 className="mt-4 text-3xl font-semibold text-white tracking-tight">E-commerce</h3>
                <p className="mt-5 text-lg text-gray-400 max-w-md leading-relaxed">Sub-second checkouts, automated fulfillment, and real-time inventory management.</p>
              </div>
              <CheckoutSuccess />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
