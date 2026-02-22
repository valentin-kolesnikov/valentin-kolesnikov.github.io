let currentLang = 'en';
let isMusicPlaying = false;
let currentTrackIndex = 0;
const playlist = [
    'Music/Lofy.mp3',
];
function updatePageTheme(url) {
    document.body.classList.remove('theme-youtube', 'theme-rps');

    if (url.includes('youtube.html')) {
        document.body.classList.add('theme-youtube');
    } else if (url.includes('rps.html')) {
        document.body.classList.add('theme-rps');
    }
}

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

                    updatePageTheme(url);
                    
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

    updatePageTheme(window.location.href);
    
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

    const volSlider = document.getElementById('volume-slider');
    const bgMusic = document.getElementById('bg-music');
    if (volSlider && bgMusic) {
        volSlider.value = 0.5;
        bgMusic.volume = 0.5;

        volSlider.addEventListener('input', (e) => {
            bgMusic.volume = e.target.value;
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.getElementById('music-wrapper');
    let hoverTimeout;

    if (wrapper) {
        wrapper.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
            wrapper.classList.add('hover-state');
        });

        wrapper.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(() => {
                wrapper.classList.remove('hover-state');
            }, 500);
        });
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



window.addEventListener('popstate', (e) => {
    loadContent(window.location.href, false);
});

function toggleVolume(e) {
    if (e) e.stopPropagation();
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

document.addEventListener('click', (e) => {
    const popup = document.getElementById('volume-popup');
    const btn = document.getElementById('volume-btn');
    const wrapper = document.getElementById('music-wrapper');
    
    if (popup && popup.classList.contains('active')) {
        if (!popup.contains(e.target) && !btn.contains(e.target)) {
            popup.classList.remove('active');
            if (btn) btn.classList.remove('active');
            if (wrapper) wrapper.classList.remove('volume-open');
        }
    }
});

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
    const hasSource = musicElement && (musicElement.src || musicElement.currentSrc);

    if (controls) {
        if (hasSource) {
            controls.classList.add('playable');
        } else {
            controls.classList.remove('playable');
        }
    }

    const mobileControls = document.getElementById('music-controls-mobile');
    if (mobileControls) {
        if (isPlaying) {
            mobileControls.style.display = 'flex'; 
            setTimeout(() => mobileControls.classList.add('active'), 10);
        }
    }
}
