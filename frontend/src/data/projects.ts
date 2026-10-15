import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'nexora-market',
    title: 'NEXORA MARKET',
    category: 'websites',
    status: 'live',
    statusLabel: {
      en: 'Live Platform',
      ru: 'Работает онлайн',
      uz: 'Onlayn ishlamoqda',
    },
    liveUrl: 'https://nexoramarketss.netlify.app',
    telegramBotUrl: 'https://t.me/nexoramarketsbot',
    backendNote: {
      en: 'Integrated with a Python/Node REST API deployed on Render free tier. Free-tier backend may take 30-50s to cold-start on initial request.',
      ru: 'Интегрирован с REST API на бесплатном тарифе Render. Возможна задержка 30-50 секунд при первом запросе из-за спящего режима хостинга.',
      uz: 'Render bepul tarifidagi REST API bilan integratsiya qilingan. Dastlabki so‘rovda server uyqu rejimidan chiqishi uchun 30-50 soniya ketishi mumkin.',
    },
    summary: {
      en: 'A modern e-commerce storefront with product cataloging, responsive mobile layouts, and direct Telegram bot commerce integration.',
      ru: 'Современный интернет-магазин с каталогом товаров, адаптивным мобильным интерфейсом и интеграцией с торговым Telegram-ботом.',
      uz: 'Mahsulotlar katalogi, moslashuvchan mobil interfeys va Telegram savdo boti bilan integratsiyalashgan zamonaviy e-tijorat do‘koni.',
    },
    description: {
      en: 'NEXORA MARKET demonstrates a complete multi-channel shopping experience connecting a lightweight, fast web storefront with an automated Telegram commerce bot. Customers can browse products smoothly on mobile or desktop and complete inquiries seamlessly.',
      ru: 'NEXORA MARKET демонстрирует омниканальный опыт покупок, объединяя легкий веб-интерфейс на Netlify с автоматизированным Telegram-ботом. Пользователи могут комфортно просматривать каталог и оформлять заказы с любых устройств.',
      uz: 'NEXORA MARKET veb-do‘kon va Telegram savdo botini birlashtirgan to‘liq savdo tajribasini namoyish etadi. Foydalanuvchilar qulay mobil yoki kompyuter interfeysi orqali mahsulotlarni tanlab, buyurtma bera oladilar.',
    },
    technologies: ['React', 'JavaScript/TypeScript', 'Tailwind CSS', 'Telegram Bot API', 'Netlify', 'Render API'],
    highlights: {
      en: [
        'Live responsive web frontend deployed on Netlify CDN',
        'Direct connection to active Telegram Bot (@nexoramarketsbot)',
        'RESTful API architecture handling product catalogs and order flows',
        'Optimized for low-bandwidth mobile connections',
      ],
      ru: [
        'Работающий веб-интерфейс, развернутый на Netlify',
        'Прямая интеграция с активным ботом (@nexoramarketsbot)',
        'REST API для каталога товаров и обработки заявок',
        'Оптимизировано для быстрой работы на мобильных сетях',
      ],
      uz: [
        'Netlify platformasida onlayn ishlayotgan moslashuvchan veb-interfeys',
        'Faol Telegram bot (@nexoramarketsbot) bilan to‘g‘ridan-to‘g‘ri aloqa',
        'Mahsulotlar katalogi va buyurtmalarni boshqaruvchi REST API',
        'Mobil internetda tez ishlash uchun optimallashtirilgan',
      ],
    },
  },
  {
    id: 'ceoweb-social',
    title: 'CEOWEB — Social Media Showcase',
    category: 'webapps',
    status: 'live',
    statusLabel: {
      en: 'Live Web App',
      ru: 'Работает онлайн',
      uz: 'Onlayn ishlamoqda',
    },
    liveUrl: 'https://socialmediauz.netlify.app/challenges',
    githubUrl: 'https://github.com/imceobitchuzb/myownsocialmedia',
    summary: {
      en: 'A gamified social application featuring belt-rank progression mechanics, interactive challenges, user wall feeds, and streak tracking.',
      ru: 'Геймифицированная социальная платформа с системой рангов («поясов»), интерактивными челленджами и отслеживанием серий активности.',
      uz: 'Reyting va darajalar tizimi, interaktiv topshiriqlar hamda faollik zanjirlariga ega geymifikatsiyalangan ijtimoiy platforma.',
    },
    description: {
      en: 'CEOWEB was engineered to demonstrate advanced client-side state architecture, gamification loops (XP earning, streak preservation, rank progression), and responsive feed layouts inspired by modern social platforms.',
      ru: 'CEOWEB разработан для демонстрации сложной клиентской логики, механик вовлечения (начисление XP, сохранение серий, продвижение по рангам) и адаптивных интерфейсов лент публикаций.',
      uz: 'CEOWEB murakkab foydalanuvchi interfeysi, faollik ballari (XP), darajalar oshishi va zamonaviy ijtimoiy tarmoqlar uslubidagi tasmalarni boshqarish arxitekturasini ko‘rsatib beradi.',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'State Management', 'Netlify'],
    highlights: {
      en: [
        'Public live deployment available on Netlify',
        'Verified open-source repository on GitHub',
        'Dynamic challenge progression and belt ranking state machine',
        'High-density responsive UI designed for mobile and tablet touchscreens',
      ],
      ru: [
        'Публичное демо доступно онлайн на Netlify',
        'Открытый проверенный репозиторий на GitHub',
        'Интерактивная система челленджей и рангов',
        'Адаптивный интерфейс для мобильных и сенсорных экранов',
      ],
      uz: [
        'Netlify tarmog‘ida ochiq onlayn versiyasi mavjud',
        'GitHub platformasida tasdiqlangan ochiq manba kodi',
        'Topshiriqlar va darajalar bo‘yicha interaktiv hisob-kitob tizimi',
        'Mobil va planshet ekranlariga to‘liq moslashtirilgan interfeys',
      ],
    },
  },
  {
    id: 'sat-master',
    title: 'SAT MASTER',
    category: 'webapps',
    status: 'in-development',
    statusLabel: {
      en: 'In Development / Verified Repo',
      ru: 'В разработке / Проверенный код',
      uz: 'Ishlanmoqda / Kod tasdiqlangan',
    },
    githubUrl: 'https://github.com/imceobitchuzb/newbot',
    backendNote: {
      en: 'Complete architecture engineered locally with Next.js 14, React 18, FastAPI backend, and pedagogical remediation loops. Public cloud demo pending production container deployment.',
      ru: 'Полная архитектура разработана локально: Next.js 14, React 18, бэкенд на FastAPI и алгоритмы адаптивного обучения. Публичное облачное демо готовится к релизу.',
      uz: 'To‘liq tizim ishlab chiqilgan: Next.js 14, React 18, FastAPI backend va adaptiv o‘qitish algoritmlari. Ommaviy bulutli demo versiyasi tayyorlanmoqda.',
    },
    summary: {
      en: 'An AI-powered Digital SAT preparation platform and Telegram Mini App built with an active diagnostic remediation loop for student error analysis.',
      ru: 'Образовательная платформа для подготовки к Digital SAT и Telegram Mini App с алгоритмом разбора ошибок и адаптивным обучением.',
      uz: 'Digital SAT imtihoniga tayyorlanish uchun sun’iy intellekt va faol xatolarni tahlil qilish tizimiga ega Telegram Mini App platformasi.',
    },
    description: {
      en: 'Unlike conventional quiz apps that simply cycle through questions, SAT MASTER implements an automated Remediation Loop: Question -> Answer -> Analyze -> Explain concept gaps -> Practice similar skill -> Retest. Built with Next.js 14 App Router and a fast Python API.',
      ru: 'В отличие от стандартных тестов, SAT MASTER использует цикл адаптивного обучения: Вопрос -> Ответ -> Анализ причины ошибки -> Объяснение правила -> Отработка похожего навыка -> Повторный тест. Стек: Next.js 14 и высокопроизводительный Python API.',
      uz: 'Oddiy test tizimlaridan farqli ravishda, SAT MASTER faol tahlil zanjiridan foydalanadi: Savol -> Javob -> Tahlil -> Xato sababini o‘rgatish -> O‘xshash misol berish -> Qayta tekshirish.',
    },
    technologies: ['Next.js 14', 'React 18', 'TypeScript', 'FastAPI', 'Python', 'Tailwind CSS', 'Docker'],
    highlights: {
      en: [
        'Verified source codebase and test suites on GitHub',
        'Pedagogical remediation engine mapping student knowledge gaps',
        'Engineered as a lightweight Telegram Mini App with strict TypeScript',
        'Docker containerization setup with automated dev scripts',
      ],
      ru: [
        'Проверенная кодовая база и набор тестов на GitHub',
        'Алгоритм выявления пробелов в знаниях и адаптивного тестирования',
        'Архитектура Telegram Mini App со строгой типизацией TypeScript',
        'Подготовленная конфигурация Docker и скрипты локального запуска',
      ],
      uz: [
        'GitHub-da tasdiqlangan manba kodi va test to‘plamlari',
        'Bilimdagi bo‘shliqlarni aniqlash va o‘rgatish mexanizmi',
        'Qat’iy TypeScript bilan yozilgan Telegram Mini App arxitekturasi',
        'Docker konteynerlari va avtomatlashtirilgan skriptlar',
      ],
    },
  },
  {
    id: 'telegram-automation-engine',
    title: 'Telegram Trading & Automation Bot Engine',
    category: 'automation',
    status: 'in-development',
    statusLabel: {
      en: 'Architecture & Engine Tested',
      ru: 'Движок протестирован',
      uz: 'Dvigatel sinovdan o‘tgan',
    },
    githubUrl: 'https://github.com/imceobitchuzb/pockettgbot',
    backendNote: {
      en: 'Asynchronous Python architecture with dedicated engine handlers, test_system verification, and modular signal routers.',
      ru: 'Асинхронный Python-бэкенд с модульными обработчиками сигналов, архитектурными аудитами и набором системных тестов.',
      uz: 'Modulli signal qayta ishlovchilari, tizim auditi va sinov testlariga ega asinxron Python arxitekturasi.',
    },
    summary: {
      en: 'An asynchronous high-throughput Python bot engine engineered for event processing, automated alerting, and secure API pipeline execution.',
      ru: 'Асинхронный высокопроизводительный бот-движок на Python для обработки потоковых событий, автоматических оповещений и исполнения сценариев.',
      uz: 'Hodisalarni qayta ishlash, avtomatik bildirishnomalar yuborish va xavfsiz API integratsiyasi uchun mo‘ljallangan asinxron Python bot tizimi.',
    },
    description: {
      en: 'Engineered for reliability and low-latency execution in Telegram, this Python engine architecture features comprehensive audit reports, automated integration testing, modular state managers, and environment-driven configurations.',
      ru: 'Созданный для стабильной работы с минимальной задержкой в Telegram, этот проект включает подробные отчеты об архитектурном аудите, автотесты, изолированные обработчики и безопасное хранение ключей.',
      uz: 'Telegram tarmog‘ida tezkor va uzluksiz ishlash uchun mo‘ljallangan ushbu loyiha arxitektura auditi, avtotestlar va xavfsiz konfiguratsiya tizimini o‘z ichiga oladi.',
    },
    technologies: ['Python 3', 'Asyncio', 'Telegram Bot API', 'Pytest', 'System Auditing'],
    highlights: {
      en: [
        'Open-source repository verified on GitHub',
        'Comprehensive architecture audit documentation and root cause analyses',
        'End-to-end test suite (test_system.py) for engine reliability',
        'Configurable execution pipelines with environment isolation',
      ],
      ru: [
        'Проверенный открытый репозиторий на GitHub',
        'Полная архитектурная документация и аналитические отчеты',
        'Набор системных тестов (test_system.py) для проверки надежности',
        'Гибкая конфигурация пайплайнов через переменные окружения',
      ],
      uz: [
        'GitHub-da tasdiqlangan ochiq repozitoriy',
        'Tizim arxitekturasi va tahliliy hisobotlarning to‘liq hujjatlari',
        'Tizim barqarorligini tekshiruvchi test to‘plami (test_system.py)',
        'Muhit o‘zgaruvchilari orqali moslashuvchan boshqaruv',
      ],
    },
  },
];
