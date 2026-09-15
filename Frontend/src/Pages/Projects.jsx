import React, { useState } from 'react';
import { Rocket, Sparkles, Filter, ExternalLink } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const projectsList = [
    {
      title: 'FinEdge Cloud Banking Core',
      category: 'Fintech',
      description:
        'High-frequency transaction engine with sub-millisecond fraud detection and real-time multi-currency ledger settlement.',
      techStack: ['React', 'Node.js', 'Redis', 'Kafka', 'PostgreSQL'],
      metric: '99.999% SLA',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'PulseHealth AI Diagnostic Suite',
      category: 'HealthTech',
      description:
        'HIPAA-compliant telemedicine and automated imaging triage assisting clinicians across 40+ healthcare centers.',
      techStack: ['Next.js', 'Python', 'FastAPI', 'PyTorch', 'AWS'],
      metric: '4x Faster Triage',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'OmniChain Logistics & Supply Radar',
      category: 'Enterprise',
      description:
        'Real-time IoT telemetry tracker and automated route optimization engine handling 50,000+ daily freight movements.',
      techStack: ['Go', 'React', 'MongoDB', 'Docker', 'Google Cloud'],
      metric: '-32% Latency',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'KairaDocs AI Knowledge Engine',
      category: 'AI SaaS',
      description:
        'Intelligent enterprise documentation assistant with live semantic vector search, Slack sync, and SOC2 compliant encryption.',
      techStack: ['TypeScript', 'FastAPI', 'Qdrant', 'Tailwind', 'Next.js'],
      metric: '85% Query Resolution',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'ShopFlow Next-Gen Headless Commerce',
      category: 'E-Commerce',
      description:
        'Ultra-fast headless commerce platform with sub-second page loads, international tax calculators, and dynamic checkout.',
      techStack: ['Next.js', 'Stripe', 'Node.js', 'Redis', 'TailwindCSS'],
      metric: '+64% Conversion',
      demoUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'DevGuard Automated CI Security Scanner',
      category: 'DevTools',
      description:
        'Developer-first security CLI and GitHub Action that identifies hardcoded secrets, misconfigurations, and vulnerable packages.',
      techStack: ['Rust', 'React', 'Electron', 'Node.js', 'Docker'],
      metric: '12k+ Repo Installs',
      demoUrl: '#',
      githubUrl: '#',
    },
  ];

  const categories = ['All', 'Fintech', 'HealthTech', 'Enterprise', 'AI SaaS', 'E-Commerce', 'DevTools'];

  const filteredProjects =
    activeCategory === 'All'
      ? projectsList
      : projectsList.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <span className="badge-popular mb-2 inline-block">
            Proven Track Record
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1C1D1F]">
            Client Projects & Case Studies
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Real production systems engineered for performance, security, and enterprise reliability.
          </p>

          {/* Filter Bar */}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredProjects.map((p, idx) => (
            <ProjectCard key={idx} project={p} />
          ))}
        </div>

        {/* Impact Numbers */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center shadow-xs">
          <div>
            <span className="text-3xl font-black text-[#1C1D1F] block">$120M+</span>
            <span className="text-xs text-gray-500">Client Revenue Enabled</span>
          </div>
          <div>
            <span className="text-3xl font-black text-[#30AFFF] block">50+</span>
            <span className="text-xs text-gray-500">Production Systems Shipped</span>
          </div>
          <div>
            <span className="text-3xl font-black text-[#070D18] block">100%</span>
            <span className="text-xs text-gray-500">Sprint On-Time SLA</span>
          </div>
          <div>
            <span className="text-3xl font-black text-[#1C1D1F] block">4.9 / 5</span>
            <span className="text-xs text-gray-500">Average Client Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
