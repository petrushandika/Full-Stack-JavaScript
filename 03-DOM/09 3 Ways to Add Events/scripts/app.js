// Bad Way
const secondButton = document.querySelector('.secondButton');
secondButton.onclick = () => {
    alert('This is Second button');
}

// Great way
const thirdButton = document.querySelector('.thirdButton');
thirdButton.addEventListener('click', () => {
    alert('This is Third button');
})

// Event (e) Object
const fourthButton = document.querySelector('.fourthButton');
fourthButton.addEventListener('click', (e) => {
    alert(e);
})