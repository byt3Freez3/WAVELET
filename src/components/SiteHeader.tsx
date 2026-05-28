import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, ChevronDown, ChevronRight, Code2, Cloud, Mail, Settings, BarChart3, Palette, Globe, Smartphone } from "lucide-react";

const categories = [
  { 
    id: "software",
    label: "Software Services", 
    icon: Code2,
    to: "/what-we-do/software-services",
    subLinks: [
      { label: "Custom App Development", description: "Tailored software solutions built from the ground up.", to: "/what-we-do/software-services" },
      { label: "Legacy Modernization", description: "Transforming aging systems into modern architectures.", to: "/what-we-do/software-services" },
      { label: "API Integrations", description: "Seamlessly connect your digital ecosystem.", to: "/what-we-do/software-services" },
      { label: "QA & Testing", description: "Ensuring excellence through rigorous validation.", to: "/what-we-do/software-services" }
    ]
  },
  { 
    id: "cloud",
    label: "Cloud", 
    icon: Cloud,
    to: "/what-we-do/cloud",
    subLinks: [
      { label: "AWS Management", description: "Expert orchestration of Amazon Web Services.", to: "/what-we-do/cloud" },
      { label: "Azure Migration", description: "Moving your enterprise to the Microsoft cloud.", to: "/what-we-do/cloud" },
      { label: "Cloud Security", description: "Hardening your infrastructure against threats.", to: "/what-we-do/cloud" },
      { label: "Serverless Compute", description: "Scaling without the overhead of servers.", to: "/what-we-do/cloud" }
    ]
  },
  { 
    id: "email",
    label: "Email Solutions", 
    icon: Mail,
    to: "/what-we-do/email-solutions",
    subLinks: [
      { label: "G-Suite / Workspace", description: "Productivity suites for the modern workforce.", to: "/what-we-do/email-solutions" },
      { label: "Microsoft 365", description: "Enterprise-grade collaboration tools.", to: "/what-we-do/email-solutions" },
      { label: "Email Security", description: "Advanced phishing and malware protection.", to: "/what-we-do/email-solutions" }
    ]
  },
  { 
    id: "erp",
    label: "ERP and Business Apps", 
    icon: Settings,
    to: "/what-we-do/erp-business-applications",
    subLinks: [
      { label: "SAP Business One", description: "Complete business management for SMEs.", to: "/what-we-do/erp-business-applications" },
      { label: "Microsoft Dynamics", description: "Agile business applications for growth.", to: "/what-we-do/erp-business-applications" },
      { label: "CRM Solutions", description: "Optimizing your customer relationships.", to: "/what-we-do/erp-business-applications" }
    ]
  },
  { 
    id: "bi",
    label: "Business Intelligence Tools", 
    icon: BarChart3,
    to: "/what-we-do/business-intelligence",
    subLinks: [
      { label: "Power BI", description: "Visualize data and share insights.", to: "/what-we-do/business-intelligence" },
      { label: "Tableau", description: "Powerful analytics for every user.", to: "/what-we-do/business-intelligence" },
      { label: "Data Warehousing", description: "Unified storage for all your business data.", to: "/what-we-do/business-intelligence" }
    ]
  },
  { 
    id: "design",
    label: "Design and Digital Marketing", 
    icon: Palette,
    to: "/what-we-do/design-digital-marketing",
    subLinks: [
      { label: "UI/UX Design", description: "Crafting intuitive digital experiences.", to: "/what-we-do/design-digital-marketing" },
      { label: "SEO / SEM", description: "Driving visibility through search excellence.", to: "/what-we-do/design-digital-marketing" },
      { label: "Content Strategy", description: "Storytelling that resonates with your audience.", to: "/what-we-do/design-digital-marketing" }
    ]
  },
  { 
    id: "hosting",
    label: "Web and Hosting Services", 
    icon: Globe,
    to: "/what-we-do/web-hosting",
    subLinks: [
      { label: "Managed Hosting", description: "Reliable performance for your web presence.", to: "/what-we-do/web-hosting" },
      { label: "Domain Management", description: "Securing your brand's digital identity.", to: "/what-we-do/web-hosting" },
      { label: "SSL & Security", description: "Encryption and protection for every visitor.", to: "/what-we-do/web-hosting" }
    ]
  },
  { 
    id: "mobile",
    label: "Web and Applications (Android & iOS)", 
    icon: Smartphone,
    to: "/what-we-do/web-mobile-apps",
    subLinks: [
      { label: "iOS Development", description: "Premium applications for the Apple ecosystem.", to: "/what-we-do/web-mobile-apps" },
      { label: "Android Development", description: "Versatile apps for the global mobile market.", to: "/what-we-do/web-mobile-apps" },
      { label: "Hybrid Apps", description: "Cross-platform efficiency without compromise.", to: "/what-we-do/web-mobile-apps" }
    ]
  },
];

