let person = {
    firstName: 'Petrus',
    lastName: 'Handika',
    age: 22,
    location: ['Bogor', 'Depok', 'Jakarta'],
    job: 'student'
}

// Dot Notation
console.log(person.firstName);
console.log(person.lastName);

// Bracket Notation
console.log(person['location']);
console.log(person['job']);

// Add Value On Object
person.email = 'petrushandikasinaga@gmail.com'
console.log(person);