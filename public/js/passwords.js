const loginSwitch = document.querySelectorAll(".radios");

let loginSignupSwitch = 0;

if (loginRadio[0].checked) {
    loginSignupSwitch = 0;
} else {
    loginSignupSwitch = 1;
}

loginSwitch[0].addEventListener("click", e => {
    if (loginRadio[0].checked) {
        loginSignupSwitch = 0;
    }
})

loginSwitch[1].addEventListener("click", e => {
    if (loginRadio[1].checked) {
        loginSignupSwitch = 1;
    }
})