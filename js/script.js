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

window.addEventListener('popstate', (e) => {
    loadContent(window.location.href, false);
});

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

    updateActiveMenu();
    
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
        } else if (href.startsWith('#')) {
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
});

async function loadContent(url, pushState = true) {
    try {
        const res = await fetch(url);
        if (res.ok) {
            const html = await res.text();
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
                        let displayUrl = url;
                        if (displayUrl.includes('index.html')) {
                            displayUrl = './';
                        }

                        const currentPath = window.location.pathname;
                        
                        const isCurrentlyHome = currentPath.endsWith('/') || currentPath.endsWith('index.html');
                        const isGoingHome = url === 'index.html' || url === './';

                        if ((isCurrentlyHome && isGoingHome) || currentPath.endsWith(url)) {
                            history.replaceState({ path: url }, '', displayUrl);
                        } else {
                            history.pushState({ path: url }, '', displayUrl);
                        }
                    }
                    
                    applyTranslations();
                    
                    if (typeof VanillaTilt !== 'undefined') {
                        const tilts = document.querySelectorAll('[data-tilt]');
                        if (tilts.length > 0) VanillaTilt.init(tilts);
                    }
                    
                    window.scrollTo(0, 0);
                    
                    updateActiveMenu();

                    currentMain.style.opacity = '1';
                }, 150);
            } else {
                window.location.href = url;
            }
        } else {
            window.location.href = url;
        }
    } catch (e) {
        window.location.href = url;
    }
}



function goHome(e) {
    e.preventDefault();
    e.stopPropagation();

    const link = e.target.closest('.back-link');
    const main = document.querySelector('main');

    if (link) {
        link.classList.add('fly-away');

        if (main) {
            main.style.opacity = '0';
        }

        setTimeout(() => {
            loadContent('index.html'); 
        }, 50);
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
        if (window.location.pathname.endsWith('index.html')) {
        const newPath = window.location.pathname.replace('index.html', '');
        window.history.replaceState(null, '', newPath);
    }

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

function updateActiveMenu() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    
    document.querySelectorAll('.navigation a').forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === path) {
            link.classList.add('active-link');
        }
    });
}