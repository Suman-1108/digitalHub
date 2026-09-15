import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, Award, Star, BookOpen } from 'lucide-react';
import CourseCard from '../components/CourseCard';

const Courses = ({ onEnrollCourse }) => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTrack, setSelectedTrack] = useState('All');

  // Read URL query parameter if search was initiated from navbar
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('search');
    if (query) {
      setSearchTerm(query);
    }
  }, [location.search]);

  const coursesData = [
    {
      id: 101,
      title: 'Full-Stack MERN Architecture: Production-Grade Web Apps',
      instructor: 'Dr. Sarah Chen, Principal Architect',
      duration: '10 Weeks',
      level: 'All Levels',
      rating: 4.9,
      reviewsCount: '2,840',
      price: '$24.99',
      originalPrice: '$89.99',
      badge: 'Bestseller',
      track: 'Web',
      tags: ['React', 'Node.js', 'MongoDB', 'Docker', 'AWS'],
      imageGradient: 'from-[#30AFFF] to-[#0A1A30]',
      description:
        'Master end-to-end full stack development from clean databases to scalable frontend state and production deployments.',
    },
    {
      id: 102,
      title: 'Generative AI & Autonomous Agentic Systems Masterclass',
      instructor: 'Marcus Vance, Senior AI Lead',
      duration: '8 Weeks',
      level: 'Intermediate',
      rating: 4.95,
      reviewsCount: '1,920',
      price: '$29.99',
      originalPrice: '$99.99',
      badge: 'Highest Rated',
      track: 'AI',
      tags: ['Python', 'LangChain', 'Llama 3', 'Vector DB', 'RAG'],
      imageGradient: 'from-[#92EEFF] to-[#0A1A30]',
      description:
        'Build real-world multi-agent applications, embeddings pipelines, and enterprise automation bots from scratch.',
    },
    {
      id: 103,
      title: 'Kubernetes, Docker & Multi-Cloud CI/CD DevOps Bootcamp',
      instructor: 'David Miller, Cloud DevOps Lead',
      duration: '8 Weeks',
      level: 'Intermediate to Pro',
      rating: 4.88,
      reviewsCount: '1,410',
      price: '$22.99',
      originalPrice: '$84.99',
      badge: 'Bestseller',
      track: 'Cloud',
      tags: ['K8s', 'Docker', 'AWS', 'Terraform', 'Prometheus'],
      imageGradient: 'from-[#30AFFF] via-[#92EEFF] to-[#0A1A30]',
      description:
        'Hands-on infrastructure automation, monitoring, self-healing pods, and high-availability cloud strategies.',
    },
    {
      id: 104,
      title: 'Cross-Platform React Native & Expo Mobile Engineering',
      instructor: 'Elena Rostova, Mobile Specialist',
      duration: '6 Weeks',
      level: 'Beginner to Intermediate',
      rating: 4.85,
      reviewsCount: '980',
      price: '$19.99',
      originalPrice: '$74.99',
      badge: 'Hot & New',
      track: 'Mobile',
      tags: ['React Native', 'Expo', 'Redux', 'iOS/Android'],
      imageGradient: 'from-[#D8FFC5] to-[#0A1A30]',
      description:
        'Ship cross-platform iOS and Android apps with 60 FPS animations, push notifications, and app store approvals.',
    },
    {
      id: 105,
      title: 'Cybersecurity Analyst & Hands-On Ethical Hacking Lab',
      instructor: 'Priya Patel, Certified Infosec Lead',
      duration: '12 Weeks',
      level: 'All Levels',
      rating: 4.92,
      reviewsCount: '1,650',
      price: '$27.99',
      originalPrice: '$94.99',
      badge: 'Bestseller',
      track: 'Security',
      tags: ['Kali Linux', 'Burp Suite', 'Wireshark', 'Metasploit', 'SOC'],
      imageGradient: 'from-[#C4F7CA] to-[#0A1A30]',
      description:
        'Identify security vulnerabilities, execute automated penetration tests, and secure cloud environments against exploits.',
    },
    {
      id: 106,
      title: 'Data Engineering with Apache Spark, Kafka & Snowflake',
      instructor: 'Alex Rivera, Big Data Architect',
      duration: '9 Weeks',
      level: 'Intermediate',
      rating: 4.87,
      reviewsCount: '820',
      price: '$24.99',
      originalPrice: '$84.99',
      badge: 'Trending',
      track: 'Data',
      tags: ['Apache Spark', 'Kafka', 'PostgreSQL', 'Snowflake', 'dbt'],
      imageGradient: 'from-[#30AFFF] to-[#0A1A30]',
      description:
        'Architect high-throughput real-time data pipelines and scalable analytical warehouses from scratch.',
    },
  ];

  const tracks = ['All', 'Web', 'AI', 'Cloud', 'Mobile', 'Security', 'Data'];

  const filteredCourses = coursesData.filter((c) => {
    const matchesTrack = selectedTrack === 'All' || c.track === selectedTrack;
    const matchesSearch =
      c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase())) ||
      c.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTrack && matchesSearch;
  });

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Title & Breadcrumb */}
        <div className="mb-8">
          <span className="badge-bestseller mb-2 inline-block">
            Kaira Tech Academy
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1C1D1F]">
            All Academy Cohorts & Masterclasses
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Production-grade courses taught by senior solutions architects. 100% project-based with Git workflow and diploma certification.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-5 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xs">
          {/* Search Bar */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filter courses by name or skill (React, AI, Cloud)..."
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-[#F1F5F9] border border-transparent focus:border-[#30AFFF] focus:bg-white text-xs text-[#1C1D1F] focus:outline-none transition-all"
            />
          </div>

          {/* Track Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            {tracks.map((track) => (
              <button
                key={track}
                onClick={() => setSelectedTrack(track)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                  selectedTrack === track
                    ? 'bg-[#070D18] text-white shadow-xs'
                    : 'bg-[#F1F5F9] text-gray-600 hover:text-[#1C1D1F] hover:bg-gray-200'
                }`}
              >
                {track === 'All' ? 'All Tracks' : track}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info Bar */}
        <div className="flex items-center justify-between text-xs text-gray-500 mb-6">
          <span>
            Showing <strong className="text-[#1C1D1F]">{filteredCourses.length}</strong> available courses
          </span>
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="text-[#30AFFF] hover:underline font-semibold"
            >
              Clear search filter
            </button>
          )}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length === 0 ? (
          <div className="bg-white border border-gray-200 rounded-xl p-12 text-center text-gray-500 text-sm">
            No courses found matching "{searchTerm}". Please try a different query or select "All Tracks".
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEnroll={onEnrollCourse}
              />
            ))}
          </div>
        )}

        {/* Academy Highlights Card */}
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xs grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#30AFFF]/15 text-[#30AFFF] flex items-center justify-center font-bold">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#1C1D1F]">100% Production Repositories</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Never build toy projects. Build production microservices, CI/CD pipelines, and cloud native architectures.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#92EEFF]/25 text-[#070D18] flex items-center justify-center font-bold">
              <Star className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#1C1D1F]">1-on-1 Senior Code Reviews</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Every PR is thoroughly reviewed by practicing software engineers with detailed refactoring notes.
            </p>
          </div>

          <div className="space-y-2">
            <div className="w-10 h-10 rounded-lg bg-[#D8FFC5] text-[#070D18] flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-[#1C1D1F]">Verifiable Certifications</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              Earn an accredited diploma shareable directly on LinkedIn and recognized by partner tech organizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
