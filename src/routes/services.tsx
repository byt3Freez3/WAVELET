import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { EnterpriseFooter } from "@/components/EnterpriseFooter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const RazorpayLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" fill="currentColor">
    <path d="M19.7 2.5l-5.6 12.1L8.5 2.5H2l10.3 21.5 10.3-21.5h-2.9z" />
  </svg>
);

const ShiprocketLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]" fill="currentColor">
    <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2z" />
    <path d="M12 15.5l-3.5 1.5L12 5l3.5 12-3.5-1.5z" opacity="0.3" />
  </svg>
);

const AWSLogo = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8 text-white group-hover:text-orange-400 transition-colors duration-300" fill="currentColor">
    <path d="M18.1 14.1c-1.4 1-3.6 1.6-5.8 1.6-3.1 0-5.8-1.4-7.3-3.6-.3-.4-.1-.8.4-1l1.1-.6c.4-.2.9-.1 1.1.3 1.1 1.4 2.9 2.4 4.8 2.4 1.6 0 3.2-.7 4.4-1.8.4-.4.8-.3 1.1.1l.8 1.1c.3.5.1 1-.5 1.5z" />
    <path d="M19.4 12.1c-.3-.1-.6-.2-.8-.2-.4 0-.8.3-.9.7s-.1.8.2 1.1c.3.4.7.7 1.1 1 .4.3.9.4 1.4.4.5 0 1-.2 1.4-.4.4-.3.7-.7.8-1.1s.1-.8-.1-1.2c-.3-.4-.7-.7-1.1-1-.3-.1-.5-.2-.7-.2-.2 0-.4 0-.6.1z" opacity="0" />
    <path d="M18.1 15.6c-.3-.2-.7-.4-1.1-.5-.4-.1-.8-.2-1.2-.1-.4.1-.8.2-1.2.5s-.7.5-1 .9-.5.8-.6 1.3c-.1.5-.1 1 0 1.5.1.5.3.9.6 1.3.3.4.7.7 1.1 1 .4.3.9.5 1.4.5h.2c.5 0 1-.1 1.5-.3s.9-.5 1.3-.9.7-.8 1-1.3c.3-.5.4-1.1.4-1.6 0-.5-.1-1-.3-1.5s-.5-.9-.9-1.3c-.5-.4-.9-.7-1.3-.9z" opacity="0" />
    <path d="M12 2L2 22h20L12 2z" opacity="0.1" />
  </svg>
);

const MetaLogo = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 text-blue-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" fill="currentColor">
    <path d="M17.5 7c-1.9 0-3.6 1-4.6 2.5C11.9 8 10.2 7 8.3 7 5.1 7 2.5 9.5 2.5 12.7s2.6 5.7 5.8 5.7c1.9 0 3.6-1 4.6-2.5 1 1.5 2.7 2.5 4.6 2.5 3.2 0 5.8-2.6 5.8-5.7S20.7 7 17.5 7zm-9.2 9.4c-2.1 0-3.8-1.7-3.8-3.7s1.7-3.7 3.8-3.7c1.4 0 2.6.7 3.3 1.9-.8 1.1-.8 2.5 0 3.6-.7 1.2-1.9 1.9-3.3 1.9zm9.2 0c-1.4 0-2.6-.7-3.3-1.9.8-1.1.8-2.5 0-3.6.7-1.2 1.9-1.9 3.3-1.9 2.1 0 3.8 1.7 3.8 3.7s-1.7 3.7-3.8 3.7z" />
  </svg>
);

const LineChart = () => (
  <svg viewBox="0 0 200 100" className="w-full h-32">
    <defs>
      <linearGradient id="lineGradient" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
      </linearGradient>
    </defs>
    <motion.path
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 2, ease: "easeInOut" }}
      d="M0 80 Q 25 70, 50 75 T 100 40 T 150 50 T 200 20"
      fill="none"
      stroke="#10b981"
      strokeWidth="4"
      strokeLinecap="round"
    />
    <motion.path
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 1 }}
      d="M0 80 Q 25 70, 50 75 T 100 40 T 150 50 T 200 20 V 100 H 0 Z"
      fill="url(#lineGradient)"
    />
  </svg>
);

