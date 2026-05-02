import { createFileRoute } from "@tanstack/react-router";
import { EnterpriseFooter } from "@/components/EnterpriseFooter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { User, Shield, Zap, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const founders = [
  {
    name: "Sayantan Kundu",
    role: "Owner",
    glow: "shadow-amber-500/20",
    icon: Shield,
  },
  {
    name: "Tanmoy Sain",
    role: "Owner",
    glow: "shadow-amber-500/20",
    icon: Sparkles,
  },
];

const experts = [
  {
    name: "Debojit Das",
    role: "Full-Stack Developer",
    glow: "shadow-blue-500/20",
    icon: Zap,
  },
  {
    name: "Anomitro Mukherjee",
    role: "Digital Marketing Expert",
    glow: "shadow-cyan-500/20",
    icon: GlobeIcon,
  },
];

function GlobeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

function ProfileCard({ person, index, isFounder }: { person: any; index: number; isFounder: boolean }) {
  const Icon = person.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center text-center overflow-hidden relative transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_20px_60px_-20px]",
        person.glow
      )}
    >
      {/* Avatar Placeholder */}
      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 mb-8 relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <Icon className={cn("h-16 w-16 stroke-[1px]", isFounder ? "text-amber-400/20" : "text-blue-400/20")} />
        </motion.div>
        
        {/* Abstract Geometric Overlay */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "16px 16px" }} />
      </div>

      <h3 className="text-2xl font-bold text-white tracking-tight">
        {person.name}
      </h3>
      
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200 font-bold tracking-[0.2em] uppercase text-[10px] mt-3">
        {person.role}
      </p>

      <div className="mt-8 flex gap-4">
        <div className="h-8 w-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
          <div className="h-1 w-1 rounded-full bg-white/40" />
        </div>
        <div className="h-8 w-8 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
          <div className="h-1 w-1 rounded-full bg-white/40" />
        </div>
      </div>

      {/* Decorative Gradient Glow */}
      <div className={cn(
        "absolute -bottom-12 -right-12 w-32 h-32 blur-[60px] opacity-0 group-hover:opacity-30 transition-opacity duration-700",
        isFounder ? "bg-amber-500" : "bg-blue-500"
      )} />
    </motion.div>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 font-sans antialiased selection:bg-white/10 selection:text-white">
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
          <div 
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-950 to-gray-950 -z-10"
          />
          
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block py-1 px-4 rounded-full bg-white/5 border border-white/10 text-[10px] uppercase tracking-[0.4em] text-white/40 font-bold mb-8"
            >
              The Team
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-8xl font-semibold tracking-tight text-white leading-[0.9] mb-8"
            >
              The minds behind <br />
              <span className="text-white/20">Wavelet.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              We are a collective of designers, engineers, and strategists dedicated to building the next generation of digital infrastructure.
            </motion.p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="max-w-6xl mx-auto px-4 py-16 lg:py-24 flex flex-col gap-24">
          {/* Founders Tier */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-xl font-semibold text-white/40 tracking-[0.2em] uppercase">Foundership</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {founders.map((person, i) => (
                <ProfileCard key={person.name} person={person} index={i} isFounder={true} />
              ))}
            </div>
          </div>

          {/* Experts Tier */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-xl font-semibold text-white/40 tracking-[0.2em] uppercase">Specialists</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {experts.map((person, i) => (
                <ProfileCard key={person.name} person={person} index={i} isFounder={false} />
              ))}
            </div>
          </div>
        </section>

        {/* Culture Quote */}
        <section className="max-w-6xl mx-auto px-4 py-48 text-center border-t border-white/5">
           <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
           >
             <h2 className="text-3xl sm:text-4xl font-semibold text-white max-w-3xl mx-auto leading-tight italic">
               "We don't just build software; we architect the digital future for high-stakes brands."
             </h2>
           </motion.div>
        </section>
      </main>

      <EnterpriseFooter />
    </div>
  );
}
