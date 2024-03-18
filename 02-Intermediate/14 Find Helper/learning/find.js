// Find helper
const persons = [
    { name: 'Petrus', age: 22 },
    { name: 'Ujang', age: 40 },
    { name: 'Alex', age: 35 },
    { name: 'Dika', age: 15 },
    { name: 'Petrus', age: 21 },
];

const result = persons.find((person) => person.name === 'Petrus');
console.log(result);

const news = [
    { id: 1, topic: 'Good News' },
    { id: 2, topic: 'Crazy News' },
    { id: 3, topic: 'Bad News' },
    { id: 4, topic: 'Good News' },
];

const output = news.filter((newsItem) => newsItem.topic === 'Good News');
console.log(output);