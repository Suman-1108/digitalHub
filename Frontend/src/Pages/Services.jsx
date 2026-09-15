import React, { useState } from 'react';
import {
  Code2,
  Cpu,
  Cloud,
  Smartphone,
  Palette,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Zap,
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';

const Services = ({ onOpenEnquiry }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const servicesList = [
    {
      category: 'Development',
      icon: Code2,
      title: 'Full-Stack Web Engineering',
      description:
        'End-to-end web applications crafted with React, Next.js, Node.js, and Go. High throughput, resilient microservices, and lightning-fast SEO rendering.',
      features: [
        'Component design systems with Tailwind & Framer',
        'State-of-the-art API gateways & GraphQL endpoints',
        'High-concurrency caching with Redis and CDN edge',
      ],
      badge: 'Bestseller',
    },
    {
      category: 'AI & Data',
      icon: Cpu,
      title: 'Enterprise AI & Machine Learning',
      description:
        'Transform business operations with custom LLMs, automated retrieval augmented generation (RAG), conversational AI, and computer vision.',
      features: [
        'Private LLM hosting with zero data leakage',
        'Intelligent document extraction & OCR pipelines',
        'Autonomous AI agent tool-calling networks',
      ],
      badge: 'Cutting Edge',
    },
    {
      category: 'Cloud',
      icon: Cloud,
      title: 'Cloud Architecture & DevOps',
      description:
        'Modernize legacy monoliths into Kubernetes-orchestrated, auto-scaling multi-region cloud infrastructures on AWS, Azure, or GCP.',
      features: [
        'Infrastructure as Code using Terraform & Pulumi',
        'Automated blue/green zero-downtime CI/CD pipelines',
        'Real-time observability with Grafana, Prometheus & Datadog',
      ],
      badge: 'Enterprise',
    },
    {
      category: 'Mobile',
      icon: Smartphone,
      title: 'Cross-Platform Mobile Apps',
      description:
        'Fluid iOS and Android experiences built with React Native and Flutter. 60 FPS animations, offline data persistence, and native device feature integration.',
      features: [
        'Offline-first synchronization with SQLite & WatermelonDB',
        'Biometric authentication & in-app purchases',
        'Automated Fastlane deployment to App Store & Google Play',
      ],
      badge: 'Popular',
    },
    {
      category: 'Design',
      icon: Palette,
      title: 'UI/UX & Product Design Systems',
      description:
        'User-centric research, design systems, interactive prototypes in Figma, and usability audits tailored to high-conversion product funnels.',
      features: [
        'Complete Design Systems & Token libraries',
        'Interactive Figma high-fidelity prototypes',
        'Usability heuristics testing & UX score improvements',
      ],
      badge: 'Creative',
    },
    {
      category: 'Security',
      icon: ShieldCheck,
      title: 'Cybersecurity & QA Automation',
      description:
        'Penetration testing, code security audits, OWASP vulnerability scanning, and automated end-to-end test suites using Playwright and Cypress.',
      features: [
        'Automated CI/CD security gating and SAST/DAST scans',
        'SOC2 & GDPR compliance readiness frameworks',
        'End-to-End stress & regression test harnesses',
      ],
      badge: 'Critical',
    },
  ];

  const categories = ['All', 'Development', 'AI & Data', 'Cloud', 'Mobile', 'Design', 'Security'];

  const filteredServices =
    activeCategory === 'All'
      ? servicesList
      : servicesList.filter((s) => s.category === activeCategory);

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <span className="badge-popular mb-2 inline-block">
            Digital Engineering Studio
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1C1D1F]">
            Enterprise Technology & Digital Services
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Production-grade software engineering, AI pipelines, and cloud architectures built for high-growth enterprises.
          </p>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto border-b border-gray-200 pb-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-bold whitespace-nowrap transition-colors rounded-t-lg ${
                  activeCategory === cat
                    ? 'text-[#30AFFF] border-b-2 border-[#30AFFF] font-black'
                    : 'text-gray-600 hover:text-[#1C1D1F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map((svc, idx) => (
            <ServiceCard
              key={idx}
              icon={svc.icon}
              title={svc.title}
              description={svc.description}
              features={svc.features}
              badge={svc.badge}
              onEnquire={onOpenEnquiry}
            />
          ))}
        </div>

        {/* Delivery Process Banner */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-10 mb-12 shadow-xs">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="badge-bestseller mb-2 inline-block">How We Deliver</span>
            <h2 className="text-2xl font-black text-[#1C1D1F]">Our 4-Stage Agile Delivery Model</h2>
            <p className="text-xs text-gray-500 mt-1">Transparent 2-week sprints with GitHub PR tracking and automated testing.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-gray-100">
              <span className="text-2xl font-black text-[#30AFFF] block mb-2">01</span>
              <h4 className="text-sm font-bold text-[#1C1D1F] mb-1">Architecture Discovery</h4>
              <p className="text-xs text-gray-500">Requirements analysis, technical specs, and milestone planning.</p>
            </div>
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-gray-100">
              <span className="text-2xl font-black text-[#30AFFF] block mb-2">02</span>
              <h4 className="text-sm font-bold text-[#1C1D1F] mb-1">Sprint Execution</h4>
              <p className="text-xs text-gray-500">Iterative feature development with weekly interactive demos.</p>
            </div>
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-gray-100">
              <span className="text-2xl font-black text-[#30AFFF] block mb-2">03</span>
              <h4 className="text-sm font-bold text-[#1C1D1F] mb-1">Automated QA & Security</h4>
              <p className="text-xs text-gray-500">Unit tests, OWASP vulnerability scans, and load benchmarking.</p>
            </div>
            <div className="p-5 rounded-xl bg-[#F8FAFC] border border-gray-100">
              <span className="text-2xl font-black text-[#30AFFF] block mb-2">04</span>
              <h4 className="text-sm font-bold text-[#1C1D1F] mb-1">Zero-Downtime Launch</h4>
              <p className="text-xs text-gray-500">Cloud deployment, automated monitoring, and 24/7 SLA support.</p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#070D18] rounded-2xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
          <div>
            <h3 className="text-2xl font-black">Need custom enterprise architecture or a technical audit?</h3>
            <p className="text-xs text-gray-400 mt-1">Speak directly with a Solutions Architect within 24 hours.</p>
          </div>
          <button
            onClick={() => onOpenEnquiry('Custom Enterprise Architecture')}
            className="btn-udemy-primary text-xs shrink-0"
          >
            <span>Request Architectural Discovery</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
