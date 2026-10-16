import { describe, it, expect } from 'vitest';
import { projectsData } from '../data/projects';
import { servicesData } from '../data/services';
import { translations } from '../i18n/translations';

describe('IMCEO DEV Data and Business Logic Tests', () => {
  it('should load all verified projects', () => {
    expect(projectsData.length).toBeGreaterThanOrEqual(4);
    const ids = projectsData.map((p) => p.id);
    expect(ids).toContain('nexora-market');
    expect(ids).toContain('ceoweb-social');
    expect(ids).toContain('sat-master');
    expect(ids).toContain('ceosavdo-uz');
  });

  it('should correctly filter projects by category', () => {
    const websites = projectsData.filter((p) => p.category === 'websites');
    const webapps = projectsData.filter((p) => p.category === 'webapps');
    const automation = projectsData.filter((p) => p.category === 'automation');

    expect(websites.length).toBeGreaterThan(0);
    expect(webapps.length).toBeGreaterThan(0);
    expect(automation.length).toBeGreaterThan(0);

    // Sum should equal total projects
    expect(websites.length + webapps.length + automation.length).toBe(projectsData.length);
  });

  it('should have honest status labels and valid URLs for all projects', () => {
    projectsData.forEach((project) => {
      expect(['live', 'in-development', 'demo-unavailable']).toContain(project.status);
      expect(project.technologies.length).toBeGreaterThan(0);
      expect(project.highlights.en.length).toBeGreaterThan(0);

      if (project.liveUrl) {
        expect(project.liveUrl.startsWith('https://')).toBe(true);
      }
      if (project.githubUrl) {
        expect(project.githubUrl.startsWith('https://github.com/')).toBe(true);
      }
      if (project.telegramBotUrl) {
        expect(project.telegramBotUrl.startsWith('https://t.me/')).toBe(true);
      }
    });
  });

  it('should have 6 core services defined with matching icons and tags', () => {
    expect(servicesData.length).toBe(6);
    servicesData.forEach((service) => {
      expect(service.id).toBeTruthy();
      expect(service.tags.length).toBeGreaterThanOrEqual(3);
      expect(translations.en.services.items).toHaveProperty(service.titleKey);
      expect(translations.ru.services.items).toHaveProperty(service.titleKey);
      expect(translations.uz.services.items).toHaveProperty(service.titleKey);
    });
  });

  it('should provide complete translations across EN, RU, and UZ', () => {
    const langs = ['en', 'ru', 'uz'] as const;
    langs.forEach((lang) => {
      const dict = translations[lang];
      expect(dict.nav.brand).toBe('IMCEO DEV');
      expect(dict.hero.headline).toBeTruthy();
      expect(dict.contact.form.submitBtn).toBeTruthy();
      expect(dict.portfolio.filters.all).toBeTruthy();
    });
  });
});
