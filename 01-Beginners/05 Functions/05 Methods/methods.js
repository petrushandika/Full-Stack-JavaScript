function greet() {
    console.log(`Hello, My name is ${person.name}, I'm a ${person.age} Years Old, I'm living in ${person.address}`);
}

const person = {
    name: 'Ujang',
    age: 22,
    address: 'Jakarta',

}
greet()

// Function on Object
const user = {
    name : 'Udin',
    age: 22,
    address: 'Bogor',
    greet: function() {
        return `Hello, My name is ${user.name}, I'm a ${user.age} Years Old, I'm living in ${user.address}`;
    }
}
console.log(user.greet());