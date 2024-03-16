// Array Destructuring
const foo = ['one', 'two'];
const [green, blue, red, yellow, gray] = foo;
console.log(green);

let a, b;
[a = 5, b = 10] = ['priority'];
console.log(a);
console.log(b);

// Array destructuring with function
function f() {
    return [1, 2];
}

let c, d;
[c, d] = f();
console.log(c);
console.log(d);

// Array destructuring with function ignoring value
function g() {
    return [10, 20, 30];
}

const [x, ,z] = g();
console.log(x);
console.log(z);

const [y] = g();
console.log(y);

// Assigning the rest of an array to a variable
const [j, ...k] = ['one', 'two', 'three', ['four'], 'five', 'six'];
console.log(j);
console.log(k);