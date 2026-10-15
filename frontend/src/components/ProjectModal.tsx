import React, { useEffect } from 'react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { X, ExternalLink, Github, Send, AlertCircle, CheckCircle2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { language, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentSummary = project.summary[language] || project.summary.en;
  const currentDescription = project.description[language] || project.description.en;
  const currentHighlights = project.highlights[language] || project.highlights.en;
  const currentBackendNote = project.backendNote ? (project.backendNote[language] || project.backendNote.en) : null;
  const statusLabel = project.statusLabel[language] || project.statusLabel.en;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-graphite-950/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div 
        className="fixed inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-graphite-200 z-10 animate-scaleIn my-8 max-h-[90vh] overflow-y-auto">
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-graphite-150">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                  project.status === 'live'
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-amber-50 text-amber-700 border border-amber-200'
                }`}
              >
                {statusLabel}
              </span>
              <span className="text-xs uppercase font-semibold text-graphite-400">
                {project.category}
              </span>
            </div>
            <h3 id="modal-headline" className="text-2xl font-bold text-graphite-900 tracking-tight">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-graphite-400 hover:text-graphite-700 hover:bg-graphite-100 transition-colors focus:outline-none focus:ring-2 focus:ring-cobalt-600"
            aria-label={t.modal.close}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6">
          {/* Summary / Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-graphite-400 mb-2">
              {t.modal.overview}
            </h4>
            <p className="text-sm font-medium text-graphite-800 mb-3 leading-relaxed">
              {currentSummary}
            </p>
            <p className="text-sm text-graphite-600 leading-relaxed">
              {currentDescription}
            </p>
          </div>

          {/* Backend / Hosting honesty note */}
          {currentBackendNote && (
            <div className="p-4 rounded-xl bg-cobalt-50/70 border border-cobalt-200/80 flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-cobalt-700 shrink-0 mt-0.5" />
              <div className="text-xs text-cobalt-900 leading-relaxed">
                <span className="font-semibold block mb-0.5">{t.modal.backendStatus}</span>
                {currentBackendNote}
              </div>
            </div>
          )}

          {/* Key Highlights */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-graphite-400 mb-3">
              {t.modal.keyHighlights}
            </h4>
            <ul className="space-y-2">
              {currentHighlights.map((hl, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-graphite-700 leading-normal">
                  <CheckCircle2 className="w-4 h-4 text-cobalt-700 shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-graphite-400 mb-2.5">
              {t.modal.technologies}
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs font-medium rounded-md bg-graphite-100 text-graphite-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / Action Links */}
        <div className="pt-4 border-t border-graphite-150 flex flex-wrap items-center justify-end gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-graphite-100 hover:bg-graphite-200 text-graphite-800 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>{t.portfolio.sourceCode}</span>
            </a>
          )}

          {project.telegramBotUrl && (
            <a
              href={project.telegramBotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-cobalt-50 hover:bg-cobalt-100 text-cobalt-700 border border-cobalt-200 transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{t.portfolio.telegramBot}</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-cobalt-700 hover:bg-cobalt-800 text-white shadow-xs transition-colors"
            >
              <span>{t.portfolio.liveDemo}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold rounded-lg bg-graphite-200 hover:bg-graphite-300 text-graphite-800 transition-colors"
          >
            {t.modal.close}
          </button>
        </div>
      </div>
    </div>
  );
};
