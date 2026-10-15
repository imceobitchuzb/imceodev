import { CaseStudy } from '../types';

export const caseStudiesData: CaseStudy[] = [
  {
    id: 'case-nexora',
    title: 'NEXORA MARKET — Multi-Channel E-Commerce Architecture',
    projectRefId: 'nexora-market',
    subtitle: {
      en: 'Bridging a lightning-fast web storefront with an automated Telegram commerce pipeline.',
      ru: 'Объединение быстрого веб-магазина с автоматизированным Telegram-ботом заказов.',
      uz: 'Tezkor veb-do‘kon va avtomatlashtirilgan Telegram savdo botini yagona tizimga birlashtirish.',
    },
    challenge: {
      en: 'In Uzbekistan, many shoppers prefer purchasing directly through Telegram, while desktop shoppers prefer structured web catalogs. The goal was to build a dual-channel platform without duplicating inventory logic or requiring expensive hosting infrastructure.',
      ru: 'В Узбекистане значительная часть клиентов предпочитает заказывать товары через Telegram, тогда как десктопным пользователям удобен веб-каталог. Задача состояла в создании двусторонней системы без дублирования каталога и лишних затрат на хостинг.',
      uz: 'O‘zbekistonda ko‘plab xaridorlar Telegram orqali xarid qilishni afzal ko‘rishadi, kompyuter foydalanuvchilariga esa veb-sayt qulay. Asosiy maqsad — mahsulotlar bazasini takrorlamasdan va ortiqcha server xarajatlarisiz ikkala tomonlama platforma yaratish edi.',
    },
    solution: {
      en: 'Engineered a clean React + Tailwind CSS client deployed on Netlify CDN for sub-second static loads. Connected the catalog to a lightweight backend API and integrated Telegram Bot webhooks (@nexoramarketsbot) allowing instant notification and order handoff.',
      ru: 'Разработан клиент на React и Tailwind CSS с деплоем на Netlify CDN для мгновенной загрузки. Каталог подключен к REST API с вебхуками Telegram-бота (@nexoramarketsbot) для мгновенных уведомлений о заказах.',
      uz: 'Netlify CDN tarmog‘ida bir zumda yuklanuvchi React va Tailwind CSS veb-ilovasi yaratildi. Katalog REST API orqali Telegram bot (@nexoramarketsbot) bilan ulandi va buyurtmalar to‘g‘ridan-to‘g‘ri botga yuborilishi ta’minlandi.',
    },
    technologies: ['React', 'Tailwind CSS', 'Telegram Bot API', 'Netlify', 'Render API', 'REST'],
    results: {
      en: [
        'Live production web application verified at nexoramarketss.netlify.app',
        'Functional Telegram bot handle (@nexoramarketsbot) verified for interactive ordering',
        'Zero fixed server hosting cost utilizing modern free tier capabilities',
        'Single maintainable repository architecture',
      ],
      ru: [
        'Работающее веб-приложение доступно по адресу nexoramarketss.netlify.app',
        'Рабочий Telegram-бот (@nexoramarketsbot) для взаимодействия с клиентами',
        'Нулевая фиксированная стоимость хостинга на базе современных бесплатных тарифов',
        'Единая прозрачная архитектура кодовой базы',
      ],
      uz: [
        'nexoramarketss.netlify.app manzilida ishlayotgan real veb-ilova',
        'Mijozlar bilan ishlash uchun faol Telegram bot (@nexoramarketsbot)',
        'Zamonaviy bepul tariflar hisobiga doimiy server to‘lovlarining yo‘qligi',
        'Oson boshqariladigan va tushunarli kod tuzilmasi',
      ],
    },
  },
  {
    id: 'case-ceoweb',
    title: 'CEOWEB — Gamified Social State Machine & Dynamic Feed',
    projectRefId: 'ceoweb-social',
    subtitle: {
      en: 'Architecting an interactive frontend with belt ranks, streak counters, and responsive challenges.',
      ru: 'Проектирование интерактивного интерфейса с рангами, счетчиками серий и лентой испытаний.',
      uz: 'Reyting darajalari, kunlik seriyalar hisoblagichi va interaktiv tasmaga ega frontend arxitekturasi.',
    },
    challenge: {
      en: 'Maintaining synchronized user state across multiple interactive widgets (XP accumulation, challenge progress, belt promotions, ephemeral feeds) without causing excessive DOM re-renders or sluggish mobile performance.',
      ru: 'Синхронизация состояния пользователя между множеством интерактивных виджетов (начисление XP, прогресс испытаний, повышение рангов, лента постов) без лишних ре-рендеров и тормозов на смартфонах.',
      uz: 'Ko‘plab interaktiv bloklar (XP to‘plash, vazifalar bajarilishi, yangi darajalarga chiqish) o‘rtasida sahifani sekinlashtirmasdan va keraksiz qayta chizishlarsiz ma’lumotlarni muvofiqlashtirish.',
    },
    solution: {
      en: 'Utilized React TypeScript with modular custom hooks and predictable state reducers. Isolated feed components, memoized heavy computations, and adopted Tailwind CSS utility classes to achieve zero runtime CSS overhead.',
      ru: 'Использован React со строгой типизацией TypeScript, модульными хуками и предсказуемыми редьюсерами состояния. Изолированы компоненты ленты и устранен оверхед CSS за счет компилируемого Tailwind CSS.',
      uz: 'React TypeScript, modulli xuklar va ma’lumotlarni boshqarishning aniq tuzilmasi qo‘llandi. Tailwind CSS yordamida ortiqcha yuklama bartaraf etildi va tezkorlik ta’minlandi.',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'State Reducers', 'Netlify'],
    results: {
      en: [
        'Live interactive challenge feed verified at socialmediauz.netlify.app/challenges',
        '100% type-safe codebase in public GitHub repository',
        'Smooth touch gestures and instant state responsiveness on mobile devices',
        'Predictable deterministic state machine preventing inconsistent UI flags',
      ],
      ru: [
        'Интерактивная лента челленджей доступна на socialmediauz.netlify.app/challenges',
        '100% типизированная кодовая база в публичном репозитории GitHub',
        'Плавный отзыв на сенсорных устройствах и мгновенная реакция интерфейса',
        'Предсказуемая логика состояний без рассинхронизации данных',
      ],
      uz: [
        'socialmediauz.netlify.app/challenges manzilida ishlayotgan interaktiv sahifa',
        'GitHub-dagi ochiq repozitoriyda 100% qat’iy turlangan kod',
        'Smartfonlarda silliq va tezkor javob beruvchi interfeys',
        'Ma’lumotlar chalkashligining oldini oluvchi aniq mantiqiy tuzilma',
      ],
    },
  },
  {
    id: 'case-sat',
    title: 'SAT MASTER — Active Remediation Pedagogical Engine',
    projectRefId: 'sat-master',
    subtitle: {
      en: 'Replacing passive question-and-answer testing with an automated diagnostic loop in Next.js & FastAPI.',
      ru: 'Замена пассивного тестирования алгоритмом адаптивного обучения на Next.js и FastAPI.',
      uz: 'Oddiy savol-javob o‘rniga Next.js va FastAPI-da moslashuvchan o‘qitish tizimini joriy etish.',
    },
    challenge: {
      en: 'Students preparing for the Digital SAT frequently plateau because standard test prep platforms merely show whether an answer is correct without diagnosing why the student erred (timing trap, misread, or concept gap).',
      ru: 'Студенты часто упираются в «потолок» баллов на стандартных тестах, потому что платформы лишь показывают правильный ответ, но не выявляют причину ошибки (нехватка времени, невнимательность или незнание правила).',
      uz: 'Standart test platformalari faqat to‘g‘ri yoki noto‘g‘ri javobni ko‘rsatadi, ammo xatoning tub sababini (vaqt yetishmasligi, chalg‘ish yoki mavzuni tushunmaslik) aniqlab bermaydi.',
    },
    solution: {
      en: 'Designed an active Remediation Loop architecture (Question -> Answer -> Categorize error type -> Micro-lesson -> Retest similar skill). Implemented modular FastAPI endpoints and a Telegram Mini App frontend in Next.js 14 with Docker containerization.',
      ru: 'Спроектирован адаптивный алгоритм (Вопрос -> Ответ -> Классификация ошибки -> Микро-урок -> Тест похожего навыка). Созданы модульные эндпоинты FastAPI и Telegram Mini App на Next.js 14 с Docker-окружением.',
      uz: 'Faol tahlil zanjiri arxitekturasi ishlab chiqildi (Savol -> Javob -> Xato turini ajratish -> Qisqa dars -> O‘xshash savol bilan mustahkamlash). Next.js 14 va FastAPI asosida Telegram Mini App yaratildi.',
    },
    technologies: ['Next.js 14', 'React 18', 'TypeScript', 'FastAPI', 'Docker', 'Tailwind CSS'],
    results: {
      en: [
        'Complete repository and unit test suites verified at github.com/imceobitchuzb/newbot',
        'Pedagogical remediation pipeline validated with end-to-end question workflows',
        'Containerized local development setup with automated startup scripts',
        'Seamless integration pathway into Telegram via WebApp SDK',
      ],
      ru: [
        'Кодовая база и тесты верифицированы на github.com/imceobitchuzb/newbot',
        'Алгоритм адаптивного обучения проверен на сквозных тестовых сценариях',
        'Контейнеризированное dev-окружение с автоматическими скриптами запуска',
        'Готовая интеграция с Telegram WebApp SDK',
      ],
      uz: [
        'github.com/imceobitchuzb/newbot manzilida tasdiqlangan kod va testlar',
        'Xatolarni tahlil qilish algoritmi to‘liq sinovdan o‘tkazilgan',
        'Docker orqali tezkor ishga tushirish skriptlari tayyorlangan',
        'Telegram WebApp SDK bilan to‘liq integratsiyaga tayyor',
      ],
    },
  },
];
