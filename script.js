document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contactBtn');
    const contactInfo = document.getElementById('contactInfo');

    contactBtn.addEventListener('click', () => {
        contactInfo.classList.toggle('hidden');
        contactInfo.classList.add('animate__animated', 'animate__fadeIn');
    });

    // Disable zooming
    window.addEventListener("wheel", (e) => {
        const isPinching = e.ctrlKey;
        if (isPinching) e.preventDefault();
    }, { passive: false });

    // Add animation to elements when they come into view
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('h2, p, img, #contactBtn').forEach(el => {
        observer.observe(el);
    });
});
