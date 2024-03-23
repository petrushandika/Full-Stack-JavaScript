// parentElement
const unorderline = document.querySelector('ul');
console.log(unorderline.parentElement);
console.log(unorderline.parentElement.parentElement);

// children
console.log(unorderline.children);
console.log(unorderline.children[0].textContent);
console.log(unorderline.children[1].textContent);
console.log(unorderline.children[2].textContent);
console.log(unorderline.children[3].textContent);

// nextElementSibling
const listOrder = document.querySelector('li');
console.log(listOrder.nextElementSibling);
console.log(listOrder.nextElementSibling.textContent = 'Kimak');

// previousElementSibling
const anotherList = document.querySelector('.fourth');
console.log(anotherList.previousElementSibling);