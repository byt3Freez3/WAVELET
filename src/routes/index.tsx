import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { ServicesStack } from "@/components/ServicesStack";
import { StatsBar } from "@/components/StatsBar";
import { BentoGrid } from "@/components/BentoGrid";
import { TechEcosystem } from "@/components/TechEcosystem";
import { EnterpriseFooter } from "@/components/EnterpriseFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Nexus IT — Your One-Stop IT Solution Provider" },
      {
        name: "description",
        content:
          "Scale your business with enterprise-grade IT — digital platforms, growth marketing, Microsoft Cloud, and expert consultancy from one trusted partner.",
      },
      { property: "og:title", content: "Nexus IT — Your One-Stop IT Solution Provider" },
      {
        property: "og:description",
        content: "Digital platforms, growth, enterprise software and IT consultancy — under one roof.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen font-sans antialiased" style={{ backgroundColor: "#fbfbfd", fontFamily: "var(--font-sans)" }}>
      <SiteHeader />
      <main>
        <Hero />
        <StatsBar />
        <ServicesStack />
        <BentoGrid />
        <TechEcosystem />
      </main>
      <EnterpriseFooter />
    </div>
  );
}
