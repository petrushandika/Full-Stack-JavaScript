const num = {
    x: 21,
    y: 30,
    z: 25
};

const { x: any1, y: any2, z: any3} = num;
console.log(any1);
console.log(any2);
console.log(any3);

// Object destructuring with rest parameter
let {a, b, c, ...rest} = {
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    e: 'E',
    f: 'F',
    g: 'G'
}
console.log(a);
console.log(b);
console.log(c);
console.log(rest);