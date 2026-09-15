import React, { useState } from 'react';
import { Calendar, Users, Sparkles, Filter, MapPin } from 'lucide-react';
import EventCard from '../components/EventCard';

const Events = ({ onRegisterEvent }) => {
  const [filterType, setFilterType] = useState('All');

  const eventsList = [
    {
      id: 'ev-1',
      title: 'Kaira HackFest 2026: AI Agents & Web3 Fusion',
      category: 'Hackathon',
      date: 'Nov 12, 2026',
      time: '09:00 AM - 06:00 PM EST',
      location: 'Hybrid • Boston Tech Hub & Global Virtual',
      speaker: 'Sarah Chen (Lead AI Scientist)',
      seatsLeft: 14,
      description:
        'A 36-hour continuous build sprint where developers build autonomous agentic workflows and multi-modal apps. $25k in cash prizes.',
    },
    {
      id: 'ev-2',
      title: 'Architecting Scalable Microservices at Scale',
      category: 'Webinar',
      date: 'Nov 18, 2026',
      time: '02:00 PM - 04:00 PM EST',
      location: 'Live Stream via Zoom',
      speaker: 'David Miller (Principal Architect)',
      seatsLeft: 38,
      description:
        'Event-driven architecture deep-dive: message queues, database sharding, idempotent consumers, and resilient disaster recovery.',
    },
    {
      id: 'ev-3',
      title: 'Zero-Trust Cloud Security & K8s Hardening',
      category: 'Workshop',
      date: 'Nov 26, 2026',
      time: '11:00 AM - 02:00 PM EST',
      location: 'Interactive Google Meet Lab',
      speaker: 'Priya Patel (Cloud Security Lead)',
      seatsLeft: 22,
      description:
        'Hands-on lab deploying Falco, Cilium eBPF, secret managers, and automated security posture scoring on Kubernetes clusters.',
    },
    {
      id: 'ev-4',
      title: 'Global Tech Leaders Roundtable 2026',
      category: 'Summit',
      date: 'Dec 05, 2026',
      time: '10:00 AM - 05:00 PM EST',
      location: 'Virtual Worldwide Broadcast',
      speaker: 'Panel of 8 Silicon Valley CTOs',
      seatsLeft: 75,
      description:
        'High-level discussions on enterprise AI adoption, agentic software pipelines, developer productivity metrics, and hiring trends.',
    },
    {
      id: 'ev-5',
      title: 'React 19 & Next.js Server Actions Workshop',
      category: 'Workshop',
      date: 'Dec 12, 2026',
      time: '01:00 PM - 03:30 PM EST',
      location: 'Hands-on Code-along Stream',
      speaker: 'Marcus Vance (Senior Frontend Lead)',
      seatsLeft: 30,
      description:
        'Step-by-step implementation of React 19 hooks, optimistic mutations, server components, and streaming SSR architecture.',
    },
  ];

  const categories = ['All', 'Hackathon', 'Webinar', 'Workshop', 'Summit'];

  const filteredEvents =
    filterType === 'All'
      ? eventsList
      : eventsList.filter((e) => e.category === filterType);

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <span className="badge-popular mb-2 inline-block">
            Global Tech Community
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1C1D1F]">
            Upcoming Hackathons, Workshops & Webinars
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Free live sessions, interactive coding workshops, and high-stakes hackathons with cash prizes.
          </p>

          {/* Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto border-b border-gray-200 pb-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterType(cat)}
                className={`px-4 py-2 text-xs font-bold whitespace-nowrap transition-colors rounded-t-lg ${
                  filterType === cat
                    ? 'text-[#30AFFF] border-b-2 border-[#30AFFF] font-black'
                    : 'text-gray-600 hover:text-[#1C1D1F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredEvents.map((ev) => (
            <EventCard key={ev.id} event={ev} onRegister={onRegisterEvent} />
          ))}
        </div>

        {/* Sponsor Banner */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div>
            <span className="badge-bestseller mb-1 inline-block">Community Partnership</span>
            <h3 className="text-xl font-bold text-[#1C1D1F]">
              Want to co-host an event or sponsor a hackathon?
            </h3>
            <p className="text-xs text-gray-500 mt-1 max-w-xl">
              Partner with Kaira DigitalHub to reach 20,000+ active software engineers, architects, and technical leaders worldwide.
            </p>
          </div>
          <button
            onClick={() => onRegisterEvent({ title: 'Hackathon / Event Sponsor Inquiry' })}
            className="btn-udemy-primary text-xs shrink-0"
          >
            Become a Partner Sponsor
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
