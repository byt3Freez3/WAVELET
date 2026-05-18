import { createFileRoute } from '@tanstack/react-router';
import { SiteHeader } from '@/components/SiteHeader';
import { EnterpriseFooter } from '@/components/EnterpriseFooter';
import { motion, AnimatePresence, useReducedMotion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  Store, ShoppingCart, Repeat, Link2, 
  Smartphone, BarChart2, Package, CheckCircle2,
  HelpCircle, Zap, ShieldCheck, Database
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RevealSection, StaggerGrid, MotionCard, KineticHeading, MagneticCTA } from '@/components/MotionSystem';

export const Route = createFileRoute('/industries/retail')({
  component: RetailIndustryPage,
});

const heroStats = [
  { value: "Omnichannel", label: "Architecture", helper: "Seamless online to offline" },
  { value: "Real-time", label: "Data Sync", helper: "Accurate stock truth" }
];

const subSubtopics = [
  { title: "POS Integrations", description: "Connecting in-store sales data with online platforms." },
  { title: "Inventory Sync & Stock Accuracy", description: "Real-time ledger updates to prevent overselling." },
  { title: "Omnichannel Customer Experience", description: "Buy online, pick up in-store (BOPIS) workflows." },
  { title: "Order Management (OMS)", description: "Routing orders to the optimal fulfillment location." },
  { title: "Promotions & Pricing Rules", description: "Centralized logic for complex discount combinations." },
  { title: "Returns & Refund Workflows", description: "Streamlining reverse logistics and customer credits." },
  { title: "Customer Support Automation", description: "Order tracking portals and self-service resolution." },
  { title: "Loyalty & CRM", description: "Unified customer profiles tracking both online and offline spend." },
  { title: "Analytics: Conversion & AOV", description: "Custom dashboards for sales performance metrics." },
  { title: "Fraud Signals (basic)", description: "Integrating risk scoring for digital transactions." }
];

const tabsData = [
  {
    id: "omni",
    label: "Omnichannel Flow",
    summary: "Create seamless transitions between digital browsing and physical buying.",
    bullets: ["Click-and-collect (BOPIS) systems", "In-store stock visibility online", "Unified gift cards and credits"],
    mini_case: { scenario: "Customers unable to see local store inventory online.", what_we_do: "Built a real-time inventory API layer connecting the POS to the website.", result: "Increased in-store foot traffic from digital channels." }
  },
  {
    id: "stock",
    label: "Stock Truth Engine",
    summary: "Prevent overselling and out-of-stocks with a centralized inventory ledger.",
    bullets: ["Multi-location inventory tracking", "Safety stock buffers", "Automated sync across marketplaces"],
    mini_case: { scenario: "High cancellation rates due to inaccurate online stock.", what_we_do: "Implemented a centralized event-driven inventory service.", result: "Overselling incidents reduced to near zero." }
  },
  {
    id: "checkout",
    label: "Checkout Speed Wins",
    summary: "Remove friction from the most critical step in the funnel.",
    bullets: ["Optimized mobile checkout UI", "Guest checkout flows", "Integration with modern digital wallets"],
    mini_case: { scenario: "High cart abandonment on mobile devices.", what_we_do: "Redesigned and engineered a single-page React checkout flow.", result: "Mobile conversion rate improved significantly." }
  },
  {
    id: "returns",
    label: "Returns Without Chaos",
    summary: "Turn a logistical headache into a smooth customer experience.",
    bullets: ["Self-service return portals", "Automated shipping label generation", "In-store returns for online orders"],
    mini_case: { scenario: "Customer support overwhelmed by return requests.", what_we_do: "Built an automated self-service return workflow.", result: "Support tickets related to returns dropped by 50%." }
  },
  {
    id: "promo",
    label: "Promo Logic & Pricing",
    summary: "Complex promotional rules managed centrally.",
    bullets: ["BOGO and tiered discount engines", "Customer-segment specific pricing", "Scheduled flash sales"],
    mini_case: { scenario: "Marketing unable to launch complex promotions without dev help.", what_we_do: "Developed a flexible, rule-based pricing engine with an admin UI.", result: "Marketing can launch campaigns independently." }
  },
  {
    id: "crm",
    label: "Customer 360 Signals",
    summary: "Understand purchasing behavior across all touchpoints.",
    bullets: ["Unified order history", "Loyalty tier tracking", "Personalized product recommendations"],
    mini_case: { scenario: "In-store staff had no visibility into a customer's online history.", what_we_do: "Created a clienteling app for store associates.", result: "Improved personalized service and cross-selling." }
  }
];

