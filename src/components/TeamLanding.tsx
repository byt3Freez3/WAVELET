import React from 'react';
import { 
  Users, 
  Briefcase, 
  Layers, 
  Award, 
  ChevronRight, 
  CheckCircle2, 
  Globe, 
  Database, 
  ShieldCheck, 
  Zap,
  MessageSquare,
  Send,
  Mail,
  User,
  ArrowRight
} from 'lucide-react';

const stats = [
  { value: "15+", label: "Years Experience", sub: "Industry Leadership" },
  { value: "100+", label: "Customers", sub: "Global Partnerships" },
  { value: "300+", label: "Projects", sub: "Technical Excellence" },
  { value: "70+", label: "Certifications", sub: "Expert Mastery" },
];

const offerings = [
  {
    title: "Consulting",
    description: "Strategic roadmaps and business process optimization tailored for Microsoft Dynamics 365 success.",
    color: "bg-magenta-600", // Will use custom style or approximate
    bgColor: "#D91B5C",
  },
  {
    title: "Implementation",
    description: "Seamless deployment of enterprise-grade solutions with minimal disruption to your core operations.",
    color: "bg-blue-700",
    bgColor: "#1E40AF",
  },
  {
    title: "Support",
    description: "24/7 technical assistance and proactive maintenance to keep your business running at peak performance.",
    color: "bg-amber-900",
    bgColor: "#78350F",
  },
  {
    title: "Migration",
    description: "Safe and efficient transition of legacy systems to modern cloud architectures with full data integrity.",
    color: "bg-emerald-900",
    bgColor: "#064E3B",
  },
];

const benefits = [
  {
    title: "Unmatched Expertise",
    description: "Leverage over 15 years of specialized knowledge in Dynamics 365 ecosystems. Our consultants bring industry-specific wisdom to solve your most complex architectural challenges.",
    icon: <ShieldCheck className="w-6 h-6 text-indigo-600" />,
    iconBg: "bg-indigo-50",
  },
  {
    title: "Nationwide Presence",
    description: "With regional hubs across the country, we provide localized support backed by global enterprise standards, ensuring rapid response whenever you need it.",
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    iconBg: "bg-blue-50",
  },
  {
    title: "Single Source Solution",
    description: "Simplify your vendor management with our comprehensive service model. We handle everything from initial strategy to deployment, maintenance, and future-proofing.",
    icon: <Layers className="w-6 h-6 text-purple-600" />,
    iconBg: "bg-purple-50",
  },
  {
    title: "Proven Track Record",
    description: "Join over 100 enterprise clients who have scaled their operations through our tested methodologies. Our focus is on delivering measurable ROI.",
    icon: <Award className="w-6 h-6 text-emerald-600" />,
    iconBg: "bg-emerald-50",
  },
];

const logos = [
  "Microsoft Gold Partner", "Dynamics 365", "Azure Cloud", "SAP Partner", "Oracle Cloud", "Cisco Certified"
];

export const TeamLanding = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-48 overflow-hidden bg-[#0B1120]">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 px-4 mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
              Trusted Global Solutions Partner for <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">
                Microsoft Dynamics 365
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
              Empower your business with a seamless Dynamics 365 integration that scales with your ambitions. 
              Our expert-led solutions transform complex operational data into actionable insights for the modern enterprise.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="px-8 py-4 bg-white text-[#0B1120] font-semibold rounded-full hover:bg-slate-100 transition-all duration-300 shadow-lg shadow-white/5">
                Explore Our Solutions
              </button>
              <button className="px-8 py-4 bg-transparent border border-slate-700 text-white font-semibold rounded-full hover:bg-white/5 transition-all duration-300">
                Contact an Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Floating Stats Bar */}
      <section className="relative z-20 px-4 -mt-24">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden border border-slate-100">
            {stats.map((stat, idx) => (
              <div 
                key={stat.label} 
                className={`flex flex-col items-center justify-center p-8 md:p-12 text-center ${
                  idx !== stats.length - 1 ? 'md:border-r border-slate-100' : ''
                }`}
              >
                <span className="text-4xl md:text-5xl font-bold text-[#0B1120] mb-2 tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-1">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Colorful Offerings Grid */}
      <section className="py-32 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Offerings</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              End-to-end Microsoft Dynamics services designed to optimize every facet of your enterprise operations.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((offering) => (
              <div 
                key={offering.title}
                className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                style={{ backgroundColor: offering.bgColor }}
              >
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/40 opacity-60" />
                <div className="relative h-full flex flex-col justify-end p-8 text-white z-10">
                  <h3 className="text-3xl font-bold mb-4">{offering.title}</h3>
                  <p className="text-white/90 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {offering.description}
                  </p>
                  <div className="flex items-center text-sm font-bold uppercase tracking-widest group-hover:gap-2 transition-all">
                    <span>Learn More</span>
                    <ChevronRight className="w-5 h-5 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                  </div>
                </div>
                {/* Decorative Pattern */}
                <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] bg-white/5 rounded-full blur-3xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Benefits Section */}
      <section className="py-32 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-indigo-600 mb-6">Grow with Team Computers</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.2]">
              The strategic advantage your <br />
              <span className="text-slate-400">enterprise needs to scale.</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-6">
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${benefit.iconBg} flex items-center justify-center shadow-sm`}>
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
                  <p className="text-slate-600 leading-relaxed max-w-md">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Logo Carousel / Marquee */}
      <section className="py-20 bg-slate-100 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center px-12 opacity-40 hover:opacity-100 transition-opacity">
              <span className="text-xl md:text-2xl font-bold text-slate-900 grayscale tracking-tighter">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Contact / CTA Section */}
      <section className="py-32 bg-white relative">
        <div className="container px-4 mx-auto">
          <div className="bg-[#0B1120] rounded-[3rem] overflow-hidden shadow-2xl relative flex flex-col lg:flex-row">
            {/* Left Side Content */}
            <div className="p-10 md:p-16 lg:w-1/2 flex flex-col justify-center relative">
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Submit your Query / <br />
                  <span className="text-blue-400">Let's Connect!</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-md">
                  Have a question about Microsoft Dynamics 365 or need 24/7 technical assistance? 
                  Our team of certified experts is ready to help you navigate your next big digital leap.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <span className="text-slate-200">24/7 Enterprise Support</span>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/20">
                      <Zap className="w-5 h-5" />
                    </div>
                    <span className="text-slate-200">Rapid Response Methodology</span>
                  </div>
                </div>
              </div>
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/5 to-transparent pointer-events-none" />
            </div>

            {/* Right Side Form */}
            <div className="p-10 md:p-16 lg:w-1/2 bg-white m-4 lg:m-8 rounded-[2rem]">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-0 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input 
                        type="email" 
                        placeholder="john@company.com" 
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-0 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 transition-all"
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-bold text-slate-700 mb-2">Your Message</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                      <textarea 
                        rows={4}
                        placeholder="How can we help your business?" 
                        className="w-full pl-12 pr-4 py-4 bg-slate-50 border-0 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      />
                    </div>
                  </div>
                </div>
                <button className="w-full py-5 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all duration-300 flex items-center justify-center gap-2 group">
                  <span>Send Message</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Footer Sub-section if needed, otherwise EnterpriseFooter will be used in route */}
    </div>
  );
};
