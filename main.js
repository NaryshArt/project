const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const rate = document.getElementById('rating_part');

// Проверяем, есть ли сохраненное состояние темной темы в localStorage
const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

// Устанавливаем начальное состояние темной темы
if (isDarkModeEnabled) {
    body.classList.add('dark-mode');
    rate.classList.add('dark-mode');
}

// Обработчик клика на переключатель
darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    rate.classList.toggle('dark-mode');

// Сохраняем состояние темной темы в localStorage
    localStorage.setItem('darkModeEnabled', body.classList.contains('dark-mode'));
});

window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
});