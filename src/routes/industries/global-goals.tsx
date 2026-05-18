import { createFileRoute } from '@tanstack/react-router';
import { SiteHeader } from '@/components/SiteHeader';
import { EnterpriseFooter } from '@/components/EnterpriseFooter';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  Globe2, Heart, ShieldCheck, LineChart, Users,
  HeartHandshake, Target, CheckCircle2,
  HelpCircle, Search, FileText
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute('/industries/global-goals')({
  component: GlobalGoalsIndustryPage,
});

const heroStats = [
  { value: "Transparent", label: "Reporting", helper: "Open data for donors" },
  { value: "Global", label: "Scale", helper: "Low-bandwidth optimized" }
];

const subSubtopics = [
  { title: "Donation Portals & Logic", description: "Frictionless recurring and one-time payment flows." },
  { title: "Impact Tracking Dashboards", description: "Real-time visualization of funds deployed vs. outcomes." },
  { title: "Volunteer Management", description: "Tools for onboarding, scheduling, and communicating with volunteers." },
  { title: "Data Collection in the Field", description: "Offline-first mobile apps for remote data gathering." },
  { title: "Grant Reporting Automation", description: "Generating complex compliance reports instantly." },
  { title: "CRM for Nonprofits", description: "Managing donor relationships and communication cadences." },
  { title: "Accessibility (A11y)", description: "Ensuring public tools meet the highest inclusion standards." },
  { title: "Secure PII Handling", description: "Protecting the data of vulnerable populations." },
  { title: "Multi-Language Support", description: "i18n architectures for global, localized reach." },
  { title: "Low-Bandwidth Optimization", description: "Web apps designed to load quickly on 3G networks." }
];

const tabsData = [
  {
    id: "donations",
    label: "Frictionless Giving",
    summary: "Remove the barriers between intent and impact.",
    bullets: ["Apple Pay / Google Pay integration", "Automated tax receipt generation", "Recurring donation nudges"],
    mini_case: { scenario: "High drop-off rate on a legacy multi-page donation form.", what_we_do: "Engineered a single-page React checkout with Stripe.", result: "Conversion rate increased by 40%." }
  },
  {
    id: "impact",
    label: "Visualizing Impact",
    summary: "Show donors exactly what their money is achieving in real-time.",
    bullets: ["Custom data visualization", "Live program metrics", "Automated 'impact updates' via email"],
    mini_case: { scenario: "Donors feeling disconnected from the actual fieldwork.", what_we_do: "Built a public transparency dashboard fed by field APIs.", result: "Increased recurring donation retention." }
  },
  {
    id: "field",
    label: "Offline-First Field Tools",
    summary: "Software that works where there is no internet connection.",
    bullets: ["Progressive Web Apps (PWAs)", "Local device caching", "Background sync APIs"],
    mini_case: { scenario: "Field workers losing data due to spotty remote internet.", what_we_do: "Developed an offline-first data collection app.", result: "Zero data loss and improved data integrity." }
  },
  {
    id: "reporting",
    label: "Grant Compliance",
    summary: "Automate the heavy reporting required by major institutional donors.",
    bullets: ["Custom data querying", "Automated PDF generation", "Audit-ready financial logs"],
    mini_case: { scenario: "Staff spending 20 hours a month manually compiling grant reports.", what_we_do: "Automated a reporting pipeline from the central database.", result: "Reports now generated in minutes." }
  },
  {
    id: "volunteer",
    label: "Volunteer Logistics",
    summary: "Coordinate thousands of people without losing your mind.",
    bullets: ["Self-serve onboarding flows", "Automated shift reminders", "Skills-based matching algorithms"],
    mini_case: { scenario: "Coordinating disaster relief volunteers via messy spreadsheets.", what_we_do: "Built a custom portal for volunteer deployment and tracking.", result: "Streamlined deployment of 500+ volunteers." }
  },
  {
    id: "security",
    label: "Protecting the Vulnerable",
    summary: "Ethical data practices for organizations serving at-risk populations.",
    bullets: ["Strict data anonymization", "Encrypted beneficiary databases", "Zero-trust access policies"],
    mini_case: { scenario: "Refugee support NGO concerned about data breaches.", what_we_do: "Architected a highly secure, segregated database structure.", result: "Passed rigorous third-party security audits." }
  }
];

