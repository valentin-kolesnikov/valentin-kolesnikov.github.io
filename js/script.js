

const translations = {
    en: {
        brandName: "Valentin Kolesnikov",
        // --- Navigation & Common ---
        themeBtn: "Theme",
        backBtn: "← Back to Home",
        githubBtn: "View on GitHub",
        home: "About me",
        
        // --- Index Page (Existing) ---
        aboutText: "Welcome. I am Valentin Kolesnikov. I specialize in Python development, algorithms, and data analysis tools. Explore my key projects below to see my code in action.",
        ytShort: "Deep data analysis tool for YouTube content.",
        rpsShort: "Advanced implementation of the classic game.",
        rsaShort: "Custom implementation of RSA encryption.",
        notepadShort: "Simple desktop text editor built with Python.",
        ytDesc1: "YouTube Explorer is a comprehensive tool designed for content creators and analysts. It bypasses the limitations of the standard YouTube interface to provide deep insights into video metadata.",
        ytDesc2: "Key capabilities include extracting hidden tags, analyzing engagement metrics in real-time, and filtering content based on advanced parameters not available on the web version.",
        ytDesc3: "The project focuses on speed and accuracy, utilizing efficient algorithms to process large datasets of video information.",
        rpsDesc1: "A robust implementation of the classic game 'Rock, Paper, Scissors'. This project demonstrates clean code structure, user input handling, and game logic state management.",
        rpsDesc2: "It serves as a perfect example of algorithmic thinking applied to simple interactive systems, ensuring edge cases are handled and the user experience is smooth.",
        rsaDesc1: "A custom implementation of the RSA (Rivest–Shamir–Adleman) public-key cryptosystem. This project explores the mathematical foundations of modern web security.",
        rsaDesc2: "It includes key generation (public and private), encryption of messages, and decryption processes, providing a transparent view into how secure data transmission works.",
        notepadDesc1: "A lightweight and efficient text editor designed for speed and simplicity. Built with Python, it mirrors the classic functionality of standard notepads but with a cleaner codebase.",
        notepadDesc2: "Features include creating, opening, and saving text files, as well as essential editing tools. It serves as a practical example of building desktop GUI applications.",

        // --- YouTube Explorer Page (NEW) ---
        ye_meta: "Main Project • Python • Data Analysis",
        ye_title_main: "YouTube Explorer",
        ye_intro: "<strong>YouTube Explorer</strong> is a console-based Python tool for programmatic exploration of YouTube content using <strong>YouTube Data API v3</strong> (with OAuth 2.0 support), <strong>Return YouTube Dislike API</strong>, and <strong>YouTube Transcript API</strong>",
        ye_designed_for: "It is designed for:",
        ye_list_1: "Working within YouTube API quota limits",
        ye_list_2: "Retrieving and filtering comments",
        ye_list_3: "Searching videos and retrieving playlists",
        ye_list_4: "Extracting metadata",
        ye_list_5: "Collecting subtitles",
        
        toc_title: "🗒️Table of Contents",
        toc_ye: "YouTube Explorer",
        toc_toc: "🗒️Table of Contents",
        toc_req: "❗Requirements",
        toc_apikey: "❓How to get the YouTube Data API v3 key?",
        toc_core: "Core capabilities",
        toc_core_key: "🔑YouTube API key handling",
        toc_core_quota: "🚪Quota inspection",
        toc_core_oauth: "🛡️OAuth 2.0 Integration",
        toc_core_comment: "💌Comment Explorer",
        toc_core_video: "📹Video Explorer",
        toc_core_channel: "📈Channel Explorer",
        toc_core_subs: "📄Subtitles Explorer",
        toc_core_info: "🔢Info Explorer",
        toc_func: "⚙️ Functionality",
        toc_future: "🔧 What do I plan to make in the future?",
        toc_license: "🖌️License",
        toc_contrib: "❤️Contributing",
        toc_how: "🤝How to contribute",
        toc_issues: "❓Issues",

        req_title: "❗Requirements",
        req_p: "To use YouTube Explorer, you need the following:",
        req_li_1: "Your desire to use <strong>YouTube Explorer</strong>",
        req_li_2: "A valid YouTube Data API v3 key issued via Google Cloud Console",
        req_li_3: "Python 3.10 or newer (required when running from the repository)",
        req_li_4: "A stable Internet connection",
        req_note: "Basic familiarity with command-line usage is recommended.",

        api_title: "❓How to get the YouTube Data API v3 key?",
        api_li_1: "You need to follow <a href='https://console.cloud.google.com'>Google Cloud Console</a>",
        api_li_2: "You need to register for a Google account or log in to it.",
        api_li_3: "Next, you press the <code class='inline-code'>Create or select a project</code> button in the center of the page → <code class='inline-code'>New project</code>",
        api_li_4: "Next, you write the project name (Google can <strong>automatically</strong> specify the name, you do not have to write this name if you want) → If you do not have an organisation, just do not touch the <code class='inline-code'>Location</code> item. → Press <code class='inline-code'>Create</code>.",
        api_li_5: "Without leaving the site, you need to press <code class='inline-code'>Select project</code> and choose your project. You write to the search engine: <strong>YouTube Data API v3</strong> → <code class='inline-code'>Enable</code>",
        api_li_6: "You will be redirected to the API configuration. In the left column, you should press <code class='inline-code'>Credentials</code>.",
        api_li_7: "At the top, click <code class='inline-code'>Create credentials</code> → <code class='inline-code'>API key</code>.",
        api_li_8: "The end of the way! Just copy your API key and paste it into the Windows notepad or somewhere else.",

        core_title: "Core capabilities",
        
        key_title: "🔑YouTube API key handling",
        key_li_1: "Initial validation of the provided API key before execution",
        key_li_2: "Automatic creation and storage of a <code class='inline-code'>Key.bin</code> file",
        key_li_3: "Exclusion of re-entering the key after successful verification",

        quota_title: "🚪Quota inspection",
        quota_li_1: "Detects current availability of the YouTube API quota",
        quota_li_2: "Stops execution if further requests are not possible",

        oauth_title: "🛡️OAuth 2.0 Integration",
        oauth_li_1: "The application is designed to use <strong>OAuth 2.0</strong> as the primary authentication method",
        oauth_li_2: "If OAuth client secrets are not found, the system switches to the <strong>YouTube Data API Key</strong> method without interrupting the user",

        comm_title: "💌Comment Explorer",
        comm_li_1: "get a list of comments on YouTube videos in the console",
        comm_li_2: "filter comments by keyword",
        comm_li_3: "sort <code class='inline-code'>by time</code> or <code class='inline-code'>by relevance</code>",
        comm_li_4: "limit the number of output results",
        comm_li_5: "find out the channel's name where the video is hosted",
        comm_li_6: "Comment Explorer inform why an error occured if it is a cause",

        vid_title: "📹Video Explorer",
        vid_li_1: "Search for videos by your prompt",
        vid_li_2: "Perform region-specific searches",
        vid_li_3: "Apply optional filters such as: <code class='inline-code'>publication date range</code> and <code class='inline-code'>video duration</code>",
        vid_li_4: "Control the maximum number of returned search results",
        vid_li_5: "For one video you will receive the information block:",
        vid_sub_1: "The title of the video",
        vid_sub_2: "Direct URL",
        vid_sub_3: "View count",
        vid_sub_4: "Like count",
        vid_sub_5: "Dislike count",
        vid_sub_6: "Comment count",
        vid_sub_7: "Publication date",
        vid_sub_8: "Channel name and channel URL",

        chan_title: "📈Channel Explorer",
        chan_li_1: "Collect most of the channel statistics:",
        chan_sub_1: "subscriber count",
        chan_sub_2: "view count",
        chan_sub_3: "description",
        chan_sub_4: "registration date",
        chan_sub_5: "Channel ID (UC...)",
        chan_sub_6: "Handle (@...)",
        chan_li_2: "If necessary, you can search videos on the channel thanks to Video Explorer",

        subs_title: "📄Subtitles Explorer",
        subs_li_1: "<strong>Subtitles Explorer</strong> makes extracting text from videos effortless and flexible. You simply enter the two-letter language codes, such as <code class='inline-code'>en</code> or <code class='inline-code'>ru</code>",
        subs_li_2: "It gives you the choice between <code class='inline-code'>manually created</code> subtitles for better accuracy or <code class='inline-code'>auto-generated</code> transcripts. The system is designed to handle missing data intelligently",
        subs_li_3: "If your preferred transcript type is not available, it will not just show an error and stop. Instead, it detects the issue and offers the alternative version immediately, ensuring you can still retrieve the content you are looking for.",

        info_title: "🔢Info Explorer",
        info_li_1: "Enter a specific video URL to directly extract metadata without searching",
        info_li_2: "Returns the complete information block detailed in <a href='#video-explorer'>Video Explorer</a> and, additionally, the video description",

        func_title: "⚙️ Functionality",
        func_li_1: "<strong>Authentication</strong> — <strong>OAuth 2.0</strong> is prioritized for secure access. If OAuth credentials are not detected, the application uses the <strong>YouTube Data API key</strong> stored in <code class='inline-code'>Key.bin</code>.",
        func_li_2: "<strong>Link parsing</strong> — <code class='inline-code'>video id</code>, <code class='inline-code'>channel id</code> (UC...), and <code class='inline-code'>handle</code> (@...) are automatically extracted from the links you enter.",
        func_li_3: "<strong>Search filters</strong> — You can filter videos by <code class='inline-code'>Region</code>, <code class='inline-code'>Dimension</code> (2D or 3D), <code class='inline-code'>Duration</code>, and <code class='inline-code'>Date</code> (using the smart calendar).",
        func_li_4: "<strong>Channel search</strong> — Unlike standard search, you can perform keyword searches specifically inside a channel's library.",
        func_li_5: "<strong>Smart Subtitles</strong> — <strong>YouTube Transcript API</strong> is integrated. It looks for <code class='inline-code'>manually created</code> subtitles first. If they are missing, it asks if you want <code class='inline-code'>auto-generated</code> ones.",
        func_li_6: "<strong>Dislikes</strong> — <strong>Return YouTube Dislike API</strong> is integrated to show dislike counts mixed with official data.",
        func_li_7: "<strong>Comment filtering</strong> — <strong>Keywords</strong> are used to filter comments and replies locally. The YouTube Data API does not do this filtering.",
        func_li_8: "<strong>Quota check</strong> — A test request is made at the start to ensure your <strong>YouTube API quota</strong> is not exceeded before running.",

        fut_title: "🔧 What do I plan to make in the future?",
        fut_li_1: "The ability to save received comments and videos",
        fut_li_2: "Explore the channels",
        fut_li_3: "A more user-friendly, interactive command-line interface",
        fut_li_4: "Playlist Explorer",
        fut_li_5: "Subtitles Explorer",

        lic_title: "🖌️License",
        lic_p1: "YouTubeExplorer is licensed under the Apache-2.0 license.",
        lic_p2: "Versions released before 22-01-2026 were licensed under the MIT License.",
        lic_p3: "Author: Valentin Kolesnikov",
        lic_p4: "Original repository: <a href='https://github.com/valentin-kolesnikov/YouTube_Explorer'>YouTube_Explorer</a>",
        lic_p5: "For more details, see the <a href='LICENSE'>LICENSE</a> and <a href='NOTICE'>NOTICE</a> files.",

        contr_title: "❤️Contributing",
        contr_p1: "Thank you for your interest in contributing to this project.",
        contr_p2: "This project is licensed under the <code class='inline-code'>Apache License, Version 2.0</code>. By submitting a pull request, you agree that your contribution will be licensed under the <code class='inline-code'>Apache License 2.0</code>.",
        contr_p3: "If you create a fork or derivative work based on this project, please provide clear attribution in your <code class='inline-code'>README</code>.",
        contr_p4: "A recommended attribution format is:",
        contr_p5: "<code class='inline-code'>Original project: YouTube Explorer by Valentin Kolesnikov</code>",
        contr_p6: "This attribution helps avoid confusion about authorship and is considered good open-source practice.",

        how_title: "🤝How to contribute",
        how_li_1: "Fork the repository.",
        how_li_2: "Create a branch for your change.",
        how_li_3: "Submit a pull request with a clear description.",
        how_li_4: "Make sure your changes are well documented.",

        iss_title: "❓Issues",
        iss_p: "I will be glad to see your opinions and ideas for new features or improvements. Moreover, please report bugs. Just open an issue and surprise me!"
    },
    ru: {
        brandName: "Валентин Колесников",
        // --- Navigation & Common ---
        themeBtn: "Тема",
        backBtn: "← На Главную",
        githubBtn: "Смотреть на GitHub",
        home: "Обо мне",

        aboutText: "Приветствую. Я Валентин Колесников. Я специализируюсь на разработке Python, алгоритмах и инструментах анализа данных. Изучите мои ключевые проекты ниже.",
        ytShort: "Инструмент глубокого анализа данных YouTube.",
        rpsShort: "Продвинутая реализация классической игры.",
        rsaShort: "Кастомная реализация шифрования RSA.",
        notepadShort: "Простой текстовый редактор на Python.",
        ytDesc1: "YouTube Explorer — это комплексный инструмент для создателей контента и аналитиков. Позволяет получать глубокие инсайты о видео.",
        ytDesc2: "Ключевые возможности включают извлечение скрытых тегов и анализ метрик вовлеченности в реальном времени.",
        ytDesc3: "Проект сфокусирован на скорости и точности, используя эффективные алгоритмы для обработки больших данных.",
        rpsDesc1: "Надежная реализация классической игры 'Камень, Ножницы, Бумага'. Демонстрирует чистый код и управление состоянием.",
        rpsDesc2: "Служит отличным примером алгоритмического мышления в интерактивных системах и обработки пользовательского ввода.",
        rsaDesc1: "Кастомная реализация криптосистемы RSA. Исследует математические основы современной безопасности.",
        rsaDesc2: "Включает генерацию ключей, шифрование и дешифрование, показывая, как работает безопасная передача данных.",
        notepadDesc1: "Легкий и эффективный текстовый редактор, созданный для скорости и простоты. Написан на Python.",
        notepadDesc2: "Функции включают создание, открытие и сохранение файлов. Практический пример создания GUI-приложений.",

        ye_meta: "Основной проект • Python • Анализ данных",
        ye_title_main: "YouTube Explorer",
        ye_intro: "<strong>YouTube Explorer</strong> — это консольный инструмент на Python для программного исследования контента YouTube с использованием <strong>YouTube Data API v3</strong> (с поддержкой OAuth 2.0), <strong>Return YouTube Dislike API</strong> и <strong>YouTube Transcript API</strong>.",
        ye_designed_for: "Он предназначен для:",
        ye_list_1: "Работы в рамках лимитов квот YouTube API",
        ye_list_2: "Получения и фильтрации комментариев",
        ye_list_3: "Поиска видео и получения плейлистов",
        ye_list_4: "Извлечения метаданных",
        ye_list_5: "Сбора субтитров",
        
        toc_title: "🗒️Оглавление",
        toc_ye: "YouTube Explorer",
        toc_toc: "🗒️Оглавление",
        toc_req: "❗Требования",
        toc_apikey: "❓Как получить ключ YouTube Data API v3?",
        toc_core: "Основные возможности",
        toc_core_key: "🔑Обработка ключа YouTube API",
        toc_core_quota: "🚪Проверка квоты",
        toc_core_oauth: "🛡️Интеграция OAuth 2.0",
        toc_core_comment: "💌Comment Explorer",
        toc_core_video: "📹Video Explorer",
        toc_core_channel: "📈Channel Explorer",
        toc_core_subs: "📄Subtitles Explorer",
        toc_core_info: "🔢Info Explorer",
        toc_func: "⚙️ Функциональность",
        toc_future: "🔧 Что я планирую сделать в будущем?",
        toc_license: "🖌️Лицензия",
        toc_contrib: "❤️Участие в разработке",
        toc_how: "🤝Как внести свой вклад",
        toc_issues: "❓Вопросы и ошибки",

        req_title: "❗Требования",
        req_p: "Для использования YouTube Explorer вам потребуется следующее:",
        req_li_1: "Ваше желание использовать <strong>YouTube Explorer</strong>",
        req_li_2: "Действующий ключ YouTube Data API v3, полученный через Google Cloud Console",
        req_li_3: "Python 3.10 или новее (требуется при запуске из репозитория)",
        req_li_4: "Стабильное интернет-соединение",
        req_note: "Рекомендуется базовое знакомство с командной строкой.",

        api_title: "❓Как получить ключ YouTube Data API v3?",
        api_li_1: "Вам нужно перейти в <a href='https://console.cloud.google.com'>Google Cloud Console</a>",
        api_li_2: "Зарегистрируйте аккаунт Google или войдите в него.",
        api_li_3: "Далее нажмите кнопку <code class='inline-code'>Create or select a project</code> в центре страницы → <code class='inline-code'>New project</code>",
        api_li_4: "Затем введите имя проекта (Google может задать его <strong>автоматически</strong>, писать имя необязательно) → Если у вас нет организации, не трогайте пункт <code class='inline-code'>Location</code>. → Нажмите <code class='inline-code'>Create</code>.",
        api_li_5: "Не покидая сайт, нажмите <code class='inline-code'>Select project</code> и выберите свой проект. В строке поиска введите: <strong>YouTube Data API v3</strong> → <code class='inline-code'>Enable</code>",
        api_li_6: "Вы будете перенаправлены в настройки API. В левой колонке нажмите <code class='inline-code'>Credentials</code>.",
        api_li_7: "Вверху нажмите <code class='inline-code'>Create credentials</code> → <code class='inline-code'>API key</code>.",
        api_li_8: "Финиш! Скопируйте ваш API ключ и сохраните его в Блокноте или другом месте.",

        core_title: "Основные возможности",
        
        key_title: "🔑Обработка ключа YouTube API",
        key_li_1: "Начальная проверка предоставленного API ключа перед запуском",
        key_li_2: "Автоматическое создание и сохранение файла <code class='inline-code'>Key.bin</code>",
        key_li_3: "Отсутствие необходимости повторного ввода ключа после успешной проверки",

        quota_title: "🚪Проверка квоты",
        quota_li_1: "Определяет текущую доступность квоты YouTube API",
        quota_li_2: "Останавливает выполнение, если дальнейшие запросы невозможны",

        oauth_title: "🛡️Интеграция OAuth 2.0",
        oauth_li_1: "Приложение разработано для использования <strong>OAuth 2.0</strong> как основного метода аутентификации",
        oauth_li_2: "Если секреты клиента OAuth не найдены, система переключается на метод <strong>YouTube Data API Key</strong> без прерывания работы пользователя",

        comm_title: "💌Comment Explorer",
        comm_li_1: "получение списка комментариев к видео YouTube в консоли",
        comm_li_2: "фильтрация комментариев по ключевому слову",
        comm_li_3: "сортировка <code class='inline-code'>по времени</code> или <code class='inline-code'>по релевантности</code>",
        comm_li_4: "ограничение количества выводимых результатов",
        comm_li_5: "определение названия канала, на котором размещено видео",
        comm_li_6: "Comment Explorer сообщает о причине ошибки, если она возникает",

        vid_title: "📹Video Explorer",
        vid_li_1: "Поиск видео по вашему запросу",
        vid_li_2: "Выполнение поиска с учетом региона",
        vid_li_3: "Применение дополнительных фильтров, таких как: <code class='inline-code'>диапазон дат публикации</code> и <code class='inline-code'>продолжительность видео</code>",
        vid_li_4: "Контроль максимального количества возвращаемых результатов поиска",
        vid_li_5: "Для каждого видео вы получите блок информации:",
        vid_sub_1: "Название видео",
        vid_sub_2: "Прямая ссылка",
        vid_sub_3: "Количество просмотров",
        vid_sub_4: "Количество лайков",
        vid_sub_5: "Количество дизлайков",
        vid_sub_6: "Количество комментариев",
        vid_sub_7: "Дата публикации",
        vid_sub_8: "Название канала и ссылка на канал",

        chan_title: "📈Channel Explorer",
        chan_li_1: "Сбор основной статистики канала:",
        chan_sub_1: "количество подписчиков",
        chan_sub_2: "количество просмотров",
        chan_sub_3: "описание",
        chan_sub_4: "дата регистрации",
        chan_sub_5: "ID канала (UC...)",
        chan_sub_6: "Хэндл (@...)",
        chan_li_2: "При необходимости можно искать видео на канале с помощью Video Explorer",

        subs_title: "📄Subtitles Explorer",
        subs_li_1: "<strong>Subtitles Explorer</strong> делает извлечение текста из видео простым и гибким. Вы просто вводите двухбуквенный код языка, например <code class='inline-code'>en</code> или <code class='inline-code'>ru</code>",
        subs_li_2: "Он дает вам выбор между <code class='inline-code'>созданными вручную</code> субтитрами для лучшей точности или <code class='inline-code'>автоматически созданными</code> транскрипциями. Система умеет грамотно обрабатывать отсутствующие данные",
        subs_li_3: "Если предпочтительный тип транскрипции недоступен, программа не просто выдаст ошибку. Она обнаружит проблему и сразу предложит альтернативную версию, гарантируя, что вы все равно получите нужный контент.",

        info_title: "🔢Info Explorer",
        info_li_1: "Введите конкретный URL видео для прямого извлечения метаданных без поиска",
        info_li_2: "Возвращает полный блок информации, описанный в <a href='#video-explorer'>Video Explorer</a>, и, дополнительно, описание видео",

        func_title: "⚙️ Функциональность",
        func_li_1: "<strong>Аутентификация</strong> — <strong>OAuth 2.0</strong> приоритетен для безопасного доступа. Если учетные данные OAuth не обнаружены, приложение использует <strong>YouTube Data API key</strong>, сохраненный в <code class='inline-code'>Key.bin</code>.",
        func_li_2: "<strong>Парсинг ссылок</strong> — <code class='inline-code'>video id</code>, <code class='inline-code'>channel id</code> (UC...) и <code class='inline-code'>handle</code> (@...) извлекаются автоматически из введенных вами ссылок.",
        func_li_3: "<strong>Фильтры поиска</strong> — Вы можете фильтровать видео по <code class='inline-code'>Региону</code>, <code class='inline-code'>Измерению</code> (2D или 3D), <code class='inline-code'>Продолжительности</code> и <code class='inline-code'>Дате</code> (используя умный календарь).",
        func_li_4: "<strong>Поиск по каналу</strong> — В отличие от стандартного поиска, вы можете выполнять поиск по ключевым словам непосредственно в библиотеке канала.",
        func_li_5: "<strong>Умные субтитры</strong> — Интегрирован <strong>YouTube Transcript API</strong>. Сначала ищутся <code class='inline-code'>созданные вручную</code> субтитры. Если их нет, предлагаются <code class='inline-code'>автоматически созданные</code>.",
        func_li_6: "<strong>Дизлайки</strong> — Интегрирован <strong>Return YouTube Dislike API</strong> для отображения количества дизлайков вместе с официальными данными.",
        func_li_7: "<strong>Фильтрация комментариев</strong> — Для локальной фильтрации комментариев и ответов используются <strong>ключевые слова</strong>. YouTube Data API не выполняет эту фильтрацию.",
        func_li_8: "<strong>Проверка квоты</strong> — При запуске выполняется тестовый запрос, чтобы убедиться, что ваша <strong>квота YouTube API</strong> не превышена.",

        fut_title: "🔧 Что я планирую сделать в будущем?",
        fut_li_1: "Возможность сохранять полученные комментарии и видео",
        fut_li_2: "Исследование каналов",
        fut_li_3: "Более удобный интерактивный интерфейс командной строки",
        fut_li_4: "Playlist Explorer",
        fut_li_5: "Subtitles Explorer",

        lic_title: "🖌️Лицензия",
        lic_p1: "YouTubeExplorer лицензирован под лицензией Apache-2.0.",
        lic_p2: "Версии, выпущенные до 22-01-2026, были лицензированы под MIT License.",
        lic_p3: "Автор: Валентин Колесников",
        lic_p4: "Оригинальный репозиторий: <a href='https://github.com/valentin-kolesnikov/YouTube_Explorer'>YouTube_Explorer</a>",
        lic_p5: "Подробнее см. файлы <a href='LICENSE'>LICENSE</a> и <a href='NOTICE'>NOTICE</a>.",

        contr_title: "❤️Участие в разработке",
        contr_p1: "Спасибо за ваш интерес к участию в этом проекте.",
        contr_p2: "Этот проект лицензирован под <code class='inline-code'>Apache License, Version 2.0</code>. Отправляя пулл-реквест, вы соглашаетесь с тем, что ваш вклад будет лицензирован под <code class='inline-code'>Apache License 2.0</code>.",
        contr_p3: "Если вы создаете форк или производную работу на основе этого проекта, пожалуйста, укажите авторство в вашем <code class='inline-code'>README</code>.",
        contr_p4: "Рекомендуемый формат указания авторства:",
        contr_p5: "<code class='inline-code'>Original project: YouTube Explorer by Valentin Kolesnikov</code>",
        contr_p6: "Это указание помогает избежать путаницы в авторстве и считается хорошей практикой открытого исходного кода.",

        how_title: "🤝Как внести свой вклад",
        how_li_1: "Сделайте форк репозитория.",
        how_li_2: "Создайте ветку для ваших изменений.",
        how_li_3: "Отправьте пулл-реквест с понятным описанием.",
        how_li_4: "Убедитесь, что ваши изменения хорошо задокументированы.",

        iss_title: "❓Вопросы и ошибки",
        iss_p: "Буду рад видеть ваши мнения и идеи по новым функциям или улучшениям. Также, пожалуйста, сообщайте об ошибках. Просто откройте issue и удивите меня!"
    }
};


