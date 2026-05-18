import { StickyServiceCard, type ServiceCardData } from "./StickyServiceCard";
import { PlatformVisual, GrowthVisual, EnterpriseVisual, ConsultancyVisual } from "./ServiceVisuals";

const services: ServiceCardData[] = [
  {
    step: "1/4",
    eyebrow: "Build",
    title: "Complete Digital Platform",
    description:
      "Websites, web apps, and mobile apps — engineered end-to-end with modern stacks and pixel-perfect craft.",
    bullets: ["Marketing websites", "Custom web applications", "iOS & Android apps"],
    gradient: "bg-white",
    accent: "rgb(59 130 246)",
    glow: "shadow-[0_0_80px_-20px_rgba(59,130,246,0.1)]",
    visual: <PlatformVisual />,
  },
  {
    step: "2/4",
    eyebrow: "Grow",
    title: "Digital Growth & Visibility",
    description:
      "Performance marketing, technical SEO, and social strategy that compounds traffic and turns visitors into revenue.",
    bullets: ["SEO & content engines", "Paid acquisition", "Social & brand"],
    gradient: "bg-white",
    accent: "rgb(16 185 129)",
    glow: "shadow-[0_0_80px_-20px_rgba(16,185,129,0.1)]",
    visual: <GrowthVisual />,
  },
  {
    step: "3/4",
    eyebrow: "Operate",
    title: "Enterprise Software Solutions",
    description:
      "OEM licensing, Microsoft Cloud & CRM, endpoint security and antivirus — your entire stack, deployed and managed.",
    bullets: ["Microsoft 365 & Dynamics", "Cloud migration", "Endpoint security"],
    gradient: "bg-white",
    accent: "rgb(249 115 22)",
    glow: "shadow-[0_0_80px_-20px_rgba(249,115,22,0.1)]",
    visual: <EnterpriseVisual />,
  },
  {
    step: "4/4",
    eyebrow: "Advise",
    title: "Expert IT Consultancy",
    description:
      "Strategic guidance for founders and CIOs — architecture, hiring, vendor decisions and roadmaps that scale with you.",
    bullets: ["Tech audits", "Roadmap & architecture", "Fractional CTO"],
    gradient: "bg-white",
    accent: "rgb(139 92 246)",
    glow: "shadow-[0_0_80px_-20px_rgba(139,92,246,0.1)]",
    visual: <ConsultancyVisual />,
  },
];

export function ServicesStack() {
  const stickyClasses = [
    "sticky top-24 z-10",
    "sticky top-32 z-20",
    "sticky top-40 z-30",
    "sticky top-48 z-40",
  ];

  return (
    <section id="services" className="relative w-full min-h-[300vh] bg-transparent py-10 px-2 sm:px-4">
      <div className="mx-auto max-w-6xl text-center pt-6 pb-8 px-4">
        <span className="inline-flex items-center rounded-full bg-gray-50 border border-gray-200 px-4 py-1.5 text-xs font-bold text-gray-600 uppercase tracking-widest shadow-sm">
          What we do
        </span>
        <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[1]">
          Four pillars.
          <br />
          <span className="text-gray-400">One partner.</span>
        </h2>
        <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-xl mx-auto">
          Scroll through the stack — every layer of your IT, considered.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col gap-8 pb-16">
        {services.map((s, i) => (
          <div key={s.step} className={`${stickyClasses[i]} w-full`}>
            <StickyServiceCard data={s} index={i} total={services.length} />
          </div>
        ))}
      </div>
    </section>
  );
}
