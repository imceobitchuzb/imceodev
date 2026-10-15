import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData } from '../data/projects';
import { Project, ProjectCategory } from '../types';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Github, Send, Info } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  const filterButtons: { key: ProjectCategory; label: string }[] = [
    { key: 'all', label: t.portfolio.filters.all },
    { key: 'websites', label: t.portfolio.filters.websites },
    { key: 'webapps', label: t.portfolio.filters.webapps },
    { key: 'automation', label: t.portfolio.filters.automation },
  ];

  return (
    <section id="projects" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-wider text-cobalt-700 mb-2">
              {t.portfolio.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-graphite-950 tracking-tight mb-4">
              {t.portfolio.title}
            </h2>
            <p className="text-base text-graphite-600 leading-relaxed">
              {t.portfolio.subtitle}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 bg-graphite-100 p-1 rounded-xl border border-graphite-200/80 self-start md:self-auto">
            {filterButtons.map((btn) => (
              <button
                key={btn.key}
                type="button"
                onClick={() => setActiveFilter(btn.key)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                  activeFilter === btn.key
                    ? 'bg-white text-cobalt-700 shadow-xs'
                    : 'text-graphite-600 hover:text-graphite-900'
                }`}
                aria-pressed={activeFilter === btn.key}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Filterable Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const summary = project.summary[language] || project.summary.en;
            const statusLabel = project.statusLabel[language] || project.statusLabel.en;

            return (
              <div
                key={project.id}
                className="group bg-white rounded-2xl border border-graphite-200/90 hover:border-cobalt-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="p-7">
                  {/* Card Header & Status */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                        project.status === 'live'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}
                    >
                      {statusLabel}
                    </span>
                    <span className="text-xs uppercase font-mono text-graphite-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold text-graphite-900 tracking-tight mb-3 group-hover:text-cobalt-700 transition-colors">
                    {project.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-graphite-600 leading-relaxed mb-6 font-normal">
                    {summary}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-graphite-100 text-graphite-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 text-[11px] font-medium rounded-md bg-graphite-50 text-graphite-500">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Actions Footer */}
                <div className="px-7 py-4 bg-graphite-50/60 border-t border-graphite-150 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-graphite-700 hover:text-cobalt-700 transition-colors"
                  >
                    <Info className="w-4 h-4" />
                    <span>{t.portfolio.viewDetails}</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-graphite-600 hover:text-graphite-900 hover:bg-graphite-200/60 transition-colors"
                        title={t.portfolio.sourceCode}
                        aria-label={`${project.title} source code on GitHub`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}

                    {project.telegramBotUrl && (
                      <a
                        href={project.telegramBotUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-cobalt-700 hover:text-cobalt-900 hover:bg-cobalt-100/60 transition-colors"
                        title={t.portfolio.telegramBot}
                        aria-label={`${project.title} Telegram bot`}
                      >
                        <Send className="w-4 h-4" />
                      </a>
                    )}

                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cobalt-700 hover:bg-cobalt-800 text-white text-xs font-semibold shadow-2xs transition-colors"
                      >
                        <span>{t.portfolio.liveDemo}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
