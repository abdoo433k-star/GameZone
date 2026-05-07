// Language data
const translations = {
    en: {
        menuTitle: "Menu",
        homeText: "Home",
        aboutText: "About",
        gamesTitle: "Our Games",
        gamesSubtitle: "Choose your favorite game and start playing now!",
        playText: "Play Now",
        gta5Desc: "Experience an open-world adventure in a massive metropolis with unlimited possibilities and thrilling missions.",
        forzaDesc: "Race across stunning landscapes in high-speed competitions with amazing graphics and intense gameplay.",
        rdr2Desc: "Immerse yourself in the Wild West with epic storylines, realistic characters, and breathtaking adventures.",
        fallguysDesc: "Join fun multiplayer challenges and compete with players worldwide in hilarious obstacle courses.",
        godofwarDesc: "Battle legendary creatures and gods in an epic Norse mythology adventure with stunning combat systems.",
        fortniteDesc: "Battle royale action with creative building mechanics, intense gameplay, and constant new content.",
        ffScriptDesc: "Advanced script tool for Free Fire with automatic headshot detection and precision aiming assistance.",
        aboutTitle: "About GameZone",
        aboutText1: "Welcome to GameZone, your ultimate destination for amazing games and entertainment!",
        aboutText2: "We provide a carefully curated collection of the best games from around the world. Whether you're into action, adventure, racing, or competitive gaming, GameZone has something for everyone.",
        aboutText3: "Follow us on social media for the latest updates, game releases, and exclusive content. Join our gaming community today!",
        gamesCount: "Games",
        freeLabel: "Free",
        supportLabel: "Support",
        langText: "العربية",
        searchTitle: "Search Games",
        searchPlaceholder: "Search games...",
        noResults: "No games found"
    },
    ar: {
        menuTitle: "القائمة",
        homeText: "الرئيسية",
        aboutText: "عنا",
        gamesTitle: "ألعابنا",
        gamesSubtitle: "اختر لعبتك المفضلة وابدأ اللعب الآن!",
        playText: "العب الآن",
        gta5Desc: "اختبر مغامرة عالم مفتوح في مدينة ضخمة بإمكانيات غير محدودة ومهام مثيرة.",
        forzaDesc: "تنافس عبر مناظر طبيعية مذهلة في سباقات عالية السرعة برسوميات رائعة وألعاب مكثفة.",
        rdr2Desc: "انغمس في الغرب البري برواية ملحمية وشخصيات واقعية ومغامرات خلابة.",
        fallguysDesc: "شارك في تحديات متعددة اللاعبين والتنافس مع اللاعبين من جميع أنحاء العالم في مسارات عقبات مضحكة.",
        godofwarDesc: "حارب الكائنات الأسطورية والآلهة في مغامرة ملحمية للأساطير الإسكندنافية مع أنظمة قتال مذهلة.",
        fortniteDesc: "حركة معركة ملكية مع ميكانيكا بناء إبداعية وألعاب مكثفة ومحتوى جديد مستمر.",
        ffScriptDesc: "أداة script متقدمة لـ Free Fire مع كشف رؤية الرأس التلقائي ومساعدة التصويب الدقيق.",
        aboutTitle: "عن GameZone",
        aboutText1: "مرحباً بك في GameZone، وجهتك النهائية للألعاب والترفيه المذهلة!",
        aboutText2: "نحن نوفر مجموعة منتقاة بعناية من أفضل الألعاب من جميع أنحاء العالم. سواء كنت مهتماً بألعاب الحركة أو المغامرة أو السباق أو الألعاب التنافسية، لدى GameZone شيء للجميع.",
        aboutText3: "تابعنا على وسائل التواصل الاجتماعي لآخر التحديثات والألعاب الجديدة والمحتوى الحصري. انضم إلى مجتمع الألعاب لدينا اليوم!",
        gamesCount: "ألعاب",
        freeLabel: "مجاني",
        supportLabel: "الدعم",
        langText: "English",
        searchTitle: "البحث عن الألعاب",
        searchPlaceholder: "ابحث عن ألعاب...",
        noResults: "لم يتم العثور على ألعاب"
    }
};

// Current language
let currentLang = localStorage.getItem('language') || 'en';

