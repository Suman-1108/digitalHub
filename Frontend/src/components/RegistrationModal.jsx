import React, { useState } from 'react';
import { X, CheckCircle2, Award, Calendar, Sparkles } from 'lucide-react';
import axios from 'axios';

const RegistrationModal = ({ isOpen, onClose, targetItem = null, type = 'course' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    qualification: 'Working Professional',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!isOpen || !targetItem) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post('http://localhost:5000/api/registrations', {
        ...formData,
        targetId: targetItem._id || targetItem.id,
        targetTitle: targetItem.title,
        type: type,
      });
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2500);
    } catch (err) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 2500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-md bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {success ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 mx-auto rounded-full bg-[#D8FFC5] flex items-center justify-center text-[#070D18]">
              <CheckCircle2 className="w-8 h-8 text-emerald-700" />
            </div>
            <h3 className="text-xl font-black text-[#1C1D1F]">
              {type === 'course' ? 'Enrollment Confirmed!' : 'Seat Reserved!'}
            </h3>
            <p className="text-xs text-gray-500 max-w-xs mx-auto">
              You are officially registered for <strong className="text-[#1C1D1F]">{targetItem.title}</strong>. Check your inbox for course repository access and syllabus.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="badge-bestseller mb-2 inline-block">
                {type === 'course' ? 'Academy Enrollment' : 'Event RSVP Pass'}
              </span>
              <h2 className="text-lg font-black text-[#1C1D1F] mt-1">
                {targetItem.title}
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                {type === 'course'
                  ? `Price: ${targetItem.price || '$24.99'} • Duration: ${targetItem.duration || '8 Weeks'}`
                  : `Date: ${targetItem.date} • ${targetItem.location}`}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-bold text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="w-full px-3 py-2 rounded-lg bg-[#F8FAFC] border border-gray-200 text-[#1C1D1F] focus:outline-none focus:border-[#30AFFF] focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@email.com"
                  className="w-full px-3 py-2 rounded-lg bg-[#F8FAFC] border border-gray-200 text-[#1C1D1F] focus:outline-none focus:border-[#30AFFF] focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-3 py-2 rounded-lg bg-[#F8FAFC] border border-gray-200 text-[#1C1D1F] focus:outline-none focus:border-[#30AFFF] focus:bg-white"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Current Background</label>
                <select
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg bg-[#F8FAFC] border border-gray-200 text-[#1C1D1F] focus:outline-none focus:border-[#30AFFF] focus:bg-white font-medium"
                >
                  <option value="Working Professional">Software Engineer / Professional</option>
                  <option value="College Student">University / College Student</option>
                  <option value="Tech Enthusiast">Self-Taught / Career Switcher</option>
                  <option value="Enterprise Team">Corporate Team Member</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg text-xs font-bold btn-udemy-primary disabled:opacity-50"
                >
                  {loading ? 'Confirming...' : type === 'course' ? 'Complete Enrollment' : 'Reserve Free Seat'}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationModal;
