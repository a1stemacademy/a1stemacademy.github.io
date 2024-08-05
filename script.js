document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger.addEventListener('click', () => {
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
            navLinks.style.maxHeight = '0'; // Collapse nav
        } else {
            navLinks.classList.add('show');
            navLinks.style.maxHeight = navLinks.scrollHeight + 'px'; // Expand nav
        }
    });

    // Fade in sections when the page loads
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.opacity = 1;
    });
});
