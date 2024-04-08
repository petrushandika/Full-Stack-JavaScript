/*
Every javascript object has a anonymous property called prototype
Remember functions & arrays are also a object
that prototype will be the parent of that object, prototype property is object by itself, which have some special properties & methods

Every object is associated with another object.
The object (a) is associated with [[Prototype]] Object
- which means a object will inherit all properties of Object.prototype || [[Prototype]]

We can check the prototype of something in 3 ways:
- obj.__proto__
- obj.constructor.prototype
- Object.getPrototypeOf(a)

Checking the Prototype
const obj = {};
console.log(obj.__proto__.__proto__);

const arr = new Array();
console.log(arr.__proto__.__proto__.__proto__);

const str = new String();
console.log(str.__proto__.__proto__.__proto__);
*/

function Person(firstName, lastName, language) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.language = language
};

const call = new Person("Petrus", "Handika", "JavaScript");
console.log(call);
console.log(call.__proto__);
console.log(call.__proto__.__proto__);
console.log(call.__proto__.__proto__.__proto__);

// Changing the built-in method
console.log(Array.prototype);
Array.prototype.pop = function() {
    return `Pop It Up Baby`
}

const myArr = ["one", "two", "three"];
console.log(myArr.pop());

String.prototype.hello = function() {
    console.log(this);
    console.log(this.toUpperCase());
}

console.log("Hello and welcome".hello());