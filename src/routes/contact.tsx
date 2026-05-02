import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { EnterpriseFooter } from "@/components/EnterpriseFooter";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "b576863c-c40d-45a6-b535-1f16787daf33");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully! We'll get back to you shortly.");
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Something went wrong. Please try again later.");
      }
    } catch (error) {
      toast.error("Network error. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black font-sans antialiased selection:bg-white/10 selection:text-white">
      <SiteHeader />
      
      <main className="relative pt-40 pb-48">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/5 blur-[120px] rounded-full -z-10" />

        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-stretch">
            
            {/* Left Column - VIP Form */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-[60%] bg-gray-900/30 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 lg:p-14"
            >
              <h1 className="text-4xl sm:text-5xl font-semibold text-white tracking-tight mb-4">
                Start a conversation.
              </h1>
              <p className="text-gray-400 text-lg mb-12">
                Have a vision for your next platform? Let's architect it together.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Full Name</label>
                    <input 
                      required
                      name="name"
                      placeholder="Enter your name"
                      className="w-full bg-white/5 border-b border-white/10 rounded-t-lg px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Company</label>
                    <input 
                      name="company"
                      placeholder="Your organization"
                      className="w-full bg-white/5 border-b border-white/10 rounded-t-lg px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Email Address</label>
                  <input 
                    required
                    type="email"
                    name="email"
                    placeholder="name@company.com"
                    className="w-full bg-white/5 border-b border-white/10 rounded-t-lg px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold ml-1">Project Details</label>
                  <textarea 
                    required
                    name="message"
                    rows={4}
                    placeholder="Tell us about your technical challenges..."
                    className="w-full bg-white/5 border-b border-white/10 rounded-t-lg px-4 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 placeholder:text-gray-600 resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-white text-gray-950 font-bold py-5 mt-6 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? "Architecting..." : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Right Column - Direct Access */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full lg:w-[40%] flex flex-col gap-6"
            >
              {/* Email Card */}
              <div className="bg-gray-900/40 backdrop-blur-xl border border-white/10 p-10 rounded-[2.5rem] hover:border-blue-500/50 hover:shadow-[0_0_40px_-15px_rgba(59,130,246,0.3)] transition-all group flex flex-col justify-center min-h-[160px]">
                <div className="flex items-center gap-4 mb-4">
                   <div className="h-10 w-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                     <Mail className="h-5 w-5" />
                   </div>
                   <span className="text-xs uppercase tracking-[0.2em] text-gray-500 font-bold">Email Us</span>
                </div>
                <p className="text-2xl font-semibold text-white tracking-tight">hello@wavelet.dev</p>
              </div>

              {/* WhatsApp Card */}
              <div className="bg-gray-900/40 backdrop-blur-xl border border-emerald-500/20 p-10 rounded-[2.5rem] hover:border-emerald-400/60 hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.25)] transition-all group cursor-pointer relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-6 right-6">
                   <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                     <span className="relative flex h-2 w-2">
                       <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                       <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                     </span>
                     <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-widest">Online</span>
                   </div>
                </div>

                <div className="h-16 w-16 rounded-3xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-8 group-hover:scale-110 transition-transform duration-500">
                  <MessageCircle className="h-8 w-8" />
                </div>
                
                <h3 className="text-3xl text-white font-semibold tracking-tight">Chat on WhatsApp</h3>
                <p className="text-sm text-gray-400 mt-4 leading-relaxed max-w-[280px]">
                  Skip the form. Get a direct response from our engineering team instantly.
                </p>
                
                <div className="mt-8 flex items-center gap-2 text-emerald-400 text-sm font-bold group-hover:gap-4 transition-all">
                   Connect Now <ArrowRightIcon className="h-4 w-4" />
                </div>
              </div>

              {/* Map Card */}
              <div className="flex-1 bg-gray-900/40 backdrop-blur-xl border border-white/10 rounded-[2.5rem] overflow-hidden min-h-[300px] relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.35231254125!2d88.26495143561748!3d22.535406374754455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1777713324411!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(1) opacity(0.6)" }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-6 left-6 right-6 p-6 rounded-3xl bg-black/60 backdrop-blur-xl border border-white/10 flex items-center justify-between pointer-events-none group-hover:translate-y-[-10px] transition-transform duration-500">
                   <div className="flex items-center gap-3">
                     <MapPin className="h-4 w-4 text-white/40" />
                     <span className="text-sm font-bold text-white tracking-tight">Kolkata, WB, India</span>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <EnterpriseFooter />

      {/* Page Specific Global Overrides */}
      <style>{`
        header {
          background-color: rgba(0, 0, 0, 0.4) !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05) !important;
          backdrop-filter: blur(16px) !important;
        }
        header span, header a {
          color: white !important;
        }
        header div {
          background-color: rgba(255, 255, 255, 0.03) !important;
          border-color: rgba(255, 255, 255, 0.05) !important;
        }
      `}</style>
    </div>
  );
}

function ArrowRightIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
