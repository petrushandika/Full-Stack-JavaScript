gsap.set('.box', {
    opacity: 0,
    background: 'yellow',
});

gsap.to('.box', {
    background: 'crimson',
    opacity: 1,
    duration: 3,
    y: 100,
    yoyo: true,
    repeat: -1,
});
