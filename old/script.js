document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    const navItems = navLinks.querySelectorAll('a'); // Select all links in the navbar

    // Toggle the active class for opening/closing the menu
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Collapse the menu after clicking on a menu item
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navLinks.classList.remove('active'); // Collapse the menu
        });
    });

    // Fade in sections when the page loads
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.opacity = 1;
    });
});
