import { motion, Variants } from "framer-motion";

export function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 px-4 overflow-hidden bg-gray-950">
      {/* Cinematic Ambient Glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-[800px] blur-[120px] opacity-40"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 35%, rgba(99, 102, 241, 0.2) 0%, transparent 60%), radial-gradient(45% 40% at 30% 25%, rgba(59, 130, 246, 0.2) 0%, transparent 60%), radial-gradient(40% 35% at 75% 30%, rgba(168, 85, 247, 0.15) 0%, transparent 60%)",
        }}
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-5xl text-center"
      >
        <motion.div variants={itemVariants}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur border border-white/10 px-4 py-1.5 text-xs sm:text-sm text-gray-400 shadow-xl">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Trusted by 200+ growing teams
          </span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="mt-7 text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-semibold tracking-[-0.04em] text-white leading-[0.98]"
        >
          Your One-Stop IT
          <br />
          <span
            className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(99,102,241,0.4)]"
          >
            Solution
          </span>{" "}
          Provider
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="mt-7 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Scale your business with enterprise-grade technology, beautifully crafted digital products, and strategic guidance — all from a single team.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            whileTap={{ scale: 0.95 }}
            href="/services"
            className="w-full sm:w-auto rounded-full bg-white text-gray-950 text-base font-bold px-8 py-4 hover:bg-gray-200 transition-all hover:scale-[1.05] shadow-[0_20px_60px_-10px_rgba(255,255,255,0.2)]"
          >
            Explore solutions
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.95 }}
            href="/contact"
            className="w-full sm:w-auto rounded-full bg-white/5 border border-white/10 text-white text-base font-bold px-8 py-4 hover:bg-white/10 transition-all"
          >
            Talk to an expert →
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating Dark Dashboard Mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto mt-16 sm:mt-24 max-w-5xl px-2"
      >
        <div className="relative rounded-t-3xl bg-gray-900/80 backdrop-blur-3xl border border-white/10 shadow-[0_0_100px_-20px_rgba(59,130,246,0.3)] overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 px-6 py-4 border-b border-white/5 bg-white/5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-4 text-[11px] text-gray-500 font-mono tracking-wider">app.wavelet.dev/dashboard</span>
          </div>

          {/* Dashboard body */}
          <div className="grid grid-cols-12 gap-6 p-6 sm:p-10 h-[350px] sm:h-[450px]">
            {/* Sidebar */}
            <div className="hidden sm:flex col-span-2 flex-col gap-3">
              <div className="h-8 rounded-xl bg-white/10" />
              <div className="h-6 rounded-xl bg-white/5" />
              <div className="h-6 rounded-xl bg-white/5" />
              <div className="h-6 rounded-xl bg-white/5" />
              <div className="h-6 rounded-xl bg-white/5" />
            </div>
            {/* Main */}
            <div className="col-span-12 sm:col-span-10 grid grid-cols-6 gap-6">
              <div className="col-span-2 rounded-2xl p-6 flex flex-col justify-between bg-blue-500/10 border border-blue-500/20">
                <span className="text-[10px] font-bold text-blue-400/70 uppercase tracking-[0.2em]">Revenue</span>
                <span className="text-3xl font-bold text-white tracking-tight">$248k</span>
              </div>
              <div className="col-span-2 rounded-2xl p-6 flex flex-col justify-between bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-[10px] font-bold text-emerald-400/70 uppercase tracking-[0.2em]">Uptime</span>
                <span className="text-3xl font-bold text-white tracking-tight">99.98%</span>
              </div>
              <div className="col-span-2 rounded-2xl p-6 flex flex-col justify-between bg-purple-500/10 border border-purple-500/20">
                <span className="text-[10px] font-bold text-purple-400/70 uppercase tracking-[0.2em]">Deploys</span>
                <span className="text-3xl font-bold text-white tracking-tight">42 / wk</span>
              </div>
              <div className="col-span-6 rounded-2xl bg-white/5 border border-white/5 p-6 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-400 tracking-wider">Performance</span>
                  <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                  </div>
                </div>
                <svg viewBox="0 0 400 100" className="w-full h-[150px] sm:h-[180px]">
                  <defs>
                    <linearGradient id="heroChartDark" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 80 Q 50 70, 100 75 T 200 40 T 300 50 T 400 20 V 100 H 0 Z" fill="url(#heroChartDark)" />
                  <path d="M0 80 Q 50 70, 100 75 T 200 40 T 300 50 T 400 20" fill="none" stroke="#3b82f6" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Trust banner */}
      <div className="mx-auto max-w-5xl mt-24 px-4 overflow-hidden opacity-40">
        <p className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold text-center mb-12">
          Trusted by innovative teams worldwide
        </p>
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex shrink-0 items-center gap-x-16 sm:gap-x-24 px-8">
                {["AWS", "GOOGLE CLOUD", "META", "MICROSOFT", "AZURE", "STRIPE", "RAZORPAY"].map((b) => (
                  <span 
                    key={`${b}-${i}`} 
                    className="text-sm font-black tracking-[0.2em] text-white/40 hover:text-white/100 transition-all cursor-default"
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
