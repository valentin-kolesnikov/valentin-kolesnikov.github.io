let currentLang = localStorage.getItem('valentin_lang') || 'en';
let isMusicPlaying = false;
let currentTrackIndex = 0;
const playlist = [
    'Music/Lofy.mp3',
];

async function loadContent(url, pushState = true) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Page not found');
        
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
                
                
                document.body.className = document.body.className.replace(/\btheme-\S+/g, '').trim();
                const newTheme = newMain.getAttribute('data-theme');
                if (newTheme) {
                    document.body.classList.add(newTheme);
                    currentMain.setAttribute('data-theme', newTheme);
                } else {
                    currentMain.removeAttribute('data-theme');
                }
                
                if (pushState) {
                    let displayUrl = url.includes('index.html') ? './' : url;
                    if (window.location.pathname.endsWith(url) === false) {
                        history.pushState({ path: url }, '', displayUrl);
                    }
                }
                
                applyTranslations();
                initVanillaTilt();
                window.scrollTo(0, 0);
                updateActiveMenu();

                currentMain.style.opacity = '1';
            }, 150);
        } else {
            window.location.href = url;
        }
    } catch (e) {
        window.location.href = url;
    }
}


document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();

    updateActiveMenu();
    initVanillaTilt();
    
    const initialTheme = document.querySelector('main')?.getAttribute('data-theme');
    if (initialTheme) document.body.classList.add(initialTheme);

    if (window.location.pathname.endsWith('index.html')) {
        const newPath = window.location.pathname.replace('index.html', '');
        window.history.replaceState(null, '', newPath);
    }

    document.body.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (!link) return;

        const href = link.getAttribute('href');
        if (!href) return;

        if (href.endsWith('.html') && !href.startsWith('http')) {
            e.preventDefault();
            const nav = document.getElementById('navigation');
            if (nav && nav.classList.contains('active')) toggleMenu();
            loadContent(href);
        } 
        else if (href.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.getElementById(href.substring(1));
            if (targetElement) {
                if (document.getElementById('navigation')?.classList.contains('active')) toggleMenu();
                targetElement.scrollIntoView({ behavior: 'smooth' });
                history.pushState(null, null, href);
            }
        }
    });

    const volSlider = document.getElementById('volume-slider');
    const bgMusic = document.getElementById('bg-music');
    if (volSlider && bgMusic) {
        volSlider.value = 0.75;
        bgMusic.volume = 0.5;
        volSlider.addEventListener('input', (event) => bgMusic.volume = event.target.value);
    }

    const wrapper = document.getElementById('music-wrapper');
    let hoverTimeout;
    if (wrapper) {
        wrapper.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
            wrapper.classList.add('hover-state');
        });
        wrapper.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(() => wrapper.classList.remove('hover-state'), 500);
        });
    }

    const backToTopBtn = document.getElementById('backToTop');
    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            backToTopBtn.classList.toggle('active', window.scrollY > 400);
        }, { passive: true });
    }
});

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

    const openTocPanel = document.querySelector('#table-of-contents.active #toc-panel');
    if (openTocPanel) {
        openTocPanel.style.maxHeight = openTocPanel.scrollHeight + 'px';
    }
}

function updateActiveMenu() {
    const path = window.location.pathname.split("/").pop() || "index.html";
    
    document.querySelectorAll('.navigation a').forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === path) {
            link.classList.add('active-link');
        }
    });
}

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

function toggleTOC() {
    const widget = document.getElementById('table-of-contents');
    const panel = document.getElementById('toc-panel');
    if (!widget || !panel) return;

    const isOpen = widget.classList.toggle('active');
    const btn = widget.querySelector('.toc-toggle');
    if (btn) btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

    panel.style.maxHeight = isOpen ? panel.scrollHeight + 'px' : '0px';
}

window.addEventListener('popstate', (event) => {
    loadContent(window.location.href, false);
});

function toggleVolume(event) {
    if (event) event.stopPropagation();
    const popup = document.getElementById('volume-popup');
    const btn = document.getElementById('volume-btn');
    const wrapper = document.getElementById('music-wrapper');
    if (popup) {
        popup.classList.toggle('active');
        if (btn) btn.classList.toggle('active');
        if (wrapper) {
            if (popup.classList.contains('active')) {
                wrapper.classList.add('volume-open');
            } else {
                wrapper.classList.remove('volume-open');
            }
        }
    }
}

document.addEventListener('click', (event) => {
    const popup = document.getElementById('volume-popup');
    const btn = document.getElementById('volume-btn');
    const wrapper = document.getElementById('music-wrapper');
    
    if (popup && popup.classList.contains('active')) {
        if (!popup.contains(event.target) && !btn.contains(event.target)) {
            popup.classList.remove('active');
            if (btn) btn.classList.remove('active');
            if (wrapper) wrapper.classList.remove('volume-open');
        }
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function playTrack(index) {
    const musicElement = document.getElementById('bg-music'); 
    if (!musicElement) return;
    
    if (index >= playlist.length) index = 0;
    if (index < 0) index = playlist.length - 1;
    
    currentTrackIndex = index;
    musicElement.src = playlist[currentTrackIndex];
    
    musicElement.play().then(() => {
        isMusicPlaying = true;
        updateUI(true);
    }).catch(e => console.log("Error:", e));
}

function nextTrack() {
    playTrack(currentTrackIndex + 1);
}

function prevTrack() {
    playTrack(currentTrackIndex - 1);
}

function restartTrack() {
    const musicElement = document.getElementById('bg-music');
    if (musicElement) {
        musicElement.currentTime = 0;
        if (!isMusicPlaying) {
             musicElement.play().then(() => {
                isMusicPlaying = true;
                updateUI(true);
            });
        }
    }
}

function toggleMusic() {
    const musicElement = document.getElementById('bg-music');
    if (!musicElement) return;

    if (isMusicPlaying) {
        musicElement.pause();
        isMusicPlaying = false;
        updateUI(false); 
    } else {
        if (!musicElement.getAttribute('src') && !musicElement.src) {
            playTrack(0);
        } else {
            musicElement.play().then(() => {
                isMusicPlaying = true;
                updateUI(true); 
            });
        }
    }
}

function updateUI(isPlaying) {
    const musicElement = document.getElementById('bg-music');
    const icon = isPlaying ? '⏸' : '▶';
    
    const desktopIcon = document.getElementById('music-icon');
    const mobileIcon = document.getElementById('music-icon-mobile');
    if (desktopIcon) desktopIcon.textContent = icon;
    if (mobileIcon) mobileIcon.textContent = icon;

    const wrapper = document.getElementById('music-wrapper');
    if (wrapper) {
        if (isPlaying) {
            wrapper.classList.add('is-playing');
        } else {
            wrapper.classList.remove('is-playing');
        }
    }

    const controls = document.getElementById('music-controls');

    controls.classList.add('playable');

    const mobileControls = document.getElementById('music-controls-mobile');
    if (mobileControls) {
        mobileControls.classList.toggle('active', isPlaying);
    }
}

function initVanillaTilt() {
    if (typeof VanillaTilt !== 'undefined') {
        const cards = document.querySelectorAll(".nav-card");
        if (cards.length > 0) {
            VanillaTilt.init(cards, {
                max: 10,
                speed: 400,
                glare: false,
                "max-glare": 0.2,
                scale: 1.02,
                perspective: 1200,
                easing: "cubic-bezier(0.25, 0.8, 0.25, 1)"
            });
        }
    }
}