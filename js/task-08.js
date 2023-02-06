const form = document.querySelector(`.login-form`);
console.log(form);

form.addEventListener(`submit`, checkForm);

function checkForm (event) {
    event.preventDefault();

    const formEl = event.currentTarget.elements;
    const email = formEl.email.value;
    const password = formEl.password.value;

    const formData = {
        email, 
        password
    };

    if (email === "" || password === "") {
        return alert("Заповніть всі поля форми!");
    }
    console.log(formData);

    event.currentTarget.reset();
}