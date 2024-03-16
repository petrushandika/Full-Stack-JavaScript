/*
Rename destructuring exercise:
1. Your task is to use object destructuring to extract the name, age, and country properties from the person object and assign them to separate variables named personName, personAge, and personCountry.
2. After extracting the properties, log each variables value to the console.
*/
const person = {
    name: 'Jordan',
    age: 22,
    country: 'Indonesia'
};
const { name: personName, age: personAge, country: personCountry} = person;
console.log(personName);
console.log(personAge);
console.log(personCountry);
