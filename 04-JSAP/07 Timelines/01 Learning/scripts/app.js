/*
let tl = gsap.timeline();

tl.to('.boxOne', {
    duration: 2,
    scale: 0,
    opacity: 0,
    delay: 1,
})
    .to('.boxTwo', {
        duration: 2,
        x: -200,
    })
    .to('.boxThree', {
        duration: 2,
        x: -200,
        borderRadius: 0,
        rotate: 360,
    })
    .set('.boxOne', {
        x: 200,
    })
    .to('.boxOne', {
        duration: 2,
        scale: 1,
        opacity: 1,
    })
*/

// Refactor To Defaults
let tl = gsap.timeline({
    default: {
        duration: 1,
    },
});

tl.to('.boxOne', {
    scale: 0,
    opacity: 0,
    delay: 1,
})
    .to('.boxTwo', {
        x: -200,
    })
    .to('.boxThree', {
        x: -200,
        borderRadius: 0,
        rotate: 360,
    })
    .set('.boxOne', {
        x: 200,
    })
    .to('.boxOne', {
        duration: 2,
        scale: 1,
        opacity: 1,
    })