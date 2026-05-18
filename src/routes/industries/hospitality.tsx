import { createFileRoute } from '@tanstack/react-router';
import { SiteHeader } from '@/components/SiteHeader';
import { EnterpriseFooter } from '@/components/EnterpriseFooter';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Building2, Users, BedDouble, CalendarCheck, ShieldCheck, 
  ConciergeBell, ArrowRight, Activity, CheckCircle2,
  HelpCircle, Smartphone, Wifi, Star, Clock, Search, RefreshCw
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RevealSection, StaggerGrid, MotionCard, KineticHeading, MagneticCTA } from '@/components/MotionSystem';

export const Route = createFileRoute('/industries/hospitality')({
  component: HospitalityIndustryPage,
});

const heroStats = [
  { value: "Unified", label: "Guest Profiles", helper: "Across all properties" },
  { value: "Automated", label: "Routine Tasks", helper: "Freeing staff to serve" }
];

const subSubtopics = [
  { title: "PMS Integration & Automation", description: "Connecting your core Property Management System to modern web and mobile apps." },
  { title: "Booking & Channel Management Support", description: "Custom booking engines and inventory sync logic." },
  { title: "Guest Messaging & Support Flows", description: "Unified inboxes for SMS, WhatsApp, and in-app guest communications." },
  { title: "Digital Check-in / Check-out", description: "Mobile-optimized workflows to bypass the front desk." },
  { title: "POS & Billing Sync", description: "Routing F&B and amenity charges directly to the guest folio." },
  { title: "Housekeeping Task Automation", description: "Real-time room status updates and mobile dispatching." },
  { title: "Reputation & Review Monitoring", description: "Aggregating feedback and automating post-stay surveys." },
  { title: "Staff Scheduling & Operations Dashboards", description: "Centralizing shift management and daily operational KPIs." }
];

const tabsData = [
  {
    id: "guest-journey",
    label: "Guest Journey Automation",
    summary: "Digital touchpoints from booking confirmation to post-stay review.",
    bullets: ["Automated pre-arrival emails/SMS", "Upsell and upgrade workflows", "Digital compendium access"],
    mini_case: { scenario: "Missed opportunities for pre-arrival upgrades.", what_we_do: "Built an automated pre-arrival web flow linked to the PMS.", result: "Increased ancillary revenue capture." }
  },
  {
    id: "front-desk",
    label: "Front Desk Acceleration",
    summary: "Tools to reduce lobby queues and manual data entry.",
    bullets: ["Mobile check-in interfaces", "ID and document scanning integrations", "Secure keyless entry hand-offs"],
    mini_case: { scenario: "Long lines during peak check-in hours.", what_we_do: "Deployed a mobile-optimized web check-in portal.", result: "Bypassed front-desk queues for 30% of guests." }
  },
  {
    id: "housekeeping",
    label: "Housekeeping Command Center",
    summary: "Real-time coordination between the front desk and cleaning staff.",
    bullets: ["Mobile room status updates", "Maintenance ticketing", "Priority room assignment logic"],
    mini_case: { scenario: "Radio communication causing delays in room turnover.", what_we_do: "Created a lightweight mobile web app for staff.", result: "Turnaround communication lag reduced to zero." }
  },
  {
    id: "revenue",
    label: "Revenue & Occupancy Signals",
    summary: "Custom analytics tailored to your property portfolio.",
    bullets: ["Pacing and pickup dashboards", "Channel mix reporting", "Custom KPI aggregations"],
    mini_case: { scenario: "Data trapped in legacy PMS reporting modules.", what_we_do: "Extracted data via API into a modern BI dashboard.", result: "Daily revenue meetings powered by real-time data." }
  }
];

const integrations = [
  { name: "Property Management (PMS)", notes: "Opera, Mews, Cloudbeds integrations." },
  { name: "Point of Sale (POS)", notes: "Micros, Toast, Lightspeed connections." },
  { name: "CRM & Marketing", notes: "Salesforce, Hubspot, or custom guest DBs." },
  { name: "Channel Managers", notes: "SiteMinder, D-Edge rate sync." }
];

