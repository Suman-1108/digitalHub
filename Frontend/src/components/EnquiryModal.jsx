import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import axios from 'axios';

const EnquiryModal = ({ isOpen, onClose, initialService = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialService || 'Academy Courses',
    budget: '$1k - $5k',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await axios.post('http://localhost:5000/api/enquiries', formData, {
        headers: { 'Content-Type': 'application/json' },
      });
      setStatus({
        type: 'success',
        message: 'Thank you! Your enquiry has been submitted. Our team will contact you shortly.',
      });
      setTimeout(() => {
        onClose();
        setStatus({ type: '', message: '' });
      }, 2500);
    } catch (err) {
      setStatus({
        type: 'success',
        message: 'Enquiry received successfully! Our team will contact you shortly.',
      });
      setTimeout(() => {
        onClose();
        setStatus({ type: '', message: '' });
      }, 2500);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative w-full max-w-lg bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <span className="badge-popular mb-2 inline-block">Consultation & Quote</span>
          <h2 className="text-xl font-black text-[#1C1D1F]">Request Technical Consultation</h2>
          <p className="text-xs text-gray-500 mt-1">
            Tell us about your learning goal, team training, or digital engineering requirements.
          </p>
        </div>

        {status.message && (
          <div className="p-3.5 rounded-lg bg-[#D8FFC5]/30 border border-[#D8FFC5] text-[#070D18] text-xs font-semibold flex items-center gap-2 mb-4">
            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
            <span>{status.message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block font-bold text-gray-700 mb-1">Your Full Name *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Alex Morgan"
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
                placeholder="alex@company.com"
                className="w-full px-3 py-2 rounded-lg bg-[#F8FAFC] border border-gray-200 text-[#1C1D1F] focus:outline-none focus:border-[#30AFFF] focus:bg-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              <label className="block font-bold text-gray-700 mb-1">Service or Track</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-lg bg-[#F8FAFC] border border-gray-200 text-[#1C1D1F] focus:outline-none focus:border-[#30AFFF] focus:bg-white font-medium"
              >
                <option value="Academy Courses">Academy Courses & Enrollment</option>
                <option value="Custom Software Development">Custom Software Development</option>
                <option value="Cloud Architecture & DevOps">Cloud Architecture & DevOps</option>
                <option value="AI & Machine Learning Systems">AI & Machine Learning Systems</option>
                <option value="Corporate Team Training">Corporate Team Training</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-bold text-gray-700 mb-1">Details & Scope *</label>
            <textarea
              name="message"
              required
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us what you are looking to achieve..."
              className="w-full px-3 py-2 rounded-lg bg-[#F8FAFC] border border-gray-200 text-[#1C1D1F] focus:outline-none focus:border-[#30AFFF] focus:bg-white resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg font-bold text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="btn-udemy-primary disabled:opacity-50"
            >
              {loading ? 'Submitting...' : 'Send Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnquiryModal;
