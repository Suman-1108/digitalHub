import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Search,
  BookOpen,
  Award,
  Users,
  Clock,
  ArrowRight,
  CheckCircle2,
  Star,
  PlayCircle,
  Briefcase,
  Layers,
  Code2,
  Cpu,
  Cloud,
} from 'lucide-react';
import CourseCard from '../components/CourseCard';
import ServiceCard from '../components/ServiceCard';
import EventCard from '../components/EventCard';
import ProjectCard from '../components/ProjectCard';
import heroImg from '../assets/hero.png';
import logoImg from '../assets/Images/logo.png';

const Home = ({ onOpenEnquiry, onEnrollCourse, onRegisterEvent }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [heroSearch, setHeroSearch] = useState('');

  // Kaira-style courses data
  const allCourses = [
    {
      id: 1,
      title: 'Full-Stack MERN Architecture: Production-Grade Web Apps',
      instructor: 'Dr. Sarah Chen, Principal Architect',
      duration: '10 Weeks',
      level: 'All Levels',
      rating: 4.9,
      reviewsCount: '2,840',
      price: '$24.99',
      originalPrice: '$89.99',
      badge: 'Bestseller',
      category: 'Web Development',
      tags: ['React', 'Node.js', 'MongoDB', 'Docker'],
      imageGradient: 'from-[#30AFFF] to-[#0A1A30]',
    },
    {
      id: 2,
      title: 'Generative AI & Autonomous Agentic Systems Masterclass',
      instructor: 'Marcus Vance, Senior AI Lead',
      duration: '8 Weeks',
      level: 'Intermediate',
      rating: 4.95,
      reviewsCount: '1,920',
      price: '$29.99',
      originalPrice: '$99.99',
      badge: 'Highest Rated',
      category: 'AI & Data',
      tags: ['Python', 'LangChain', 'RAG', 'VectorDB'],
      imageGradient: 'from-[#92EEFF] to-[#0A1A30]',
    },
    {
      id: 3,
      title: 'Kubernetes, Docker & Multi-Cloud CI/CD DevOps Bootcamp',
      instructor: 'David Miller, Cloud DevOps Lead',
      duration: '8 Weeks',
      level: 'Intermediate to Pro',
      rating: 4.88,
      reviewsCount: '1,410',
      price: '$22.99',
      originalPrice: '$84.99',
      badge: 'Bestseller',
      category: 'Cloud & DevOps',
      tags: ['K8s', 'Docker', 'AWS', 'Terraform'],
      imageGradient: 'from-[#30AFFF] via-[#92EEFF] to-[#0A1A30]',
    },
    {
      id: 4,
      title: 'Cross-Platform React Native & Expo Mobile Engineering',
      instructor: 'Elena Rostova, Mobile Specialist',
      duration: '6 Weeks',
      level: 'Beginner to Intermediate',
      rating: 4.85,
      reviewsCount: '980',
      price: '$19.99',
      originalPrice: '$74.99',
      badge: 'Hot & New',
      category: 'Mobile Apps',
      tags: ['React Native', 'Expo', 'Redux', 'iOS/Android'],
      imageGradient: 'from-[#D8FFC5] to-[#0A1A30]',
    },
    {
      id: 5,
      title: 'Cybersecurity Analyst & Hands-On Ethical Hacking Lab',
      instructor: 'Priya Patel, Certified Infosec Lead',
      duration: '12 Weeks',
      level: 'All Levels',
      rating: 4.92,
      reviewsCount: '1,650',
      price: '$27.99',
      originalPrice: '$94.99',
      badge: 'Bestseller',
      category: 'Cybersecurity',
      tags: ['Kali Linux', 'Burp Suite', 'OWASP', 'SOC'],
      imageGradient: 'from-[#C4F7CA] to-[#0A1A30]',
    },
    {
      id: 6,
      title: 'Data Engineering with Apache Spark, Kafka & Snowflake',
      instructor: 'Alex Rivera, Big Data Architect',
      duration: '9 Weeks',
      level: 'Intermediate',
      rating: 4.87,
      reviewsCount: '820',
      price: '$24.99',
      originalPrice: '$84.99',
      badge: 'Trending',
      category: 'AI & Data',
      tags: ['Spark', 'Kafka', 'SQL', 'Snowflake'],
      imageGradient: 'from-[#30AFFF] to-[#0A1A30]',
    },
  ];

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
      ? allCourses
      : allCourses.filter((c) => c.category === selectedCategory);

  // Featured services
  const featuredServices = [
    {
      icon: Code2,
      title: 'Custom Web & Microservices Engineering',
      description:
        'Architecting resilient, high-speed cloud-native applications utilizing React, Node.js, Next.js, and modern distributed microservices.',
      features: ['Microservices & REST/GraphQL', 'Real-time WebSocket sync', 'Sub-second response SLA'],
      badge: 'Enterprise',
    },
    {
      icon: Cpu,
      title: 'AI Pipelines & Agentic Automation',
      description:
        'Deploy custom LLM pipelines, autonomous AI agents, document processing OCR, and intelligent predictive algorithms.',
      features: ['Agentic AI workflows', 'Retrieval Augmented Generation (RAG)', 'Private LLM hosting'],
      badge: 'Cutting Edge',
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure & DevOps Zero-Downtime',
      description:
        'Automated CI/CD pipelines, Kubernetes cluster orchestration, multi-cloud architectures, and zero-trust security implementations.',
      features: ['Zero-downtime deployments', 'Terraform IaC automation', 'Cost-optimized architectures'],
      badge: 'Popular',
    },
  ];

  // Featured events
  const featuredEvents = [
    {
      id: 'e1',
      title: 'Kaira HackFest 2026: AI & Web3 Fusion',
      category: 'Hackathon',
      date: 'Nov 12, 2026',
      time: '09:00 AM - 06:00 PM EST',
      location: 'Hybrid • Boston & Virtual',
      speaker: 'Sarah Chen (Lead AI Scientist)',
      seatsLeft: 14,
      description:
        'Compete in a 36-hour sprint to build next-generation agentic tools and web applications with cash prizes up to $25,000.',
    },
    {
      id: 'e2',
      title: 'Architecting Scalable Microservices at Scale',
      category: 'Webinar',
      date: 'Nov 18, 2026',
      time: '02:00 PM - 04:00 PM EST',
      location: 'Live Stream via Zoom',
      speaker: 'David Miller (Principal Architect)',
      seatsLeft: 35,
      description:
        'Deep-dive into event-driven design, Kafka pipelines, database sharding, and resilience strategies for 10M+ users.',
    },
  ];

  // Testimonials
  const testimonials = [
    {
      quote:
        'The Full-Stack MERN Architecture course gave me the exact production patterns I needed. Within 2 months I transitioned into a Senior Engineering role!',
      author: 'Jonathan Reynolds',
      role: 'Full-Stack Software Engineer',
      course: 'Full-Stack MERN Architecture',
      rating: 5,
    },
    {
      quote:
        'Kaira DigitalHub rebuilt our core fintech transaction engine with zero downtime. Exceptional architecture and execution from start to finish.',
      author: 'Rachel Lin',
      role: 'VP of Engineering, FinEdge Corp',
      course: 'Enterprise Cloud Solutions',
      rating: 5,
    },
    {
      quote:
        'The hands-on Generative AI bootcamp is genuinely unmatched. Building multi-agent systems and real RAG pipelines is 100x better than generic theory.',
      author: 'Tariq Hassan',
      role: 'AI Solutions Specialist',
      course: 'Generative AI & Agentic Systems',
      rating: 5,
    },
  ];

  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. Kaira STYLE HERO BILLBOARD BANNER WITH 3D SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#070D18] via-[#0D192E] to-[#122340] min-h-[460px] flex items-center p-6 sm:p-10 lg:p-14 text-white shadow-2xl border border-gray-800/80">
          {/* Ambient Glows */}
          <div className="absolute top-0 right-10 w-96 h-96 bg-[#30AFFF]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-[#D8FFC5]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center w-full relative z-10">
            {/* Left: Classic Kaira Billboard Card */}
            <div className="lg:col-span-7 bg-white text-[#1C1D1F] p-6 sm:p-8 rounded-2xl shadow-2xl space-y-4 border border-gray-100">
              <div className="flex items-center gap-2">
                <span className="badge-popular">
                  Tech Academy & Digital Agency
                </span>
                <span className="badge-bestseller">
                  New Cohorts Open
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight text-[#1C1D1F]">
                Skills for your present (and your future)
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Transform your software career with hands-on academy cohorts, or scale your business with enterprise web and AI digital solutions engineered by Kaira DigitalHub.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/courses"
                  className="btn-Kaira-primary text-xs"
                >
                  <span>Browse Academy Courses</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => onOpenEnquiry('Consultation Inquiry')}
                  className="btn-Kaira-outline text-xs"
                >
                  Get Tech Consultation
                </button>
              </div>
            </div>

            {/* Right: Modern 3D Floating Interactive Hub Showcase */}
            <div className="lg:col-span-5 hidden lg:flex items-center justify-center perspective-1000 relative">
              <div className="relative w-72 h-80 flex items-center justify-center">
                {/* 3D Isometric Platform Graphic */}
                <div className="absolute bottom-0 inset-x-0 flex justify-center opacity-85">
                  <img
                    src={heroImg}
                    alt="3D Tech Hub Base"
                    className="w-56 h-auto drop-shadow-[0_20px_25px_rgba(48,175,255,0.35)]"
                  />
                </div>

                {/* Floating 3D Main Showcase Card */}
                <div className="hero-3d-card relative z-20 w-64 bg-[#0A1322]/90 backdrop-blur-md border border-[#92EEFF]/30 rounded-2xl p-4 text-white">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <img src={logoImg} alt="Logo" className="w-7 h-7 object-contain" />
                      <span className="text-xs font-black tracking-wide text-white">
                        Kaira <span className="text-[#30AFFF]">Academy</span>
                      </span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#D8FFC5] text-[#070D18]">
                      LIVE
                    </span>
                  </div>

                  <div className="space-y-1.5 py-1">
                    <h4 className="text-xs font-bold text-white line-clamp-1">
                      Full-Stack Cloud & AI Systems
                    </h4>
                    <p className="text-[11px] text-gray-400">
                      10 Weeks Intensive Bootcamp
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-gray-800 text-[11px]">
                    <div className="flex items-center text-amber-400">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400 mr-1" />
                      <span className="font-bold text-white">4.95</span>
                      <span className="text-gray-400 text-[10px] ml-1">(2.8k)</span>
                    </div>
                    <span className="font-black text-[#92EEFF]">$24.99</span>
                  </div>
                </div>

                {/* Floating 3D Top Badge 1 */}
                <div className="floating-badge-1 absolute -top-4 -right-4 z-30 bg-white/95 backdrop-blur-md text-[#070D18] px-3.5 py-2 rounded-xl shadow-xl border border-gray-200 flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#30AFFF] animate-ping" />
                  <span className="text-[11px] font-black">12,500+ Enrolled</span>
                </div>

                {/* Floating 3D Bottom Badge 2 */}
                <div className="floating-badge-2 absolute -bottom-3 -left-4 z-30 bg-[#070D18]/95 backdrop-blur-md text-white px-3 py-1.5 rounded-xl shadow-xl border border-[#D8FFC5]/30 flex items-center gap-2">
                  <span className="text-xs text-[#D8FFC5]">⚡</span>
                  <span className="text-[10px] font-bold text-[#D8FFC5]">99.9% Production SLA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Kaira VALUE PROPOSITION STRIP */}
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

      {/* 3. Kaira STYLE COURSE SELECTION TABS & CAROUSEL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="space-y-2 mb-6">
          <h2 className="text-2xl sm:text-3xl font-black text-[#1C1D1F]">
            A broad selection of courses
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Choose from top in-demand academy cohorts with hands-on code reviews and real-world repositories.
          </p>
        </div>

        {/* Category Tabs (Kaira Style) */}
        <div className="flex items-center gap-2 overflow-x-auto border-b border-gray-200 pb-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold whitespace-nowrap transition-colors rounded-t-lg ${selectedCategory === cat
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

      {/* 4. Kaira BUSINESS / ENTERPRISE SOLUTIONS SECTION */}
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
            {featuredServices.map((svc, idx) => (
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

      {/* 5. UPCOMING HACKATHONS & EVENTS */}
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
          {featuredEvents.map((ev) => (
            <EventCard
              key={ev.id}
              event={ev}
              onRegister={onRegisterEvent}
            />
          ))}
        </div>
      </section>

      {/* 6. Kaira STYLE SOCIAL PROOF / TESTIMONIALS */}
      <section className="bg-white border-y border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-[#1C1D1F]">
              How learners and clients achieve their goals
            </h2>
            <p className="text-xs text-gray-500 mt-2">
              Over 12,000 engineers and 50+ enterprise teams trust Kaira DigitalHub.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="Kaira-card p-6 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-100 mt-4">
                  <div className="text-xs font-bold text-[#1C1D1F]">{t.author}</div>
                  <div className="text-[11px] text-gray-500">{t.role}</div>
                  <div className="text-[10px] text-[#30AFFF] font-semibold mt-1">
                    {t.course}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Kaira STYLE BOTTOM BILLBOARD "BECOME AN INSTRUCTOR / PARTNER" */}
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
              onClick={() => onOpenEnquiry('Instructor / Partner Application')}
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
    </div>
  );
};

export default Home;
