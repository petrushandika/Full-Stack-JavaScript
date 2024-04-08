// Abstract class (providing a blueprint for subclasses)
class Animal {
    constructor(name) {
        this.name = name;
    }

    // Abstract method (to be implemented by subclasses)
    makeSound() {
        throw new Error("Method (makeSound) must be implemented")
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    // Implementing the abstract method
    makeSound() {
        return "Woff!"
    }
}

// Concrete subclass
class Cat extends Animal {
    constructor(name) {
        super(name);
    }

    makeSound() {
        return "Meow!"
    }
}

const dog = new Dog("Ujang");
console.log(dog.name);
console.log(dog.makeSound());

const cat = new Cat("Siti");
console.log(cat.name);
console.log(cat.makeSound());

// Definition
// In this example, we create a Counter constructor function, and inside it, we define a private variable count using the let keyword. The increment, decrement, and getCount functions are defined as public methods, accessible from outside the object.

// Since the private variable count is defined inside the Counter constructor function, it forms a closure. The public methods have access to this private variable due to the lexical scope of JavaScript closures.

// The key idea here is that the count variable is not directly accessible from outside the Counter object. The public methods increment, decrement, and getCount provide controlled access to the private variable, allowing us to modify or retrieve its value indirectly. This way, we achieve encapsulation by hiding the internal implementation details of the Counter object and exposing only the necessary interface for interacting with it.