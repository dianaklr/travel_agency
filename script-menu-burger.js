function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('show');
}

document.querySelectorAll('.nav > li').forEach(li => {
    li.addEventListener('click', function(event) {

        document.querySelectorAll('.nav__submenu').forEach(submenu => {
            if (submenu !== this.querySelector('.nav__submenu')) {
                submenu.classList.remove('show');
            }
        });

        const submenu = this.querySelector('.nav__submenu');
        if (submenu) {
            submenu.classList.toggle('show');
            event.stopPropagation();
        }
    });
});

// Закрити меню при натисканні на інші частини сторінки
document.addEventListener('click', function(event) {
    if (!event.target.closest('.nav') && !event.target.closest('.burger')) {
        document.querySelector('.nav').classList.remove('show');
        document.querySelectorAll('.nav__submenu').forEach(submenu => submenu.classList.remove('show'));
    }
});