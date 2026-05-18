import { createFileRoute } from '@tanstack/react-router';
import { SiteHeader } from '@/components/SiteHeader';
import { EnterpriseFooter } from '@/components/EnterpriseFooter';
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  Factory, Settings, Network, ShieldCheck, Database, 
  Activity, ArrowRight, BarChart3, Wrench, CheckCircle2,
  HelpCircle, MonitorSmartphone, Link as LinkIcon
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RevealSection, StaggerGrid, MotionCard, KineticHeading, MagneticCTA } from '@/components/MotionSystem';

export const Route = createFileRoute('/industries/manufacturing')({
  component: ManufacturingIndustryPage,
});

const heroStats = [
  { value: "Real-time", label: "Visibility", helper: "Across fragmented systems" },
  { value: "Predictable", label: "Downtime Control", helper: "Data-driven maintenance" }
];

const subSubtopics = [
  { title: "Production Planning & Scheduling", description: "Digital workflows to balance machine capacity and order demand." },
  { title: "Inventory & Warehouse Visibility", description: "Accurate, real-time tracking of raw materials and finished goods." },
  { title: "Quality Management (QMS) Workflows", description: "Digitized inspection forms and automated non-conformance routing." },
  { title: "Maintenance & Downtime Tracking", description: "Transitioning from reactive fixes to scheduled, predictable maintenance routines." },
  { title: "IoT/Shop-Floor Data Capture", description: "Collecting signals directly from PLCs and operator inputs." },
  { title: "ERP/MRP Integration Readiness", description: "Bridging legacy core systems with modern mobile and web interfaces." },
  { title: "Supplier/Vendor Portals", description: "Secure access for partners to submit documents and check order statuses." },
  { title: "Traceability & Lot/Batch Tracking", description: "End-to-end digital records from supplier origin to final shipment." },
  { title: "Reporting & OEE Dashboards", description: "Aggregating shop-floor data into actionable Overall Equipment Effectiveness metrics." },
  { title: "Safety & Compliance Reporting", description: "Standardizing incident logging and safety audit trails." }
];

const tabsData = [
  {
    id: "visibility",
    label: "Shop-Floor Visibility",
    summary: "Replace paper travelers and whiteboards with digital dashboards.",
    bullets: ["Real-time job tracking", "Operator input interfaces", "Digital work instructions"],
    mini_case: { scenario: "Paper-based tracking causing 24hr data delays.", what_we_do: "Deployed a tablet-optimized web app for operators.", result: "Shift reporting happens instantly." }
  },
  {
    id: "oee",
    label: "OEE & Downtime Analytics",
    summary: "Understand exactly when and why machines stop.",
    bullets: ["Automated reason coding", "Shift-by-shift performance comparisons", "Scrap and yield tracking"],
    mini_case: { scenario: "Unknown causes for a 15% productivity drop.", what_we_do: "Built an OEE aggregator pulling direct machine states.", result: "Identified micro-stops accounting for 10% capacity loss." }
  },
  {
    id: "traceability",
    label: "Traceability by Design",
    summary: "Digital genealogies for every product shipped.",
    bullets: ["Barcode and RFID integration", "Lot and serial tracking", "Rapid recall reporting"],
    mini_case: { scenario: "Compliance audits taking weeks to compile.", what_we_do: "Implemented automated lot linking at each production phase.", result: "Audit reports generated in minutes." }
  },
  {
    id: "maintenance",
    label: "Maintenance Intelligence",
    summary: "Move from break-fix to planned interventions.",
    bullets: ["Preventative maintenance scheduling", "Work order management", "Spare parts inventory sync"],
    mini_case: { scenario: "Unexpected breakdowns halting assembly lines.", what_we_do: "Created a mobile work-order system for technicians.", result: "Increased PM compliance by 40%." }
  },
  {
    id: "erp",
    label: "ERP/MRP Handshake",
    summary: "Extend the value of your core system without replacing it.",
    bullets: ["Bi-directional data sync", "Custom UX overlays for legacy systems", "API gateway development"],
    mini_case: { scenario: "Operators struggling with a clunky 90s ERP interface.", what_we_do: "Built a modern React frontend utilizing the ERP's APIs.", result: "Reduced data entry time by 60%." }
  },
  {
    id: "quality",
    label: "Quality Gates",
    summary: "Enforce inspection parameters before production proceeds.",
    bullets: ["Digital inspection checklists", "Automated hold routing", "SPC chart integration"],
    mini_case: { scenario: "Defective parts reaching shipping.", what_we_do: "Implemented mandatory digital sign-offs at critical steps.", result: "Reduced external failure rate significantly." }
  }
];

