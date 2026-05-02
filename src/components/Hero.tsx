export function Hero() {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 px-4 overflow-hidden">
      {/* Soft glowing radial gradient backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-[800px] blur-3xl opacity-70"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 35%, oklch(0.88 0.12 295 / 0.55) 0%, transparent 60%), radial-gradient(45% 40% at 30% 25%, oklch(0.88 0.12 235 / 0.45) 0%, transparent 60%), radial-gradient(40% 35% at 75% 30%, oklch(0.9 0.1 25 / 0.4) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-5xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur border border-white/60 px-4 py-1.5 text-xs sm:text-sm text-gray-600 shadow-[0_4px_20px_rgba(8,_112,_184,_0.06)]">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Trusted by 200+ growing teams
        </span>

        <h1 className="mt-7 text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-semibold tracking-[-0.04em] text-gray-900 leading-[0.98]">
          Your One-Stop IT
          <br />
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "var(--gradient-headline)" }}
          >
            Solution
          </span>{" "}
          Provider
        </h1>

        <p className="mt-7 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Scale your business with enterprise-grade technology, beautifully crafted digital products, and strategic guidance — all from a single team.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="#services"
            className="w-full sm:w-auto rounded-full bg-gray-900 text-white text-base font-medium px-7 py-3.5 hover:bg-gray-800 transition-transform hover:scale-[1.03] shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
          >
            Explore solutions
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto rounded-full bg-transparent text-gray-900 text-base font-medium px-7 py-3.5 hover:bg-gray-100 transition"
          >
            Talk to an expert →
          </a>
        </div>
      </div>

      {/* Floating dashboard mockup */}
      <div className="relative mx-auto mt-16 sm:mt-20 max-w-5xl px-2">
        <div className="relative rounded-t-3xl bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_40px_120px_-20px_rgba(8,_112,_184,_0.25)] overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 px-5 py-3 border-b border-gray-100/80 bg-white/40">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
            <span className="ml-4 text-[11px] text-gray-400 font-mono">app.wavelet.dev/dashboard</span>
          </div>

          {/* Dashboard body */}
          <div className="grid grid-cols-12 gap-4 p-5 sm:p-7 h-[320px] sm:h-[400px]">
            {/* Sidebar */}
            <div className="hidden sm:flex col-span-2 flex-col gap-2">
              <div className="h-7 rounded-lg bg-gray-900/90" />
              <div className="h-6 rounded-lg bg-gray-100" />
              <div className="h-6 rounded-lg bg-gray-100" />
              <div className="h-6 rounded-lg bg-gray-100" />
              <div className="h-6 rounded-lg bg-gray-100" />
            </div>
            {/* Main */}
            <div className="col-span-12 sm:col-span-10 grid grid-cols-6 gap-4">
              <div className="col-span-2 rounded-2xl p-4 flex flex-col justify-between" style={{ background: "var(--gradient-blue)" }}>
                <span className="text-[10px] font-medium text-gray-700/70 uppercase tracking-wider">Revenue</span>
                <span className="text-2xl font-semibold text-gray-900">$248k</span>
              </div>
              <div className="col-span-2 rounded-2xl p-4 flex flex-col justify-between" style={{ background: "var(--gradient-mint)" }}>
                <span className="text-[10px] font-medium text-gray-700/70 uppercase tracking-wider">Uptime</span>
                <span className="text-2xl font-semibold text-gray-900">99.98%</span>
              </div>
              <div className="col-span-2 rounded-2xl p-4 flex flex-col justify-between" style={{ background: "var(--gradient-peach)" }}>
                <span className="text-[10px] font-medium text-gray-700/70 uppercase tracking-wider">Deploys</span>
                <span className="text-2xl font-semibold text-gray-900">42 / wk</span>
              </div>
              <div className="col-span-6 rounded-2xl bg-white border border-gray-100 p-4 relative overflow-hidden">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-gray-700">Performance</span>
                  <span className="text-[10px] text-gray-400">Last 30 days</span>
                </div>
                <svg viewBox="0 0 400 100" className="w-full h-[110px] sm:h-[150px]">
                  <defs>
                    <linearGradient id="heroChart" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="oklch(0.6 0.2 270)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="oklch(0.6 0.2 270)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 80 L40 70 L80 75 L120 50 L160 55 L200 35 L240 45 L280 25 L320 30 L360 15 L400 20 L400 100 L0 100 Z" fill="url(#heroChart)" />
                  <path d="M0 80 L40 70 L80 75 L120 50 L160 55 L200 35 L240 45 L280 25 L320 30 L360 15 L400 20" fill="none" stroke="oklch(0.55 0.22 270)" strokeWidth="2" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust banner */}
      <div className="mx-auto max-w-5xl mt-14 px-4 overflow-hidden">
        <p className="text-xs uppercase tracking-[0.25em] text-gray-400 font-medium text-center">
          Trusted by innovative teams worldwide
        </p>
        <div className="mt-10 relative">
          {/* Masking gradients */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10" />
          
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-x-12 sm:gap-x-20 px-6 sm:px-10">
                {["AWS", "GOOGLE CLOUD", "META", "MICROSOFT", "AZURE", "STRIPE"].map((b) => (
                  <span 
                    key={`${b}-${i}`} 
                    className="text-sm font-semibold tracking-[0.2em] text-gray-500 opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0 cursor-default"
                  >
                    {b}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