const integrations = [
  { name: "Payment Processors", notes: "Stripe, PayPal, regional gateways." },
  { name: "Nonprofit CRMs", notes: "Salesforce NPSP, Blackbaud, HubSpot." },
  { name: "Email & Comms", notes: "Mailchimp, Twilio SMS for field alerts." },
  { name: "Analytics", notes: "Google Analytics 4, Metabase dashboards." }
];

const faqs = [
  { q: "Do you offer discounted rates for nonprofits?", a: "We often work with registered 501(c)(3) organizations or international equivalents to find structures that fit grant budgets. Please reach out to discuss your specific situation." },
  { q: "How do you handle offline data collection?", a: "We build Progressive Web Apps (PWAs) using service workers and IndexedDB. Field workers can collect data entirely offline, and the app will automatically sync to the server when a connection is restored." },
  { q: "Can you integrate with Salesforce NPSP?", a: "Yes, we frequently build custom web portals that read from and write to the Salesforce Nonprofit Success Pack (NPSP) via their REST APIs." },
  { q: "How do you ensure accessibility for global audiences?", a: "We adhere strictly to WCAG 2.1 AA standards, implement robust internationalization (i18n) for multi-language support, and optimize assets to ensure fast load times on slow mobile networks." },
  { q: "Who owns the data and the code?", a: "You do. We believe in open data and transparency. We build open-source or fully client-owned repositories to ensure you are never locked into a proprietary vendor system." },
  { q: "Can you help visualize our impact data?", a: "Yes, we integrate tools like D3.js or Recharts to build beautiful, real-time public dashboards that prove your impact to donors." }
];

