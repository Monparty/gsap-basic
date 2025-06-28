var tl = gsap.timeline()
var menu = document.querySelector("nav #menu")
var btnClose = document.querySelector("#full i")

tl.to("#full", {
    right: 0,
    duration: .4
})

tl.from("#full h4", {
    x: 150,
    duration: .4,
    stagger: .2,
    opacity: 0
})

tl.from("#full i", {
    duration: .5,
    opacity: 0
})

tl.pause()

menu.addEventListener("click", () => {
    tl.play()
})

btnClose.addEventListener("click", () => {
    tl.reverse()
})