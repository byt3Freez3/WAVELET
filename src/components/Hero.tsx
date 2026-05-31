import { motion, Variants, AnimatePresence, useInView, useMotionValue, useSpring } from "framer-motion";
import { Cloud, Database, ShieldCheck, Smartphone, Code2, Server, ArrowLeft, ArrowRight, LayoutDashboard, BarChart3, FileText, Settings } from "lucide-react";
import { useCallback, useEffect, useState, useRef } from "react";
const AnimatedStat = ({ value, suffix = "", decimals = 0 }: { value: number, suffix?: string, decimals?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        let formattedNumber = decimals > 0 ? latest.toFixed(decimals) : Math.round(latest);
        ref.current.textContent = formattedNumber + suffix;
      }
    });
  }, [springValue, suffix, decimals]);

  return <span ref={ref} className="text-xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-tr from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tighter">0{suffix}</span>;
};

const GlobalTechCore = () => {
  return (
    <div className="relative w-full aspect-square bg-slate-50 rounded-[2.5rem] flex items-center justify-center overflow-hidden border border-slate-100 shadow-inner group">
      <svg className="w-full h-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Isometric Grid Background */}
        <defs>
          <pattern id="isoGrid" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(30)">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" className="text-indigo-600/10" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#isoGrid)" />

        {/* Ambient Glows */}
        <circle cx="200" cy="200" r="150" fill="currentColor" className="text-purple-500/5 blur-3xl" />
        
        {/* Static Base Connecting Lines */}
        <path
          d="M80 120 L200 200 L320 120 M200 200 L200 320 M80 280 L200 200 L320 280"
          stroke="currentColor"
          className="text-indigo-500/20"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Animated Data Flow Lines */}
        <motion.path
          d="M80 120 L200 200 L320 120 M200 200 L200 320 M80 280 L200 200 L320 280"
          stroke="currentColor"
          className="text-purple-500"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "800", strokeDashoffset: 800 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />

        {/* Nodes */}
        {[
          { cx: 80, cy: 120, delay: 0 },
          { cx: 320, cy: 120, delay: 0.2 },
          { cx: 200, cy: 200, delay: 0.4 },
          { cx: 80, cy: 280, delay: 0.6 },
          { cx: 320, cy: 280, delay: 0.8 },
          { cx: 200, cy: 320, delay: 1.0 },
        ].map((node, i) => (
          <motion.circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="6"
            className="fill-indigo-500"
            animate={{ scale: [1, 1.5, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
          />
        ))}

        {/* Core Geometry */}
        <motion.g
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: '200px 200px' }}
        >
          <circle cx="200" cy="200" r="60" stroke="currentColor" className="text-purple-500/40" strokeWidth="1" strokeDasharray="4 4" />
          <motion.rect
            x="170" y="170" width="60" height="60"
            rx="12"
            className="fill-indigo-600/10 stroke-purple-400 stroke-2"
            animate={{ scale: [1, 1.1, 1], rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: '200px 200px' }}
          />
        </motion.g>
      </svg>
    </div>
  );
};

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

  const dashboardTabs = [
    {
      id: "overview",
      label: "Overview",
      icon: LayoutDashboard,
      revenue: "₹248k",
      uptime: "99.98%",
      deploys: "42 / wk",
      revenueTrend: "Revenue",
      uptimeStatus: "Uptime",
      deploysStatus: "Deploys",
      pathD: "M0 80 Q 50 70, 100 75 T 200 40 T 300 50 T 400 20",
      fillD: "M0 80 Q 50 70, 100 75 T 200 40 T 300 50 T 400 20 V 100 H 0 Z",
      gradientColor: "#3b82f6",
    },
    {
      id: "analytics",
      label: "Analytics",
      icon: BarChart3,
      revenue: "₹312k",
      uptime: "99.99%",
      deploys: "56 / wk",
      revenueTrend: "Live Traffic",
      uptimeStatus: "SLA Response",
      deploysStatus: "Active Nodes",
      pathD: "M0 90 Q 50 40, 100 60 T 200 20 T 300 80 T 400 10",
      fillD: "M0 90 Q 50 40, 100 60 T 200 20 T 300 80 T 400 10 V 100 H 0 Z",
      gradientColor: "#10b981",
    },
    {
      id: "reports",
      label: "Reports",
      icon: FileText,
      revenue: "₹195k",
      uptime: "99.95%",
      deploys: "38 / wk",
      revenueTrend: "Database Qs",
      uptimeStatus: "Server Health",
      deploysStatus: "Queries / sec",
      pathD: "M0 50 Q 50 80, 100 30 T 200 70 T 300 30 T 400 40",
      fillD: "M0 50 Q 50 80, 100 30 T 200 70 T 300 30 T 400 40 V 100 H 0 Z",
      gradientColor: "#8b5cf6",
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      revenue: "24%",
      uptime: "4.2 GB",
      deploys: "1.2 GB/s",
      revenueTrend: "CPU Usage",
      uptimeStatus: "Memory Allocation",
      deploysStatus: "Network I/O",
      pathD: "M0 60 Q 50 62, 100 58 T 200 60 T 300 59 T 400 60",
      fillD: "M0 60 Q 50 62, 100 58 T 200 60 T 300 59 T 400 60 V 100 H 0 Z",
      gradientColor: "#6366f1",
    },
  ];

  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [timerKey, setTimerKey] = useState(0);
  const [activeShowcaseIdx, setActiveShowcaseIdx] = useState(0);
  
  const showcaseProjects = [
    { name: "MiracleRainwear", image: "/miraclewear_showcase.jpeg", link: "/work" },
    { name: "Computer Plaza", image: "/computer_plaza_showcase.jpeg", link: "/work" },
    { name: "Manoj Singh Computer Wala", image: "/manoj_singh_showcase.jpeg", link: "/work" },
    { name: "Rongeen", image: "/rongeen_showcase.jpeg", link: "/work" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTabIdx((prev) => (prev + 1) % dashboardTabs.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [timerKey]);

  useEffect(() => {
    const showcaseInterval = setInterval(() => {
      setActiveShowcaseIdx((prev) => (prev + 1) % showcaseProjects.length);
    }, 3500);
    return () => clearInterval(showcaseInterval);
  }, []);

  const handleTabClick = (idx: number) => {
    setActiveTabIdx(idx);
    setTimerKey((prev) => prev + 1);
  };
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
      <div className="py-12 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10 bg-white border border-gray-100 rounded-[2.5rem] shadow-xl my-12 overflow-hidden">
        {/* Subtle radial gradient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(99,102,241,0.03),_transparent_70%)] pointer-events-none" />
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10"
        >
          {/* Left Column */}
          <div className="flex flex-col">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
            >
              <span className="text-xs font-bold tracking-[0.2em] text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 uppercase mb-6 block">
                WHO WE ARE
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-8 tracking-tight">
                About Us
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Wavelet is a precision-focused technology partner dedicated to scaling the world's most ambitious businesses. We bridge the gap between complex enterprise infrastructure and seamless user experiences.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                Our multidisciplinary team combines strategic consultancy with expert execution, empowering partners to navigate the rapidly evolving digital landscape with absolute confidence.
              </p>
            </motion.div>
            
            <motion.div 
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
              className="grid grid-cols-3 gap-2 sm:gap-4 mb-12"
            >
              {[
                { label: "CUSTOMERS", value: 4700, suffix: "+" },
                { label: "LOCATIONS", value: 250, suffix: "+" },
                { label: "PROJECTS", value: 1.2, suffix: "k+", decimals: 1 }
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col bg-slate-50/50 border border-slate-100 rounded-xl px-2 py-3 sm:p-4 text-center justify-center">
                  <AnimatedStat value={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  <div className="text-[8px] sm:text-[10px] font-black text-gray-500 tracking-[0.1em] sm:tracking-[0.2em] uppercase mt-1 sm:mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
              }}
            >
              <a 
                href="/about" 
                className="inline-flex items-center justify-center bg-slate-900 text-white font-bold rounded-full px-10 py-4 hover:-translate-y-1 hover:shadow-lg transition-all text-sm"
              >
                Know More
              </a>
            </motion.div>
          </div>
          
          {/* Right Column */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } }
            }}
            className="relative"
          >
            <GlobalTechCore />
          </motion.div>
        </motion.div>
      </div>

      {/* Tech Solutions Section */}
      <div className="py-8 sm:py-12 bg-transparent relative border-y border-gray-200/20">
        <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">Explore Our Tech Solutions</h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">Tailored enterprise technology to drive your business forward.</p>
        </div>
        
        <div className="relative group/carousel">
          <div className="flex animate-scroll hover:[animation-play-state:paused] gap-8 px-4 w-max pb-8">
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

      {/* Work Showcase Section */}
      <div className="py-12 sm:py-16 max-w-7xl mx-auto px-4 relative z-10 border-t border-gray-200/20">
        <div className="text-center mb-16">
          <span className="inline-block py-1 px-4 rounded-full bg-gray-50 border border-gray-200 text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-6 shadow-sm">
            Work Showcase
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.9]">
            Work that drives <br />
            <span className="text-gray-400">revenue.</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 items-stretch bg-white border border-gray-200 rounded-[2.5rem] p-4 shadow-xl">
          {/* Tabs List */}
          <div className="flex flex-col w-full lg:w-1/3 gap-2 justify-center">
            {showcaseProjects.map((project, idx) => (
              <a
                key={project.name}
                href={project.link}
                onMouseEnter={() => setActiveShowcaseIdx(idx)}
                className={`p-6 rounded-2xl transition-all duration-300 flex items-center justify-between group cursor-pointer border border-transparent ${
                  activeShowcaseIdx === idx 
                    ? "bg-gray-900 text-white shadow-lg border-gray-800 transform scale-[1.02]" 
                    : "hover:bg-gray-50 text-gray-600 hover:border-gray-200"
                }`}
              >
                <span className={`font-semibold text-lg ${activeShowcaseIdx === idx ? "text-white" : "text-gray-900"}`}>
                  {project.name}
                </span>
                <ArrowRight className={`w-5 h-5 transition-transform group-hover:translate-x-1 ${activeShowcaseIdx === idx ? "text-white" : "text-gray-400"}`} />
              </a>
            ))}
          </div>

          {/* Image Display */}
          <div className="w-full lg:w-2/3 aspect-[16/9] relative group bg-gray-50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100">
            <a href={showcaseProjects[activeShowcaseIdx].link} className="absolute inset-0 block">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeShowcaseIdx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  src={showcaseProjects[activeShowcaseIdx].image}
                  alt={showcaseProjects[activeShowcaseIdx].name}
                  className="w-full h-full object-contain"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-gray-900/5 group-hover:bg-transparent transition-colors duration-500" />
            </a>
          </div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto max-w-5xl px-4 pb-8 sm:pb-12 mt-12 sm:mt-16"
      >
        <div className="relative rounded-[2rem] bg-white border border-gray-200 shadow-2xl overflow-hidden">
          {/* Window chrome */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2 px-6 py-4 border-b border-gray-100 bg-gray-50/50">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-4 text-[11px] text-gray-500 font-mono tracking-wider">app.wavelet.dev/dashboard</span>
            </div>
            {/* Live Indicator */}
            <div className="flex items-center gap-2 max-sm:mt-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">LIVE STATUS</span>
            </div>
          </div>

          {/* Dashboard body */}
          <div className="flex flex-col sm:grid sm:grid-cols-12 gap-4 sm:gap-6 p-6 sm:p-10 min-h-[460px]">
            
            {/* Sidebar (Vertical Menu on desktop, horizontal on mobile) */}
            <div className="flex sm:flex-col col-span-12 sm:col-span-3 gap-2 overflow-x-auto sm:overflow-x-visible pb-3 sm:pb-0 border-b sm:border-b-0 sm:border-r border-gray-100 pr-0 sm:pr-4 shrink-0 scrollbar-none">
              <div className="hidden sm:block text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-3 px-3">
                Workspace
              </div>
              {dashboardTabs.map((tab, idx) => {
                const IconComponent = tab.icon;
                const isActive = idx === activeTabIdx;
                return (
                  <button
                    key={tab.id}
                    onClick={() => handleTabClick(idx)}
                    className={`flex items-center gap-2.5 py-2.5 px-4 rounded-xl text-left transition-all duration-300 shrink-0 text-xs font-semibold ${
                      isActive
                        ? "bg-gray-900 text-white shadow-md transform scale-[1.02]"
                        : "text-gray-500 hover:text-gray-900 hover:bg-gray-100/80"
                    }`}
                  >
                    <IconComponent className={`w-4 h-4 transition-transform duration-300 ${isActive ? "rotate-3" : "group-hover:scale-110"}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Main Area */}
            <div className="col-span-12 sm:col-span-9 flex flex-col gap-4 sm:gap-6 pl-0 sm:pl-2">
              
              {/* Three Stat Cards */}
              <div className="flex overflow-x-auto sm:grid sm:grid-cols-3 gap-3 sm:gap-6 pb-2 sm:pb-0 w-full snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                
                {/* Stat 1 */}
                <div className="min-w-[130px] flex-shrink-0 snap-center sm:min-w-0 rounded-2xl p-3 sm:p-5 flex flex-col justify-between items-start bg-blue-50 border border-blue-100 shadow-sm transition-all duration-500 hover:shadow-md min-h-[90px] sm:min-h-[110px]">
                  <span className="text-[10px] sm:text-xs leading-tight font-bold text-blue-600 uppercase tracking-[0.2em] break-words whitespace-normal">
                    {dashboardTabs[activeTabIdx].revenueTrend}
                  </span>
                  <motion.span 
                    key={activeTabIdx + "-rev"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-2"
                  >
                    {dashboardTabs[activeTabIdx].revenue}
                  </motion.span>
                </div>

                {/* Stat 2 */}
                <div className="min-w-[130px] flex-shrink-0 snap-center sm:min-w-0 rounded-2xl p-3 sm:p-5 flex flex-col justify-between items-start bg-emerald-50 border border-emerald-100 shadow-sm transition-all duration-500 hover:shadow-md min-h-[90px] sm:min-h-[110px]">
                  <span className="text-[10px] sm:text-xs leading-tight font-bold text-emerald-600 uppercase tracking-[0.2em] break-words whitespace-normal">
                    {dashboardTabs[activeTabIdx].uptimeStatus}
                  </span>
                  <motion.span 
                    key={activeTabIdx + "-upt"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-2"
                  >
                    {dashboardTabs[activeTabIdx].uptime}
                  </motion.span>
                </div>

                {/* Stat 3 */}
                <div className="min-w-[130px] flex-shrink-0 snap-center sm:min-w-0 rounded-2xl p-3 sm:p-5 flex flex-col justify-between items-start bg-purple-50 border border-purple-100 shadow-sm transition-all duration-500 hover:shadow-md min-h-[90px] sm:min-h-[110px]">
                  <span className="text-[10px] sm:text-xs leading-tight font-bold text-purple-600 uppercase tracking-[0.2em] break-words whitespace-normal">
                    {dashboardTabs[activeTabIdx].deploysStatus}
                  </span>
                  <motion.span 
                    key={activeTabIdx + "-dep"}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-2"
                  >
                    {dashboardTabs[activeTabIdx].deploys}
                  </motion.span>
                </div>

              </div>

              {/* Line Chart */}
              <div className="flex-1 rounded-2xl bg-white border border-gray-100 shadow-sm p-4 sm:p-6 relative overflow-hidden flex flex-col justify-between min-h-[180px] sm:min-h-[220px]">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-900 tracking-wider">Metrics Performance</span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold mt-0.5">Real-time system telemetry</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-2.5 py-1 bg-gray-100 rounded-lg text-[9px] font-bold text-gray-500 uppercase tracking-widest">
                      Active: {dashboardTabs[activeTabIdx].label}
                    </span>
                  </div>
                </div>

                <div className="relative w-full flex-1 flex items-end">
                  <svg viewBox="0 0 400 100" className="w-full h-[100px] sm:h-[130px]" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="heroChartGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor={dashboardTabs[activeTabIdx].gradientColor} stopOpacity="0.25" />
                        <stop offset="100%" stopColor={dashboardTabs[activeTabIdx].gradientColor} stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    
                    {/* Fill Area with path morph animation */}
                    <motion.path 
                      d={dashboardTabs[activeTabIdx].fillD} 
                      fill="url(#heroChartGradient)"
                      animate={{ d: dashboardTabs[activeTabIdx].fillD }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                    
                    {/* Stroke Line with path morph animation */}
                    <motion.path 
                      d={dashboardTabs[activeTabIdx].pathD} 
                      fill="none" 
                      stroke={dashboardTabs[activeTabIdx].gradientColor} 
                      strokeWidth="3.5" 
                      strokeLinecap="round"
                      animate={{ d: dashboardTabs[activeTabIdx].pathD }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                    />
                  </svg>
                </div>
              </div>

            </div>
          </div>
        </div>
      </motion.div>


    </section>
  );
}