function GlobalGoalsIndustryPage() {
  const [activeTab, setActiveTab] = useState<string>('donations');

  useEffect(() => {
    document.title = "Nonprofit & Global Goals Tech | WAVELET";
  }, []);

  return (
    <div className="min-h-screen bg-[#F0FDF4] font-sans text-slate-900 antialiased selection:bg-emerald-500 selection:text-white pt-16 overflow-x-hidden">
      <SiteHeader />

      <main>
        {/* 1. HERO SECTION: Earth Green & Ocean Blue */}
        <section className="relative px-4 py-16 sm:py-24 overflow-hidden bg-slate-900 text-white border-b border-emerald-950">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_#059669_0%,_transparent_50%),radial-gradient(circle_at_80%_20%,_#0284c7_0%,_transparent_50%)] opacity-30" />
             <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                   <pattern id="topo" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M0,20 Q10,10 20,20 T40,20" fill="none" stroke="white" strokeWidth="1" opacity="0.5"/>
                      <path d="M0,40 Q10,30 20,40 T40,40" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>
                   </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#topo)" />
             </svg>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 border border-emerald-800 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-emerald-400 mb-6 shadow-sm"
              >
                <Globe2 className="w-4 h-4" />
                Global Impact Tech
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6"
              >
                Technology for <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-sky-400">Global Good.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-emerald-50 font-medium max-w-xl leading-relaxed mb-8"
              >
                We build scalable, offline-capable, and highly secure software for NGOs, nonprofits, and organizations solving the world's hardest problems.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              >
                <a href="/contact?intent=global-goals" className="w-full sm:w-auto text-center rounded-full bg-emerald-600 text-white font-black px-8 py-4 hover:bg-emerald-500 active:scale-95 transition-all text-sm shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                  Partner With Us
                </a>
                <a href="#capabilities" className="w-full sm:w-auto text-center rounded-full bg-transparent border border-emerald-800 text-white font-bold px-8 py-4 hover:bg-slate-800 active:scale-95 transition-all text-sm">
                  View Case Studies
                </a>
              </motion.div>
            </div>

            {/* Programmatic Abstract Impact/Globe Graphic */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-square sm:aspect-video lg:aspect-square max-w-md mx-auto rounded-full bg-slate-800/50 border border-emerald-900/50 shadow-[0_0_50px_rgba(16,185,129,0.1)] flex items-center justify-center overflow-hidden backdrop-blur-sm"
            >
               <svg viewBox="0 0 400 400" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Glowing Core */}
                  <circle cx="200" cy="200" r="140" fill="rgba(16, 185, 129, 0.05)" />
                  <circle cx="200" cy="200" r="140" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" strokeDasharray="10 10" className="animate-[spin_40s_linear_infinite]" />
                  
                  {/* Abstract Interconnected Nodes (Representing Global Community/Impact) */}
                  <g className="animate-[spin_60s_linear_infinite_reverse]" transform="origin-center">
                     <path d="M 200 60 Q 250 150 340 200 Q 250 250 200 340 Q 150 250 60 200 Q 150 150 200 60 Z" stroke="url(#globeGradient)" strokeWidth="3" fill="none" opacity="0.6" />
                     <circle cx="200" cy="60" r="6" className="fill-sky-400" />
                     <circle cx="340" cy="200" r="6" className="fill-emerald-400" />
                     <circle cx="200" cy="340" r="6" className="fill-sky-400" />
                     <circle cx="60" cy="200" r="6" className="fill-emerald-400" />
                  </g>
                  
                  {/* Center Heart / Tech Symbol */}
                  <path d="M 200 230 C 150 180 160 140 200 170 C 240 140 250 180 200 230 Z" className="fill-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse" />

                  <defs>
                     <linearGradient id="globeGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#0ea5e9" />
                     </linearGradient>
                  </defs>
               </svg>
            </motion.div>
          </div>
        </section>

        {/* 2. STATS ROW (Elevation Rule Applied) */}
        <section className="py-8 px-4 max-w-7xl mx-auto mt-16 relative z-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {heroStats.map((stat, i) => (
              <div key={i} className="bg-white border border-emerald-100 rounded-2xl p-6 shadow-md flex items-center gap-6 hover:shadow-lg transition-shadow">
                <div className="text-3xl font-black text-emerald-600 shrink-0">{stat.value}</div>
                <div>
                  <div className="text-sm font-black text-slate-900 uppercase tracking-widest">{stat.label}</div>
                  <div className="text-xs text-slate-500 font-semibold">{stat.helper}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. CAPABILITY MODULES */}
        <section id="capabilities" className="py-12 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">Tech for Social Impact</h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto">Engineering solutions that maximize your resources and prove your outcomes.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {subSubtopics.map((topic, i) => (
              <div key={i} className="bg-white border border-emerald-100 rounded-xl p-4 shadow-sm hover:shadow-md hover:border-emerald-300 transition-all flex flex-col gap-1.5 group">
                 <div className="flex items-start gap-2">
                    <HeartHandshake className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <h3 className="text-xs font-black text-slate-900 leading-tight">{topic.title}</h3>
                 </div>
                 <p className="text-[10px] text-slate-600 font-semibold leading-relaxed pl-6">{topic.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. IMPACT DASHBOARD & DONOR JOURNEY (Style G Flow) */}
        <section className="py-12 px-4 max-w-7xl mx-auto space-y-12">
          {/* Transparency & Impact Dashboard */}
          <div className="bg-slate-900 text-white rounded-[2rem] border border-slate-800 shadow-xl p-8 sm:p-12">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5">
                   <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-black mb-2 block">Prove Your Work</span>
                   <h3 className="text-3xl font-black tracking-tight mb-4">Transparency by Default</h3>
                   <p className="text-slate-300 font-medium leading-relaxed mb-6">
                     Modern donors demand transparency. We build public-facing, real-time dashboards that pull data directly from field operations, proving exactly how and where funds are being deployed.
                   </p>
                   <ul className="space-y-3">
                     {["Real-time Field Data APIs", "Interactive Maps & Charts", "Automated Progress Updates"].map((item, idx) => (
                       <li key={idx} className="flex gap-2.5 items-center text-sm font-bold text-slate-200">
                         <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                         <span>{item}</span>
                       </li>
                     ))}
                   </ul>
                </div>
                {/* Impact Dashboard Mockup SVG */}
                <div className="lg:col-span-7 bg-slate-950 rounded-2xl h-full min-h-[350px] flex justify-center border border-slate-800 p-6 overflow-hidden">
                   <svg viewBox="0 0 500 300" className="w-full h-full" fill="none">
                      {/* Dashboard Wireframe */}
                      <rect x="20" y="20" width="460" height="260" rx="12" className="fill-slate-900 stroke-slate-800 stroke-2" />
                      
                      {/* Header */}
                      <rect x="40" y="40" width="100" height="12" rx="4" className="fill-slate-700" />
                      <rect x="380" y="38" width="60" height="16" rx="8" className="fill-emerald-900" />
                      
                      {/* Map Area */}
                      <rect x="40" y="70" width="260" height="180" rx="8" className="fill-slate-800" />
                      {/* Abstract map elements */}
                      <path d="M 60 120 Q 100 100 150 150 T 250 120" stroke="#334155" strokeWidth="2" fill="none" />
                      <circle cx="120" cy="140" r="15" className="fill-emerald-500/20" />
                      <circle cx="120" cy="140" r="4" className="fill-emerald-400" />
                      <circle cx="220" cy="180" r="25" className="fill-sky-500/20" />
                      <circle cx="220" cy="180" r="4" className="fill-sky-400" />
                      
                      {/* Stats Area right side */}
                      <rect x="320" y="70" width="120" height="80" rx="8" className="fill-slate-800" />
                      <rect x="335" y="85" width="40" height="8" rx="4" className="fill-emerald-400" />
                      <rect x="335" y="105" width="80" height="6" rx="3" className="fill-slate-600" />
                      <rect x="335" y="125" width="60" height="6" rx="3" className="fill-slate-600" />
                      
                      {/* Bar Chart Area */}
                      <rect x="320" y="170" width="120" height="80" rx="8" className="fill-slate-800" />
                      <rect x="340" y="210" width="15" height="30" rx="2" className="fill-emerald-500" />
                      <rect x="365" y="190" width="15" height="50" rx="2" className="fill-sky-500" />
                      <rect x="390" y="220" width="15" height="20" rx="2" className="fill-emerald-300" />
                   </svg>
                </div>
             </div>
          </div>

          {/* Donor Journey Diagram */}
          <div className="bg-white rounded-[2rem] border border-emerald-100 shadow-md p-8 sm:p-12">
             <div className="text-center mb-10">
                <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-black mb-2 block">Optimizing Conversion</span>
                <h3 className="text-3xl font-black text-slate-900 tracking-tight">The Frictionless Donor Journey</h3>
             </div>
             
             <div className="relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 max-w-4xl mx-auto mt-8">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-1 bg-gradient-to-r from-emerald-100 via-sky-200 to-emerald-100 rounded-full" />
                
                {[
                  { phase: "Engagement", desc: "Fast, accessible landing pages explaining the mission.", icon: Target },
                  { phase: "Donation", desc: "1-click Apple/Google Pay integrations.", icon: Heart },
                  { phase: "Retention", desc: "Automated impact updates and CRM syncing.", icon: Users }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3">
                      <div className="w-16 h-16 bg-white border-4 border-[#F0FDF4] shadow-md rounded-full flex items-center justify-center text-emerald-600 mb-4 ring-2 ring-emerald-100 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7" />
                      </div>
                      <h4 className="text-lg font-black text-slate-900 mb-2">{item.phase}</h4>
                      <p className="text-sm font-semibold text-slate-600 max-w-[200px]">{item.desc}</p>
                    </div>
                  )
                })}
             </div>
          </div>
        </section>

        {/* 5. VERTICAL LEFT TABS (Style G Flow adapted) */}
        <section className="py-12 px-4 max-w-7xl mx-auto">
          <div className="bg-white border border-emerald-100 rounded-[2.5rem] shadow-lg p-6 sm:p-10 flex flex-col lg:flex-row gap-10 min-h-[450px]">
            
            {/* Tab Triggers (Left) */}
            <div className="w-full lg:w-1/3 flex flex-col gap-2 border-r-0 lg:border-r border-emerald-50 pr-0 lg:pr-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 px-3">Nonprofit Solutions</span>
              {tabsData.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left px-5 py-4 rounded-2xl font-bold transition-all text-sm border-2 ${
                    activeTab === tab.id 
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-900 shadow-sm' 
                      : 'bg-transparent border-transparent text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content (Right) */}
            <div className="w-full lg:w-2/3 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {tabsData.map(tab => (
                  activeTab === tab.id && (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-3xl font-black text-slate-900 mb-4">{tab.label}</h3>
                      <p className="text-slate-600 font-medium mb-8 leading-relaxed text-lg">{tab.summary}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                           <ul className="space-y-4">
                             {tab.bullets.map((bullet, idx) => (
                               <li key={idx} className="flex items-start gap-3 text-sm font-bold text-slate-800 bg-emerald-50/50 p-3 rounded-lg border border-emerald-100/50">
                                 <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                 <span>{bullet}</span>
                               </li>
                             ))}
                           </ul>
                        </div>
                        
                        <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-md relative overflow-hidden">
                           <div className="absolute top-0 right-0 p-4 opacity-10">
                              <Target className="w-16 h-16 text-emerald-400" />
                           </div>
                           <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-3 block relative z-10">Real World Impact</span>
                           <div className="space-y-3 text-xs font-medium relative z-10">
                             <div><strong className="text-slate-400 block mb-0.5">Scenario:</strong> <span className="text-slate-200">{tab.mini_case.scenario}</span></div>
                             <div><strong className="text-slate-400 block mb-0.5">Execution:</strong> <span className="text-slate-200">{tab.mini_case.what_we_do}</span></div>
                             <div className="text-emerald-300 pt-3 border-t border-slate-700 mt-2"><strong className="text-white">Result:</strong> {tab.mini_case.result}</div>
                           </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>

          </div>
        </section>

        {/* 6. ETHICS & REPORTING STRIP */}
        <section className="py-8 px-4 max-w-7xl mx-auto">
           <div className="bg-emerald-900 rounded-3xl border border-emerald-800 p-8 shadow-xl text-white grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                 <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-6 h-6 text-emerald-400" />
                    <h3 className="text-xl font-black tracking-tight">Ethical Data Practices</h3>
                 </div>
                 <p className="text-sm text-emerald-100 font-medium mb-4 leading-relaxed max-w-md">
                   When working with vulnerable populations, data security is life or death. We enforce strict PII isolation, encryption, and zero-trust architectures.
                 </p>
              </div>
              <div className="md:border-l md:border-emerald-800 md:pl-8">
                 <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-sky-400" />
                    <h3 className="text-xl font-black tracking-tight">Audit-Ready Engineering</h3>
                 </div>
                 <p className="text-sm text-emerald-100 font-medium leading-relaxed">
                   Our databases are architected to cleanly export immutable logs and financial trails required by major institutional grantmakers and government audits.
                 </p>
              </div>
           </div>
        </section>

        {/* 7. FAQ ACCORDION */}
        <section className="py-12 px-4 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <HelpCircle className="w-8 h-8 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Partner FAQ</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-emerald-100 rounded-xl px-5 shadow-sm hover:border-emerald-300 transition-colors overflow-hidden">
                <AccordionTrigger className="text-sm font-bold text-slate-900 hover:text-emerald-700 hover:no-underline py-4 text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 text-sm leading-relaxed pb-4 font-medium">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* 8. FINAL CTA */}
        <section className="py-12 px-4 mb-10">
          <div className="max-w-4xl mx-auto bg-white border border-emerald-100 rounded-[2.5rem] shadow-xl overflow-hidden relative text-center">
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3" />
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-500/10 blur-3xl rounded-full -translate-x-1/3 translate-y-1/3" />
             <div className="p-10 sm:p-16 relative z-10">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">Scale your impact.</h2>
                <p className="text-slate-600 font-medium mb-8 max-w-lg mx-auto text-lg">
                   Partner with an engineering team that cares about your mission as much as the code.
                </p>
                <a href="/contact?intent=global-goals" className="inline-block rounded-full bg-emerald-600 text-white font-black px-10 py-4 hover:bg-emerald-500 transition-all shadow-md text-sm">
                   Discuss Your Mission
                </a>
             </div>
          </div>
        </section>
      </main>

      <EnterpriseFooter />
    </div>
  );
}
