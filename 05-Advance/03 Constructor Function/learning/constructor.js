// Constructor functions in JavaScript are regular functions used with the new keyword to create and initialize objects with shared properties and methods. They act as blueprints for creating multiple instances of objects with the same structure and behavior.

// Constructor Function
function Person(firstName, lastName, programmingLanguage) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.programmingLanguage = programmingLanguage;
    this.info = function() {
        return(`Hello, my name is ${this.firstName} ${this.lastName} and i love ${this.programmingLanguage}`);
    };
};

/*
NEW KEYWORD:
1. First create empty object {}
2. Sets "this" to point to that object
3. We can omit the return statement using "new" keyword
*/

const createPerson = new Person('John', 'Doe', 'JavaScript');
console.log(createPerson);

const createAnother = new Person('Jamal', 'Udin', 'Golang');
console.log(createAnother.info());