// Game data
const games = [
    { name: "Grand Theft Auto V", id: 1, image: "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg", rating: "4.8" },
    { name: "Forza Horizon 5", id: 2, image: "https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg", rating: "4.7" },
    { name: "Red Dead Redemption 2", id: 3, image: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg", rating: "4.9" },
    { name: "Fall Guys", id: 4, image: "https://img.utdstc.com/icon/121/3e2/1213e2bac4111360c073483b82c033bae5691ebb752bb639acf5413efdf7938b:200", rating: "4.5" },
    { name: "God of War", id: 5, image: "https://m.media-amazon.com/images/M/MV5BNjJiNTFhY2QtNzZkYi00MDNiLWEzNGEtNWE1NzBkOWIxNmY5XkEyXkFqcGc@._V1_.jpg", rating: "4.8" },
    { name: "Fortnite", id: 6, image: "https://play-lh.googleusercontent.com/FxJDPDIDJKlG9C8lOxaS041X27A0SrHAa46SGDIpPusAd4IEJihZTyGf-8rTZ_GpF34aeLvULilVuO0cpCJxTg=w600-h300-pc0xffffff-pd", rating: "4.6" },
    { name: "Free Fire", id: 7, image: "https://storage.googleapis.com/cdn.vcgamers.com/news/wp-content/uploads/2023/12/Script-FF-Auto-Headshot.jpg", rating: "4.7" }
];

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    updatePageDirection();
    setupHamburgerMenu();
    setupSearchModal();
});

// Hamburger Menu
function setupHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
    });

    const menuLinks = mobileMenu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            mobileMenu.classList.remove('active');
        }
    });
}

// Search Modal Functionality
function setupSearchModal() {
    const searchIconBtn = document.getElementById('searchIconBtn');
    const searchModal = document.getElementById('searchModal');
    const closeSearchBtn = document.getElementById('closeSearchBtn');
    const modalSearchInput = document.getElementById('modalSearchInput');
    const searchResults = document.getElementById('searchResults');
    const noResults = document.getElementById('noResults');

    // Open modal
    searchIconBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        modalSearchInput.focus();
    });

    // Close modal
    closeSearchBtn.addEventListener('click', () => {
        searchModal.classList.remove('active');
        clearSearch();
    });

    // Close modal when clicking outside
    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
            clearSearch();
        }
    });

    // Search functionality
    modalSearchInput.addEventListener('keyup', (e) => {
        performSearch(e.target.value);
    });

    // Real-time search
    function performSearch(query) {
        const searchTerm = query.toLowerCase();
        searchResults.innerHTML = '';
        noResults.style.display = 'none';

        if (!searchTerm) {
            return;
        }

        const filteredGames = games.filter(game => {
            const gameName = game.name.toLowerCase();
            return gameName.includes(searchTerm);
        });

        if (filteredGames.length === 0) {
            noResults.style.display = 'block';
            noResults.textContent = translations[currentLang].noResults;
            return;
        }

        filteredGames.forEach(game => {
            const resultItem = createResultItem(game);
            searchResults.appendChild(resultItem);
        });
    }

    // Create result item element
    function createResultItem(game) {
        const div = document.createElement('div');
        div.className = 'search-result-item';
        div.innerHTML = `
            <img src="${game.image}" alt="${game.name}" class="search-result-img">
            <div class="search-result-info">
                <h3>${game.name}</h3>
                <p>Download and play your favorite game now!</p>
                <div class="search-result-rating">
                    <i class="fas fa-star"></i> ${game.rating}
                </div>
            </div>
        `;
        
        div.addEventListener('click', () => {
            const gameCard = document.querySelector(`[data-name="${game.name}"]`);
            if (gameCard) {
                gameCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
                gameCard.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.6)';
                setTimeout(() => {
                    gameCard.style.boxShadow = '';
                }, 2000);
            }
            searchModal.classList.remove('active');
            clearSearch();
        });

        return div;
    }

    function clearSearch() {
        modalSearchInput.value = '';
        searchResults.innerHTML = '';
        noResults.style.display = 'none';
    }
}

// Language toggle
document.getElementById('langToggle').addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('language', currentLang);
    setLanguage(currentLang);
    updatePageDirection();
});

// Set language
function setLanguage(lang) {
    Object.keys(translations[lang]).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[lang][key];
        }
    });

    const modalSearchInput = document.getElementById('modalSearchInput');
    if (modalSearchInput) {
        modalSearchInput.placeholder = translations[lang].searchPlaceholder;
    }
}

// Update page direction
function updatePageDirection() {
    const htmlElement = document.documentElement;
    if (currentLang === 'ar') {
        htmlElement.setAttribute('dir', 'rtl');
        htmlElement.setAttribute('lang', 'ar');
        document.body.style.direction = 'rtl';
    } else {
        htmlElement.setAttribute('dir', 'ltr');
        htmlElement.setAttribute('lang', 'en');
        document.body.style.direction = 'ltr';
    }
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Close search modal on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const searchModal = document.getElementById('searchModal');
        if (searchModal.classList.contains('active')) {
            searchModal.classList.remove('active');
        }
    }
});
