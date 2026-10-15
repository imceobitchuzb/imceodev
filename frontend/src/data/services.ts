import { ServiceItem } from '../types';

export const servicesData: ServiceItem[] = [
  {
    id: 'web-dev',
    titleKey: 'webDev',
    descKey: 'webDev',
    iconName: 'Globe',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI', 'SEO'],
  },
  {
    id: 'web-apps',
    titleKey: 'webApps',
    descKey: 'webApps',
    iconName: 'LayoutDashboard',
    tags: ['React', 'State Machines', 'REST APIs', 'Client Portals', 'CRUD'],
  },
  {
    id: 'telegram-bots',
    titleKey: 'telegramBots',
    descKey: 'telegramBots',
    iconName: 'Bot',
    tags: ['Telegram Bot API', 'Python', 'Mini Apps', 'Async Workflows', 'Webhooks'],
  },
  {
    id: 'python-backend',
    titleKey: 'pythonBackend',
    descKey: 'pythonBackend',
    iconName: 'Server',
    tags: ['Flask', 'FastAPI', 'SQLite / PostgreSQL', 'Authentication', 'CORS'],
  },
  {
    id: 'ai-assisted',
    titleKey: 'aiAssisted',
    descKey: 'aiAssisted',
    iconName: 'Cpu',
    tags: ['Automated Refactoring', 'Test Generation', 'LLM Integrations', 'Review'],
  },
  {
    id: 'maintenance',
    titleKey: 'maintenance',
    descKey: 'maintenance',
    iconName: 'Wrench',
    tags: ['Bug Fixes', 'Speed Optimization', 'Security Patching', 'Audits'],
  },
];
