import { createFileRoute } from '@tanstack/react-router';
import { SiteHeader } from '@/components/SiteHeader';
import { EnterpriseFooter } from '@/components/EnterpriseFooter';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Rocket, Code2, Zap, GitBranch, Terminal,
  Cpu, LayoutDashboard, Layers, CheckCircle2,
  HelpCircle, FastForward, CheckSquare
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RevealSection, StaggerGrid, MotionCard, KineticHeading, MagneticCTA } from '@/components/MotionSystem';

export const Route = createFileRoute('/industries/startups')({
  component: StartupsIndustryPage,
});

const heroStats = [
  { value: "8-12 Wks", label: "MVP Delivery", helper: "From concept to live" },
  { value: "Scalable", label: "Architecture", helper: "Ready for Series A" }
];

const subSubtopics = [
  { title: "Rapid MVP Development", description: "Get to market quickly to validate core assumptions." },
  { title: "SaaS Platform Engineering", description: "Multi-tenant architectures with subscription billing." },
  { title: "Mobile App MVPs", description: "React Native builds to test on iOS and Android simultaneously." },
  { title: "API & Backend Architecture", description: "Robust Node/Python backends that won't break at scale." },
  { title: "Third-Party Integrations", description: "Stripe, SendGrid, Twilio, and OpenAI implementations." },
  { title: "UI/UX Prototyping", description: "High-fidelity Figma prototypes for investor pitches." },
  { title: "Technical Debt Audits", description: "Refactoring messy early-stage code for scalability." },
  { title: "Cloud Infrastructure Setup", description: "AWS/GCP/Vercel pipelines optimized for low early costs." },
  { title: "Admin & Operations Dashboards", description: "Internal tools to manage your first 1,000 users." },
  { title: "Data Analytics Pipelines", description: "PostHog or Mixpanel integration for product-market fit signals." }
];

const tabsData = [
  {
    id: "mvp",
    label: "The 0-to-1 MVP Phase",
    summary: "We strip away the noise to build the core feature that proves your concept.",
    bullets: ["Lean feature scoping", "High-speed frontend development", "Launch-ready analytics"],
    mini_case: { scenario: "Founder had a massive vision but limited pre-seed runway.", what_we_do: "Scoped the product down to a single core workflow.", result: "Launched in 8 weeks, secured 50 beta users, and raised seed funding." }
  },
  {
    id: "saas",
    label: "SaaS Multi-Tenancy",
    summary: "Build software that scales securely across hundreds of B2B clients.",
    bullets: ["Data isolation strategies", "Role-based access control", "Automated onboarding flows"],
    mini_case: { scenario: "Early SaaS app mixing customer data in a single database table.", what_we_do: "Architected a secure, multi-tenant Postgres schema.", result: "Passed enterprise security audits required for B2B sales." }
  },
  {
    id: "billing",
    label: "Subscription & Billing",
    summary: "Complex pricing models implemented flawlessly.",
    bullets: ["Stripe/Paddle integration", "Tiered & usage-based pricing", "Automated dunning processes"],
    mini_case: { scenario: "Manual invoicing bottlenecking a PLG motion.", what_we_do: "Integrated Stripe Billing with custom webhook handlers.", result: "Zero-touch revenue collection and automated upgrades." }
  },
  {
    id: "scale",
    label: "Refactoring for Scale",
    summary: "Fixing the technical debt accrued during the rush to find product-market fit.",
    bullets: ["Codebase modernization", "Database query optimization", "Migration to microservices (if needed)"],
    mini_case: { scenario: "Monolith app crashing during traffic spikes.", what_we_do: "Decoupled the heavy background processing into separate workers.", result: "100% uptime during the next major marketing push." }
  },
  {
    id: "ai",
    label: "AI & LLM Integration",
    summary: "Embed intelligence into your product without building AI from scratch.",
    bullets: ["OpenAI / Anthropic API integrations", "RAG pipeline architecture", "Vector database setup"],
    mini_case: { scenario: "Startup wanted to automate document summarization.", what_we_do: "Built a RAG pipeline using Pinecone and GPT-4.", result: "Delivered a magical 'AI feature' in just 3 weeks." }
  },
  {
    id: "infra",
    label: "DevOps & Infrastructure",
    summary: "Set up CI/CD pipelines so your team can ship multiple times a day.",
    bullets: ["Automated testing hooks", "Zero-downtime deployments", "Infrastructure as Code (Terraform)"],
    mini_case: { scenario: "Deployments required manual server SSH access and took hours.", what_we_do: "Implemented GitHub Actions with automated Vercel/AWS staging.", result: "Engineers now deploy safely in under 5 minutes." }
  }
];

