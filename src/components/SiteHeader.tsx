export function SiteHeader() {
  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-6xl px-4">
      <div className="flex items-center justify-between rounded-full bg-white/70 backdrop-blur-md border border-gray-100 px-5 py-2.5 shadow-[0_8px_30px_rgba(8,_112,_184,_0.06)]">
        <a href="/" className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-lg bg-gray-900 flex items-center justify-center text-white text-xs font-bold">N</span>
          <span className="font-semibold tracking-tight text-gray-900">Nexus IT</span>
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-gray-600">
          <a href="#services" className="hover:text-gray-900 transition">Services</a>
          <a href="#work" className="hover:text-gray-900 transition">Work</a>
          <a href="#about" className="hover:text-gray-900 transition">About</a>
          <a href="#contact" className="hover:text-gray-900 transition">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-full bg-gray-900 text-white text-sm font-medium px-4 py-2 hover:bg-gray-800 transition-transform hover:scale-[1.03]"
        >
          Get started
        </a>
      </div>
    </header>
  );
}
