import { Link } from "@tanstack/react-router";
import { Play, ArrowRight, ChevronRight, Plus, Minus, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { EnterpriseFooter } from "@/components/EnterpriseFooter";

export interface ServiceData {
  title: string;
  subtitle: string;
  stats: { value: string; label: string }[];
  subServices: { title: string; description: string; gradient: string }[];
  media: { title: string; image: string; description?: string; customGradient?: string }[];
  features: { icon: any; title: string; description: string; iconColor: string }[];
  alliances: string[];
  faqs: { question: string; answer: string }[];
  heroBg?: string;
  isHeroLight?: boolean;
}

const faqDataFallback = [
  {
    question: "What is your typical development methodology?",
    answer: "We utilize an Agile methodology, working in two-week sprints. This ensures continuous delivery, regular feedback loops, and the flexibility to adapt to evolving requirements quickly."
  },
  {
    question: "How do you ensure code quality?",
    answer: "We implement a rigorous quality assurance process including automated testing (unit, integration, and E2E), manual peer code reviews, and strict CI/CD pipelines to maintain enterprise-grade standards."
  },
  {
    question: "What is your pricing and engagement structure?",
    answer: "We offer flexible engagement models tailored to your project scope. This includes fixed-price contracts for well-defined, scoped projects, and time-and-materials (T&M) for ongoing, dynamic product development."
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer: "Yes, we offer comprehensive post-launch Service Level Agreements (SLAs) to ensure your software remains secure, updated, and optimized for performance as your user base scales."
  },
  {
    question: "How do you handle data security and compliance?",
    answer: "Security is built into our architecture from day one. We adhere to industry best practices, including data encryption at rest and in transit, secure APIs, and compliance readiness for frameworks like GDPR and HIPAA."
  }
];

export function ServiceLandingTemplate({ data }: { data: ServiceData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const isHeroLight = data.isHeroLight;
  const shouldReduceMotion = useReducedMotion();

  const sectionTransition = {
    duration: shouldReduceMotion ? 0.01 : 0.8,
    ease: [0.16, 1, 0.3, 1] as const
  };

  const getSectionReveal = () => ({
    initial: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: sectionTransition
  });

  const getGridContainer = () => ({
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true, margin: "-100px" },
    variants: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: shouldReduceMotion ? 0 : 0.12
        }
      }
    }
  });

  const getGridItem = () => ({
    variants: {
      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: shouldReduceMotion ? 0.01 : 0.6,
          ease: [0.16, 1, 0.3, 1] as const
        }
      }
    }
  });

  const faqsToRender = data.faqs && data.faqs.length > 0 ? data.faqs : faqDataFallback;

  return (
    <div className="min-h-screen bg-white font-sans antialiased selection:bg-blue-500/10 selection:text-blue-600">
      
      {/* 1. Hero Section */}
      <section className={`relative pt-24 pb-24 px-4 overflow-hidden text-center transition-colors duration-500 ${data.heroBg || 'bg-gray-900'}`}>
        {/* Glow - Only show on dark theme or subtle on light */}
        {!isHeroLight && (
          <div className="absolute inset-0 -z-0 opacity-30" style={{ background: "radial-gradient(circle at 50% 50%, oklch(0.4 0.15 260 / 0.5) 0%, transparent 70%)" }} />
        )}
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={sectionTransition}
            className={`text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-8 ${isHeroLight ? 'text-slate-900' : 'text-white'}`}
          >
            {data.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.1 }}
            className={`text-xl mb-12 max-w-3xl mx-auto leading-relaxed ${isHeroLight ? 'text-slate-700' : 'text-gray-400'}`}
          >
            {data.subtitle}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...sectionTransition, delay: shouldReduceMotion ? 0 : 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact" className={`px-10 py-5 rounded-full font-bold transition-all shadow-xl ${isHeroLight ? 'bg-slate-900 text-white hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98]' : 'bg-white text-gray-900 hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98]'}`}>
              Get Started Now
            </Link>
            <button className={`px-10 py-5 rounded-full font-bold transition-all ${isHeroLight ? 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 hover:scale-[1.02] active:scale-[0.98] shadow-sm' : 'text-white border border-gray-700 hover:bg-gray-800 hover:scale-[1.02] active:scale-[0.98]'}`}>
              Watch Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Stats Strip */}
      <motion.section 
        {...getSectionReveal()}
        className="relative z-20 -mt-16 px-4"
      >
        <motion.div 
          {...getGridContainer()}
          className={`max-w-6xl mx-auto bg-white border border-gray-100 rounded-[2.5rem] p-10 md:p-16 grid grid-cols-2 md:grid-cols-4 gap-12 text-center ${isHeroLight ? 'shadow-sm' : 'shadow-[0_30px_100px_rgba(0,0,0,0.1)]'}`}
        >
          {data.stats.map((stat, i) => (
            <motion.div 
              key={i} 
              {...getGridItem()}
              className="flex flex-col gap-2"
            >
              <span className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">{stat.value}</span>
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* 3. Sub-Services Grid */}
      <motion.section 
        {...getSectionReveal()}
        className="bg-white py-16 lg:py-20 px-4 mt-20"
      >
        <div className="max-w-6xl mx-auto">
          <motion.div 
            {...getGridContainer()}
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6"
          >
            {data.subServices.map((service, i) => {
              const isLight = service.gradient.includes('50') || service.gradient.includes('100') || service.gradient.includes('200') || service.gradient.includes('white');
              return (
                <motion.div 
                  key={i} 
                  {...getGridItem()}
                  whileHover={shouldReduceMotion ? {} : { y: -8, scale: 1.02 }}
                  className="aspect-[3/4] rounded-3xl p-8 flex flex-col justify-end relative overflow-hidden group cursor-pointer border border-white/40 shadow-lg shadow-gray-200/50 transition-all duration-300"
                >
                  <div className={`absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity ${service.gradient}`} />
                  <div className="relative z-10">
                    <h3 className={`text-2xl font-bold mb-4 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 ${
                      isLight ? 'text-gray-900 font-medium' : 'text-gray-300'
                    }`}>
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 4. Transforming IT (Media) */}
      <motion.section 
        {...getSectionReveal()}
        className="py-16 lg:py-20 px-4 bg-gray-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center tracking-tight">Transforming IT Ecosystems</h2>
          <motion.div 
            {...getGridContainer()}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {data.media.map((item, i) => {
              const isLight = item.customGradient?.includes('white') || item.customGradient?.includes('50') || item.customGradient?.includes('100') || item.customGradient?.includes('200');
              return (
                <motion.div 
                  key={i} 
                  {...getGridItem()}
                  whileHover={shouldReduceMotion ? {} : { y: -4, scale: 1.01 }}
                  className={`aspect-[16/10] rounded-[2.5rem] relative overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all duration-500 hover:shadow-2xl ${
                    item.customGradient || "bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800/40"
                  }`}
                >
                  <div className={`absolute inset-0 ${isLight ? 'bg-white/5' : 'bg-black/10'} group-hover:bg-transparent transition-colors duration-500`} />
                  
                  {item.image ? (
                     <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                  ) : (
                    <div className={`absolute inset-0 opacity-10 ${isLight ? 'bg-[radial-gradient(circle_at_50%_120%,rgba(0,0,0,0.1),transparent)]' : 'bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)]'}`} />
                  )}

                  <div className="absolute inset-x-10 bottom-10 z-10 flex flex-col items-center text-center">
                    {item.description && (
                      <p className={`text-sm mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out leading-relaxed max-w-sm font-medium tracking-wide ${
                        isLight ? 'text-gray-600' : 'text-white/80'
                      }`}>
                        {item.description}
                      </p>
                    )}
                    <div className="flex items-center gap-2 group/title">
                      <h3 className={`text-3xl font-bold tracking-tight transition-colors duration-300 ${
                        isLight ? 'text-gray-900' : 'text-white drop-shadow-lg'
                      }`}>
                        {item.title}
                      </h3>
                      <ArrowUpRight className={`w-6 h-6 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 ${
                        isLight ? 'text-gray-400 group-hover:text-gray-900' : 'text-white/70 group-hover:text-white'
                      }`} />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* 5. Unlock the Future (Features) */}
      <motion.section 
        {...getSectionReveal()}
        className="py-16 lg:py-20 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-20 text-center tracking-tight">Unlock the Future</h2>
          <motion.div 
            {...getGridContainer()}
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
          >
            {data.features.map((feature, i) => (
              <motion.div 
                key={i} 
                {...getGridItem()}
                className="flex flex-col items-start gap-6"
              >
                <div className={`p-4 rounded-2xl ${feature.iconColor} bg-opacity-10`}>
                  <feature.icon className={`h-8 w-8 ${feature.iconColor.replace('bg-', 'text-')}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* 6. Trusted Alliances */}
      <motion.section 
        {...getSectionReveal()}
        className="py-24 border-y border-gray-100"
      >
        <div className="max-w-6xl mx-auto px-4">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.4em] mb-16">Strategic Partners & Alliances</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all">
            {data.alliances.map((alliance) => (
              <span key={alliance} className="text-2xl font-black text-gray-900 tracking-tighter">{alliance}</span>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 7. FAQ & Contact Integration */}
      <motion.section 
        {...getSectionReveal()}
        className="py-16 lg:py-20 px-4 bg-white"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4 mb-24">
            {faqsToRender.map((faq, i) => (
              <div key={i} className="border-b border-gray-200">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left group transition-all"
                >
                  <span className={`text-xl font-semibold transition-colors duration-300 ${openFaq === i ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}>
                    {faq.question}
                  </span>
                  <div className={`transition-transform duration-300 ${openFaq === i ? 'rotate-45' : 'rotate-0'}`}>
                    {openFaq === i ? <Plus className="h-6 w-6 text-blue-600" /> : <Plus className="h-6 w-6 text-gray-400" />}
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      animate={shouldReduceMotion ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pb-8 text-gray-600 leading-relaxed text-lg">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="bg-gray-900 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ background: "radial-gradient(circle at 100% 0%, white 0%, transparent 50%)" }} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 relative z-10">
              <div>
                <h2 className="text-5xl font-bold mb-8 tracking-tight">Let's Connect</h2>
                <p className="text-gray-400 text-lg leading-relaxed">
                  Have a specific challenge? Our enterprise architects are ready to help you navigate the complexity.
                </p>
              </div>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-white text-gray-900 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                <input type="email" placeholder="Work Email" className="w-full bg-white text-gray-900 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all" />
                <textarea placeholder="Message" rows={4} className="w-full bg-white text-gray-900 rounded-xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none" />
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl transition-all shadow-lg shadow-blue-500/20">
                  Submit Query
                </button>
              </form>
            </div>
          </div>
        </div>
      </motion.section>

      <EnterpriseFooter hideCta={true} />
    </div>
  );
}
