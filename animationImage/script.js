gsap.registerPlugin(ScrollTrigger);

let box_imgs = document.querySelectorAll('.box_img');

box_imgs.forEach((box_img) => {
    let img = box_img.querySelector('img');
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: box_img,
            toggleActions: "restart none none reset"
        }
    })

    tl.set(box_img, {
        autoAlpha: 1
    });

    tl.from(box_img, {
        duration: 1.5,
        xPercent: -100,
        ease: "Power2.out"
    })

    tl.from(img, {
        duration: 1.5,
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: "Power2.out"
    })
})