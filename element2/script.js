// gsap.to("#box1", {
//     x: 2000,
//     duration: 1.5,
//     delay: 1,
//     rotate: 360
// })

// gsap.to("#box2", {
//     x: 1200,
//     duration: 1.5,
//     delay: 2,
//     backgroundColor: "#111",
// })

// gsap.to("#box3", {
//     x: 1200,
//     duration: 1.5,
//     delay: 3,
//     scale: 0.5,
//     backgroundColor: "#111",
//     borderRadius: "50%",
// })

// timeline ทำให้โค้ททำงานโดยไม่ต้องกำหนด delay
var tl = gsap.timeline()
tl.to("#box1", {
    x: 1200,
    duration: 1.5,
    // delay: .5,
    rotate: 360
})

tl.to("#box2", {
    x: 1200,
    duration: 1.5,
    // delay: 2,
    backgroundColor: "#111",
})

tl.to("#box3", {
    x: 1200,
    duration: 1.5,
    // delay: 3,
    scale: 0.5,
    backgroundColor: "#111",
    borderRadius: "50%",
})