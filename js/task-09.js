function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const buttonEl = document.querySelector(`button.change-color`);
const textEl = document.querySelector(`.color`)

buttonEl.addEventListener(`click`, changeBackgroundColor);

function changeBackgroundColor(event) {
  document.body.style.backgroundColor = getRandomHexColor();
  textEl.textContent = document.body.style.backgroundColor;
}