const integrations = [
  { name: "ERP/MRP Systems", notes: "SAP, Epicor, NetSuite, or custom legacy databases." },
  { name: "Hardware Scanners", notes: "Zebra, Honeywell barcode and RFID integrations." },
  { name: "PLC/IoT Gateways", notes: "Connecting to Kepware or direct OPC UA endpoints." },
  { name: "BI Tools", notes: "PowerBI or Tableau data pipeline readiness." }
];

const faqs = [
  { q: "Do we need to replace our current ERP?", a: "No. We typically build modern interfaces and workflows that connect to your existing ERP via APIs or secure database connections." },
  { q: "How do you handle factory floors with poor Wi-Fi?", a: "We design mobile and tablet applications with offline-first capabilities, syncing data automatically when a connection is re-established." },
  { q: "Can you integrate directly with our machines?", a: "Yes, we work with IoT gateways and middleware (like OPC UA servers) to translate raw machine signals into usable software data." },
  { q: "How do you ensure operator adoption?", a: "By designing extremely simplified, high-contrast user interfaces with large touch targets, tailored specifically for the shop floor environment." },
  { q: "Is the data secure from external threats?", a: "We implement strict security baselines, including MFA for admin portals, encrypted traffic, and isolated network architectures." },
  { q: "How long does a custom shop-floor app take to build?", a: "A targeted MVP (like a digital quality checklist) can be deployed in 6-8 weeks, with more complex MES-lite systems taking 3-6 months." },
  { q: "Do you provide rugged tablets or hardware?", a: "We provide the software. We can recommend hardware partners, but our web applications are designed to be device-agnostic." },
  { q: "What happens if the internet goes down?", a: "Critical modules can be configured to run on local edge servers or utilize offline caching to ensure production doesn't halt." }
];

