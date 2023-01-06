// dropdown buttons
const dropdownbtn = document.querySelectorAll(".productDropdown");

// dropdown sections
const dropdown = document.querySelectorAll(".productSection");

console.log(dropdownbtn);
console.log(dropdown);

// dropdown functions
dropdownbtn[0].addEventListener("click", e => {
    console.log("1");
    dropdown[0].classList.toggle("prodSectionSelected");
    dropdownbtn[0].classList.toggle("dropdownSelected");

    // animates the dropdown arrow
    dropdownbtn[0].children[0].classList.toggle("arrowAnimated");
})

dropdownbtn[1].addEventListener("click", e => {
    console.log("2");
    dropdown[1].classList.toggle("prodSectionSelected");
    dropdownbtn[1].classList.toggle("dropdownSelected");

    // animates the dropdown arrow
    dropdownbtn[1].children[0].classList.toggle("arrowAnimated");
})

dropdownbtn[2].addEventListener("click", e => {
    console.log("3");
    dropdown[2].classList.toggle("prodSectionSelected");
    dropdownbtn[2].classList.toggle("dropdownSelected");

    // animates the dropdown arrow
    dropdownbtn[2].children[0].classList.toggle("arrowAnimated");
})

dropdownbtn[3].addEventListener("click", e => {
    console.log("4");
    dropdown[3].classList.toggle("prodSectionSelected");
    dropdownbtn[3].classList.toggle("dropdownSelected");

    // animates the dropdown arrow
    dropdownbtn[3].children[0].classList.toggle("arrowAnimated");
})