const integrations = [
  { name: "POS Systems", notes: "Shopify POS, Square, Lightspeed readiness." },
  { name: "Ecommerce Platforms", notes: "Shopify Plus, BigCommerce headless." },
  { name: "Order Management (OMS)", notes: "Routing logic & fulfillment connections." },
  { name: "Payment Gateways", notes: "Stripe, Adyen, Braintree integrations." }
];

const faqs = [
  { q: "Do you build on platforms like Shopify?", a: "Yes, we frequently build custom storefronts (headless) or complex private apps that extend the functionality of platforms like Shopify Plus or BigCommerce." },
  { q: "How do you handle inventory sync between in-store and online?", a: "We build event-driven middleware that listens for sales on both channels and updates a central inventory ledger in real-time." },
  { q: "Can you build a custom loyalty program?", a: "Yes, we can engineer custom point systems, tier logic, and redemption workflows tailored exactly to your brand's rules." },
  { q: "How do you ensure the site doesn't crash during a flash sale?", a: "We utilize elastic cloud architecture, aggressive CDN caching, and database read-replicas to handle sudden, massive traffic spikes." },
  { q: "Do you develop consumer mobile apps for retail?", a: "Yes, we build cross-platform apps (React Native/Flutter) that provide a premium shopping experience and utilize push notifications for retention." },
  { q: "What is headless commerce?", a: "It's separating the frontend website from the backend database. It allows us to build incredibly fast, custom user interfaces while relying on robust platforms for checkout and data." }
];

function OmnichannelPulseCard({ kpi, shouldReduceMotion }: any) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(shouldReduceMotion || typeof kpi.value !== 'number' ? kpi.value : 0);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (isInView && !shouldReduceMotion && typeof kpi.value === 'number') {
      const end = kpi.value;
      const duration = 1000;
      const startTime = performance.now();
      
      const step = (timestamp: number) => {
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        setDisplayValue(end * easeProgress);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          setDisplayValue(end);
        }
      };
      requestAnimationFrame(step);
    }
  }, [isInView, shouldReduceMotion, kpi.value]);

  return (
    <motion.button 
      ref={ref}
      className="relative flex flex-col gap-1 p-4 bg-slate-800/50 border border-slate-700 rounded-xl text-left focus:outline-none focus:ring-2 focus:ring-fuchsia-500 group"
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      onClick={() => setShowTooltip(!showTooltip)}
      onBlur={() => setShowTooltip(false)}
    >
      <div className="text-xl sm:text-2xl font-black text-fuchsia-400">
        {typeof displayValue === 'number' ? (displayValue % 1 === 0 ? Math.round(displayValue) : displayValue.toFixed(1)) : displayValue}{kpi.suffix}
      </div>
      <span className="text-xs font-bold text-slate-100 flex items-center gap-1">
        {kpi.label} <HelpCircle className="w-3 h-3 text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity" />
      </span>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full left-0 mb-2 w-48 p-2.5 bg-slate-950 text-white text-[11px] font-semibold border border-slate-700 rounded-lg shadow-xl z-20"
          >
            {kpi.tooltip}
            <div className="absolute top-full left-4 w-2 h-2 bg-slate-950 border-b border-r border-slate-700 transform rotate-45 -translate-y-1/2" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}

function OmnichannelPulse({ shouldReduceMotion, kpis }: { shouldReduceMotion: boolean, kpis?: any[] }) {
  const defaultKpis = [
    { value: "SLO-Ready", suffix: "", label: "Architecture", tooltip: "Monitoring and reliability built-in." },
    { value: "Optimized", suffix: "", label: "Latency", tooltip: "Optimization targets vary by stack and region." },
    { value: 2, suffix: "M+", label: "Syncs/Day", tooltip: "Inventory updates processed seamlessly." },
    { value: 10, suffix: "x", label: "Peak Scaling", tooltip: "Auto-scaling infrastructure for flash sales." }
  ];

  const displayKpis = kpis || defaultKpis;

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {displayKpis.map((kpi, i) => (
        <OmnichannelPulseCard key={i} kpi={kpi} shouldReduceMotion={shouldReduceMotion} />
      ))}
    </div>
  );
}

