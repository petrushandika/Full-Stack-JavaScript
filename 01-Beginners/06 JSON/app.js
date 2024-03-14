const person = {
    name: 'Ujang',
    age: 22,
    job: 'Student',
    hobbies: ['Basketball', 'Music', 'Programming'],
    address: {
        province: 'West Java',
        city: 'Bogor',
        postalCode: 99999
    },
}

// JSON.stringify()
const jsonString = JSON.stringify(person);
console.log(jsonString);

// JSON.parse()
const jsonParse = JSON.parse(jsonString);
console.log(jsonParse);