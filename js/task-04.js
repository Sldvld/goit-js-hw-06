const btnDecr = document.querySelector(`[data-action="decrement"]`);
const btnIncr = document.querySelector(`[data-action="increment"]`);
const valueNumber = document.querySelector(`#value`)

let counterValue = 0;

btnDecr.addEventListener(`click`, () => {
    counterValue -= 1;
    return addNumber(counterValue);
})
btnIncr.addEventListener(`click`, () => {
    counterValue += 1;
    return addNumber(counterValue);
})

function addNumber(value) {
    return valueNumber.innerHTML = `${value}`;
}