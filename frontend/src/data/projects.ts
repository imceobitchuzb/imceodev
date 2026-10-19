import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'ceobuilding',
    title: 'CEOBUILDING — Luxury Residences in Tashkent City',
    category: 'websites',
    status: 'live',
    statusLabel: {
      en: 'Live Platform',
      ru: 'Работает онлайн',
      uz: 'Onlayn ishlamoqda',
    },
    liveUrl: 'https://ceobuilding.netlify.app',
    githubUrl: 'https://github.com/imceobitchuzb/ceobuilding',
    summary: {
      en: 'An exclusive quiet-luxury presentation website for a 14-story premium residential complex in Tashkent City with interactive layout plans.',
      ru: 'Премиальный презентационный сайт клубного жилого комплекса в Tashkent City с интерактивным выбором резиденций и планировок.',
      uz: 'Tashkent City hududidagi 14 qavatli premium klub uyi uchun sokin hashamat uslubidagi eksklyuziv taqdimot veb-sayti.',
    },
    description: {
      en: 'CEOBUILDING showcases monumental architecture and private luxury in the heart of Tashkent City. The digital experience features an interactive floor and residence selector, panoramic views, architectural gallery, and quiet luxury typography.',
      ru: 'CEOBUILDING представляет синтез монументальной архитектуры и приватной роскоши в сердце Tashkent City. Проект включает интерактивный каталог резиденций, поэтажные планировки, видовые террасы, японский сад и эстетику quiet luxury.',
      uz: 'CEOBUILDING Tashkent City markazidagi monumental arxitektura va xususiy hashamatni namoyish etadi. Veb-sayt interaktiv xonadonlar tanlovi, qavatlar rejasi, manzarali terrasalar va yuqori darajadagi vizual estetikani o‘z ichiga oladi.',
    },
    technologies: ['HTML5', 'Modern CSS', 'JavaScript', 'Quiet Luxury Design', 'Responsive Web', 'Netlify CDN'],
    highlights: {
      en: [
        'Live high-end residential showcase verified at ceobuilding.netlify.app',
        'Verified open-source repository on GitHub (imceobitchuzb/ceobuilding)',
        'Interactive residence selector and architectural layout catalog',
        'Editorial typography pairing Cormorant Garamond with modern Inter sans-serif',
      ],
      ru: [
        'Работающий презентационный сайт доступен на ceobuilding.netlify.app',
        'Проверенный открытый репозиторий на GitHub (imceobitchuzb/ceobuilding)',
        'Интерактивный выбор резиденций, планировок и галерея архитектуры',
        'Эдиториал-типографика Cormorant Garamond и чистый современный Inter',
      ],
      uz: [
        'ceobuilding.netlify.app manzilida ishlayotgan premium taqdimot sayti',
        'GitHub-da tasdiqlangan ochiq repozitoriy (imceobitchuzb/ceobuilding)',
        'Xonadonlar va qavatlar rejasini interaktiv tanlash tizimi',
        'Cormorant Garamond va zamonaviy Inter shriftlari uyg‘unligi',
      ],
    },
  },
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
    id: 'ceosavdo-uz',
    title: 'CEOSAVDOUZ — Trade & Business Automation Platform',
    category: 'automation',
    status: 'live',
    statusLabel: {
      en: 'Live Platform',
      ru: 'Работает онлайн',
      uz: 'Onlayn ishlamoqda',
    },
    liveUrl: 'https://ceosavdouz.netlify.app',
    githubUrl: 'https://github.com/imceobitchuzb/ceosavdouz',
    backendNote: {
      en: 'Engineered as a full-stack SaaS platform with Next.js App Router, Prisma ORM, and integrated Telegram Bot / WebApp automation for entrepreneurs in Uzbekistan.',
      ru: 'Полнофункциональная SaaS-платформа на Next.js App Router, Prisma ORM и Telegram Bot / WebApp автоматизацией для предпринимателей Узбекистана.',
      uz: 'O‘zbekiston tadbirkorlari uchun Next.js App Router, Prisma ORM hamda Telegram Bot / WebApp avtomatlashtirishiga ega to‘liq SaaS platformasi.',
    },
    summary: {
      en: 'A comprehensive trade and business automation platform engineered for small and medium businesses in Uzbekistan, featuring warehouse tracking, POS cash register, and debt control.',
      ru: 'Комплексная SaaS-платформа автоматизации торговли, складского учета, кассы (POS) и контроля дебиторской задолженности («насия») в сумах (UZS).',
      uz: 'O‘zbekistondagi kichik va o‘rta bizneslar uchun savdo, ombor hisobi, kassa (POS) va nasiya nazoratini avtomatlashtiruvchi to‘liq SaaS platformasi.',
    },
    description: {
      en: 'CEOSAVDOUZ combines sales processing, smart warehouse inventory, debt tracking (nasiya), and cash register operations in Uzbek soums (UZS). Engineered with Next.js, Prisma, and Telegram WebApp integration to replace manual paperwork with structured automation.',
      ru: 'CEOSAVDOUZ объединяет продажи, умный склад, учет рассрочек и задолженностей («насия»), кассу и финансовую аналитику в сумах (UZS). Создан на Next.js, Prisma и Telegram WebApp для замены бумажных блокнотов на надежную цифровую автоматизацию.',
      uz: 'CEOSAVDOUZ savdoni boshqarish, ombor qoldiqlari, nasiya daftari va kassa hisob-kitoblarini yagona tizimga jamlaydi. Qog‘oz daftarlar o‘rniga Next.js, Prisma va Telegram WebApp asosidagi ishonchli raqamli avtomatlashtirishni ta’minlaydi.',
    },
    technologies: ['Next.js 14', 'React', 'TypeScript', 'Prisma ORM', 'Tailwind CSS', 'Telegram Bot API', 'Netlify'],
    highlights: {
      en: [
        'Live production web application verified at ceosavdouz.netlify.app',
        'Verified open-source repository on GitHub (imceobitchuzb/ceosavdouz)',
        'Full warehouse inventory management and multi-unit SKU catalog',
        'Integrated Telegram Bot and WebApp workflows for mobile staff access',
      ],
      ru: [
        'Работающая веб-платформа доступна онлайн на ceosavdouz.netlify.app',
        'Проверенный открытый репозиторий на GitHub (imceobitchuzb/ceosavdouz)',
        'Складской учет, контроль остатков и автоматический расчет маржинальности',
        'Интеграция с Telegram Bot и WebApp для управления прямо со смартфона',
      ],
      uz: [
        'ceosavdouz.netlify.app manzilida onlayn ishlayotgan real platforma',
        'GitHub-da tasdiqlangan ochiq repozitoriy (imceobitchuzb/ceosavdouz)',
        'Ombor hisobi, qoldiqlar nazorati va foydani avtomatik hisoblash tizimi',
        'Smartfondan boshqarish uchun Telegram Bot va WebApp integratsiyasi',
      ],
    },
  },
];
