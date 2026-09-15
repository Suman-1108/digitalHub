import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Sparkles } from 'lucide-react';
import logoImg from '../../assets/Images/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#070D18] text-white border-t border-gray-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top partner strip (Udemy Style) */}
        <div className="pb-12 border-b border-gray-800/80 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-bold text-white">
              Top companies trust Kaira DigitalHub to train their teams and build products
            </h4>
            <p className="text-xs text-gray-400 mt-1">
              Over 50+ enterprise teams and 12,000+ engineers certified.
            </p>
          </div>
          <div className="flex items-center gap-6 opacity-60 text-xs font-bold uppercase tracking-widest text-gray-300">
            <span>Enterprise</span>
            <span>Fintech</span>
            <span>Cloud</span>
            <span>AI Labs</span>
          </div>
        </div>

        {/* 4 Column Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12 border-b border-gray-800/80 text-xs">
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src={logoImg} alt="Kaira DigitalHub" className="h-9 w-auto object-contain" />
              <span className="text-xl font-black tracking-tight text-white">
                Kaira <span className="text-[#30AFFF]">DigitalHub</span>
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Premier technology academy and enterprise digital engineering firm delivering production-grade web systems, AI pipelines, and accredited tech cohorts.
            </p>
            <div className="flex items-center gap-3 pt-1 text-gray-400">
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-[#30AFFF]" /> English (US)
              </span>
            </div>
          </div>

          {/* Col 2: Digital Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-[#92EEFF]">
              Engineering Services
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/services" className="hover:text-white transition-colors">Web Application Development</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cloud & DevOps Architecture</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">AI & Machine Learning Pipelines</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Mobile App Engineering</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">UI/UX & Design Systems</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Cybersecurity & Code Audit</Link></li>
            </ul>
          </div>

          {/* Col 3: Academy Tracks */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-[#D8FFC5]">
              Academy Programs
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/courses" className="hover:text-white transition-colors">Full-Stack MERN Masterclass</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">Generative AI & Agentic Systems</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">DevOps & Kubernetes Production</Link></li>
              <li><Link to="/courses" className="hover:text-white transition-colors">React Native & Mobile Mastery</Link></li>
              <li><Link to="/events" className="hover:text-white transition-colors">Upcoming Hackathons & Summits</Link></li>
              <li><Link to="/projects" className="hover:text-white transition-colors">Student & Client Showcase</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact & Support (NO ADMIN) */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px] text-[#C4F7CA]">
              Contact & Support
            </h4>
            <div className="space-y-2 text-gray-400">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#30AFFF]" />
                <span>support@kairadigitalhub.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#92EEFF]" />
                <span>+1 (800) 555-0199</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D8FFC5]" />
                <span>Kaira Innovation Center</span>
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-block px-4 py-2 rounded-lg bg-[#14233D] hover:bg-[#30AFFF] text-white hover:text-[#070D18] font-bold transition-all"
                >
                  Contact Admissions
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Kaira DigitalHub, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-gray-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-400 transition-colors">Terms</a>
            <a href="#cookies" className="hover:text-gray-400 transition-colors">Cookie Settings</a>
            <a href="#sitemap" className="hover:text-gray-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
