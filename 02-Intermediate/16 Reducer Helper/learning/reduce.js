// Reduce helper
const numbers = [1, 2, 3, 4, 5];

// Reduce like fibonnaci calculate
const sum = numbers.reduce((p, c) => {
    // console.log(`Previous: ${p}`);
    // console.log(`Current: ${c}`);
    return p + c;
}, 0);

console.log(sum);

const peoples = [
    {
        name: 'Jamal Udin',
        age: 31
    },
    {
        name: 'Petrus Handika',
        age: 22
    },
    {
        name: 'Dimas Anggara',
        age: 19
    },
    {
        name: 'Joshua Panjaitan',
        age: 25
    }
];

const resultPeoples = peoples.reduce((p, c) => (c.age > p ? c.age : p), 0);
console.log(resultPeoples);

const fruits = [
    'Apple',
    'Banana',
    'Orange',
    'Avocado',
    'Grape',
    'Peer',
    'Apple',
    'Avocado'
];

const resultFruits = fruits.reduce((frequencyMap, fruit) => {
    frequencyMap[fruit] = (frequencyMap[fruit] || 0 + 1);
    return frequencyMap;
}, {});
console.log(resultFruits);