let currentLang = 'en';

function toggleMenu() {
    document.getElementById('navigation').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('active');
    document.querySelector('.menu-btn').classList.toggle('active');
}

function toggleTheme() {
    document.body.classList.toggle('light-theme');
}

function toggleLanguage() {
    currentLang = currentLang === 'en' ? 'ru' : 'en';
    localStorage.setItem('valentin_lang', currentLang);
    applyTranslations();
}

function applyTranslations() {
    document.documentElement.setAttribute('lang', currentLang);

    const menuDisplay = document.getElementById('lang-display');
    if (menuDisplay) menuDisplay.textContent = currentLang.toUpperCase();

    const mobileDisplay = document.getElementById('lang-display-mobile');
    if (mobileDisplay) mobileDisplay.textContent = currentLang.toUpperCase();

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}


document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('valentin_lang');
    if (savedLang === 'ru') {
        currentLang = 'ru';
        applyTranslations();
    } else {
        if (document.getElementById('header-lang-btn')) {
            document.getElementById('header-lang-btn').textContent = 'EN';
        }
    }
});

const phrases = [
    "Python Development.",
    "Algorithms.",
    "Data Analysis Tools.",
    "Cryptography."
];

const pageCache = {};

async function preloadPage(url) {
    if (pageCache[url]) return;
    try {
        const res = await fetch(url);
        if (res.ok) {
            const text = await res.text();
            pageCache[url] = text;
        }
    } catch (e) {
        console.warn('Preload failed for:', url);
    }
}

