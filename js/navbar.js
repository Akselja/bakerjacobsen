const banner = document.querySelector("#banner");
const nav = document.querySelector("#nav");
const placeholder = document.querySelector(".navPlaceholder");
console.log(banner.clientHeight);

window.onscroll = e => {
    if (window.scrollY >= banner.clientHeight){
        nav.classList.add("navFixed");
        placeholder.classList.remove("hide")
    } else {
        nav.classList.remove("navFixed");
        placeholder.classList.add("hide");
    }
}