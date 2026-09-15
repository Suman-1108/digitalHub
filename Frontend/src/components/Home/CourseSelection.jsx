import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseCard from '../CourseCard';

const CourseSelection = ({ courses = [], onEnrollCourse }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Web Development',
    'AI & Data',
    'Cloud & DevOps',
    'Mobile Apps',
    'Cybersecurity',
  ];

  const filteredCourses =
    selectedCategory === 'All'
      ? courses
      : courses.filter((c) => c.category === selectedCategory);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="space-y-2 mb-6">
        <h2 className="text-2xl sm:text-3xl font-black text-[#1C1D1F]">
          A broad selection of courses
        </h2>
        <p className="text-xs sm:text-sm text-gray-600">
          Choose from top in-demand academy cohorts with hands-on code reviews and real-world repositories.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto border-b border-gray-200 pb-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 text-xs font-bold whitespace-nowrap transition-colors rounded-t-lg ${
              selectedCategory === cat
                ? 'text-[#30AFFF] border-b-2 border-[#30AFFF] font-black'
                : 'text-gray-600 hover:text-[#1C1D1F]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Selected Category Info Banner */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-[#1C1D1F]">
            Expand your tech horizons in {selectedCategory === 'All' ? 'Software Engineering' : selectedCategory}
          </h3>
          <p className="text-xs text-gray-500 mt-1 max-w-2xl">
            Master the foundational and advanced techniques required by top tech teams worldwide. 100% project-based with Git workflow.
          </p>
        </div>
        <Link
          to="/courses"
          className="px-4 py-2 rounded-lg text-xs font-bold bg-[#F1F5F9] hover:bg-gray-200 text-[#1C1D1F] transition-colors shrink-0"
        >
          Explore all {selectedCategory} courses
        </Link>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            onEnroll={onEnrollCourse}
          />
        ))}
      </div>
    </section>
  );
};

export default CourseSelection;
