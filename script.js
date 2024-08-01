document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Fade in sections when the page loads
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.opacity = 1;
    });
});
