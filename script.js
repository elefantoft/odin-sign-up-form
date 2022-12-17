const pwd = document.getElementById("password");
const confPwd = document.getElementById("confirm-pwd");
const pwdError = document.querySelector(".pwd-error > span");
const success = window.document.querySelector("button + span");
const submit = document.querySelector("button");
const form = document.getElementById("sign-up-form")

submit.addEventListener("click", (event) => {
    // Makes invalid fields red only after form is submitted
    form.className = "submitted";
});

form.addEventListener("submit", (event) => {
    // The form won't be submitted
    event.preventDefault();

    // Displays an error if the passwords doesn't match
    if (pwd.value != confPwd.value) {
        pwd.setCustomValidity("Invalid field.");
        confPwd.setCustomValidity("Invalid field.");
        pwdError.textContent = "* Passwords do not match";
    } else {
    // If the submit was successfull, a message appears
        var name = document.getElementById("first_name").value;
        if (name == "" || name.length > 15) {
            success.textContent = "Welcome aboard!";
        } else {
            success.textContent = `Welcome aboard, ${name}!`;
        }
        // To simulate the form being submitted
        form.reset();
        form.classList.remove("submitted");
        document.activeElement.blur();
    }
});


//Resets the fields when they are in focus
pwd.addEventListener("focus", (event) => {
    pwd.setCustomValidity("");
    confPwd.setCustomValidity("");
    pwdError.textContent = "";
})

confPwd.addEventListener("focus", (event) => {
    pwd.setCustomValidity("");
    confPwd.setCustomValidity("");
    pwdError.textContent = "";
})