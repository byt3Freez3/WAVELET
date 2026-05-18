import { createFileRoute } from '@tanstack/react-router';
import { SiteHeader } from '@/components/SiteHeader';
import { EnterpriseFooter } from '@/components/EnterpriseFooter';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  GraduationCap, BookOpen, Users, Bell, Accessibility, 
  Fingerprint, LineChart, FileText, CheckCircle2,
  HelpCircle, MonitorPlay, FileArchive, Link2
} from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RevealSection, StaggerGrid, MotionCard, KineticHeading, MagneticCTA } from '@/components/MotionSystem';

export const Route = createFileRoute('/industries/education')({
  component: EducationIndustryPage,
});

const heroStats = [
  { value: "Accessible", label: "Interfaces", helper: "Built for all learners" },
  { value: "Integrated", label: "Ecosystems", helper: "Connecting disparate tools" }
];

const subSubtopics = [
  { title: "LMS Integration & Portals", description: "Custom front-ends connected to core Learning Management Systems." },
  { title: "Student Enrollment Workflows", description: "Digitizing applications, document uploads, and registration." },
  { title: "Staff/Admin Dashboards", description: "Centralized hubs for managing cohorts and curriculum." },
  { title: "Communication Systems", description: "Automated email and SMS alerts for deadlines and updates." },
  { title: "Accessibility & Inclusive UX", description: "Ensuring platforms meet strict WCAG compliance standards." },
  { title: "Identity Management (SSO)", description: "Seamless login across multiple campus or platform tools." },
  { title: "Data Privacy & Consent", description: "FERPA/COPPA compliant data handling and permission flows." },
  { title: "Learning Analytics", description: "Tracking engagement, completion rates, and outcomes." },
  { title: "Content Management & Websites", description: "Scalable marketing and informational sites for institutions." },
  { title: "Support Ticketing", description: "Streamlined IT helpdesk flows for students and staff." }
];

const tabsData = [
  {
    id: "student",
    label: "Student Experience Layer",
    summary: "Custom portals that aggregate everything a student needs.",
    bullets: ["Unified dashboard views", "Course material access", "Grade and progress tracking"],
    mini_case: { scenario: "Students navigating 4 different systems to find assignments.", what_we_do: "Built a unified React front-end pulling data via API.", result: "Reduced student support tickets regarding navigation." }
  },
  {
    id: "admin",
    label: "Admin Workflow Automation",
    summary: "Digitize paper-heavy institutional processes.",
    bullets: ["Digital application routing", "Automated document verification", "Cohort management tools"],
    mini_case: { scenario: "Manual data entry for hundreds of new enrollments.", what_we_do: "Created a digital enrollment flow with automated CRM sync.", result: "Saved hundreds of administrative hours per semester." }
  },
  {
    id: "accessible",
    label: "Accessible by Default",
    summary: "Software engineered for all abilities.",
    bullets: ["WCAG compliance checks", "Keyboard navigation", "Screen-reader optimized structure"],
    mini_case: { scenario: "Legacy platform failing institutional accessibility audits.", what_we_do: "Rebuilt the UI layer with strict semantic HTML and ARIA standards.", result: "Achieved full compliance and improved usability for everyone." }
  },
  {
    id: "sso",
    label: "SSO & Identity for Schools",
    summary: "One login to access the entire educational ecosystem.",
    bullets: ["SAML/OAuth integrations", "Active Directory syncing", "Role-based provisioning"],
    mini_case: { scenario: "Password fatigue causing high login failure rates.", what_we_do: "Implemented a centralized SSO gateway.", result: "Frictionless access to all authorized applications." }
  },
  {
    id: "insights",
    label: "Learning Insights",
    summary: "Data to identify at-risk students and improve curriculum.",
    bullets: ["Engagement tracking", "Assessment analytics", "Custom reporting dashboards"],
    mini_case: { scenario: "No visibility into video lecture completion rates.", what_we_do: "Integrated custom event tracking into the media player.", result: "Educators can now see exactly where students drop off." }
  },
  {
    id: "communication",
    label: "Communication at Scale",
    summary: "Ensure critical updates reach the right cohorts.",
    bullets: ["Segmented email/SMS broadcasting", "In-app announcement banners", "Automated deadline nudges"],
    mini_case: { scenario: "Important announcements buried in cluttered email inboxes.", what_we_do: "Built an in-portal notification center with SMS fallbacks.", result: "Increased visibility of critical administrative updates." }
  }
];

