import { motion } from "framer-motion";

const RazorpayLogo = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8 text-blue-400" fill="currentColor">
    <path d="M19.7 2.5l-5.6 12.1L8.5 2.5H2l10.3 21.5 10.3-21.5h-2.9z" />
  </svg>
);

const AWSLogo = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8 text-gray-900 group-hover:text-orange-400 transition-colors duration-300" fill="currentColor">
    <path d="M18.1 14.1c-1.4 1-3.6 1.6-5.8 1.6-3.1 0-5.8-1.4-7.3-3.6-.3-.4-.1-.8.4-1l1.1-.6c.4-.2.9-.1 1.1.3 1.1 1.4 2.9 2.4 4.8 2.4 1.6 0 3.2-.7 4.4-1.8.4-.4.8-.3 1.1.1l.8 1.1c.3.5.1 1-.5 1.5z" />
  </svg>
);

const MicrosoftLogo = () => (
  <svg viewBox="0 0 23 23" className="h-8 w-8">
    <rect x="0" y="0" width="11" height="11" fill="#f25022" />
    <rect x="12" y="0" width="11" height="11" fill="#7fba00" />
    <rect x="0" y="12" width="11" height="11" fill="#00a4ef" />
    <rect x="12" y="12" width="11" height="11" fill="#ffb900" />
  </svg>
);

const MetaLogo = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8 text-blue-400" fill="currentColor">
    <path d="M17.5 7c-1.9 0-3.6 1-4.6 2.5C11.9 8 10.2 7 8.3 7 5.1 7 2.5 9.5 2.5 12.7s2.6 5.7 5.8 5.7c1.9 0 3.6-1 4.6-2.5 1 1.5 2.7 2.5 4.6 2.5 3.2 0 5.8-2.6 5.8-5.7S20.7 7 17.5 7zm-9.2 9.4c-2.1 0-3.8-1.7-3.8-3.7s1.7-3.7 3.8-3.7c1.4 0 2.6.7 3.3 1.9-.8 1.1-.8 2.5 0 3.6-.7 1.2-1.9 1.9-3.3 1.9zm9.2 0c-1.4 0-2.6-.7-3.3-1.9.8-1.1.8-2.5 0-3.6.7-1.2 1.9-1.9 3.3-1.9 2.1 0 3.8 1.7 3.8 3.7s-1.7 3.7-3.8 3.7z" />
  </svg>
);

const ReactLogo = () => (
  <svg viewBox="-11.5 -10.2 23 20.5" className="h-8 w-8 text-cyan-400" fill="none" stroke="currentColor">
    <circle r="2.05" fill="currentColor" stroke="none" />
    <g strokeWidth="1.5">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 24 24" className="h-8 w-8 text-cyan-400" fill="currentColor">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 5.182 14.976 3.8 12.001 3.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 12.382 8.976 11 6.001 11z" />
  </svg>
);

const stack = [
  { name: "React", logo: <ReactLogo />, glow: "group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]" },
  { name: "AWS", logo: <AWSLogo />, glow: "group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)]" },
  { name: "Microsoft", logo: <MicrosoftLogo />, glow: "group-hover:shadow-[0_0_30px_-5px_rgba(242,80,34,0.2)]" },
  { name: "Meta", logo: <MetaLogo />, glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]" },
  { name: "Razorpay", logo: <RazorpayLogo />, glow: "group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]" },
  { name: "Tailwind", logo: <TailwindLogo />, glow: "group-hover:shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)]" },
];

export function TechEcosystem() {
  return (
    <section className="px-4 py-8 sm:py-12 bg-transparent overflow-hidden">
      <div className="mx-auto max-w-5xl">
        <div className="text-center mb-6 sm:mb-8 max-w-2xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 font-bold">Ecosystem Sync</span>
          <h2 className="mt-5 text-4xl sm:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.05]">
            Seamlessly integrating with your
            <br />
            <span className="text-gray-400">favorite modern stack.</span>
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {stack.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1]
              }}
              className={`group w-28 h-28 sm:w-32 sm:h-32 rounded-[2rem] bg-white backdrop-blur-xl border border-gray-200 flex flex-col items-center justify-center gap-3 transition-all duration-500 hover:-translate-y-3 hover:border-gray-300 shadow-md hover:shadow-lg ${s.glow}`}
            >
              <div className="h-12 w-12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                {s.logo}
              </div>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest group-hover:text-gray-900 transition-colors duration-300">{s.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
