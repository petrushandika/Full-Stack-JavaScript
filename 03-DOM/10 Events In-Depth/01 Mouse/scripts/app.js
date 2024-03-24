// click
let one = document.querySelector(".click");
one.addEventListener('click', () => {
    one.classList.toggle('red');
})

// contextmenu
let two = document.querySelector(".contextmenu");
two.addEventListener('contextmenu', () => {
    two.classList.toggle('blue');
})

// dblclick
let three = document.querySelector(".dblclick");
three.addEventListener('dblclick', () => {
    three.classList.toggle('teal')
})

// mousedown
let four = document.querySelector(".mousedown");
four.addEventListener('mousedown', () => {
    four.classList.toggle('steelblue');
})

// mouseenter
let five = document.querySelector(".mouseenter");
five.addEventListener('mouseenter', () => {
    five.classList.toggle('orange');
})

// mouseleave
let six = document.querySelector(".mouseleave");
six.addEventListener('mouseleave', () => {
    six.classList.toggle('purple');
})

// mousemove
let seven = document.querySelector(".mousemove");
seven.addEventListener('mousemove', () => {
    seven.classList.toggle('pink');
    seven.textContent = 'Hello';
})

// mouseout
let eight = document.querySelector(".mouseout");
eight.addEventListener('mouseout', () => {
    eight.classList.toggle('crimson')
})

// mouseover
let nine = document.querySelector(".mouseover");
nine.addEventListener('mouseover', () => {
    nine.classList.toggle('chocolate');
})

// mouseup
let ten = document.querySelector(".mouseup");
ten.addEventListener('mouseup', () => {
    ten.classList.toggle('aqua');
})