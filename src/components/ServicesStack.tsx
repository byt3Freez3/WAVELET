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
    gradient: "var(--gradient-blue)",
    accent: "rgb(59 130 246)",
    visual: <PlatformVisual />,
  },
  {
    step: "2/4",
    eyebrow: "Grow",
    title: "Digital Growth & Visibility",
    description:
      "Performance marketing, technical SEO, and social strategy that compounds traffic and turns visitors into revenue.",
    bullets: ["SEO & content engines", "Paid acquisition", "Social & brand"],
    gradient: "var(--gradient-mint)",
    accent: "rgb(16 185 129)",
    visual: <GrowthVisual />,
  },
  {
    step: "3/4",
    eyebrow: "Operate",
    title: "Enterprise Software Solutions",
    description:
      "OEM licensing, Microsoft Cloud & CRM, endpoint security and antivirus — your entire stack, deployed and managed.",
    bullets: ["Microsoft 365 & Dynamics", "Cloud migration", "Endpoint security"],
    gradient: "var(--gradient-peach)",
    accent: "rgb(249 115 22)",
    visual: <EnterpriseVisual />,
  },
  {
    step: "4/4",
    eyebrow: "Advise",
    title: "Expert IT Consultancy",
    description:
      "Strategic guidance for founders and CIOs — architecture, hiring, vendor decisions and roadmaps that scale with you.",
    bullets: ["Tech audits", "Roadmap & architecture", "Fractional CTO"],
    gradient: "var(--gradient-lavender)",
    accent: "rgb(139 92 246)",
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
    <section id="services" className="relative w-full min-h-[300vh] bg-[#fbfbfd] py-20 px-2 sm:px-4">
      <div className="mx-auto max-w-6xl text-center pt-10 pb-16 px-4">
        <span className="inline-flex items-center rounded-full bg-white border border-gray-100 px-4 py-1.5 text-xs font-medium text-gray-600">
          What we do
        </span>
        <h2 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.03em] text-gray-900 leading-[1]">
          Four pillars.
          <br />
          One partner.
        </h2>
        <p className="mt-5 text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
          Scroll through the stack — every layer of your IT, considered.
        </p>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 flex flex-col gap-8 pb-32">
        {services.map((s, i) => (
          <div key={s.step} className={`${stickyClasses[i]} w-full`}>
            <StickyServiceCard data={s} index={i} total={services.length} />
          </div>
        ))}
      </div>
    </section>
  );
}
