import React from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

const EventCard = ({ event, onRegister }) => {
  const {
    title,
    category = 'Workshop',
    date = 'Oct 24, 2026',
    time = '10:00 AM - 1:00 PM EST',
    location = 'Virtual Live Session',
    speaker = 'Alex Rivera, Chief Architect',
    seatsLeft = 14,
    description,
  } = event;

  return (
    <div className="udemy-card p-6 flex flex-col justify-between group hover:border-[#30AFFF] transition-all">
      <div>
        {/* Category & Status */}
        <div className="flex items-center justify-between gap-2 mb-4">
          <span className="badge-popular">
            {category}
          </span>
          {seatsLeft && (
            <span className="text-[11px] font-bold text-[#070D18] bg-[#D8FFC5] px-2.5 py-0.5 rounded">
              {seatsLeft} seats remaining
            </span>
          )}
        </div>

        {/* Date Row */}
        <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F8FAFC] border border-gray-100 mb-4">
          <div className="w-12 h-12 rounded-lg bg-[#30AFFF] flex flex-col items-center justify-center text-[#070D18] font-bold shrink-0">
            <span className="text-[10px] uppercase leading-none font-bold">
              {date.split(' ')[0]}
            </span>
            <span className="text-base leading-tight font-black">
              {date.split(' ')[1]?.replace(',', '')}
            </span>
          </div>
          <div>
            <div className="text-xs font-bold text-[#1C1D1F] flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#30AFFF]" />
              <span>{date}</span>
            </div>
            <div className="text-[11px] text-gray-500 flex items-center gap-1.5 mt-0.5">
              <Clock className="w-3.5 h-3.5 text-gray-400" />
              <span>{time}</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-[#1C1D1F] group-hover:text-[#30AFFF] transition-colors mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-2">
          {description}
        </p>

        {/* Speaker & Venue */}
        <div className="space-y-1.5 mb-5 text-xs text-gray-600">
          <div className="flex items-center gap-2">
            <Users className="w-3.5 h-3.5 text-[#30AFFF]" />
            <span>Speaker: <strong className="text-[#1C1D1F]">{speaker}</strong></span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-gray-400" />
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs font-bold text-gray-500">Free Registration</span>
        <button
          onClick={() => onRegister && onRegister(event)}
          className="px-4 py-2 rounded-lg text-xs font-bold bg-[#30AFFF] hover:bg-[#1694e5] text-[#070D18] hover:text-white transition-colors flex items-center gap-1.5"
        >
          <span>Reserve Seat</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default EventCard;
