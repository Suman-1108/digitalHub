import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import Footer from './components/Common/Footer';
import EnquiryModal from './components/EnquiryModal';
import RegistrationModal from './components/RegistrationModal';

import Home from './Pages/Home';
import Services from './Pages/Services';
import Courses from './Pages/Courses';
import Events from './Pages/Events';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import './App.css';

// Automatically scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  // Modal states
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');

  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [targetItem, setTargetItem] = useState(null);
  const [registerType, setRegisterType] = useState('course');

  const handleOpenEnquiry = (serviceName = '') => {
    setSelectedService(serviceName || 'General Consultation');
    setIsEnquiryOpen(true);
  };

  const handleEnrollCourse = (course) => {
    setTargetItem(course);
    setRegisterType('course');
    setIsRegisterOpen(true);
  };

  const handleRegisterEvent = (event) => {
    setTargetItem(event);
    setRegisterType('event');
    setIsRegisterOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#F8FAFC] text-[#1C1D1F] flex flex-col font-sans selection:bg-[#30AFFF] selection:text-black">
        {/* Udemy-Style Navigation Header */}
        <Navbar onOpenEnquiry={() => handleOpenEnquiry('General Consultation')} />

        {/* Dynamic Pages */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  onOpenEnquiry={handleOpenEnquiry}
                  onEnrollCourse={handleEnrollCourse}
                  onRegisterEvent={handleRegisterEvent}
                />
              }
            />
            <Route
              path="/courses"
              element={<Courses onEnrollCourse={handleEnrollCourse} />}
            />
            <Route
              path="/services"
              element={<Services onOpenEnquiry={handleOpenEnquiry} />}
            />
            <Route
              path="/events"
              element={<Events onRegisterEvent={handleRegisterEvent} />}
            />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Udemy-Style Footer (Without Admin) */}
        <Footer />

        {/* Shared Modals */}
        <EnquiryModal
          isOpen={isEnquiryOpen}
          onClose={() => setIsEnquiryOpen(false)}
          initialService={selectedService}
        />

        <RegistrationModal
          isOpen={isRegisterOpen}
          onClose={() => setIsRegisterOpen(false)}
          targetItem={targetItem}
          type={registerType}
        />
      </div>
    </Router>
  );
}

export default App;
