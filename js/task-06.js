const inputPlace = document.querySelector(`#validation-input`);

inputPlace.addEventListener(`blur`, checkInputValidation);

function checkInputValidation(event) {
    if (inputPlace.value.length === Number(inputPlace.dataset.length)){
        inputPlace.classList.remove(`invalid`);
       
    return inputPlace.classList.add(`valid`);
    }
        inputPlace.classList.remove(`valid`);
    return inputPlace.classList.add(`invalid`);

}