// createElement()
const h1 = document.createElement('h1');
const body = document.body;
h1.textContent = 'Good Bye';
body.appendChild(h1);

// appendChild()
const ul = document.querySelector('ul');
const newLi = document.createElement('li');
newLi.innerText = 'Im next li tag';
ul.appendChild(newLi);

// insertBefore(what, where)
const firstLi = document.querySelector("li");
ul.insertBefore(newLi, firstLi);

/* insertAdjacentElement(
    'beforebegin',
    'afterbegin',
    'beforeend',
    'afterend',
    element
)
*/
const firstParagraph =document.querySelector('p');
const i = document.createElement('i');
i.innerText = 'Im Italics';
i.style.color = 'skyblue';
firstParagraph.insertAdjacentElement('beforebegin', i);
firstParagraph.insertAdjacentElement('afterbegin', i);
firstParagraph.insertAdjacentElement('beforeend', i);
firstParagraph.insertAdjacentElement('afterend', i);

// append()
let section = document.querySelector('section');
section.append(i, firstLi);

// prepend
let newList = document.querySelector('.new-list');
let a = document.createElement('a');
a.textContent = 'Petrus Handika';
a.href = 'https://www.google.com/';
newList.prepend(a);

// removeChild()
newList.removeChild(a);

// remove()
newList.remove();