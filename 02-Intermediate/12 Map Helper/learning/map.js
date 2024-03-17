// Map helper
const numbers = [1, 2, 3, 4, 5];
const number = numbers.map((num) => num * 2);
console.log(number);

const person = [
    {firstName: 'Petrus', lastName: 'Handika'},
    {firstName: 'Jamal', lastName: 'Udin'},
    {firstName: 'Ridwan', lastName: 'Kamal'},
];
const result = person.map((person) => {
    return [person.firstName, person.lastName];
});
console.log(result);