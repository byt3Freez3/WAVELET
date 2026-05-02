import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

export function SiteHeader() {
  return (
    <header className="fixed top-6 z-50 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4">
      <div className="flex items-center justify-between rounded-full bg-white/70 backdrop-blur-md border border-gray-100 px-6 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
        <Link to="/" className="flex items-center gap-2.5">
          <span className="h-8 w-8 rounded-xl bg-gray-950 flex items-center justify-center text-white text-[13px] font-bold shadow-lg">W</span>
          <span className="font-bold tracking-tight text-gray-950">Wavelet</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-bold text-gray-400 uppercase tracking-widest">
          <Link 
            to="/" 
            className="hover:text-gray-950 transition-colors [&.active]:text-gray-950"
            activeProps={{ className: "text-gray-950" }}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className="hover:text-gray-950 transition-colors [&.active]:text-gray-950"
            activeProps={{ className: "text-gray-950" }}
          >
            Services
          </Link>
          <Link 
            to="/work" 
            className="hover:text-gray-950 transition-colors [&.active]:text-gray-950"
            activeProps={{ className: "text-gray-950" }}
          >
            Work
          </Link>
          <Link 
            to="/about" 
            className="hover:text-gray-950 transition-colors [&.active]:text-gray-950"
            activeProps={{ className: "text-gray-950" }}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className="hover:text-gray-950 transition-colors [&.active]:text-gray-950"
            activeProps={{ className: "text-gray-950" }}
          >
            Contact
          </Link>
        </nav>

        <motion.div whileTap={{ scale: 0.95 }}>
          <Link
            to="/contact"
            className="hidden sm:block rounded-full bg-gray-950 text-white text-xs font-bold uppercase tracking-widest px-6 py-3 hover:bg-gray-800 transition-all hover:scale-[1.05] shadow-lg shadow-black/10"
          >
            Get started
          </Link>
        </motion.div>
      </div>
    </header>
  );
}
