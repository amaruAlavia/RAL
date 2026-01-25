// Cambio de color al hacer scroll
const nav = document.getElementById("awasiNav");
window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Menú móvil
const toggle = document.getElementById("navToggle");
const mobileMenu = document.getElementById("mobileMenu");

if (toggle && mobileMenu) {
    toggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");
        toggle.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en un enlace
    mobileMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            toggle.classList.remove("active");
        });
    });
}



// Section Scroll Animation
// Section Scroll Animation removed

// ScrollReveal for Nosotros section
// ScrollReveal removed

// Audio Control
const audio = document.getElementById("heroAudio");
const audioBtn = document.getElementById("audioControl");
const iconPlay = audioBtn ? audioBtn.querySelector(".icon-play") : null;
const iconPause = audioBtn ? audioBtn.querySelector(".icon-pause") : null;

if (audio && audioBtn && iconPlay && iconPause) {
    // Set default volume to 40%
    audio.volume = 0.4;

    // Function to update icons based on state
    const updateIcons = () => {
        if (audio.paused) {
            iconPlay.style.display = "block";
            iconPause.style.display = "none";
        } else {
            iconPlay.style.display = "none";
            iconPause.style.display = "block";
        }
    };

    // Try to play on load (handling autoplay restrictions)
    const playPromise = audio.play();
    if (playPromise !== undefined) {
        playPromise.then(_ => {
            // Autoplay started!
            updateIcons();
        }).catch(error => {
            // Autoplay was prevented.
            // Show play button so user can start playback.
            console.log("Autoplay prevented:", error);
            updateIcons();
        });
    }

    audioBtn.addEventListener("click", () => {
        if (audio.paused) {
            audio.play().then(() => {
                updateIcons();
            }).catch(error => {
                console.error("Audio play failed:", error);
            });
        } else {
            audio.pause();
            updateIcons();
        }
    });
}

// Refugios Carousel (Index) - Auto Rotation
const refugiosCarousel = document.getElementById('refugiosCarousel');
if (refugiosCarousel) {
    const images = refugiosCarousel.querySelectorAll('img');
    let currentIndex = 0;
    const intervalTime = 2000; // 2 seconds

    setInterval(() => {
        // Remove active class from current image
        images[currentIndex].classList.remove('active');

        // Calculate next index
        currentIndex = (currentIndex + 1) % images.length;

        // Add active class to next image
        images[currentIndex].classList.add('active');
    }, intervalTime);
}

// Internal Carousels (Refugios Page)
const internalCarousels = document.querySelectorAll('.carousel');

internalCarousels.forEach(carousel => {
    // Only run if this carousel has a track (to avoid errors if structure differs)
    const track = carousel.querySelector('.carousel-track');
    if (!track) return;

    const images = track.querySelectorAll('img');
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');

    if (!images.length) return;

    function scrollToImage(index) {
        const imageWidth = track.clientWidth; // Use track width for reliability
        track.scrollTo({
            left: index * imageWidth,
            behavior: 'smooth'
        });
    }

    // Button Listeners
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            const imageWidth = track.clientWidth;
            const currentScroll = track.scrollLeft;
            const currentIndex = Math.round(currentScroll / imageWidth);
            const newIndex = Math.max(0, currentIndex - 1);
            scrollToImage(newIndex);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            const imageWidth = track.clientWidth;
            const currentScroll = track.scrollLeft;
            const currentIndex = Math.round(currentScroll / imageWidth);
            const newIndex = Math.min(images.length - 1, currentIndex + 1);
            scrollToImage(newIndex);
        });
    }
});

// Mobile Bottom Bar Logic - Hide on Hero (Top) and Footer (Bottom)
const mobileBar = document.querySelector(".mobile-bottom-bar");
const footer = document.querySelector("footer");
const hero = document.getElementById("hero");

if (mobileBar) {
    let isHeroVisible = true; // Default to true initially
    let isFooterVisible = false;

    const updateBarState = () => {
        if (isHeroVisible || isFooterVisible) {
            mobileBar.classList.add("hidden");
        } else {
            mobileBar.classList.remove("hidden");
        }
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.target === hero) {
                isHeroVisible = entry.isIntersecting;
            } else if (entry.target === footer) {
                isFooterVisible = entry.isIntersecting;
            }
        });
        updateBarState();
    };

    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.1 // Trigger when 10% is visible
    });

    if (hero) observer.observe(hero);
    if (footer) observer.observe(footer);

    // Initial check
    updateBarState();
}

// Simple Parallax for About Image
const aboutSection = document.getElementById('nosotros');
const aboutImg = document.querySelector('.about-img-main');

if (aboutSection && aboutImg && window.innerWidth > 900) {
    window.addEventListener('scroll', () => {
        const sectionTop = aboutSection.offsetTop;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // Only calculate if section is somewhat visible to save performance
        if (scrollY + windowHeight > sectionTop && scrollY < sectionTop + aboutSection.offsetHeight) {
            const speed = 0.1; // Adjust speed
            const offset = (scrollY - sectionTop) * speed;
            aboutImg.style.transform = `translateY(${offset}px)`;
        }
    });
}
