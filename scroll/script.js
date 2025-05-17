gsap.from("#page1 > .box", {
    scale: 0,
    duration: 2,
    delay:1,
    rotate: 360,
})

gsap.from("#page2 > h1", {
    opacity: 0,
    duration: 2,
    x: 500,
    scrollTrigger: {
        trigger: "#page2 > h1",
        scroller: "body",
        markers: true,
        start: "top 90%"
    }
})

gsap.from("#page2 > h2", {
    opacity: 0,
    duration: 2,
    x: -500,
    scrollTrigger: {
        trigger: "#page2 > h2",
        scroller: "body",
        markers: true,
        start: "top 90%"
    }
})

gsap.from("#page3 > .box", {
    scale: 0,
    duration: 2,
    rotate: 360,
    borderRadius: "50%",
    scrollTrigger: {
        trigger: "#page3 > .box",
        scroller: "body",
        markers: true,
        start: "top 50%",
        // ทำให้ animation ทำงานตาม scroll
        scrub: 1,
        // ทำให้ animation ติดตาม scroll กำหนดความสูงจาก start: ""
        pin: true,
    }
})