import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  Search,
  Menu,
  X,
  Compass,
  ArrowRight,
  Globe,
  Sparkles,
} from 'lucide-react';
import logoImg from '../../assets/Images/logo.png';

const Navbar = ({ onOpenEnquiry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Courses', path: '/courses' },
    { name: 'Services', path: '/services' },
    { name: 'Events', path: '/events' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-xs transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 gap-4 lg:gap-8">
          {/* Logo & Brand */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0 group">
            <img
              src={logoImg}
              alt="Kaira DigitalHub"
              className="h-10 w-auto object-contain group-hover:scale-105 transition-transform duration-200"
            />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-[#1C1D1F] leading-tight">
                Kaira <span className="text-[#30AFFF]">DigitalHub</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-gray-500">
                Tech & Academy
              </span>
            </div>
          </Link>

          {/* Explore / Categories Dropdown (Kaira Style) */}
          <Link
            to="/courses"
            className="hidden lg:flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-gray-700 hover:text-[#30AFFF] transition-colors rounded-lg hover:bg-gray-50 shrink-0"
          >
            <Compass className="w-4 h-4 text-[#30AFFF]" />
            <span>Explore</span>
          </Link>

          {/* Kaira-style Wide Central Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="hidden md:flex flex-1 max-w-xl relative items-center"
          >
            <Search className="w-4 h-4 text-gray-400 absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for anything (React, Python, DevOps, AI, Cloud)..."
              className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#F1F5F9] border border-transparent hover:border-gray-300 focus:border-[#30AFFF] focus:bg-white text-xs text-[#1C1D1F] placeholder-gray-500 focus:outline-none transition-all shadow-inner"
            />
          </form>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-lg text-xs font-bold transition-colors ${isActive(link.path)
                    ? 'text-[#30AFFF] bg-[#30AFFF]/10'
                    : 'text-gray-700 hover:text-[#30AFFF] hover:bg-gray-50'
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => onOpenEnquiry('General Consultation')}
              className="px-4 py-2.5 rounded-lg text-xs font-bold bg-[#070D18] hover:bg-[#1C2B46] text-white transition-all shadow-sm hover:shadow flex items-center gap-1.5"
            >
              <span>Get Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#92EEFF]" />
            </button>

            <Link
              to="/courses"
              className="px-4 py-2.5 rounded-lg text-xs font-bold bg-[#30AFFF] hover:bg-[#1597EC] text-[#070D18] transition-all shadow-sm hover:shadow"
            >
              <span>Start Learning</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar (under header on small screens) */}
        <div className="md:hidden pb-3 pt-1">
          <form onSubmit={handleSearchSubmit} className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search courses, services, skills..."
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#F1F5F9] border border-gray-200 text-xs text-[#1C1D1F] focus:outline-none focus:border-[#30AFFF] focus:bg-white"
            />
          </form>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2.5 rounded-lg text-sm font-semibold ${isActive(link.path)
                  ? 'text-[#30AFFF] bg-[#30AFFF]/10'
                  : 'text-gray-700 hover:bg-gray-50'
                }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsOpen(false);
                onOpenEnquiry('Mobile Consultation');
              }}
              className="w-full py-2.5 rounded-lg text-xs font-bold bg-[#070D18] text-white flex items-center justify-center gap-2"
            >
              <span>Get Consultation</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#92EEFF]" />
            </button>
            <Link
              to="/courses"
              onClick={() => setIsOpen(false)}
              className="w-full py-2.5 rounded-lg text-xs font-bold bg-[#30AFFF] text-[#070D18] text-center"
            >
              Explore Academy Courses
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