const BarChart = () => (
  <div className="flex items-end justify-between gap-3 h-32 w-full px-2">
    {[40, 70, 55, 90, 65, 100].map((h, i) => (
      <motion.div
        key={i}
        initial={{ height: 0, opacity: 0 }}
        whileInView={{ height: `${h}%`, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
        className="flex-1 rounded-t-xl bg-gradient-to-t from-blue-600 to-indigo-500 shadow-[0_0_15px_rgba(59,130,246,0.3)]"
      />
    ))}
  </div>
);

const services = [
  {
    id: "platforms",
    title: "Digital Platforms",
    description: "Enterprise-grade web applications and e-commerce infrastructure built for scale.",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="col-span-1 bg-gray-900/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500"
        >
          <div className="flex items-center gap-1.5 mb-6">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400" />
            <span className="ml-2 text-[10px] text-gray-500 font-mono tracking-widest uppercase">ProductCard.tsx</span>
          </div>
          <pre className="text-[13px] leading-relaxed font-mono overflow-hidden">
            <code className="text-blue-400">interface</code> <code className="text-emerald-400">Props</code> {"{"} {"\n"}
            {"  "}product: <code className="text-emerald-400">Product</code>;{"\n"}
            {"}"} {"\n\n"}
            <code className="text-purple-400">export const</code> <code className="text-blue-400">Card</code> = ({"{"} product {"}"}: Props) ={">"} {"{"} {"\n"}
            {"  "}return ({"\n"}
            {"    "}<code className="text-gray-600">{"<div className=\"rounded-xl shadow-lg\">"}</code>{"\n"}
            {"      "}<code className="text-gray-600">{"<img src={product.image} />"}</code>{"\n"}
            {"    "}<code className="text-gray-600">{"</div>"}</code>{"\n"}
            {"  "});{"\n"}
            {"};"}
          </pre>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15 }}
          className="col-span-1 bg-gray-900/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col justify-center"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-blue-500/5 border border-blue-500/10 hover:border-blue-500/30 transition-colors">
              <div className="h-10 w-10 rounded-full bg-white/5 shadow-sm flex items-center justify-center">
                <RazorpayLogo />
              </div>
              <div>
                <p className="text-sm font-bold text-white uppercase tracking-wider">Razorpay</p>
                <p className="text-[10px] font-bold text-blue-400/60 uppercase tracking-widest">Gateway Integration</p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="h-8 w-px bg-white/5" />
            </div>
            <div className="flex items-center gap-4 p-5 rounded-2xl bg-orange-500/5 border border-orange-500/10 hover:border-orange-500/30 transition-colors">
              <div className="h-10 w-10 rounded-full bg-white/5 shadow-sm flex items-center justify-center">
                <ShiprocketLogo />
              </div>
              <div>
                <p className="text-sm font-bold text-white uppercase tracking-wider">Shiprocket</p>
                <p className="text-[10px] font-bold text-orange-400/60 uppercase tracking-widest">Fulfillment API</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    id: "growth",
    title: "Digital Growth",
    description: "Data-driven marketing strategies and performance optimization to fuel your business expansion.",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="col-span-1 bg-gray-900/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500"
        >
          <div className="flex items-center justify-between mb-8">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Conversion Rate</span>
            <span className="text-emerald-400 font-black text-sm">+24.5%</span>
          </div>
          <LineChart />
          <div className="mt-4 flex justify-between text-[10px] text-gray-500 font-mono">
            <span>JAN</span>
            <span>MAR</span>
            <span>MAY</span>
            <span>JUL</span>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15 }}
          className="col-span-1 bg-gray-900/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500"
        >
          <div className="mb-6 flex items-center justify-between">
             <span className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Market Reach</span>
             <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          </div>
          <BarChart />
        </motion.div>
      </div>
    ),
  },
  {
    id: "software",
    title: "Enterprise Software",
    description: "Robust, secure, and highly scalable software solutions tailored for complex organizational needs.",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="col-span-1 bg-gray-900/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col justify-center items-center text-center"
        >
          <div className="h-20 w-20 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-2xl group">
             <AWSLogo />
          </div>
          <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-2">Cloud Infrastructure</h4>
          <p className="text-xs text-gray-400 max-w-[200px] leading-relaxed">Automated scaling and self-healing systems powered by Node.js and AWS.</p>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15 }}
          className="col-span-1 bg-gray-900/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500"
        >
          <div className="flex flex-col h-full gap-4">
            <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">ISO 27001 Compliant</span>
            </div>
            <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">SOC 2 Type II Certified</span>
            </div>
            <div className="p-4 rounded-2xl bg-purple-500/5 border border-purple-500/10 flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-purple-500" />
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest">AES-256 Encryption</span>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    id: "consultancy",
    title: "IT Consultancy",
    description: "Expert strategic guidance to navigate the evolving technology landscape and optimize your digital ROI.",
    content: (
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="col-span-1 bg-gray-900/40 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col items-center justify-center gap-6 overflow-hidden min-h-[250px]"
        >
          {/* The "W" Drop & Tilt */}
          <motion.div 
            variants={{
              initial: { y: -100, opacity: 0, rotate: 0 },
              animate: { 
                y: 0, 
                opacity: 1, 
                rotate: 12 
              }
            }}
            transition={{ 
              duration: 0.8, 
              type: "tween",
              ease: "backOut"
            }}
            className="h-16 w-16 rounded-2xl bg-white flex items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
             <span className="text-gray-950 text-xl font-black">W</span>
          </motion.div>

          {/* The Line-by-Line Reveal (Synced) */}
          <div className="overflow-hidden">
            <motion.div
              variants={{
                initial: { opacity: 1 },
                animate: {
                  opacity: 1,
                  transition: {
                    delayChildren: 0.6,
                    staggerChildren: 0.08
                  }
                }
              }}
              className="flex gap-1"
            >
              {"WAVELET".split("").map((letter, i) => (
                <div key={i} className="overflow-hidden">
                  <motion.span
                    variants={{
                      initial: { y: "100%" },
                      animate: { y: 0 }
                    }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="block text-2xl font-black text-white/20 uppercase tracking-widest"
                  >
                    {letter}
                  </motion.span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    ),
  },
];

function ServicesPage() {
  const [activeId, setActiveId] = useState(services[0].id);
  const observerRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0% -40% 0%",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    services.forEach((service) => {
      const element = observerRefs.current[service.id];
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 font-sans antialiased selection:bg-white selection:text-gray-950">
      
      <main className="max-w-7xl mx-auto px-4 py-40">
        <div className="lg:grid lg:grid-cols-12 gap-20">
          {/* Sticky Sidebar */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-40">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-8 block">Services Framework</span>
                <h1 className="text-6xl font-semibold tracking-tight text-white mb-12 leading-[0.9]">Precision<br />Architected.</h1>
              </motion.div>
              
              <nav className="space-y-6">
                {services.map((service, i) => (
                  <motion.button
                    key={service.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    onClick={() => scrollToSection(service.id)}
                    className={cn(
                      "group flex items-center w-full text-left transition-all duration-300",
                      activeId === service.id ? "translate-x-3" : ""
                    )}
                  >
                    <div className={cn(
                      "h-px transition-all duration-500 mr-5",
                      activeId === service.id ? "w-16 bg-white" : "w-0 bg-gray-800"
                    )} />
                    <span className={cn(
                      "text-[11px] font-black transition-colors duration-300 uppercase tracking-[0.25em]",
                      activeId === service.id ? "text-white" : "text-gray-600 group-hover:text-gray-400"
                    )}>
                      {service.title}
                    </span>
                  </motion.button>
                ))}
              </nav>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-24 p-10 rounded-[2.5rem] bg-white/5 border border-white/10 text-white relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 h-40 w-40 bg-blue-500/10 blur-[80px] group-hover:scale-150 transition-transform duration-1000" />
                <p className="relative text-xs text-gray-400 mb-5 font-bold uppercase tracking-widest">Enterprise Ready?</p>
                <motion.a 
                  whileTap={{ scale: 0.95 }}
                  href="/contact" 
                  className="relative inline-block text-sm font-black border-b-2 border-white/10 pb-1.5 hover:border-white transition-all uppercase tracking-widest"
                >
                  Connect with us →
                </motion.a>
              </motion.div>
            </div>
          </aside>

          {/* Scrolling Content */}
          <div className="col-span-12 lg:col-span-8">
             {services.map((service) => (
               <section
                 key={service.id}
                 id={service.id}
                 ref={(el) => (observerRefs.current[service.id] = el)}
                 className="min-h-[80vh] py-20 lg:py-32 first:pt-0"
               >
                 <motion.div 
                   initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                   whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                   viewport={{ once: true, amount: 0.15 }}
                   transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                   className="mb-16"
                 >
                   <h2 className="text-5xl font-semibold text-white mb-8 tracking-tight">{service.title}</h2>
                   <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">{service.description}</p>
                 </motion.div>
                 
                 <motion.div 
                   initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
                   whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                   viewport={{ once: true, amount: 0.15 }}
                   transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                   className="relative"
                 >
                   {service.content}
                 </motion.div>
               </section>
             ))}
          </div>
        </div>
      </main>

      <EnterpriseFooter />
    </div>
  );
}
