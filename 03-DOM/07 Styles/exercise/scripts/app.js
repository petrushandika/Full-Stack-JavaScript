const container =  document.querySelector('.container');
const h1 = document.querySelector('.heading');
const p = document.querySelector('.content');
const link = document.querySelector('.link');

// 1. Provide '400px' of height of container element
container.style.height = '400px';

// 2. Change the background color of container to 'teal'
h1.style.backgroundColor = 'teal';

// 3. Change the color of h1 to 'skyblue'
h1.style.color = 'skyblue';

// 4. Change the fontFamily of paragraph to 'sans-serif'
p.style.fontFamily = 'sans-serif';

// 5. Change the color of paragraph to 'white'
p.style.color = 'white';
p.style.backgroundColor = 'black';

// 6. Change the color of link to pink
link.style.textDecoration = 'none';
link.style.color = 'pink';
link.href = 'https://www.google.com';
