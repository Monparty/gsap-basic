gsap.from("#box1", {
    x: 1000,
    duration: 2,
    delay: 1,
    rotate: 180,
    backgroundColor: 'blue',
    borderRadius: '50%',
    scale: 0.5,

    // ทำซ้ำ
    repeat: -1,
    yoyo: true
});

// gsap.to("#box2", {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate: 180,
//     backgroundColor: 'blue',
//     borderRadius: '50%',
//     scale: 0.5
// });
