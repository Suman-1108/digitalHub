import React from 'react';
import { PlayCircle, Users, Award, Briefcase } from 'lucide-react';

const ValueProposition = () => {
  return (
    <section className="bg-white border-y border-gray-200 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#30AFFF]/15 text-[#30AFFF] flex items-center justify-center shrink-0">
              <PlayCircle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1C1D1F]">50+ In-Demand Courses</h4>
              <p className="text-[11px] text-gray-500">Learn production-grade code</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#92EEFF]/25 text-[#070D18] flex items-center justify-center shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1C1D1F]">Expert Industry Mentors</h4>
              <p className="text-[11px] text-gray-500">Active enterprise architects</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#D8FFC5] text-[#070D18] flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1C1D1F]">Verified Diploma Diplomas</h4>
              <p className="text-[11px] text-gray-500">Cryptographically verifiable</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-[#C4F7CA] text-[#070D18] flex items-center justify-center shrink-0">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-[#1C1D1F]">Enterprise Solutions</h4>
              <p className="text-[11px] text-gray-500">Full-lifecycle web & AI apps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
