import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Play, X, Sparkles, Volume2 } from 'lucide-react';
import heroImg from '../../assets/hero.png';
import logoImg from '../../assets/Images/logo.png';
import introVideo from '../../assets/Video/Create_a_premium_cinematic_pro.mp4';

const Hero = ({ onOpenEnquiry }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-12">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#070D18] via-[#0D192E] to-[#122340] min-h-[480px] flex items-center p-6 sm:p-10 lg:p-14 text-white shadow-2xl border border-gray-800/80">
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
                  onClick={() => setIsVideoModalOpen(true)}
                  className="px-4 py-2.5 rounded-lg text-xs font-bold bg-[#070D18] hover:bg-[#142642] text-white transition-all flex items-center gap-2 shadow-sm hover:shadow"
                >
                  <div className="w-4 h-4 rounded-full bg-[#30AFFF] flex items-center justify-center text-[#070D18]">
                    <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                  </div>
                  <span>Watch Intro Video</span>
                </button>

                <button
                  onClick={() => onOpenEnquiry && onOpenEnquiry('Consultation Inquiry')}
                  className="btn-Kaira-outline text-xs"
                >
                  Get Tech Consultation
                </button>
              </div>
            </div>

            {/* Right: Modern 3D Floating Interactive Showcase with Video Preview */}
            <div className="lg:col-span-5 hidden lg:flex items-center justify-center perspective-1000 relative">
              <div className="relative w-80 h-88 flex items-center justify-center">
                {/* 3D Isometric Platform Graphic */}
                <div className="absolute bottom-0 inset-x-0 flex justify-center opacity-85">
                  <img
                    src={heroImg}
                    alt="3D Tech Hub Base"
                    className="w-60 h-auto drop-shadow-[0_20px_25px_rgba(48,175,255,0.35)]"
                  />
                </div>

                {/* Floating 3D Main Showcase Card with Live Intro Video Preview */}
                <div
                  onClick={() => setIsVideoModalOpen(true)}
                  className="hero-3d-card relative z-20 w-72 bg-[#0A1322]/95 backdrop-blur-md border border-[#92EEFF]/35 rounded-2xl p-3 text-white cursor-pointer group hover:border-[#30AFFF] transition-all"
                >
                  {/* Video Screen Container */}
                  <div className="relative w-full h-36 rounded-xl overflow-hidden bg-black/60 border border-gray-800">
                    <video
                      src={introVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                    />

                    {/* Dark gradient overlay & Play trigger */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-center justify-center">
                      <div className="w-11 h-11 rounded-full bg-[#30AFFF]/90 text-[#070D18] flex items-center justify-center shadow-lg shadow-[#30AFFF]/40 group-hover:scale-110 group-hover:bg-[#92EEFF] transition-all">
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </div>
                    </div>

                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-bold">
                      <span className="px-1.5 py-0.5 rounded bg-black/60 text-[#D8FFC5] backdrop-blur-xs flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#D8FFC5] animate-pulse" />
                        Preview Tour
                      </span>
                      <span className="px-1.5 py-0.5 rounded bg-black/60 text-[#92EEFF]">
                        Click to Watch
                      </span>
                    </div>
                  </div>

                  {/* Header Strip below video */}
                  <div className="pt-2.5 px-1 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <img src={logoImg} alt="Logo" className="w-6 h-6 object-contain" />
                      <span className="text-xs font-black text-white">
                        Kaira <span className="text-[#30AFFF]">DigitalHub</span>
                      </span>
                    </div>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#D8FFC5] text-[#070D18]">
                      FEATURED
                    </span>
                  </div>

                  <div className="pt-1 px-1 flex items-center justify-between text-[11px] text-gray-400">
                    <span>Cinematic Platform Tour</span>
                    <div className="flex items-center text-amber-400">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400 mr-1" />
                      <span className="font-bold text-white">4.95</span>
                    </div>
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

      {/* Cinematic Fullscreen Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-4xl bg-[#070D18] border border-[#92EEFF]/30 rounded-3xl overflow-hidden shadow-2xl shadow-[#30AFFF]/20">
            {/* Top Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#0A1322]">
              <div className="flex items-center gap-2.5">
                <img src={logoImg} alt="Logo" className="w-7 h-7 object-contain" />
                <div>
                  <h3 className="text-sm font-black text-white">
                    Kaira DigitalHub <span className="text-[#30AFFF]">Cinematic Intro</span>
                  </h3>
                  <p className="text-[10px] text-gray-400">
                    Official Overview & Innovation Tour
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                aria-label="Close video"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video w-full bg-black">
              <video
                src={introVideo}
                controls
                autoPlay
                className="w-full h-full object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-gray-800 bg-[#0A1322] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="text-gray-400">
                Explore our full-lifecycle digital engineering services & academy cohorts.
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setIsVideoModalOpen(false);
                    onOpenEnquiry && onOpenEnquiry('Consultation after Video Tour');
                  }}
                  className="btn-Kaira-primary text-xs py-2 px-4"
                >
                  Get Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