const integrations = [
  { name: "LMS Platforms", notes: "Canvas, Blackboard, Moodle integrations." },
  { name: "Student Info (SIS)", notes: "Syncing roster and grading data." },
  { name: "Identity Providers", notes: "Okta, Azure AD, SAML integrations." },
  { name: "Video Conferencing", notes: "Zoom, WebRTC for virtual classrooms." }
];

const faqs = [
  { q: "Do you build custom Learning Management Systems (LMS)?", a: "We can build lightweight custom learning platforms, but we often recommend building custom experiences on top of robust existing LMS APIs (like Canvas) to save time and budget." },
  { q: "How do you ensure the platform is accessible?", a: "Accessibility is built into our engineering process. We use semantic HTML, enforce color contrast ratios, and test with screen readers to meet WCAG standards." },
  { q: "Can you integrate with our university's Single Sign-On?", a: "Yes, we routinely integrate with SAML, OAuth, and institutional identity providers to ensure seamless and secure logins." },
  { q: "How do you handle spikes in traffic during registration or exams?", a: "We use auto-scaling cloud infrastructure and database optimization to ensure the system remains responsive even under heavy concurrent load." },
  { q: "Do you build mobile apps for students?", a: "Yes, we build cross-platform mobile apps that allow students to check grades, receive push notifications, and access materials on the go." },
  { q: "How is student data protected?", a: "We encrypt data at rest and in transit, and architect the database to support strict privacy compliance (like FERPA)." }
];

