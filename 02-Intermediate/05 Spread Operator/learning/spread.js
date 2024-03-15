// Spread operator
function alphabeth(a, b , c, d) {
    console.log(`a : ${a}`);
    console.log(`b : ${b}`);
    console.log(`c : ${c}`);
    console.log(`d : ${d}`);
}
const color = ['red', 'blue', 'gray', 'orange'];
console.log(alphabeth(...color));

const value = [100, 200, 300, 400, 500];
console.log(...value);

const person = {
    name: 'Ujang',
    age: 22,
    address: 'Bogor'
}
const user = {...person, job: "Programmer"};
console.log(user);