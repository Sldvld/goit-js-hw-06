function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const inputEl = document.querySelector(`input`);
const buttonCreate = document.querySelector(`button[data-create]`);
const buttonDestroy = document.querySelector(`button[data-destroy]`);
const boxesEl = document.querySelector(`#boxes`);

buttonCreate.addEventListener(`click`, createBoxes);
buttonDestroy.addEventListener(`click`, destroyBoxes);


  function destroyBoxes(){
    boxesEl.innerHTML = "";
    inputEl.value = "";
  }
