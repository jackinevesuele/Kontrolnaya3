
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter');
    const projectCards = document.querySelectorAll('.project-card');
    
    console.log('Filter buttons found:', filterButtons.length);
    console.log('Project cards found:', projectCards.length);
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {

            filterButtons.forEach(btn => btn.classList.remove('filter--active'));

            this.classList.add('filter--active');
            
            const filterValue = this.getAttribute('data-filter');
            console.log('Filter clicked:', filterValue);

            projectCards.forEach(card => {
                const cardTech = card.getAttribute('data-tech');
                
                if (filterValue === 'all' || cardTech === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});