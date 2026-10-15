import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, CheckCircle2, ShieldCheck, Activity, Terminal, Layers } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onExploreWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject, onExploreWork }) => {
  const { t } = useLanguage();

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-graphite-50 via-white to-white">
      {/* Subtle geometric background grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Studio Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cobalt-50 border border-cobalt-200/80 text-cobalt-800 text-xs font-semibold tracking-wide uppercase mb-6 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-cobalt-600 animate-pulse" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Confident Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-graphite-950 tracking-tight leading-[1.12] mb-6">
              Digital products, <br className="hidden sm:inline" />
              <span className="text-cobalt-700">built to work.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-graphite-600 leading-relaxed max-w-2xl mb-8 font-normal">
              {t.hero.subhead}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onStartProject}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cobalt-700 hover:bg-cobalt-800 text-white font-semibold text-base shadow-sm hover:shadow-md transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cobalt-600"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={onExploreWork}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-graphite-50 text-graphite-800 font-semibold text-base border border-graphite-300 shadow-xs hover:border-graphite-400 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-graphite-400"
              >
                <span>{t.hero.secondaryCta}</span>
              </button>
            </div>

            {/* Trust points */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 pt-4 border-t border-graphite-200/80 w-full text-xs font-medium text-graphite-600">
              {t.hero.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-cobalt-700 shrink-0" aria-hidden="true" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Original Architectural Mockup Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative subtle aura */}
              <div 
                className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cobalt-600/10 to-cobalt-400/5 blur-xl opacity-70"
                aria-hidden="true"
              />

              {/* Main Blueprint Terminal Card */}
              <div className="relative bg-white rounded-2xl border border-graphite-200/90 shadow-xl overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-graphite-900 px-4 py-3 flex items-center justify-between border-b border-graphite-800">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    <span className="text-xs font-mono text-graphite-400 ml-2">imceodev :: system-core</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
                    <Activity className="w-3.5 h-3.5 animate-pulse" />
                    <span>{t.hero.preview.uptime}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-5 space-y-4 bg-white">
                  {/* Status Banner */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-graphite-50 border border-graphite-200/70">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-md bg-cobalt-100 flex items-center justify-center text-cobalt-700">
                        <Terminal className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-graphite-900">{t.hero.preview.systemStatus}</p>
                        <p className="text-[11px] text-graphite-500 font-mono">{t.hero.preview.latency}</p>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                      HTTP 200
                    </span>
                  </div>

                  {/* Modules Architecture Grid */}
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-graphite-500 mb-2">
                      {t.hero.preview.modules}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2.5 rounded-lg border border-graphite-150 bg-white hover:border-cobalt-200 transition-colors">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-cobalt-600" />
                          <span className="text-xs font-medium text-graphite-800">{t.hero.preview.modernWeb}</span>
                        </div>
                        <span className="text-[11px] font-mono text-graphite-500">React + TS</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg border border-graphite-150 bg-white hover:border-cobalt-200 transition-colors">
                        <div className="flex items-center gap-2">
                          <ShieldCheck className="w-4 h-4 text-cobalt-600" />
                          <span className="text-xs font-medium text-graphite-800">{t.hero.preview.apiGateways}</span>
                        </div>
                        <span className="text-[11px] font-mono text-graphite-500">Python Flask/FastAPI</span>
                      </div>

                      <div className="flex items-center justify-between p-2.5 rounded-lg border border-graphite-150 bg-white hover:border-cobalt-200 transition-colors">
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-cobalt-600" />
                          <span className="text-xs font-medium text-graphite-800">{t.hero.preview.automationBots}</span>
                        </div>
                        <span className="text-[11px] font-mono text-graphite-500">Telegram Bot API</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Code Snippet Box */}
                  <div className="p-3 rounded-lg bg-graphite-900 text-graphite-200 font-mono text-[11px] leading-relaxed">
                    <p className="text-graphite-400">// Strict verification pipeline</p>
                    <p><span className="text-cobalt-400">const</span> studio = <span className="text-amber-300">&quot;IMCEO DEV&quot;</span>;</p>
                    <p><span className="text-emerald-400">await</span> deploy({'{'} tests: <span className="text-cobalt-300">true</span>, cleanCode: <span className="text-cobalt-300">true</span> {'}'});</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
