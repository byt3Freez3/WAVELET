import { createFileRoute } from '@tanstack/react-router';
import { SiteHeader } from '@/components/SiteHeader';
import { EnterpriseFooter } from '@/components/EnterpriseFooter';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  HeartPulse, Shield, Activity, Lock, Users,
  FileCheck, ShieldCheck, CheckCircle2,
  HelpCircle, Server, Database, Key
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RevealSection, StaggerGrid, MotionCard, KineticHeading, MagneticCTA } from '@/components/MotionSystem';

export const Route = createFileRoute('/industries/health')({
  component: HealthIndustryPage,
});

const heroStats = [
  { value: "Secure", label: "Architecture", helper: "Built for compliance" },
  { value: "Frictionless", label: "Patient Experience", helper: "Accessible by design" }
];

const subSubtopics = [
  { title: "Patient Intake & Scheduling", description: "Digitized onboarding flows and smart calendar management." },
  { title: "Secure Messaging & Notifications", description: "Encrypted communication channels between staff and patients." },
  { title: "EHR/EMR Integration Readiness", description: "Interfacing with core health records securely via modern standards." },
  { title: "Staff Portals & Access Control", description: "Role-based dashboards for clinical and administrative teams." },
  { title: "Telehealth Enablement", description: "Video integration and virtual waiting room workflows." },
  { title: "Compliance & Audit Logging", description: "Immutable tracking of who accessed what data and when." }
];

const tabsData = [
  {
    id: "privacy",
    label: "Privacy-First Workflows",
    summary: "Digital intake and consent processes that respect patient data.",
    bullets: ["Secure digital forms", "e-Signature integration", "Granular consent tracking"],
    mini_case: { scenario: "Paper intake forms causing data entry errors.", what_we_do: "Built a secure, mobile-friendly pre-arrival intake portal.", result: "Eliminated manual transcription and improved accuracy." }
  },
  {
    id: "identity",
    label: "Identity & Access Control",
    summary: "Ensure only authorized personnel see sensitive health information.",
    bullets: ["Role-Based Access Control (RBAC)", "Multi-Factor Authentication (MFA)", "Session timeouts and security rules"],
    mini_case: { scenario: "Shared logins compromising data integrity.", what_we_do: "Implemented strict RBAC with SSO for clinic staff.", result: "Clear accountability and secure access." }
  },
  {
    id: "audit",
    label: "Audit Trails That Hold Up",
    summary: "Maintain immutable logs of all system activity for compliance.",
    bullets: ["Detailed action logging", "Historical data versioning", "Exportable compliance reports"],
    mini_case: { scenario: "Lack of visibility into record modifications.", what_we_do: "Engineered a centralized, tamper-evident audit logging service.", result: "Full transparency for internal compliance reviews." }
  },
  {
    id: "coordination",
    label: "Care Coordination Support",
    summary: "Tools to help teams communicate about patient care securely.",
    bullets: ["Secure internal messaging", "Task hand-offs and tracking", "Shared patient context views"],
    mini_case: { scenario: "Providers using unsecure channels for quick questions.", what_we_do: "Deployed an encrypted, internal messaging module.", result: "Fast, compliant communication between care teams." }
  },
  {
    id: "intake",
    label: "Intake to Follow-Up",
    summary: "Manage the entire patient lifecycle efficiently.",
    bullets: ["Smart scheduling algorithms", "Automated reminder cadences", "Post-visit instruction delivery"],
    mini_case: { scenario: "High no-show rates impacting clinic revenue.", what_we_do: "Integrated an automated SMS and email reminder system.", result: "Reduced no-shows through timely, actionable alerts." }
  },
  {
    id: "data",
    label: "Secure Data Handling",
    summary: "Infrastructure designed to protect PII and PHI.",
    bullets: ["Encryption at rest and in transit", "Database segmentation", "Secure backup and disaster recovery"],
    mini_case: { scenario: "Legacy database lacking modern encryption standards.", what_we_do: "Migrated data to a secure, managed cloud infrastructure.", result: "Enhanced security posture and disaster resilience." }
  }
];

