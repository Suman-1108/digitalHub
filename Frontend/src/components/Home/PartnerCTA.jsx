import React from 'react';
import { Link } from 'react-router-dom';

const PartnerCTA = ({ onOpenEnquiry }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-2xl bg-gradient-to-r from-[#070D18] to-[#142642] p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="space-y-3 max-w-xl">
          <span className="badge-bestseller">
            Partner With Us
          </span>
          <h3 className="text-2xl sm:text-3xl font-black">
            Become an instructor or build enterprise products
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Share your engineering mastery with thousands of learners around the globe, or partner with our technology studio for custom product engineering.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenEnquiry && onOpenEnquiry('Instructor / Partner Application')}
            className="btn-Kaira-primary text-xs"
          >
            Apply as Instructor / Partner
          </button>
          <Link
            to="/contact"
            className="px-4 py-2.5 rounded-lg text-xs font-bold bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PartnerCTA;
