const inputField = document.querySelector(`#name-input`);
const outputField = document.querySelector(`#name-output`);


inputField.addEventListener (`input`, onInputChange);

function onInputChange (event) {
    console.log(event.currentTarget.value);
    if (inputField.value !== ""){
        outputField.textContent = event.currentTarget.value
    }
    else {
        outputField.textContent = `Anonymous`;
    }
 };
console.log(inputField);