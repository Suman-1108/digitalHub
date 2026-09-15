import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ServiceCard from '../ServiceCard';

const HomeServices = ({ services = [], onOpenEnquiry }) => {
  return (
    <section className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="badge-popular mb-2 inline-block">
              Digital Transformation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#1C1D1F]">
              DigitalHub Enterprise Engineering Services
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Beyond education — we build, scale, and secure mission-critical software for fast-growing companies.
            </p>
          </div>
          <Link
            to="/services"
            className="text-xs font-bold text-[#30AFFF] hover:underline flex items-center gap-1"
          >
            <span>View All Specialized Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((svc, idx) => (
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
      </div>
    </section>
  );
};

export default HomeServices;