const integrations = [
  { name: "Modern Stacks", notes: "React, Next.js, Node, Python, Go." },
  { name: "Cloud & Edge", notes: "AWS, Vercel, Supabase, Firebase." },
  { name: "Payments", notes: "Stripe Connect & Stripe Billing." },
  { name: "Product Analytics", notes: "PostHog, Mixpanel, Segment." }
];

const faqs = [
  { q: "How do you price MVP development for startups?", a: "We typically work on a fixed-bid basis for the initial MVP to give you budget certainty, followed by retainer or T&M models for ongoing iteration." },
  { q: "Will we own the code?", a: "100%. All intellectual property, source code, and assets belong to you upon payment. We set up the repositories in your GitHub organization." },
  { q: "What tech stack do you use?", a: "We choose the stack that allows for maximum speed and scalability. Usually, this is a TypeScript/React frontend (Next.js) with a Node.js or Python backend, backed by Postgres." },
  { q: "Do you build native apps or cross-platform?", a: "For early-stage startups, we almost exclusively recommend cross-platform (React Native) or progressive web apps (PWAs) to halve the development time and cost." },
  { q: "Can you help us hire our own internal team later?", a: "Yes. We build clean, documented code specifically so you can transition it to an internal engineering team when you raise your Series A." },
  { q: "How involved do I need to be?", a: "Very. We act as your technical co-founder during the build. We need weekly syncs to iterate on product decisions quickly." }
];

function MVPRoadmapBuilder() {
  const shouldReduceMotion = useReducedMotion();
  const stages = [
    {
      id: "pre-seed",
      label: "Pre-Seed (MVP)",
      timeline: "8-12 Weeks",
      focus: "Validate the core hypothesis.",
      features: ["Single primary workflow", "Figma prototype testing", "Basic auth & CRUD", "Landing page & Waitlist"]
    },
    {
      id: "seed",
      label: "Seed (V1)",
      timeline: "3-6 Months",
      focus: "Build for initial revenue & retention.",
      features: ["Stripe/Billing integration", "Analytics & event tracking", "Admin tooling", "Performance optimizations"]
    },
    {
      id: "series-a",
      label: "Series A (Scale)",
      timeline: "Ongoing",
      focus: "Technical debt reduction & scale.",
      features: ["Microservices migration", "SOC2 / Security audits", "Advanced CI/CD", "Enterprise SSO (SAML)"]
    }
  ];

  const [activeStage, setActiveStage] = useState(stages[0].id);

  return (
    <div className="bg-white rounded-[2rem] border border-violet-100 shadow-md p-8 sm:p-12 relative overflow-hidden">
       <div className="absolute top-0 right-0 w-64 h-64 bg-violet-400/5 blur-3xl rounded-full" />
       <div className="text-center mb-12 relative z-10">
          <span className="text-[10px] uppercase tracking-widest text-violet-600 font-black mb-2 block">Startup Lifecycle</span>
          <h3 className="text-3xl font-black text-slate-900 tracking-tight">Interactive MVP Roadmap</h3>
       </div>
       
       <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col md:flex-row gap-10">
          {/* Vertical Timeline Navigation */}
          <div className="flex flex-row md:flex-col gap-4 relative w-full md:w-1/3 border-b md:border-b-0 md:border-l-2 border-slate-100 pb-6 md:pb-0 md:pl-6 overflow-x-auto no-scrollbar">
            
            <motion.div 
              className={`hidden md:block absolute left-[-2px] top-0 w-0.5 bg-gradient-to-b from-violet-500 to-fuchsia-500 rounded-full ${shouldReduceMotion ? 'transition-all duration-300' : ''}`}
              initial={false}
              animate={{ 
                height: activeStage === 'pre-seed' ? '33%' : activeStage === 'seed' ? '66%' : '100%' 
              }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />

            {stages.map((stage) => (
               <button
                 key={stage.id}
                 onClick={() => setActiveStage(stage.id)}
                 className={`text-left px-4 py-3 rounded-xl font-bold transition-all whitespace-nowrap md:whitespace-normal relative focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                   activeStage === stage.id 
                     ? 'text-violet-700' 
                     : 'text-slate-500 hover:bg-slate-50 hover:text-slate-800'
                 }`}
               >
                 {activeStage === stage.id && (
                   <motion.div 
                     layoutId={shouldReduceMotion ? undefined : "active-pill"} 
                     className={`absolute inset-0 border border-violet-200 rounded-xl bg-violet-50 shadow-sm z-0 ${shouldReduceMotion ? 'bg-violet-50 border-violet-200' : ''}`}
                   />
                 )}
                 <span className="relative z-10 block text-sm">{stage.label}</span>
                 <span className="relative z-10 block text-[10px] font-semibold opacity-70 mt-0.5">{stage.timeline}</span>
               </button>
            ))}
          </div>

          {/* Feature Set Details */}
          <div className="w-full md:w-2/3 min-h-[250px]">
             <AnimatePresence mode="wait">
               {stages.map((stage) => (
                 activeStage === stage.id && (
                   <motion.div
                     key={stage.id}
                     initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
                     transition={{ duration: 0.2 }}
                     className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100 h-full flex flex-col"
                   >
                      <h4 className="text-xl font-black text-slate-900 mb-2">{stage.focus}</h4>
                      <p className="text-sm text-slate-500 font-medium mb-6">Typical deliverables for this phase of the company lifecycle.</p>
                      
                      <ul className="space-y-3 mt-auto">
                        {stage.features.map((feature, idx) => (
                          <motion.li 
                            key={idx} 
                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: shouldReduceMotion ? 0 : idx * 0.1 }}
                            className="flex items-center gap-3 bg-white p-3 rounded-lg border border-slate-200 shadow-sm"
                          >
                            <CheckSquare className="w-4 h-4 text-fuchsia-500 shrink-0" />
                            <span className="text-sm font-bold text-slate-800">{feature}</span>
                          </motion.li>
                        ))}
                      </ul>
                   </motion.div>
                 )
               ))}
             </AnimatePresence>
          </div>
       </div>
    </div>
  );
}

