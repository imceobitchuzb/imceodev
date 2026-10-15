export type Language = 'en' | 'ru' | 'uz';

export type ProjectCategory = 'all' | 'websites' | 'webapps' | 'automation';

export type ProjectStatus = 'live' | 'in-development' | 'demo-unavailable';

export interface Project {
  id: string;
  title: string;
  category: 'websites' | 'webapps' | 'automation';
  summary: {
    en: string;
    ru: string;
    uz: string;
  };
  description: {
    en: string;
    ru: string;
    uz: string;
  };
  technologies: string[];
  status: ProjectStatus;
  statusLabel: {
    en: string;
    ru: string;
    uz: string;
  };
  liveUrl?: string;
  githubUrl?: string;
  telegramBotUrl?: string;
  backendNote?: {
    en: string;
    ru: string;
    uz: string;
  };
  highlights: {
    en: string[];
    ru: string[];
    uz: string[];
  };
}

export interface ServiceItem {
  id: string;
  titleKey: string;
  descKey: string;
  iconName: string;
  tags: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: {
    en: string;
    ru: string;
    uz: string;
  };
  challenge: {
    en: string;
    ru: string;
    uz: string;
  };
  solution: {
    en: string;
    ru: string;
    uz: string;
  };
  technologies: string[];
  results: {
    en: string[];
    ru: string[];
    uz: string[];
  };
  projectRefId: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  website: string; // Honeypot field
  consent: boolean;
}