async function loadContent(url, pushState = true) {
    if (!pageCache[url]) {
        await preloadPage(url);
    }

    const html = pageCache[url];
    if (!html) {
        window.location.href = url;
        return;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const newMain = doc.querySelector('main');
    const currentMain = document.querySelector('main');

    if (newMain && currentMain) {
        currentMain.style.opacity = '0';

        setTimeout(() => {
            currentMain.innerHTML = newMain.innerHTML;
            document.title = doc.title;
            
            if (pushState) {
                history.pushState({ path: url }, '', url);
            }

            applyTranslations();
            
            if (typeof VanillaTilt !== 'undefined') {
                const tilts = document.querySelectorAll('[data-tilt]');
                if (tilts.length > 0) VanillaTilt.init(tilts);
            }

            window.scrollTo(0, 0);

            currentMain.style.opacity = '1';
        }, 300);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.endsWith('.html') && !href.startsWith('http') && !href.startsWith('#')) {
            preloadPage(href);
        }
    });

    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;
        
        const href = link.getAttribute('href');
        if (!href) return;

        if (href.endsWith('.html') && !href.startsWith('http') && !href.startsWith('#')) {
            e.preventDefault();
            
            const nav = document.getElementById('navigation');
            if (nav && nav.classList.contains('active')) {
                toggleMenu();
            }
            loadContent(href);
        }

        else if (href.startsWith('#')) {
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const nav = document.getElementById('navigation');
                if (nav && nav.classList.contains('active')) {
                    toggleMenu();
                }

                targetElement.scrollIntoView({ behavior: 'smooth' });
                
                history.pushState(null, null, href);
            }
        }
    });
})

