import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { CaseStudies } from './components/CaseStudies';
import { About } from './components/About';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const MainContent: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactElement = document.querySelector('#contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.querySelector(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Skip to main content accessibility link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-cobalt-700 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar onOpenContactWithService={handleSelectService} />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-1">
        <Hero
          onStartProject={() => handleScrollToSection('#contact')}
          onExploreWork={() => handleScrollToSection('#projects')}
        />
        <Services onRequestEstimate={handleSelectService} />
        <Portfolio />
        <CaseStudies />
        <About />
        <Process />
        <Contact initialService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
};

export default App;
