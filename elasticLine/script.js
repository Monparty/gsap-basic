var path = `M 0 200 Q 500 200 1900 200`
var finalPath = `M 0 200 Q 500 200 1900 200`
var string = document.querySelector("#string")

string.addEventListener("mousemove", (dets) => {
    path = `M 0 200 Q ${dets.x} ${dets.y} 1900 200`,
    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave", () => {
    gsap.to("svg path", {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.2)"
    })   
})