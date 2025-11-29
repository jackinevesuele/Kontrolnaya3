// Основные функции сайта
document.addEventListener('DOMContentLoaded', function() {
    console.log('Сайт загружен!');
    
    // Общие функции для всех страниц
    initNavigation();
    initAnimations();
});

function initNavigation() {
    // Активное состояние навигации
    const currentPage = window.location.pathname;
    console.log('Текущая страница:', currentPage);
}

function initAnimations() {
    // Плавные анимации при скролле
    const animatedElements = document.querySelectorAll('.project-card, .skill, .timeline__item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}


function downloadResume() {
    if (confirm('Скачать резюме?')) {
        try {
            const link = document.createElement('a');
            link.href = 'assets/resume.pdf';
            link.download = 'resume.pdf';
            link.target = '_blank'; 
            link.style.display = 'none';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            alert('Ошибка при скачивании: ' + error.message);
        }
    }
}

function openAddEntryModal() {
    alert('Открывается форма добавления записи');
}