function RetailIndustryPage() {
  const [activeTab, setActiveTab] = useState<string>('omni');
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    document.title = "Retail Tech & Ecommerce Development | WAVELET";
  }, []);

  return (
    <div className="min-h-screen bg-[#FAF5FF] font-sans text-slate-900 antialiased selection:bg-fuchsia-500 selection:text-white pt-16 overflow-x-hidden">
      <SiteHeader />

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative px-4 py-16 sm:py-24 overflow-hidden bg-slate-950 text-white border-b border-fuchsia-950">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,_#d946ef_0%,_transparent_40%),radial-gradient(circle_at_0%_100%,_#8b5cf6_0%,_transparent_40%)] opacity-30" />
             <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                   <pattern id="diagonal-stripes" width="40" height="40" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                      <line x1="0" y1="0" x2="0" y2="40" stroke="white" strokeWidth="2" />
                   </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
             </svg>
          </div>

          <StaggerGrid className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <motion.div className="inline-flex items-center gap-2 rounded-full bg-slate-900/80 border border-fuchsia-800 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-fuchsia-400 mb-6 shadow-sm">
                <Store className="w-4 h-4" />
                Retail Tech Solutions
              </motion.div>

              <KineticHeading 
                as="h1"
                text={<>Unify the <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">Retail Experience.</span></>}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6"
              />

              <motion.p className="text-lg sm:text-xl text-fuchsia-50 font-medium max-w-xl leading-relaxed mb-8">
                We build the digital infrastructure that connects your inventory, operations, and customers across every channel.
              </motion.p>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <MagneticCTA disabled={shouldReduceMotion}>
                  <a href="/contact?intent=retail" className="block w-full sm:w-auto text-center rounded-full bg-fuchsia-600 text-white font-black px-8 py-4 hover:bg-fuchsia-500 active:scale-95 transition-all text-sm shadow-[0_0_20px_rgba(217,70,239,0.4)]">
                    Discuss Retail Solutions
                  </a>
                </MagneticCTA>
                <a href="#capabilities" className="w-full sm:w-auto text-center rounded-full bg-slate-900 border border-slate-700 text-white font-bold px-8 py-4 hover:bg-slate-800 active:scale-95 transition-all text-sm">
                  Explore Features
                </a>
              </div>
            </div>

            {/* Programmatic Abstract Omnichannel Logistics Graphic */}
            <motion.div
              style={{ y: shouldReduceMotion ? 0 : 8 }}
              className="relative aspect-square sm:aspect-video lg:aspect-square max-w-md mx-auto rounded-[3rem] bg-slate-900 border border-fuchsia-900 shadow-2xl flex items-center justify-center overflow-hidden"
            >
               <svg viewBox="0 0 400 400" className="w-full h-full text-slate-800" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 100 100 Q 200 150 200 200" stroke="url(#magentaGradient)" strokeWidth="4" fill="none" className={shouldReduceMotion ? '' : 'animate-pulse'} />
                  <path d="M 300 100 Q 200 150 200 200" stroke="url(#purpleGradient)" strokeWidth="4" fill="none" className={shouldReduceMotion ? '' : 'animate-pulse'} style={{ animationDelay: '0.5s' }} />
                  <path d="M 200 300 L 200 200" stroke="url(#magentaGradient)" strokeWidth="4" fill="none" className={shouldReduceMotion ? '' : 'animate-pulse'} style={{ animationDelay: '1s' }} />
                  
                  <circle cx="200" cy="200" r="40" className="fill-slate-950 stroke-fuchsia-500 stroke-2" />
                  <circle cx="200" cy="200" r="20" className={`fill-purple-600 ${shouldReduceMotion ? '' : 'animate-pulse'}`} />
                  
                  <rect x="70" y="70" width="60" height="60" rx="12" className="fill-slate-950 stroke-fuchsia-400 stroke-2" />
                  <rect x="270" y="70" width="60" height="60" rx="12" className="fill-slate-950 stroke-purple-400 stroke-2" />
                  <rect x="170" y="270" width="60" height="60" rx="12" className="fill-slate-950 stroke-fuchsia-400 stroke-2" />
                  
                  <rect x="85" y="85" width="30" height="15" rx="4" className="fill-fuchsia-500/50" />
                  <circle cx="300" cy="100" r="10" className="fill-purple-500/50" />
                  <rect x="190" y="290" width="20" height="20" rx="4" className="fill-fuchsia-500/50" />
                  
                  <defs>
                     <linearGradient id="magentaGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#d946ef" />
                        <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
                     </linearGradient>
                     <linearGradient id="purpleGradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
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
              <MotionCard key={i} className="bg-white border border-fuchsia-100 rounded-2xl p-6 shadow-lg flex items-center gap-6">
                <div className="text-3xl font-black text-fuchsia-600 shrink-0">{stat.value}</div>
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
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">Retail & Ecommerce Architecture</h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto">Connecting legacy point-of-sale systems with modern, blazing-fast digital storefronts.</p>
          </div>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {subSubtopics.map((topic, i) => (
              <MotionCard key={i} className="bg-white border border-fuchsia-100 rounded-xl p-4 shadow-sm transition-all flex flex-col gap-1.5 group">
                 <div className="flex items-start gap-2">
                    <ShoppingCart className="w-4 h-4 text-fuchsia-500 shrink-0 mt-0.5" />
                    <h3 className="text-xs font-black text-slate-900 leading-tight">{topic.title}</h3>
                 </div>
                 <p className="text-[10px] text-slate-600 font-semibold leading-relaxed pl-6">{topic.description}</p>
              </MotionCard>
            ))}
          </StaggerGrid>
        </RevealSection>

        {/* 4. OMNICHANNEL FUNNEL & PERFORMANCE METRICS */}
        <RevealSection direction="up" className="py-12 px-4 max-w-7xl mx-auto space-y-12">
          
          {/* Omnichannel Diagram */}
          <div className="bg-white rounded-[2rem] border border-fuchsia-100 shadow-md p-8 sm:p-12">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5">
                   <span className="text-[10px] uppercase tracking-widest text-fuchsia-600 font-black mb-2 block">Breaking Down Silos</span>
                   <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-4">Customers don't see channels. They see a brand.</h3>
                   <p className="text-slate-600 font-medium leading-relaxed mb-6">
                     We architect systems that share data fluidly between your ecommerce front-end, your physical in-store POS, and your warehouse fulfillment center.
                   </p>
                   <ul className="space-y-4">
                     {["Unified Customer Profile", "Single Source of Inventory Truth", "Centralized Order Logic"].map((item, idx) => (
                       <li key={idx} className="flex items-center gap-3 bg-fuchsia-50 border border-fuchsia-100 rounded-xl p-3">
                         <div className="w-8 h-8 rounded-full bg-white border border-fuchsia-200 flex items-center justify-center text-fuchsia-600 shadow-sm shrink-0">
                            <Repeat className="w-4 h-4" />
                         </div>
                         <div className="font-bold text-slate-800 text-sm">{item}</div>
                       </li>
                     ))}
                   </ul>
                </div>
                {/* Infographic SVG */}
                <div className="lg:col-span-7 bg-slate-50 rounded-2xl h-full min-h-[300px] flex items-center justify-center relative overflow-hidden border border-slate-200 p-6">
                   <svg viewBox="0 0 500 300" className="w-full h-full text-slate-800" fill="none">
                      <rect x="200" y="100" width="100" height="100" rx="16" className="fill-fuchsia-600" />
                      <text x="250" y="155" fill="white" fontSize="12" fontWeight="bold" textAnchor="middle">Unified Data</text>
                      
                      <path d="M 120 70 Q 250 70 250 100" stroke="#d946ef" strokeWidth="3" strokeDasharray="5 5" fill="none" />
                      <path d="M 120 150 L 200 150" stroke="#d946ef" strokeWidth="3" strokeDasharray="5 5" fill="none" />
                      <path d="M 120 230 Q 250 230 250 200" stroke="#d946ef" strokeWidth="3" strokeDasharray="5 5" fill="none" />
                      
                      <rect x="40" y="40" width="80" height="60" rx="8" className="fill-white stroke-slate-300 stroke-2" />
                      <text x="80" y="75" fill="#1e293b" fontSize="10" fontWeight="bold" textAnchor="middle">Mobile App</text>
                      <rect x="40" y="120" width="80" height="60" rx="8" className="fill-white stroke-slate-300 stroke-2" />
                      <text x="80" y="155" fill="#1e293b" fontSize="10" fontWeight="bold" textAnchor="middle">Web Store</text>
                      <rect x="40" y="200" width="80" height="60" rx="8" className="fill-white stroke-slate-300 stroke-2" />
                      <text x="80" y="235" fill="#1e293b" fontSize="10" fontWeight="bold" textAnchor="middle">Physical POS</text>
                      
                      <path d="M 300 150 L 380 150" stroke="#8b5cf6" strokeWidth="4" fill="none" />
                      <polygon points="380,145 390,150 380,155" fill="#8b5cf6" />
                      
                      <rect x="400" y="120" width="80" height="60" rx="8" className="fill-purple-100 stroke-purple-300 stroke-2" />
                      <text x="440" y="155" fill="#6b21a8" fontSize="10" fontWeight="bold" textAnchor="middle">Fulfillment</text>
                   </svg>
                </div>
             </div>
          </div>

          {/* Performance & Speed Metrics with Omnichannel Pulse Interaction */}
          <div className="bg-slate-900 rounded-[2rem] border border-slate-800 shadow-xl p-8 sm:p-12 text-white">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="order-2 lg:order-1 bg-slate-950 rounded-2xl h-full min-h-[300px] flex items-center justify-center relative overflow-hidden border border-slate-800">
                   <svg viewBox="0 0 400 300" className="w-full h-full" fill="none">
                      <line x1="0" y1="100" x2="350" y2="100" stroke="url(#streak1)" strokeWidth="4" strokeLinecap="round" />
                      <line x1="50" y1="150" x2="400" y2="150" stroke="url(#streak2)" strokeWidth="8" strokeLinecap="round" />
                      <line x1="20" y1="200" x2="300" y2="200" stroke="url(#streak3)" strokeWidth="6" strokeLinecap="round" />
                      
                      <rect x="150" y="80" width="100" height="140" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(217,70,239,0.5)" strokeWidth="2" className="backdrop-blur-md transform skew-x-[-15deg]" />
                      <rect x="165" y="100" width="70" height="10" rx="4" fill="rgba(255,255,255,0.8)" className="transform skew-x-[-15deg]" />
                      <rect x="165" y="120" width="40" height="6" rx="3" fill="rgba(217,70,239,0.8)" className="transform skew-x-[-15deg]" />
                      <rect x="165" y="180" width="70" height="20" rx="4" fill="rgba(139,92,246,0.8)" className="transform skew-x-[-15deg]" />

                      <defs>
                         <linearGradient id="streak1" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#d946ef" stopOpacity="0"/>
                            <stop offset="100%" stopColor="#d946ef" />
                         </linearGradient>
                         <linearGradient id="streak2" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0"/>
                            <stop offset="100%" stopColor="#8b5cf6" />
                         </linearGradient>
                         <linearGradient id="streak3" x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0%" stopColor="#f472b6" stopOpacity="0"/>
                            <stop offset="100%" stopColor="#f472b6" />
                         </linearGradient>
                      </defs>
                   </svg>
                </div>
                <div className="order-1 lg:order-2">
                   <span className="text-[10px] uppercase tracking-widest text-fuchsia-400 font-black mb-2 block">Core Performance</span>
                   <h3 className="text-3xl font-black text-white tracking-tight mb-4">Speed Equals Conversion</h3>
                   <p className="text-slate-300 font-medium leading-relaxed mb-2">
                     Every millisecond counts in digital retail. We engineer highly optimized front-ends and resilient backends specifically designed to handle peak Black Friday traffic without breaking a sweat.
                   </p>
                   
                   {/* Signature Interaction */}
                   <OmnichannelPulse shouldReduceMotion={shouldReduceMotion ?? false} />
                </div>
             </div>
          </div>
        </RevealSection>

        {/* 5. VERTICAL RIGHT TABS */}
        <RevealSection direction="down" className="py-12 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Retail Commerce Modules</h2>
          </div>

          <div className="bg-white border border-fuchsia-100 rounded-[2rem] shadow-lg p-6 sm:p-8 flex flex-col lg:flex-row gap-8 min-h-[450px]">
            <div className="order-2 lg:order-1 w-full lg:w-2/3 bg-fuchsia-50 border border-fuchsia-100 rounded-2xl p-6 sm:p-10 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {tabsData.map(tab => (
                  activeTab === tab.id && (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="text-3xl font-black text-slate-900 mb-3">{tab.label}</h3>
                      <p className="text-slate-600 font-medium mb-8 leading-relaxed max-w-lg text-lg">{tab.summary}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-fuchsia-500 mb-3 block">Key Mechanics</span>
                          <ul className="space-y-3">
                            {tab.bullets.map((bullet, idx) => (
                              <li key={idx} className="flex items-start gap-2.5 text-sm font-bold text-slate-800">
                                <CheckCircle2 className="w-4 h-4 text-fuchsia-600 shrink-0 mt-0.5" />
                                <span>{bullet}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-white border border-fuchsia-200 rounded-xl p-5 shadow-sm">
                          <span className="text-[10px] font-black uppercase tracking-widest text-purple-600 mb-2 block">Resolution Case Study</span>
                          <div className="space-y-3 text-xs font-medium">
                            <div className="bg-slate-50 p-2 rounded"><strong className="text-slate-900 block">Scenario:</strong> <span className="text-slate-600">{tab.mini_case.scenario}</span></div>
                            <div className="bg-slate-50 p-2 rounded"><strong className="text-slate-900 block">Action:</strong> <span className="text-slate-600">{tab.mini_case.what_we_do}</span></div>
                            <div className="bg-purple-100 text-purple-900 p-2 rounded border border-purple-200"><strong>Result:</strong> {tab.mini_case.result}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>

            <div className="order-1 lg:order-2 w-full lg:w-1/3 flex flex-col gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2 px-2">Select a capability</span>
              {tabsData.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-right px-5 py-3.5 rounded-xl font-bold transition-all border focus:outline-none focus:ring-2 focus:ring-fuchsia-500 ${
                    activeTab === tab.id 
                      ? 'bg-slate-900 border-slate-800 text-white shadow-md' 
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-fuchsia-50 hover:border-fuchsia-300'
                  }`}
                >
                  <span className="text-sm">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* 6. INVENTORY LOGIC & INTEGRATIONS STRIP */}
        <RevealSection className="py-8 px-4 max-w-7xl mx-auto">
           <div className="bg-white rounded-3xl border border-fuchsia-200 p-8 shadow-md grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-fuchsia-100 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
              <div className="relative z-10">
                 <div className="flex items-center gap-3 mb-4">
                    <Database className="w-6 h-6 text-fuchsia-600" />
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">System Integrations</h3>
                 </div>
                 <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {integrations.map((int, i) => (
                       <MotionCard key={i} className="bg-slate-50 border border-slate-200 rounded-lg p-3 text-left">
                          <div className="text-xs font-black text-slate-900 mb-1">{int.name}</div>
                          <div className="text-[10px] font-semibold text-slate-500">{int.notes}</div>
                       </MotionCard>
                    ))}
                 </StaggerGrid>
              </div>
              <div className="md:border-l md:border-slate-200 md:pl-8 relative z-10">
                 <div className="flex items-center gap-3 mb-4">
                    <ShieldCheck className="w-6 h-6 text-fuchsia-600" />
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">Security & Scale</h3>
                 </div>
                 <p className="text-sm text-slate-600 font-medium mb-4 leading-relaxed">
                   Protecting customer data and ensuring zero downtime during major retail events is non-negotiable.
                 </p>
                 <ul className="space-y-2">
                    <li className="text-xs font-bold text-slate-800 flex items-center gap-2">
                       <CheckCircle2 className="w-3.5 h-3.5 text-purple-500" /> PCI compliance readiness.
                    </li>
                    <li className="text-xs font-bold text-slate-800 flex items-center gap-2">
                       <CheckCircle2 className="w-3.5 h-3.5 text-purple-500" /> Bot attack mitigation.
                    </li>
                    <li className="text-xs font-bold text-slate-800 flex items-center gap-2">
                       <CheckCircle2 className="w-3.5 h-3.5 text-purple-500" /> PII data encryption.
                    </li>
                 </ul>
              </div>
           </div>
        </RevealSection>

        {/* 7. FAQ ACCORDION */}
        <RevealSection direction="up" className="py-12 px-4 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <HelpCircle className="w-8 h-8 text-fuchsia-400 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Commerce FAQs</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-fuchsia-100 rounded-xl px-5 shadow-sm hover:border-fuchsia-300 transition-colors overflow-hidden">
                <AccordionTrigger className="text-sm font-bold text-slate-900 hover:text-fuchsia-600 hover:no-underline py-4 text-left">
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
          <div className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-[2.5rem] shadow-xl overflow-hidden relative text-center">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,_#d946ef_0%,_transparent_60%)] opacity-20" />
             <div className="p-10 sm:p-16 relative z-10">
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">Scale your retail operations.</h2>
                <p className="text-fuchsia-100 font-medium mb-8 max-w-lg mx-auto text-lg">
                   Connect your systems, speed up your storefront, and deliver a seamless shopping experience.
                </p>
                <MagneticCTA disabled={shouldReduceMotion}>
                  <a href="/contact?intent=retail" className="inline-block rounded-full bg-fuchsia-600 text-white font-black px-10 py-4 hover:bg-fuchsia-500 transition-all shadow-md text-sm">
                     Plan Your Architecture
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
