let tl = gsap.timeline({
    default: {
        opacity: 0,
        ease: 'linear',
        duration: 1,
    },
});

tl.fromTo('.sidebar', 
    {width: 0}, {
    opacity: 1,
    width: '30%',
});

tl.fromTo('.main-img', 
    {x: 0}, {
    opacity: 1,
    x: 110,
});

tl.fromTo('.content', 
    {x: 100}, {
    opacity: 1,
    x: 0,
    duration: 1,
    yoyo: true,
    repeat: -1,
});
