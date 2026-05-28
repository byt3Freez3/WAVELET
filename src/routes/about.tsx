import { createFileRoute } from "@tanstack/react-router";
import { EnterpriseFooter } from "@/components/EnterpriseFooter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { User, Shield, Zap, Sparkles, Database, Monitor, Mail, Linkedin } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const founders = [
  {
    name: "Sayantan Kundu",
    role: "Owner",
    glow: "shadow-amber-500/20",
    icon: Shield,
    linkedin: "#",
  },
  {
    name: "Tanmoy Sain",
    role: "Owner",
    glow: "shadow-amber-500/20",
    icon: Sparkles,
    linkedin: "https://www.linkedin.com/in/tanmoy-sain-21a10619",
  },
];

const experts = [
  {
    name: "Anomitro Mukherjee",
    role: "Digital Marketing Expert",
    glow: "shadow-cyan-500/20",
    icon: GlobeIcon,
    linkedin: "https://www.linkedin.com/in/anomitro-mukherjee-9a266638a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxsXElMbDTzeuLakEospW8g%3D%3D",
  },
  {
    name: "Debojit Das",
    role: "Full-Stack Developer",
    glow: "shadow-blue-500/20",
    icon: Zap,
    linkedin: "https://www.linkedin.com/in/debojit-das-/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BdXejd1zjS8yuHUIAiPYPug%3D%3D",
  },
  {
    name: "Kazi Arif Arman",
    role: "FULL-STACK DEVELOPER",
    glow: "shadow-blue-500/20",
    icon: Database,
    linkedin: "https://www.linkedin.com/in/kazi-arif-arman-57a7a3388/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BACuUZnonRNWbEQc7xZi%2F2g%3D%3D",
  },
  {
    name: "Shreyasi Samui",
    role: "FULL-STACK DEVELOPER",
    glow: "shadow-cyan-500/20",
    icon: Monitor,
    linkedin: "https://www.linkedin.com/in/shreyasi-samui-23784838b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BFCvu1FFaQ2u81T3FqtIxWw%3D%3D",
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
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group bg-white border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.02)] rounded-[2.5rem] p-10 flex flex-col items-center text-center overflow-hidden relative transition-all duration-500 hover:border-gray-300 hover:-translate-y-2 hover:shadow-md",
        person.glow
      )}
    >
      {/* Premium Avatar Canvas with concentric dashed vector lines */}
      <div className="w-36 h-36 rounded-full bg-slate-50 border border-gray-200/80 mb-8 relative overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
        {/* Subtle circular vector geometry */}
        <div className="absolute inset-2 rounded-full border border-dashed border-gray-200 animate-[spin_60s_linear_infinite]" />
        <div className="absolute inset-4 rounded-full border border-dotted border-gray-100" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.01),transparent_70%)]" />
        
        <motion.div
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10"
        >
          <Icon className={cn("h-12 w-12 stroke-[1.2px]", isFounder ? "text-amber-500" : "text-blue-500")} />
        </motion.div>
        
        {/* Abstract Dot Matrix Overlay */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "12px 12px" }} />
      </div>

      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight leading-none">
        {person.name}
      </h3>
      
      <p className="text-[#52525B] font-extrabold tracking-[0.25em] uppercase text-[10px] mt-4">
        {person.role}
      </p>

      {/* Decorative interactive items */}
      <div className="mt-8 flex gap-3">
        <a href="#" className="h-8 w-8 rounded-full bg-gray-50 border border-gray-200/80 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white cursor-pointer hover:scale-110">
          <Mail className="h-4 w-4 text-gray-400 group-hover:text-white" />
        </a>
        <a href={person.linkedin || "#"} target="_blank" rel="noopener noreferrer" className="h-8 w-8 rounded-full bg-gray-50 border border-gray-200/80 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-900 group-hover:text-white cursor-pointer hover:scale-110">
          <Linkedin className="h-4 w-4 text-gray-400 group-hover:text-white" />
        </a>
      </div>

      {/* Decorative Dynamic Gradient Glow */}
      <div className={cn(
        "absolute -bottom-16 -right-16 w-36 h-36 blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 pointer-events-none",
        isFounder ? "bg-amber-400" : "bg-blue-400"
      )} />
    </motion.div>
  );
}

function AboutPage() {
  return (
    <div className="min-h-screen bg-transparent font-sans antialiased selection:bg-gray-900/10 selection:text-gray-900">
      
      <main className="relative">
        {/* Hero Section */}
        <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 overflow-hidden">
          <div 
            aria-hidden="true"
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10"
          />
          
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.span 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block py-1 px-4 rounded-full bg-gray-50 border border-gray-200 text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold mb-8 shadow-sm"
            >
              The Team
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-8xl font-semibold tracking-tight text-gray-900 leading-[0.9] mb-8"
            >
              The minds behind <br />
              <span className="text-gray-400">Wavelet.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
            >
              We are a collective of designers, engineers, and strategists dedicated to building the next generation of digital infrastructure.
            </motion.p>
          </div>
        </section>

        {/* Team Grid */}
        <section className="max-w-6xl mx-auto px-4 py-12 lg:py-16 flex flex-col gap-16">
          {/* Founders Tier */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 w-full text-center"
            >
              <h2 className="text-xl font-semibold text-gray-500 tracking-[0.2em] uppercase">Foundership</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {founders.map((person, i) => (
                <ProfileCard key={person.name} person={person} index={i} isFounder={true} />
              ))}
            </div>
          </div>

          {/* Experts Tier */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 w-full text-center"
            >
              <h2 className="text-xl font-semibold text-gray-500 tracking-[0.2em] uppercase">Specialists</h2>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {experts.map((person, i) => (
                <ProfileCard key={person.name} person={person} index={i} isFounder={false} />
              ))}
            </div>
          </div>
        </section>

        {/* Culture Quote */}
        <section className="max-w-6xl mx-auto px-4 py-12 sm:py-16 text-center border-t border-gray-200/40">
           <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="max-w-4xl mx-auto bg-white border border-gray-100 shadow-lg rounded-2xl p-8 sm:p-14 relative overflow-hidden"
           >
             <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 max-w-3xl mx-auto leading-relaxed italic relative z-10">
               "We don't just build software; we architect the digital future for high-stakes brands."
             </h2>
           </motion.div>
        </section>
      </main>

      <EnterpriseFooter />
    </div>
  );
}
