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

let lia = document.querySelectorAll("a")

lia.forEach(a => {
    a.addEventListener("click", () => {
let deffaultCurrent = document.querySelector("#current")

        deffaultCurrent.id = ""
        a.id = "current"
    })
})

