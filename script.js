document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Fade Up Animations on Scroll ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const spectator = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up-element');
    fadeElements.forEach(el => spectator.observe(el));


    // --- 2. Navbar Scroll Effect ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });


    // --- 3. Mobile Navigation Menu ---
    const menuBtn = document.getElementById('mobile-menuBtn');
    const closeBtn = document.getElementById('close-menuBtn');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    menuBtn.addEventListener('click', () => {
        mobileNav.classList.add('active');
        document.body.style.overflow = 'hidden'; // prevent default scrolling
    });

    const closeMenu = () => {
        mobileNav.classList.remove('active');
        document.body.style.overflow = 'auto';
    };

    closeBtn.addEventListener('click', closeMenu);
    mobileLinks.forEach(link => link.addEventListener('click', closeMenu));


    // --- 4. Custom Video Player Play Button ---
    const video = document.getElementById('documentary-video');
    const playBtn = document.getElementById('play-btn');
    const overlay = document.getElementById('video-overlay');

    if (video && playBtn && overlay) {
        // When clicking the custom play button
        playBtn.addEventListener('click', () => {
            if (video.paused) {
                video.play();
                overlay.classList.add('hidden');
            }
        });

        // If user clicks the video element itself to pause/play after initial start
        video.addEventListener('play', () => {
            overlay.classList.add('hidden');
        });

        video.addEventListener('pause', () => {
            if (!video.seeking) {
                overlay.classList.remove('hidden');
            }
        });
        
        video.addEventListener('ended', () => {
            overlay.classList.remove('hidden');
        });
    }

});
