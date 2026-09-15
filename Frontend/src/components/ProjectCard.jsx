import React from 'react';
import { ExternalLink, TrendingUp } from 'lucide-react';

const ProjectCard = ({ project }) => {
  const {
    title,
    category = 'SaaS Platform',
    description,
    techStack = ['Next.js', 'Node.js', 'Tailwind', 'MongoDB'],
    metric = '+140% Conversion',
    demoUrl = '#',
    githubUrl = '#',
  } = project;

  return (
    <div className="udemy-card p-6 flex flex-col justify-between group hover:border-[#30AFFF] transition-all">
      <div>
        {/* Category & Metric */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="badge-popular">
            {category}
          </span>
          {metric && (
            <div className="flex items-center gap-1 text-[11px] font-bold text-[#070D18] bg-[#D8FFC5] px-2 py-0.5 rounded">
              <TrendingUp className="w-3 h-3 text-[#070D18]" />
              <span>{metric}</span>
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-[#1C1D1F] group-hover:text-[#30AFFF] transition-colors mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {techStack.map((tech, idx) => (
            <span
              key={idx}
              className="text-[11px] font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-700 border border-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
        <a
          href={demoUrl}
          target="_blank"
          rel="noreferrer"
          className="flex-1 py-2 px-3 rounded-lg text-xs font-bold bg-[#30AFFF] hover:bg-[#1597EC] text-[#070D18] transition-colors flex items-center justify-center gap-1.5"
        >
          <span>Live Demo</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
          title="Source Code"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
