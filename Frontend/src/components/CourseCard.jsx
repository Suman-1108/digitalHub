import React from 'react';
import { Star, Clock, Users, ArrowRight, Check } from 'lucide-react';

const CourseCard = ({ course, onEnroll }) => {
  const {
    id,
    title,
    instructor = 'Kaira Tech Academy Lead',
    duration = '8 Weeks',
    level = 'All Levels',
    rating = 4.8,
    reviewsCount = '1,480',
    price = '$24.99',
    originalPrice = '$89.99',
    badge = 'Bestseller',
    tags = ['React', 'Node.js', 'Cloud'],
    imageGradient = 'from-[#30AFFF] to-[#0A1A30]',
  } = course;

  return (
    <div
      onClick={() => onEnroll && onEnroll(course)}
      className="Kaira-card group flex flex-col justify-between overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-200"
    >
      <div>
        {/* Course Thumbnail Banner */}
        <div className={`relative h-44 w-full bg-gradient-to-tr ${imageGradient} p-4 flex flex-col justify-between overflow-hidden`}>
          {/* Subtle Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* Top Tag */}
          <div className="relative z-10 flex items-center justify-between">
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-black/40 text-white backdrop-blur-xs">
              {level}
            </span>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/20 text-white backdrop-blur-xs flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#92EEFF]" />
              {duration}
            </span>
          </div>

          {/* Bottom Banner Title preview */}
          <div className="relative z-10">
            <div className="flex flex-wrap gap-1 mb-1">
              {tags.slice(0, 2).map((t, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-white/90 text-[#070D18]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Content Details (Kaira Typography) */}
        <div className="p-4 space-y-1.5">
          {/* Title */}
          <h3 className="text-sm sm:text-base font-bold text-[#1C1D1F] line-clamp-2 leading-snug group-hover:text-[#30AFFF] transition-colors">
            {title}
          </h3>

          {/* Instructor */}
          <p className="text-xs text-gray-500 font-medium">
            {instructor}
          </p>

          {/* Rating Strip */}
          <div className="flex items-center gap-1 text-xs pt-0.5">
            <span className="font-extrabold text-[#B4690E]">{rating}</span>
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-gray-400 text-[11px]">({reviewsCount})</span>
          </div>

          {/* Pricing Strip */}
          <div className="flex items-baseline gap-2 pt-1">
            <span className="text-base font-black text-[#1C1D1F]">
              {price}
            </span>
            {originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                {originalPrice}
              </span>
            )}
          </div>

          {/* Badge Pill */}
          <div className="pt-1.5">
            {badge === 'Bestseller' ? (
              <span className="badge-bestseller">
                Bestseller
              </span>
            ) : badge === 'Highest Rated' ? (
              <span className="badge-popular">
                Highest Rated
              </span>
            ) : (
              <span className="badge-mint">
                {badge}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-4 pt-0">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onEnroll && onEnroll(course);
          }}
          className="w-full py-2 rounded-lg text-xs font-bold bg-[#F1F5F9] group-hover:bg-[#30AFFF] text-[#1C1D1F] group-hover:text-[#070D18] transition-colors flex items-center justify-center gap-1.5"
        >
          <span>Enroll Now</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
