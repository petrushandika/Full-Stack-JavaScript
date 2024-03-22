/*
Symbol exercise:
1. Create a symbol provide a value of 'foo'
2. Check the type of that symbol
3. Create empty object
4. Store symbol as the property to that object
5. Iterate over symbol
*/
const sym = Symbol('foo');

console.log(typeof sym);

let obj = {};
obj[Symbol('foo')] = 'some value for foo';
console.log(obj);

const person = {};
person.age = 25;
person['Gender'] = 'male';
person['Gender'] = 'female';
person['foo'] = 'Alex';

console.log(person);