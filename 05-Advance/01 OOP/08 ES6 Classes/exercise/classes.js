/*
1. Create a class name "Hero", properties (name, level)
2. Create greet method which will just greet
3. Create Instance of "hero" class
4. Create New class name "Mega", inherit properties from "hero" class & provide property of spell
5. Create instance of "Mega" class
*/
class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    greet() {
        return `Hello ${this.name}`
    }
}

const userOne = new Hero("Petrus", 99)
console.log(userOne.greet());

class Mega extends Hero {
    constructor(name, level, spell) {
        super(name, level);
        this.spell = spell;
        this.info = function() {
            return `Hello ${name}, your level is ${level} and u have spell ${spell}`
        }
    }
}

const userTwo = new Mega("John", 50, "Abrakadabra");
console.log(userTwo.greet());
console.log(userTwo.info());