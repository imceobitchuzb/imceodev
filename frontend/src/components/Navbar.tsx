import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Language } from '../types';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';

interface NavbarProps {
  onOpenContactWithService?: (serviceName: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactWithService }) => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: '#services', label: t.nav.services },
    { href: '#projects', label: t.nav.projects },
    { href: '#case-studies', label: t.nav.caseStudies },
    { href: '#about', label: t.nav.about },
    { href: '#process', label: t.nav.process },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = () => {
    setMobileMenuOpen(false);
    if (onOpenContactWithService) {
      onOpenContactWithService('');
    } else {
      const contactEl = document.querySelector('#contact');
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const languages: { code: Language; label: string }[] = [
    { code: 'en', label: 'EN' },
    { code: 'ru', label: 'RU' },
    { code: 'uz', label: 'UZ' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-graphite-200/80 py-3.5'
          : 'bg-white/80 backdrop-blur-sm border-b border-graphite-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-cobalt-600 rounded-md p-1 -m-1"
            aria-label="IMCEO DEV Homepage"
          >
            <div className="w-8 h-8 rounded-lg bg-cobalt-700 flex items-center justify-center text-white font-bold text-sm tracking-tight shadow-sm group-hover:bg-cobalt-600 transition-colors">
              IM
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-graphite-900 tracking-tight text-lg leading-none">
                IMCEO<span className="text-cobalt-600 ml-1">DEV</span>
              </span>
              <span className="text-[10px] text-graphite-500 font-medium tracking-wide uppercase mt-0.5">
                {t.nav.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-graphite-600 hover:text-cobalt-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cobalt-600 rounded-md px-1.5 py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Group */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center bg-graphite-100 rounded-lg p-0.5 border border-graphite-200/80" role="group" aria-label="Language selector">
              <Globe className="w-3.5 h-3.5 text-graphite-500 ml-2 mr-1" aria-hidden="true" />
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLanguage(item.code)}
                  className={`px-2 py-1 text-xs font-semibold rounded-md transition-all ${
                    language === item.code
                      ? 'bg-white text-cobalt-700 shadow-sm'
                      : 'text-graphite-600 hover:text-graphite-900'
                  }`}
                  aria-pressed={language === item.code}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Primary CTA */}
            <button
              type="button"
              onClick={handleStartProject}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded-lg bg-cobalt-700 hover:bg-cobalt-800 text-white transition-all shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cobalt-600 active:scale-[0.98]"
            >
              <span>{t.nav.startProject}</span>
              <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            {/* Quick Language Toggle on Mobile */}
            <div className="flex items-center bg-graphite-100 rounded-md p-0.5 border border-graphite-200">
              {languages.map((item) => (
                <button
                  key={item.code}
                  type="button"
                  onClick={() => setLanguage(item.code)}
                  className={`px-1.5 py-0.5 text-[11px] font-semibold rounded ${
                    language === item.code ? 'bg-white text-cobalt-700 shadow-xs' : 'text-graphite-500'
                  }`}
                  aria-label={`Change language to ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-graphite-700 hover:text-cobalt-700 hover:bg-graphite-100 transition-colors focus:outline-none focus:ring-2 focus:ring-cobalt-600"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? t.nav.closeMenu : t.nav.menu}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-0 top-[60px] bg-white/95 backdrop-blur-xl z-40 flex flex-col justify-between p-6 lg:hidden border-t border-graphite-200 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="py-3 px-4 text-base font-medium text-graphite-800 hover:text-cobalt-700 hover:bg-graphite-50 rounded-lg transition-colors border-b border-graphite-100 last:border-b-0"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-graphite-200 flex flex-col gap-4">
            <button
              type="button"
              onClick={handleStartProject}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-cobalt-700 hover:bg-cobalt-800 text-white font-semibold text-base shadow-sm transition-all"
            >
              <span>{t.nav.startProject}</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
