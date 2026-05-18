import { motion, Variants, AnimatePresence } from "framer-motion";
import { Cloud, Database, ShieldCheck, Smartphone, Code2, Server, ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideData = [
    {
      src: "/enterprise_3d_visual_1_1778701225985.png",
      alt: "Sophisticated 3D abstract visual representing interconnected enterprise IT solutions.",
      label: "Global Infrastructure"
    },
    {
      src: "/enterprise_tech_hero_1_1778699858781.png",
      alt: "Premium clean enterprise software dashboard interface.",
      label: "Smart Dashboards"
    },
    {
      src: "/enterprise_tech_hero_2_1778699892415.png",
      alt: "Modern cloud infrastructure visualization.",
      label: "Cloud Ecosystems"
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slideData.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);
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
    <section className="relative pt-16 sm:pt-24 pb-8 px-4 overflow-hidden bg-transparent">
      {/* Cinematic Ambient Glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-32 -z-10 h-[800px] blur-[120px] opacity-20"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 35%, rgba(99, 102, 241, 0.1) 0%, transparent 60%), radial-gradient(45% 40% at 30% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 60%), radial-gradient(40% 35% at 75% 30%, rgba(168, 85, 247, 0.08) 0%, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-8 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="text-left order-2 lg:order-1"
          >
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 rounded-full bg-white border border-gray-200 px-4 py-1.5 text-xs sm:text-sm text-gray-600 shadow-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Trusted by 200+ growing teams
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="mt-8 text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]"
            >
              Your One-Stop IT
              <br />
              <span
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-transparent bg-clip-text"
              >
                Solution
              </span>{" "}
              Provider
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="mt-8 text-lg sm:text-xl text-gray-600 max-w-xl leading-relaxed"
            >
              Scale your business with enterprise-grade technology, beautifully crafted digital products, and strategic guidance — all from a single team.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row items-center justify-start gap-4"
            >
              <motion.a
                whileTap={{ scale: 0.95 }}
                href="/what-we-do/software-services"
                className="w-full sm:w-auto rounded-full bg-gray-900 text-white text-base font-bold px-8 py-4 hover:bg-gray-800 transition-all shadow-lg"
              >
                Explore solutions
              </motion.a>
              <motion.a
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="w-full sm:w-auto rounded-full bg-white border border-gray-200 text-gray-900 text-base font-bold px-8 py-4 hover:bg-gray-50 shadow-sm transition-all"
              >
                Talk to an expert →
              </motion.a>
            </motion.div>

            {/* Slider Navigation */}
            <motion.div 
              variants={itemVariants}
              className="mt-10 flex items-center gap-6"
            >
              <div className="flex items-center gap-3">
                <button 
                  onClick={prevSlide}
                  className="p-3.5 rounded-full border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-all hover:bg-gray-50 active:scale-95"
                  aria-label="Previous slide"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-3.5 rounded-full border border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-900 transition-all hover:bg-gray-50 active:scale-95"
                  aria-label="Next slide"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {slideData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      currentSlide === idx ? "w-8 bg-gray-900" : "w-1.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Slider */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[4/3] w-full max-w-[640px] mx-auto">
              {/* Main Carousel Container */}
              <div className="relative h-full w-full rounded-[2.5rem] border border-white bg-white shadow-xl p-4 overflow-hidden group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="relative h-full w-full rounded-[1.8rem] overflow-hidden"
                  >
                    <img 
                      src={slideData[currentSlide].src} 
                      alt={slideData[currentSlide].alt}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>
                {/* Slide Title Indicator */}
                <div className="absolute bottom-6 right-8 z-20">
                   <div className="px-4 py-2 bg-gray-900/10 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-bold text-gray-900 tracking-widest uppercase">
                     {slideData[currentSlide].label}
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="py-12 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-xl my-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase mb-6 block">
              WHO WE ARE
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8 tracking-tight">About Us</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Wavelet is a precision-focused technology partner dedicated to scaling the world's most ambitious businesses. We bridge the gap between complex enterprise infrastructure and seamless user experiences.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Our multidisciplinary team combines strategic consultancy with expert execution, empowering partners to navigate the rapidly evolving digital landscape with absolute confidence.
            </p>
            
            <div className="flex flex-wrap gap-12 mb-12">
              {[
                { label: "CUSTOMERS", value: "4700+" },
                { label: "LOCATIONS", value: "250+" },
                { label: "PROJECTS", value: "1.2k+" }
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <div className="text-4xl font-bold bg-gradient-to-tr from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-black text-gray-400 tracking-[0.2em] uppercase mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
            
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              href="/about" 
              className="inline-flex items-center justify-center border border-gray-200 text-gray-900 font-bold rounded-full px-10 py-4 hover:bg-gray-50 transition-all shadow-sm text-sm"
            >
              Know More
            </motion.a>
          </motion.div>
          
          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="bg-gradient-to-tr from-blue-50/50 to-purple-50/50 rounded-[2.5rem] aspect-square border border-white shadow-[inset_0_0_80px_rgba(255,255,255,1)] flex items-center justify-center overflow-hidden group">
               <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)', backgroundSize: '32px 32px' }} />
               <div className="relative z-10 w-48 h-48 rounded-full bg-white/40 backdrop-blur-3xl border border-white/60 shadow-2xl flex items-center justify-center animate-pulse">
                 <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 shadow-[0_0_40px_rgba(99,102,241,0.5)]" />
                 </div>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tech Solutions Section */}
      <div className="py-8 sm:py-12 bg-transparent relative border-y border-gray-200/20">
        <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">Explore Our Tech Solutions</h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">Tailored enterprise technology to drive your business forward.</p>
        </div>
        
        <div className="relative group/carousel">
          <div className="flex animate-scroll hover:[animation-play-state:paused] gap-8 px-4 w-max pb-12">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex gap-8">
                {[
                  {
                    title: "Infrastructure Solutions",
                    hoverText: "Build a rock-solid foundation with our high-performance infrastructure services designed for scale and absolute reliability.",
                    image: "/assets/infrastructure-rings.png"
                  },
                  {
                    title: "Cloud Solutions",
                    hoverText: "Seamlessly migrate and optimize your workflows with our expert-led cloud architecture and managed services.",
                    image: "/assets/cloud-folded.png"
                  },
                  {
                    title: "Security Solutions",
                    hoverText: "Fortify your enterprise against evolving threats with our comprehensive cybersecurity audits and protection.",
                    image: "/assets/security-folded.png"
                  },
                  {
                    title: "Business Analytics",
                    hoverText: "Harness the power of data to drive intelligent business decisions. Predictive modeling, data visualization, and AI-driven insights for competitive advantage.",
                    image: "/assets/analytics-wavy.png"
                  },
                  {
                    title: "Annual Maintenance Contract",
                    hoverText: "Keep your systems running at peak performance with our proactive maintenance and support contracts. We ensure maximum uptime.",
                    image: "/assets/amc-swirls.png"
                  },
                  {
                    title: "ERP & Business Applications",
                    hoverText: "Streamline your operations and integrate core workflows. Our custom ERP solutions are built to scale your enterprise efficiently.",
                    image: "/assets/erp-lines.png"
                  },
                  {
                    title: "Staffing Solutions",
                    hoverText: "Rapidly scale your workforce with top-tier technology talent. We provide specialized professionals to accelerate project delivery.",
                    image: "/assets/staffing-spheres.png"
                  }
                ].map((item, idx) => (
                  <div 
                    key={`${i}-${idx}`}
                    style={{ 
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center bottom',
                      backgroundColor: "#1f2937"
                    }}
                    className="group relative w-[400px] h-[450px] shrink-0 rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 transition-all duration-500 cursor-pointer bg-slate-800"
                  >
                    {/* Top Title - Always Visible */}
                    <div className="absolute top-10 left-10 z-10">
                      <h3 className="text-3xl font-bold text-white tracking-tight leading-tight max-w-[240px] drop-shadow-sm">
                        {item.title}
                      </h3>
                    </div>
 
                    {/* Hover Overlay - Slides Up */}
                    <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                      <p className="text-white text-lg leading-relaxed mb-8 font-medium">
                        {item.hoverText}
                      </p>
                      
                      <button className="w-fit flex items-center gap-2 bg-[#10B981] text-white font-bold px-8 py-4 rounded-full shadow-lg hover:bg-[#059669] transition-all transform hover:scale-105 active:scale-95 text-sm uppercase tracking-widest">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-5xl px-2 pb-8 sm:pb-12"
      >
        <div className="relative rounded-t-3xl bg-white border border-gray-200 shadow-2xl overflow-hidden">
          {/* Window chrome */}
          <div className="flex items-center gap-1.5 px-6 py-4 border-b border-gray-100 bg-gray-50/50">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
            <span className="ml-4 text-[11px] text-gray-500 font-mono tracking-wider">app.wavelet.dev/dashboard</span>
          </div>

          {/* Dashboard body */}
          <div className="flex flex-col sm:grid sm:grid-cols-12 gap-4 sm:gap-6 p-6 sm:p-10 h-auto sm:h-[450px]">
            {/* Sidebar */}
            <div className="hidden sm:flex col-span-2 flex-col gap-3">
              <div className="h-8 rounded-xl bg-gray-200" />
              <div className="h-6 rounded-xl bg-gray-100" />
              <div className="h-6 rounded-xl bg-gray-100" />
              <div className="h-6 rounded-xl bg-gray-100" />
              <div className="h-6 rounded-xl bg-gray-100" />
            </div>
            {/* Main */}
            <div className="col-span-12 sm:col-span-10 flex flex-col sm:grid sm:grid-cols-6 gap-4 sm:gap-6">
              <div className="w-full sm:col-span-2 rounded-2xl p-6 flex flex-row sm:flex-col justify-between items-center sm:items-start bg-blue-50 border border-blue-100 shadow-sm">
                <span className="text-[10px] font-bold text-blue-600 uppercase tracking-[0.2em]">Revenue</span>
                <span className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">$248k</span>
              </div>
              <div className="w-full sm:col-span-2 rounded-2xl p-6 flex flex-row sm:flex-col justify-between items-center sm:items-start bg-emerald-50 border border-emerald-100 shadow-sm">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em]">Uptime</span>
                <span className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">99.98%</span>
              </div>
              <div className="w-full sm:col-span-2 rounded-2xl p-6 flex flex-row sm:flex-col justify-between items-center sm:items-start bg-purple-50 border border-purple-100 shadow-sm">
                <span className="text-[10px] font-bold text-purple-600 uppercase tracking-[0.2em]">Deploys</span>
                <span className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">42 / wk</span>
              </div>
              <div className="w-full sm:col-span-6 rounded-2xl bg-white border border-gray-100 shadow-sm p-6 relative overflow-hidden">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-500 tracking-wider">Performance</span>
                  <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-500" />
                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                  </div>
                </div>
                <svg viewBox="0 0 400 100" className="w-full h-[120px] sm:h-[180px]">
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
      <div className="mx-auto max-w-5xl mt-12 px-4 overflow-hidden opacity-40">
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
                    className="text-sm font-black tracking-[0.2em] text-gray-400 hover:text-gray-900 transition-all cursor-default"
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
