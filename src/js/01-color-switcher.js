const refs = {
  start: document.querySelector('button[data-start]'),
  stop: document.querySelector('button[data-stop]'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeColor = () => {
  document.body.style.backgroundColor = getRandomHexColor();
};

let idInterval = null;

refs.stop.setAttribute('disabled', 'disabled');

function onStart() {
  refs.start.setAttribute('disabled', 'disabled');
  refs.stop.removeAttribute('disabled');
  idInterval = setInterval(changeColor, 1000);
}

function onStop() {
  refs.start.removeAttribute('disabled');
  refs.stop.setAttribute('disabled', 'disabled');
  clearInterval(idInterval);
}

refs.start.addEventListener('click', onStart);
refs.stop.addEventListener('click', onStop);
