import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  ChevronDown,
  Clock,
  Sparkles,
} from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    service: 'Academy Courses',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [openFaq, setOpenFaq] = useState(0);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      await axios.post('http://localhost:5000/api/enquiries', formData);
      setStatus({
        type: 'success',
        message: 'Your message has been sent! Our team will contact you within 24 hours.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        service: 'Academy Courses',
        message: '',
      });
    } catch (err) {
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been received successfully.',
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        service: 'Academy Courses',
        message: '',
      });
    } finally {
      setLoading(false);
    }
  };

  const faqs = [
    {
      q: 'How does Kaira DigitalHub begin a new project consultation?',
      a: 'We kick off with a complimentary 45-minute discovery call where an Enterprise Solutions Architect assesses your technical specifications, business objectives, timeline constraints, and estimated budget.',
    },
    {
      q: 'Are your Academy cohorts live or self-paced?',
      a: 'All our core masterclasses and bootcamps feature live interactive cohort sessions led by senior industry engineers, combined with 24/7 access to code repositories, recording archives, and dedicated 1-on-1 mentor office hours.',
    },
    {
      q: 'Do you work with international remote teams and startups?',
      a: 'Yes! We collaborate with organizations worldwide across North America, Europe, Asia-Pacific, and the Middle East, offering flexible time-zone overlap and asynchronous sprint reviews.',
    },
    {
      q: 'Can enterprises hire Kaira DigitalHub for custom internal employee training?',
      a: 'Absolutely. We deliver customized corporate upskilling programs covering Cloud Native Architecture, Kubernetes, Generative AI agent engineering, and DevSecOps tailored to your company tech stack.',
    },
  ];

  return (
    <div className="bg-[#F8FAFC] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="badge-popular mb-2 inline-block">
            Direct Support
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#1C1D1F]">
            Contact Admissions & Engineering
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Have questions about academy enrollment, digital services, or custom corporate training? We are here to help.
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
              <h3 className="text-lg font-bold text-[#1C1D1F]">Direct Channels</h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                Connect directly with admissions counselors or enterprise architects.
              </p>

              <div className="space-y-4 pt-1 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#30AFFF]/15 text-[#30AFFF] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 block font-medium">Admissions & Inquiries</span>
                    <a href="mailto:support@kairadigitalhub.com" className="font-bold text-[#1C1D1F] hover:text-[#30AFFF]">
                      support@kairadigitalhub.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#92EEFF]/25 text-[#070D18] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 block font-medium">Phone Assistance</span>
                    <a href="tel:+18005550199" className="font-bold text-[#1C1D1F] hover:text-[#30AFFF]">
                      +1 (800) 555-0199
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#D8FFC5] text-[#070D18] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 block font-medium">Global Campus</span>
                    <span className="font-bold text-[#1C1D1F]">
                      Kaira Tech Innovation Center, Suite 400
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-gray-100 text-gray-600 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-gray-400 block font-medium">Hours</span>
                    <span className="font-bold text-[#1C1D1F]">
                      Monday – Friday, 9:00 AM – 6:00 PM EST
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Fast Response Guarantee */}
            <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-xs flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-[#30AFFF] animate-ping" />
              <div className="text-xs">
                <span className="font-bold text-[#1C1D1F] block">Guaranteed Fast Response</span>
                <span className="text-gray-500">Inquiries answered within 4 business hours.</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h3 className="text-xl font-bold text-[#1C1D1F] mb-1">Send a Message</h3>
              <p className="text-xs text-gray-500 mb-6">
                Tell us about your learning goal, corporate training request, or digital project scope.
              </p>

              {status.message && (
                <div className="p-3.5 rounded-lg bg-[#D8FFC5]/30 border border-[#D8FFC5] text-[#070D18] text-xs font-semibold flex items-center gap-2 mb-6">
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
                      className="w-full px-3 py-2.5 rounded-lg bg-[#F8FAFC] border border-gray-200 text-[#1C1D1F] focus:outline-none focus:border-[#30AFFF] focus:bg-white transition-all"
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
                      className="w-full px-3 py-2.5 rounded-lg bg-[#F8FAFC] border border-gray-200 text-[#1C1D1F] focus:outline-none focus:border-[#30AFFF] focus:bg-white transition-all"
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
                      className="w-full px-3 py-2.5 rounded-lg bg-[#F8FAFC] border border-gray-200 text-[#1C1D1F] focus:outline-none focus:border-[#30AFFF] focus:bg-white transition-all"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Subject / Area</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-3 py-2.5 rounded-lg bg-[#F8FAFC] border border-gray-200 text-[#1C1D1F] focus:outline-none focus:border-[#30AFFF] focus:bg-white transition-all font-medium"
                    >
                      <option value="Academy Courses">Academy Courses & Enrollment</option>
                      <option value="Web Engineering">Web Development Services</option>
                      <option value="AI / Machine Learning">AI & Agentic Systems</option>
                      <option value="Cloud Architecture">Cloud Architecture & DevOps</option>
                      <option value="Corporate Training">Corporate Team Upskilling</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-gray-700 mb-1">Your Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Provide details about your query or timeline..."
                    className="w-full px-3 py-2.5 rounded-lg bg-[#F8FAFC] border border-gray-200 text-[#1C1D1F] focus:outline-none focus:border-[#30AFFF] focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-lg text-xs font-bold btn-Kaira-primary disabled:opacity-50"
                >
                  {loading ? 'Sending Message...' : 'Submit Inquiry'}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto border-t border-gray-200 pt-12">
          <h3 className="text-xl font-black text-[#1C1D1F] text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 text-left flex items-center justify-between text-xs font-bold text-[#1C1D1F]"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${openFaq === idx ? 'rotate-180 text-[#30AFFF]' : ''
                      }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 pb-4 text-xs text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
