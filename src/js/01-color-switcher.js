const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const page = document.querySelector('body');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorChangeFirst() {
  startButton.setAttribute('disabled', '');
  page.style.backgroundColor = getRandomHexColor();
}

startButton.addEventListener('click', () => {
  colorChangeFirst();
  startRainbow = setInterval(() => {
    page.style.backgroundColor = getRandomHexColor();
  }, 1000);
  stopButton.removeAttribute('disabled');
});

stopButton.addEventListener('click', () => {
  clearInterval(startRainbow);
  startButton.removeAttribute('disabled');
  stopButton.setAttribute('disabled', '');
});
