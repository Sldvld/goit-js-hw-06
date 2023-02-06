const inputEl = document.querySelector(`#font-size-control`);
const textEl = document.querySelector(`#text`);

inputEl.addEventListener(`input`, abracadabra);

function abracadabra (e) {
    textEl.style.fontSize = `${e.currentTarget.value}px`;
}