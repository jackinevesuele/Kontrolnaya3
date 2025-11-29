// Валидация формы контактов
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            if (validateForm(name, email, message)) {
                // Отправка формы
                alert('Сообщение отправлено!');
                contactForm.reset();
            }
        });
    }
    
    function validateForm(name, email, message) {
        if (name.length < 2) {
            alert('Имя должно содержать минимум 2 символа');
            return false;
        }
        
        if (!validateEmail(email)) {
            alert('Введите корректный email');
            return false;
        }
        
        if (message.length < 10) {
            alert('Сообщение должно содержать минимум 10 символов');
            return false;
        }
        
        return true;
    }
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});