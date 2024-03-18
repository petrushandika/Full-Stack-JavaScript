// Every and some exercise:
let products = [
    { name: 'Checkers', category: 'Toys' },
    { name: 'Harry Potter', category: 'Books' },
    { name: 'iPhone', category: 'Electronics' },
    { name: 'Learn JavaScript', category: 'Books'},
];

const allProductsBooks = products.every((product) => product.category === 'Books');
const someProductsBooks = products.some((product) => product.category === 'Books');

console.log(allProductsBooks);
console.log(someProductsBooks);