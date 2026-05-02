import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { EnterpriseFooter } from "@/components/EnterpriseFooter";
import { cn } from "@/lib/utils";
import { ShoppingBag, Monitor, Smartphone, Globe, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/work")({
  component: WorkPage,
});

const projects = [
  {
    title: "MiracleRainwear",
    category: "Luxury Fashion E-commerce",
    tags: ["Cloud Infrastructure", "Global Automation"],
    description: "Cloud-native infrastructure for a high-end luxury rainwear brand, featuring seamless global delivery automation and intelligent inventory management.",
    metric: "Dual-Mode Push Notifications",
    icon: ShoppingBag,
    status: "Live",
    glowColor: "shadow-purple-500/20",
    badgeColor: "text-purple-300 bg-purple-500/10 border-purple-500/20",
    iconGlow: "from-purple-900/40 to-gray-900",
  },
  {
    title: "Computer Plaza",
    category: "Tech & Peripherals Retail",
    tags: ["B2C Retail", "Omni-channel"],
    description: "A robust digital storefront connecting a massive inventory of computer hardware with consumers, optimized for lightning-fast search and checkout.",
    metric: "Real-Time Inventory Sync",
    icon: Monitor,
    status: "In Production",
    glowColor: "shadow-red-500/20",
    badgeColor: "text-red-300 bg-red-500/10 border-red-500/20",
    iconGlow: "from-red-900/40 to-gray-900",
  },
  {
    title: "Manoj Singh Computer Wala",
    category: "Laptop & Hardware Vendor",
    tags: ["B2B/B2C", "Portal Development"],
    description: "A dedicated enterprise and consumer portal streamlining bulk laptop orders, peripheral sales, and automated customer service ticketing.",
    metric: "Automated KYC & Billing",
    icon: Smartphone,
    status: "Live",
    glowColor: "shadow-orange-500/20",
    badgeColor: "text-orange-300 bg-orange-500/10 border-orange-500/20",
    iconGlow: "from-orange-900/40 to-gray-900",
  },
  {
    title: "Rongeen",
    category: "Boutique Brand",
    tags: ["Visual Commerce", "Boutique"],
    description: "An immersive, highly visual digital boutique experience designed to showcase intricate apparel details while maximizing conversion rates.",
    metric: "Sub-second Image Rendering",
    icon: Globe,
    status: "Live",
    glowColor: "shadow-amber-500/20",
    badgeColor: "text-amber-300 bg-amber-500/10 border-amber-500/20",
    iconGlow: "from-amber-900/40 to-gray-900",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const Icon = project.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      className={cn(
        "group flex flex-col lg:flex-row bg-gray-950/40 backdrop-blur-2xl border border-white/5 rounded-[2rem] overflow-hidden transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_100px_-20px]",
        project.glowColor
      )}
    >
      {/* Content Side */}
      <div className="w-full lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center relative z-10">
        <div className="flex flex-wrap gap-4 mb-6">
          {project.tags.map((tag) => (
            <span key={tag} className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold">
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-3xl lg:text-4xl font-semibold text-white tracking-tight mb-6">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-md">
          {project.description}
        </p>

        <div className="flex flex-col items-start gap-8">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 + index * 0.1, ease: "easeOut" }}
            className={cn(
              "px-6 py-2.5 rounded-full border text-xs font-bold transition-all duration-500",
              project.badgeColor
            )}
          >
            {project.metric}
          </motion.div>

          <motion.a 
            whileTap={{ scale: 0.95 }}
            href="/contact" 
            className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-colors group/link text-sm font-medium"
          >
            Read case study 
            <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
          </motion.a>
        </div>
      </div>

      {/* Visual Side */}
      <div className={cn(
        "w-full lg:w-1/2 min-h-[400px] relative overflow-hidden flex items-center justify-center bg-gradient-to-br transition-all duration-700",
        project.iconGlow
      )}>
        {/* Spotlight Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_60%)]" />
        
        {/* Animated Icon with Hover Physics */}
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 3 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="relative"
        >
          <Icon className="h-28 w-28 text-white/20 stroke-[1px] animate-pulse [animation-duration:4s]" />
          <div className="absolute inset-0 blur-[60px] bg-white/5 rounded-full" />
        </motion.div>

        {/* Status Tag */}
        <div className="absolute bottom-6 right-6 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center gap-2">
           <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
           </span>
           <span className="text-[10px] uppercase tracking-widest font-bold text-white/60">{project.status}</span>
        </div>

        {/* Wireframe Grid */}
        <div 
          className="absolute inset-0 opacity-[0.05] pointer-events-none" 
          style={{ 
            backgroundImage: "linear-gradient(to right, #ffffff22 1px, transparent 1px), linear-gradient(to bottom, #ffffff22 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} 
        />
      </div>
    </motion.div>
  );
}

function WorkPage() {
  return (
    <div className="min-h-screen bg-black font-sans antialiased selection:bg-white/10 selection:text-white">
      {/* Navigation */}
      <SiteHeader />
      
      <main className="relative">
        {/* Hero Ambient Glow */}
        <div 
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10"
        />

        <div className="max-w-6xl mx-auto px-4 pt-40 pb-48">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-32"
          >
            <span className="inline-block py-1 px-4 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold mb-8">
              Success Stories
            </span>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-white leading-[0.9]">
              Work that drives <br />
              <span className="text-white/20">revenue.</span>
            </h1>
          </motion.div>

          {/* Showcase Stack */}
          <div className="flex flex-col gap-16">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-64 text-center relative py-40 rounded-[4rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl overflow-hidden group"
          >
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03),transparent_70%)]" />
             <div className="relative z-10">
               <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mb-8 tracking-tight">Ready to build your masterpiece?</h2>
               <p className="text-gray-500 text-lg sm:text-xl max-w-xl mx-auto mb-12 leading-relaxed">
                 We're currently accepting new projects for Q3 2026. Let's create something that stands out.
               </p>
               <motion.a
                 whileTap={{ scale: 0.95 }}
                 href="/contact"
                 className="inline-flex items-center rounded-full bg-white text-black text-base font-bold px-14 py-5 hover:bg-gray-200 transition-all hover:scale-[1.05] shadow-[0_20px_60px_-10px_rgba(255,255,255,0.2)]"
               >
                 Book a Consultation
               </motion.a>
             </div>
          </motion.div>
        </div>
      </main>

      <EnterpriseFooter />

      {/* Page Specific Global Overrides */}
      <style>{`
        header {
          background-color: rgba(0, 0, 0, 0.4) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
          backdrop-filter: blur(16px) !important;
        }
        header span, header a {
          color: white !important;
        }
        header div {
          background-color: rgba(255, 255, 255, 0.03) !important;
          border-color: rgba(255, 255, 255, 0.05) !important;
        }
      `}</style>
    </div>
  );
}