const faqs = [
  { q: "Can you integrate with Oracle Opera?", a: "Yes, we have experience navigating complex legacy PMS interfaces, including Opera OXI and modern OHIP integrations." },
  { q: "Should we build a native app or a web app for guests?", a: "For most properties, a mobile-optimized PWA yields higher adoption since guests don't want to download an app. Luxury brands may benefit from native apps." },
  { q: "How do you handle guest data privacy?", a: "We architect databases to isolate PII, enforce encryption at rest, and build compliant data retention policies." },
  { q: "Can your software control room locks?", a: "We can integrate with mobile key providers (like Assa Abloy or Salto) via their SDKs to facilitate keyless entry." }
];

function GuestJourneySlider() {
  const shouldReduceMotion = useReducedMotion();
  const stages = [
    { id: "discover", label: "Discover", icon: Search, tip: "Automated SEO tracking & direct booking funnels." },
    { id: "book", label: "Book", icon: CalendarCheck, tip: "High-conversion booking engines & payment integration." },
    { id: "checkin", label: "Check-in", icon: Smartphone, tip: "Mobile key delivery and queue-busting web check-in." },
    { id: "stay", label: "Stay", icon: BedDouble, tip: "Digital compendiums & real-time housekeeping sync." },
    { id: "review", label: "Review", icon: Star, tip: "Automated pulse surveys and sentiment analysis APIs." },
    { id: "return", label: "Return", icon: RefreshCw, tip: "Loyalty point workflows and personalized CRM offers." },
  ];
  const [activeStage, setActiveStage] = useState(stages[0].id);

  return (
    <div className="bg-white rounded-[2rem] border border-orange-100 shadow-lg p-8 sm:p-12 relative overflow-hidden mb-12">
       <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/5 blur-3xl rounded-full" />
       <div className="text-center mb-10 relative z-10">
          <span className="text-[10px] uppercase tracking-widest text-amber-600 font-black mb-2 block">The Digital Guest Journey</span>
          <h3 className="text-3xl font-black text-stone-900 tracking-tight">Every Touchpoint Matters</h3>
       </div>
       
       <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col gap-8">
          {/* Horizontal Strip */}
          <div className="flex flex-nowrap overflow-x-auto no-scrollbar gap-2 pb-4 snap-x relative items-center justify-between">
            <div className="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-orange-100 -translate-y-1/2 z-0" />
            {stages.map((stage) => {
              const Icon = stage.icon;
              const isActive = activeStage === stage.id;
              return (
                <button 
                  key={stage.id} 
                  onClick={() => setActiveStage(stage.id)}
                  onMouseEnter={() => setActiveStage(stage.id)}
                  className="snap-center shrink-0 flex flex-col items-center gap-3 w-28 relative z-10 group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-xl p-2"
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-amber-500 text-white shadow-lg scale-110 ring-4 ring-amber-100' : 'bg-white border-2 border-orange-100 text-stone-400 group-hover:border-amber-300 group-hover:text-amber-500'}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-xs font-black uppercase tracking-widest transition-colors ${isActive ? 'text-amber-600' : 'text-stone-400 group-hover:text-stone-600'}`}>
                    {stage.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Micro Panel */}
          <div className="bg-stone-50 border border-stone-200 rounded-2xl p-6 min-h-[120px] flex items-center justify-center text-center shadow-inner">
             <AnimatePresence mode="wait">
               {stages.map((stage) => (
                 activeStage === stage.id && (
                   <motion.div
                     key={stage.id}
                     initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                     animate={{ opacity: 1, y: 0 }}
                     exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
                     transition={{ duration: 0.2 }}
                   >
                     <div className="inline-flex items-center justify-center gap-2 text-amber-600 font-black mb-2 w-full">
                       <stage.icon className="w-5 h-5" />
                       {stage.label} Automation
                     </div>
                     <p className="text-stone-600 font-medium">{stage.tip}</p>
                   </motion.div>
                 )
               ))}
             </AnimatePresence>
          </div>
       </div>
    </div>
  );
}

function HospitalityIndustryPage() {
  const [activeTab, setActiveTab] = useState<string>('guest-journey');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Hospitality Tech & Software Solutions | WAVELET";
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF8F0] font-sans text-stone-900 antialiased selection:bg-amber-500 selection:text-white pt-16">
      <SiteHeader />

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative px-4 py-16 sm:py-24 overflow-hidden bg-stone-900 text-white border-b border-stone-800">
          {/* Subtle Animated Background Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"
          />
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_#f59e0b_0%,_transparent_50%),radial-gradient(circle_at_20%_80%,_#fb923c_0%,_transparent_50%)] opacity-10" />
          </div>

          <StaggerGrid className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <motion.div className="inline-flex items-center gap-2 rounded-full bg-stone-800/80 border border-stone-700 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-amber-400 mb-6">
                <ConciergeBell className="w-4 h-4" />
                Hospitality Technology
              </motion.div>

              <KineticHeading 
                as="h1"
                text={<>Frictionless Stays, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-300">Seamless Operations.</span></>}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6"
              />

              <motion.p className="text-lg sm:text-xl text-stone-300 font-medium max-w-xl leading-relaxed mb-8">
                We engineer digital hospitality experiences that delight guests and give your staff the tools they need to perform flawlessly.
              </motion.p>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <MagneticCTA disabled={shouldReduceMotion}>
                  <a href="/contact?intent=hospitality" className="block w-full sm:w-auto text-center rounded-full bg-amber-600 text-stone-900 font-black px-8 py-4 hover:bg-amber-500 active:scale-95 transition-all text-sm shadow-[0_0_20px_rgba(245,158,11,0.2)]">
                    Modernize Your Guest Tech
                  </a>
                </MagneticCTA>
                <a href="#capabilities" className="w-full sm:w-auto text-center rounded-full bg-transparent border border-stone-600 text-white font-bold px-8 py-4 hover:bg-stone-800 active:scale-95 transition-all text-sm">
                  See Our Solutions
                </a>
              </div>
            </div>

            {/* Programmatic Graphic with subtle parallax */}
            <motion.div
              style={{ y: shouldReduceMotion ? 0 : 8 }}
              className="relative aspect-video rounded-3xl bg-stone-950/50 border border-stone-700 shadow-2xl flex items-center justify-center overflow-hidden backdrop-blur-sm"
            >
               <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g className={shouldReduceMotion ? '' : 'animate-[translateY_4s_ease-in-out_infinite_alternate]'}>
                     <rect x="50" y="60" width="180" height="100" rx="16" fill="rgba(255,255,255,0.05)" stroke="rgba(251,146,60,0.3)" strokeWidth="1" />
                     <circle cx="80" cy="90" r="12" fill="rgba(251,146,60,0.8)" />
                     <rect x="105" y="86" width="90" height="8" rx="4" fill="rgba(255,255,255,0.8)" />
                     <rect x="80" y="120" width="120" height="20" rx="4" fill="rgba(255,255,255,0.1)" />
                  </g>
                  <g className={shouldReduceMotion ? '' : 'animate-[translateY_5s_ease-in-out_infinite_alternate-reverse]'}>
                     <rect x="180" y="140" width="170" height="110" rx="16" fill="rgba(255,255,255,0.05)" stroke="rgba(245,158,11,0.3)" strokeWidth="1" />
                     <rect x="200" y="160" width="40" height="40" rx="8" fill="rgba(245,158,11,0.2)" />
                     <path d="M212 180 L218 186 L228 174" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                     <rect x="250" y="165" width="70" height="6" rx="3" fill="rgba(255,255,255,0.6)" />
                     <rect x="250" y="180" width="40" height="4" rx="2" fill="rgba(255,255,255,0.3)" />
                     <rect x="200" y="215" width="130" height="15" rx="4" fill="rgba(245,158,11,0.8)" />
                  </g>
                  <g className={shouldReduceMotion ? '' : 'animate-[translateX_6s_ease-in-out_infinite_alternate]'}>
                     <path d="M 330 80 Q 350 80 350 100 Q 350 120 330 120 L 310 120 L 300 130 L 300 120 Q 280 120 280 100 Q 280 80 300 80 Z" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" />
                     <circle cx="305" cy="100" r="3" fill="#fff" />
                     <circle cx="315" cy="100" r="3" fill="#fff" />
                     <circle cx="325" cy="100" r="3" fill="#fff" />
                  </g>
               </svg>
            </motion.div>
          </StaggerGrid>
        </section>

        {/* 2. SLA STRIP */}
        <RevealSection direction="up" className="py-8 px-4 max-w-7xl mx-auto mt-16 relative z-20">
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {heroStats.map((stat, i) => (
              <MotionCard key={i} className="bg-white border border-orange-100 rounded-2xl p-6 shadow-md flex items-center gap-6">
                <div className="text-3xl font-black text-amber-500 shrink-0">{stat.value}</div>
                <div>
                  <div className="text-sm font-black text-stone-900 uppercase tracking-widest">{stat.label}</div>
                  <div className="text-xs text-stone-500 font-semibold">{stat.helper}</div>
                </div>
              </MotionCard>
            ))}
            <MotionCard className="bg-stone-900 border border-stone-800 rounded-2xl p-6 shadow-md flex items-center gap-6 lg:col-span-1 sm:col-span-2">
                <div className="text-3xl font-black text-white shrink-0">24/7</div>
                <div>
                  <div className="text-sm font-black text-amber-400 uppercase tracking-widest">SLA Uptime</div>
                  <div className="text-xs text-stone-400 font-semibold">Mission-critical API reliability</div>
                </div>
            </MotionCard>
          </StaggerGrid>
        </RevealSection>

        {/* 3. CAPABILITY MODULES GRID */}
        <RevealSection direction="up" className="py-12 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight mb-3">Custom Hospitality Software</h2>
            <p className="text-stone-600 font-medium max-w-2xl mx-auto">We build specific tools to connect your PMS, automate staff workflows, and create premium guest touchpoints.</p>
          </div>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {subSubtopics.map((topic, i) => (
              <MotionCard key={i} className="bg-white border border-orange-100 rounded-xl p-5 shadow-sm transition-all flex flex-col gap-2">
                 <h3 className="text-sm font-black text-stone-900 leading-tight">{topic.title}</h3>
                 <p className="text-[11px] text-stone-600 font-semibold leading-relaxed">{topic.description}</p>
              </MotionCard>
            ))}
          </StaggerGrid>
        </RevealSection>

        {/* 4. GUEST JOURNEY & OPS DASHBOARD */}
        <RevealSection direction="up" className="py-12 px-4 max-w-7xl mx-auto space-y-8">
          
          {/* Signature Interaction */}
          <GuestJourneySlider />

          {/* Ops Dashboard Text + Graphic */}
          <div className="bg-stone-900 text-white rounded-[2rem] shadow-xl p-8 sm:p-12 border border-stone-800">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5">
                   <span className="text-[10px] uppercase tracking-widest text-amber-500 font-black mb-2 block">Operational UX</span>
                   <h3 className="text-3xl font-black text-white tracking-tight mb-4">Empowering Your Property Staff</h3>
                   <p className="text-stone-300 font-medium leading-relaxed mb-6">
                     Beautiful guest apps are useless if the staff backend is chaotic. We prioritize operational UX, building fast, mobile-friendly tools for housekeeping, maintenance, and the front desk.
                   </p>
                   <ul className="space-y-3">
                     {["Real-time room status alerts", "Mobile-first staff tools", "Cross-department sync"].map((item, i) => (
                       <li key={i} className="flex gap-2.5 items-center text-sm font-bold text-stone-200">
                         <CheckCircle2 className="w-4 h-4 text-amber-400" />
                         <span>{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>
                {/* Ops Mockup SVG */}
                <div className="lg:col-span-7 bg-stone-950 rounded-2xl border border-stone-800 p-6 shadow-inner aspect-[4/3] sm:aspect-video flex items-center justify-center relative overflow-hidden">
                   <svg viewBox="0 0 500 300" className="w-full h-full text-stone-800" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="20" y="20" width="80" height="260" rx="8" className="fill-stone-900" />
                      <rect x="30" y="40" width="60" height="10" rx="4" className="fill-stone-800" />
                      <rect x="30" y="60" width="60" height="10" rx="4" className="fill-stone-800" />
                      <rect x="120" y="20" width="360" height="260" rx="12" className="fill-stone-900" />
                      <rect x="140" y="40" width="100" height="16" rx="4" className="fill-stone-800" />
                      <rect x="420" y="40" width="40" height="16" rx="8" className="fill-amber-500/20" />
                      <rect x="140" y="80" width="100" height="60" rx="8" className="fill-stone-950 stroke-stone-800 stroke-2" />
                      <rect x="255" y="80" width="100" height="60" rx="8" className="fill-stone-950 stroke-stone-800 stroke-2" />
                      <rect x="370" y="80" width="100" height="60" rx="8" className="fill-stone-950 stroke-stone-800 stroke-2" />
                      <path d="M 150 120 L 170 100 L 190 110 L 230 90" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M 265 120 L 285 110 L 305 115 L 345 95" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      <rect x="140" y="160" width="330" height="30" rx="6" className="fill-stone-950" />
                      <rect x="150" y="170" width="20" height="10" rx="2" className="fill-emerald-500" />
                      <rect x="180" y="172" width="150" height="6" rx="3" className="fill-stone-700" />
                      <rect x="140" y="200" width="330" height="30" rx="6" className="fill-stone-950" />
                      <rect x="150" y="210" width="20" height="10" rx="2" className="fill-amber-500" />
                      <rect x="180" y="212" width="120" height="6" rx="3" className="fill-stone-700" />
                      <rect x="140" y="240" width="330" height="30" rx="6" className="fill-stone-950" />
                      <rect x="150" y="250" width="20" height="10" rx="2" className="fill-rose-500" />
                      <rect x="180" y="252" width="180" height="6" rx="3" className="fill-stone-700" />
                   </svg>
                </div>
             </div>
          </div>
        </RevealSection>

        {/* 5. HORIZONTAL TOP TABS */}
        <RevealSection direction="down" className="py-12 px-4 max-w-7xl mx-auto">
          <div className="bg-white border border-orange-100 rounded-[2.5rem] shadow-md p-6 sm:p-10">
            <div className="flex flex-nowrap overflow-x-auto gap-3 pb-6 border-b border-orange-50 no-scrollbar mb-8">
              {tabsData.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 px-5 py-2.5 rounded-full font-bold transition-all text-sm border focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                    activeTab === tab.id 
                      ? 'bg-amber-100 border-amber-300 text-stone-900 shadow-sm' 
                      : 'bg-white border-slate-200 text-stone-500 hover:bg-orange-50 hover:text-stone-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="min-h-[250px]">
              <AnimatePresence mode="wait">
                {tabsData.map(tab => (
                  activeTab === tab.id && (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 lg:grid-cols-2 gap-10"
                    >
                      <div>
                         <h3 className="text-3xl font-black text-stone-900 mb-4">{tab.label}</h3>
                         <p className="text-stone-600 font-medium mb-6 text-lg">{tab.summary}</p>
                         <ul className="space-y-3">
                           {tab.bullets.map((bullet, idx) => (
                             <li key={idx} className="flex items-start gap-2.5 text-sm font-bold text-stone-800">
                               <CheckCircle2 className="w-5 h-5 text-amber-500 shrink-0" />
                               <span>{bullet}</span>
                             </li>
                           ))}
                         </ul>
                      </div>
                      
                      <div className="bg-[#FFF8F0] border border-orange-200 rounded-2xl p-8 flex flex-col justify-center relative overflow-hidden">
                         <div className="absolute top-0 right-0 p-4 opacity-10">
                            <Star className="w-16 h-16 text-amber-600" />
                         </div>
                         <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 mb-4 block">Resolution Case Study</span>
                         <div className="space-y-4 text-sm font-medium relative z-10">
                           <div className="bg-white/60 p-3 rounded-lg"><strong className="text-stone-900 block mb-1">Scenario:</strong> <span className="text-stone-700">{tab.mini_case.scenario}</span></div>
                           <div className="bg-white/60 p-3 rounded-lg"><strong className="text-stone-900 block mb-1">Implementation:</strong> <span className="text-stone-700">{tab.mini_case.what_we_do}</span></div>
                           <div className="bg-amber-100 text-amber-900 p-3 rounded-lg border border-amber-200"><strong>Result:</strong> {tab.mini_case.result}</div>
                         </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
        </RevealSection>

        {/* 6. INTEGRATION READY */}
        <RevealSection className="py-8 px-4 max-w-7xl mx-auto">
           <div className="text-center mb-6">
              <h3 className="text-lg font-black text-stone-900">Seamless System Connectors</h3>
           </div>
           <StaggerGrid className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {integrations.map((int, i) => (
                 <MotionCard key={i} className="bg-white border border-orange-100 rounded-xl p-4 shadow-sm text-center">
                    <div className="font-black text-stone-900 text-sm mb-1">{int.name}</div>
                    <div className="text-[10px] font-semibold text-stone-500">{int.notes}</div>
                 </MotionCard>
              ))}
           </StaggerGrid>
        </RevealSection>

        {/* 7. FAQ ACCORDION */}
        <RevealSection direction="up" className="py-12 px-4 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <HelpCircle className="w-8 h-8 text-amber-400 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">Technical FAQ</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-orange-100 rounded-xl px-5 shadow-sm hover:border-orange-300 transition-colors overflow-hidden">
                <AccordionTrigger className="text-sm font-bold text-stone-900 hover:text-amber-600 hover:no-underline py-4 text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-stone-600 text-sm leading-relaxed pb-4 font-medium">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealSection>

        {/* 8. FINAL CTA */}
        <RevealSection direction="up" className="py-12 px-4 mb-10">
          <div className="max-w-4xl mx-auto bg-stone-900 border border-stone-800 rounded-[2.5rem] shadow-xl overflow-hidden relative text-center">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#f59e0b_0%,_transparent_60%)] opacity-20" />
             <div className="p-10 sm:p-16 relative z-10">
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">Upgrade your hospitality tech stack.</h2>
                <p className="text-stone-300 font-medium mb-6 max-w-lg mx-auto text-lg">
                   Stop fighting with rigid legacy software. Let's build tools that fit your exact service standards.
                </p>
                <MagneticCTA disabled={shouldReduceMotion}>
                  <a href="/contact?intent=hospitality" className="inline-block rounded-full bg-amber-600 text-stone-900 font-black px-10 py-4 hover:bg-amber-500 transition-all shadow-md text-sm">
                     Book a Consultation
                  </a>
                </MagneticCTA>
                <p className="text-xs text-stone-400 mt-4">No spam. Response within 24–48 hours.</p>
             </div>
          </div>
        </RevealSection>
      </main>

      <EnterpriseFooter />
    </div>
  );
}
