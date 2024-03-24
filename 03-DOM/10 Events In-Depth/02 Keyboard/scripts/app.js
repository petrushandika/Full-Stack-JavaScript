// keypress
const input = document.querySelector('input');
input.addEventListener('keypress', () => {
    console.log('Keypress');
});

// keyup
input.addEventListener('keyup', () => {
    console.log('Keyup');
});

// keydown
input.addEventListener('keydown', () => {
    console.log('Keydown');
});

// usefull properties and method
input.addEventListener('keypress', (e) => {
    console.log(e.charCode);
    console.log(e.code);
    console.log(e.ctrlKey);
    console.log(e.key);
    console.log(e.shiftKey);
})
