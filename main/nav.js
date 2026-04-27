
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.nav-bar').forEach(link => {
        link.addEventListener('click', () => {
            document.getElementById('navMenu').classList.remove('active');
        });
    });
});

function toggleMenu() {
    const nav = document.getElementById('navMenu');
    nav.classList.toggle('active');
}