const industries = [
  { label: "Manufacturing", to: "/industries/manufacturing" },
  { label: "Hospitality", to: "/industries/hospitality" },
  { label: "Health", to: "/industries/health" },
  { label: "Retail", to: "/industries/retail" },
  { label: "Education", to: "/industries/education" },
  { label: "Startups", to: "/industries/startups" },
];

const navLinks = [
  { label: "Home", to: "/" },
  { label: "What We Do", isMegaMenu: true },
  { label: "Industries", isDropdown: true },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState("software");
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>("WHY WAVELET?");

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-5xl bg-white/80 backdrop-blur-2xl border border-gray-200 rounded-full px-4 py-2 md:px-6 md:py-3 flex items-center justify-between shadow-sm transition-all duration-300">
        <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
          <img 
            src="/wavelet-logo.png" 
            alt="Wavelet" 
            className="drop-shadow-[0_0_12px_rgba(0,0,0,0.1)] h-7 md:h-8 w-auto object-contain" 
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => setHoveredLink(link.label)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.isMegaMenu ? (
                <>
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors z-10 relative">
                    {link.label}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    {hoveredLink === link.label && (
                      <motion.div
                        layoutId="nav-glow"
                        className="absolute inset-0 bg-gray-100 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                  {/* Mega Menu Container */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] hidden lg:block hover:animate-in hover:fade-in hover:slide-in-from-top-2 hover:duration-200">
                    <div 
                      className="w-[850px] flex bg-white/90 border border-gray-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] rounded-2xl overflow-hidden"
                      style={{ backdropFilter: 'blur(32px)', WebkitBackdropFilter: 'blur(32px)' }}
                    >
                      {/* Left Pane */}
                      <div className="w-1/3 bg-transparent border-r border-white/10 p-6 flex flex-col gap-2">
                        {categories.map((cat) => (
                          <Link
                            key={cat.id}
                            to={cat.to}
                            onMouseEnter={() => setActiveCategory(cat.id)}
                            className={`flex items-center justify-between py-3 px-4 rounded-xl text-sm font-medium transition-all duration-200 ${
                              activeCategory === cat.id 
                                ? "bg-gray-50/50 text-blue-600 shadow-sm border border-white/40" 
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-50/50"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <cat.icon className={`h-4 w-4 ${activeCategory === cat.id ? "text-blue-600" : "text-gray-400"}`} />
                              {cat.label}
                            </div>
                            <ChevronRight className={`h-3 w-3 transition-transform ${activeCategory === cat.id ? "translate-x-0.5 opacity-100" : "opacity-0"}`} />
                          </Link>
                        ))}
                      </div>
                      {/* Right Pane */}
                      <div className="w-2/3 p-8 bg-transparent">
                        <div className="grid grid-cols-2 gap-6">
                          {categories.find(c => c.id === activeCategory)?.subLinks.map((sub: any) => (
                            <Link
                              key={sub.label}
                              to={sub.to}
                              className="group flex flex-col p-4 rounded-xl bg-transparent hover:bg-white border border-transparent hover:border-gray-200 hover:shadow-sm transition-all duration-300 cursor-pointer"
                            >
                              <span className="text-gray-900 font-semibold text-sm group-hover:text-blue-600 transition-colors">{sub.label}</span>
                              {sub.description && (
                                <span className="text-gray-500 text-xs mt-1 leading-relaxed">{sub.description}</span>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : link.isDropdown ? (
                <>
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors z-10 relative">
                    {link.label}
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    {hoveredLink === link.label && (
                      <motion.div
                        layoutId="nav-glow"
                        className="absolute inset-0 bg-gray-100 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                  {/* Standard Dropdown Container */}
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 origin-top-left z-50">
                    <div className="w-56 bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-xl p-2">
                      {industries.map((industry) => (
                        <Link
                          key={industry.label}
                          to={industry.to}
                          className="block px-4 py-2.5 text-sm font-medium text-gray-800 hover:text-gray-950 hover:bg-gray-50 rounded-lg transition-all"
                        >
                          {industry.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link 
                  to={link.to!}
                  className="block relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors z-10"
                >
                  {link.label}
                  {hoveredLink === link.label && (
                    <motion.div
                      layoutId="nav-glow"
                      className="absolute inset-0 bg-gray-100 rounded-full -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <motion.div whileTap={{ scale: 0.95 }} className="flex md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-900 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </motion.div>

          <motion.div whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="hidden sm:block bg-gray-900 text-white text-[10px] md:text-xs font-semibold px-4 py-2 md:px-5 md:py-2.5 rounded-full hover:scale-105 transition-transform shadow-sm"
            >
              Get started
            </Link>
          </motion.div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[110] md:hidden bg-white flex flex-col font-sans"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center">
                <img src="/wavelet-logo.png" alt="Wavelet" className="h-7 w-auto object-contain" />
              </Link>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-black hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            {/* Vertical Menu List */}
            <div className="flex-1 overflow-y-auto px-8 py-10">
              <div className="flex flex-col gap-8 w-full max-w-sm mx-auto">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  Home
                </Link>

                {/* What We Do Accordion */}
                <div className="flex flex-col">
                  <button 
                    onClick={() => setOpenMobileAccordion(openMobileAccordion === "WHAT WE DO" ? null : "WHAT WE DO")}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="text-2xl font-bold text-gray-900">What We Do</span>
                    <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${openMobileAccordion === "WHAT WE DO" ? "rotate-180 text-blue-600" : "text-gray-400"}`} />
                  </button>
                  <AnimatePresence>
                    {openMobileAccordion === "WHAT WE DO" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-5 pt-6 pl-5 border-l-2 border-gray-100 ml-2 mt-2">
                          {categories.map((cat) => (
                            <Link 
                              key={cat.id} 
                              to={cat.to} 
                              onClick={() => setIsMenuOpen(false)}
                              className="text-lg text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              {cat.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Industries Accordion */}
                <div className="flex flex-col">
                  <button 
                    onClick={() => setOpenMobileAccordion(openMobileAccordion === "INDUSTRIES" ? null : "INDUSTRIES")}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="text-2xl font-bold text-gray-900">Industries</span>
                    <ChevronDown className={`h-6 w-6 transition-transform duration-300 ${openMobileAccordion === "INDUSTRIES" ? "rotate-180 text-blue-600" : "text-gray-400"}`} />
                  </button>
                  <AnimatePresence>
                    {openMobileAccordion === "INDUSTRIES" && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-5 pt-6 pl-5 border-l-2 border-gray-100 ml-2 mt-2">
                          {industries.map((ind) => (
                            <Link 
                              key={ind.label} 
                              to={ind.to} 
                              onClick={() => setIsMenuOpen(false)}
                              className="text-lg text-gray-600 hover:text-blue-600 transition-colors"
                            >
                              {ind.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link to="/work" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  Work
                </Link>

                <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  About
                </Link>

                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  Contact
                </Link>

              </div>
            </div>

            {/* Bottom Button */}
            <div className="p-6 pb-8 border-t border-gray-100 bg-white">
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block w-full bg-gray-900 text-white text-center text-lg font-bold py-4 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:bg-black transition-colors"
              >
                Get started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
