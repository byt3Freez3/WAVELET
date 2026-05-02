import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-[95%] max-w-5xl bg-gray-900/80 backdrop-blur-2xl border border-white/10 rounded-full px-4 py-2 md:px-6 md:py-3 flex items-center justify-between shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] transition-all duration-300">
        <Link to="/" className="flex items-center" onClick={() => setIsMenuOpen(false)}>
          <img 
            src="/wavelet-logo.png" 
            alt="Wavelet" 
            className="drop-shadow-[0_0_12px_rgba(255,255,255,0.8)] h-7 md:h-8 w-auto object-contain" 
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link 
              key={link.to}
              to={link.to}
              className="relative px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors z-10"
              onMouseEnter={() => setHoveredLink(link.to)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.label}
              {hoveredLink === link.to && (
                <motion.div
                  layoutId="nav-glow"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <motion.div whileTap={{ scale: 0.95 }} className="flex md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2 hover:bg-white/5 rounded-full transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </motion.div>

          <motion.div whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="hidden sm:block bg-white text-gray-950 text-[10px] md:text-xs font-semibold px-4 py-2 md:px-5 md:py-2.5 rounded-full hover:scale-105 transition-transform"
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[90] md:hidden bg-gray-950/95 backdrop-blur-2xl flex flex-col items-center justify-center p-8 pt-24"
          >
            <div className="flex flex-col items-center gap-6 w-full">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    to={link.to}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl font-semibold text-white hover:text-blue-400 transition-colors block py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
                className="mt-8"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-white text-gray-950 text-lg font-bold px-10 py-4 rounded-full shadow-2xl"
                >
                  Get started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
