// For in loop
const person = {
    firstName: 'Ujang',
    lastName: 'Udin',
    university: 'Gunadarma University',
    major: 'Computer Science'
}

for (let user in person) {
    console.log(`${user}: ${person[user]}`);
}

const num = ['one', 'two', 'three', 'four', 'five'];
for (let index in num) {
    console.log(`${index}: ${num[index]}`);
}