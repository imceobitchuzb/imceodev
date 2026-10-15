import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MessageSquare, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-graphite-950 text-white pt-16 pb-12 border-t border-graphite-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-graphite-850">
          {/* Brand Info */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-cobalt-600 flex items-center justify-center text-white font-bold text-sm tracking-tight shadow-sm">
                IM
              </div>
              <span className="font-bold text-white tracking-tight text-xl leading-none">
                IMCEO<span className="text-cobalt-400 ml-1">DEV</span>
              </span>
            </div>
            <p className="text-sm text-graphite-400 leading-relaxed max-w-sm mb-6">
              {t.footer.brandDesc}
            </p>
            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://t.me/imceouz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-graphite-900 hover:bg-cobalt-600 hover:text-white text-graphite-400 flex items-center justify-center transition-colors border border-graphite-800"
                aria-label="IMCEO DEV on Telegram"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/imceouz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-graphite-900 hover:bg-pink-600 hover:text-white text-graphite-400 flex items-center justify-center transition-colors border border-graphite-800"
                aria-label="IMCEO DEV on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-graphite-300 mb-4">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2.5 text-sm text-graphite-400">
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, '#services')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, '#projects')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  onClick={(e) => handleNavClick(e, '#case-studies')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.caseStudies}
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, '#about')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#process"
                  onClick={(e) => handleNavClick(e, '#process')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.process}
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="hover:text-white transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Transparency & Standards Note */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-graphite-300 mb-4">
              {t.footer.legal}
            </h4>
            <p className="text-xs text-graphite-400 leading-relaxed mb-4">
              {t.footer.legalText}
            </p>
            <div className="p-3 rounded-xl bg-graphite-900/80 border border-graphite-850 text-[11px] text-graphite-400 font-mono">
              {t.footer.builtWith}
            </div>
          </div>
        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-graphite-500">
          <p>© {currentYear} IMCEO DEV. {t.footer.rights}</p>
          <p>Tashkent, Uzbekistan & Remote Worldwide</p>
        </div>
      </div>
    </footer>
  );
};
