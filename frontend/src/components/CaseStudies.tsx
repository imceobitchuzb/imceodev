import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { caseStudiesData } from '../data/caseStudies';
import { CheckCircle2 } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const { language, t } = useLanguage();
  const [selectedCaseIndex, setSelectedCaseIndex] = useState(0);

  const currentCase = caseStudiesData[selectedCaseIndex] || caseStudiesData[0];
  const subtitle = currentCase.subtitle[language] || currentCase.subtitle.en;
  const challenge = currentCase.challenge[language] || currentCase.challenge.en;
  const solution = currentCase.solution[language] || currentCase.solution.en;
  const results = currentCase.results[language] || currentCase.results.en;

  return (
    <section id="case-studies" className="py-20 md:py-28 bg-graphite-50/70 border-t border-b border-graphite-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-bold uppercase tracking-wider text-cobalt-700 mb-2">
            {t.caseStudies.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-graphite-950 tracking-tight mb-4">
            {t.caseStudies.title}
          </h2>
          <p className="text-base text-graphite-600 leading-relaxed">
            {t.caseStudies.subtitle}
          </p>
        </div>

        {/* Case Study Selection Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {caseStudiesData.map((cs, idx) => (
            <button
              key={cs.id}
              type="button"
              onClick={() => setSelectedCaseIndex(idx)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                selectedCaseIndex === idx
                  ? 'bg-cobalt-700 text-white shadow-xs'
                  : 'bg-white text-graphite-700 border border-graphite-200 hover:border-graphite-300'
              }`}
            >
              {cs.title.split('—')[0].trim()}
            </button>
          ))}
        </div>

        {/* Selected Case Study Container */}
        <div className="bg-white rounded-3xl border border-graphite-200 shadow-sm p-6 sm:p-10 lg:p-12">
          {/* Headline & Subtitle */}
          <div className="mb-10 pb-6 border-b border-graphite-150">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-graphite-950 tracking-tight mb-3">
              {currentCase.title}
            </h3>
            <p className="text-base text-graphite-600 font-medium leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Column: Challenge & Solution */}
            <div className="lg:col-span-7 space-y-8">
              {/* Challenge */}
              <div className="p-6 rounded-2xl bg-graphite-50 border border-graphite-200/80">
                <h4 className="text-xs font-bold uppercase tracking-wider text-graphite-500 mb-2.5">
                  {t.caseStudies.challengeLabel}
                </h4>
                <p className="text-sm text-graphite-700 leading-relaxed font-normal">
                  {challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="p-6 rounded-2xl bg-cobalt-50/50 border border-cobalt-200/70">
                <h4 className="text-xs font-bold uppercase tracking-wider text-cobalt-800 mb-2.5">
                  {t.caseStudies.solutionLabel}
                </h4>
                <p className="text-sm text-graphite-700 leading-relaxed font-normal">
                  {solution}
                </p>
              </div>
            </div>

            {/* Right Column: Verified Results & Technologies */}
            <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-graphite-500 mb-4">
                  {t.caseStudies.resultsLabel}
                </h4>
                <ul className="space-y-3">
                  {results.map((res, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-graphite-800 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-graphite-150">
                <h4 className="text-xs font-bold uppercase tracking-wider text-graphite-500 mb-3">
                  {t.caseStudies.technologiesUsed}
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {currentCase.technologies.map((tech) => (
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
          </div>
        </div>
      </div>
    </section>
  );
};
