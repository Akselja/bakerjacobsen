const banner = document.querySelector("#banner");
const nav = document.querySelector("#nav");
const placeholder = document.querySelector(".navPlaceholder");
const cartNotif = document.querySelector(".cartNotification");
console.log(banner.clientHeight);

window.onscroll = e => {
    if (window.scrollY >= banner.clientHeight){
        nav.classList.add("navFixed");
        cartNotif.classList.remove("cartMainpageBanner");
        placeholder.classList.remove("hide");
    } else {
        nav.classList.remove("navFixed");
        cartNotif.classList.add("cartMainpageBanner");
        placeholder.classList.add("hide");
    }
}