// gsap.from() In from method you don't have to specify the inital State, (it will figure out by itself)

gsap.from('.boxOne', {
    opacity: 0,
    y: 200,
    duration:3,
    yoyo: true,
    ease: 'linear',
    repeat: -1,
})

// gsap.fromTo() In fromTo method you HAVE to specify the default value, and also the new animation state (from where your animation should start and where should it end)
gsap.fromTo('.boxTwo', {
    y: 200,
    opacity:0,
},
{
    opacity: 1,
    y: -200,
    duration: 3,
    ease: 'linear',
    yoyo: true,
    repeat: -1,
})