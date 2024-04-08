// ES 5
function Animal(name) {
    this.name = name;
}

// Method shared among all animal instances
Animal.prototype.makeSound = function() {
    return "Unknown sound"
}

// Subclass cunstructor inheriting from Animal
function Dog(name) {
    Animal.call(this, name); // Call the superclass constructor
}

// Setup prototype chain for Dog to inherit form Animal
Dog.prototype = Object.create(Animal.prototype);

// Method specific to Dog
Dog.prototype.makeSound = function() {
    return "Woff!"
}

// Creating instances of the classes
const genericAnimal = new Animal("Generic Animal");
console.log(genericAnimal.name);
console.log(genericAnimal.makeSound());

// Superclass
class People {
    constructor(name) {
        this.name = name;
    }

    expression() {
        return "Unknown Expression"
    }
}

class Akbar extends People {
    constructor(name) {
        super(name)
    }

    expression() {
        return "Wow!"
    }
}

const people = new People("Akbar");
console.log(people.name);
console.log(people.expression());

const akbar = new Akbar("Jamal");
console.log(akbar.name);
console.log(akbar.expression());