function StartupsIndustryPage() {
  const [activeTab, setActiveTab] = useState<string>('mvp');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Startup MVP & SaaS Development | WAVELET";
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 antialiased selection:bg-violet-500 selection:text-white pt-16 overflow-x-hidden">
      <SiteHeader />

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative px-4 py-16 sm:py-24 overflow-hidden bg-slate-950 text-white border-b border-violet-950">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/40 via-slate-950 to-slate-950" />
             <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                   <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                   </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
             </svg>
          </div>

          <StaggerGrid className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <motion.div className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 border border-violet-800 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-violet-400 mb-6 shadow-sm">
                <Rocket className="w-4 h-4" />
                Startup Engineering
              </motion.div>

              <KineticHeading 
                as="h1"
                text={<>Ship Faster. <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">Scale Safely.</span></>}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6"
              />

              <motion.p className="text-lg sm:text-xl text-slate-300 font-medium max-w-xl leading-relaxed mb-8">
                We act as the elite engineering team for early-stage startups. From 0-to-1 MVPs to rebuilding architectures for Series A scale.
              </motion.p>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <MagneticCTA disabled={shouldReduceMotion}>
                  <a href="/contact?intent=startup" className="block w-full sm:w-auto text-center rounded-full bg-violet-600 text-white font-black px-8 py-4 hover:bg-violet-500 active:scale-95 transition-all text-sm shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                    Pitch Us Your Idea
                  </a>
                </MagneticCTA>
                <a href="#capabilities" className="w-full sm:w-auto text-center rounded-full bg-slate-900 border border-slate-700 text-white font-bold px-8 py-4 hover:bg-slate-800 active:scale-95 transition-all text-sm">
                  View Tech Stack
                </a>
              </div>
            </div>

            {/* Programmatic Abstract Rocket / Growth Graphic */}
            <motion.div
              style={{ y: shouldReduceMotion ? 0 : 8 }}
              className="relative aspect-square sm:aspect-video lg:aspect-square max-w-md mx-auto rounded-[3rem] bg-slate-900 border border-violet-900 shadow-2xl flex items-center justify-center overflow-hidden"
            >
               <svg viewBox="0 0 400 400" className="w-full h-full text-slate-800" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="200" r="100" fill="rgba(139, 92, 246, 0.15)" filter="blur(40px)" />
                  
                  <path d="M 50 300 Q 150 300 200 200 T 350 50" stroke="url(#growthGradient)" strokeWidth="6" strokeLinecap="round" fill="none" />
                  
                  <circle cx="50" cy="300" r="8" className="fill-violet-500" />
                  <circle cx="150" cy="250" r="8" className="fill-violet-400" />
                  <circle cx="250" cy="120" r="8" className="fill-fuchsia-400" />
                  <circle cx="350" cy="50" r="12" className="fill-white shadow-[0_0_15px_#d946ef]" />
                  
                  <g className={shouldReduceMotion ? '' : 'animate-[translateY_8s_linear_infinite]'}>
                     <rect x="80" y="320" width="40" height="8" rx="4" className="fill-slate-700" />
                     <rect x="220" y="350" width="60" height="8" rx="4" className="fill-violet-900" />
                  </g>
                  <g className={shouldReduceMotion ? '' : 'animate-[translateY_6s_linear_infinite]'} style={{ animationDelay: '2s' }}>
                     <rect x="280" y="280" width="30" height="8" rx="4" className="fill-slate-700" />
                     <rect x="120" y="200" width="50" height="8" rx="4" className="fill-fuchsia-900" />
                  </g>
                  
                  <defs>
                     <linearGradient id="growthGradient" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="50%" stopColor="#d946ef" />
                        <stop offset="100%" stopColor="#f8fafc" />
                     </linearGradient>
                  </defs>
               </svg>
            </motion.div>
          </StaggerGrid>
        </section>

        {/* 2. STATS ROW */}
        <RevealSection direction="up" className="py-8 px-4 max-w-7xl mx-auto mt-16 relative z-20">
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {heroStats.map((stat, i) => (
              <MotionCard key={i} className="bg-white border border-violet-100 rounded-2xl p-6 shadow-lg flex items-center gap-6">
                <div className="text-3xl font-black text-violet-600 shrink-0">{stat.value}</div>
                <div>
                  <div className="text-sm font-black text-slate-900 uppercase tracking-widest">{stat.label}</div>
                  <div className="text-xs text-slate-500 font-semibold">{stat.helper}</div>
                </div>
              </MotionCard>
            ))}
          </StaggerGrid>
        </RevealSection>

        {/* 3. CAPABILITY MODULES */}
        <RevealSection direction="up" className="py-12 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">Startup Engineering Services</h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto">We don't just write code; we make pragmatic technical decisions that align with your runway.</p>
          </div>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {subSubtopics.map((topic, i) => (
              <MotionCard key={i} className="bg-white border border-violet-100 rounded-xl p-4 shadow-sm transition-all flex flex-col gap-1.5 group">
                 <div className="flex items-start gap-2">
                    <Code2 className="w-4 h-4 text-violet-500 shrink-0 mt-0.5" />
                    <h3 className="text-xs font-black text-slate-900 leading-tight">{topic.title}</h3>
                 </div>
                 <p className="text-[10px] text-slate-600 font-semibold leading-relaxed pl-6">{topic.description}</p>
              </MotionCard>
            ))}
          </StaggerGrid>
        </RevealSection>

        {/* 4. FAST MVP TIMELINE with MVP Roadmap Builder Interaction */}
        <RevealSection direction="up" className="py-12 px-4 max-w-7xl mx-auto space-y-12">
          
          <MVPRoadmapBuilder />

          {/* Scale & Architecture Details */}
          <div className="bg-slate-900 text-white rounded-[2rem] border border-slate-800 shadow-xl p-8 sm:p-12">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                   <span className="text-[10px] uppercase tracking-widest text-fuchsia-400 font-black mb-2 block">Series A Readiness</span>
                   <h3 className="text-3xl font-black text-white tracking-tight mb-4">Don't Get Crushed by Tech Debt</h3>
                   <p className="text-slate-300 font-medium leading-relaxed mb-6">
                     Investors will audit your codebase during due diligence. We build architectures that pass rigorous technical reviews, utilizing typed languages (TypeScript), clear ORMs, and secure infrastructure.
                   </p>
                   <div className="grid grid-cols-2 gap-4">
                     {[
                       "Strict TypeScript", "CI/CD Pipelines", 
                       "Containerized Services", "Clean Code Standards"
                     ].map((item, i) => (
                       <div key={i} className="flex gap-2 items-center text-sm font-bold text-violet-100">
                         <CheckCircle2 className="w-4 h-4 text-violet-500" />
                         <span>{item}</span>
                       </div>
                     ))}
                   </div>
                </div>
                {/* Due Diligence Graphic */}
                <div className="bg-slate-950 rounded-2xl h-full min-h-[300px] flex items-center justify-center border border-slate-800 relative p-6 overflow-hidden">
                   <svg viewBox="0 0 300 300" className="w-full h-full text-slate-800" fill="none">
                      <path d="M 150 50 L 250 80 V 150 Q 250 220 150 280 Q 50 220 50 150 V 80 Z" className="fill-slate-900 stroke-violet-500 stroke-2" />
                      <path d="M 100 150 L 140 190 L 200 120" stroke="#d946ef" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="70" y="100" width="30" height="6" rx="3" className="fill-slate-700" />
                      <rect x="200" y="200" width="40" height="6" rx="3" className="fill-slate-700" />
                   </svg>
                </div>
             </div>
          </div>
        </RevealSection>

        {/* 5. GRID LAYOUT TABS */}
        <RevealSection direction="down" className="py-12 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Technical Execution</h2>
          </div>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabsData.map(tab => (
              <MotionCard key={tab.id} className="bg-white border border-violet-100 rounded-2xl p-6 shadow-sm flex flex-col h-full group">
                 <h3 className="text-xl font-black text-slate-900 mb-2">{tab.label}</h3>
                 <p className="text-sm text-slate-600 font-medium mb-4 leading-relaxed">{tab.summary}</p>
                 
                 <div className="mb-6 flex-grow">
                    <ul className="space-y-2">
                      {tab.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-violet-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                 </div>

                 <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 mt-auto group-hover:bg-violet-50 group-hover:border-violet-200 transition-colors">
                   <span className="text-[9px] font-black uppercase tracking-widest text-violet-700 mb-1.5 block">Implementation Case</span>
                   <div className="space-y-1 text-[11px] font-medium">
                     <p><strong className="text-slate-900">Issue:</strong> <span className="text-slate-700">{tab.mini_case.scenario}</span></p>
                     <p className="text-violet-800 font-bold mt-1.5 pt-1.5 border-t border-violet-200">Result: {tab.mini_case.result}</p>
                   </div>
                 </div>
              </MotionCard>
            ))}
          </StaggerGrid>
        </RevealSection>

        {/* 6. TECH STACK STRIP */}
        <RevealSection className="py-8 px-4 max-w-7xl mx-auto">
           <div className="bg-slate-900 rounded-[2rem] border border-slate-800 p-8 shadow-xl text-white flex flex-col lg:flex-row justify-between items-center gap-8">
              <div>
                 <div className="flex items-center gap-3 mb-2">
                    <Terminal className="w-6 h-6 text-fuchsia-500" />
                    <h3 className="text-xl font-black tracking-tight">The Modern JAMStack</h3>
                 </div>
                 <p className="text-sm text-slate-400 font-medium max-w-md">
                   We build exclusively on modern, component-driven frameworks that allow for rapid iteration and serverless scalability.
                 </p>
              </div>
              <StaggerGrid className="flex flex-wrap gap-3 justify-center lg:justify-end">
                 {integrations.map((int, i) => (
                    <MotionCard key={i} className="bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-center min-w-[120px]">
                       <div className="text-xs font-black text-violet-100 mb-0.5">{int.name}</div>
                       <div className="text-[9px] font-semibold text-slate-400">{int.notes}</div>
                    </MotionCard>
                 ))}
              </StaggerGrid>
           </div>
        </RevealSection>

        {/* 7. FAQ ACCORDION */}
        <RevealSection direction="up" className="py-12 px-4 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <HelpCircle className="w-8 h-8 text-violet-500 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Founder FAQ</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-violet-100 rounded-xl px-5 shadow-sm hover:border-violet-300 transition-colors overflow-hidden">
                <AccordionTrigger className="text-sm font-bold text-slate-900 hover:text-violet-700 hover:no-underline py-4 text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-4 font-medium">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealSection>

        {/* 8. FINAL CTA */}
        <RevealSection direction="up" className="py-12 px-4 mb-10">
          <div className="max-w-4xl mx-auto bg-white border border-violet-100 rounded-[2.5rem] shadow-xl overflow-hidden relative text-center">
             <div className="absolute top-0 right-0 w-64 h-64 bg-fuchsia-500/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />
             <div className="p-10 sm:p-16 relative z-10">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">Stop talking. Start shipping.</h2>
                <p className="text-slate-600 font-medium mb-8 max-w-lg mx-auto text-lg">
                   Turn your prototype into a revenue-generating product with an engineering team that moves at startup speed.
                </p>
                <MagneticCTA disabled={shouldReduceMotion}>
                  <a href="/contact?intent=startup" className="inline-block rounded-full bg-violet-600 text-white font-black px-10 py-4 hover:bg-violet-500 transition-all shadow-md text-sm">
                     Get a Technical Estimate
                  </a>
                </MagneticCTA>
             </div>
          </div>
        </RevealSection>
      </main>

      <EnterpriseFooter />
    </div>
  );
}