function goHome(e) {
    e.preventDefault();
    
    const link = e.target.closest('.back-link');
    
    if (link) {
        link.classList.add('fly-away');
        
        setTimeout(() => {
            window.location.href = link.getAttribute('href');
        }, 600);
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const backToTopBtn = document.getElementById('backToTop');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
    }
});
// let phraseIndex = 0;
// let charIndex = 0;
// let isDeleting = false;
// const typeSpeed = 100;
// const deleteSpeed = 50;
// const pauseTime = 2000;

// function typeWriter() {
//     const element = document.getElementById('typewriter');
//     if (!element) return; // Защита, если элемента нет на странице

//     const currentPhrase = phrases[phraseIndex];

//     if (isDeleting) {
//         element.textContent = currentPhrase.substring(0, charIndex - 1);
//         charIndex--;
//     } else {
//         element.textContent = currentPhrase.substring(0, charIndex + 1);
//         charIndex++;
//     }

//     let delay = isDeleting ? deleteSpeed : typeSpeed;

//     if (!isDeleting && charIndex === currentPhrase.length) {
//         delay = pauseTime; // Пауза после завершения фразы
//         isDeleting = true;
//     } else if (isDeleting && charIndex === 0) {
//         isDeleting = false;
//         phraseIndex = (phraseIndex + 1) % phrases.length;
//     }

//     setTimeout(typeWriter, delay);
// }

// // Запуск эффекта после загрузки
// document.addEventListener('DOMContentLoaded', typeWriter);