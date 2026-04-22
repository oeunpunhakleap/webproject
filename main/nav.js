function toggleMenu() {
    const nav = document.getElementById('navMenu');
    nav.classList.toggle('active');
}

// Close menu when clicking a link
document.querySelectorAll('.nav-bar').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navMenu').classList.remove('active');
    });
});