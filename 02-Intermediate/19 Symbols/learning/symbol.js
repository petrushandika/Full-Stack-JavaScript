// Symbol
const symbolOne = Symbol('name');
const symbolTwo = Symbol('name');

const obj = {};
obj[symbolOne] = 'Value One';
obj[symbolTwo] = 'Value Two';

console.log(obj);

const symbolThree = Symbol('name');
const symbolFour = Symbol('name');

const person = {};
person.age = 22;
person['gender'] = 'male';
person['gender'] = 'female';
person[symbolThree] = 'Petrus';
person[symbolFour] = 'Handika';
console.log(person);