const integrations = [
  { name: "EHR/EMR Systems", notes: "FHIR, HL7, Epic, Cerner readiness." },
  { name: "Scheduling Engines", notes: "External calendar & provider tools." },
  { name: "Secure Communication", notes: "Twilio/SendGrid tailored for PHI." },
  { name: "Billing & Payments", notes: "Secure gateways for copays." }
];

const faqs = [
  { q: "Are the applications you build HIPAA compliant?", a: "We build software with the technical safeguards required for HIPAA compliance (encryption, audit logs, access controls). Final compliance depends on your organizational policies and deployment environment." },
  { q: "Can you integrate with our existing EMR?", a: "Yes, we specialize in building integration layers. We utilize modern standards like FHIR or HL7 v2, or direct API connections depending on your EMR provider." },
  { q: "How do you handle patient data security?", a: "Data is encrypted both in transit (TLS 1.3) and at rest (AES-256). We enforce least-privilege access and maintain detailed audit logs of all interactions." },
  { q: "Do you build native mobile apps or web apps?", a: "We build both. For patient portals, a responsive web app often lowers the barrier to entry. For staff tools or frequent usage, cross-platform apps are ideal." },
  { q: "How do you ensure the software is accessible?", a: "We follow WCAG guidelines to ensure high contrast, screen-reader compatibility, and large touch targets, crucial for diverse patient populations." },
  { q: "What happens if a patient loses their device?", a: "We implement session timeouts, biometric authentication prompts, and the ability to remotely revoke active sessions from the admin panel." }
];

