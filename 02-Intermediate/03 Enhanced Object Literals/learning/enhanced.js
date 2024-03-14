user = (name, age, work) => {
    return {
        name,
        age,
        work,
        intro: () => {
            console.log(`Hello, My name is ${name}, I am ${age} years old & I am work ${work}`);
        }
    }
}
const person = user('petrus', 22, 'Programmer')
console.log(person.intro());