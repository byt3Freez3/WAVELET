import { createFileRoute } from "@tanstack/react-router";
import { TeamLanding } from "@/components/TeamLanding";
import { EnterpriseFooter } from "@/components/EnterpriseFooter";

export const Route = createFileRoute("/team")({
  component: TeamPage,
  head: () => ({
    meta: [
      { title: "Team Computers — Microsoft Dynamics 365 Partner" },
      {
        name: "description",
        content:
          "Trusted Global Solutions Partner for Microsoft Dynamics 365. Enterprise IT, ERP, and Dynamics 365 solutions powered by Team Computers.",
      },
    ],
  }),
});

function TeamPage() {
  return (
    <div className="min-h-screen font-sans antialiased bg-white text-gray-900">
      <main>
        <TeamLanding />
      </main>
      <EnterpriseFooter />
    </div>
  );
}
