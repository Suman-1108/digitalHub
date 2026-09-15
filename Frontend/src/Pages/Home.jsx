import React from 'react';
import { Code2, Cpu, Cloud } from 'lucide-react';
import Hero from '../components/Home/Hero';
import ValueProposition from '../components/Home/ValueProposition';
import CourseSelection from '../components/Home/CourseSelection';
import HomeServices from '../components/Home/HomeServices';
import HomeEvents from '../components/Home/HomeEvents';
import Testimonials from '../components/Home/Testimonials';
import PartnerCTA from '../components/Home/PartnerCTA';

const Home = ({ onOpenEnquiry, onEnrollCourse, onRegisterEvent }) => {
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

  return (
    <div className="bg-[#F8FAFC]">
      {/* 1. Hero with 3D Showcase */}
      <Hero onOpenEnquiry={onOpenEnquiry} />

      {/* 2. Value Proposition Strip */}
      <ValueProposition />

      {/* 3. Course Selection Tabs & Grid */}
      <CourseSelection courses={allCourses} onEnrollCourse={onEnrollCourse} />

      {/* 4. Enterprise Solutions */}
      <HomeServices services={featuredServices} onOpenEnquiry={onOpenEnquiry} />

      {/* 5. Hackathons & Events */}
      <HomeEvents events={featuredEvents} onRegisterEvent={onRegisterEvent} />

      {/* 6. Social Proof Testimonials */}
      <Testimonials />

      {/* 7. Partner / Instructor CTA */}
      <PartnerCTA onOpenEnquiry={onOpenEnquiry} />
    </div>
  );
};

export default Home;
