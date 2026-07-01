import { IResumeData } from "@/types/resume.type";

export const resumeData: IResumeData = {
  githubURL: "https://github.com/nikitaLomeiko",
  resumeURL: "/my-site/resume.pdf",
  stack: "React/Next.js + Node.js",
  yearExperience: "3 года",
  fullname: "Ломейко Никита Вадимович",
  avatarURL:
    "https://sun9-64.userapi.com/s/v1/ig2/QIQ8nj1yMuV5nDHVKtwMXabkzOZ7H5qHtLueCir-UKYZ3mUkQyDYFdianlAMG5T_wQrCe9v2WxoZhirqpxH2s1qe.jpg?quality=95&as=32x43,48x64,72x96,108x144,160x213,240x320,360x480,480x640,540x720,640x853,720x960,1080x1440,1280x1707,1440x1920,1920x2560&from=bu&cs=1920x0",
  status: "Создаю цифровые впечатления, а не просто интерфейсы",
  position: "Fullstack-разработчик",
  descriptions: [
    "Мой путь в IT начался в 14 лет с урока информатики, где мы погрузились в бескрайний мир Pascal ABC. Именно тогда детская любознательность переросла в осознанный интерес к программированию. На Паскале я постигал основы: типы данных, массивы, циклы и функции - это был мой первый фундамент.",
    "Вскоре я понял, что мир IT гораздо шире, и мой выбор пал на C#. С этим языком началось уже более серьёзное погружение: я изучал ООП, паттерны проектирования и создавал свои первые настоящие приложения. Разработка под Windows на WinForms и WPF не только увлекала, но и зародила во мне интерес к созданию интерфейсов - ту самую будущую любовь к фронтенду.",
    "Однако, следуя советам окружения, я решил углубиться в backend-разработку на ASP.NET Core. Этот этап научил меня строить логику серверной части, работать с базами данных (SQL), создавать API и применять современные архитектурные подходы.",
    "Со временем я осознал, что моё настоящее призвание - всё же фронтенд. Меня вдохновляет создание интерфейсов и интуитивно понятной логики на стороне клиента. Начав с основ HTML и CSS, я полностью переключился на это направление.",
    "На сегодняшний день я имею разносторонний опыт, который позволяет мне видеть картину разработки целиком. Моя текущая цель - углублённое развитие во фронтенд-технологиях. Параллельно я планирую укреплять знания в backend и осваивать базовые DevOps-практики, чтобы в перспективе закрывать более широкий спектр задач и повышать свою ценность для digital-компаний.",
  ],
  characteristics: [
    "Командный игрок с тактическим мышлением",
    "Быстро учусь и адаптируюсь",
    "Люблю создавать что-то крутое в команде",
    "Слежу за новыми технологиями",
  ],
  sectionSkills: [
    {
      name: "Основные технологии",
      iconClass: "fas fa-code",
      type: "primary",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP"],
    },
    {
      name: "Фронтенд-фреймворки",
      iconClass: "fas fa-rocket",
      type: "secondary",
      skills: ["React", "Next.js", "Vue", "Nuxt.js"],
    },
    {
      name: "Backend",
      type: "primary",
      iconClass: "fas fa-code",
      skills: [
        "Node.js",
        "Express.js",
        "Nest.js",
        "PostgreSQL",
        "Laravel",
        "MongoDB",
        "Docker",
      ],
    },
    {
      name: "Утилиты и инструменты (Frontend)",
      type: "primary",
      iconClass: "fas fa-tools",
      skills: [
        "React Router DOM",
        "React Hook Form",
        "Formik",
        "Zod",
        "ReactUse",
        "VueUse",
        "Vue-tg",
        "js-yaml",
        "i18next",
        "Chart.js",
        "React Flow",
        "D3.js",
        "Draft.js",
        "bcryptjs",
        "crypto-js",
        "Socket.IO",
        "Immer",
        "highlight.js",
        "Google Analytics/Yandex.Metrica",
        "Redux",
        "Flutter",
        "Redux Toolkit",
        "RTK Query",
        "MobX",
        "Pinia",
        "Zustand",
        "Effector",
        "axios",
        "react-query",
        "...",
      ],
    },
    {
      name: "Утилиты и инструменты (Backend)",
      type: "primary",
      iconClass: "fas fa-tools",
      skills: [
        "Swagger",
        "Postman",
        "bcrypt",
        "crypto",
        "dotenv",
        "mongoose",
        "nodemailer",
        "passport",
        "uuid",
        "...",
      ],
    },
    {
      name: "Сборщики",
      iconClass: "fas fa-tools",
      type: "secondary",
      skills: ["Vite", "Webpack", "CRA", "artisan"],
    },
    {
      name: "UI библиотеки и стилизация",
      iconClass: "fas fa-star",
      type: "primary",
      skills: [
        "Material UI",
        "Chakra UI",
        "Ant Design",
        "primereact/primevue",
        "Bootstrap UI",
        "Tailwind UI",
        "Sass",
        "SCSS",
        "Less",
        "Emotion",
        "Styled Components",
        "Tailwind",
        "Bootstrap",
      ],
    },
    {
      name: "Знание языков",
      iconClass: "fas fa-language",
      type: "accent",
      skills: ["Русский (родной)", "Английский (технический)"],
    },
    {
      name: "Профессиональные качества",
      iconClass: "fas fa-user-check",
      type: "secondary",
      skills: [
        "Создание универсальных компонентов",
        "Работа с легаси",
        "Работа в команде",
        "Контроль структуры проекта",
        "Проектирование архитектуры приложений",
        "Рефакторинг и улучшение архитектуры",
        "Оптимизация загрузки и производительности",
        "Проведение код-ревью",
        "Выбор оптимальных технологий под задачу",
        "Анализ производительности приложений",
        "Внимание к деталям",
        "Критическое мышление",
      ],
    },
  ],
  hobbyList: [
    {
      classIcon: "fas fa-guitar text-purple-400 mr-3",
      label: "Учусь играть на гитаре",
    },
    {
      classIcon: "fas fa-running text-blue-400 mr-3",
      label: "Занимаюсь спортом, особенно люблю страйкбол",
    },
    {
      classIcon: "fas fa-users text-green-400 mr-3",
      label: "Регулярно посещаю IT-митапы",
    },
    {
      classIcon: "fas fa-trophy text-yellow-400 mr-3",
      label: "Люблю хакатоны за их атмосферу и драйв",
    },
  ],
  experiences: [
    {
      companyName: "Rocket Dev",
      startDate: "Апрель 2025",
      endDate: "Октябрь 2025",
      descriptions: [
        "Работа в команде: присоединился к команде, начав с исправления ошибок и небольших задач. Со временем проявил себя, стал уверенно брать на себя более сложную работу и в результате получил роль в ключевом проекте компании.",
        "Работа с основным проектом: отвечал за его развитие: выполнял архитекрутно-оптимизационные задачи, внедрял новый функционал и исправлял ошибки. ",
        "Дополнительная активность: параллельно участвовал в других, менее крупных проектах и внутренних сервисах компании. Активно вовлекался в корпоративную жизнь, выступал на митапах, помогал в организации корпоративных мероприятий и готовил различные презентации.",
      ],
      position: "Frontend-разработчик",
      experienceWork: "7 мес",
      responsibility: [
        {
          classIcon: "fas fa-project-diagram text-blue-400 mt-1 mr-3",
          label:
            "Принимал полную ответственность за ключевой клиентский проект на всех этапах его жизненного цикла",
        },
        {
          classIcon: "fas fa-users text-blue-400 mt-1 mr-3",
          label:
            "Выступал на внутренних митапах, помогал с адаптацией на новом рабочем месте новичкам",
        },
        {
          classIcon: "fas fa-code-branch text-blue-400 mt-1 mr-3",
          label:
            "Участвовал в проведении код-ревью, обеспечивая качество и поддерживаемость кода в проекте",
        },
      ],
      achievements: [
        "Выполнял технические задачи по разработке ключевого продукта, способствуя его стабильности и выполнению требований бизнеса.",
        "Внедрил архитектурные улучшения и оптимизировал наиболее сложные модули системы, что повысило её производительность и масштабируемость.",
        "Занимался развитием внутренних продуктов компании для автоматизации рабочего процесса и повышения эффективности команды.",
      ],
      recommendations: [
        {
          messsage:
            "Никита быстро влился в команду, показал себя ответственным разработчиком, способным решать сложные задачи. Мы ценим его вклад в развитие наших проектов и уверены, что он будет ценным активом для любой компании.",
          name: "Антон",
          position: "Frontend-lead, Rocket Dev",
        },
        {
          messsage:
            "Никита проявил себя как отличный командный игрок, всегда готовый помочь коллегам. Его профессиональный рост за время работы в компании впечатляет. Рекомендую как перспективного специалиста.",
          name: "Дарья",
          position: "Менеджер по персоналу, Rocket Dev",
        },
      ],
    },
  ],
  projects: [
    {
      isCompanyProject: false,
      isPetProject: false,
      isStartupProject: true,
      isTestProject: false,
      imageUrl: "/media/project_photos/octoput.jpg",
      title: "Сайт для онлайн обучения программированию на основе AI",
      subtitle: "Стартап",
      iconClass: "fa fa-university text-2xl",
      descriptions: [
        "Сайт ведется полностью в соло-разработке.",
        "Разработал систему авторизации как на фронтенде, так и на бекенде. Авторизация работает по принципу JWT-токенов, поддериживается востановление аккаунта по Email, а также авторизация при помощи OAuth черещ Google, Github и Telegram",
        "Создал личный кабинет с возможностью редактировать данные и отслеживать информацию о прогрессе и навыках.",
        "Реализовал страницу для чтения докумкентации на основе Markdown с возможностями увеличивать и уменьшать текст, сохранять в форматах PDF, HTML, TXT и Markdown. Работает режим чтения Zen-mode для полной фокусировки. Реализован поиск по тексту (альтернатива alt+f). Также справа выводится карта документа по заголовком с возможностью удобно переходить по заголовкам.",
        "Дополнительно: вся бизнес-логика сайта, бизнес-модель проекта, архитектура, дизайн и прочее продумывается мною самостоятельно. Я полностью контролирую проект и несу ответственность за все его аспекты, от разработки до поддержки и развития.",
      ],
      languages: [
        "React",
        "TypeScript",
        "Next.js",
        "Node.js",
        "Nest.js",
        "MongoDB",
      ],
      label: "Достижения",
      labelList: [
        {
          classIcon: "fa fa-users text-green-400 mt-1 mr-3",
          label:
            "Разработал систему авторизации по принципам JWT-токенов и OAuth авторизации через Google, Github и Telegram.",
        },
        {
          classIcon: "fas fa-user text-blue-400 mt-1 mr-3",
          label:
            "Разработал личный кабинет с возможностью редактировать данные и отслеживать информацию о прогрессе и навыках.",
        },
        {
          classIcon: "fas fa-sticky-note text-white-400 mt-1 mr-3",
          label:
            "Реализовал страницу для чтения докумкентации на основе Markdown с гибкими инструментами конфигурации и утилитами для удобного чтения и навигации по тексту.",
        },
      ],
    },
    {
      isCompanyProject: true,
      isPetProject: false,
      isStartupProject: false,
      isTestProject: false,
      imageUrl: "/media/project_photos/mos_okna.jpg",
      title: "Сайт для продажи окон по Москве и МО",
      subtitle: "Сайт разработан в команде Rocket Dev",
      iconClass: "fa fa-window-maximize text-2xl",
      descriptions: [
        "Работал над редизайном личного кабинета. Принимал участие в разработке системы бонусных программ, акций и скидок. ",
        "Разработал универсальный генератор форм на основе JSON-конфигураций, позволяющий декларативно описывать сложные формы с валидацией, зависимыми полями и готовой логикой отправки. Это дало возможность контент-менеджерам самостоятельно создавать и изменять формы.",
        "Проводил глубокую оптимизацию производительности: устранял избыточные ререндеры, оптимизировал работу с состоянием и улучшил общий пользовательский опыт.",
        "Также занимался многочисленными правками, исправлениями ошибок, оптимизацией и улучшением pixel-perfect.",
      ],
      languages: ["React", "TypeScript", "Next.js"],
      label: "Достижения",
      labelList: [
        {
          classIcon: "fas fa-bolt text-yellow-400 mt-1 mr-3",
          label:
            "Переработал личный кабинет с обновлённой логикой бонусных программ, что повысило вовлечённость пользователей и частоту использования скидок",
        },
        {
          classIcon: "fas fa-cubes text-purple-400 mt-1 mr-3",
          label:
            "Внедрил генератор форм на JSON, сократив время разработки интерфейсов на 40% и позволив контент-менеджерам самостоятельно управлять формами",
        },
        {
          classIcon: "fas fa-ruler-combined text-green-400 mt-1 mr-3",
          label:
            "Провёл оптимизацию рендеринга, ускорив загрузку ключевых страниц на 25% и снизив количество ошибок, связанных с производительностью",
        },
      ],
      projectUrl: "https://www.mosokna.ru/",
    },
    {
      imageUrl: "/media/project_photos/dondevcon.jpg",
      title: "Информация о конференциях Rocket Dev",
      isCompanyProject: true,
      isPetProject: false,
      isStartupProject: false,
      isTestProject: false,
      subtitle: "Сайт разработан в команде Rocket Dev",
      iconClass: "fa fa-bullhorn text-2xl",
      descriptions: [
        "Провёл рефакторинг структуры проекта и оптимизировал код, повысив его читаемость и сопровождаемость.",
        "Наполнил сайт динамикой: от плавного скроллинга до тонких, но важных анимаций - переходы, реактивных hover-эффектов и интерактивных текстовых блоков.",
        "Обеспечил адаптивность и корректное отображение интерфейса на различных устройствах.",
        "Участвовал в наполнении сайта контентом и его актуализации.",
      ],
      languages: ["React", "TypeScript", "Next.js"],
      label: "Особенности",
      labelList: [
        {
          classIcon: "fas fa-code text-blue-400 mt-1 mr-3",
          label: "Рефакторинг структуры проекта и оптимизация кода",
        },
        {
          classIcon: "fas fa-sync-alt text-pink-400 mt-1 mr-3",
          label: "Анимации и динамика на сайте",
        },
        {
          classIcon: "fas fa-mobile-alt text-green-400 mt-1 mr-3",
          label: "Адаптивная вёрстка для всех устройств",
        },
        {
          classIcon: "fas fa-edit text-yellow-400 mt-1 mr-3",
          label: "Наполнение и обновление контента на сайте",
        },
      ],
      projectUrl: "https://ddconf.ru/",
    },
    {
      imageUrl: "/media/project_photos/rbru_other.jpg",
      title: "Остальные проекты Rocket Dev",
      isCompanyProject: true,
      isPetProject: false,
      isStartupProject: false,
      isTestProject: false,
      subtitle: "Сайты разработаны в команде Rocket Dev",
      iconClass: "fa fa-ellipsis-h text-2xl",
      descriptions: [
        "Участвовал в разработке интерактивного телеграм-бота для проведения викторин на конференциях и внутренних митапах компании",
        "Создал веб-интерфейс с таймером ответа, случайным порядком вариантов и системой отображения подключенных пользователей в реальном времени",
        "Участвовал в разработке системы учета навыков и грейдов сотрудников",
        "Разработал интерфейс доски задач для отслеживания профессионального роста",
      ],
      languages: ["React", "TypeScript", "Next.js", "PHP", "JavaScript", "..."],
      label: "Результаты",
      labelList: [
        {
          classIcon: "fas fa-robot text-blue-400 mt-1 mr-3",
          label: "Интерактивный телеграм-бот для проведения викторин",
        },
        {
          classIcon: "fas fa-tv text-purple-400 mt-1 mr-3",
          label: "Веб-интерфейс с таймером и системой рандомных ответов",
        },
        {
          classIcon: "fas fa-user-plus text-green-400 mt-1 mr-3",
          label: "Отслеживание подключенных пользователей в реальном времени",
        },
        {
          classIcon: "fas fa-rocket text-orange-400 mt-1 mr-3",
          label: "Разработка системы оценки навыков и грейдов сотрудников",
        },
        {
          classIcon: "fas fa-chalkboard-teacher text-indigo-400 mt-1 mr-3",
          label: "Доска задач для управления профессиональным развитием",
        },
      ],
    },
    {
      projectUrl: "https://nikitalomeiko.github.io/docker.net.designer/",
      repositoryUrl: "https://github.com/nikitaLomeiko/docker.net.designer",
      imageUrl: "/media/project_photos/docker.jpg",
      title: "docker.net.designer",
      isCompanyProject: false,
      isPetProject: true,
      isStartupProject: false,
      isTestProject: false,
      subtitle: "Проект разработаный в рамках хакатона",
      iconClass: "fab fa-docker text-2xl",
      descriptions: [
        "В рамках хакатона разработали Docket Compose - конструктор сетевых коммуникаций для проектирования Docker-конфигураций. Реализовали функционал создания Docker-элементов, импорта/экспорта YML/YAML-кода и визуального редактирования компонентов.",
        "После хакатона провёл рефакторинг проекта с переходом на FSD-архитектуру, что улучшило производительность системы и повысило читаемость кода при сохранении полного функционала.",
      ],
      languages: ["React", "TypeScript", "Tailwind", "React-flow"],
      label: "Функционал",
      labelList: [
        {
          classIcon: "fas fa-network-wired text-blue-400 mt-1 mr-3",
          label:
            "Визуальное проектирование сетевых коммуникаций и сервисов Docker",
        },
        {
          classIcon: "fas fa-cube text-purple-400 mt-1 mr-3",
          label:
            "Создание и настройка любых Docker-элементов через интуитивный интерфейс",
        },
        {
          classIcon: "fas fa-arrows-alt text-green-400 mt-1 mr-3",
          label: "Драг-энд-дроп система для построения схем развертывания",
        },
        {
          classIcon: "fas fa-file-import text-yellow-400 mt-1 mr-3",
          label: "Импорт существующих YML/YAML-конфигураций",
        },
        {
          classIcon: "fas fa-file-export text-pink-400 mt-1 mr-3",
          label: "Экспорт проектов в готовые YML/YAML-файлы",
        },
        {
          classIcon: "fas fa-code text-indigo-400 mt-1 mr-3",
          label: "Визуальное редактирование параметров с синхронизацией кода",
        },
      ],
    },
    {
      projectUrl: "https://nikitalomeiko.github.io/sort-visual/",
      repositoryUrl: "https://github.com/nikitaLomeiko/sort-visual",
      imageUrl: "/media/project_photos/sort.jpg",
      title: "Визуализация сортировок",
      isCompanyProject: false,
      isPetProject: true,
      isStartupProject: false,
      isTestProject: false,
      subtitle: "Сайт для визуализации базовых методов сортировок",
      iconClass: "fa fa-filter text-2xl",
      descriptions: [
        "Разработал сайт для наглядной визуализации базовых алгоритмов сортировки в рамках проектной работы для преподавателя. Реализовал интерактивную демонстрацию работы методов с анимацией и пошаговым выполнением.",
      ],
      languages: [
        "React",
        "TypeScript",
        "Tailwind",
        "react-syntax-highlighter",
      ],
      label: "Достижения",
      labelList: [
        {
          classIcon: "fas fa-lightbulb text-blue-400 mt-1 mr-3",
          label:
            "Создал эффективный образовательный инструмент для изучения алгоритмов",
        },
        {
          classIcon: "fas fa-chalkboard-teacher text-purple-400 mt-1 mr-3",
          label: "Разработанный сайт активно используется на учебных парах",
        },
        {
          classIcon: "fas fa-tachometer-alt text-green-400 mt-1 mr-3",
          label: "Реализовал интерактивную визуализацию с плавной анимацией",
        },
        {
          classIcon: "fas fa-check-circle text-yellow-400 mt-1 mr-3",
          label: "Выполнил проектную работу в кратчайшие сроки",
        },
        {
          classIcon: "fas fa-users text-pink-400 mt-1 mr-3",
          label: "Упростил процесс обучения для студентов",
        },
        {
          classIcon: "fas fa-clock text-indigo-400 mt-1 mr-3",
          label: "Сократил время на подготовку учебных материалов",
        },
      ],
    },
    {
      projectUrl: "https://nikitalomeiko.github.io/pressfeed/",
      repositoryUrl: "https://github.com/nikitaLomeiko/pressfeed",
      imageUrl: "/media/project_photos/pressfeed.jpg",
      title: "Pressfeed",
      isCompanyProject: false,
      isPetProject: true,
      isStartupProject: false,
      isTestProject: false,
      subtitle: "Куратор по работе с сервисом Pressfeed",
      iconClass: "fa fa-user text-2xl",
      descriptions: [
        "Сверстал сайт по макету, совпадение с макетом около 98%. Добавил множества анимаций и интерактивности на сайт. Продемонстрирована скороть работы, качество, адаптивность и интерактивность",
      ],
      languages: [
        "HTML",
        "CSS",
        "JavaScript",
        "AOS",
        "lenis",
        "rellax",
        "glow.js",
      ],
      label: "Достижения",
      labelList: [
        {
          classIcon: "fas fa-star text-blue-400 mt-1 mr-3",
          label:
            "Создал высококачественный сайт с точным соответствием макету и богатой анимацией, продемонстрировав свои навыки в верстке",
        },
        {
          classIcon: "fas fa-tachometer-alt text-purple-400 mt-1 mr-3",
          label: "В короткие сроки уложил разработку и деплой сайта",
        },
        {
          classIcon: "fas fa-play text-green-400 mt-1 mr-3",
          label:
            "Реализовал множество анимаций и интерактивных элементов, что значительно улучшило пользовательский опыт",
        },
      ],
    },
    {
      projectUrl: "https://nikitalomeiko.github.io/dstu_test/",
      repositoryUrl: "https://github.com/nikitaLomeiko/dstu_test",
      imageUrl: "/media/project_photos/dstu.jpg",
      title: "Тестовое задание для ДГТУ",
      isCompanyProject: false,
      isPetProject: false,
      isStartupProject: false,
      isTestProject: true,
      subtitle: "Сайт для отзывов",
      iconClass: "fa fa-pencil text-2xl",
      descriptions: [
        "Разработал сайт как тестовое задание для ДГТУ. Сайт предназначен для публикации отзывов на разные темы с вомзожностью сортировки и фильтрации. Реализовал удобный интерфейс для добавления, редактирования и удаления отзывов, а также систему категорий и тегов для удобной навигации по контенту.",
        "Данный проект помог мне попасть в команду разработки эко-системы сайтов ДГТУ, но к сожалению условия мне не подошли.",
      ],
      languages: ["React", "TypeScript", "Express.js", "Json-server"],
      label: "Достижения",
      labelList: [
        {
          classIcon: "fas fa-tachometer text-red-400 mt-1 mr-3",
          label: "В короткие сроки создал и задеплоил функциональный продукт",
        },
        {
          classIcon: "fas fa-star text-purple-400 mt-1 mr-3",
          label:
            "Разработанный сайт получил высокую оценку среди кандидатов. Как итог, я получил приглашение в команду разработки эко-системы сайтов ДГТУ",
        },
      ],
    },
    {
      repositoryUrl:
        "https://github.com/nikitaLomeiko/rocket_business_test.git",
      imageUrl: "/media/project_photos/rbru.jpg",
      title: "Тестовое задание для Rocket Business",
      isCompanyProject: false,
      isPetProject: false,
      isStartupProject: false,
      isTestProject: true,
      subtitle: "Сайт для демонстрирования работы с гридами и видео",
      iconClass: "fa fa-television text-2xl",
      descriptions: [
        "Разработал сайт как тестовое задание для Rocket Business. Сайт предназначен для демонстрации работы с гридами и видео.",
        "Сайт был разработан в кратчайшие сроки для демонстрации моих навыков и получил высокую оценку.",
      ],
      languages: ["JavaScript", "HTML", "CSS", "YT-api"],
      label: "Достижения",
      labelList: [
        {
          classIcon: "fas fa-tachometer text-red-400 mt-1 mr-3",
          label: "В короткие сроки создал функциональный продукт",
        },
        {
          classIcon: "fas fa-star text-purple-400 mt-1 mr-3",
          label:
            "Разработанный сайт получил высокую оценку среди кандидатов. Как итог, я получил приглашение в команду Rocket Business",
        },
      ],
    },
  ],
  location: "Ростов-на-Дону, Россия",
  email: "nickitalomeiko@yandex.ru",
  phone: "+7 (986) 013-83-00",
  telegram: "nikitadevelopment",
  vk: "https://vk.com/id390878963",
  businessTrips: "готов",
  formatWork: "офис, удалённо, гибрид, разъездная, вахта",
  removal: "не готов",
  travelTime: "не имеет значения",
  typeEmployment: "полная занятость",
};
