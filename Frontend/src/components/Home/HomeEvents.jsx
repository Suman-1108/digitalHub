import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import EventCard from '../EventCard';

const HomeEvents = ({ events = [], onRegisterEvent }) => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <span className="badge-bestseller mb-2 inline-block">
            Community & Competitions
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#1C1D1F]">
            Upcoming Hackathons & Live Sessions
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Test your engineering prowess, collaborate with peers, and win global recognitions.
          </p>
        </div>
        <Link
          to="/events"
          className="text-xs font-bold text-[#30AFFF] hover:underline flex items-center gap-1"
        >
          <span>Browse Full Event Calendar</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((ev) => (
          <EventCard
            key={ev.id}
            event={ev}
            onRegister={onRegisterEvent}
          />
        ))}
      </div>
    </section>
  );
};

export default HomeEvents;
