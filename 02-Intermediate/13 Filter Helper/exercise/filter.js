/*
Filter helper exercise:
1. Iterate over "ages" array.
2. Print only adults, those whos age is greater than 18.
*/
const ages = [
    {name: 'Rahmat', age: 5},
    {name: 'Umar', age: 10},
    {name: 'Raihan', age: 15},
    {name: 'Khabib', age: 20},
    {name: 'Ujang', age: 25},
    {name: 'Ronald', age: 30}
];
const result = ages.filter((person) => person.age > 18);
if (result.length > 0) {
    result.forEach((person) => {
        console.log(person.name);
    })
} else {
    console.log('Nobody is over 18 years old.');
}

/*
Filter helper exercise:
1. Iterate over "words" array.
2. print only those words which lenght is greater then 6.
*/
const words = [
    'hello',
    'tahu',
    'balabala',
    'nasikfc',
    'sate',
    'kucing',
    'panggang',
    'mukidi'
];

function anyWord() {
    const output = words.filter((word) => word.length > 6);
    console.log(output);
}
anyWord();