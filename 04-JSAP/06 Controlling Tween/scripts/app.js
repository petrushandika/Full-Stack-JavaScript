const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const restart = document.querySelector('.restart');

const tween = gsap.to('.boxOne', {
    y: -200,
    duration: 1,
    backgroundColor: 'aliceBlue',
    yoyo: true,
    repeat: -1,
});

play.addEventListener('click', () => tween.play());
pause.addEventListener('click', () => tween.pause());
restart.addEventListener('click', () => tween.restart());