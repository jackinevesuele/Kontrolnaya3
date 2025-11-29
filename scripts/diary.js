// Функции для дневника
document.addEventListener('DOMContentLoaded', function() {
    const addEntryForm = document.querySelector('.add-entry__form');
    
    if (addEntryForm) {
        addEntryForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const date = document.getElementById('entry-date').value;
            const title = document.getElementById('entry-title').value;
            const description = document.getElementById('entry-description').value;
            const status = document.getElementById('entry-status').value;
            
            if (date && title && description) {
                addNewEntry(date, title, description, status);
                addEntryForm.reset();
                alert('Запись добавлена!');
            }
        });
    }
    
    function addNewEntry(date, title, description, status) {
        // Логика добавления новой записи в дневник
        console.log('Новая запись:', { date, title, description, status });
        // Здесь можно добавить логику для динамического добавления записи
    }
});