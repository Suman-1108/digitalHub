import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = ({ testimonials = [] }) => {
  const defaultTestimonials = [
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

  const list = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
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
          {list.map((t, idx) => (
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
  );
};

export default Testimonials;
