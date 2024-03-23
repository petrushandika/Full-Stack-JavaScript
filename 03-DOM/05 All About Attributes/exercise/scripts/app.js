// 1. Select the anchor tag
const anchor = document.querySelector('.twitter');
console.log(anchor.href);

// 2. use getAttribute(attrName) to check the attribute
const input = document.querySelector('input');
console.log(input.getAttribute('type'));

// 3. Select a udemy & set 'href' attribute
    // setAttribute(attrName, value)
const udemy = document.querySelector('.udemy');
udemy.setAttribute('href', 'https://www.udemy.com')