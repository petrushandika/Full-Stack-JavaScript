/*
Create a person object and store your name and age
Also create a method name (greetRegular) by using a regular function
Print this message `Hello, my name is ${this.name} and Im ${this.age} years old.`
Create one more method name (greetArrow) using arrow function
Print this message `Hello, my name is ${this.name} and Im ${this.age} years old.`
*/

let person = {
    name: 'Petrus',
    age: 22,
    greetRegular: function() {
        return `Hello, my name is ${this.name} and Im ${this.age} years old.`
    },
    greetArrow: () => `Hello, my name is ${this.name} and Im ${this.age} years old.`
}

let res = person.greetRegular();
console.log(res);
let res2 = person.greetArrow();
console.log(res2);