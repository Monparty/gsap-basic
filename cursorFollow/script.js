var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var boxImage = document.querySelector("#box-image")

main.addEventListener("mousemove", (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        duration: 1.5,
        ease: "back.out",
    })
})

boxImage.addEventListener("mousemove", (dets) => {
    cursor.innerHTML = 'See More'
    detsX = dets.x
    detsY = dets.y

    gsap.to(cursor, {
        scale: 2,
        opacity: .7,
        backgroundColor: `green`,
        // option
        // backgroundColor: `#${detsX * .5}`,
        // borderRadius: `${detsY}% ${detsX}% ${detsY}% ${detsX}%`
    })
})

boxImage.addEventListener("mouseleave", () => {
    cursor.innerHTML = ''
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "red",
        opacity: 1,
        borderRadius: "50%"
    })
})
