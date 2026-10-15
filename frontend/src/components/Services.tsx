import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { servicesData } from '../data/services';
import { 
  Globe, 
  LayoutDashboard, 
  Bot, 
  Server, 
  Cpu, 
  Wrench, 
  ArrowUpRight 
} from 'lucide-react';

interface ServicesProps {
  onRequestEstimate: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onRequestEstimate }) => {
  const { t } = useLanguage();

  const getIcon = (name: string) => {
    switch (name) {
      case 'Globe':
        return <Globe className="w-6 h-6" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-6 h-6" />;
      case 'Bot':
        return <Bot className="w-6 h-6" />;
      case 'Server':
        return <Server className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'Wrench':
        return <Wrench className="w-6 h-6" />;
      default:
        return <Globe className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-graphite-50/50 border-t border-b border-graphite-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-bold uppercase tracking-wider text-cobalt-700 mb-2">
            {t.services.eyebrow}
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-graphite-950 tracking-tight mb-4">
            {t.services.title}
          </h2>
          <p className="text-base sm:text-lg text-graphite-600 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* 6 Core Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesData.map((service) => {
            const itemTranslation = (t.services.items as Record<string, { title: string; desc: string }>)[service.titleKey];
            const title = itemTranslation ? itemTranslation.title : service.id;
            const desc = itemTranslation ? itemTranslation.desc : '';

            return (
              <div
                key={service.id}
                className="group relative bg-white rounded-2xl p-7 border border-graphite-200/80 shadow-xs hover:border-cobalt-300 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Service Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-cobalt-50 text-cobalt-700 flex items-center justify-center mb-6 group-hover:bg-cobalt-700 group-hover:text-white transition-colors duration-200">
                    {getIcon(service.iconName)}
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-graphite-900 tracking-tight mb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-graphite-600 leading-relaxed mb-6 font-normal">
                    {desc}
                  </p>
                </div>

                <div>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-graphite-100 text-graphite-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Request an estimate CTA */}
                  <button
                    type="button"
                    onClick={() => onRequestEstimate(title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cobalt-700 hover:text-cobalt-900 group-hover:translate-x-0.5 transition-all focus:outline-none focus:ring-1 focus:ring-cobalt-600 rounded"
                  >
                    <span>{t.services.requestEstimate}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
