// dropdown buttons
const dropdownbtn = document.querySelectorAll(".productDropdown");

// dropdown sections
const dropdown = document.querySelectorAll(".productSection");

console.log(dropdownbtn);
console.log(dropdown);

// dropdown functions
dropdownbtn[0].addEventListener("click", e => {
    console.log("1");
})

dropdownbtn[1].addEventListener("click", e => {
    console.log("2");
})

dropdownbtn[2].addEventListener("click", e => {
    console.log("3");
})

dropdownbtn[3].addEventListener("click", e => {
    console.log("4");
})