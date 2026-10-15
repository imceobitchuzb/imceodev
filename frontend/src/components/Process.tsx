import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Process: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-20 md:py-28 bg-graphite-50/50 border-t border-b border-graphite-150">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-cobalt-700 mb-2">
            {t.process.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-graphite-950 tracking-tight mb-4">
            {t.process.title}
          </h2>
          <p className="text-base text-graphite-600 leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.process.steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white rounded-2xl p-7 border border-graphite-200/90 shadow-xs hover:border-cobalt-300 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl font-extrabold text-cobalt-700/80 font-mono block mb-4">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold text-graphite-900 tracking-tight mb-2">
                  {step.name}
                </h3>
                <p className="text-sm text-graphite-600 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-graphite-100 flex items-center justify-end">
                <span className="w-1.5 h-1.5 rounded-full bg-cobalt-600" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
