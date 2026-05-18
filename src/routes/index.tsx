import { createFileRoute } from "@tanstack/react-router";
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
      { title: "Wavelet — Your One-Stop IT Solution Provider" },
      {
        name: "description",
        content:
          "Scale your business with Wavelet — enterprise-grade digital platforms, growth marketing, cloud solutions, and expert consultancy.",
      },
      { property: "og:title", content: "Wavelet — Your One-Stop IT Solution Provider" },
      {
        property: "og:description",
        content: "Digital platforms, growth, enterprise software and IT consultancy — all powered by Wavelet.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen font-sans antialiased bg-[#D5EAEC] text-gray-900">
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
