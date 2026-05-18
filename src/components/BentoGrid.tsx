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
        className="h-16 w-16 rounded-2xl flex items-center justify-center bg-emerald-50 border border-emerald-100 shadow-sm"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-8 w-8 text-emerald-600">
          <path d="M12 2L3 6v6c0 5 3.5 9.5 9 10 5.5-.5 9-5 9-10V6l-9-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
      <div>
        <div className="text-sm font-bold text-gray-900 uppercase tracking-wider">SOC 2 · ISO 27001</div>
        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">Audited & Encrypted</div>
      </div>
    </div>
  );
}

function CodeSnippet() {
  return (
    <div className="rounded-xl bg-gray-50 overflow-hidden border border-gray-200 shadow-sm">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-white border-b border-gray-200">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <div className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        <div className="ml-2 text-[10px] text-gray-400 font-mono tracking-wider uppercase">integration.ts</div>
      </div>
      
      <div className="p-5 font-mono text-[11px] leading-relaxed text-gray-700">
        <div className="flex gap-4">
          <span className="text-gray-300 select-none">1</span>
          <div>
            <span className="text-pink-600">const</span> <span className="text-blue-600">api</span> = <span className="text-pink-600">await</span> connect
          </div>
        </div>
        <div className="flex gap-4">
          <span className="text-gray-300 select-none">2</span>
          <div className="pl-4">
            .<span className="text-blue-600">sync</span>({`{`}
          </div>
        </div>
        <div className="flex gap-4">
          <span className="text-gray-300 select-none">3</span>
          <div className="pl-8">
            <span className="text-emerald-600">realtime</span>: <span className="text-amber-600">true</span>,
          </div>
        </div>
        <div className="flex gap-4">
          <span className="text-gray-300 select-none">4</span>
          <div className="pl-8">
            <span className="text-emerald-600">latency</span>: <span className="text-amber-600">'24ms'</span>
          </div>
        </div>
        <div className="flex gap-4">
          <span className="text-gray-300 select-none">5</span>
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
      <div className="rounded-2xl bg-white border border-gray-200 p-6 shadow-sm relative overflow-hidden group">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-6 w-6">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[14px] font-bold text-gray-900 uppercase tracking-wider">Payment Success</div>
            <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-1">$4,200.00 confirmed</div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between px-1">
          {[1, 2, 3].map((step) => (
            <motion.div 
              key={step} 
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: step * 0.2 }}
              className={`h-1.5 flex-1 rounded-full mx-1 origin-left ${step < 3 ? 'bg-emerald-500' : 'bg-gray-200'}`} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function BentoGrid() {
  return (
    <section className="px-4 py-8 sm:py-12 bg-transparent">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">Capabilities Matrix</span>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1.05]">
            Everything you need to scale,
            <br />
            <span className="text-gray-400">built right in.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Cloud Infrastructure */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="sm:col-span-2 group rounded-[2.5rem] bg-white border border-gray-200 p-8 sm:p-12 shadow-lg hover:border-gray-300 transition-all duration-500"
          >
            <div className="flex flex-col h-full justify-between gap-12 sm:gap-16 min-h-[300px] sm:min-h-[350px]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">01 — Infrastructure</span>
                <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">Cloud Infrastructure</h3>
                <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-md leading-relaxed">Auto-scaling, multi-region deployments on AWS, Azure & GCP — provisioned in minutes.</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6 px-1">
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Node Performance</span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase tracking-widest">+412%</span>
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
            className="group rounded-[2.5rem] bg-white border border-gray-200 p-8 sm:p-12 shadow-lg hover:border-gray-300 transition-all duration-500"
          >
            <div className="flex flex-col h-full justify-between gap-12 sm:gap-16 min-h-[300px] sm:min-h-[350px]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">02 — Security</span>
                <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">Cybersecurity</h3>
                <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">Enterprise-grade protection baked into every layer of your application.</p>
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
            className="group rounded-[2.5rem] bg-white border border-gray-200 p-8 sm:p-12 shadow-lg hover:border-gray-300 transition-all duration-500"
          >
            <div className="flex flex-col h-full justify-between gap-12 sm:gap-16 min-h-[300px] sm:min-h-[350px]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">03 — Connect</span>
                <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">API Engines</h3>
                <p className="mt-5 text-base sm:text-lg text-gray-600 leading-relaxed">Wire any system together — gracefully and reliably.</p>
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
            className="sm:col-span-2 group rounded-[2.5rem] bg-white border border-gray-200 p-8 sm:p-12 shadow-lg hover:border-gray-300 transition-all duration-500"
          >
            <div className="flex flex-col h-full justify-between gap-12 sm:gap-16 min-h-[300px] sm:min-h-[350px]">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">04 — Commerce</span>
                <h3 className="mt-4 text-2xl sm:text-3xl font-semibold text-gray-900 tracking-tight">E-commerce</h3>
                <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-md leading-relaxed">Sub-second checkouts, automated fulfillment, and real-time inventory management.</p>
              </div>
              <CheckoutSuccess />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
