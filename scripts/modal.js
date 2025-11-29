// Модальные окна
document.addEventListener('DOMContentLoaded', function() {
    // Логика для модальных окон проектов и дневника
    const modalButtons = document.querySelectorAll('[data-modal]');
    
    modalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modalId = this.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            
            if (modal) {
                modal.style.display = 'block';
            }
        });
    });
    
    // Закрытие модальных окон
    const closeButtons = document.querySelectorAll('.modal-close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
});