function EducationIndustryPage() {
  const [activeTab, setActiveTab] = useState<string>('student');
  const [a11yMode, setA11yMode] = useState<'default'|'high-contrast'|'large-text'>('default');
  const shouldReduceMotion = useReducedMotion();

  const isHC = a11yMode === 'high-contrast';
  const isLT = a11yMode === 'large-text';

  useEffect(() => {
    document.title = "EdTech & Education Software Solutions | WAVELET";
  }, []);

  return (
    <div className="min-h-screen bg-[#F0FDFD] font-sans text-slate-900 antialiased selection:bg-cyan-500 selection:text-white pt-16 overflow-x-hidden">
      <SiteHeader />

      <main>
        {/* 1. HERO SECTION */}
        <section className="relative px-4 py-16 sm:py-24 overflow-hidden bg-slate-900 text-white border-b border-slate-800">
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,_#06b6d4_0%,_transparent_40%),radial-gradient(circle_at_80%_20%,_#eab308_0%,_transparent_40%)] opacity-20" />
             <svg className="absolute inset-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                   <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.5" fill="white" />
                   </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots)" />
             </svg>
          </div>

          <StaggerGrid className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            <div>
              <motion.div className="inline-flex items-center gap-2 rounded-full bg-slate-800/80 border border-slate-700 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-cyan-400 mb-6 shadow-sm">
                <GraduationCap className="w-4 h-4" />
                EdTech & Institutional Software
              </motion.div>

              <KineticHeading 
                as="h1"
                text={<>Technology that <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-yellow-200">Enables Learning.</span></>}
                className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] mb-6"
              />

              <motion.p className="text-lg sm:text-xl text-slate-300 font-medium max-w-xl leading-relaxed mb-8">
                We build accessible student experiences and automated administrative workflows that let educators focus on education.
              </motion.p>

              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <MagneticCTA disabled={shouldReduceMotion}>
                  <a href="/contact?intent=education" className="block w-full sm:w-auto text-center rounded-full bg-cyan-600 text-white font-black px-8 py-4 hover:bg-cyan-500 active:scale-95 transition-all text-sm shadow-[0_0_20px_rgba(8,145,178,0.3)]">
                    Discuss Your Platform
                  </a>
                </MagneticCTA>
                <a href="#capabilities" className="w-full sm:w-auto text-center rounded-full bg-transparent border border-slate-600 text-white font-bold px-8 py-4 hover:bg-slate-800 active:scale-95 transition-all text-sm">
                  See Capabilities
                </a>
              </div>
            </div>

            {/* Programmatic Abstract Digital Learning Graphic */}
            <motion.div
              style={{ y: shouldReduceMotion ? 0 : 8 }}
              className="relative aspect-video rounded-3xl bg-slate-800/50 border border-cyan-900/50 shadow-2xl flex items-center justify-center overflow-hidden backdrop-blur-md"
            >
               <svg viewBox="0 0 400 300" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g className={shouldReduceMotion ? '' : 'animate-[translateY_5s_ease-in-out_infinite_alternate]'}>
                     <rect x="40" y="40" width="200" height="120" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(6,182,212,0.3)" strokeWidth="2" className="backdrop-blur-md" />
                     <rect x="50" y="50" width="180" height="80" rx="8" fill="rgba(0,0,0,0.3)" />
                     <circle cx="140" cy="90" r="15" fill="rgba(6,182,212,0.8)" />
                     <polygon points="135,83 148,90 135,97" fill="white" />
                     <rect x="50" y="140" width="180" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
                     <rect x="50" y="140" width="120" height="6" rx="3" fill="rgba(234,179,8,0.8)" />
                  </g>
                  
                  <g className={shouldReduceMotion ? '' : 'animate-[translateY_6s_ease-in-out_infinite_alternate-reverse]'}>
                     <rect x="220" y="120" width="140" height="150" rx="12" fill="rgba(255,255,255,0.05)" stroke="rgba(234,179,8,0.3)" strokeWidth="2" className="backdrop-blur-md" />
                     <rect x="235" y="140" width="80" height="20" rx="10" fill="rgba(6,182,212,0.2)" />
                     <rect x="270" y="170" width="70" height="20" rx="10" fill="rgba(234,179,8,0.2)" />
                     <rect x="235" y="200" width="100" height="20" rx="10" fill="rgba(6,182,212,0.2)" />
                     <rect x="235" y="240" width="110" height="16" rx="8" fill="rgba(255,255,255,0.1)" />
                  </g>
                  
                  <circle cx="340" cy="60" r="20" fill="rgba(234,179,8,0.4)" filter="blur(10px)" />
                  <circle cx="60" cy="240" r="30" fill="rgba(6,182,212,0.3)" filter="blur(15px)" />
               </svg>
            </motion.div>
          </StaggerGrid>
        </section>

        {/* 2. STATS ROW */}
        <RevealSection direction="up" className="py-8 px-4 max-w-7xl mx-auto mt-16 relative z-20">
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {heroStats.map((stat, i) => (
              <MotionCard key={i} className="bg-white border border-cyan-100 rounded-2xl p-6 shadow-md flex items-center gap-6">
                <div className="text-3xl font-black text-cyan-600 shrink-0">{stat.value}</div>
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
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mb-3">Core Educational Modules</h2>
            <p className="text-slate-600 font-medium max-w-2xl mx-auto">Scalable software components designed to unburden administration and enrich the student journey.</p>
          </div>
          <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {subSubtopics.map((topic, i) => (
              <MotionCard key={i} className="bg-white border border-cyan-100 rounded-xl p-5 shadow-sm transition-all flex flex-col gap-2 group">
                 <div className="flex items-center gap-2 mb-1">
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 flex items-center justify-center text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                       <BookOpen className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-black text-slate-900 leading-tight">{topic.title}</h3>
                 </div>
                 <p className="text-xs text-slate-600 font-medium leading-relaxed">{topic.description}</p>
              </MotionCard>
            ))}
          </StaggerGrid>
        </RevealSection>

        {/* 4. LEARNING EXPERIENCE & ADMIN WORKFLOWS with Accessibility Preview Interaction */}
        <RevealSection direction="up" className="py-12 px-4 max-w-7xl mx-auto space-y-6">
          
          {/* Signature Interaction Widget */}
          <div className="flex flex-col sm:flex-row items-center justify-between bg-slate-800 rounded-xl p-3 border border-slate-700 w-full max-w-2xl mx-auto mb-6">
            <div className="flex items-center gap-2 text-cyan-400 mb-3 sm:mb-0">
              <Accessibility className="w-5 h-5" />
              <span className="text-sm font-bold text-white tracking-wide">Accessibility Preview</span>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setA11yMode('default')} 
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 ${a11yMode === 'default' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-700 hover:text-white'}`}
                aria-pressed={a11yMode === 'default'}
              >
                Default
              </button>
              <button 
                onClick={() => setA11yMode('large-text')} 
                className={`px-3 py-1.5 text-sm font-bold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 ${a11yMode === 'large-text' ? 'bg-cyan-600 text-white shadow-sm' : 'text-slate-400 hover:bg-slate-700 hover:text-white'}`}
                aria-pressed={a11yMode === 'large-text'}
              >
                Large Text
              </button>
              <button 
                onClick={() => setA11yMode('high-contrast')} 
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400 ${a11yMode === 'high-contrast' ? 'bg-black text-yellow-400 border-2 border-yellow-400 shadow-sm' : 'text-slate-400 border-2 border-transparent hover:bg-slate-700 hover:text-white'}`}
                aria-pressed={a11yMode === 'high-contrast'}
              >
                High Contrast
              </button>
            </div>
          </div>

          {/* Learning Experience UI Mockup */}
          <div className={`transition-all duration-500 rounded-[2rem] border shadow-xl p-8 sm:p-12 overflow-hidden ${isHC ? 'bg-black text-white border-yellow-400 ring-2 ring-yellow-400' : 'bg-slate-900 text-white border-slate-800'}`}>
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-5">
                   <span className={`uppercase tracking-widest font-black mb-2 block origin-left transition-transform duration-500 text-[10px] ${isLT ? 'scale-110' : 'scale-100'} ${isHC ? 'text-yellow-400' : 'text-yellow-400'}`}>
                     Designing for the Learner
                   </span>
                   <h3 className={`font-black tracking-tight mb-4 origin-left transition-transform duration-500 text-3xl ${isLT ? 'scale-105' : 'scale-100'}`}>
                     Focus on Education, Not Navigation
                   </h3>
                   <p className={`font-medium leading-relaxed mb-6 origin-top-left transition-transform duration-500 text-sm ${isLT ? 'scale-105' : 'scale-100'} ${isHC ? 'text-white font-bold' : 'text-slate-300'}`}>
                     Complex software shouldn't get in the way of studying. We prioritize intuitive, distraction-free interfaces that guide students seamlessly toward success.
                   </p>
                   <div className="space-y-3">
                     {["Clear Navigation", "Progress Visibility", "Mobile-Optimized Study"].map((item, idx) => (
                       <div key={idx} className={`flex gap-2.5 items-center font-bold origin-left transition-transform duration-500 text-sm ${isLT ? 'scale-110' : 'scale-100'} ${isHC ? 'text-white' : 'text-slate-200'}`}>
                         <CheckCircle2 className={`w-5 h-5 ${isHC ? 'text-yellow-400' : 'text-cyan-400'}`} />
                         <span>{item}</span>
                       </div>
                     ))}
                   </div>
                </div>
                {/* Dashboard UI Mockup SVG */}
                <div className={`lg:col-span-7 rounded-2xl h-full min-h-[350px] flex justify-center border p-8 overflow-hidden transition-colors duration-500 ${isHC ? 'bg-black border-yellow-400' : 'bg-slate-950 border-slate-800'}`}>
                   <svg viewBox="0 0 400 300" className="w-full h-full max-w-md" fill="none">
                      <rect x="0" y="0" width="400" height="300" rx="12" className={`transition-colors duration-500 ${isHC ? 'fill-black stroke-yellow-400 stroke-2' : 'fill-slate-100'}`} />
                      <rect x="0" y="0" width="400" height="24" className={`transition-colors duration-500 ${isHC ? 'fill-yellow-400' : 'fill-slate-200'}`} />
                      <circle cx="15" cy="12" r="4" fill={isHC ? 'black' : '#ef4444'} />
                      <circle cx="28" cy="12" r="4" fill={isHC ? 'black' : '#eab308'} />
                      <circle cx="41" cy="12" r="4" fill={isHC ? 'black' : '#22c55e'} />
                      
                      <rect x="0" y="24" width="80" height="276" className={`transition-colors duration-500 ${isHC ? 'fill-black stroke-yellow-400 stroke-1' : 'fill-white'}`} />
                      <rect x="15" y="40" width="50" height={isLT ? 12 : 8} rx="4" className={`transition-colors duration-500 ${isHC ? 'fill-yellow-400' : 'fill-slate-300'}`} />
                      <rect x="15" y="70" width="50" height="24" rx="4" className={`transition-colors duration-500 ${isHC ? 'fill-yellow-400' : 'fill-cyan-50'}`} />
                      <rect x="25" y="78" width="30" height={isLT ? 12 : 8} rx="4" className={`transition-colors duration-500 ${isHC ? 'fill-black' : 'fill-cyan-600'}`} />
                      <rect x="15" y="105" width="40" height={isLT ? 10 : 6} rx="3" className={`transition-colors duration-500 ${isHC ? 'fill-white' : 'fill-slate-300'}`} />
                      <rect x="15" y="125" width="45" height={isLT ? 10 : 6} rx="3" className={`transition-colors duration-500 ${isHC ? 'fill-white' : 'fill-slate-300'}`} />
                      
                      <rect x="100" y="45" width="120" height={isLT ? 16 : 12} rx="6" className={`transition-colors duration-500 ${isHC ? 'fill-yellow-400' : 'fill-slate-800'}`} />
                      <rect x="100" y="65" width="80" height={isLT ? 10 : 6} rx="3" className={`transition-colors duration-500 ${isHC ? 'fill-white' : 'fill-slate-400'}`} />
                      
                      <rect x="100" y="90" width="280" height="140" rx="8" className={`transition-colors duration-500 ${isHC ? 'fill-black stroke-yellow-400 stroke-2' : 'fill-slate-900'}`} />
                      <circle cx="240" cy="160" r="16" className={`transition-colors duration-500 ${isHC ? 'fill-yellow-400' : 'fill-cyan-500'}`} />
                      <polygon points="235,152 248,160 235,168" fill={isHC ? 'black' : 'white'} />
                      
                      <rect x="100" y="245" width="280" height="40" rx="8" className={`transition-colors duration-500 ${isHC ? 'fill-black stroke-yellow-400 stroke-2' : 'fill-white drop-shadow-sm'}`} />
                      <rect x="115" y="260" width="16" height={isLT ? 14 : 10} rx="2" className={`transition-colors duration-500 ${isHC ? 'fill-yellow-400' : 'fill-yellow-400'}`} />
                      <rect x="140" y="262" width="100" height={isLT ? 10 : 6} rx="3" className={`transition-colors duration-500 ${isHC ? 'fill-white' : 'fill-slate-800'}`} />
                      <rect x="340" y="255" width="25" height="20" rx="4" className={`transition-colors duration-500 ${isHC ? 'fill-yellow-400' : 'fill-cyan-100'}`} />
                   </svg>
                </div>
             </div>
          </div>

          {/* Admin Workflow Automation Diagram */}
          <div className="bg-white rounded-[2rem] border border-cyan-100 shadow-md p-8 sm:p-12 mt-12">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div className="order-2 lg:order-1 bg-cyan-50 rounded-2xl h-full min-h-[300px] flex items-center justify-center relative overflow-hidden border border-cyan-200 p-8">
                   <svg viewBox="0 0 300 200" className="w-full h-full text-slate-800" fill="none">
                      <rect x="30" y="50" width="40" height="50" rx="4" className="fill-white stroke-slate-300 stroke-2" />
                      <rect x="35" y="60" width="20" height="4" rx="2" className="fill-slate-200" />
                      <rect x="35" y="70" width="30" height="4" rx="2" className="fill-slate-200" />
                      <rect x="40" y="60" width="40" height="50" rx="4" className="fill-white stroke-slate-300 stroke-2 transform rotate-12" />
                      
                      <text x="50" y="140" fill="#64748b" fontSize="10" fontWeight="bold" textAnchor="middle">Manual</text>
                      
                      <path d="M 100 80 Q 150 50 200 80" stroke="#06b6d4" strokeWidth="4" fill="none" strokeDasharray="6 4" className={shouldReduceMotion ? '' : 'animate-pulse'} />
                      <polygon points="195,75 205,80 195,85" fill="#06b6d4" />
                      
                      <rect x="220" y="50" width="60" height="60" rx="12" className="fill-cyan-600 shadow-lg" />
                      <circle cx="250" cy="80" r="15" className="fill-cyan-400" />
                      <path d="M 245 80 L 250 85 L 260 75" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      
                      <text x="250" y="140" fill="#0891b2" fontSize="10" fontWeight="bold" textAnchor="middle">Automated</text>
                   </svg>
                </div>
                <div className="order-1 lg:order-2">
                   <span className="text-[10px] uppercase tracking-widest text-cyan-600 font-black mb-2 block">Unburdening Administration</span>
                   <h3 className="text-3xl font-black text-slate-900 tracking-tight mb-4">Paperless Operations</h3>
                   <p className="text-slate-600 font-medium leading-relaxed mb-6">
                     Behind every great learning experience is an ocean of administrative work. We build tools to automate enrollment, compliance reporting, and cohort communication.
                   </p>
                   <ul className="space-y-4">
                      {["Automated Data Entry & CRM Sync", "Unified Institutional Reporting", "Bulk Administrative Actions"].map((item, i) => (
                         <li key={i} className="flex gap-3 text-sm font-bold text-slate-800 items-start">
                            <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0" />
                            <span>{item}</span>
                         </li>
                      ))}
                   </ul>
                </div>
             </div>
          </div>
        </RevealSection>

        {/* 5. HORIZONTAL BOTTOM TABS */}
        <RevealSection direction="down" className="py-12 px-4 max-w-7xl mx-auto">
          <div className="bg-white border border-cyan-100 rounded-[2.5rem] shadow-lg p-6 sm:p-10 flex flex-col min-h-[500px]">
            
            <div className="flex-grow mb-10 border-b border-cyan-50 pb-8">
              <AnimatePresence mode="wait">
                {tabsData.map(tab => (
                  activeTab === tab.id && (
                    <motion.div
                      key={tab.id}
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -10 }}
                      transition={{ duration: 0.2 }}
                      className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
                    >
                      <div className="lg:col-span-7">
                        <span className="text-[10px] font-black uppercase tracking-widest text-cyan-600 mb-2 block">Platform Module</span>
                        <h3 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">{tab.label}</h3>
                        <p className="text-slate-600 font-medium mb-8 leading-relaxed text-lg max-w-xl">{tab.summary}</p>
                        
                        <div className="space-y-3">
                          {tab.bullets.map((bullet, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-sm font-bold text-slate-800">
                              <CheckCircle2 className="w-5 h-5 text-cyan-500 shrink-0" />
                              <span>{bullet}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="lg:col-span-5 bg-cyan-50 border border-cyan-100 rounded-2xl p-6 sm:p-8">
                        <span className="text-[10px] font-black uppercase tracking-widest text-yellow-600 mb-3 block">Implementation Case</span>
                        <div className="space-y-4 text-sm font-medium">
                          <div className="bg-white p-4 rounded-xl shadow-sm"><strong className="text-slate-900 block mb-1">Scenario:</strong> <span className="text-slate-600">{tab.mini_case.scenario}</span></div>
                          <div className="bg-white p-4 rounded-xl shadow-sm"><strong className="text-slate-900 block mb-1">Action:</strong> <span className="text-slate-600">{tab.mini_case.what_we_do}</span></div>
                          <div className="bg-yellow-100 text-yellow-900 p-4 rounded-xl border border-yellow-200"><strong>Result:</strong> {tab.mini_case.result}</div>
                        </div>
                      </div>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
            </div>

            <div className="flex flex-nowrap overflow-x-auto gap-3 no-scrollbar mt-auto">
              {tabsData.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`shrink-0 px-5 py-3 rounded-xl font-bold transition-all text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-500 ${
                    activeTab === tab.id 
                      ? 'bg-slate-900 border-slate-800 text-white shadow-md' 
                      : 'bg-white border-slate-200 text-slate-600 hover:bg-cyan-50 hover:border-cyan-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </RevealSection>

        {/* 6. ACCESSIBILITY & INTEGRATION STRIP */}
        <RevealSection className="py-8 px-4 max-w-7xl mx-auto">
           <div className="bg-white rounded-3xl border border-cyan-200 p-8 shadow-md grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              <div className="md:border-r md:border-cyan-100 md:pr-8">
                 <div className="flex items-center gap-3 mb-4">
                    <Accessibility className="w-6 h-6 text-cyan-600" />
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">Accessibility Commitments</h3>
                 </div>
                 <p className="text-sm text-slate-600 font-medium mb-4 leading-relaxed">
                   We engineer inclusive software that meets strict institutional requirements.
                 </p>
                 <ul className="space-y-2">
                    <li className="text-xs font-bold text-slate-800 flex items-center gap-2">
                       <CheckCircle2 className="w-3.5 h-3.5 text-yellow-500" /> WCAG 2.1 AA Compliance Audits.
                    </li>
                    <li className="text-xs font-bold text-slate-800 flex items-center gap-2">
                       <CheckCircle2 className="w-3.5 h-3.5 text-yellow-500" /> Keyboard Navigation Ready.
                    </li>
                    <li className="text-xs font-bold text-slate-800 flex items-center gap-2">
                       <CheckCircle2 className="w-3.5 h-3.5 text-yellow-500" /> Screen-Reader Semantic Structure.
                    </li>
                 </ul>
              </div>
              <div>
                 <div className="flex items-center gap-3 mb-4">
                    <Link2 className="w-6 h-6 text-cyan-600" />
                    <h3 className="text-xl font-black text-slate-900 tracking-tight">Integration Ecosystem</h3>
                 </div>
                 <StaggerGrid className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {integrations.map((int, i) => (
                       <MotionCard key={i} className="bg-cyan-50/50 border border-cyan-100 rounded-lg p-3 text-left">
                          <div className="text-xs font-black text-slate-900 mb-1">{int.name}</div>
                          <div className="text-[10px] font-semibold text-slate-500">{int.notes}</div>
                       </MotionCard>
                    ))}
                 </StaggerGrid>
              </div>
           </div>
        </RevealSection>

        {/* 7. FAQ ACCORDION */}
        <RevealSection direction="up" className="py-12 px-4 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <HelpCircle className="w-8 h-8 text-cyan-500 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Technical FAQ</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-cyan-100 rounded-xl px-5 shadow-sm hover:border-cyan-300 transition-colors overflow-hidden">
                <AccordionTrigger className="text-sm font-bold text-slate-900 hover:text-cyan-600 hover:no-underline py-4 text-left">
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
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_#06b6d4_0%,_transparent_60%)] opacity-20" />
             <div className="p-10 sm:p-16 relative z-10">
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">Empower your educational mission.</h2>
                <p className="text-cyan-100 font-medium mb-8 max-w-lg mx-auto text-lg">
                   Let's build technology that removes friction from learning and administration.
                </p>
                <MagneticCTA disabled={shouldReduceMotion}>
                  <a href="/contact?intent=education" className="inline-block rounded-full bg-cyan-600 text-white font-black px-10 py-4 hover:bg-cyan-500 transition-all shadow-md text-sm">
                     Start Your Project
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
