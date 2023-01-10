// login radio
const loginRadio = document.querySelectorAll(".radios");

// login form
const loginForm = document.querySelector(".loginForm");

// signup form
const signupForm = document.querySelector(".signupForm");

// check for what the initial value is
if (!loginRadio[0].checked) {
    loginForm.classList.add("hide");
    signupForm.classList.remove("hide");
}

// apply changes of login/signup radio
loginRadio[0].addEventListener("click", e => {
    if (loginRadio[0].checked) {
        loginForm.classList.remove("hide");
        signupForm.classList.add("hide");
    }
})

loginRadio[1].addEventListener("click", e => {
    if (loginRadio[1].checked) {
        loginForm.classList.add("hide");
        signupForm.classList.remove("hide");
    }
})