const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const rate = document.getElementById('rating_part');

const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';

if (isDarkModeEnabled) {
    body.classList.add('dark-mode');
    rate.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', function() {
    body.classList.toggle('dark-mode');
    rate.classList.toggle('dark-mode');

    localStorage.setItem('darkModeEnabled', body.classList.contains('dark-mode'));
});

window.addEventListener('load', function () {
    const loader = document.querySelector('.loader');
    loader.classList.add('hidden');
});

let valueDisplays = document.querySelectorAll(".ani_count");
let interval = 4000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
