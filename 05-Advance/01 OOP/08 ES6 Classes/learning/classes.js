/*
Classes are one of the features introduced in the ES6 version of JavaScript.
A class is a blueprint for the object. You can create an object from the class.

You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house.

Since many houses can be made from the same description, we can create many objects from a class.
*/

class Person {
    constructor(firstName, lastName, age) {
        // Instance Member
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.info = function() {
            return `Name: ${this.firstName} ${this.lastName}, Age: ${this.age}`
        }
    }

    // Prototype Member
    greet() {
        return `Hello There ${this.firstName} ${this.lastName}`
    }
}

// Inheritance
class Programmer extends Person {
    constructor(firstName, lastName, age, language, experience) {
        super(firstName, lastName, age);
        this.language = language;
        this.experience = experience;
        this.fullInfo = function() {
            return `Hello, my name is ${this.firstName} ${this.lastName}, Im ${this.age} years old, I have experience ${this.experience} year with ${this.language}`
        }
    }
}

// Instance Result
const call = new Person("Petrus", "Handika", 22);
console.log(call.info());
// Prototype Result
console.log(call.greet());
// Inheritance Result
const talk = new Programmer("John", "Doe", 22, "Golang", 1);
console.log(talk.greet());
console.log(talk.fullInfo());
