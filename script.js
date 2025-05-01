document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const toggleBioButtons = document.querySelectorAll('.bio-toggle');

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); // Important for click-outside detection
        navLinks.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-links') && !e.target.closest('.hamburger')) {
            navLinks.classList.remove('active');
        }
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            navLinks.classList.remove('active');
        }
    });

    // Modified smooth scrolling with menu close
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Close mobile menu before scrolling
                navLinks.classList.remove('active');

                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Additional: Close menu when clicking any nav link (including non-anchor links)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    toggleBioButtons.forEach(button => {
        button.addEventListener('click', function() {
            const bio = this.parentElement;
            const shortBio = bio.querySelector('.bio-short');
            const fullBio = bio.querySelector('.bio-full');

            if (fullBio.style.display === 'none') {
                fullBio.style.display = 'block';
                shortBio.style.display = 'none';
                this.textContent = 'Zwiń';
            } else {
                fullBio.style.display = 'none';
                shortBio.style.display = 'block';
                this.textContent = 'Rozwiń';
            }
        });
    });
});