function HealthIndustryPage() {
  const shouldReduceMotion = useReducedMotion();
  const [lensActive, setLensActive] = useState(false);

  useEffect(() => {
    document.title = "Healthcare Software & App Development | WAVELET";
  }, []);

  return (
    <div className="min-h-screen bg-[#F0FDF4] font-sans text-slate-900 antialiased selection:bg-teal-500 selection:text-white pt-16 overflow-x-hidden">
      <SiteHeader />

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative px-4 py-16 sm:py-24 overflow-hidden bg-[#0F172A] text-white border-b border-slate-800">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,_#0f766e_0%,_transparent_40%),radial-gradient(circle_at_100%_100%,_#0369a1_0%,_transparent_40%)] opacity-30" />
             <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                   <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                      <path d="M25 0 L50 14.4 L50 43.3 L25 57.7 L0 43.3 L0 14.4 Z" fill="none" stroke="white" strokeWidth="1"/>
                   </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#hexagons)" />
             </svg>
          </div>

          <StaggerGrid className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <motion.div className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 border border-slate-700 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-teal-400 mb-6 shadow-sm">
                <HeartPulse className="w-4 h-4" />
                Healthcare Software
              </motion.div>

              <KineticHeading 
                as="h1"
                text={<>Healthcare Software, <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300">Built for Trust.</span></>}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6"
              />

              <motion.p className="text-lg sm:text-xl text-slate-300 font-medium max-w-xl leading-relaxed mb-8">
                We engineer secure patient portals, operational workflows, and EHR integrations that prioritize data privacy and usability.
              </motion.p>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <MagneticCTA disabled={shouldReduceMotion}>
                  <a href="/contact?intent=health" className="block w-full sm:w-auto text-center rounded-full bg-teal-600 text-white font-black px-8 py-4 hover:bg-teal-500 active:scale-95 transition-all text-sm shadow-[0_0_20px_rgba(13,148,136,0.3)]">
                    Discuss Your Project
                  </a>
                </MagneticCTA>
                <a href="#capabilities" className="w-full sm:w-auto text-center rounded-full bg-slate-800 border border-slate-700 text-white font-bold px-8 py-4 hover:bg-slate-700 active:scale-95 transition-all text-sm">
                  View Capabilities
                </a>
              </div>
            </div>

            {/* Programmatic Abstract DNA/Lock Graphic */}
            <motion.div
              style={{ y: shouldReduceMotion ? 0 : 8 }}
              className="relative aspect-square sm:aspect-video lg:aspect-square max-w-md mx-auto rounded-[3rem] bg-slate-900 border border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden"
            >
               <svg viewBox="0 0 400 400" className="w-full h-full text-slate-800" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="200" cy="200" r="140" stroke="rgba(20, 184, 166, 0.1)" strokeWidth="40" />
                  <circle cx="200" cy="200" r="100" stroke="rgba(20, 184, 166, 0.2)" strokeWidth="20" />
                  
                  <g className={shouldReduceMotion ? '' : 'animate-[spin_20s_linear_infinite]'} transform="origin-center">
                    <path d="M 160 100 Q 120 200 160 300 M 240 100 Q 280 200 240 300" stroke="#0ea5e9" strokeWidth="6" strokeLinecap="round" opacity="0.8" />
                    <line x1="160" y1="130" x2="240" y2="130" stroke="#0ea5e9" strokeWidth="4" opacity="0.6" />
                    <line x1="140" y1="200" x2="260" y2="200" stroke="#0ea5e9" strokeWidth="4" opacity="0.6" />
                    <line x1="160" y1="270" x2="240" y2="270" stroke="#0ea5e9" strokeWidth="4" opacity="0.6" />
                  </g>
                  
                  <rect x="160" y="180" width="80" height="60" rx="8" fill="#111827" stroke="#14b8a6" strokeWidth="4" />
                  <path d="M 175 180 V 160 A 25 25 0 0 1 225 160 V 180" fill="none" stroke="#14b8a6" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="200" cy="210" r="8" fill="#14b8a6" />
                  <line x1="200" y1="210" x2="200" y2="225" stroke="#14b8a6" strokeWidth="4" strokeLinecap="round" />
               </svg>
            </motion.div>
          </StaggerGrid>
        </section>

        {/* 2. STATS ROW */}
        <RevealSection direction="up" className="py-8 px-4 max-w-7xl mx-auto mt-16 relative z-20">
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {heroStats.map((stat, i) => (
              <MotionCard key={i} className="bg-white border border-teal-100 rounded-2xl p-6 shadow-lg flex items-center gap-6">
                <div className="text-3xl font-black text-teal-600 shrink-0">{stat.value}</div>
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
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">Healthcare Modules</h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto">We digitize specific operational bottlenecks while maintaining strict HIPAA-ready architecture.</p>
          </div>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {subSubtopics.map((topic, i) => (
              <MotionCard key={i} className="bg-white border border-teal-100 rounded-xl p-5 shadow-sm transition-all flex flex-col gap-2 group">
                 <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                       <Activity className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-black text-slate-900 leading-tight">{topic.title}</h3>
                 </div>
                 <p className="text-xs text-slate-600 font-medium leading-relaxed">{topic.description}</p>
              </MotionCard>
            ))}
          </StaggerGrid>
        </RevealSection>

        {/* 4. TRUST & GOVERNANCE with Privacy Lens Interaction */}
        <RevealSection direction="up" className="py-12 px-4 max-w-7xl mx-auto space-y-12">
          
          {/* Signature Interaction: Privacy Lens Toggle */}
          <div className="flex flex-col items-center justify-center mb-12">
            <div className={`flex items-center gap-3 bg-white border ${lensActive ? 'border-teal-300 shadow-[0_0_20px_rgba(20,184,166,0.2)]' : 'border-teal-100 shadow-sm'} rounded-full px-5 py-2.5 transition-all duration-500`}>
              <ShieldCheck className={`w-5 h-5 transition-colors duration-500 ${lensActive ? 'text-teal-600' : 'text-slate-400'}`} />
              <span className={`text-sm font-bold transition-colors duration-500 ${lensActive ? 'text-teal-900' : 'text-slate-700'}`}>Enable Security Lens</span>
              <button 
                onClick={() => setLensActive(!lensActive)}
                className={`relative w-12 h-6 rounded-full transition-colors duration-300 ml-2 focus:outline-none focus:ring-2 focus:ring-teal-500 ${lensActive ? 'bg-teal-500' : 'bg-slate-200'}`}
                aria-label="Toggle Security Lens"
              >
                <motion.div 
                  className="absolute top-1 left-1 w-4 h-4 rounded-full bg-white shadow-sm"
                  animate={{ x: lensActive ? 24 : 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </button>
            </div>
            <p className={`text-xs mt-3 transition-opacity duration-300 font-medium text-center ${lensActive ? 'text-teal-600 opacity-100' : 'text-slate-500 opacity-0'}`}>
              Viewing privacy-first / compliance-ready patterns.
              <br />
              <span className="text-[10px] opacity-80">* We support compliant workflows but do not certify compliance.</span>
            </p>
          </div>

          {/* Security Architecture */}
          <div className={`bg-white rounded-[2rem] border transition-all duration-700 p-8 sm:p-12 relative overflow-hidden ${lensActive ? 'border-teal-400 shadow-[0_0_30px_rgba(20,184,166,0.15)] ring-1 ring-teal-400' : 'border-teal-100 shadow-md'}`}>
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">
                <div className="relative">
                   <AnimatePresence mode="wait">
                     <motion.div
                       key={lensActive ? 'lens-on' : 'lens-off'}
                       initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 5 }}
                       animate={{ opacity: 1, y: 0 }}
                       exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -5 }}
                       transition={{ duration: 0.3 }}
                     >
                       <span className={`text-[10px] uppercase tracking-widest font-black mb-2 block ${lensActive ? 'text-teal-700' : 'text-teal-600'}`}>
                         {lensActive ? 'Privacy-First Patterns' : 'Security is the Foundation'}
                       </span>
                       <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-4">
                         {lensActive ? 'Compliance-Ready Architecture' : "You Can't Bolt On Security Later"}
                       </h3>
                       <p className="text-slate-600 font-medium leading-relaxed mb-6">
                         {lensActive 
                           ? "Our infrastructure securely isolates sensitive health information. We employ physical and technical safeguards designed to support robust security postures." 
                           : "In healthcare, data protection must be architected from the first line of code. We build systems that protect patient trust while maintaining high performance."}
                       </p>
                       <ul className="space-y-4">
                         {[
                           { 
                             title: lensActive ? "Granular RBAC & IAM Policies" : "Least Privilege Access", 
                             desc: lensActive ? "Identity access management mapping to staff scopes of practice." : "Strict role-based gating." 
                           },
                           { 
                             title: lensActive ? "AES-256 At Rest / TLS 1.3 In Transit" : "End-to-End Encryption", 
                             desc: lensActive ? "FIPS 140-2 validated cryptographic modules for all sensitive data." : "Data protected in transit and at rest." 
                           },
                           { 
                             title: lensActive ? "CFR Part 11 Compliant Audit Trails" : "Comprehensive Auditing", 
                             desc: lensActive ? "Immutable, time-stamped records of all CRUD operations on patient records." : "Immutable logs for all system interactions." 
                           }
                         ].map((item, idx) => (
                           <li key={idx} className={`flex items-start gap-3 border rounded-xl p-4 transition-colors duration-500 ${lensActive ? 'bg-teal-50 border-teal-200' : 'bg-slate-50 border-slate-100'}`}>
                             <Shield className={`w-5 h-5 shrink-0 mt-0.5 transition-colors duration-500 ${lensActive ? 'text-teal-700' : 'text-teal-600'}`} />
                             <div>
                                <div className="font-bold text-slate-900 text-sm">{item.title}</div>
                                <div className="text-xs text-slate-600 font-medium">{item.desc}</div>
                             </div>
                           </li>
                         ))}
                       </ul>
                     </motion.div>
                   </AnimatePresence>
                </div>
                {/* Security Diagram SVG */}
                <div className={`rounded-2xl h-full min-h-[300px] flex items-center justify-center border transition-colors duration-700 relative ${lensActive ? 'bg-teal-900 border-teal-800' : 'bg-slate-50 border-slate-200'}`}>
                   <svg className="w-full h-full p-8" viewBox="0 0 300 300" fill="none">
                      <rect x="50" y="50" width="200" height="200" rx="20" className={`stroke-2 transition-colors duration-700 ${lensActive ? 'stroke-teal-700' : 'stroke-teal-200'}`} strokeDasharray="10 10" />
                      <rect x="75" y="75" width="150" height="150" rx="16" className={`stroke-2 transition-colors duration-700 ${lensActive ? 'stroke-teal-500' : 'stroke-teal-300'}`} />
                      <rect x="100" y="100" width="100" height="100" rx="12" className={`transition-colors duration-700 ${lensActive ? 'fill-teal-400' : 'fill-teal-600'}`} />
                      <path d="M 150 130 L 150 170 M 130 150 L 170 150" stroke={lensActive ? '#0f172a' : 'white'} strokeWidth="8" strokeLinecap="round" className="transition-colors duration-700" />
                      <rect x="135" y="40" width="30" height="20" rx="4" className={`transition-colors duration-700 ${lensActive ? 'fill-teal-300' : 'fill-slate-800'}`} />
                      <rect x="135" y="240" width="30" height="20" rx="4" className={`transition-colors duration-700 ${lensActive ? 'fill-teal-300' : 'fill-slate-800'}`} />
                   </svg>
                </div>
             </div>
          </div>

          {/* Patient Workflows Mockup */}
          <div className="bg-slate-900 rounded-[2rem] shadow-xl p-8 sm:p-12 border border-slate-800 text-white">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="order-2 lg:order-1 bg-slate-950 rounded-2xl h-full min-h-[350px] flex justify-center border border-slate-800 p-6 overflow-hidden">
                   <svg viewBox="0 0 300 400" className="w-full h-full max-w-xs" fill="none">
                      <rect x="10" y="10" width="280" height="380" rx="24" className="fill-slate-100" />
                      <rect x="30" y="40" width="240" height="40" rx="8" className="fill-white drop-shadow-sm" />
                      <circle cx="50" cy="60" r="10" className="fill-teal-500" />
                      <rect x="70" y="55" width="100" height="10" rx="4" className="fill-slate-800" />
                      
                      <rect x="30" y="100" width="240" height="120" rx="16" className="fill-white drop-shadow-sm" />
                      <rect x="50" y="120" width="80" height="12" rx="4" className="fill-slate-800" />
                      <rect x="50" y="140" width="160" height="8" rx="4" className="fill-slate-400" />
                      <rect x="50" y="155" width="140" height="8" rx="4" className="fill-slate-400" />
                      <rect x="50" y="180" width="200" height="24" rx="8" className="fill-teal-50" />
                      
                      <rect x="30" y="240" width="240" height="60" rx="12" className="fill-white drop-shadow-sm" />
                      <circle cx="50" cy="270" r="12" className="fill-sky-100" />
                      <rect x="80" y="260" width="100" height="8" rx="4" className="fill-slate-800" />
                      <rect x="80" y="275" width="60" height="6" rx="3" className="fill-slate-400" />
                   </svg>
                </div>
                <div className="order-1 lg:order-2">
                   <span className="text-[10px] uppercase tracking-widest text-teal-400 font-black mb-2 block">Patient Experience</span>
                   <h3 className="text-3xl font-black text-white tracking-tight mb-4">Balancing Security with Usability</h3>
                   <p className="text-slate-300 font-medium leading-relaxed mb-6">
                     Complex compliance shouldn't mean a terrible user experience. We design interfaces that are accessible for patients of all ages and efficient for healthcare providers.
                   </p>
                   <div className="grid grid-cols-2 gap-4">
                     {[
                       "Accessible UI/UX", "Streamlined Data Entry", 
                       "Clear Error Handling", "Mobile-Optimized"
                     ].map((item, i) => (
                       <div key={i} className="flex gap-2 items-center text-sm font-bold text-teal-100">
                         <CheckCircle2 className="w-4 h-4 text-teal-500" />
                         <span>{item}</span>
                       </div>
                     ))}
                   </div>
                </div>
             </div>
          </div>
        </RevealSection>

        {/* 5. GRID LAYOUT TABS */}
        <RevealSection direction="down" className="py-12 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">Core System Architecture</h2>
          </div>

          <StaggerGrid className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabsData.map(tab => (
              <MotionCard key={tab.id} className="bg-white border border-teal-100 rounded-2xl p-6 shadow-sm flex flex-col h-full">
                 <h3 className="text-xl font-black text-slate-900 mb-2">{tab.label}</h3>
                 <p className="text-sm text-slate-600 font-medium mb-4 leading-relaxed">{tab.summary}</p>
                 
                 <div className="mb-6 flex-grow">
                    <ul className="space-y-2">
                      {tab.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-800">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                 </div>

                 <div className="bg-teal-50/50 border border-teal-100 rounded-xl p-4 mt-auto">
                   <span className="text-[9px] font-black uppercase tracking-widest text-teal-700 mb-1.5 block">Use Case</span>
                   <div className="space-y-1 text-[11px] font-medium">
                     <p><strong className="text-slate-900">Issue:</strong> <span className="text-slate-700">{tab.mini_case.scenario}</span></p>
                     <p className="text-teal-800 font-bold mt-1.5 pt-1.5 border-t border-teal-200">Result: {tab.mini_case.result}</p>
                   </div>
                 </div>
              </MotionCard>
            ))}
          </StaggerGrid>
        </RevealSection>

        {/* 6. INTEGRATION & GOVERNANCE STRIP */}
        <RevealSection className="py-8 px-4 max-w-7xl mx-auto">
           <div className="bg-slate-900 rounded-[2rem] border border-slate-800 p-8 shadow-xl text-white grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                 <div className="flex items-center gap-3 mb-4">
                    <Server className="w-6 h-6 text-teal-500" />
                    <h3 className="text-xl font-black tracking-tight">Integration Ready</h3>
                 </div>
                 <div className="flex flex-wrap gap-3">
                    {integrations.map((int, i) => (
                       <div key={i} className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-xs font-bold text-teal-100">
                          {int.name}
                       </div>
                    ))}
                 </div>
              </div>
              <div className="lg:border-l lg:border-slate-800 lg:pl-8">
                 <div className="flex items-center gap-3 mb-4">
                    <Lock className="w-6 h-6 text-teal-500" />
                    <h3 className="text-xl font-black tracking-tight">Security Baselines</h3>
                 </div>
                 <ul className="space-y-2">
                    <li className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                       HIPAA & PIPEDA architecture support.
                    </li>
                    <li className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                       Strict separation of PII.
                    </li>
                    <li className="text-sm font-semibold text-slate-300 flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                       Mandatory MFA for administrators.
                    </li>
                 </ul>
              </div>
           </div>
        </RevealSection>

        {/* 7. FAQ ACCORDION */}
        <RevealSection direction="up" className="py-12 px-4 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <HelpCircle className="w-8 h-8 text-teal-600 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Technical FAQ</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-teal-100 rounded-xl px-5 shadow-sm hover:border-teal-300 transition-colors overflow-hidden">
                <AccordionTrigger className="text-sm font-bold text-slate-900 hover:text-teal-700 hover:no-underline py-4 text-left">
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
          <div className="max-w-4xl mx-auto bg-white border border-teal-100 rounded-[2.5rem] shadow-xl overflow-hidden relative text-center">
             <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500/10 blur-3xl rounded-full -translate-x-1/3 -translate-y-1/3" />
             <div className="p-10 sm:p-16 relative z-10">
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">Build secure health technology.</h2>
                <p className="text-slate-600 font-medium mb-8 max-w-lg mx-auto text-lg">
                   Partner with engineers who understand the complexities of healthcare data and compliance.
                </p>
                <MagneticCTA disabled={shouldReduceMotion}>
                  <a href="/contact?intent=health" className="inline-block rounded-full bg-teal-600 text-white font-black px-10 py-4 hover:bg-teal-500 transition-all shadow-md text-sm">
                     Start a Secure Project
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
