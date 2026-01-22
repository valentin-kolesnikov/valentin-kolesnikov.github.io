

const translations = {
    en: {
        themeBtn: "Theme",
        backBtn: "← Back to Home",
        githubBtn: "View on GitHub",
        home: "About me",
        
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
        notepadDesc2: "Features include creating, opening, and saving text files, as well as essential editing tools. It serves as a practical example of building desktop GUI applications."
    },
    ru: {
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
        notepadDesc2: "Функции включают создание, открытие и сохранение файлов. Практический пример создания GUI-приложений."
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
    const menuDisplay = document.getElementById('lang-display');
    if (menuDisplay) menuDisplay.textContent = currentLang.toUpperCase();

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang] && translations[currentLang][key]) {
            el.innerText = translations[currentLang][key];
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

// Функция предзагрузки страницы
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

// Функция загрузки и отображения страницы
async function loadContent(url, pushState = true) {
    // Если страницы нет в кэше, пробуем загрузить
    if (!pageCache[url]) {
        await preloadPage(url);
    }

    const html = pageCache[url];
    if (!html) {
        window.location.href = url; // Fallback: если не удалось загрузить AJAX, идем обычно
        return;
    }

    // Парсим HTML
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    
    const newMain = doc.querySelector('main');
    const currentMain = document.querySelector('main');

    if (newMain && currentMain) {
        // Анимация исчезновения
        currentMain.style.opacity = '0';

        setTimeout(() => {
            // Подмена контента
            currentMain.innerHTML = newMain.innerHTML;
            document.title = doc.title;
            
            // Обновляем URL
            if (pushState) {
                history.pushState({ path: url }, '', url);
            }

            // Повторная инициализация скриптов
            applyTranslations(); // Перевод
            
            // Перезапуск эффекта наклона карточек (если есть VanillaTilt)
            if (typeof VanillaTilt !== 'undefined') {
                const tilts = document.querySelectorAll('[data-tilt]');
                if (tilts.length > 0) VanillaTilt.init(tilts);
            }

            // Скролл вверх
            window.scrollTo(0, 0);

            // Анимация появления
            currentMain.style.opacity = '1';
        }, 300); // Время должно совпадать с CSS transition
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // 1. Находим все ссылки на сайте и предзагружаем их
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.endsWith('.html') && !href.startsWith('http') && !href.startsWith('#')) {
            preloadPage(href);
        }
    });

    // 2. Делегирование событий клика (чтобы работало и для новых ссылок после подгрузки)
    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        
        // Проверяем, что клик был по внутренней ссылке .html
        if (link) {
            const href = link.getAttribute('href');
            if (href && href.endsWith('.html') && !href.startsWith('http') && !href.startsWith('#')) {
                e.preventDefault(); // Отменяем стандартный переход
                
                // Закрываем меню, если оно открыто
                const nav = document.getElementById('navigation');
                if (nav.classList.contains('active')) {
                    toggleMenu();
                }

                loadContent(href);
            }
        }
    });

    // 3. Обработка кнопок "Назад" / "Вперед" в браузере
    window.addEventListener('popstate', () => {
        const path = location.pathname.split('/').pop() || 'index.html';
        loadContent(path, false);
    });
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