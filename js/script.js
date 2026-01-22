

const translations = {
    en: {
        themeBtn: "Theme",
        backBtn: "← Back to Home",
        githubBtn: "View on GitHub",
        home: "Home",
        
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
        home: "Главная",

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