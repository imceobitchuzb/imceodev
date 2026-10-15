import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, Code2, ShieldAlert } from 'lucide-react';

export const About: React.FC = () => {
  const { t } = useLanguage();

  const valueIcons = [
    <MessageSquare key="msg" className="w-5 h-5 text-cobalt-700" />,
    <Code2 key="code" className="w-5 h-5 text-cobalt-700" />,
    <ShieldAlert key="shield" className="w-5 h-5 text-cobalt-700" />,
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6">
            <p className="text-xs font-bold uppercase tracking-wider text-cobalt-700 mb-2">
              {t.about.eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-graphite-950 tracking-tight mb-6">
              {t.about.title}
            </h2>
            <div className="space-y-4 text-base text-graphite-600 leading-relaxed font-normal">
              <p>{t.about.paragraph1}</p>
              <p>{t.about.paragraph2}</p>
            </div>
          </div>

          {/* Right Column: Values */}
          <div className="lg:col-span-6 space-y-4">
            {t.about.values.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-graphite-50/70 border border-graphite-200/80 hover:border-cobalt-200 hover:bg-white transition-all shadow-xs"
              >
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-9 h-9 rounded-lg bg-white border border-graphite-200/80 flex items-center justify-center shadow-2xs">
                    {valueIcons[idx] || <Code2 className="w-5 h-5 text-cobalt-700" />}
                  </div>
                  <h3 className="text-base font-bold text-graphite-900 tracking-tight">
                    {val.title}
                  </h3>
                </div>
                <p className="text-sm text-graphite-600 leading-relaxed pl-12 font-normal">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