function ProcessFlowSync() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });
  const shouldReduceMotion = useReducedMotion();

  // Progress logic maps scrolling to 4 steps
  const activeStep = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3]);
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    return activeStep.on("change", (v) => setCurrentStep(Math.round(v)));
  }, [activeStep]);

  const nodes = [
    { cx: 50, cy: 150 },
    { cx: 150, cy: 200 },
    { cx: 250, cy: 100 },
    { cx: 350, cy: 150 },
  ];

  return (
    <div ref={ref} className="bg-white rounded-[2rem] border border-slate-200 shadow-md p-8 sm:p-12 mb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-orange-600 font-black mb-2 block">Data Lifecycle</span>
          <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-4">The Production Data Flow</h3>
          <p className="text-slate-600 font-medium leading-relaxed mb-6">
            Siloed data slows production. We build systems that ensure information flows exactly where it needs to be—from the machine edge to executive dashboards.
          </p>
          <div className="space-y-4">
            {["Capture", "Contextualize", "Act", "Analyze"].map((step, idx) => (
              <div 
                key={idx} 
                className={`flex items-center gap-4 border rounded-xl p-3 transition-colors duration-500 ${currentStep >= idx ? 'bg-orange-50 border-orange-200' : 'bg-slate-50 border-slate-100'}`}
              >
                <div className={`w-8 h-8 rounded-full font-black flex items-center justify-center text-sm transition-colors duration-500 ${currentStep >= idx ? 'bg-orange-600 text-white' : 'bg-slate-900 text-white'}`}>{idx + 1}</div>
                <div className={`font-bold transition-colors duration-500 ${currentStep >= idx ? 'text-orange-900' : 'text-slate-800'}`}>{step}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Process Map SVG */}
        <div className="bg-slate-900 rounded-2xl h-full min-h-[300px] flex items-center justify-center relative overflow-hidden border border-slate-800 p-6">
          <svg className="w-full h-full max-w-full" viewBox="0 0 400 300" fill="none">
            {/* Background Path */}
            <path d="M 50 150 C 100 50, 150 250, 200 150 C 250 50, 300 250, 350 150" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
            
            {/* Animated Path */}
            <motion.path 
              d="M 50 150 C 100 50, 150 250, 200 150 C 250 50, 300 250, 350 150" 
              stroke="#ea580c" 
              strokeWidth="4" 
              strokeLinecap="round"
              style={{ pathLength: shouldReduceMotion ? 1 : scrollYProgress }} 
            />

            {nodes.map((node, i) => (
              <motion.circle 
                key={i} 
                cx={node.cx} 
                cy={node.cy} 
                r="12" 
                className={`transition-colors duration-500 ${currentStep >= i ? 'fill-orange-500' : 'fill-slate-600'}`}
                animate={!shouldReduceMotion && currentStep === i ? { opacity: [0.6, 1, 0.6] } : {}}
                transition={{ repeat: Infinity, duration: 1.5 }}
              />
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}

function ManufacturingIndustryPage() {
  const [activeTab, setActiveTab] = useState<string>('visibility');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "IT Solutions & Software for Manufacturing | WAVELET";
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 antialiased selection:bg-orange-500 selection:text-white pt-16">
      <SiteHeader />

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative px-4 py-16 sm:py-24 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
          {/* Animated Noise Overlay (Opacity Only) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` 
            }}
          />
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,_#ea580c_0%,_transparent_40%),radial-gradient(circle_at_0%_100%,_#0284c7_0%,_transparent_40%)] opacity-20" />
          </div>

          <StaggerGrid className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <motion.div className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 border border-slate-700 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-orange-400 mb-6">
                <Factory className="w-4 h-4" />
                Manufacturing IT Solutions
              </motion.div>

              <KineticHeading 
                as="h1"
                text={<>Bring Clarity to the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Shop Floor.</span></>}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6"
              />

              <motion.p className="text-lg sm:text-xl text-slate-300 font-medium max-w-xl leading-relaxed mb-8">
                We build integrated software solutions that connect your machines, systems, and teams—reducing downtime and improving traceability.
              </motion.p>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <MagneticCTA disabled={shouldReduceMotion}>
                  <a href="/contact?intent=manufacturing" className="block w-full sm:w-auto text-center rounded-full bg-orange-600 text-white font-bold px-8 py-4 hover:bg-orange-500 active:scale-95 transition-all text-sm shadow-[0_0_20px_rgba(234,88,12,0.3)]">
                    Discuss Your Operations
                  </a>
                </MagneticCTA>
                <a href="#capabilities" className="w-full sm:w-auto text-center rounded-full bg-slate-800 border border-slate-700 text-white font-bold px-8 py-4 hover:bg-slate-700 active:scale-95 transition-all text-sm">
                  Explore Capabilities
                </a>
              </div>
            </div>

            {/* Programmatic Abstract Manufacturing Graphic with Parallax */}
            <motion.div
              style={{ y: shouldReduceMotion ? 0 : 8 }}
              className="relative aspect-video rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden"
            >
               <svg viewBox="0 0 400 300" className="w-full h-full text-slate-800" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="50" y="200" width="80" height="60" rx="8" className="fill-slate-900 stroke-slate-700 stroke-2" />
                  <rect x="160" y="200" width="80" height="60" rx="8" className="fill-slate-900 stroke-slate-700 stroke-2" />
                  <rect x="270" y="200" width="80" height="60" rx="8" className="fill-slate-900 stroke-slate-700 stroke-2" />
                  <rect x="130" y="60" width="140" height="80" rx="12" className="fill-slate-900 stroke-orange-500 stroke-2" />
                  <path d="M 90 200 C 90 150, 150 150, 150 140" stroke="url(#orangeGlow)" strokeWidth="3" strokeDasharray="6 4" className={shouldReduceMotion ? '' : 'animate-pulse'} />
                  <path d="M 200 200 L 200 140" stroke="url(#blueGlow)" strokeWidth="3" strokeDasharray="6 4" className={shouldReduceMotion ? '' : 'animate-pulse'} style={{ animationDelay: '0.5s' }} />
                  <path d="M 310 200 C 310 150, 250 150, 250 140" stroke="url(#orangeGlow)" strokeWidth="3" strokeDasharray="6 4" className={shouldReduceMotion ? '' : 'animate-pulse'} style={{ animationDelay: '1s' }} />
                  <rect x="145" y="80" width="110" height="8" rx="4" className="fill-orange-500/80" />
                  <rect x="145" y="100" width="70" height="6" rx="3" className="fill-sky-500/80" />
                  <rect x="145" y="115" width="90" height="6" rx="3" className="fill-slate-600" />
                  <defs>
                     <linearGradient id="orangeGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#ea580c" />
                        <stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
                     </linearGradient>
                     <linearGradient id="blueGlow" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
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
              <MotionCard key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-md flex items-center gap-6">
                <div className="text-3xl font-black text-orange-600 shrink-0">{stat.value}</div>
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
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">Targeted Industrial Software</h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto">We digitize specific operational bottlenecks without forcing you into massive, monolithic software overhauls.</p>
          </div>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {subSubtopics.slice(0, 6).map((topic, i) => (
              <MotionCard key={i} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm transition-all flex flex-col gap-2 group">
                 <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 rounded-lg bg-orange-50 flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                       <Settings className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-black text-slate-900 leading-tight">{topic.title}</h3>
                 </div>
                 <p className="text-xs text-slate-600 font-medium leading-relaxed">{topic.description}</p>
              </MotionCard>
            ))}
          </StaggerGrid>
        </RevealSection>

        {/* 4. PROCESS MAP & SYSTEMS STACK */}
        <RevealSection direction="up" className="px-4 max-w-7xl mx-auto">
          {/* Signature Interaction: Process Flow Sync */}
          <ProcessFlowSync />

          {/* Systems Stack */}
          <div className="bg-white rounded-[2rem] border border-slate-200 shadow-md p-8 sm:p-12 mb-12">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="order-2 lg:order-1 bg-slate-50 rounded-2xl h-full min-h-[300px] flex items-center justify-center relative overflow-hidden border border-slate-200 p-8">
                   <div className="w-full flex flex-col gap-4">
                      <div className="bg-white border border-slate-300 rounded-xl py-4 px-6 shadow-sm text-center font-black text-slate-800 relative z-10">Application Interface</div>
                      <div className="flex justify-center"><ArrowRight className="w-5 h-5 text-slate-400 rotate-90" /></div>
                      <div className="bg-orange-50 border border-orange-200 rounded-xl py-4 px-6 shadow-sm text-center font-black text-orange-800 relative z-10">Data Processing & Logic</div>
                      <div className="flex justify-center"><ArrowRight className="w-5 h-5 text-slate-400 rotate-90" /></div>
                      <div className="bg-slate-900 border border-slate-800 rounded-xl py-4 px-6 shadow-sm text-center font-black text-white relative z-10">Edge / IoT / ERP Layer</div>
                   </div>
                </div>
                <div className="order-1 lg:order-2">
                   <span className="text-[10px] uppercase tracking-widest text-sky-600 font-black mb-2 block">Architecture</span>
                   <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-4">Connecting the Disconnected</h3>
                   <p className="text-slate-600 font-medium leading-relaxed">
                     Your machines speak one language, your ERP speaks another. We build the connective tissue (APIs, middleware, and UX overlays) to synchronize them securely.
                   </p>
                </div>
             </div>
          </div>
        </RevealSection>

        {/* 5. VERTICAL LEFT TABS */}
        <RevealSection direction="down" className="py-12 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Manufacturing Operations Hub</h2>
          </div>

          <div className="bg-white border border-slate-200 rounded-[2rem] shadow-lg p-6 sm:p-8 flex flex-col lg:flex-row gap-8 min-h-[400px]">
            <div className="w-full lg:w-1/3 flex flex-col gap-2">
              {tabsData.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left px-4 py-3.5 rounded-xl font-bold transition-all border ${
                    activeTab === tab.id 
                      ? 'bg-slate-900 border-slate-800 text-white shadow-md' 
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
                  }`}
                >
                  <span className="text-sm">{tab.label}</span>
                </button>
              ))}
            </div>

            <div className="w-full lg:w-2/3 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {tabsData.map(tab => (
                  activeTab === tab.id && (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-2xl font-black text-slate-900 mb-3">{tab.label}</h3>
                      <p className="text-slate-600 font-medium mb-8 leading-relaxed max-w-lg">{tab.summary}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3 block">Key Capabilities</span>
                          <ul className="space-y-3">
                            {tab.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm font-bold text-slate-800">
                                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                          <span className="text-[10px] font-black uppercase tracking-widest text-sky-600 mb-2 block">Mini Case Study</span>
                          <div className="space-y-2 text-xs font-medium">
                            <p><strong className="text-slate-900">Scenario:</strong> <span className="text-slate-600">{tab.mini_case.scenario}</span></p>
                            <p><strong className="text-slate-900">Solution:</strong> <span className="text-slate-600">{tab.mini_case.what_we_do}</span></p>
                            <p className="text-orange-700 font-bold mt-2 pt-2 border-t border-slate-100">Result: {tab.mini_case.result}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>
          </div>
        </RevealSection>

        {/* 6. INTEGRATION STRIP */}
        <RevealSection className="py-8 px-4 max-w-7xl mx-auto">
           <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3 shrink-0">
                 <LinkIcon className="w-6 h-6 text-slate-400" />
                 <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest">Integration Ready</h3>
              </div>
              <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                 {integrations.map((int, i) => (
                    <div key={i} className="bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-xs font-bold text-slate-700">
                       {int.name}
                    </div>
                 ))}
              </div>
           </div>
        </RevealSection>

        {/* 7. LEGACY MODERNIZATION USE CASE GRID */}
        <RevealSection direction="up" className="py-12 px-4 max-w-7xl mx-auto">
          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 gap-8">
             <MotionCard className="bg-slate-900 text-white rounded-[2rem] p-8 shadow-xl">
                <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center mb-6">
                   <MonitorSmartphone className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-black mb-4">Legacy Modernization</h3>
                <p className="text-sm text-slate-400 font-medium mb-6">
                  <strong>The Problem:</strong> Reliance on outdated, unsupported desktop software.
                </p>
                <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
                   <p className="text-sm font-bold text-slate-100 mb-2">The Solution</p>
                   <p className="text-xs text-slate-300 leading-relaxed mb-4">Re-platforming to secure, cloud-based web applications with responsive mobile interfaces for operators.</p>
                   <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-black text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-md">
                     KPI: Zero compatibility issues
                   </div>
                </div>
             </MotionCard>

             <MotionCard className="bg-white border border-slate-200 rounded-[2rem] p-8 shadow-md">
                <div className="w-10 h-10 bg-slate-100 border border-slate-200 rounded-lg flex items-center justify-center text-slate-600 mb-6">
                   <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">Security & Governance</h3>
                <p className="text-sm text-slate-600 font-medium mb-6 leading-relaxed">
                  Protecting manufacturing data requires strict access controls, especially when crossing the IT/OT divide.
                </p>
                <ul className="space-y-3">
                   {[
                     "Role-based access control for operators vs. supervisors.",
                     "On-premise deployment options for strict IT policies.",
                     "End-to-end encryption for production data in transit."
                   ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 text-sm font-bold text-slate-800 items-start">
                         <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                         <span>{item}</span>
                      </li>
                   ))}
                </ul>
             </MotionCard>
          </StaggerGrid>
        </RevealSection>

        {/* 8. FAQ ACCORDION */}
        <RevealSection direction="up" className="py-12 px-4 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <HelpCircle className="w-8 h-8 text-slate-400 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Implementation FAQs</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-slate-200 rounded-xl px-5 shadow-sm hover:border-slate-300 transition-colors overflow-hidden">
                <AccordionTrigger className="text-sm font-bold text-slate-900 hover:text-orange-600 hover:no-underline py-4 text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-4 font-medium">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </RevealSection>

        {/* 9. FINAL CTA */}
        <RevealSection direction="up" className="py-12 px-4 mb-10">
          <div className="max-w-4xl mx-auto bg-white border border-slate-200 rounded-[2.5rem] shadow-xl overflow-hidden relative">
             <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />
             <div className="p-10 text-center relative z-10">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">Ready to digitize your production?</h2>
                <p className="text-slate-600 font-medium mb-6 max-w-lg mx-auto">
                   Let's discuss how custom software can remove bottlenecks from your manufacturing process without disrupting the shop floor.
                </p>
                <MagneticCTA disabled={shouldReduceMotion}>
                  <a href="/contact?intent=manufacturing" className="inline-block rounded-full bg-slate-900 text-white font-black px-10 py-4 hover:bg-slate-800 transition-all shadow-md text-sm">
                     Schedule an Architecture Review
                  </a>
                </MagneticCTA>
                <p className="text-xs text-slate-500 mt-4">No spam. Response within 24–48 hours.</p>
             </div>
          </div>
        </RevealSection>
      </main>

      <EnterpriseFooter />
    </div>
  );
}
