// get the password inputs for both login & signup
const passLogin = document.querySelector("#PasswordLogin");
const passSignup = document.querySelector("#PasswordSignup");
const passMsg = document.querySelector(".passMsg");

// eventlistener that checks the password for weaknesses
passLogin.addEventListener("keyup", e => {
    const pass = e.originalTarget.value;
});

passSignup.addEventListener("keyup", e => {
    const pass = e.originalTarget.value;
    passCheck(pass)
}); 

// regex variable
const regex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,50}$/;

const passCheck = (password) => {
    if (regex.test(password)) {
        passMsg.textContent = "Passordet ditt er gyldig.";
        passMsg.classList.remove("passWrong");
        passMsg.classList.add("passRight");
    } else {
        passMsg.textContent = "Passordet ditt er ikke gyldig.";
        passMsg.classList.remove("passRight");
        passMsg.classList.add("passWrong");
    }
}