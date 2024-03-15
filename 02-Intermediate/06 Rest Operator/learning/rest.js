// Rest operator
function user(x, ...name){
    console.log(x);
    console.log(name);
}
user('Hello', 'Petrus', 'Handika', 'Programmer');

function person (firstName, lastName, ...hobbies) {
    console.log(firstName);
    console.log(lastName);
    console.log(hobbies);
}
person('Petrus', 'Handika', 'Basketball', 'Playing Guitar', 'Workout')