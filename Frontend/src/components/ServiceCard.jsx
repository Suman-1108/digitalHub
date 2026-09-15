import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, features = [], badge, onEnquire }) => {
  return (
    <div className="Kaira-card p-6 sm:p-7 flex flex-col justify-between group hover:border-[#30AFFF] transition-all">
      <div>
        {/* Top Icon & Badge */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-12 h-12 rounded-xl bg-[#30AFFF]/10 border border-[#30AFFF]/20 flex items-center justify-center text-[#30AFFF] group-hover:bg-[#30AFFF] group-hover:text-[#070D18] transition-colors">
            {Icon && <Icon className="w-6 h-6" />}
          </div>
          {badge && (
            <span className="badge-bestseller">
              {badge}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-[#1C1D1F] mb-2 group-hover:text-[#30AFFF] transition-colors">
          {title}
        </h3>
        <p className="text-xs text-gray-600 leading-relaxed mb-5">
          {description}
        </p>

        {/* Feature List */}
        {features.length > 0 && (
          <div className="space-y-2 mb-6 pt-4 border-t border-gray-100">
            {features.map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-[#30AFFF] shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Button */}
      <div>
        <button
          onClick={() => onEnquire && onEnquire(title)}
          className="w-full py-2.5 px-4 rounded-lg text-xs font-bold bg-[#070D18] hover:bg-[#30AFFF] text-white hover:text-[#070D18] transition-colors flex items-center justify-center gap-2"
        >
          <span>Get Service Quotation</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
