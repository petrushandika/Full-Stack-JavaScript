/*
Object destructuring exercise:
1. Your task is to use object destructuring to extract the name, age, and country properties from the person object.
2. After extractin the properties, log each variables value to the console.
*/
const user = {
    name: 'John',
    age: 99,
    country: 'Indonesia'
}
const { name, age, country } = user;
console.log(name, age, country);