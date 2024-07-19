document.addEventListener('DOMContentLoaded', function() {
    // Fade in sections when the page loads
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.opacity = 1;
    });
});
