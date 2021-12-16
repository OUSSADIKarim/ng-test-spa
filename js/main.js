const menu = document.querySelector(".menu")
const menuBar = document.querySelector(".nav")
const close = document.querySelector(".close")

menu.addEventListener("click", () => {
    menuBar.classList.remove("hide")
    menuBar.classList.add("visible")
})

close.addEventListener("click", () => {
    menuBar.classList.add("hide")
})



let current = 0;

for (var i = 0; i < document.links.length; i++) {
    if (document.URL.includes(document.links[i].href)) {
        current = i;
    }
}
document.links[current].id = 'current';