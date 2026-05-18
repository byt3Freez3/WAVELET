import { createFileRoute } from '@tanstack/react-router';
import { ServiceLandingTemplate, ServiceData } from '@/components/ServiceLandingTemplate';
import { Code2, Cpu, Globe, Database, Smartphone, Shield } from 'lucide-react';

export const Route = createFileRoute('/services/software-services')({
  component: SoftwareServicesRoute,
});

const softwareServicesData: ServiceData = {
  title: "Software Services",
  subtitle: "We architect, build, and scale enterprise-grade software solutions that drive operational efficiency and unlock new revenue streams for global brands.",
  stats: [
    { value: "15+", label: "Years Experience" },
    { value: "500+", label: "Projects Delivered" },
    { value: "50M+", label: "Users Reached" },
    { value: "24/7", label: "Support & Maintenance" }
  ],
  subServices: [
    { title: "Custom App Dev", description: "Bespoke software solutions tailored to your unique business workflows.", gradient: "from-blue-600 to-indigo-600" },
    { title: "SaaS Platforms", description: "Scalable, multi-tenant architectures designed for high-growth digital products.", gradient: "from-purple-600 to-violet-600" },
    { title: "Legacy Modernization", description: "Transforming monolithic systems into agile, cloud-native microservices.", gradient: "from-cyan-500 to-blue-500" },
    { title: "API Ecosystems", description: "Building robust, secure integration layers for seamless data connectivity.", gradient: "from-emerald-500 to-teal-600" }
  ],
  media: [
    { title: "Enterprise Architecture Planning", image: "" },
    { title: "Scalable Cloud Deployment", image: "" }
  ],
  features: [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Tailored applications built from the ground up to address your unique business challenges.",
      iconColor: "bg-blue-600"
    },
    {
      icon: Cpu,
      title: "Legacy Modernization",
      description: "Upgrade and migrate outdated systems to modern, cloud-native architectures.",
      iconColor: "bg-purple-600"
    },
    {
      icon: Globe,
      title: "API Integration",
      description: "Seamlessly connect disparate systems and third-party services to unify your data.",
      iconColor: "bg-cyan-600"
    }
  ],
  alliances: ["AWS", "MICROSOFT", "GOOGLE CLOUD", "DOCKER", "KUBERNETES"],
  faqs: [
    { question: "What technologies do you specialize in?", answer: "We are proficient in modern stacks including React, Node.js, Go, Python, and cloud-native technologies across AWS, Azure, and GCP." },
    { question: "How do you ensure software quality?", answer: "We employ rigorous CI/CD pipelines, automated testing, and peer code reviews to maintain the highest standards of reliability." }
  ]
};

function SoftwareServicesRoute() {
  return <ServiceLandingTemplate data={softwareServicesData} />;
}
